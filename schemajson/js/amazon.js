// 转换 JSON Schema 为表单结构
export function transformJsonSchemaToForm (schema) {
  // 基础配置
  const formConfig = {
    fields: []
  };

  // 检查是否为引用字段
  const isRefField = (value, key) => {
    return (
      value.$ref ||
      key === 'marketplace_id' ||
      key === 'language_tag' ||
      value.default_ === 'en_US' ||
      value.default_ === 'ATVPDKIKX0DER'
    );
  };

  // 临时存储所有字段
  const requiredFields = [];
  const optionalFields = [];

  // 处理属性
  if (schema.properties) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      // 跳过隐藏字段和引用字段
      if (value.hidden || isRefField(value, key)) return;

      // 基础字段信息
      const field = {
        key,
        label: value.tTitle || value.title || key,
        description: value.tDescription || value.description || '',
        required: schema.required?.includes(key) || false,
        type: 'input' // 默认为输入框
      };

      // 处理枚举值 - 转为选择框
      if (value.enum) {
        field.type = 'select';
        field.options = value.enum.map((val, index) => ({
          value: val,
          label: value.enumNames?.[index] || val
        }));
      }

      // 处理数组类型
      if (value.type === 'array') {
        field.isArray = true;

        // 处理数组项的属性
        if (value.items?.properties) {
          field.children = [];
          Object.entries(value.items.properties).forEach(
            ([childKey, childValue]) => {
              // 跳过隐藏字段和引用字段
              if (childValue.hidden || isRefField(childValue, childKey)) return;

              const childField = {
                key: `${key}.${childKey}`,
                label: childValue.tTitle || childValue.title || childKey,
                description:
                  childValue.tDescription || childValue.description || '',
                // 如果父字段是必填的，value 字段也是必填的
                required:
                  (schema.required?.includes(key) && childKey === 'value') ||
                  false,
                type: 'input'
              };

              // 处理子字段的枚举值
              if (childValue.enum) {
                childField.type = 'select';
                childField.options = childValue.enum.map((val, index) => ({
                  value: val,
                  label: childValue.enumNames?.[index] || val
                }));
              }

              field.children.push(childField);
            }
          );

          // 如果没有有效的子字段，则跳过该数组字段
          if (field.children.length === 0) {
            return;
          }

          // 对子字段进行排序：必填在前，非必填在后
          field.children.sort((a, b) => {
            if (a.required && !b.required) return -1;
            if (!a.required && b.required) return 1;
            return 0;
          });
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

  return formConfig;
}

// 处理表单数据
export function processFormData (formData) {
  const result = {};

  Object.entries(formData).forEach(([key, value]) => {
    if (key.includes('.')) {
      // 处理嵌套属性
      const [parent, child] = key.split('.');
      if (!result[parent]) {
        result[parent] = [
          {
            // 添加默认的 marketplace_id 和 language_tag
            marketplace_id: 'ATVPDKIKX0DER',
            language_tag: 'en_US'
          }
        ];
      }
      result[parent][0][child] = value;
    } else {
      // 对于非嵌套属性，检查是否需要包装成数组
      if (key === 'brand' || key === 'item_name') {
        result[key] = [
          {
            value,
            marketplace_id: 'ATVPDKIKX0DER',
            language_tag: 'en_US'
          }
        ];
      } else {
        result[key] = value;
      }
    }
  });

  return result;
}
