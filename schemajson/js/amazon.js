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

      // 临时存储所有字段
      const requiredFields = []
      const optionalFields = []

      // 处理属性
      if (schema.properties) {
        Object.entries(schema.properties).forEach(function ([key, value]) {
          // 跳过隐藏字段和引用字段
          if (value.hidden || isRefField(value, key)) return

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
              Object.entries(value.items.properties).forEach(function ([
                childKey,
                childValue
              ]) {
                // 跳过隐藏字段和引用字段
                if (childValue.hidden || isRefField(childValue, childKey))
                  return

                const childField = {
                  key: `${key}.${childKey}`,
                  label: childValue.tTitle || childValue.title || childKey,
                  description:
                    childValue.tDescription || childValue.description || '',
                  // 判断子属性是否必填：从items.required字段获取
                  required: value.items.required
                    ? value.items.required.includes(childKey)
                    : // 如果父字段是必填且当前是value字段，则也作为必填项
                      schema.required &&
                      schema.required.includes(key) &&
                      childKey === 'value',
                  type: 'input'
                }

                // 处理子字段的枚举值
                if (childValue.enum) {
                  childField.type = 'select'
                  childField.options = childValue.enum.map(function (
                    val,
                    index
                  ) {
                    return {
                      value: val,
                      label: childValue.enumNames
                        ? childValue.enumNames[index]
                        : val
                    }
                  })
                }

                field.children.push(childField)
              })

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

      return formConfig
    },

    /**
     * 处理表单数据为Amazon API所需格式
     * @param {Object} formData - 表单数据对象
     * @return {Object} 处理后的数据对象
     */
    processFormData: function (formData) {
      const result = {}

      Object.entries(formData).forEach(function ([key, value]) {
        if (key.includes('.')) {
          // 处理嵌套属性
          const [parent, child] = key.split('.')
          if (!result[parent]) {
            result[parent] = [
              {
                // 添加默认的 marketplace_id 和 language_tag
                marketplace_id: DEFAULT_MARKETPLACE_ID,
                language_tag: DEFAULT_LANGUAGE_TAG
              }
            ]
          }
          result[parent][0][child] = value
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
    }
  }

  // 为兼容性考虑，也直接暴露方法
  global.transformJsonSchemaToForm =
    global.amazonUtils.transformJsonSchemaToForm
  global.processFormData = global.amazonUtils.processFormData
})(typeof window !== 'undefined' ? window : this)
