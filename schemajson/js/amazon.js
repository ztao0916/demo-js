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
     * @return {Object} 表单配置对象
     */
    transformJsonSchemaToForm: function (schema) {
      // 基础配置
      const formConfig = {
        fields: []
      }

      /**
       * 检查是否为引用字段
       * @param {Object} value - 字段值
       * @param {String} key - 字段键名
       * @return {Boolean} 是否为引用字段
       */
      const isRefField = function (value, key) {
        return (
          value.$ref ||
          key === 'marketplace_id' ||
          key === 'language_tag' ||
          value.default_ === DEFAULT_LANGUAGE_TAG ||
          value.default_ === DEFAULT_MARKETPLACE_ID
        )
      }

      /**
       * 检查是否为需要过滤的字段
       * @param {String} key - 字段键名
       * @return {Boolean} 是否为需要过滤的字段
       */
      const isFilteredField = function (key) {
        // 需要过滤的字段列表
        const filteredFields = [
          'item_name', // 标题
          'bullet_point', // 卖点
          'product_description', // 描述
          'generic_keyword', // 关键词
          'main_product_image_locator', // 主图
          'swatch_product_image_locator' // 变体图
        ]

        // 检查是否为基本过滤字段
        if (filteredFields.includes(key)) {
          return true
        }

        // 检查是否为other_product_image_locator或其带数字变体
        if (
          key === 'other_product_image_locator' ||
          /^other_product_image_locator_\d+$/.test(key)
        ) {
          return true
        }

        return false
      }

      // 临时存储所有字段
      const requiredFields = []
      const optionalFields = []

      // 处理属性
      if (schema.properties) {
        Object.entries(schema.properties).forEach(function ([key, value]) {
          // 跳过隐藏字段和引用字段
          if (value.hidden || isRefField(value, key) || isFilteredField(key))
            return

          // 基础字段信息
          const field = {
            key,
            label: value.tTitle || value.title || key,
            description: value.tDescription || value.description || '',
            required: schema.required ? schema.required.includes(key) : false,
            type: 'input' // 默认为输入框
          }

          // 处理枚举值 - 转为选择框
          if (value.enum) {
            field.type = 'select'
            field.options = value.enum.map(function (val, index) {
              return {
                value: val,
                label: value.enumNames ? value.enumNames[index] : val
              }
            })
          }

          // 处理数组类型
          if (value.type === 'array') {
            field.isArray = true

            // 处理数组项的属性
            if (value.items && value.items.properties) {
              field.children = []

              /**
               * 处理嵌套的properties字段，将第三层级的数据挪到第二层
               * @param {Object} properties - 属性对象
               * @param {String} parentKey - 父级键名
               * @param {Array} targetArray - 目标数组
               * @param {Array} requiredFields - 必填字段列表
               */
              const processProperties = function (
                properties,
                parentKey,
                targetArray
              ) {
                Object.entries(properties).forEach(function ([
                  propKey,
                  propValue
                ]) {
                  // 跳过隐藏字段和引用字段
                  if (isRefField(propValue, propKey)) return

                  // 如果属性有properties且包含unit和value，将它们提升到当前层级
                  if (
                    propValue.properties &&
                    propValue.properties.unit &&
                    propValue.properties.value
                  ) {
                    // 处理value字段
                    if (propValue.properties.value) {
                      const valueKey = parentKey
                        ? `${parentKey}.${propKey}_value`
                        : `${propKey}_value`
                      const valueObj = {
                        key: valueKey,
                        label:
                          propValue.properties.value.tTitle ||
                          propValue.properties.value.title ||
                          `${propValue.title || propKey} Value`,
                        description:
                          propValue.properties.value.tDescription ||
                          propValue.properties.value.description ||
                          '',
                        required: schema.required ? schema.required.includes(propKey) : false,
                        type: 'input'
                      }

                      // 处理枚举值
                      if (propValue.properties.value.enum) {
                        valueObj.type = 'select'
                        valueObj.options = propValue.properties.value.enum.map(
                          function (val, index) {
                            return {
                              value: val,
                              label: propValue.properties.value.enumNames
                                ? propValue.properties.value.enumNames[index]
                                : val
                            }
                          }
                        )
                      }

                      targetArray.push(valueObj)
                    }

                    // 处理unit字段
                    if (propValue.properties.unit) {
                      const unitKey = parentKey
                        ? `${parentKey}.${propKey}_unit`
                        : `${propKey}_unit`
                      const unitObj = {
                        key: unitKey,
                        label:
                          propValue.properties.unit.tTitle ||
                          propValue.properties.unit.title ||
                          `${propValue.title || propKey} Unit`,
                        description:
                          propValue.properties.unit.tDescription ||
                          propValue.properties.unit.description ||
                          '',
                        required: schema.required ? schema.required.includes(propKey) : false,
                        type: 'input'
                      }

                      // 处理枚举值
                      if (propValue.properties.unit.enum) {
                        unitObj.type = 'select'
                        unitObj.options = propValue.properties.unit.enum.map(
                          function (val, index) {
                            return {
                              value: val,
                              label: propValue.properties.unit.enumNames
                                ? propValue.properties.unit.enumNames[index]
                                : val
                            }
                          }
                        )
                      }

                      targetArray.push(unitObj)
                    }
                  } else {
                    const fieldKey = parentKey
                      ? `${parentKey}.${propKey}`
                      : propKey
                    const fieldObj = {
                      key: fieldKey,
                      label: propValue.tTitle || propValue.title || propKey,
                      description:
                        propValue.tDescription || propValue.description || '',
                      required: schema.required ? schema.required.includes(propKey) : false,
                      type: 'input'
                    }
                    // 处理maxlength属性
                    if (propValue.maxLength) {
                      fieldObj.maxLength = propValue.maxLength
                    }

                    // 处理examples属性
                    if (
                      propValue.examples &&
                      Array.isArray(propValue.examples) &&
                      propValue.examples.length > 0
                    ) {
                      fieldObj.placeholder = propValue.examples[0]
                    }

                    // 处理枚举值
                    if (propValue.enum) {
                      fieldObj.type = 'select'
                      fieldObj.options = propValue.enum.map(function (
                        val,
                        index
                      ) {
                        return {
                          value: val,
                          label: propValue.enumNames
                            ? propValue.enumNames[index]
                            : val
                        }
                      })
                    }

                    // 递归处理嵌套的properties，但不是unit和value的情况
                    if (propValue.properties) {
                      fieldObj.children = []
                      processProperties(
                        propValue.properties,
                        fieldKey,
                        fieldObj.children
                      )
                    }

                    targetArray.push(fieldObj)
                  }
                })
              }

              // 处理items.properties
              processProperties(
                value.items.properties,
                key,
                field.children
              )

              // 如果没有有效的子字段，则跳过该数组字段
              if (field.children.length === 0) {
                return
              }

              // 对子字段进行排序：必填在前，非必填在后
              field.children.sort(function (a, b) {
                if (a.required && !b.required) return -1
                if (!a.required && b.required) return 1
                return 0
              })
            }
          }

          // 将字段添加到对应的数组中
          if (field.required) {
            requiredFields.push(field)
          } else {
            optionalFields.push(field)
          }
        })
      }

      // 合并必填和非必填字段
      formConfig.fields = [...requiredFields, ...optionalFields]
      console.log('处理后的表单配置formConfig', formConfig)
      return formConfig
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
            const hasPrefixGroup = prefixMap[parent] && 
                                  prefixMap[parent][prefix] && 
                                  prefixMap[parent][prefix].length >= 2
            
            if (hasPrefixGroup && (suffix === 'value' || suffix === 'unit')) {
              // 创建嵌套结构
              if (!result[parent][0][prefix]) {
                result[parent][0][prefix] = {}
              }
              
                            // 设置value或unit值
               result[parent][0][prefix][suffix] = suffix === 'value' ? this.tryParseNumber(value) : value
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
    tryParseNumber: function(valueStr) {
      if (valueStr === null || valueStr === undefined || valueStr === '') {
        return valueStr;
      }
      
      const num = Number(valueStr);
      return isNaN(num) ? valueStr : num;
    },
    /**
     * 解析亚马逊数据字符串，并过滤掉marketplace_id和language_tag字段
     * @param {String} dataString - 以#,#分隔的亚马逊数据字符串
     * @return {Object} 解析后的数据对象，不包含marketplace_id和language_tag字段
     */
    parseAmazonData: function (dataString) {
      if (!dataString || typeof dataString !== "string") {
        console.error("数据字符串无效");
        return null;
      }

      // 分割字符串获取键值对
      const pairs = dataString.split("#,#");
      const parsedData = {};

      // 解析每个键值对
      pairs.forEach((pair) => {
        try {
          // 提取键和值，只替换第一个冒号为##,##
          const colonIndex = pair.indexOf(":");
          if (colonIndex === -1) return;

          const key = pair.substring(0, colonIndex);
          let valueStr = pair.substring(colonIndex + 1);

          // 将原始键值对中的第一个冒号替换为##,##
          const processedPair = pair.replace(":", "##,##");

          // 将键值对存入结果对象
          parsedData[key] = JSON.parse(valueStr);
        } catch (outerError) {
          console.error("处理键值对时出错:", outerError);
        }
      });
      //遍历parsedData,只取value对象中的value或者数组第一个对象的value
      let tarData = {};
      for (const key in parsedData) {
        let value = parsedData[key];
        if (value instanceof Array) {
          let valObj = value[0];
          let tarVal = valObj.value;
          tarData[key] = tarVal;
        } else if (value instanceof Object) {
          let tarVal = value.value;
          tarData[key] = tarVal;
        }
      }
      // console.log("tarData", tarData);
      return tarData;
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
