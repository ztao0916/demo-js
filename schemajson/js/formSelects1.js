//ztt20250313---重写layui的formSelects
;(function (layui, window, factory) {
  if (typeof exports === 'object') {
    // 支持 CommonJS
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    // 支持 AMD
    define(factory)
  } else if (window.layui && layui.define) {
    //layui加载
    layui.define(['jquery'], function (exports) {
      exports('formSelects', factory())
    })
  } else {
    window.formSelects = factory()
  }
})(typeof layui == 'undefined' ? null : layui, window, function () {
  console.log('formSelects')
})
