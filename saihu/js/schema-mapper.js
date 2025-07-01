/**
 * JSON Schema 到 JavaScript 字段映射转换器 - 浏览器版本
 * 基于 dxm.json 到 dxm.js 的映射规则实现
 */

class SchemaToFieldMapper {
  constructor() {
    this.fieldMappings = [];
    this.defs = {};
  }

  /**
   * 主函数：将 JSON Schema 转换为字段映射
   * @param {Object} schema - JSON Schema 对象
   * @returns {Array} 字段映射数组
   */
  schemaToFieldMapping(schema) {
    this.fieldMappings = [];
    this.defs = schema.$defs || {};
    
    const rootRequired = schema.required || [];
    const properties = schema.properties || {};
    
    // 处理所有根级别字段
    Object.keys(properties).forEach(fieldName => {
      const fieldSchema = properties[fieldName];
      const isRequired = rootRequired.includes(fieldName);
      
      this.processField(fieldName, fieldSchema, isRequired);
    });
    
    return this.fieldMappings;
  }

  /**
   * 处理单个字段
   * @param {string} fieldName - 字段名
   * @param {Object} fieldSchema - 字段 Schema
   * @param {boolean} isRequired - 是否必填
   * @param {string} basePath - 基础路径
   */
  processField(fieldName, fieldSchema, isRequired, basePath = '') {
    const fullPath = basePath ? `${basePath}.${fieldName}` : fieldName;

    // 添加根字段映射
    const rootMapping = {
      name: fullPath,
      fieldType: this.getFieldType(fieldSchema)
    };

    // 判断必填逻辑：required存在但minLength不存在时不设为必填
    if (isRequired && (fieldSchema.minLength !== undefined)) {
      rootMapping.required = true; // 对应 JS 中的 !0
    }

    // 添加 title 字段
    if (fieldSchema.title) {
      rootMapping.title = fieldSchema.title;
    }

    // 添加 description 字段
    if (fieldSchema.description) {
      rootMapping.description = fieldSchema.description;
    }

    this.fieldMappings.push(rootMapping);

    // 处理数组类型字段
    if (fieldSchema.type === 'array' && fieldSchema.items) {
      this.processArrayField(fullPath, fieldSchema, isRequired);
    }
  }

  /**
   * 处理数组类型字段
   * @param {string} fieldName - 字段名
   * @param {Object} fieldSchema - 字段 Schema
   * @param {boolean} parentRequired - 父级是否必填
   */
  processArrayField(fieldName, fieldSchema, parentRequired) {
    const items = fieldSchema.items;
    const arrayElementPath = `${fieldName}.0`;

    // 添加数组元素映射 (fieldName.0)
    const arrayElementMapping = {
      name: arrayElementPath,
      fieldType: this.getFieldType(items),
      maxItems: 1
    };

    // 数组元素继承父级必填状态或有 minItems 约束，但需要有minLength约束
    if ((parentRequired && items.minLength !== undefined) || fieldSchema.minItems > 0) {
      arrayElementMapping.required = true;
    }

    // 添加 items 的 title 和 description
    if (items.title) {
      arrayElementMapping.title = items.title;
    }

    if (items.description) {
      arrayElementMapping.description = items.description;
    }

    this.fieldMappings.push(arrayElementMapping);

    // 处理对象类型的数组元素
    if (items.type === 'object' && items.properties) {
      this.processObjectProperties(arrayElementPath, items.properties, items.required || []);
    }
  }

