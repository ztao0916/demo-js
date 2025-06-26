# dxm.js 分析文档

## 概述
`dxm.js` 是一个基于亚马逊卖家平台产品类型定义（demo.json）开发的表单处理工具。它主要用于生成和处理符合亚马逊产品数据规范的表单。

## 依赖关系
- 基于 `demo.json` 中定义的 JSON Schema
- 支持 UMD 模块规范（Universal Module Definition）
- 可在浏览器和 Node.js 环境中使用

## Properties 处理机制

### 1. 属性扁平化处理
dxm.js 采用扁平化处理方式，将 demo.json 中的嵌套属性结构转换为点号分隔的扁平结构：

```javascript
// demo.json 中的结构：
{
  "item_name": {
    "items": {
      "properties": {
        "value": { ... }
      }
    }
  }
}

// dxm.js 中的映射：
{
  "item_name.0.value": { ... }
}
```

### 2. 属性元数据扩展
为每个属性添加了额外的元数据信息：
- 双语标题和描述（title/tTitle, description/tDescription）
- 可编辑性控制（editable）
- 默认值处理（default_）
- 示例值（examples）

### 3. 属性分类映射
在 S 对象中定义了属性之间的关系映射：
```javascript
const S = {
    age_gender_category: ["AGE_GENDER_CATEGORY"],
    style: ["COLOR_NAME/STYLE_NAME/CONFIGURATION", ...],
    material: ["SIZE_NAME/MATERIAL_TYPE", ...],
    // ...
}
```

### 4. 属性验证规则继承
- 保留了 demo.json 中定义的验证规则（如 minLength, maxLength）
- 添加了额外的业务逻辑验证

## 实现方案

我们提供了两个文件来实现这个功能：

### 1. propertiesHandler.js
核心处理器，提供以下功能：
- 属性扁平化处理
- 元数据扩展
- 验证规则处理
- 属性关系管理

使用方法：
```javascript
const handler = new PropertiesHandler(schema);
const processedProps = handler.process();
```

### 2. example.js
示例文件，展示如何使用处理器：
```javascript
// 1. 导入处理器
const PropertiesHandler = require('./propertiesHandler');

// 2. 创建实例
const handler = new PropertiesHandler(schema);

// 3. 处理属性
const processedProps = handler.process();

// 4. 验证属性
const isValid = handler.validateProperty('item_name.0.value', 'Product Name');

// 5. 获取属性关系
const relations = handler.getPropertyRelations('style');
```

## 核心功能

### 1. 字段映射关系
文件定义了一个完整的字段映射系统，包括但不限于：
- 样式（style）
- 材质（material）
- 颜色（color）
- 尺寸（size）
- 包装（customer_package_type）
- 型号（model_number）
等多个产品属性的组合关系

### 2. 字段本地化
为每个字段提供了双语支持：
- 英文标题（title）和描述（description）
- 中文标题（tTitle）和描述（tDescription）

### 3. 字段属性控制
管理字段的各种属性：
- 可编辑性（editable）
- 默认值（default_）
- 示例值（examples）
- 验证规则

## 技术特点
1. 采用 IIFE（立即执行函数表达式）的方式封装代码
2. 支持多种模块加载方式：
   - CommonJS (Node.js)
   - AMD (RequireJS)
   - 全局变量（浏览器）
3. 使用严格模式（"use strict"）确保代码质量

## 主要数据结构
1. 字段组合映射（S对象）：
   - 定义了各种字段之间的组合关系
   - 使用数组存储可能的组合方式
   - 支持复杂的多字段组合

2. 字段定义（ye对象）：
   - 包含每个字段的详细定义
   - 支持多语言
   - 包含字段的元数据信息

## 使用场景
1. 产品信息录入表单生成
2. 数据验证和格式化
3. 多语言界面支持
4. 亚马逊产品数据规范符合性检查

## 注意事项
1. 字段定义需要严格遵循亚马逊的数据规范
2. 部分字段是不可编辑的（editable: false）
3. 某些字段有固定的默认值和市场ID 