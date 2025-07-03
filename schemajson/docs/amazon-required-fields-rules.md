# Amazon JSON Schema必填字段判断规则

本文档分析了Amazon JSON Schema中必填字段的判断规则，包括显式和隐式规则。这些规则可用于动态判断字段是否必填，而不需要硬编码固定的字段列表。

## 一、显式必填规则

### 1. 顶层required数组

JSON Schema通过顶层的`required`数组显式声明必填字段，例如：

```json
{
  "type": "object",
  "required": [
    "brand",
    "bullet_point",
    "country_of_origin",
    "item_name",
    "item_type_keyword",
    "product_description",
    "supplier_declared_dg_hz_regulation"
  ],
  "properties": {
    // 各属性定义
  }
}
```

上述Schema中，`brand`, `bullet_point`, `country_of_origin`等字段都是显式声明的必填字段。

### 2. 嵌套对象的required数组

对于嵌套对象，其内部也可以有`required`数组，例如：

```json
"items": {
  "type": "object",
  "required": [
    "language_tag",
    "value"
  ],
  "properties": {
    // 属性定义
  }
}
```

这表示在该嵌套对象中，`language_tag`和`value`是必填字段。

## 二、隐式必填规则

除了显式声明的必填字段外，Amazon Schema中还有多种隐式规则表明字段是必填的：

### 1. 属性特性判断

#### 1.1 editable属性

当字段的`editable`属性设为`false`时，通常表示该字段是必填的：

```json
"value": {
  "title": "Brand Name",
  "description": "Provide the brand name of the product",
  "editable": false,
  "hidden": false,
  "type": "string"
}
```

#### 1.2 minLength属性

当字段设置了`minLength`且大于0时，通常表示该字段必须有值：

```json
"value": {
  "type": "string",
  "minLength": 1,
  "maxLength": 100
}
```

#### 1.3 minimum属性

类似于`minLength`，数值型字段设置了`minimum`且不为0时，通常表示必填：

```json
"value": {
  "type": "number",
  "minimum": 1
}
```

### 2. 数组类型字段

#### 2.1 minItems属性

当数组类型字段设置了`minItems`且大于0时，表示该数组必须包含指定数量的元素：

```json
"bullet_point": {
  "type": "array",
  "minItems": 1,
  // 其他属性
}
```

#### 2.2 items.required属性

数组的`items`对象中的`required`数组，指定了数组元素中的必填属性：

```json
"items": {
  "type": "object",
  "required": ["value"],
  "properties": {
    "value": {
      // 属性定义
    }
  }
}
```

## 三、上下文相关必填规则

某些字段的必填性取决于其他字段的值或应用场景：

### 1. Fulfillment Channel关联必填字段

当`fulfillment_availability.fulfillment_channel_code`选择`AMAZON_NA`时，以下字段变为必填：

- `item_package_dimensions.length` (Item Package Length)
- `item_package_dimensions.length_unit` (Package Length Unit)
- `item_package_dimensions.width` (Item Package Width)
- `item_package_dimensions.width_unit` (Package Width Unit)
- `item_package_dimensions.height` (Item Package Height)
- `item_package_dimensions.height_unit` (Package Height Unit)
- `item_package_weight` (Package Weight)
- `item_package_weight.weight_unit` (Package Weight Unit)
- `number_of_boxes` (Number of Boxes)

例如，以下Schema片段表明了这种关联：

```json
"fulfillment_availability": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "fulfillment_channel_code": {
        "title": "Fulfillment Channel Code",
        "type": "string",
        "enum": [
          "AMAZON_NA",
          "DEFAULT"
        ],
        "enumNames": [
          "AMAZON_NA",
          "DEFAULT"
        ]
      }
    }
  }
}
```

### 2. 产品类型相关必填字段

不同的产品类型(`item_type_keyword`)可能有不同的必填字段要求。例如，汽车配件类产品可能需要提供额外的合规信息。

## 四、特殊产品属性必填规则

以下是一些特殊产品属性通常是必填的：

### 1. 基本信息类

- `brand` (品牌名称)
- `item_name` (商品名称)
- `item_type_keyword` (商品类型关键字)
- `product_description` (产品描述)
- `bullet_point` (要点说明)

### 2. 合规信息类

- `country_of_origin` (原产国)
- `supplier_declared_dg_hz_regulation` (危险品法规)
- `product_compliance_certificate` (产品合规证书)

### 3. 产品属性类

- `model_number` (型号)
- `model_name` (型号名称)
- `manufacturer` (制造商)
- `part_number` (零件号)
- `number_of_items` (物品数量)

### 4. 销售信息类

- `condition_type` (商品状况)
- `list_price` (标价)

## 五、实现判断逻辑

基于上述规则，判断字段是否必填的逻辑可以概括为：

1. 检查字段是否在顶层`required`数组中
2. 检查字段属性是否符合隐式必填规则（如`editable: false`或`minLength > 0`）
3. 检查字段是否为数组且`minItems > 0`且`items.required`包含关键属性
4. 检查字段是否与其他字段相关联（如`fulfillment_channel_code`为`AMAZON_NA`时的包装尺寸字段）
5. 检查字段是否为特定产品类型的必填字段

通过应用这些规则，可以动态地从JSON Schema中识别出必填字段，而不需要硬编码固定的字段列表。 