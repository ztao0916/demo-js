/**
 * parse.js - 亚马逊数据解析工具
 * 功能：解析亚马逊格式的数据字符串，并过滤掉常量字段
 */

/**
 * 解析亚马逊数据字符串，并过滤掉marketplace_id和language_tag字段
 * @param {String} dataString - 以#,#分隔的亚马逊数据字符串
 * @return {Object} 解析后的数据对象，不包含marketplace_id和language_tag字段
 */
function parseAmazonData (dataString) {
  if (!dataString || typeof dataString !== 'string') {
    console.error('数据字符串无效')
    return null
  }

  // 分割字符串获取键值对
  const pairs = dataString.split('#,#')
  const parsedData = {}

  // 解析每个键值对
  pairs.forEach(pair => {
    try {
      // 提取键和值，只替换第一个冒号为##,##
      const colonIndex = pair.indexOf(':')
      if (colonIndex === -1) return

      const key = pair.substring(0, colonIndex)
      let valueStr = pair.substring(colonIndex + 1)

      // 将原始键值对中的第一个冒号替换为##,##
      const processedPair = pair.replace(':', '##,##')

      // 将键值对存入结果对象
      parsedData[key] = JSON.parse(valueStr)
    } catch (outerError) {
      console.error('处理键值对时出错:', outerError)
    }
  })
  //遍历parsedData,只取value对象中的value或者数组第一个对象的value
  let tarData = {}
  for (const key in parsedData) {
    let value = parsedData[key]
    if (value instanceof Array) {
      let valObj = value[0]
      let tarVal = valObj.value
      tarData[key] = tarVal
    } else if (value instanceof Object) {
      let tarVal = value.value
      tarData[key] = tarVal
    }
  }
  console.log('tarData', tarData)
  return tarData
}

// 导出函数，使其可以在浏览器和Node.js环境中使用
if (typeof window !== 'undefined') {
  // 浏览器环境
  window.parseAmazonData = parseAmazonData
} else if (typeof module !== 'undefined' && module.exports) {
  // Node.js环境
  module.exports = {
    parseAmazonData
  }
}
