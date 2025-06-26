# JSON Schema 到 JavaScript 字段映射规则文档

## 概述

本文档详细说明了 `dxm.json` (JSON Schema) 中的字段定义如何转换为 `dxm.js` 中 `be` 函数的字段映射规则。

## 核心映射规则

### 1. 必填字段 (Required Fields) 映射规则

#### 1.1 根级别必填字段识别

**JSON Schema 定义：**
```json
{
  "required": [
    "brand",
    "bullet_point", 
    "country_of_origin",
    "item_name",
    "item_type_keyword",
    "product_description",
    "supplier_declared_dg_hz_regulation"
  ]
}
```

**JavaScript 映射规则：**
- 根级别 `required` 数组中的字段在 `be` 函数中被标记为 `required: !0` (true)
- 非根级别必填字段的父级字段也会被自动标记为必填

#### 1.2 嵌套对象必填字段映射

**JSON Schema 示例 - item_name：**
```json
"item_name": {
  "type": "array",
  "items": {
    "type": "object", 
    "required": ["language_tag", "value"],
    "properties": {
      "value": {
        "minLength": 0,
        "maxLength": 200
      },
      "language_tag": { "$ref": "#/$defs/language_tag" }
    }
  }
}
```

**JavaScript 映射结果：**
```javascript
i({ name: "item_name", required: !0, fieldType: "string" }),
i({ name: "item_name.0", required: !0, maxItems: 1, fieldType: "string" }),
i({ name: "item_name.0.value", required: !0, maxItems: 1, minLength: 0, maxLength: 200, fieldType: "string" }),
i({ name: "item_name.0.language_tag", required: !0, maxItems: 1, fieldType: "string" })
```

### 2. 字段层级映射规则

#### 2.1 数组类型字段处理

**规则：**
- 数组类型字段使用 `.0` 索引表示第一个元素
- 父级字段和子级字段都会生成对应的映射
- `maxItems: 1` 表示单项数组

**示例：**
```
item_name (根字段) → required: true
├── item_name.0 (数组元素) → required: true  
    ├── item_name.0.value → required: true
    ├── item_name.0.language_tag → required: true
    └── item_name.0.marketplace_id → required: false (可选)
```

#### 2.2 对象属性映射

**JSON Schema 中的 items.required：**
```json
"items": {
  "required": ["language_tag", "value"]
}
```

**映射规则：**
- `required` 数组中的属性在 JS 中标记为 `required: !0`
- 非 `required` 的属性（如 `marketplace_id`）不设置 `required` 属性

### 3. 字段约束映射

#### 3.1 长度约束映射

**JSON Schema：**
```json
"value": {
  "minLength": 0,
  "maxLength": 200
}
```

**JavaScript 映射：**
```javascript
minLength: 0,
maxLength: 200
```

#### 3.2 枚举值映射

**JSON Schema：**
```json
"type": {
  "enum": ["ean", "gtin", "upc"],
  "enumNames": ["EAN", "GTIN", "UPC"]
}
```

**JavaScript 映射：**
```javascript
options: ["ean", "gtin", "upc"],
optionLabels: {
  ean: "EAN",
  gtin: "GTIN", 
  upc: "UPC"
}
```

### 4. 特殊字段处理规则

#### 4.1 引用字段处理

**JSON Schema：**
```json
"language_tag": { "$ref": "#/$defs/language_tag" }
```

**JavaScript 映射：**
```javascript
tipsOptions: ["en_US"],
optionLabels: { en_US: "English (United States)" }
```

#### 4.2 可选字段处理

**规则：**
- 不在根级别 `required` 数组中的字段，其根级别映射不包含 `required` 属性
- 但其子级必填属性仍然会被标记为 `required: !0`

**示例 - externally_assigned_product_identifier：**
```javascript
// 根字段不是必填的
i({ name: "externally_assigned_product_identifier", fieldType: "string" }),
// 但子字段是必填的
i({ name: "externally_assigned_product_identifier.0", required: !0, maxItems: 1, fieldType: "string" }),
i({ name: "externally_assigned_product_identifier.0.type", required: !0, maxItems: 1, fieldType: "string" })
```

