/**
 * amazon.js - Amazon JSON Schema处理工具
 * 功能：将Amazon JSON Schema转换为表单结构，以及处理表单数据
 */

// 创建全局对象供直接引用
;(function (global) {
  // 定义常量
  const DEFAULT_MARKETPLACE_ID = 'ATVPDKIKX0DER'
  const DEFAULT_LANGUAGE_TAG = 'en_US'

  // 定义对象
  global.amazonUtils = {
    /**
     * 转换JSON Schema为表单结构
     * @param {Object} schema - JSON Schema对象
     * @param {Array} requiredTopFields - 顶层必填字段列表,必填字段列表
     * @return {Object} 表单配置对象
     */
    transformJsonSchemaToForm: function (schema, requiredTopFields=[]) {
      // 基础配置
      const formConfig = {
        fields: [],
      };

      /**
       * 检查是否为引用字段(引用字段不参与表单渲染)
       * @param {Object} value - 字段值
       * @param {String} key - 字段键名
       * @return {Boolean} 是否为引用字段
       */
      const isRefField = function (value, key) {
        return (
          value.$ref ||
          key === "marketplace_id" ||
          key === "language_tag" ||
          value.default_ === DEFAULT_LANGUAGE_TAG ||
          value.default_ === DEFAULT_MARKETPLACE_ID
        );
      };

      /**
       * 检查是否为需要过滤的字段(过滤字段不参与表单渲染)
       * @param {String} key - 字段键名
       * @return {Boolean} 是否为需要过滤的字段
       */
      const isFilteredField = function (key) {
        // 需要过滤的字段列表
        const filteredFields = [
           // 基本信息
           "condition_type",    // 商品状态
           "brand",            // 品牌
           "item_name",        // 标题
           "product_description", // 描述
           "generic_keyword",  // 关键词
           "bullet_point",     // 卖点
 
           // 产品标识和关系
           "part_number",      // 部件号
           "parentage_level",  // 父子关系级别
           "child_parent_sku_relationship", // 父子SKU关系
           "variation_theme",  // 变体主题
           "supplier_declared_has_product_identifier_exemption", // 产品标识符豁免声明
           "externally_assigned_product_identifier", // 外部分配的产品标识符
 
           // 图片相关
           "main_product_image_locator",     // 主图
           "swatch_product_image_locator",   // 变体图
           "other_product_image_locator",    // 其他图片（基础）
 
           // 变体属性
          //  "color",            // 颜色
          //  "size",            // 尺寸
          //  "style",           // 样式
 
           // 价格
           "list_price",       // 标价
        ];

        // 检查是否为基本过滤字段
        if (filteredFields.includes(key)) {
          return true;
        }

        // 检查是否为other_product_image_locator或其带数字变体
        if (
          key === "other_product_image_locator" ||
          /^other_product_image_locator_\d+$/.test(key)
        ) {
          return true;
        }

        return false;
      };

      // 临时存储所有字段
      const requiredFields = [];
      const optionalFields = [];

      // 处理属性
      if (schema.properties) {
        let newRequiredTopFields = [...new Set(requiredTopFields.concat(schema.required || []))];
        Object.entries(schema.properties).forEach(function ([key, value]) {
          // 跳过隐藏字段和引用字段
          if (value.hidden || isRefField(value, key) || isFilteredField(key))
            return;

          // 基础字段信息
          const field = {
            key,
            label: value.tTitle || value.title || key,
            description: value.tDescription || value.description || "",
            required: newRequiredTopFields.includes(key) ? true : false,
            type: "input", // 默认为输入框
          };

          // 处理枚举值 - 转为选择框
          if (value.enum) {
            field.type = "select";
            field.options = value.enum.map(function (val) {
              return {
                value: val,
                label: val
              };
            });
          }

          // 处理数组类型
          if (value.type === "array") {
            field.isArray = true;

            // 处理数组项的属性
            if (value.items && value.items.properties) {
              field.children = [];

              /**
               * 处理嵌套的properties字段，递归到最底层并扁平化处理
               * 所有叶子节点都会被提升到最外层的children数组中
               * @param {Object} properties - 属性对象
               * @param {String} parentKey - 父级键名
               * @param {Array} targetArray - 目标数组
               * @param {Array} requiredFields - 必填字段列表
               * @param {Number} depth - 当前嵌套深度
               * @param {String} parentPath - 父级路径，用于生成层级标识
               * @param {Boolean} parentRequired - 父节点是否必填
               */
              const processProperties = function (
                properties,
                parentKey,
                targetArray,
                requiredFields = [],
                depth = 0,
                parentPath = "",
                parentRequired = false
              ) {
                // 为属性排序，确保渲染顺序稳定
                const sortedEntries = Object.entries(properties).sort((a, b) => {
                  // 同类型属性按名称排序
                  return a[0].localeCompare(b[0]);
                });

                for (const [propKey, propValue] of sortedEntries) {
                  // 跳过隐藏字段和引用字段
                  if (propValue.hidden || isRefField(propValue, propKey)) continue;

                  // 生成当前属性的路径
                  const currentPath = parentPath 
                    ? `${parentPath}.${propKey}` 
                    : propKey;
                    
                  // 检查属性是否为必填
                  // 如果父节点必填，则子节点也必填；否则检查当前节点是否在必填列表中
                  const isRequired = newRequiredTopFields.includes(key) && requiredFields.includes(propKey);

                  // 生成字段键名
                  const fieldKey = parentKey
                    ? `${parentKey}.${propKey}`
                    : propKey;
                  
                  // 生成有层次感的标签
                  let fieldLabel = propValue.tTitle || propValue.title || propKey;
                  
                  // 不再为深层嵌套的字段添加父级路径信息到标签中
                  // 仅使用当前字段的标题，保持简洁
                  
                  // 创建基础字段对象
                  const fieldObj = {
                    key: fieldKey,
                    label: fieldLabel,
                    description: propValue.tDescription || propValue.description || "",
                    required: isRequired,
                    type: "input",
                    // 添加路径和深度信息
                    _path: currentPath,
                    _depth: depth
                  };

                  // 处理maxlength属性
                  if (propValue.maxLength) {
                    fieldObj.maxLength = propValue.maxLength;
                  }

                  // 处理placeholder (example或examples)
                  if (propValue.example !== undefined) {
                    fieldObj.placeholder = propValue.example;
                  } else if (
                    propValue.examples &&
                    Array.isArray(propValue.examples) &&
                    propValue.examples.length > 0
                  ) {
                    fieldObj.placeholder = propValue.examples[0];
                  }

                  // 处理枚举值
                  if (propValue.enum) {
                    fieldObj.type = "select";
                    fieldObj.options = propValue.enum.map(function (
                      val,
                      index
                    ) {
                      return {
                        value: val,
                        label: propValue.enumNames
                          ? propValue.enumNames[index]
                          : val,
                      };
                    });
                  }

                  // 判断是否为叶子节点 - 检查是否有properties或items.properties
                  const hasNestedProperties = 
                    propValue.properties || 
                    (propValue.items && propValue.items.properties);

                  // 递归处理嵌套的properties - 扁平化处理
                  if (hasNestedProperties) {
                    // 如果有properties，处理这些属性
                    if (propValue.properties) {
                      processProperties(
                        propValue.properties,
                        fieldKey,
                        targetArray, // 直接使用外层传入的targetArray，实现扁平化
                        propValue.required || [],
                        depth + 1,
                        currentPath,
                        isRequired
                      );
                    }
                    
                    // 如果有items.properties，也需要处理这些属性
                    if (propValue.items && propValue.items.properties) {
                      processProperties(
                        propValue.items.properties,
                        `${fieldKey}.items`,
                        targetArray,
                        propValue.items.required || [],
                        depth + 1,
                        `${currentPath}.items`,
                        isRequired
                      );
                    }
                  } else {
                    // 没有嵌套properties，这是真正的叶子节点，直接添加到目标数组
                    targetArray.push(fieldObj);
                  }
                }
              };

              // 处理items.properties
              processProperties(
                value.items.properties,
                key,
                field.children,
                value.items.required || [],
                0,
                "",
                field.required
              );

              // 对目标数组进行排序：必填在前，非必填在后
              field.children.sort((a, b) => {
                if (a.required !== b.required) {
                  return a.required ? -1 : 1;
                }
                // 同等必填性的情况下，按深度和路径排序
                if (a._depth !== b._depth) {
                  return a._depth - b._depth;
                }
                return (a._path || '').localeCompare(b._path || '');
              });

              // 如果没有有效的子字段，则跳过该数组字段
              if (field.children.length === 0) {
                return;
              }
            }
          }

          // 将字段添加到对应的数组中
          if (field.required) {
            requiredFields.push(field);
          } else {
            optionalFields.push(field);
          }
        });
      }

      // 合并必填和非必填字段
      formConfig.fields = [...requiredFields, ...optionalFields];
      console.log("处理后的表单配置formConfig", formConfig);
      return formConfig;
    },

    /**
     * 处理表单数据为Amazon API所需格式
     * @param {Object} formData - 表单数据对象
     * @return {Object} 处理后的数据对象
     */
    processFormData: function (formData) {
      const result = {}

      // 预处理：收集所有具有相同前缀的字段
      const prefixMap = {}

      // 第一步：收集所有字段的前缀信息
      Object.keys(formData).forEach(key => {
        if (key.includes('.')) {
          const [parent, child] = key.split('.')

          // 检查是否包含下划线
          if (child.includes('_')) {
            // 提取前缀（下划线前的部分）
            const prefix = child.split('_')[0]

            // 将字段归类到对应前缀组
            if (!prefixMap[parent]) {
              prefixMap[parent] = {}
            }

            if (!prefixMap[parent][prefix]) {
              prefixMap[parent][prefix] = []
            }

            prefixMap[parent][prefix].push(child)
          }
        }
      })

      // 处理所有字段
      Object.entries(formData).forEach(function ([key, value]) {
        if (key.includes('.')) {
          // 处理嵌套属性
          const [parent, child] = key.split('.')

          // 初始化父级对象
          if (!result[parent]) {
            result[parent] = [
              {
                // 添加默认的 marketplace_id 和 language_tag
                marketplace_id: DEFAULT_MARKETPLACE_ID,
                language_tag: DEFAULT_LANGUAGE_TAG
              }
            ]
          }

          // 检查是否为带下划线的字段
          if (child.includes('_')) {
            const parts = child.split('_')
            const prefix = parts[0]
            const suffix = parts[1]

            // 检查是否需要进行嵌套处理
            // 判断条件：同一个前缀下有多个字段（至少有一对value和unit）
            const hasPrefixGroup =
              prefixMap[parent] &&
              prefixMap[parent][prefix] &&
              prefixMap[parent][prefix].length >= 2

            if (hasPrefixGroup && (suffix === 'value' || suffix === 'unit')) {
              // 创建嵌套结构
              if (!result[parent][0][prefix]) {
                result[parent][0][prefix] = {}
              }

              // 设置value或unit值
              result[parent][0][prefix][suffix] =
                suffix === 'value' ? this.tryParseNumber(value) : value
            } else {
              // 不需要嵌套的字段，直接添加
              result[parent][0][child] = value
            }
          } else {
            // 普通字段，直接添加
            result[parent][0][child] = value
          }
        } else {
          // 对于非嵌套属性，检查是否需要包装成数组
          if (key === 'brand' || key === 'item_name') {
            result[key] = [
              {
                value: value,
                marketplace_id: DEFAULT_MARKETPLACE_ID,
                language_tag: DEFAULT_LANGUAGE_TAG
              }
            ]
          } else {
            result[key] = value
          }
        }
      })

      return result
    },

    /**
     * 尝试将字符串转换为数字，如果转换失败则返回原字符串
     * @param {String} valueStr - 要转换的字符串
     * @return {Number|String} 转换结果
     */
    tryParseNumber: function (valueStr) {
      if (valueStr === null || valueStr === undefined || valueStr === '') {
        return valueStr
      }

      const num = Number(valueStr)
      return isNaN(num) ? valueStr : num
    },
          /**
     * 解析亚马逊数据字符串，支持嵌套结构并处理为表单可用格式
     * @param {String} dataString - 以#,#分隔的亚马逊数据字符串
     * @return {Object} 解析后的表单数据对象
     */
    parseAmazonData: function (dataString) {
      if (!dataString || typeof dataString !== 'string') {
        console.error('数据字符串无效')
        return {}
      }

      // 分割字符串获取键值对
      const pairs = dataString.split('#,#')
      const parsedData = {}
      const formData = {}

      // 解析每个键值对
      pairs.forEach(pair => {
        try {
          // 提取键和值
          const colonIndex = pair.indexOf(':')
          if (colonIndex === -1) return

          const key = pair.substring(0, colonIndex)
          let valueStr = pair.substring(colonIndex + 1)

          // 解析值部分（JSON格式）
          const value = JSON.parse(valueStr)
          parsedData[key] = value
        } catch (error) {
          console.error('解析键值对时出错:', error, pair)
        }
      })

      // 处理解析后的数据为表单可用格式
      Object.entries(parsedData).forEach(([key, value]) => {
        // 处理数组数据
        if (Array.isArray(value) && value.length > 0) {
          const firstItem = value[0]

          // 判断是否为包含value的简单对象
          const isSimpleValueObject = 
            firstItem.value !== undefined && 
            Object.keys(firstItem).filter(k => 
              k !== 'value' && 
              k !== 'marketplace_id' && 
              k !== 'language_tag'
            ).length === 0;
            
          if (isSimpleValueObject) {
            // 普通键值对（如brand、item_name等）
            formData[key] = firstItem.value
          } else {
            // 处理嵌套对象和包含多个属性的对象
            Object.entries(firstItem).forEach(([nestedKey, nestedValue]) => {
              // 过滤marketplace_id和language_tag
              if (
                nestedKey === 'marketplace_id' ||
                nestedKey === 'language_tag'
              ) {
                return
              }
              
              // 处理普通字段（如type、value等）
              if (typeof nestedValue !== 'object' || nestedValue === null) {
                formData[`${key}.${nestedKey}`] = nestedValue
              } 
              // 处理嵌套对象（如dimension相关字段）
              else {
                // 对象包含value和unit属性
                if (nestedValue.value !== undefined) {
                  formData[`${key}.${nestedKey}_value`] = nestedValue.value
                }
                if (nestedValue.unit !== undefined) {
                  formData[`${key}.${nestedKey}_unit`] = nestedValue.unit
                }
                
                // 处理可能存在的其他属性
                Object.entries(nestedValue).forEach(([subKey, subValue]) => {
                  if (subKey !== 'value' && subKey !== 'unit') {
                    formData[`${key}.${nestedKey}_${subKey}`] = subValue
                  }
                })
              }
            })
          }
        } else if (typeof value === 'object' && value !== null) {
          // 处理非数组的对象
          if (value.value !== undefined) {
            formData[key] = value.value
            
            // 处理对象中的其他属性
            Object.entries(value).forEach(([subKey, subValue]) => {
              if (subKey !== 'value' && subKey !== 'marketplace_id' && subKey !== 'language_tag') {
                formData[`${key}.${subKey}`] = subValue
              }
            })
          } else {
            // 对象没有value属性，保持原样
            formData[key] = value
          }
        } else {
          // 处理简单值
          formData[key] = value
        }
      })
      
      return formData
    },
    /**
     * 返回properties中单个字段的数据
     * @param {Object} properties - 属性对象
     * @param {String} key - 字段键名
     * @param {String} value - 字段值
     * @return {Object} 单个字段的数据
     */
    processSingleField: function (schemaJson, key) {
      let processEnumValues = propertyObj => {
        if (!propertyObj.enum) return []

        const enumArr = propertyObj.enum
        if (!propertyObj.enumNames || !propertyObj.enumNames.length)
          return enumArr

        const enumNames = propertyObj.enumNames
        if (JSON.stringify(enumNames) === JSON.stringify(enumArr))
          return enumArr

        return enumNames.map((name, i) => ({
          name: name,
          value: enumArr[i]
        }))
      }
      let obj = schemaJson[key]
      // 添加对obj是否存在的检查
      if (!obj || !obj.items) return []

      const items = obj.items
      let propertyObj

      if (items.required && items.required.length > 0) {
        propertyObj = items.properties[items.required[0]]
      } else {
        const itemsKeys = Object.keys(items.properties)
        if (!itemsKeys.length) return []
        propertyObj = items.properties[itemsKeys[0]]
      }

      return processEnumValues(propertyObj)
    }
  }

  // 为兼容性考虑，也直接暴露方法
  global.transformJsonSchemaToForm =
    global.amazonUtils.transformJsonSchemaToForm
  global.processFormData = global.amazonUtils.processFormData
  global.parseAmazonData = global.amazonUtils.parseAmazonData
  global.processSingleField = global.amazonUtils.processSingleField
  global.tryParseNumber = global.amazonUtils.tryParseNumber
})(typeof window !== 'undefined' ? window : this)
