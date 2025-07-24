function convertObjectToString(obj) {
  const parts = [];

  // 遍历对象的每个键值对
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 将值转换为JSON字符串
      const valueStr = JSON.stringify(obj[key]);
      // 对双引号添加转义符
      const escapedValue = valueStr.replace(/"/g, '\\"');
      // 组合键和值，添加到数组中
      parts.push(`${key}:${escapedValue}`);
    }
  }

  // 用#,#连接所有部分
  return parts.join("#,#");
}

function convertStringToObject(str) {
  // 按分隔符拆分字符串
  const pairs = str.split("#,#");
  const result = {};

  // 处理每个键值对
  pairs.forEach((pair) => {
    // 找到第一个冒号的位置，分割键和值
    const colonIndex = pair.indexOf(":");
    if (colonIndex === -1) return;

    const key = pair.substring(0, colonIndex);
    const valueStr = pair.substring(colonIndex + 1);

    try {
      // 将值解析为JSON对象
      const value = JSON.parse(valueStr);
      result[key] = value;
    } catch (e) {
      // 如果解析失败，直接存储原始字符串
      result[key] = valueStr;
      console.error(`解析 ${key} 时出错:`, e);
    }
  });

  return result;
}