## 映射算法总结

1. **扫描根级别 required 数组** → 标记顶级必填字段
2. **遍历 properties 对象** → 生成字段映射
3. **处理数组类型** → 添加 `.0` 索引和 `maxItems: 1`
4. **处理嵌套 required** → 标记子级必填字段
5. **转换约束条件** → 映射长度、枚举等约束
6. **处理引用字段** → 解析 `$ref` 并生成选项

## 实际映射验证

### 验证案例 1: item_name (根级别必填字段)

**JSON Schema 定义：**
```json
// 根级别 required 数组
"required": ["item_name", "brand", ...]

// 字段定义
"item_name": {
  "type": "array",
  "items": {
    "required": ["language_tag", "value"],
    "properties": {
      "value": { "minLength": 0, "maxLength": 200 },
      "language_tag": { "$ref": "#/$defs/language_tag" },
      "marketplace_id": { "$ref": "#/$defs/marketplace_id" }
    }
  }
}
```

**JavaScript 映射结果：**
```javascript
// 根字段 - 必填 (因为在根级别 required 中)
i({ name: "item_name", required: !0, fieldType: "string" }),

// 数组元素 - 必填 (继承父级必填状态)
i({ name: "item_name.0", required: !0, maxItems: 1, fieldType: "string" }),

// value 属性 - 必填 (在 items.required 中)
i({ name: "item_name.0.value", required: !0, maxItems: 1, minLength: 0, maxLength: 200, fieldType: "string" }),

// language_tag 属性 - 必填 (在 items.required 中)
i({ name: "item_name.0.language_tag", required: !0, maxItems: 1, fieldType: "string", tipsOptions: ["en_US"], optionLabels: { en_US: "English (United States)" } }),

// marketplace_id 属性 - 可选 (不在 items.required 中)
i({ name: "item_name.0.marketplace_id", maxItems: 1, fieldType: "string", tipsOptions: ["ATVPDKIKX0DER"], optionLabels: { ATVPDKIKX0DER: "Amazon.com" } })
```

### 验证案例 2: merchant_suggested_asin (非根级别必填字段)

**JSON Schema 定义：**
```json
// 不在根级别 required 数组中
"merchant_suggested_asin": {
  "type": "array",
  "items": {
    "required": ["value"],  // 只有 value 是必填的
    "properties": {
      "value": { "minLength": 10, "maxLength": 10 },
      "marketplace_id": { "$ref": "#/$defs/marketplace_id" }
    }
  }
}
```

**JavaScript 映射结果：**
```javascript
// 根字段 - 可选 (不在根级别 required 中)
i({ name: "merchant_suggested_asin", fieldType: "string" }),

// 数组元素 - 必填 (一旦使用该字段，数组元素就是必填的)
i({ name: "merchant_suggested_asin.0", required: !0, maxItems: 1, fieldType: "string" }),

// value 属性 - 必填 (在 items.required 中)
i({ name: "merchant_suggested_asin.0.value", required: !0, maxItems: 1, minLength: 10, maxLength: 10, maxUtf8ByteLength: 40, fieldType: "string" }),

// marketplace_id 属性 - 可选 (不在 items.required 中)
i({ name: "merchant_suggested_asin.0.marketplace_id", maxItems: 1, fieldType: "string", tipsOptions: ["ATVPDKIKX0DER"], optionLabels: { ATVPDKIKX0DER: "Amazon.com" } })
```

## 映射规则总结

### 必填字段判断逻辑

1. **根字段必填判断：**
   ```
   if (字段名 in 根级别required数组) {
     required: !0
   } else {
     // 不设置 required 属性
   }
   ```

2. **数组元素必填判断：**
   ```
   if (父字段是必填 || 字段有minItems约束) {
     required: !0
   }
   ```

3. **对象属性必填判断：**
   ```
   if (属性名 in items.required数组) {
     required: !0
   }
   ```

### 字段层级生成规则