  /**
   * 处理对象属性
   * @param {string} basePath - 基础路径
   * @param {Object} properties - 属性定义
   * @param {Array} requiredFields - 必填字段数组
   */
  processObjectProperties(basePath, properties, requiredFields) {
    Object.keys(properties).forEach(propName => {
      const propSchema = properties[propName];
      const isRequired = requiredFields.includes(propName);
      const propPath = `${basePath}.${propName}`;

      // 创建属性映射
      const propMapping = {
        name: propPath,
        fieldType: this.getFieldType(propSchema),
        maxItems: 1
      };

      // 判断必填逻辑：required存在但minLength不存在时不设为必填
      if (isRequired && propSchema.minLength !== undefined) {
        propMapping.required = true;
      }

      // 添加 title 和 description
      if (propSchema.title) {
        propMapping.title = propSchema.title;
      }

      if (propSchema.description) {
        propMapping.description = propSchema.description;
      }

      // 添加约束条件
      Object.assign(propMapping, this.mapConstraints(propSchema));

      // 处理引用字段
      if (propSchema.$ref) {
        Object.assign(propMapping, this.resolveRef(propSchema.$ref));
      }

      // 处理枚举值
      if (propSchema.enum) {
        propMapping.options = propSchema.enum;
        if (propSchema.enumNames) {
          propMapping.optionLabels = {};
          propSchema.enum.forEach((value, index) => {
            propMapping.optionLabels[value] = propSchema.enumNames[index];
          });
        }
      }

      this.fieldMappings.push(propMapping);
    });
  }

  /**
   * 映射约束条件
   * @param {Object} schema - 字段 Schema
   * @returns {Object} 约束条件映射
   */
  mapConstraints(schema) {
    const constraints = {};
    
    if (schema.minLength !== undefined) {
      constraints.minLength = schema.minLength;
    }
    
    if (schema.maxLength !== undefined) {
      constraints.maxLength = schema.maxLength;
    }
    
    if (schema.maxUtf8ByteLength !== undefined) {
      constraints.maxUtf8ByteLength = schema.maxUtf8ByteLength;
    }
    
    return constraints;
  }

  /**
   * 解析 $ref 引用
   * @param {string} ref - 引用路径
   * @returns {Object} 解析后的配置
   */
  resolveRef(ref) {
    const config = {};
    
    // 处理常见的引用类型
    if (ref === '#/$defs/language_tag') {
      config.tipsOptions = ['en_US'];
      config.optionLabels = {
        'en_US': 'English (United States)'
      };
    } else if (ref === '#/$defs/marketplace_id') {
      config.tipsOptions = ['ATVPDKIKX0DER'];
      config.optionLabels = {
        'ATVPDKIKX0DER': 'Amazon.com'
      };
    }
    
    return config;
  }

  /**
   * 获取字段类型
   * @param {Object} schema - 字段 Schema
   * @returns {string} 字段类型
   */
  getFieldType(schema) {
    // 简化处理，大部分字段都是 string 类型
    return 'string';
  }

  /**
   * 格式化输出为类似 be 函数的调用格式
   * @param {Array} mappings - 字段映射数组
   * @returns {string} 格式化的 JavaScript 代码
   */
  formatAsBeFunction(mappings) {
    const lines = mappings.map(mapping => {
      const config = { ...mapping };
      delete config.name;
      
      // 转换 required: true 为 required: !0
      if (config.required === true) {
        config.required = '!0';
      }
      
      const configStr = JSON.stringify(config, null, 2)
        .replace(/"required":\s*"!0"/, '"required": !0')
        .replace(/\n/g, '\n    ');
      
      return `  i({\n    name: "${mapping.name}",\n    ${configStr.slice(2, -2)}\n  })`;
    });
    
    return `const be = (e, i) => {\n${lines.join(',\n')}\n};`;
  }
}

// 浏览器环境导出
window.SchemaToFieldMapper = SchemaToFieldMapper;

// 便捷函数
function convertSchemaToFields(schema) {
  const mapper = new SchemaToFieldMapper();
  return mapper.schemaToFieldMapping(schema);
}

function convertSchemaToBeFunction(schema) {
  const mapper = new SchemaToFieldMapper();
  const mappings = mapper.schemaToFieldMapping(schema);
  return mapper.formatAsBeFunction(mappings);
}

// 导出便捷函数到全局
window.convertSchemaToFields = convertSchemaToFields;
window.convertSchemaToBeFunction = convertSchemaToBeFunction;
