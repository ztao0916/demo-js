/**
 * amazon.js - Amazon JSON Schema处理工具
 * 功能：将Amazon JSON Schema转换为表单结构，以及处理表单数据
 */

// 创建全局对象供直接引用
(function (global) {
  // 动态获取默认值的函数
  const getDefaultValues = function (schema) {
    let marketplaceId = "ATVPDKIKX0DER"; // 默认值
    let languageTag = "en_US"; // 默认值

    // 从schema的$defs中获取默认值
    if (schema && schema.$defs) {
      if (schema.$defs.marketplace_id && schema.$defs.marketplace_id.default) {
        marketplaceId = schema.$defs.marketplace_id.default;
      }
      if (schema.$defs.language_tag && schema.$defs.language_tag.default) {
        languageTag = schema.$defs.language_tag.default;
      }
    }

    return { marketplaceId, languageTag };
  };
  /**
   * 解析 $ref 引用，获取真实的类型定义
   * @param {string} ref - $ref 引用路径，如 "#/$defs/language_tag"
   * @param {Object} rootSchema - 根 schema 对象
   * @returns {Object} 解析后的类型定义
   */
  const resolveRef = function (ref, rootSchema) {
    if (!ref || !ref.startsWith("#/")) {
      return null;
    }

    // 移除 '#/' 前缀，按 '/' 分割路径
    const pathParts = ref.substring(2).split("/");
    let current = rootSchema;

    // 逐级访问路径
    for (const part of pathParts) {
      if (
        current &&
        typeof current === "object" &&
        current[part] !== undefined
      ) {
        current = current[part];
      } else {
        return null;
      }
    }

    return current;
  };
  /**
   * 获取属性的真实类型信息，处理 $ref 引用
   * @param {Object} property - 属性定义
   * @param {Object} rootSchema - 根 schema 对象
   * @returns {Object} 包含类型信息的对象
   */
  const getPropertyType = function (property, rootSchema) {
    // 如果有 $ref 引用，解析引用
    if (property.$ref) {
      const resolvedRef = resolveRef(property.$ref, rootSchema);
      if (resolvedRef) {
        // 递归解析，因为引用的对象可能还有引用
        return getPropertyType(resolvedRef, rootSchema);
      }
    }

    // 返回基本类型信息
    return {
      type: property.type,
      title: property.title,
      description: property.description,
      examples: property.examples,
      enum: property.enum,
      enumNames: property.enum,
      minLength: property.minLength,
      maxLength: property.maxLength,
      minimum: property.minimum,
      maximum: property.maximum,
      minItems: property.minItems,
      maxItems: property.maxItems,
      default: property.default,
      editable: property.editable,
      hidden: property.hidden,
    };
  };

  /**
   * 递归处理 items 的深层嵌套结构
   * @param {Object} itemsProperty - items 属性定义
   * @param {string} currentPath - 当前路径
   * @param {Object} rootSchema - 根 schema 对象
   * @returns {Object} 处理后的 items 信息
   */
  const processItemsRecursively = function (
    itemsProperty,
    currentPath,
    rootSchema
  ) {
    // 获取 items 的真实类型信息
    const itemsTypeInfo = getPropertyType(itemsProperty, rootSchema);

    const itemsInfo = {
      type: itemsTypeInfo.type,
    };

    // 如果 items 是对象类型且有 properties，递归处理
    if (itemsProperty.type === "object" && itemsProperty.properties) {
      itemsInfo.properties = {};

      // 遍历 items 下的 properties
      Object.keys(itemsProperty.properties).forEach((itemPropName) => {
        const itemProperty = itemsProperty.properties[itemPropName];

        // 获取每个 item 属性的真实类型信息
        const itemPropTypeInfo = getPropertyType(itemProperty, rootSchema);

        itemsInfo.properties[itemPropName] = {
          type: itemPropTypeInfo.type,
          title: itemPropTypeInfo.title || itemProperty.title,
          description: itemPropTypeInfo.description || itemProperty.description,
          examples: itemPropTypeInfo.examples || itemProperty.examples,
          required: itemsProperty.required
            ? itemsProperty.required.includes(itemPropName)
            : false,
          enum: itemPropTypeInfo.enum,
          enumNames: itemPropTypeInfo.enum,
          default: itemPropTypeInfo.default,
          editable: itemPropTypeInfo.editable,
          hidden: itemPropTypeInfo.hidden,
        };

        // 如果是对象类型且有 properties，直接递归处理其 properties
        if (itemProperty.type === "object" && itemProperty.properties) {
          itemsInfo.properties[itemPropName].properties = {};

          // 直接处理嵌套的 properties
          Object.keys(itemProperty.properties).forEach((nestedPropName) => {
            const nestedProperty = itemProperty.properties[nestedPropName];
            const nestedPropTypeInfo = getPropertyType(
              nestedProperty,
              rootSchema
            );

            itemsInfo.properties[itemPropName].properties[nestedPropName] = {
              type: nestedPropTypeInfo.type,
              title: nestedPropTypeInfo.title || nestedProperty.title,
              description:
                nestedPropTypeInfo.description || nestedProperty.description,
              examples: nestedPropTypeInfo.examples || nestedProperty.examples,
              required: itemProperty.required
                ? itemProperty.required.includes(nestedPropName)
                : false,
              enum: nestedPropTypeInfo.enum,
              enumNames: nestedPropTypeInfo.enum,
              default: nestedPropTypeInfo.default,
              editable: nestedPropTypeInfo.editable,
              hidden: nestedPropTypeInfo.hidden,
            };

            // 如果嵌套属性也是数组类型，继续递归处理
            if (nestedProperty.type === "array" && nestedProperty.items) {
              itemsInfo.properties[itemPropName].properties[
                nestedPropName
              ].items = processItemsRecursively(
                nestedProperty.items,
                `${currentPath}.properties.${itemPropName}.properties.${nestedPropName}.items`,
                rootSchema
              );
            }
          });
        }

        // 如果是数组类型且有 items，递归处理嵌套的 items
        if (itemProperty.type === "array" && itemProperty.items) {
          itemsInfo.properties[itemPropName].items = processItemsRecursively(
            itemProperty.items,
            `${currentPath}.properties.${itemPropName}.items`,
            rootSchema
          );
        }
      });
    }

    return itemsInfo;
  };

  /**
   * 递归转换 items 结构为对象格式
   * @param {Object} itemsInfo - items 信息对象
   * @returns {Object} 转换后的 items 对象
   */
  const convertItemsToObject = function (itemsInfo) {
    const itemsObj = {
      type: itemsInfo.type,
      enum: itemsInfo.enum || [],
    };

    if (itemsInfo.properties) {
      itemsObj.properties = {};
      Object.keys(itemsInfo.properties).forEach((itemPropName) => {
        const itemProp = itemsInfo.properties[itemPropName];
        itemsObj.properties[itemPropName] = {
          type: itemProp.type,
          enum: itemProp.enum || [],
        };

        // 如果有嵌套的 items，递归处理
        if (itemProp.items) {
          itemsObj.properties[itemPropName].items = convertItemsToObject(
            itemProp.items
          );
        }

        // 如果有嵌套的 properties，直接复制结构
        if (itemProp.properties) {
          itemsObj.properties[itemPropName].properties = {};
          Object.keys(itemProp.properties).forEach((nestedPropName) => {
            const nestedProp = itemProp.properties[nestedPropName];
            itemsObj.properties[itemPropName].properties[nestedPropName] = {
              type: nestedProp.type,
              enum: nestedProp.enum || [],
            };

            // 如果嵌套属性有 items，递归处理
            if (nestedProp.items) {
              itemsObj.properties[itemPropName].properties[
                nestedPropName
              ].items = convertItemsToObject(nestedProp.items);
            }
          });
        }
      });
    }

    return itemsObj;
  };

  // 定义对象
  global.amazonUtils = {
    // 存储当前schema的默认值
    _currentDefaults: {
      marketplaceId: "ATVPDKIKX0DER",
      languageTag: "en_US",
    },
    _schemaData: null,

    /**
     * 设置当前默认值
     * @param {Object} schema - JSON Schema对象
     */
    setCurrentDefaults: function (schema) {
      const defaults = getDefaultValues(schema);
      amazonUtils._currentDefaults = defaults;
    },
    setSchemaData: function (schema) {
      amazonUtils._schemaData = schema;
    },
    /**
     * 转换JSON Schema为表单结构
     * @param {Object} schema - JSON Schema对象
     * @param {Array} requiredTopFields - 顶层必填字段列表,必填字段列表
     * @return {Object} 表单配置对象
     */
    transformJsonSchemaToForm: function (schema, requiredTopFields = []) {
      console.log("获取到的json-schema数据", schema);
      // 设置当前默认值
      amazonUtils.setCurrentDefaults(schema);
      amazonUtils.setSchemaData(schema);
      const {
        marketplaceId: DEFAULT_MARKETPLACE_ID,
        languageTag: DEFAULT_LANGUAGE_TAG,
      } = amazonUtils._currentDefaults;
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
          "condition_type", // 商品状态
          "brand", // 品牌
          "item_name", // 标题
          "product_description", // 描述
          "generic_keyword", // 关键词
          "bullet_point", // 卖点

          // 产品标识和关系
          "part_number", // 部件号
          "parentage_level", // 父子关系级别
          "child_parent_sku_relationship", // 父子SKU关系
          "variation_theme", // 变体主题
          "supplier_declared_has_product_identifier_exemption", // 产品标识符豁免声明
          "externally_assigned_product_identifier", // 外部分配的产品标识符

          // 图片相关
          "main_product_image_locator", // 主图
          "swatch_product_image_locator", // 变体图
          "other_product_image_locator", // 其他图片（基础）

          // 变体属性
          //  "color",            // 颜色
          //  "size",            // 尺寸
          //  "style",           // 样式

          // 价格
          // "list_price", // 标价
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
        let newRequiredTopFields = [
          ...new Set(requiredTopFields.concat(schema.required || [])),
        ];
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
                label: val,
              };
            });
          }

          // 处理 anyOf 结构 - 当存在多个选项时转为选择框
          if (
            value.anyOf &&
            value.anyOf.length > 1 &&
            value.anyOf[1] &&
            value.anyOf[1].enum
          ) {
            field.type = "select";
            field.options = value.anyOf[1].enum.map(function (val, index) {
              return {
                value: val,
                label: val,
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
                const sortedEntries = Object.entries(properties).sort(
                  (a, b) => {
                    // 同类型属性按名称排序
                    return a[0].localeCompare(b[0]);
                  }
                );

                for (const [propKey, propValue] of sortedEntries) {
                  // 跳过隐藏字段和引用字段
                  if (propValue.hidden || isRefField(propValue, propKey))
                    continue;

                  // 生成当前属性的路径
                  const currentPath = parentPath
                    ? `${parentPath}.${propKey}`
                    : propKey;

                  // 检查属性是否为必填
                  // 如果父节点必填，则子节点也必填；否则检查当前节点是否在必填列表中
                  const isRequired =
                    newRequiredTopFields.includes(key) &&
                    requiredFields.includes(propKey);

                  // 生成字段键名
                  const fieldKey = parentKey
                    ? `${parentKey}.${propKey}`
                    : propKey;

                  // 生成有层次感的标签
                  let fieldLabel =
                    propValue.tTitle || propValue.title || propKey;

                  // 不再为深层嵌套的字段添加父级路径信息到标签中
                  // 仅使用当前字段的标题，保持简洁

                  // 创建基础字段对象
                  const fieldObj = {
                    key: fieldKey,
                    label: fieldLabel,
                    description:
                      propValue.tDescription || propValue.description || "",
                    required: isRequired,
                    type: "input",
                    // 添加路径和深度信息
                    _path: currentPath,
                    _depth: depth,
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
                        label: val,
                      };
                    });
                  }

                  // 处理 anyOf 结构 - 当存在多个选项时转为选择框
                  if (
                    propValue.anyOf &&
                    propValue.anyOf.length > 1 &&
                    propValue.anyOf[1] &&
                    propValue.anyOf[1].enum
                  ) {
                    fieldObj.type = "select";
                    fieldObj.options = propValue.anyOf[1].enum.map(function (
                      val,
                      index
                    ) {
                      return {
                        value: val,
                        label: val,
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
                return (a._path || "").localeCompare(b._path || "");
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

      // 字段规则配置
      const fieldRules = {
        fulfillment_availability: {
          requiredLabels: ["Quantity"],
        },
        purchasable_offer: {
          requiredLabels: ["Your Price"],
          setOthersOptional: true,
        },
      };

      // 处理字段必填状态
      formConfig.fields.forEach((item) => {
        const rule = fieldRules[item.key];

        if (rule && item.children) {
          item.children.forEach((child) => {
            if (rule.requiredLabels.includes(child.label)) {
              child.required = true;
            } else if (rule.setOthersOptional) {
              child.required = false;
            }
          });
        }

        // 单子项且父项必填时，子项也设为必填
        if (
          item.children &&
          item.children.length === 1 &&
          item.required === true
        ) {
          item.children[0].required = true;
        }
      });
      console.log("处理后的表单配置formConfig", formConfig);
      return formConfig;
    },

    /**
     * 处理表单数据为Amazon API所需格式
     * @param {Object} formData - 表单数据对象
     * @return {Object} 处理后的数据对象
     */
    processFormData: function (formData) {
      const result = {};
      const {
        marketplaceId: DEFAULT_MARKETPLACE_ID,
        languageTag: DEFAULT_LANGUAGE_TAG,
      } = amazonUtils._currentDefaults;

      // 处理所有字段
      Object.entries(formData).forEach(function ([key, value]) {
        if (key.includes(".")) {
          // 处理嵌套属性
          amazonUtils.setNestedValue(result, key, value);
        } else {
          // 对于非嵌套属性，检查是否需要包装成数组
          if (key === "brand" || key === "item_name") {
            result[key] = [
              {
                value: value,
                marketplace_id: DEFAULT_MARKETPLACE_ID,
                language_tag: DEFAULT_LANGUAGE_TAG,
              },
            ];
          } else {
            result[key] = value;
          }
        }
      });

      return result;
    },

    /**
     * 解析点分隔的路径为数组
     * @param {String} path - 点分隔的路径，如 "fulfillment_availability.quantity"
     * @return {Array} 路径数组，如 ["fulfillment_availability", "quantity"]
     */
    parseNestedPath: function (path) {
      return path.split(".");
    },

    /**
     * 在嵌套对象中设置值，支持任意深度嵌套
     * @param {Object} obj - 目标对象
     * @param {String} path - 点分隔的路径
     * @param {*} value - 要设置的值
     */
    setNestedValue: function (obj, path, value) {
      const pathArray = this.parseNestedPath(path);
      const topLevelKey = pathArray[0];

      // 确保顶级字段存在并且是数组格式
      if (!obj[topLevelKey]) {
        obj[topLevelKey] = [{}];
      }

      // 获取数组中的第一个对象
      const targetObj = obj[topLevelKey][0];

      // 如果只有两层路径，直接设置值
      if (pathArray.length === 2) {
        const finalKey = pathArray[1];
        targetObj[finalKey] = this.tryParseNumber(value);
        return;
      }

      // 处理多层嵌套路径 - 中间层级创建为对象格式
      let current = targetObj;
      for (let i = 1; i < pathArray.length - 1; i++) {
        const key = pathArray[i];
        if (!current[key]) {
          // 创建对象格式的中间层级
          current[key] = {};
        }
        // 直接访问对象
        current = current[key];
      }

      // 设置最终值
      const finalKey = pathArray[pathArray.length - 1];
      current[finalKey] = this.tryParseNumber(value);
    },

    /**
     * 尝试将字符串转换为数字，如果转换失败则返回原字符串
     * @param {String} valueStr - 要转换的字符串
     * @return {Number|String} 转换结果
     */
    tryParseNumber: function (valueStr) {
      if (valueStr === null || valueStr === undefined || valueStr === "") {
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

      return formData;
    },

    /**
     * 从数组或对象中提取数据对象
     * @param {*} value - 输入值
     * @return {Object} 提取的数据对象
     */
    extractArrayData: function (value) {
      if (Array.isArray(value) && value.length > 0) {
        // 提取数组第一个元素，但保持其内部结构
        const firstItem = value[0];
        if (typeof firstItem === "object" && firstItem !== null) {
          // 递归处理内部结构，将嵌套数组转换为对象
          return amazonUtils.convertNestedArraysToObjects(firstItem);
        }
        return firstItem;
      } else if (typeof value === "object" && value !== null) {
        return amazonUtils.convertNestedArraysToObjects(value);
      } else {
        return { value: value };
      }
    },

    /**
     * 将嵌套结构中的数组转换为对象（除了最外层）
     * @param {Object} obj - 要转换的对象
     * @return {Object} 转换后的对象
     */
    convertNestedArraysToObjects: function (obj) {
      if (!obj || typeof obj !== "object") {
        return obj;
      }

      const result = {};
      Object.entries(obj).forEach(([key, value]) => {
        // 跳过 marketplace_id 和 language_tag
        if (amazonUtils.shouldSkipField(key)) {
          result[key] = value;
          return;
        }

        if (Array.isArray(value) && value.length > 0) {
          // 对于数组，取第一个元素并递归处理
          const firstItem = value[0];
          if (typeof firstItem === "object" && firstItem !== null) {
            result[key] = amazonUtils.convertNestedArraysToObjects(firstItem);
          } else {
            result[key] = firstItem;
          }
        } else if (typeof value === "object" && value !== null) {
          // 递归处理嵌套对象
          result[key] = amazonUtils.convertNestedArraysToObjects(value);
        } else {
          result[key] = value;
        }
      });

      return result;
    },

    /**
     * 判断是否应该跳过字段
     * @param {String} fieldName - 字段名
     * @return {Boolean} 是否跳过
     */
    shouldSkipField: function (fieldName) {
      return fieldName === "marketplace_id" || fieldName === "language_tag";
    },

    /**
     * 递归扁平化对象为点分隔格式
     * @param {Object} obj - 要扁平化的对象
     * @param {String} prefix - 前缀
     * @param {Object} result - 结果对象
     */
    flattenObject: function (obj, prefix, result) {
      if (!obj || typeof obj !== "object") {
        return;
      }

      Object.entries(obj).forEach(([key, value]) => {
        // 跳过指定字段
        if (amazonUtils.shouldSkipField(key)) {
          return;
        }

        const newKey = prefix ? `${prefix}.${key}` : key;

        if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value)
        ) {
          // 递归处理嵌套对象
          amazonUtils.flattenObject(value, newKey, result);
        } else if (Array.isArray(value) && value.length > 0) {
          // 处理数组：取第一个元素
          const firstElement = value[0];
          if (typeof firstElement === "object" && firstElement !== null) {
            // 如果数组元素是对象，递归扁平化其属性
            amazonUtils.flattenObject(firstElement, newKey, result);
          } else {
            // 如果数组元素不是对象，直接设置值
            result[newKey] = value;
          }
        } else {
          // 设置最终值
          result[newKey] = value;
        }
      });
    },
    /**
     * 递归遍历 JSON Schema properties
     * @param {Object} schema - JSON Schema 对象
     * @param {string} parentPath - 父级路径，用于标识嵌套层级
     * @param {Object} rootSchema - 根 schema 对象，用于解析 $ref
     * @returns {Array} 解析后的属性数组
     */
    parseSchemaProperties: function (
      schema,
      parentPath = "",
      rootSchema = null
    ) {
      const result = [];

      if (!schema || !schema.properties) {
        return result;
      }

      // 如果没有提供 rootSchema，使用当前 schema 作为根
      if (!rootSchema) {
        rootSchema = schema;
      }

      // 遍历最外层 properties
      Object.keys(schema.properties).forEach((propertyName) => {
        const property = schema.properties[propertyName];
        const currentPath = parentPath
          ? `${parentPath}.${propertyName}`
          : propertyName;

        // 获取属性的真实类型信息（处理 $ref 引用）
        const typeInfo = getPropertyType(property, rootSchema);

        // 构建基础属性信息
        const propertyInfo = {
          name: propertyName,
          path: currentPath,
          type: typeInfo.type,
          title: typeInfo.title || property.title,
          description: typeInfo.description || property.description,
          examples: typeInfo.examples || property.examples,
          required: schema.required
            ? schema.required.includes(propertyName)
            : false,
          // 添加更多属性信息
          enum: typeInfo.enum,
          enumNames: typeInfo.enum,
          default: typeInfo.default,
          editable: typeInfo.editable,
          hidden: typeInfo.hidden,
        };

        // 如果是数组类型，处理 items（使用新的递归函数）
        if (property.type === "array" && property.items) {
          propertyInfo.items = processItemsRecursively(
            property.items,
            `${currentPath}.items`,
            rootSchema
          );
        }

        // 如果是对象类型且有 properties，直接处理其 properties
        if (property.type === "object" && property.properties) {
          propertyInfo.properties = {};

          // 直接处理嵌套的 properties
          Object.keys(property.properties).forEach((nestedPropName) => {
            const nestedProperty = property.properties[nestedPropName];
            const nestedTypeInfo = getPropertyType(nestedProperty, rootSchema);

            propertyInfo.properties[nestedPropName] = {
              name: nestedPropName,
              path: `${currentPath}.${nestedPropName}`,
              type: nestedTypeInfo.type,
              title: nestedTypeInfo.title || nestedProperty.title,
              description:
                nestedTypeInfo.description || nestedProperty.description,
              examples: nestedTypeInfo.examples || nestedProperty.examples,
              required: property.required
                ? property.required.includes(nestedPropName)
                : false,
              enum: nestedTypeInfo.enum,
              enumNames: nestedTypeInfo.enum,
              default: nestedTypeInfo.default,
              editable: nestedTypeInfo.editable,
              hidden: nestedTypeInfo.hidden,
            };

            // 如果嵌套属性是数组类型，处理其 items
            if (nestedProperty.type === "array" && nestedProperty.items) {
              propertyInfo.properties[nestedPropName].items =
                processItemsRecursively(
                  nestedProperty.items,
                  `${currentPath}.${nestedPropName}.items`,
                  rootSchema
                );
            }
          });
        }

        // 添加其他可能的属性（这些已经在 typeInfo 中处理了，但保留兼容性）
        if (typeInfo.minItems !== undefined)
          propertyInfo.minItems = typeInfo.minItems;
        if (typeInfo.maxItems !== undefined)
          propertyInfo.maxItems = typeInfo.maxItems;
        if (typeInfo.minLength !== undefined)
          propertyInfo.minLength = typeInfo.minLength;
        if (typeInfo.maxLength !== undefined)
          propertyInfo.maxLength = typeInfo.maxLength;
        if (typeInfo.minimum !== undefined)
          propertyInfo.minimum = typeInfo.minimum;
        if (typeInfo.maximum !== undefined)
          propertyInfo.maximum = typeInfo.maximum;

        result.push(propertyInfo);
      });

      return result;
    },
    /**
     * 将解析结果转换为您要求的对象数组格式
     * @param {Array} parsedProperties - 解析后的属性数组
     * @returns {Array} 转换后的对象数组
     */
    convertToObjectArray: function (parsedProperties) {
      const result = [];

      parsedProperties.forEach((prop) => {
        const obj = {};
        obj[prop.name] = {
          type: prop.type,
          enum: prop.enum || [],
        };

        // 如果有 items，使用递归函数处理
        if (prop.items) {
          obj[prop.name].items = convertItemsToObject(prop.items);
        }

        // 如果有嵌套的 properties，直接复制结构
        if (prop.properties) {
          obj[prop.name].properties = {};
          Object.keys(prop.properties).forEach((nestedPropName) => {
            const nestedProp = prop.properties[nestedPropName];
            obj[prop.name].properties[nestedPropName] = {
              type: nestedProp.type,
              enum: nestedProp.enum || [],
            };

            // 如果嵌套属性有 items，递归处理
            if (nestedProp.items) {
              obj[prop.name].properties[nestedPropName].items =
                convertItemsToObject(nestedProp.items);
            }
          });
        }

        result.push(obj);
      });

      return result;
    },

    /**
     * 根据 schema 结构转换 submitData，确保数据结构符合规范
     * @param {Object} submitData - 原始提交数据
     * @param {Array} newProperties - schema 属性定义数组
     * @returns {Object} 转换后的数据
     */
    transformSubmitDataBySchema: function (submitData, newProperties) {
      if (!submitData || !newProperties) {
        console.warn("transformSubmitDataBySchema: 缺少必要参数");
        return submitData;
      }

      const result = JSON.parse(JSON.stringify(submitData)); // 深拷贝
      const {
        marketplaceId: DEFAULT_MARKETPLACE_ID,
        languageTag: DEFAULT_LANGUAGE_TAG,
      } = amazonUtils._currentDefaults;

      // 遍历 newProperties，找到对应的字段进行转换
      newProperties.forEach((propertyObj) => {
        const fieldName = Object.keys(propertyObj)[0];
        const schemaDefinition = propertyObj[fieldName];

        if (result[fieldName]) {
          result[fieldName] = amazonUtils.processFieldBySchema(
            result[fieldName],
            schemaDefinition,
            fieldName,
            DEFAULT_MARKETPLACE_ID,
            DEFAULT_LANGUAGE_TAG
          );
        }
      });

      return result;
    },

    /**
     * 根据 schema 定义处理单个字段
     * @param {*} fieldValue - 字段值
     * @param {Object} schemaDefinition - schema 定义
     * @param {String} fieldName - 字段名（用于调试和日志）
     * @param {String} marketplaceId - marketplace_id 默认值
     * @param {String} languageTag - language_tag 默认值
     * @returns {*} 处理后的字段值
     */
    processFieldBySchema: function (
      fieldValue,
      schemaDefinition,
      fieldName,
      marketplaceId,
      languageTag
    ) {
      if (!fieldValue || !schemaDefinition) {
        console.debug(
          `processFieldBySchema: 跳过字段 ${fieldName}，缺少必要数据`
        );
        return fieldValue;
      }

      // 如果 schema 定义为数组类型
      if (schemaDefinition.type === "array" && schemaDefinition.items) {
        return amazonUtils.ensureArrayStructure(
          fieldValue,
          schemaDefinition.items,
          marketplaceId,
          languageTag
        );
      }

      return fieldValue;
    },

    /**
     * 确保数组结构符合 schema 规范
     * @param {*} value - 原始值
     * @param {Object} itemsSchema - items 的 schema 定义
     * @param {String} marketplaceId - marketplace_id 默认值
     * @param {String} languageTag - language_tag 默认值
     * @returns {Array} 符合规范的数组
     */
    ensureArrayStructure: function (
      value,
      itemsSchema,
      marketplaceId,
      languageTag
    ) {
      if (!Array.isArray(value)) {
        return value;
      }

      return value.map((item) => {
        if (!item || typeof item !== "object") {
          return item;
        }

        const processedItem = { ...item };

        // 确保包含 marketplace_id
        if (
          itemsSchema.properties &&
          itemsSchema.properties.marketplace_id &&
          !processedItem.marketplace_id
        ) {
          processedItem.marketplace_id = marketplaceId;
        }

        // 确保包含 language_tag
        if (
          itemsSchema.properties &&
          itemsSchema.properties.language_tag &&
          !processedItem.language_tag
        ) {
          processedItem.language_tag = languageTag;
        }

        // 处理嵌套的数组字段
        if (itemsSchema.properties) {
          Object.keys(itemsSchema.properties).forEach((propName) => {
            const propSchema = itemsSchema.properties[propName];

            // 检查是否为属性数据字段（而非类型定义）
            const isPropertyField = amazonUtils.isPropertyField(
              propName,
              propSchema
            );

            if (
              processedItem[propName] &&
              isPropertyField &&
              propSchema.type === "array" &&
              propSchema.items
            ) {
              // 如果当前字段值不是数组，需要转换为数组
              if (!Array.isArray(processedItem[propName])) {
                // 将对象转换为数组格式
                if (
                  typeof processedItem[propName] === "object" &&
                  processedItem[propName] !== null
                ) {
                  const newItem = { ...processedItem[propName] };

                  // 根据 schema 要求添加必要字段
                  if (propSchema.items.properties) {
                    if (
                      propSchema.items.properties.marketplace_id &&
                      !newItem.marketplace_id
                    ) {
                      newItem.marketplace_id = marketplaceId;
                    }
                    if (
                      propSchema.items.properties.language_tag &&
                      !newItem.language_tag
                    ) {
                      newItem.language_tag = languageTag;
                    }
                    
                    // 递归处理转换后的数组元素内部的嵌套字段
                    const processedNewItem = amazonUtils.processNestedObjectProperties(
                      newItem,
                      propSchema.items.properties,
                      marketplaceId,
                      languageTag
                    );
                    
                    processedItem[propName] = [processedNewItem];
                  } else {
                    processedItem[propName] = [newItem];
                  }
                }
              } else {
                // 如果已经是数组，确保每个元素都包含必要字段并递归处理
                processedItem[propName] = processedItem[propName].map(
                  (arrayItem) => {
                    if (typeof arrayItem === "object" && arrayItem !== null) {
                      const newArrayItem = { ...arrayItem };

                      if (propSchema.items.properties) {
                        if (
                          propSchema.items.properties.marketplace_id &&
                          !newArrayItem.marketplace_id
                        ) {
                          newArrayItem.marketplace_id = marketplaceId;
                        }
                        if (
                          propSchema.items.properties.language_tag &&
                          !newArrayItem.language_tag
                        ) {
                          newArrayItem.language_tag = languageTag;
                        }
                        
                        // 递归处理数组元素内部的嵌套字段
                        return amazonUtils.processNestedObjectProperties(
                          newArrayItem,
                          propSchema.items.properties,
                          marketplaceId,
                          languageTag
                        );
                      }

                      return newArrayItem;
                    }
                    return arrayItem;
                  }
                );
              }
            } else if (
              processedItem[propName] &&
              isPropertyField &&
              propSchema.type === "object" &&
              propSchema.properties
            ) {
              // 处理对象类型的属性字段（如 type 字段）
              // 如果不是数组但 schema 要求是对象，确保包含必要字段
              if (
                typeof processedItem[propName] === "object" &&
                processedItem[propName] !== null
              ) {
                const newItem = { ...processedItem[propName] };

                // 根据 schema 要求添加必要字段
                if (
                  propSchema.properties.marketplace_id &&
                  !newItem.marketplace_id
                ) {
                  newItem.marketplace_id = marketplaceId;
                }
                if (
                  propSchema.properties.language_tag &&
                  !newItem.language_tag
                ) {
                  newItem.language_tag = languageTag;
                }

                // 递归处理对象内部的数组字段
                const processedNestedItem = amazonUtils.processNestedObjectProperties(
                  newItem,
                  propSchema.properties,
                  marketplaceId,
                  languageTag
                );

                processedItem[propName] = processedNestedItem;
              }
            }
          });
        }

        return processedItem;
      });
    },

    /**
     * 判断字段是否为属性数据字段（而非类型定义）
     * @param {String} fieldName - 字段名
     * @param {Object} fieldSchema - 字段的 schema 定义
     * @returns {Boolean} 是否为属性数据字段
     */
    isPropertyField: function (fieldName, fieldSchema) {
      // 如果字段有 properties 或 items，说明是属性数据而非类型定义
      if (fieldSchema.properties || fieldSchema.items) {
        return true;
      }

      // 如果字段有 title 或 description，通常也是属性数据
      if (fieldSchema.title || fieldSchema.description) {
        return true;
      }

      // 特殊处理：如果字段名为 "type" 且 schema 类型为 "object"，
      // 并且有具体的属性定义，则认为是属性数据
      if (fieldName === "type" && fieldSchema.type === "object") {
        return true;
      }

      // 如果 schema 类型是基本类型字符串（string, number, boolean, array, object）
      // 且没有其他属性定义，可能是类型定义
      const basicTypes = ["string", "number", "boolean", "array", "object"];
      if (
        typeof fieldSchema.type === "string" &&
        basicTypes.includes(fieldSchema.type) &&
        !fieldSchema.enum &&
        !fieldSchema.examples &&
        !fieldSchema.minLength &&
        !fieldSchema.maxLength
      ) {
        return false;
      }

      // 默认认为是属性数据
      return true;
    },

    /**
     * 递归处理嵌套对象内部的数组字段
     * @param {Object} obj - 要处理的对象
     * @param {Object} schemaProperties - schema 属性定义
     * @param {String} marketplaceId - marketplace_id 默认值
     * @param {String} languageTag - language_tag 默认值
     * @returns {Object} 处理后的对象
     */
    processNestedObjectProperties: function (
      obj,
      schemaProperties,
      marketplaceId,
      languageTag
    ) {
      const processedObj = { ...obj };

      // 遍历schema中定义的属性
      Object.keys(schemaProperties).forEach((propName) => {
        const propSchema = schemaProperties[propName];
        
        // 如果当前对象中存在该属性
        if (processedObj[propName] !== undefined) {
          // 如果schema定义为数组类型，但当前值不是数组，则转换为数组
          if (propSchema.type === "array" && !Array.isArray(processedObj[propName])) {
            const arrayItem = processedObj[propName];
            
            // 如果数组项有schema定义，需要根据items的properties添加必要字段
            if (propSchema.items && propSchema.items.properties) {
              const newArrayItem = { ...arrayItem };
              
              // 添加必要字段
              if (propSchema.items.properties.marketplace_id && !newArrayItem.marketplace_id) {
                newArrayItem.marketplace_id = marketplaceId;
              }
              if (propSchema.items.properties.language_tag && !newArrayItem.language_tag) {
                newArrayItem.language_tag = languageTag;
              }
              
              processedObj[propName] = [newArrayItem];
            } else {
              processedObj[propName] = [arrayItem];
            }
          }
          // 如果是对象类型且有properties定义，递归处理
          else if (
            propSchema.type === "object" &&
            propSchema.properties &&
            typeof processedObj[propName] === "object" &&
            processedObj[propName] !== null
          ) {
            processedObj[propName] = amazonUtils.processNestedObjectProperties(
              processedObj[propName],
              propSchema.properties,
              marketplaceId,
              languageTag
            );
          }
        }
      });

      return processedObj;
    },
  };

  // 为兼容性考虑，也直接暴露方法
  global.transformAmazonJsonSchemaToForm =
    global.amazonUtils.transformJsonSchemaToForm;
  global.amazonProcessFormData = global.amazonUtils.processFormData;
  global.amazonParseFormData = global.amazonUtils.parseAmazonData;
  global.amazonParseSchemaProperties = global.amazonUtils.parseSchemaProperties;
  global.amazonConvertToObjectArray = global.amazonUtils.convertToObjectArray;
  global.amazonTransformSubmitDataBySchema =
    global.amazonUtils.transformSubmitDataBySchema;
})(window);
