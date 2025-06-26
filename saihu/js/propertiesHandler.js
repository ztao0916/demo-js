/**
 * Properties Handler for Amazon Product Schema
 * 用于处理亚马逊产品Schema中的properties
 */

(function(root, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else {
        // Browser globals
        root.PropertiesHandler = factory();
    }
}(this, function() {
    'use strict';

    // 属性关系映射
    const PROPERTY_RELATIONS = {
        age_gender_category: ["AGE_GENDER_CATEGORY"],
        style: [
            "COLOR_NAME/STYLE_NAME/CONFIGURATION",
            "MODEL/STYLE_NAME",
            "STYLE_NAME/SIZE_NAME/CONFIGURATION"
            // ... 其他组合关系
        ],
        material: [
            "SIZE_NAME/MATERIAL_TYPE",
            "STYLE_NAME/MATERIAL_TYPE",
            "MATERIAL_TYPE/STYLE_NAME"
            // ... 其他组合关系
        ],
        // ... 其他属性关系
    };

    class PropertiesHandler {
        constructor(schema) {
            this.schema = schema;
            this.flattenedProps = {};
            this.processedProps = {};
            this.requiredFields = new Set(schema.required || []);
            this.requiredSubFields = new Map();
        }

        /**
         * 处理必填字段
         * @param {String} parentKey - 父字段键名
         * @param {Array} required - 必填字段数组
         */
        processRequiredFields(parentKey, required) {
            if (Array.isArray(required) && required.length > 0) {
                this.requiredSubFields.set(parentKey, new Set(required));
            }
        }

        /**
         * 检查字段是否必填
         * @param {String} key - 字段完整路径
         * @returns {Boolean} 是否必填
         */
        isFieldRequired(key) {
            // 分解字段路径
            const parts = key.split('.');
            const baseField = parts[0];
            const subField = parts[parts.length - 1];

            // 检查顶层必填
            if (this.requiredFields.has(baseField)) {
                return true;
            }

            // 检查子字段必填
            const parentKey = parts.slice(0, -1).join('.');
            const subFieldRequired = this.requiredSubFields.get(parentKey);
            if (subFieldRequired && subFieldRequired.has(subField)) {
                return true;
            }

            return false;
        }

        /**
         * 扁平化处理属性
         * @param {Object} properties - 原始属性对象
         * @param {String} prefix - 属性前缀
         */
        flattenProperties(properties, prefix = '') {
            for (const key in properties) {
                const fullPath = prefix ? `${prefix}.${key}` : key;
                
                if (properties[key].items && properties[key].items.properties) {
                    // 处理数组类型的属性的必填字段
                    if (properties[key].items.required) {
                        this.processRequiredFields(
                            `${key}.0`,
                            properties[key].items.required
                        );
                    }
                    
                    // 继续处理子属性
                    this.flattenProperties(
                        properties[key].items.properties,
                        `${key}.0`
                    );
                } else {
                    // 存储扁平化的属性
                    this.flattenedProps[fullPath] = properties[key];
                }
            }
        }

        /**
         * 扩展属性元数据
         * @param {String} key - 属性键名
         * @param {Object} value - 属性值对象
         */
        extendMetadata(key, value) {
            return {
                title: value.title || key,
                description: value.description || '',
                tTitle: this.getChineseTitle(key),
                tDescription: this.getChineseDescription(value.description),
                editable: value.editable !== false,
                examples: value.examples || [],
                default_: value.default || undefined,
                required: this.isFieldRequired(key)
            };
        }

        /**
         * 获取中文标题
         * @param {String} key - 属性键名
         */
        getChineseTitle(key) {
            const titleMap = {
                item_name: '商品名称',
                brand: '品牌',
                model_number: '型号',
                color: '颜色',
                size: '尺寸',
                material: '材质',
                // ... 其他映射
            };
            return titleMap[key] || key;
        }

        /**
         * 获取中文描述
         * @param {String} description - 英文描述
         */
        getChineseDescription(description) {
            // 这里可以接入翻译服务
            // 当前仅返回简单说明
            return description ? `请提供${description}` : '';
        }

        /**
         * 处理验证规则
         * @param {Object} property - 属性对象
         */
        processValidationRules(property) {
            const rules = {};

            // 基本类型验证
            if (property.type) rules.type = property.type;
            
            // 字符串相关验证
            if (property.minLength) rules.minLength = property.minLength;
            if (property.maxLength) rules.maxLength = property.maxLength;
            if (property.pattern) rules.pattern = property.pattern;
            
            // 枚举验证
            if (property.enum) {
                rules.enum = property.enum;
                if (property.enumNames) {
                    rules.enumNames = property.enumNames;
                }
            }
            
            // 数值范围验证
            if (property.minimum) rules.minimum = property.minimum;
            if (property.maximum) rules.maximum = property.maximum;
            
            // 数组验证
            if (property.minItems) rules.minItems = property.minItems;
            if (property.maxItems) rules.maxItems = property.maxItems;
            if (property.uniqueItems) rules.uniqueItems = property.uniqueItems;
            
            // 自定义验证
            if (property.format) rules.format = property.format;
            if (property.maxUtf8ByteLength) rules.maxUtf8ByteLength = property.maxUtf8ByteLength;

            return rules;
        }

        /**
         * 处理所有属性
         */
        process() {
            // 1. 扁平化处理
            this.flattenProperties(this.schema.properties);

            // 2. 处理每个扁平化的属性
            for (const [key, value] of Object.entries(this.flattenedProps)) {
                this.processedProps[key] = {
                    ...this.extendMetadata(key, value),
                    ...this.processValidationRules(value)
                };
            }

            return this.processedProps;
        }

        /**
         * 获取属性之间的关系
         * @param {String} propertyName - 属性名
         */
        getPropertyRelations(propertyName) {
            return PROPERTY_RELATIONS[propertyName] || [];
        }

        /**
         * 验证属性值
         * @param {String} propertyName - 属性名
         * @param {*} value - 属性值
         */
        validateProperty(propertyName, value) {
            const property = this.processedProps[propertyName];
            if (!property) return false;

            // 必填检查
            if (property.required && (value === undefined || value === null || value === '')) {
                return false;
            }

            const rules = this.processValidationRules(property);
            
            // 类型检查
            if (rules.type && typeof value !== rules.type) return false;
            
            // 字符串验证
            if (typeof value === 'string') {
                if (rules.minLength && value.length < rules.minLength) return false;
                if (rules.maxLength && value.length > rules.maxLength) return false;
                if (rules.pattern && !new RegExp(rules.pattern).test(value)) return false;
                if (rules.maxUtf8ByteLength) {
                    const byteLength = new TextEncoder().encode(value).length;
                    if (byteLength > rules.maxUtf8ByteLength) return false;
                }
            }

            // 枚举值检查
            if (rules.enum && !rules.enum.includes(value)) return false;

            // 数值范围检查
            if (typeof value === 'number') {
                if (rules.minimum && value < rules.minimum) return false;
                if (rules.maximum && value > rules.maximum) return false;
            }

            // 数组验证
            if (Array.isArray(value)) {
                if (rules.minItems && value.length < rules.minItems) return false;
                if (rules.maxItems && value.length > rules.maxItems) return false;
                if (rules.uniqueItems && new Set(value).size !== value.length) return false;
            }

            return true;
        }

        /**
         * 获取所有必填字段
         * @returns {Object} 必填字段信息
         */
        getRequiredFields() {
            return {
                topLevel: Array.from(this.requiredFields),
                subFields: Object.fromEntries(
                    Array.from(this.requiredSubFields.entries()).map(
                        ([key, value]) => [key, Array.from(value)]
                    )
                )
            };
        }
    }

    return PropertiesHandler;
})); 