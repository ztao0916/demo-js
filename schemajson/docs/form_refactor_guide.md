# 表单数据处理重构指南：从 `name` 到 `class`

## 1. 概述与目标

本文档旨在指导完成一项重要的前端重构任务：将表单数据的识别与处理逻辑从依赖 `name` 属性迁移到依赖 `class` 属性。

**核心目标:**

- **解耦**: 将用于原生表单提交的 `name` 属性与用于 JavaScript 数据转换的标识符分离开。
- **提升健壮性**: 基于 `class` 的 DOM 结构查询比复杂的字符串解析更稳定、更不易出错。
- **增强可读性**: HTML 结构本身就能清晰地反映最终的 JSON 数据结构，更易于理解和维护。

**预估总工时**: 18 小时 (约 3-4 工作日)
**预估迁移 LMS 工时**: 8 小时 (约 1-2 工作日)

---

## 2. 第一阶段：HTML 模板改造 (`index.html`)

**任务**: 修改 `laytpl` 模板，用特定格式的 `class` 来标记数据路径，并移除或调整原有的 `name` 属性。

### 2.1 Class 命名约定

- **普通属性**: `json-path--{level1}--{level2}--{key}`
  - 示例: `class="json-path--product_type--value"` 对应 `product_type.value`
- **数组属性 (容器)**: `json-array-path--{array_key}`
  - 示例: `class="json-array-path--batteries"` 对应 `batteries` 数组
- **数组项 (项目组)**: `json-array-item`
  - 这是一个标记类，用于标识数组中的一个对象。
- **数组项的子属性**: `json-item-key--{key}`
  - 示例: `class="json-item-key--battery_type"` 对应数组对象中的 `battery_type` 属性。

### 2.2 改造示例

#### 普通属性 (例如 `product_type.value`)

**修改前:**

```html
<input name="product_type.value" class="layui-input" />
```

**修改后:**

```html
<input class="layui-input json-path--product_type--value" />
```

#### 数组属性 (例如 `batteries`)

**修改前:**

```html
<!-- 结构比较扁平，依赖 name 属性区分 -->
<div class="layui-input-block">
  <div class="attrContent">
    <input name="batteries.battery_type" ... />
  </div>
  <div class="attrContent">
    <input name="batteries.battery_form" ... />
  </div>
  <!-- ... more items ... -->
</div>
```

**修改后:**

```html
<!-- 使用 class 明确定义数组、项目和键的层级关系 -->
<div
  class="layui-input-block json-array-path--batteries"
  data-children-length="2"
>
  <!-- 第一个项目组 -->
  <div class="json-array-item">
    <div class="attrContent">
      <input class="layui-input json-item-key--battery_type" ... />
    </div>
    <div class="attrContent">
      <input class="layui-input json-item-key--battery_form" ... />
    </div>
  </div>

  <!-- 第二个项目组 (克隆生成) -->
  <div class="json-array-item">
    <div class="attrContent">
      <input class="layui-input json-item-key--battery_type" ... />
    </div>
    <div class="attrContent">
      <input class="layui-input json-item-key--battery_form" ... />
    </div>
  </div>
</div>
```

**注意**: 在 `laytpl` 模板中，需要使用字符串替换将 `.` 转换为 `--`。例如: `{{d.parentKey.replace(/\./g, '--')}}`。

---

## 3. 第二阶段：数据获取重构 (DOM -> JSON)

**任务**: 编写新的 `getFormDataFromClass` 函数，以适配基于 `class` 的新 DOM 结构。

### 伪代码逻辑

```javascript
function getFormDataFromClass() {
    const formData = {};

    // 1. 处理所有数组
    $('.json-array-path--...').each(function() {
        const $arrayContainer = $(this);
        const arrayPath = // 从 class 中解析出路径 (e.g., "batteries")

        const dataArray = [];
        setValueByPath(formData, arrayPath, dataArray); // 在 formData 中创建数组

        // 遍历数组中的每个项目
        $arrayContainer.find('.json-array-item').each(function() {
            const $item = $(this);
            const itemObj = {};

            // 遍历项目中的每个字段
            $item.find('.json-item-key--...').each(function() {
                const $field = $(this);
                const key = // 从 class 中解析出 key (e.g., "battery_type")
                const value = $field.val();
                itemObj[key] = value;
            });

            dataArray.push(itemObj);
        });
    });

    // 2. 处理所有普通属性
    $('.json-path--...').each(function() {
        const $field = $(this);
        const fullPath = // 从 class 中解析出完整路径 (e.g., "product_type--value")
        const value = $field.val();

        // 将路径中的 '--' 替换回 '.'
        const finalPath = fullPath.replace(/--/g, '.');
        setValueByPath(formData, finalPath, value);
    });

    return formData;
}

// 辅助函数: 用于通过字符串路径在对象上安全地设置值
function setValueByPath(obj, path, value) {
    // ... 实现逻辑 ...
}
```

---

## 4. 第三阶段：数据还原重构 (JSON -> DOM)

**任务**: 编写新的 `restoreFormFromClass` 函数，通过递归将 JSON 数据填充到表单中。

### 伪代码逻辑

```javascript
function restoreFormFromClass(jsonData) {
  populate(jsonData, "");

  // 别忘了最后要重新渲染 layui 表单
  form.render();
}

function populate(currentObject, parentPath) {
  for (const key in currentObject) {
    const value = currentObject[key];
    // 构造当前路径 (e.g., "product_type" or "batteries")
    const currentPath = parentPath ? `${parentPath}--${key}` : key;

    if (Array.isArray(value)) {
      // --- 处理数组 ---
      const $arrayContainer = $(`.json-array-path--${currentPath}`);
      const $template = $arrayContainer
        .find(".json-array-item")
        .first()
        .clone(true); // 克隆模板
      $arrayContainer.empty(); // 清空容器

      value.forEach((itemObject) => {
        const $newItem = $template.clone(true);

        // 遍历对象，填充克隆出的新项
        for (const itemKey in itemObject) {
          const itemValue = itemObject[itemKey];
          $newItem.find(`.json-item-key--${itemKey}`).val(itemValue);
        }
        $arrayContainer.append($newItem);
      });

      // 调用按钮状态更新函数
      updateButtonsState($arrayContainer.find(".maxUniqueItemsBtns"));
    } else if (typeof value === "object" && value !== null) {
      // --- 处理嵌套对象，递归 ---
      populate(value, currentPath);
    } else {
      // --- 处理简单值 ---
      const finalPath = currentPath.replace(/\./g, "--");
      $(`.json-path--${finalPath}`).val(value);
    }
  }
}
```

---

## 5. 第四阶段：联调与回归测试

**任务**: 将新函数集成到业务流程中，并进行全面的功能测试。

### 测试清单

- [ ] **数据还原测试**:
  - [ ] 打开不同站点 (US, DE, JP...) 的 JSON，验证数据是否能被正确、完整地填充到表单上。
  - [ ] 特别检查数组字段是否按正确的数量生成了项目组。
  - [ ] 检查嵌套对象的字段是否填充正确。
- [ ] **数据获取测试**:
  - [ ] 在表单上填写数据，特别是动态增删数组项后，点击获取数据。
  - [ ] 验证生成的 JSON 结构是否与预期完全一致。
- [ ] **数据闭环测试**:
  - [ ] 执行 `JSON -> DOM -> JSON'` 的完整流程。
  - [ ] 对比 `JSON` 和 `JSON'`，确保两者的数据完全一致，没有丢失或错位。
- [ ] **边缘情况测试**:
  - [ ] 测试空数组、空对象、空字符串等值的处理。
  - [ ] 测试包含特殊字符的数据。
