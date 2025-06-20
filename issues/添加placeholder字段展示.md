# 添加 placeholder 字段展示

## 任务描述
在表单中展示 placeholder 字段，将之前添加到字段配置中的 placeholder 属性显示在表单输入框中。

## 执行计划
1. 修改 schemajson/index.html 文件中的 renderBasicField 函数
2. 在生成 input 元素时，检查 field 对象是否含有 placeholder 属性
3. 如果有 placeholder 属性，将其添加到 input 元素的 placeholder 属性中

## 实现细节
- 保持与现有代码风格一致
- 不影响其他表单功能 