# 添加 placeholder 字段

## 任务描述
在 amazon.js 文件中，为表单字段添加 placeholder 功能，取值为当前属性的 example。如果是数组，则取第一个元素，否则为空字符串。

## 执行计划
1. 扩展 valueObj 处理逻辑：添加对 propValue.properties.value 的 example/examples 处理
2. 扩展 unitObj 处理逻辑：添加对 propValue.properties.unit 的 example/examples 处理 
3. 核对完善 fieldObj 处理逻辑：已处理 examples 数组，需添加对 example 的支持

## 实现细节
- 保持代码风格一致
- 优先检查 example，再检查 examples 
- 确保修改不影响其他功能 