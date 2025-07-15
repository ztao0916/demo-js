/**
 * amazon.js - Amazon JSON Schema处理工具
 * 功能：将Amazon JSON Schema转换为表单结构，以及处理表单数据
 */

// 创建全局对象供直接引用
(function (global) {
  // 定义常量
  const DEFAULT_MARKETPLACE_ID = "ATVPDKIKX0DER";
  const DEFAULT_LANGUAGE_TAG = "en_US";

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
                    // 注意：跳过items层级，直接使用当前字段键名和路径
                    if (propValue.items && propValue.items.properties) {
                      processProperties(
                        propValue.items.properties,
                        fieldKey, // 不添加.items，直接使用当前字段键名
                        targetArray,
                        propValue.items.required || [],
                        depth + 1,
                        currentPath, // 不添加.items，直接使用当前路径
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
      for(let i = 0; i < formConfig.fields.length; i++) {
        let item = formConfig.fields[i]
        if(item.key === 'fulfillment_availability') {
          //遍历item.children,如果item.children中的元素的label == Quantity,则将该项的required设置为true
          for(let j = 0; j < item.children.length; j++) {
            if(item.children[j].label === 'Quantity') {
              item.children[j].required = true
            }
          }
        }
        if(item.key === 'purchasable_offer') {
          //遍历item.children,如果item.children中的元素的label == Quantity,则将该项的required设置为true
          for(let j = 0; j < item.children.length; j++) {
            if(item.children[j].label === 'Your Price') {
              item.children[j].required = true
            }else{
              item.children[j].required = false
            }
          }
        }

      }
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

      // 处理所有字段
      Object.entries(formData).forEach(function([key, value]) {
        if (key.includes('.')) {
          // 处理嵌套属性
          amazonUtils.setNestedValue(result, key, value)
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
     * 解析点分隔的路径为数组
     * @param {String} path - 点分隔的路径，如 "fulfillment_availability.quantity"
     * @return {Array} 路径数组，如 ["fulfillment_availability", "quantity"]
     */
    parseNestedPath: function(path) {
      return path.split('.')
    },

    /**
     * 在嵌套对象中设置值，支持任意深度嵌套
     * @param {Object} obj - 目标对象
     * @param {String} path - 点分隔的路径
     * @param {*} value - 要设置的值
     */
    setNestedValue: function(obj, path, value) {
      const pathArray = this.parseNestedPath(path)
      const topLevelKey = pathArray[0]

      // 确保顶级字段存在并且是数组格式
      if (!obj[topLevelKey]) {
        obj[topLevelKey] = [
          {
            marketplace_id: DEFAULT_MARKETPLACE_ID,
            language_tag: DEFAULT_LANGUAGE_TAG
          }
        ]
      }

      // 获取数组中的第一个对象
      const targetObj = obj[topLevelKey][0]

      // 如果只有两层路径，直接设置值
      if (pathArray.length === 2) {
        const finalKey = pathArray[1]
        targetObj[finalKey] = this.tryParseNumber(value)
        return
      }

      // 处理多层嵌套路径
      let current = targetObj
      for (let i = 1; i < pathArray.length - 1; i++) {
        const key = pathArray[i]
        if (!current[key]) {
          current[key] = {}
        }
        current = current[key]
      }

      // 设置最终值
      const finalKey = pathArray[pathArray.length - 1]
      current[finalKey] = this.tryParseNumber(value)
    },
    
    /**
     * 尝试将字符串转换为数字，如果转换失败则返回原字符串
     * @param {String} valueStr - 要转换的字符串
     * @return {Number|String} 转换结果
     */
    tryParseNumber: function(valueStr) {
      if (valueStr === null || valueStr === undefined || valueStr === '') {
        return valueStr;
      }
      
      const num = Number(valueStr);
      return isNaN(num) ? valueStr : num;
    },
    /**
     * 解析亚马逊数据字符串，支持嵌套结构并处理为表单可用格式
     * @param {String} dataString - 以#,#分隔的亚马逊数据字符串
     * @return {Object} 解析后的表单数据对象
     */
    parseAmazonData: function (dataString) {
      if (!dataString || typeof dataString !== "string") {
        console.error("数据字符串无效");
        return {};
      }

      // 分割字符串获取键值对
      const pairs = dataString.split("#,#");
      const parsedData = {};
      const formData = {};

      // 解析每个键值对
      pairs.forEach((pair) => {
        try {
          // 提取键和值
          const colonIndex = pair.indexOf(":");
          if (colonIndex === -1) return;

          const key = pair.substring(0, colonIndex);
          let valueStr = pair.substring(colonIndex + 1);

          // 解析值部分（JSON格式）
          const value = JSON.parse(valueStr);
          parsedData[key] = value;
        } catch (error) {
          console.error("解析键值对时出错:", error, pair);
        }
      });

      // 处理解析后的数据为表单可用格式
      Object.entries(parsedData).forEach(([key, value]) => {
        // 提取数组中的数据对象
        const dataObj = amazonUtils.extractArrayData(value);

        // 扁平化对象
        amazonUtils.flattenObject(dataObj, key, formData);
      });

      console.log("amazonjs-529-formData:", formData);
      return formData;
    },

    /**
     * 从数组或对象中提取数据对象
     * @param {*} value - 输入值
     * @return {Object} 提取的数据对象
     */
    extractArrayData: function(value) {
      if (Array.isArray(value) && value.length > 0) {
        return value[0];
      } else if (typeof value === "object" && value !== null) {
        return value;
      } else {
        return { value: value };
      }
    },

    /**
     * 判断是否应该跳过字段
     * @param {String} fieldName - 字段名
     * @return {Boolean} 是否跳过
     */
    shouldSkipField: function(fieldName) {
      return fieldName === "marketplace_id" || fieldName === "language_tag";
    },

    /**
     * 递归扁平化对象为点分隔格式
     * @param {Object} obj - 要扁平化的对象
     * @param {String} prefix - 前缀
     * @param {Object} result - 结果对象
     */
    flattenObject: function(obj, prefix, result) {
      if (!obj || typeof obj !== "object") {
        return;
      }

      Object.entries(obj).forEach(([key, value]) => {
        // 跳过指定字段
        if (amazonUtils.shouldSkipField(key)) {
          return;
        }

        const newKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          // 递归处理嵌套对象
          amazonUtils.flattenObject(value, newKey, result);
        } else {
          // 设置最终值
          result[newKey] = value;
        }
      });
    },
  };

  // 为兼容性考虑，也直接暴露方法
  global.transformAmazonJsonSchemaToForm =
    global.amazonUtils.transformJsonSchemaToForm;
  global.amazonProcessFormData = global.amazonUtils.processFormData;
  global.amazonParseFormData = global.amazonUtils.parseAmazonData;
  global.tryParseNumber = global.amazonUtils.tryParseNumber;
})(typeof window !== "undefined" ? window : this);