```
字段名 (根字段)
├── 字段名.0 (数组第一个元素)
    ├── 字段名.0.属性1 (对象属性)
    ├── 字段名.0.属性2 (对象属性)
    └── 字段名.0.属性N (对象属性)
```

### 约束条件映射表

| JSON Schema | JavaScript | 说明 |
|-------------|------------|------|
| `minLength` | `minLength` | 最小长度 |
| `maxLength` | `maxLength` | 最大长度 |
| `maxUtf8ByteLength` | `maxUtf8ByteLength` | UTF-8 字节长度限制 |
| `enum` | `options` | 枚举选项 |
| `enumNames` | `optionLabels` | 枚举显示名称 |
| `$ref: "#/$defs/language_tag"` | `tipsOptions: ["en_US"]` | 语言标签引用 |
| `$ref: "#/$defs/marketplace_id"` | `tipsOptions: ["ATVPDKIKX0DER"]` | 市场ID引用 |

## 验证结果

通过对比 JSON Schema 和 JavaScript 映射，验证以下规则：
- ✅ 根级别必填字段正确映射 (`item_name`, `brand`)
- ✅ 嵌套必填字段正确传递 (`item_name.0.value`, `item_name.0.language_tag`)
- ✅ 数组索引正确处理 (`.0` 后缀)
- ✅ 约束条件正确转换 (`minLength`, `maxLength`, `enum`)
- ✅ 枚举值正确映射 (`options` + `optionLabels`)
- ✅ 可选字段正确处理 (`merchant_suggested_asin` 根字段不设置 `required`)
- ✅ 引用字段正确解析 (`$ref` → `tipsOptions`)

## 自动化工具实现

基于以上映射规则，我们实现了自动化转换工具：

### 工具文件说明

1. **`schema-to-field-mapper.js`** - 核心映射器类
   - `SchemaToFieldMapper` 类：主要的转换逻辑
   - `convertSchemaToFields()` 函数：便捷转换函数
   - `convertSchemaToBeFunction()` 函数：生成 be 函数格式

2. **`test-schema-mapper.js`** - 测试验证文件
   - 包含测试用例和验证逻辑
   - 验证映射规则的正确性

3. **`usage-example.js`** - 使用示例文件
   - 演示如何处理完整的 dxm.json 文件
   - 生成统计分析和对比结果

### 实际处理结果

使用工具处理完整的 `dxm.json` 文件（25,595 行）：

```
Schema 信息:
- 根字段数: 113 个
- 处理时间: 1ms
- 生成字段映射: 541 个

映射统计:
- 总字段数: 541
- 必填字段数: 273 (50.5%)
- 有约束条件的字段数: 56 (10.4%)
- 有枚举选项的字段数: 46 (8.5%)
- 有引用的字段数: 146 (27.0%)
```

### 输出文件

工具自动生成以下文件：
- `field-mappings.json` - 完整的字段映射数据
- `generated-be-function.js` - 完整的 be 函数代码
- `partial-be-function.js` - 部分字段的 be 函数代码

### 使用方法

```javascript
// 基本使用
const SchemaToFieldMapper = require('./schema-to-field-mapper.js');
const mapper = new SchemaToFieldMapper();
const mappings = mapper.schemaToFieldMapping(schema);

// 便捷函数
const { convertSchemaToFields, convertSchemaToBeFunction } = require('./schema-to-field-mapper.js');
const mappings = convertSchemaToFields(schema);
const beFunction = convertSchemaToBeFunction(schema);
```

## 总结

本文档详细分析了 JSON Schema 到 JavaScript 字段映射的完整规则，并提供了自动化转换工具。该工具能够：

1. **准确映射必填字段** - 正确识别根级别和嵌套必填字段
2. **处理复杂结构** - 支持数组、对象、引用等复杂数据结构
3. **转换约束条件** - 自动映射长度限制、枚举值等约束
4. **生成标准格式** - 输出符合 dxm.js 格式的字段配置
5. **高效处理** - 能够快速处理大型 Schema 文件

这套工具和文档为理解和自动化 Amazon 产品类型 Schema 的处理提供了完整的解决方案。
