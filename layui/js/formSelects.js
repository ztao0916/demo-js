/**
 * name: formSelects
 * 基于Layui Select多选
 * version: 4.0.0.0910
 * http://sun.faysunshine.com/layui/formSelects-v4/dist/formSelects-v4.js
 */
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
  let v = '4.0.0.0910',
    NAME = 'xm-select', //name
    PNAME = 'xm-select-parent', //父级
    INPUT = 'xm-select-input', //输入框
    TDIV = 'xm-select--suffix', //后缀
    THIS = 'xm-select-this', //this
    LABEL = 'xm-select-label', //label
    SEARCH = 'xm-select-search', //搜索
    SEARCH_TYPE = 'xm-select-search-type', //搜索类型
    SHOW_COUNT = 'xm-select-show-count', //显示数量
    CREATE = 'xm-select-create', //创建
    CREATE_LONG = 'xm-select-create-long', //创建长
    MAX = 'xm-select-max', //最大
    SKIN = 'xm-select-skin', //皮肤
    DIRECTION = 'xm-select-direction', //方向
    HEIGHT = 'xm-select-height', //高度
    DISABLED = 'xm-dis-disabled', //禁用
    DIS = 'xm-select-dis', //dis
    TEMP = 'xm-select-temp', //temp
    RADIO = 'xm-select-radio', //radio
    LINKAGE = 'xm-select-linkage', //linkage
    DL = 'xm-select-dl', //dl
    DD_HIDE = 'xm-select-hide', //隐藏dd
    HIDE_INPUT = 'xm-hide-input', //隐藏input
    SANJIAO = 'xm-select-sj', //三角
    ICON_CLOSE = 'xm-icon-close', //icon-close
    FORM_TITLE = 'xm-select-title', //title
    FORM_SELECT = 'xm-form-select', //表单的form-select
    FORM_SELECTED = 'xm-form-selected', //表单的form-selected
    FORM_NONE = 'xm-select-none', //表单的select-none
    FORM_EMPTY = 'xm-select-empty', //表单的select-empty
    FORM_INPUT = 'xm-input', //表单的input
    FORM_DL_INPUT = 'xm-dl-input', //表单的dl-input
    FORM_SELECT_TIPS = 'xm-select-tips', //表单的select-tips
    CHECKBOX_YES = 'xm-iconfont', //checkbox-yes
    FORM_TEAM_PID = 'XM_PID_VALUE', //form-team-pid
    ALL_PEOPLE = 'xm-select-allpeople', //allpeople
    CZ = 'xm-cz', //操作
    CZ_GROUP = 'xm-cz-group', //操作分组
    TIPS = '请选择', //提示
    data = {}, //data
    events = {
      on: {},
      endOn: {},
      filter: {},
      maxTips: {},
      opened: {},
      closed: {}
    },
    //忽略ajax,暂时用不到
    ajax = {
      type: 'get',
      header: {},
      first: true,
      data: {},
      searchUrl: '',
      searchName: 'keyword',
      searchVal: null,
      keyName: 'name',
      keyVal: 'value',
      keySel: 'selected',
      keyDis: 'disabled',
      keyChildren: 'children',
      dataType: '',
      delay: 500,
      beforeSuccess: null,
      success: null,
      error: null,
      beforeSearch: null,
      response: {
        statusCode: 0,
        statusName: 'code',
        msgName: 'msg',
        dataName: 'data'
      },
      tree: {
        nextClick: function (id, item, callback) {
          callback([])
        },
        folderChoose: true,
        lazy: true
      }
    },
    //快捷按钮
    quickBtns = [
      {
        icon: 'xm-iconfont icon-quanxuan', //全选
        name: '全选',
        click: function (id, cm) {
          cm.selectAll(id, true, true)
        }
      },
      {
        icon: 'xm-iconfont icon-qingkong', //清空
        name: '清空',
        click: function (id, cm) {
          cm.removeAll(id, true, true)
        }
      },
      {
        icon: 'xm-iconfont icon-fanxuan', //反选
        name: '反选',
        click: function (id, cm) {
          cm.reverse(id, true, true)
        }
      },
      {
        icon: 'xm-iconfont icon-pifu', //换肤
        name: '换肤',
        click: function (id, cm) {
          cm.skin(id)
        }
      },
      {
        name: '所有人员', //所有人员
        click: function (id, cm) {
          cm.allpeopleFn(id, true, true)
        }
      }
    ],
    $ = window.$ || (window.layui && window.layui.jquery),
    $win = $(window), //window
    ajaxs = {}, //ajax
    fsConfig = {}, //配置
    fsConfigs = {}, //配置
    FormSelects = function (options) {
      this.config = {
        name: null, //xm-select="xxx"
        max: null, //最大
        // 超过最大数量提示
        maxTips: (id, vals, val, max) => {
          let ipt = $(`[xid="${this.config.name}"]`).prev().find(`.${NAME}`) //获取输入框
          if (ipt.parents('.layui-form-item[pane]').length) {
            ipt = ipt.parents('.layui-form-item[pane]')
          }
          ipt.attr('style', 'border-color: red !important') //错误样式
          setTimeout(() => {
            ipt.removeAttr('style') //300ms后移除错误样式
          }, 300)
        },
        init: null, //初始化的选择值,
        on: null, //select值发生变化
        opened: null,
        closed: null,
        // 匹配搜索: 单个模糊匹配,多个精确匹配
        filter: (id, inputVal, val, isDisabled) => {
          // 快速判断空输入情况
          if (!inputVal || !inputVal.trim()) {
            return false // 空输入时显示所有选项
          }
          // 缓存处理后的输入值
          const trimmedInput = inputVal.trim()
          // 检查是否包含逗号（只检查一次）
          if (trimmedInput.indexOf(',') > -1) {
            // 多个精确匹配 - 预先分割搜索词
            const searchTerms = trimmedInput.replace(/，/g, ',').split(',')

            // 遍历每个搜索词，找到匹配项就返回false（显示）
            for (let i = 0; i < searchTerms.length; i++) {
              const term = searchTerms[i].trim()
              if (term && term === val.name) {
                return false
              }
            }
            return true // 没有匹配项则隐藏
          } else {
            // 单个模糊匹配 - 直接使用indexOf，避免额外的toLowerCase()操作
            return (
              val.name.toLowerCase().indexOf(trimmedInput.toLowerCase()) === -1
            )
          }
        },
        clearid: -1,
        direction: 'auto',
        height: '50px', //设为null为不设置高度，修改这里---------------------------------------------------
        isEmpty: false,
        btns: [quickBtns[0], quickBtns[1], quickBtns[2]], //默认按钮[全选,清空,反选]
        searchType: 0, //搜索类型: 0-模糊搜索, 1-精确搜索
        create: (id, name) => {
          //创建
          return Date.now() // 创建时间戳
        },
        template: (id, item) => {
          //模板
          return item.name // 返回选项的name
        },
        showCount: 0, //显示数量
        isCreate: false, //是否创建
        placeholder: TIPS, //提示
        clearInput: false //是否清空
      }
      this.select = null // 选择器
      this.values = [] // 已选值
      // 合并配置
      $.extend(
        this.config, //默认配置
        options, //用户配置
        //ajax配置
        {
          searchUrl: options.isSearch ? options.searchUrl : null, //搜索地址
          placeholder: options.optionsFirst //选项第一个
            ? options.optionsFirst.value
              ? TIPS
              : options.optionsFirst.innerHTML || TIPS
            : TIPS,
          btns: options.radio
            ? [quickBtns[1]]
            : options.allPeople
            ? [quickBtns[0], quickBtns[1], quickBtns[4], quickBtns[2]]
            : [quickBtns[0], quickBtns[1], quickBtns[2]]
        },
        fsConfigs[options.name] || fsConfig //用户配置
      )
      if (isNaN(this.config.showCount) || this.config.showCount <= 0) {
        this.config.showCount = 19921012
      }
    }

  //一些简单的处理方法
  let Common = function () {
    this.appender() //针对IE做的一些拓展
    this.on() //选择值发生变化
    this.onreset() //重置
  }

  // 针对IE做的一些拓展,无需关注
  Common.prototype.appender = function () {
    //针对IE做的一些拓展
    //拓展Array map方法
    if (!Array.prototype.map) {
      Array.prototype.map = function (i, h) {
        var b,
          a,
          c,
          e = Object(this),
          f = e.length >>> 0
        if (h) {
          b = h
        }
        a = new Array(f)
        c = 0
        while (c < f) {
          var d, g
          if (c in e) {
            d = e[c]
            g = i.call(b, d, c, e)
            a[c] = g
          }
          c++
        }
        return a
      }
    }

    //拓展Array foreach方法
    if (!Array.prototype.forEach) {
      Array.prototype.forEach = function forEach (g, b) {
        var d, c
        if (this == null) {
          throw new TypeError('this is null or not defined')
        }
        var f = Object(this)
        var a = f.length >>> 0
        if (typeof g !== 'function') {
          throw new TypeError(g + ' is not a function')
        }
        if (arguments.length > 1) {
          d = b
        }
        c = 0
        while (c < a) {
          var e
          if (c in f) {
            e = f[c]
            g.call(d, e, c, f)
          }
          c++
        }
      }
    }

    //拓展Array filter方法
    if (!Array.prototype.filter) {
      Array.prototype.filter = function (b) {
        if (this === void 0 || this === null) {
          throw new TypeError()
        }
        var f = Object(this)
        var a = f.length >>> 0
        if (typeof b !== 'function') {
          throw new TypeError()
        }
        var e = []
        var d = arguments[1]
        for (var c = 0; c < a; c++) {
          if (c in f) {
            var g = f[c]
            if (b.call(d, g, c, f)) {
              e.push(g)
            }
          }
        }
        return e
      }
    }
  }

  //#region 初始化页面上已有的select

  // 初始化
  Common.prototype.init = function (target) {
    // 获取目标select元素
    const $selects = $(target ? target : `select[${NAME}]`)

    $selects.each((index, select) => {
      const $select = $(select)
      const id = $select.attr(NAME)

      // 1. 初始化配置项
      const options = this.initOptions($select, select)

      // 2. 获取已选值
      const selectedValues = this.getSelectedValues($select)

      // 3. 创建FormSelects实例
      const fs = this.createFormSelects(options, selectedValues)

      // 4. 移除已有渲染
      this.removeExistingRender($select)

      // 5. 构建并渲染新的DOM结构
      this.renderNewStructure($select, fs, id)

      // 6. 绑定搜索事件
      this.bindSearchEvents(fs, id)
    })
  }

  // 初始化配置项
  Common.prototype.initOptions = function ($select, select) {
    return {
      name: $select.attr(NAME),
      disabled: select.disabled,
      max: $select.attr(MAX) - 0,
      isSearch: $select.attr(SEARCH) != undefined,
      searchUrl: $select.attr(SEARCH),
      isCreate: $select.attr(CREATE) != undefined,
      radio: $select.attr(RADIO) != undefined,
      skin: $select.attr(SKIN),
      direction: $select.attr(DIRECTION),
      optionsFirst: select.options[0],
      height: $select.attr(HEIGHT),
      formname: $select.attr('name') || $select.attr('_name'),
      layverify: $select.attr('lay-verify') || $select.attr('_lay-verify'),
      layverType: $select.attr('lay-verType'),
      searchType: $select.attr(SEARCH_TYPE) == 'dl' ? 1 : 0,
      showCount: $select.attr(SHOW_COUNT) - 0,
      allPeople: $select.attr(ALL_PEOPLE)
    }
  }

  // 获取已选值
  Common.prototype.getSelectedValues = function ($select) {
    return $select
      .find('option[selected]')
      .toArray()
      .map(option => ({
        name: option.innerHTML,
        value: option.value
      }))
  }

  // 创建FormSelects实例
  Common.prototype.createFormSelects = function (options, selectedValues) {
    const fs = new FormSelects(options)
    fs.values = selectedValues

    if (fs.config.init) {
      fs.values = this.processInitValues(fs.config.init, options.name)
      fs.config.init = fs.values.concat([])
    } else {
      fs.config.init = selectedValues.concat([])
    }

    !fs.values && (fs.values = [])
    data[options.name] = fs

    return fs
  }

  // 处理初始值
  Common.prototype.processInitValues = function (initValues, id) {
    return initValues
      .map(item => {
        if (typeof item == 'object') {
          return item
        }
        return {
          name: $(`select[xm-select="${id}"] option[value="${item}"]`).text(),
          value: item
        }
      })
      .filter(item => item.name)
  }

  // 移除已有渲染
  Common.prototype.removeExistingRender = function ($select) {
    const hasLayuiRender = $select.next(`.layui-form-select`)
    const hasRender = $select.next(`.${PNAME}`)

    hasLayuiRender[0] && hasLayuiRender.remove()
    hasRender[0] && hasRender.remove()
  }

  // 构建并渲染新的DOM结构
  Common.prototype.renderNewStructure = function ($select, fs, id) {
    const dinfo = this.renderSelect(id, fs.config.placeholder, $select[0])
    const heightStyle =
      !fs.config.height || fs.config.height == 'auto'
        ? ''
        : `xm-hg style="height: 34px;"`

    const inputHtml = this.createInputHtml(fs.config.isSearch)
    const isAllpelple = $(`select[xm-select=${id}]`).attr(ALL_PEOPLE)

    const reElem = this.createMainElement(
      fs,
      heightStyle,
      inputHtml,
      id,
      dinfo,
      isAllpelple
    )
    const $parent = $(`<div class="${PNAME}" FS_ID="${id}"></div>`)

    $parent.append(reElem)
    $select.after($parent)

    this.handleSelectAttributes($select, fs.config)
  }

  // 创建输入框HTML
  Common.prototype.createInputHtml = function (isSearch) {
    return [
      `<div class="${LABEL}">`,
      `<input type="text" fsw class="${FORM_INPUT} ${INPUT}" ${
        isSearch ? '' : 'style="display: none;"'
      } autocomplete="off" debounce="0" />`,
      `</div>`
    ].join('')
  }

  // 创建主元素
  Common.prototype.createMainElement = function (
    fs,
    heightStyle,
    inputHtml,
    id,
    dinfo,
    isAllpelple
  ) {
    return $(`<div class="${FORM_SELECT}" ${SKIN}="${fs.config.skin}">
      <input class="${HIDE_INPUT}" value="" name="${fs.config.formname}" 
        lay-verify="${fs.config.layverify}" lay-verType="${
      fs.config.layverType
    }"
        type="text" style="position: absolute;bottom: 0; z-index: -1;width: 100%; height: 100%; border: none; opacity: 0;"/>
      <div class="${FORM_TITLE} ${fs.config.disabled ? DIS : ''}">
        <div class="${FORM_INPUT} ${NAME}" ${heightStyle}>
          ${inputHtml}
          <i class="${SANJIAO}"></i>
        </div>
        <div class="${TDIV}">
          <input type="text" autocomplete="off" placeholder="${
            fs.config.placeholder
          }" 
            readonly="readonly" unselectable="on" class="${FORM_INPUT}">
        </div>
        <div></div>
      </div>
      <dl xid="${id}" class="${DL} ${fs.config.radio ? RADIO : ''}" 
        style="${isAllpelple ? 'min-width:380px;' : ''}">${dinfo}</dl>
    </div>`)
  }

  // 处理select属性
  Common.prototype.handleSelectAttributes = function ($select, config) {
    $select.attr('lay-ignore', '')
    $select.removeAttr('name') && $select.attr('_name', config.formname)
    $select.removeAttr('lay-verify') &&
      $select.attr('_lay-verify', config.layverify)
  }

  // 绑定搜索事件
  Common.prototype.bindSearchEvents = function (fs, id) {
    if (fs.config.isSearch) {
      ajaxs[id] = $.extend(
        {},
        ajax,
        { searchUrl: fs.config.searchUrl },
        ajaxs[id]
      )

      $(document).on('input', `div.${PNAME}[FS_ID="${id}"] .${INPUT}`, e => {
        this.search(id, e, fs.config.searchUrl)
      })

      if (fs.config.searchUrl) {
        this.triggerSearch(
          $(`div.${PNAME}[FS_ID="${id}"] .${FORM_SELECT}`),
          true
        )
      }
    } else {
      $(
        `div.${PNAME}[FS_ID="${id}"] .${FORM_SELECT} dl dd.${FORM_DL_INPUT}`
      ).css('display', 'none')
    }
  }

  //#endregion

  //#region 搜索事件
  //搜索处理
  Common.prototype.search = function (id, e, searchUrl, call) {
    // 1. 初始化搜索参数
    const searchParams = this.initSearchParams(id, e, searchUrl, call)
    if (!searchParams) return

    // 2. 获取搜索配置
    const config = this.getSearchConfig(id, searchParams.searchUrl)

    // 3. 执行搜索
    this.executeSearch(id, searchParams, config)
  }

  // 初始化搜索参数
  Common.prototype.initSearchParams = function (id, e, searchUrl, call) {
    const input = call || e.target

    // 处理特殊按键
    if (!call && this.isSpecialKey(e.keyCode)) {
      return null
    }

    return {
      input,
      inputValue: $.trim(input.value),
      searchUrl,
      $input: $(input)
    }
  }

  // 判断是否为特殊按键
  Common.prototype.isSpecialKey = function (keyCode) {
    const specialKeys = [9, 13, 37, 38, 39, 40]
    return specialKeys.includes(keyCode)
  }

  // 获取搜索配置
  Common.prototype.getSearchConfig = function (id, searchUrl) {
    const ajaxConfig = ajaxs[id] || ajax
    return {
      ...ajaxConfig,
      searchUrl: ajaxConfig.searchUrl || searchUrl,
      fs: data[id],
      $reElem: $(`dl[xid="${id}"]`).parents(`.${FORM_SELECT}`)
    }
  }

  // 执行搜索
  Common.prototype.executeSearch = function (id, params, config) {
    // 更新占位符
    this.changePlaceHolder(params.$input)

    // 根据搜索类型执行不同的搜索逻辑
    if (config.searchUrl) {
      this.executeRemoteSearch(id, params, config)
    } else {
      this.executeLocalSearch(id, params, config)
    }
  }

  // 执行远程搜索
  Common.prototype.executeRemoteSearch = function (id, params, config) {
    const { fs, searchUrl, $reElem } = config

    // 处理搜索值
    let inputValue = this.handleSearchValue(params.inputValue, config)

    // 执行搜索前检查
    if (!this.checkBeforeSearch(config, id, searchUrl, inputValue)) {
      return
    }

    // 设置延迟搜索
    this.setupDelayedSearch(fs, $reElem, id, searchUrl, inputValue, config)
  }

  // 处理搜索值
  Common.prototype.handleSearchValue = function (inputValue, config) {
    if (config.searchVal) {
      inputValue = config.searchVal
      config.searchVal = ''
    }
    return inputValue
  }

  // 检查搜索前条件
  Common.prototype.checkBeforeSearch = function (
    config,
    id,
    searchUrl,
    inputValue
  ) {
    return (
      !config.beforeSearch ||
      (config.beforeSearch instanceof Function &&
        config.beforeSearch(id, searchUrl, inputValue))
    )
  }

  // 设置延迟搜索
  Common.prototype.setupDelayedSearch = function (
    fs,
    $reElem,
    id,
    searchUrl,
    inputValue,
    config
  ) {
    const delay = config.first ? 10 : config.delay

    clearTimeout(fs.clearid)

    fs.clearid = setTimeout(() => {
      this.prepareRemoteSearch($reElem)
      this.ajax(id, searchUrl, inputValue, false, null, true)
    }, delay)
  }

  // 准备远程搜索
  Common.prototype.prepareRemoteSearch = function ($reElem) {
    $reElem.find(`dl > *:not(.${FORM_SELECT_TIPS})`).remove()
    $reElem
      .find(`dd.${FORM_NONE}`)
      .addClass(FORM_EMPTY)
      .text('请输入要搜索的内容')
  }

  // 执行本地搜索
  Common.prototype.executeLocalSearch = function (id, params, config) {
    const { $reElem, fs } = config
    const $dl = $reElem.find('dl')

    // 重置显示状态
    this.resetLocalSearchState($dl)

    // 执行过滤
    this.filterLocalOptions(id, params.inputValue, $dl, fs)

    // 处理分组显示
    this.handleGroupVisibility($dl)

    // 处理动态创建
    this.handleDynamicCreation(id, fs.config.isCreate, params.inputValue)

    // 更新搜索结果状态
    this.updateSearchResultStatus($reElem)
  }

  // 重置本地搜索状态
  Common.prototype.resetLocalSearchState = function ($dl) {
    $dl.find(`.${DD_HIDE}`).removeClass(DD_HIDE)
  }

  // 过滤本地选项
  Common.prototype.filterLocalOptions = function (id, inputValue, $dl, fs) {
    const searchFun = events.filter[id] || fs.config.filter

    $dl.find(`dd:not(.${FORM_SELECT_TIPS})`).each((_, item) => {
      const $item = $(item)
      if (this.shouldHideOption(searchFun, id, inputValue, $item)) {
        $item.addClass(DD_HIDE)
      }
    })
  }

  // 判断是否应该隐藏选项
  Common.prototype.shouldHideOption = function (
    searchFun,
    id,
    inputValue,
    $item
  ) {
    return (
      searchFun &&
      searchFun(
        id,
        inputValue,
        this.getItem(id, $item),
        $item.hasClass(DISABLED)
      ) === true
    )
  }

  // 处理分组显示
  Common.prototype.handleGroupVisibility = function ($dl) {
    $dl.find('dt').each((_, item) => {
      const $dt = $(item)
      if (!$dt.nextUntil('dt', `:not(.${DD_HIDE})`).length) {
        $dt.addClass(DD_HIDE)
      }
    })
  }

  // 处理动态创建
  Common.prototype.handleDynamicCreation = function (id, isCreate, inputValue) {
    if (isCreate) {
      this.create(id, isCreate, inputValue)
    }
  }

  // 更新搜索结果状态
  Common.prototype.updateSearchResultStatus = function ($reElem) {
    const $shows = $reElem.find(
      `dl dd:not(.${FORM_SELECT_TIPS}):not(.${DD_HIDE})`
    )
    const $none = $reElem.find(`dd.${FORM_NONE}`)

    if (!$shows.length) {
      $none.addClass(FORM_EMPTY).text('无匹配项')
    } else {
      $none.removeClass(FORM_EMPTY)
    }
  }
  //#endregion

  Common.prototype.isArray = function (obj) {
    return Object.prototype.toString.call(obj) == '[object Array]'
  }

  //#region 触发搜索
  /**
   * 触发搜索操作
   * @param {HTMLElement|jQuery} div - 目标元素
   * @param {boolean} isCall - 是否强制触发
   */
  Common.prototype.triggerSearch = function (div, isCall) {
    // 1. 获取目标元素
    const $targets = this.getSearchTargets(div)

    // 2. 遍历处理每个目标
    $targets.forEach($elem => {
      this.handleSearchTarget($elem, isCall)
    })
  }

  /**
   * 获取搜索目标元素
   * @param {HTMLElement|jQuery} div - 目标元素
   * @returns {jQuery[]} 目标元素数组
   */
  Common.prototype.getSearchTargets = function (div) {
    if (div) {
      return [$(div)]
    }
    return $(`.${FORM_SELECT}`)
      .toArray()
      .map(elem => $(elem))
  }

  /**
   * 处理单个搜索目标
   * @param {jQuery} $elem - 目标元素
   * @param {boolean} isCall - 是否强制触发
   */
  Common.prototype.handleSearchTarget = function ($elem, isCall) {
    // 1. 获取搜索ID
    const id = this.getSearchId($elem)
    if (!id) return

    // 2. 检查搜索条件
    if (!this.shouldTriggerSearch(id, isCall)) return

    // 3. 获取搜索输入框
    const $input = this.getSearchInput($elem, id)
    if (!$input.length) return

    // 4. 执行搜索
    this.executeTriggerSearch(id, $input)
  }

  /**
   * 获取搜索ID
   * @param {jQuery} $elem - 目标元素
   * @returns {string|null} 搜索ID
   */
  Common.prototype.getSearchId = function ($elem) {
    return $elem.find('dl').attr('xid')
  }

  /**
   * 检查是否应该触发搜索
   * @param {string} id - 搜索ID
   * @param {boolean} isCall - 是否强制触发
   * @returns {boolean} 是否应该触发
   */
  Common.prototype.shouldTriggerSearch = function (id, isCall) {
    return isCall || (id && data[id] && data[id].config.isEmpty)
  }

  /**
   * 获取搜索输入框
   * @param {jQuery} $elem - 目标元素
   * @param {string} id - 搜索ID
   * @returns {jQuery} 输入框元素
   */
  Common.prototype.getSearchInput = function ($elem, id) {
    const searchType = data[id].config.searchType
    const selector =
      searchType === 0
        ? `.${LABEL} .${INPUT}`
        : `dl .${FORM_DL_INPUT} .${INPUT}`

    return $elem.find(selector)
  }

  /**
   * 执行触发搜索
   * @param {string} id - 搜索ID
   * @param {jQuery} $input - 输入框元素
   */
  Common.prototype.executeTriggerSearch = function (id, $input) {
    try {
      this.search(id, null, null, $input)
    } catch (error) {
      console.error(`搜索执行失败: ${error.message}`)
      this.handleSearchError(id)
    }
  }

  /**
   * 处理搜索错误
   * @param {string} id - 搜索ID
   */
  Common.prototype.handleSearchError = function (id) {
    const $reElem = $(`.${PNAME} dl[xid="${id}"]`).parents(`.${FORM_SELECT}`)
    if ($reElem.length) {
      $reElem
        .find(`dd.${FORM_NONE}`)
        .addClass(FORM_EMPTY)
        .text('搜索出错,请重试')
    }
  }
  //#endregion

  //#region 清空搜索输入框的值
  /**
   * 清空搜索输入框的值
   * @param {string} id - 搜索框的唯一标识
   * @returns {boolean} 是否成功清空
   */
  Common.prototype.clearInput = function (id) {
    // 1. 参数验证
    if (!id || typeof id !== 'string') {
      console.warn('clearInput: 无效的id参数')
      return false
    }

    try {
      // 2. 获取父容器
      const $container = $(`.${PNAME}[fs_id="${id}"]`)
      if (!$container.length) {
        console.warn(`clearInput: 未找到id为 ${id} 的容器`)
        return false
      }

      // 3. 获取配置
      const config = data[id]?.config
      if (!config) {
        console.warn(`clearInput: 未找到id为 ${id} 的配置`)
        return false
      }

      // 4. 根据搜索类型获取输入框
      const $input = this.getSearchInput($container, id)
      if (!$input.length) {
        console.warn(`clearInput: 未找到id为 ${id} 的输入框`)
        return false
      }

      // 5. 清空输入框
      $input.val('').trigger('input')

      return true
    } catch (error) {
      console.error(`clearInput: 清空输入框时发生错误 - ${error.message}`)
      return false
    }
  }

  /**
   * 获取搜索输入框
   * @param {jQuery} $container - 容器元素
   * @param {string} id - 搜索框的唯一标识
   * @returns {jQuery} 输入框元素
   */
  Common.prototype.getSearchInput = function ($container, id) {
    const searchType = data[id].config.searchType
    const selector =
      searchType === 0
        ? `.${LABEL} .${INPUT}`
        : `dl .${FORM_DL_INPUT} .${INPUT}`

    return $container.find(selector)
  }

  //#endregion

  //#region ajax
  Common.prototype.ajax = function (
    id,
    searchUrl,
    inputValue,
    isLinkage,
    linkageWidth,
    isSearch,
    successCallback,
    isReplace
  ) {
    // 1. 参数验证和初始化
    const reElem = $(`.${PNAME} dl[xid="${id}"]`).parents(`.${FORM_SELECT}`)
    if (!reElem[0] || !searchUrl) {
      console.warn('ajax: 无效的参数或URL')
      return
    }

    // 2. 获取并合并配置
    const ajaxConfig = ajaxs[id] || ajax
    const ajaxData = this.prepareAjaxData(ajaxConfig, inputValue)

    // 3. 执行AJAX请求
    this.executeAjaxRequest({
      id,
      searchUrl,
      inputValue,
      isLinkage,
      linkageWidth,
      isSearch,
      isReplace,
      ajaxConfig,
      ajaxData,
      reElem,
      successCallback
    })
  }

  // 准备AJAX数据
  Common.prototype.prepareAjaxData = function (ajaxConfig, inputValue) {
    const ajaxData = $.extend(true, {}, ajaxConfig.data)
    ajaxData[ajaxConfig.searchName] = inputValue
    return ajaxConfig.dataType === 'json' ? JSON.stringify(ajaxData) : ajaxData
  }

  // 执行AJAX请求
  Common.prototype.executeAjaxRequest = function ({
    id,
    searchUrl,
    inputValue,
    isLinkage,
    linkageWidth,
    isSearch,
    isReplace,
    ajaxConfig,
    ajaxData,
    reElem,
    successCallback
  }) {
    $.ajax({
      type: ajaxConfig.type,
      headers: ajaxConfig.header,
      url: searchUrl,
      data: ajaxData,
      success: res =>
        this.handleAjaxSuccess({
          id,
          searchUrl,
          inputValue,
          isLinkage,
          linkageWidth,
          isSearch,
          isReplace,
          ajaxConfig,
          reElem,
          successCallback,
          res
        }),
      error: err =>
        this.handleAjaxError({
          id,
          searchUrl,
          inputValue,
          ajaxConfig,
          reElem,
          err
        })
    })
  }

  // 处理AJAX成功响应
  Common.prototype.handleAjaxSuccess = function ({
    id,
    searchUrl,
    inputValue,
    isLinkage,
    linkageWidth,
    isSearch,
    isReplace,
    ajaxConfig,
    reElem,
    successCallback,
    res
  }) {
    try {
      // 1. 解析响应数据
      const parsedRes = this.parseResponse(res)

      // 2. 执行前置处理
      const processedRes = this.processResponseBeforeSuccess({
        id,
        searchUrl,
        inputValue,
        ajaxConfig,
        res: parsedRes
      })

      // 3. 标准化响应格式
      const normalizedRes = this.normalizeResponse(processedRes, ajaxConfig)

      // 4. 处理响应结果
      this.processResponseResult({
        id,
        isLinkage,
        linkageWidth,
        isSearch,
        isReplace,
        ajaxConfig,
        reElem,
        res: normalizedRes
      })

      // 5. 执行回调
      this.executeCallbacks({
        id,
        searchUrl,
        inputValue,
        ajaxConfig,
        successCallback,
        res: normalizedRes
      })
    } catch (error) {
      console.error('处理AJAX响应时发生错误:', error)
      this.handleAjaxError({
        id,
        searchUrl,
        inputValue,
        ajaxConfig,
        reElem,
        err: error
      })
    }
  }

  // 解析响应数据
  Common.prototype.parseResponse = function (res) {
    return typeof res === 'string' ? JSON.parse(res) : res
  }

  // 处理响应前置处理
  Common.prototype.processResponseBeforeSuccess = function ({
    id,
    searchUrl,
    inputValue,
    ajaxConfig,
    res
  }) {
    if (
      ajaxConfig.beforeSuccess &&
      typeof ajaxConfig.beforeSuccess === 'function'
    ) {
      return ajaxConfig.beforeSuccess(id, searchUrl, inputValue, res)
    }
    return res
  }

  // 标准化响应格式
  Common.prototype.normalizeResponse = function (res, ajaxConfig) {
    if (this.isArray(res)) {
      return {
        [ajaxConfig.response.statusName]: ajaxConfig.response.statusCode,
        [ajaxConfig.response.msgName]: '',
        [ajaxConfig.response.dataName]: res
      }
    }
    return res
  }

  // 处理响应结果
  Common.prototype.processResponseResult = function ({
    id,
    isLinkage,
    linkageWidth,
    isSearch,
    isReplace,
    ajaxConfig,
    reElem,
    res
  }) {
    const $none = reElem.find(`dd.${FORM_NONE}`)

    if (
      res[ajaxConfig.response.statusName] !== ajaxConfig.response.statusCode
    ) {
      $none.addClass(FORM_EMPTY).text(res[ajaxConfig.response.msgName])
      return
    }

    $none.removeClass(FORM_EMPTY)
    this.renderData(
      id,
      res[ajaxConfig.response.dataName],
      isLinkage,
      linkageWidth,
      isSearch,
      isReplace
    )

    data[id].config.isEmpty = res[ajaxConfig.response.dataName].length === 0
  }

  // 执行回调函数
  Common.prototype.executeCallbacks = function ({
    id,
    searchUrl,
    inputValue,
    ajaxConfig,
    successCallback,
    res
  }) {
    if (successCallback) {
      successCallback(id)
    }

    if (ajaxConfig.success && typeof ajaxConfig.success === 'function') {
      ajaxConfig.success(id, searchUrl, inputValue, res)
    }
  }

  // 处理AJAX错误
  Common.prototype.handleAjaxError = function ({
    id,
    searchUrl,
    inputValue,
    ajaxConfig,
    reElem,
    err
  }) {
    // 清理现有选项
    reElem.find(`dd[lay-value]:not(.${FORM_SELECT_TIPS})`).remove()

    // 显示错误信息
    reElem.find(`dd.${FORM_NONE}`).addClass(FORM_EMPTY).text('服务异常')

    // 执行错误回调
    if (ajaxConfig.error && typeof ajaxConfig.error === 'function') {
      ajaxConfig.error(id, searchUrl, inputValue, err)
    }

    console.error('AJAX请求失败:', {
      id,
      searchUrl,
      error: err
    })
  }
  //#endregion

  //#region 渲染数据
  Common.prototype.renderData = function (
    id,
    dataArr,
    linkage,
    linkageWidth,
    isSearch,
    isReplace
  ) {
    // 1. 快速返回特殊情况
    if (linkage) {
      this.renderLinkage(id, dataArr, linkageWidth)
      return
    }
    if (isReplace) {
      this.renderReplace(id, dataArr)
      return
    }

    // 2. 缓存DOM元素和配置
    const $reElem = $(`.${PNAME} dl[xid="${id}"]`).parents(`.${FORM_SELECT}`)
    const $originalSelects = $reElem
      .parents(`div[fs_id="${id}"]`)
      .siblings('select')
    const ajaxConfig = ajaxs[id] || ajax
    const $pcInput = $reElem.find(`.${TDIV} input`)
    const $label = $reElem.find(`.${LABEL}`)
    const $dl = $reElem.find('dl[xid]')

    // 3. 优化数据处理
    const processedData = this.processData(id, dataArr, ajaxConfig)
    const { values, items } = processedData

    // 4. 使用文档片段优化DOM操作
    const fragment = document.createDocumentFragment()

    // 5. 批量渲染选项
    const optionsHtml = this.renderOptions(id, items, $pcInput)
    $dl.html(optionsHtml)

    // 6. 同步原始select的options(仅在需要时)
    this.syncOriginalSelects($originalSelects, items)

    // 7. 处理选中值
    if (isSearch) {
      this.handleSearchValues(id, values, $dl, $label)
    } else {
      this.handleNormalValues(id, values, $dl, $label)
    }

    // 8. 执行通用处理
    this.commonHandler(id, $label)
  }

  // 处理数据
  Common.prototype.processData = function (id, dataArr, ajaxConfig) {
    const processedData = this.exchangeData(id, dataArr)
    const values = []
    const items = processedData.map(item => {
      const itemVal = {
        ...item,
        innerHTML: item[ajaxConfig.keyName],
        value: item[ajaxConfig.keyVal],
        sel: item[ajaxConfig.keySel],
        disabled: item[ajaxConfig.keyDis],
        type: item.type,
        name: item[ajaxConfig.keyName]
      }
      if (itemVal.sel) {
        values.push(itemVal)
      }
      return itemVal
    })
    return { values, items }
  }

  // 渲染选项
  Common.prototype.renderOptions = function (id, items, $pcInput) {
    return this.renderSelect(
      id,
      $pcInput.attr('placeholder') || $pcInput.attr('back'),
      items
    )
  }

  // 同步原始select的options
  Common.prototype.syncOriginalSelects = function ($originalSelects, items) {
    if ($originalSelects.find('option').length === 0) {
      const optionsHtml = items
        .map(item => `<option value="${item.value}">${item.name}</option>`)
        .join('')
      $originalSelects.append(optionsHtml)
    }
  }

  // 处理搜索值
  Common.prototype.handleSearchValues = function (id, values, $dl, $label) {
    const oldVal = data[id].values
    const $selectedDds = $dl.find(`dd[lay-value]`)

    // 批量添加选中类
    oldVal.forEach(item => {
      $selectedDds.filter(`[lay-value="${item.value}"]`).addClass(THIS)
    })

    // 批量处理新值
    values.forEach(item => {
      if (this.indexOf(oldVal, item) === -1) {
        this.addLabel(id, $label, item)
        $dl.find(`dd[lay-value="${item.value}"]`).addClass(THIS)
        oldVal.push(item)
      }
    })
  }

  // 处理普通值
  Common.prototype.handleNormalValues = function (id, values, $dl, $label) {
    // 批量添加标签和选中类
    values.forEach(item => {
      this.addLabel(id, $label, item)
      $dl.find(`dd[lay-value="${item.value}"]`).addClass(THIS)
    })
    data[id].values = values
  }
  //#endregion

  //#region 渲染联动
  /**
   * 渲染联动选择器
   * @param {string} id - 选择器唯一标识
   * @param {Array} dataArr - 联动数据数组
   * @param {number} linkageWidth - 联动选择器宽度
   */
  Common.prototype.renderLinkage = function (id, dataArr, linkageWidth) {
    // 1. 处理联动数据结构
    const { result, db: processedDb } = this.processLinkageData(id, dataArr)
    db[id] = processedDb // 更新全局db

    // 2. 构建DOM结构
    const reElem = $(`.${PNAME} dl[xid="${id}"]`).parents(`.${FORM_SELECT}`)
    const html = this.buildLinkageHtml(result, linkageWidth)

    // 3. 渲染DOM并禁用搜索
    reElem.find('dl').html(html)
    reElem.find(`.${INPUT}`).css('display', 'none') // 联动暂时不支持搜索
  }

  /**
   * 处理联动数据结构
   * @private
   * @param {string} id - 选择器唯一标识
   * @param {Array} dataArr - 原始数据数组
   * @returns {Object} 处理后的数据结构
   */
  Common.prototype.processLinkageData = function (id, dataArr) {
    const result = []
    const processedDb = {}
    let index = 0
    let temp = { 0: dataArr }
    const ajaxConfig = ajaxs[id] ? ajaxs[id] : ajax

    // 递归处理数据层级
    do {
      const group = []
      result[index++] = group
      const _temp = temp
      temp = {}

      // 处理当前层级数据
      Object.entries(_temp).forEach(([pid, arr]) => {
        arr.forEach(item => {
          // 构建选项值对象
          const val = {
            pid,
            name: item[ajaxConfig.keyName],
            value: item[ajaxConfig.keyVal]
          }

          // 存储到db
          processedDb[val.value] = { ...item, ...val }
          group.push(val)

          // 处理子节点
          const children = item[ajaxConfig.keyChildren]
          if (children?.length) {
            temp[val.value] = children
          }
        })
      })
    } while (Object.keys(temp).length)

    return { result, db: processedDb }
  }

  /**
   * 构建联动选择器的HTML结构
   * @private
   * @param {Array} result - 处理后的数据数组
   * @param {number} linkageWidth - 联动选择器宽度
   * @returns {string} 构建的HTML字符串
   */
  Common.prototype.buildLinkageHtml = function (result, linkageWidth) {
    const fragments = ['<div class="xm-select-linkage">']

    // 构建每个分组的HTML
    result.forEach((group, groupIndex) => {
      // 构建分组容器
      const groupHtml = [
        `<div style="left: ${(linkageWidth - 0) * groupIndex}px;" 
          class="xm-select-linkage-group xm-select-linkage-group${
            groupIndex + 1
          } 
          ${groupIndex !== 0 ? 'xm-select-linkage-hide' : ''}">`
      ]

      // 构建分组选项
      const options = group.map(
        item =>
          `<li title="${item.name}" pid="${item.pid}" xm-value="${item.value}">
          <span>${item.name}</span>
        </li>`
      )

      groupHtml.push(...options, '</div>')
      fragments.push(groupHtml.join(''))
    })

    // 添加清除浮动
    fragments.push('<div style="clear: both; height: 288px;"></div>', '</div>')

    return fragments.join('')
  }
  //#endregion

  //#region 渲染替换
  Common.prototype.renderReplace = function (id, dataArr) {
    // 1. 获取必要的DOM元素和配置
    const $dl = $(`.${PNAME} dl[xid="${id}"]`)
    const ajaxConfig = ajaxs[id] || ajax

    // 2. 处理数据结构(转换树形结构)
    const processedData = this.exchangeData(id, dataArr)

    // 3. 更新全局数据存储
    db[id] = processedData

    // 4. 使用DocumentFragment优化DOM操作
    const fragment = document.createDocumentFragment()

    // 5. 构建选项HTML
    const optionsHtml = processedData
      .map(item => {
        // 构建选项值对象
        const itemVal = {
          ...item,
          innerHTML: item[ajaxConfig.keyName], // 显示文本
          value: item[ajaxConfig.keyVal], // 选项值
          sel: item[ajaxConfig.keySel], // 是否选中
          disabled: item[ajaxConfig.keyDis], // 是否禁用
          type: item.type, // 选项类型
          name: item[ajaxConfig.keyName] // 选项名称
        }

        // 创建选项DOM结构
        return this.createDD(id, itemVal)
      })
      .join('')

    // 6. 更新DOM结构
    // 移除旧的选项(保留提示和样式)
    $dl.find(`dd:not(.${FORM_SELECT_TIPS}),dt:not([style])`).remove()

    // 在保留的dt后插入新选项
    $dl.find(`dt[style]`).after($(optionsHtml))
  }
  //#endregion

  //#region 处理树形数据
  Common.prototype.exchangeData = function (id, arr) {
    // 1. 获取配置信息
    const ajaxConfig = ajaxs[id] || ajax
    const childrenName = ajaxConfig['keyChildren'] // 子节点的键名
    const disabledName = ajaxConfig['keyDis'] // 禁用状态的键名

    // 2. 重置当前选择器的数据存储
    db[id] = {}

    // 3. 递归处理数据,构建树形结构
    const result = this.getChildrenList(
      arr, // 原始数据数组
      childrenName, // 子节点键名
      disabledName, // 禁用状态键名
      [], // 初始父节点ID数组
      false // 初始禁用状态
    )

    return result
  }
  //#endregion

  /**
   * 递归处理树形数据结构,将层级数据扁平化处理
   * @param {Array} arr - 需要处理的数组数据
   * @param {string} childrenName - 子节点的属性名
   * @param {string} disabledName - 禁用状态的属性名
   * @param {Array} pid - 父节点ID数组
   * @param {boolean} disabled - 是否禁用
   * @returns {Array} 处理后的扁平化数组
   */
  Common.prototype.getChildrenList = function (
    arr,
    childrenName,
    disabledName,
    pid,
    disabled
  ) {
    // 初始化结果数组和偏移量计数器
    const result = []
    let nodeOffset = 0

    // 遍历输入数组
    for (let i = 0; i < arr.length; i++) {
      const currentNode = arr[i]

      // 处理分组类型节点
      if (currentNode.type && currentNode.type === 'optgroup') {
        result.push(currentNode)
        continue
      }

      // 处理普通节点
      nodeOffset++

      // 构建当前节点的父节点路径
      const parentPath = [...pid, `${nodeOffset - 1}_E`]

      // 设置节点属性
      currentNode[FORM_TEAM_PID] = JSON.stringify(parentPath)
      currentNode[disabledName] = currentNode[disabledName] || disabled

      // 将当前节点添加到结果数组
      result.push(currentNode)

      // 处理子节点
      const childNodes = currentNode[childrenName]
      if (childNodes && common.isArray(childNodes) && childNodes.length) {
        // 标记当前节点为文件夹节点
        currentNode['XM_TREE_FOLDER'] = true

        // 递归处理子节点
        const childResults = this.getChildrenList(
          childNodes,
          childrenName,
          disabledName,
          [...parentPath], // 创建新的父节点路径数组
          currentNode[disabledName]
        )

        // 将子节点结果合并到主结果数组
        result.push(...childResults)
      }
    }

    return result
  }
  //#endregion

  //#region 创建选项
  Common.prototype.create = function (id, isCreate, inputValue) {
    // 只有当允许创建且有输入值时才执行创建逻辑
    if (isCreate && inputValue) {
      // 获取必要的DOM元素和配置
      const formSelect = data[id]
      const $dl = $(`[xid="${id}"]`)
      const $tips = $dl.find(`dd.${FORM_SELECT_TIPS}.${FORM_DL_INPUT}`)
      const $temp = $dl.find(`dd.${TEMP}`)

      // 查找是否已存在相同名称的选项
      let existingOption = null
      $dl.find(`dd:not(.${FORM_SELECT_TIPS}):not(.${TEMP})`).each((_, item) => {
        const $item = $(item)
        if (inputValue === $item.find('span').attr('name')) {
          existingOption = item
          return false // 找到后终止循环
        }
      })

      // 如果不存在相同选项,则创建新选项
      if (!existingOption) {
        // 调用配置中的create函数生成值
        const newValue = formSelect.config.create(id, inputValue)

        // 处理临时选项
        if ($temp.length) {
          // 如果存在临时选项,则更新它
          this.updateTempOption($temp, {
            value: newValue,
            text: inputValue,
            name: inputValue
          })
        } else {
          // 如果不存在临时选项,则创建新的选项
          this.createNewOption($tips, {
            id,
            inputValue,
            newValue
          })
        }
      }
    } else {
      // 如果不允许创建或没有输入值,则移除所有临时选项
      $(`[xid=${id}] dd.${TEMP}`).remove()
    }
  }

  /**
   * 更新临时选项
   * @private
   * @param {jQuery} $temp - 临时选项的jQuery对象
   * @param {Object} options - 更新选项的配置
   * @param {string} options.value - 选项的值
   * @param {string} options.text - 选项的显示文本
   * @param {string} options.name - 选项的名称
   */
  Common.prototype.updateTempOption = function ($temp, { value, text, name }) {
    $temp.attr('lay-value', value).find('span').text(text).attr('name', name)
    $temp.removeClass(DD_HIDE)
  }

  /**
   * 创建新的选项
   * @private
   * @param {jQuery} $tips - 提示元素的jQuery对象
   * @param {Object} options - 创建选项的配置
   * @param {string} options.id - 选择器的唯一标识
   * @param {string} options.inputValue - 输入的值
   * @param {string} options.newValue - 新生成的值
   */
  Common.prototype.createNewOption = function (
    $tips,
    { id, inputValue, newValue }
  ) {
    const newOption = {
      name: inputValue,
      innerHTML: inputValue,
      value: newValue
    }

    $tips.after($(this.createDD(id, newOption, `${TEMP} ${CREATE_LONG}`)))
  }
  //#endregion

  //#region 创建选项DD
  Common.prototype.createDD = function (id, item, clz) {
    // 获取AJAX配置
    const ajaxConfig = ajaxs[id] || ajax

    // 处理选项名称
    const name = $.trim(item.innerHTML)

    // 处理选项数据存储
    db[id][item.value] = $(item).is('option')
      ? this.createOptionItem(item, name, ajaxConfig)
      : item

    // 获取模板
    const template = data[id].config.template(id, item)

    // 处理父节点ID
    const pid = this.processParentId(item[FORM_TEAM_PID])

    // 构建树形结构属性
    const treeAttr = this.buildTreeAttributes(pid, item)

    // 检查是否为全部人员模式
    const isAllPeople = $(`select[xm-select=${id}]`).attr(ALL_PEOPLE)

    // 处理员工状态相关属性
    const { employee, employeeDisplay } = this.processEmployeeStatus(name)

    // 构建基础属性
    const baseProps = this.buildBaseProperties(item, clz)

    // 构建选项内容
    const content = this.buildOptionContent(pid, name, template, item.disabled)

    // 根据模式返回不同的HTML结构
    return isAllPeople
      ? this.buildAllPeopleHTML(
          employee,
          employeeDisplay,
          baseProps,
          treeAttr,
          content
        )
      : this.buildNormalHTML(baseProps, treeAttr, content)
  }

  /**
   * 创建选项数据对象
   * @private
   */
  Common.prototype.createOptionItem = function (item, name, ajaxConfig) {
    const resultItem = {}
    resultItem[ajaxConfig.keyName] = name
    resultItem[ajaxConfig.keyVal] = item.value
    resultItem[ajaxConfig.keyDis] = item.disabled
    return resultItem
  }

  /**
   * 处理父节点ID
   * @private
   */
  Common.prototype.processParentId = function (parentId) {
    return parentId ? JSON.parse(parentId) : [-1]
  }

  /**
   * 构建树形结构属性
   * @private
   */
  Common.prototype.buildTreeAttributes = function (pid, item) {
    return pid[0] === -1
      ? ''
      : `tree-id="${pid.join('-')}" tree-folder="${!!item['XM_TREE_FOLDER']}"`
  }

  /**
   * 处理员工状态相关属性
   * @private
   */
  Common.prototype.processEmployeeStatus = function (name) {
    const isResigned = name && name.includes('离职')
    return {
      employee: isResigned ? 'employee' : '',
      employeeDisplay: isResigned ? 'disN' : ''
    }
  }

  /**
   * 构建基础属性
   * @private
   */
  Common.prototype.buildBaseProperties = function (item, clz) {
    return {
      value: item.value,
      className: `${item.disabled ? DISABLED : ''} ${clz || ''}`,
      disabled: item.disabled ? DISABLED : ''
    }
  }

  /**
   * 构建选项内容
   * @private
   */
  Common.prototype.buildOptionContent = function (
    pid,
    name,
    template,
    isDisabled
  ) {
    return `<div class="xm-unselect xm-form-checkbox ${
      isDisabled ? DISABLED : ''
    }"  
      style="margin-left: ${(pid.length - 1) * 20}px">
      <i class="${CHECKBOX_YES}"></i>
      <span name="${name}">${template}</span>
    </div>`
  }

  /**
   * 构建全部人员模式的HTML
   * @private
   */
  Common.prototype.buildAllPeopleHTML = function (
    employee,
    employeeDisplay,
    baseProps,
    treeAttr,
    content
  ) {
    return `<dd employee="${employee}" 
      lay-value="${baseProps.value}" 
      class="${baseProps.className} ${employeeDisplay}" 
      ${treeAttr}>
      ${content}
    </dd>`
  }

  /**
   * 构建普通模式的HTML
   * @private
   */
  Common.prototype.buildNormalHTML = function (baseProps, treeAttr, content) {
    return `<dd 
      lay-value="${baseProps.value}" 
      class="${baseProps.className}" 
      ${treeAttr}>
      ${content}
    </dd>`
  }
  //#endregion

  Common.prototype.createQuickBtn = function (obj, right) {
    return `<div class="${CZ}" method="${obj.name}" title="${obj.name}" ${
      right ? 'style="margin-right: ' + right + '"' : ''
    }><i class="${obj.icon}"></i><span>${obj.name}</span></div>`
  }

  Common.prototype.renderBtns = function (id, show, right) {
    let quickBtn = []
    let dl = $(`dl[xid="${id}"]`)
    quickBtn.push(
      `<div class="${CZ_GROUP}" show="${show}" style="max-width: ${
        dl.prev().width() + 54
      }px;">`
    )
    $.each(data[id].config.btns, (index, item) => {
      quickBtn.push(this.createQuickBtn(item, right))
    })
    quickBtn.push(`</div>`)
    quickBtn.push(
      this.createQuickBtn({ icon: 'xm-iconfont icon-caidan', name: '' })
    )
    return quickBtn.join('')
  }

  Common.prototype.renderSelect = function (id, tips, select) {
    db[id] = {}
    let arr = []
    let isAllpelple = $(`select[xm-select=${id}]`).attr(ALL_PEOPLE) //存在全部人员，拉长组件功能区的宽度
    if (data[id].config.btns.length) {
      setTimeout(() => {
        let dl = $(`dl[xid="${id}"]`)
        dl.parents(`.${FORM_SELECT}`).attr(
          SEARCH_TYPE,
          data[id].config.searchType
        )
        if (isAllpelple) {
          dl.find(`.${CZ_GROUP}`).css(
            'max-width',
            `${dl.prev().width() + 100}px`
          )
        } else {
          dl.find(`.${CZ_GROUP}`).css(
            'max-width',
            `${dl.prev().width() + 54}px`
          )
        }
      }, 10)
      arr.push(
        [
          `<dd lay-value="" class="${FORM_SELECT_TIPS}" style="background-color: #FFF!important;">`,
          this.renderBtns(id, null, '20px'),
          `</dd>`,
          `<dd lay-value="" class="${FORM_SELECT_TIPS} ${FORM_DL_INPUT}" style="background-color: #FFF!important;">`,
          `<i class="xm-iconfont icon-sousuo"></i>`,
          `<input type="text" class="${FORM_INPUT} ${INPUT}" placeholder="请搜索"/>`,
          `</dd>`
        ].join('')
      )
    } else {
      arr.push(`<dd lay-value="" class="${FORM_SELECT_TIPS}">${tips}</dd>`)
    }
    if (this.isArray(select)) {
      $(select).each((index, item) => {
        if (item) {
          if (item.type && item.type === 'optgroup') {
            arr.push(`<dt>${item.name}</dt>`)
          } else {
            arr.push(this.createDD(id, item))
          }
        }
      })
    } else {
      $(select)
        .find('*')
        .each((index, item) => {
          if (
            item.tagName.toLowerCase() == 'option' &&
            index == 0 &&
            !item.value
          ) {
            return
          }
          if (item.tagName.toLowerCase() === 'optgroup') {
            arr.push(`<dt>${item.label}</dt>`)
          } else {
            arr.push(this.createDD(id, item))
          }
        })
    }
    arr.push('<dt style="display:none;"> </dt>')
    arr.push(
      `<dd class="${FORM_SELECT_TIPS} ${FORM_NONE} ${
        arr.length === 2 ? FORM_EMPTY : ''
      }">没有选项</dd>`
    )
    return arr.join('')
  }

  Common.prototype.on = function () {
    //事件绑定
    this.one()

    $(document).on('click', e => {
      // console.log(FORM_TITLE,'FORM_TITLE on')
      if (!$(e.target).parents(`.${FORM_TITLE}`)[0]) {
        //清空input中的值
        $(`.${PNAME} dl .${DD_HIDE}`).removeClass(DD_HIDE)
        $(`.${PNAME} dl dd.${FORM_EMPTY}`).removeClass(FORM_EMPTY)
        $(`.${PNAME} dl dd.${TEMP}`).remove()
        $.each(data, (key, fs) => {
          this.clearInput(key)
          if (!fs.values.length) {
            this.changePlaceHolder($(`div[FS_ID="${key}"] .${LABEL}`))
          }
        })
      }
      $(`.${PNAME} .${FORM_SELECTED}`).each((index, item) => {
        this.changeShow($(item).find(`.${FORM_TITLE}`), false)
      })
    })
  }

  Common.prototype.calcLabelLeft = function (label, w, call) {
    let pos = this.getPosition(label[0])
    pos.y = pos.x + label[0].clientWidth
    let left = label[0].offsetLeft
    if (!label.find('span').length) {
      left = 0
    } else if (call) {
      //校正归位
      let span = label.find('span:last')
      span.css('display') == 'none' ? (span = span.prev()[0]) : (span = span[0])
      let spos = this.getPosition(span)
      spos.y = spos.x + span.clientWidth

      if (spos.y > pos.y) {
        left = left - (spos.y - pos.y) - 5
      } else {
        left = 0
      }
    } else {
      if (w < 0) {
        let span = label.find(':last')
        span.css('display') == 'none'
          ? (span = span.prev()[0])
          : (span = span[0])
        let spos = this.getPosition(span)
        spos.y = spos.x + span.clientWidth
        if (spos.y > pos.y) {
          left -= 10
        }
      } else {
        if (left < 0) {
          left += 10
        }
        if (left > 0) {
          left = 0
        }
      }
    }
    label.css('left', left + 'px')
  }

  Common.prototype.one = function (target) {
    //一次性事件绑定
    $(target ? target : document)
      .off('click', `.${FORM_TITLE}`)
      .on('click', `.${FORM_TITLE}`, e => {
        let othis = $(e.target),
          title = othis.is(FORM_TITLE)
            ? othis
            : othis.parents(`.${FORM_TITLE}`),
          dl = title.next(),
          id = dl.attr('xid')

        //清空非本select的input val
        $(`dl[xid]`)
          .not(dl)
          .each((index, item) => {
            this.clearInput($(item).attr('xid'))
          })
        $(`dl[xid]`).not(dl).find(`dd.${DD_HIDE}`).removeClass(DD_HIDE)

        //如果是disabled select
        if (title.hasClass(DIS)) {
          return false
        }
        //如果点击的是右边的三角或者只读的input
        if (othis.is(`.${SANJIAO}`) || othis.is(`.${INPUT}[readonly]`)) {
          this.changeShow(
            title,
            !title.parents(`.${FORM_SELECT}`).hasClass(FORM_SELECTED)
          )
          return false
        }
        //如果点击的是input的右边, focus一下
        if (title.find(`.${INPUT}:not(readonly)`)[0]) {
          let input = title.find(`.${INPUT}`),
            epos = { x: e.pageX, y: e.pageY },
            pos = this.getPosition(title[0]),
            width = title.width()
          while (epos.x > pos.x) {
            if ($(document.elementFromPoint(epos.x, epos.y)).is(input)) {
              input.focus()
              this.changeShow(title, true)
              return false
            }
            epos.x -= 50
          }
        }

        //如果点击的是可搜索的input
        if (othis.is(`.${INPUT}`)) {
          this.changeShow(title, true)
          return false
        }
        //如果点击的是x按钮
        if (othis.is(`i[fsw="${NAME}"]`)) {
          let val = this.getItem(id, othis),
            dd = dl.find(`dd[lay-value='${val.value}']`)
          if (dd.hasClass(DISABLED)) {
            //如果是disabled状态, 不可选, 不可删
            return false
          }
          this.handlerLabel(id, dd, false, val)
          return false
        }

        this.changeShow(
          title,
          !title.parents(`.${FORM_SELECT}`).hasClass(FORM_SELECTED)
        )
        return false
      })
    $(target ? target : document)
      .off('click', `dl.${DL}`)
      .on('click', `dl.${DL}`, e => {
        let othis = $(e.target)
        if (othis.is(`.${LINKAGE}`) || othis.parents(`.${LINKAGE}`)[0]) {
          //linkage的处理
          othis = othis.is('li') ? othis : othis.parents('li[xm-value]')
          let group = othis.parents('.xm-select-linkage-group'),
            id = othis.parents('dl').attr('xid')
          if (!id) {
            return false
          }
          //激活li
          group.find('.xm-select-active').removeClass('xm-select-active')
          othis.addClass('xm-select-active')
          //激活下一个group, 激活前显示对应数据
          group
            .nextAll('.xm-select-linkage-group')
            .addClass('xm-select-linkage-hide')
          let nextGroup = group.next('.xm-select-linkage-group')
          nextGroup.find('li').addClass('xm-select-linkage-hide')
          nextGroup
            .find(`li[pid="${othis.attr('xm-value')}"]`)
            .removeClass('xm-select-linkage-hide')
          //如果没有下一个group, 或没有对应的值
          if (
            !nextGroup[0] ||
            nextGroup.find(`li:not(.xm-select-linkage-hide)`).length == 0
          ) {
            let vals = [],
              index = 0,
              isAdd = !othis.hasClass('xm-select-this')
            if (data[id].config.radio) {
              othis
                .parents('.xm-select-linkage')
                .find('.xm-select-this')
                .removeClass('xm-select-this')
            }
            do {
              vals[index++] = {
                name: othis.find('span').text(),
                value: othis.attr('xm-value')
              }
              othis = othis
                .parents('.xm-select-linkage-group')
                .prev()
                .find(`li[xm-value="${othis.attr('pid')}"]`)
            } while (othis.length)
            vals.reverse()
            let val = {
              name: vals
                .map(item => {
                  return item.name
                })
                .join('/'),
              value: vals
                .map(item => {
                  return item.value
                })
                .join('/')
            }
            this.handlerLabel(id, null, isAdd, val)
          } else {
            nextGroup.removeClass('xm-select-linkage-hide')
          }
          return false
        }

        if (othis.is('dl')) {
          return false
        }

        if (othis.is('dt')) {
          othis.nextUntil(`dt`).each((index, item) => {
            item = $(item)
            if (item.hasClass(DISABLED) || item.hasClass(THIS)) {
            } else {
              item.find('i:not(.icon-expand)').click()
            }
          })
          return false
        }
        let dd = othis.is('dd') ? othis : othis.parents('dd')
        let id = dd.parent('dl').attr('xid')

        if (dd.hasClass(DISABLED)) {
          //被禁用选项的处理
          return false
        }

        //菜单功效
        if (othis.is('i.icon-caidan')) {
          let opens = [],
            closes = []
          othis
            .parents('dl')
            .find('dd[tree-folder="true"]')
            .each((index, item) => {
              $(item).attr('xm-tree-hidn') == undefined
                ? opens.push(item)
                : closes.push(item)
            })
          let arr = closes.length ? closes : opens
          arr.forEach(item => item.click())
          return false
        }
        //树状结构的选择
        let treeId = dd.attr('tree-id')
        if (treeId) {
          //忽略右边的图标
          if (othis.is('i:not(.icon-expand)')) {
            this.handlerLabel(id, dd, !dd.hasClass(THIS))
            return false
          }
          let ajaxConfig = ajaxs[id] || ajax
          let treeConfig = ajaxConfig.tree
          let childrens = dd.nextAll(`dd[tree-id^="${treeId}"]`)
          if (childrens && childrens.length) {
            let len = childrens[0].clientHeight
            len
              ? (this.addTreeHeight(dd, len), (len = 0))
              : ((len = dd.attr('xm-tree-hidn') || 36),
                dd.removeAttr('xm-tree-hidn'),
                dd.find('>i').remove(),
                (childrens = childrens.filter(
                  (index, item) =>
                    $(item).attr('tree-id').split('-').length - 1 ==
                    treeId.split('-').length
                )))
            childrens.animate(
              {
                height: len
              },
              150
            )
            return false
          } else {
            if (
              treeConfig.nextClick &&
              treeConfig.nextClick instanceof Function
            ) {
              treeConfig.nextClick(id, this.getItem(id, dd), res => {
                if (!res || !res.length) {
                  this.handlerLabel(id, dd, !dd.hasClass(THIS))
                } else {
                  dd.attr('tree-folder', 'true')
                  let ddChilds = []
                  res.forEach((item, idx) => {
                    item.innerHTML = item[ajaxConfig.keyName]
                    item[FORM_TEAM_PID] = JSON.stringify(
                      treeId.split('-').concat([idx])
                    )
                    ddChilds.push(this.createDD(id, item))
                    db[id][item[ajaxConfig.keyVal]] = item
                  })
                  dd.after(ddChilds.join(''))
                }
              })
              return false
            }
          }
        }

        if (dd.hasClass(FORM_SELECT_TIPS)) {
          //tips的处理
          let btn = othis.is(`.${CZ}`) ? othis : othis.parents(`.${CZ}`)
          if (!btn[0]) {
            return false
          }
          let method = btn.attr('method')
          let obj = data[id].config.btns.filter(bean => bean.name == method)[0]
          obj &&
            obj.click &&
            obj.click instanceof Function &&
            obj.click(id, this)
          return false
        }
        this.handlerLabel(id, dd, !dd.hasClass(THIS))
        return false
      })
  }

  Common.prototype.addTreeHeight = function (dd, len) {
    let treeId = dd.attr('tree-id')
    let childrens = dd.nextAll(`dd[tree-id^="${treeId}"]`)
    if (childrens.length) {
      dd.append('<i class="xm-iconfont icon-expand"></i>')
      dd.attr('xm-tree-hidn', len)
      childrens.each((index, item) => {
        let that = $(item)
        this.addTreeHeight(that, len)
      })
    }
  }

  let db = {}
  Common.prototype.getItem = function (id, value) {
    if (value instanceof $) {
      if (value.is(`i[fsw="${NAME}"]`)) {
        let span = value.parent()
        return (
          db[id][value] || {
            name: span.find('font').text(),
            value: span.attr('value')
          }
        )
      }
      let val = value.attr('lay-value')
      return !db[id][val]
        ? (db[id][val] = {
            name: value.find('span[name]').attr('name'),
            value: val
          })
        : db[id][val]
    } else if (typeof value == 'string' && value.indexOf('/') != -1) {
      return (
        db[id][value] || {
          name: this.valToName(id, value),
          value: value
        }
      )
    }
    return db[id][value]
  }

  Common.prototype.linkageAdd = function (id, val) {
    let dl = $(`dl[xid="${id}"]`)
    dl.find('.xm-select-active').removeClass('xm-select-active')
    let vs = val.value.split('/')
    let pid,
      li,
      index = 0
    let lis = []
    do {
      pid = vs[index]
      li = dl.find(`.xm-select-linkage-group${index + 1} li[xm-value="${pid}"]`)
      li[0] && lis.push(li)
      index++
    } while (li.length && pid != undefined)
    if (lis.length == vs.length) {
      $.each(lis, (idx, item) => {
        item.addClass('xm-select-this')
      })
    }
  }

  Common.prototype.linkageDel = function (id, val) {
    let dl = $(`dl[xid="${id}"]`)
    let vs = val.value.split('/')
    let pid,
      li,
      index = vs.length - 1
    do {
      pid = vs[index]
      li = dl.find(`.xm-select-linkage-group${index + 1} li[xm-value="${pid}"]`)
      if (!li.parent().next().find(`li[pid=${pid}].xm-select-this`).length) {
        li.removeClass('xm-select-this')
      }
      index--
    } while (li.length && pid != undefined)
  }

  Common.prototype.valToName = function (id, val) {
    let dl = $(`dl[xid="${id}"]`)
    let vs = (val + '').split('/')
    if (!vs.length) {
      return null
    }
    let names = []
    $.each(vs, (idx, item) => {
      let name = dl
        .find(`.xm-select-linkage-group${idx + 1} li[xm-value="${item}"] span`)
        .text()
      names.push(name)
    })
    return names.length == vs.length ? names.join('/') : null
  }

  Common.prototype.commonHandler = function (key, label) {
    if (!label || !label[0]) {
      return
    }
    this.checkHideSpan(key, label)
    //计算input的提示语
    this.changePlaceHolder(label)
    //计算高度
    this.retop(label.parents(`.${FORM_SELECT}`))
    this.calcLabelLeft(label, 0, true)
    //表单默认值
    this.setHidnVal(key, label)
    //title值
    label.parents(`.${FORM_TITLE} .${NAME}`).attr(
      'title',
      data[key].values
        .map(val => {
          return val.name
        })
        .join(',')
    )
  }

  Common.prototype.initVal = function (id) {
    let target = {}
    if (id) {
      target[id] = data[id]
    } else {
      target = data
    }
    $.each(target, (key, val) => {
      let values = val.values,
        div = $(`dl[xid="${key}"]`).parent(),
        label = div.find(`.${LABEL}`),
        dl = div.find('dl')
      dl.find(`dd.${THIS}`).removeClass(THIS)

      let _vals = values.concat([])
      _vals.concat([]).forEach((item, index) => {
        this.addLabel(key, label, item)
        dl.find(`dd[lay-value="${item.value}"]`).addClass(THIS)
      })
      if (val.config.radio) {
        _vals.length && values.push(_vals[_vals.length - 1])
      }
      this.commonHandler(key, label)
    })
  }

  Common.prototype.setHidnVal = function (key, label) {
    if (!label || !label[0]) {
      return
    }
    let isAllpelple = $(`select[xm-select=${key}]`).attr(ALL_PEOPLE)
    // 全部人员时，从dd元素中取值。其他情况按照原逻辑，从data中取值
    if (isAllpelple) {
      let dd = $(`dl[xid=${key}] dd.xm-select-this:not(.disN)`)
      let ddArr = []
      dd.each((index, item) => {
        ddArr.push($(item).attr('lay-value'))
      })
      label.parents(`.${PNAME}`).find(`.${HIDE_INPUT}`).val(ddArr.join())
    } else {
      label
        .parents(`.${PNAME}`)
        .find(`.${HIDE_INPUT}`)
        .val(
          data[key].values
            .map(val => {
              return val.value
            })
            .join(',')
        )
    }
  }

  Common.prototype.handlerLabel = function (id, dd, isAdd, oval, notOn) {
    let div = $(`[xid="${id}"]`).prev().find(`.${LABEL}`),
      val = dd && this.getItem(id, dd),
      vals = data[id].values,
      on = data[id].config.on || events.on[id],
      endOn = data[id].config.endOn || events.endOn[id]
    if (oval) {
      val = oval
    }
    let fs = data[id]
    if (isAdd && fs.config.max && fs.values.length >= fs.config.max) {
      let maxTipsFun = events.maxTips[id] || data[id].config.maxTips
      maxTipsFun && maxTipsFun(id, vals.concat([]), val, fs.config.max)
      return
    }
    if (!notOn) {
      if (
        on &&
        on instanceof Function &&
        on(id, vals.concat([]), val, isAdd, dd && dd.hasClass(DISABLED)) ==
          false
      ) {
        return
      }
    }
    let dl = $(`dl[xid="${id}"]`)
    isAdd
      ? (dd && dd[0]
          ? (dd.addClass(THIS), dd.removeClass(TEMP))
          : dl.find('.xm-select-linkage')[0] && this.linkageAdd(id, val),
        this.addLabel(id, div, val),
        vals.push(val))
      : (dd && dd[0]
          ? dd.removeClass(THIS)
          : dl.find('.xm-select-linkage')[0] && this.linkageDel(id, val),
        this.delLabel(id, div, val),
        this.remove(vals, val))
    if (!div[0]) return
    //单选选完后直接关闭选择域
    if (fs.config.radio) {
      this.changeShow(div, false)
    }
    //移除表单验证的红色边框
    div.parents(`.${FORM_TITLE}`).prev().removeClass('layui-form-danger')

    //清空搜索值
    fs.config.clearInput && this.clearInput(id)

    this.commonHandler(id, div)

    !notOn &&
      endOn &&
      endOn instanceof Function &&
      endOn(id, vals.concat([]), val, isAdd, dd && dd.hasClass(DISABLED))
  }

  Common.prototype.addLabel = function (id, div, val) {
    if (!val) return
    let tips = `fsw="${NAME}"`
    let [$label, $close] = [
      $(
        `<span ${tips} value="${val.value}"><font ${tips}>${val.name}</font></span>`
      ),
      $(`<i ${tips} class="xm-iconfont icon-close"></i>`)
    ]
    $label.append($close)
    //如果是radio模式
    let fs = data[id]
    if (fs.config.radio) {
      fs.values.length = 0
      $(`dl[xid="${id}"]`)
        .find(`dd.${THIS}:not([lay-value="${val.value}"])`)
        .removeClass(THIS)
      div.find('span').remove()
    }
    //如果是固定高度
    div.find('input').css('width', '50px')
    div.find('input').before($label)
  }

  Common.prototype.delLabel = function (id, div, val) {
    if (!val) return
    div.find(`span[value="${val.value}"]:first`).remove()
  }

  Common.prototype.checkHideSpan = function (id, div) {
    let parentHeight = div.parents(`.${NAME}`)[0].offsetHeight + 5
    div.find('span.xm-span-hide').removeClass('xm-span-hide')
    div.find('span[style]').remove()

    let count = data[id].config.showCount
    div.find('span').each((index, item) => {
      if (index >= count) {
        $(item).addClass('xm-span-hide')
      }
    })

    let prefix = div.find(`span:eq(${count})`)
    prefix[0] &&
      prefix.before(
        $(
          `<span style="padding-right: 6px;" fsw="${NAME}"> + ${
            div.find('span').length - count
          }</span>`
        )
      )
  }

  Common.prototype.retop = function (div) {
    //计算dl显示的位置
    let dl = div.find('dl'),
      top = div.offset().top + div.outerHeight() + 5 - $win.scrollTop(),
      dlHeight = dl.outerHeight()
    let up =
      div.hasClass('layui-form-selectup') ||
      dl.css('top').indexOf('-') != -1 ||
      (top + dlHeight > $win.height() && top >= dlHeight)
    div = div.find(`.${NAME}`)

    let fs = data[dl.attr('xid')]
    let base =
      dl.parents('.layui-form-pane')[0] && dl.prev()[0].clientHeight > 38
        ? 14
        : 10
    if ((fs && fs.config.direction == 'up') || up) {
      up = true
      if (fs && fs.config.direction == 'down') {
        up = false
      }
    }
    let reHeight = div[0].offsetTop + div.height() + base
    if (up) {
      dl.css({
        top: 'auto',
        bottom: reHeight + 3 + 'px'
      })
    } else {
      dl.css({
        top: reHeight + 'px',
        bottom: 'auto'
      })
    }
  }

  Common.prototype.changeShow = function (children, isShow) {
    //显示于隐藏
    $('.layui-form-selected').removeClass('layui-form-selected')
    let top = children.parents(`.${FORM_SELECT}`),
      realShow = top.hasClass(FORM_SELECTED),
      id = top.find('dl').attr('xid')
    let dl = $(`dl[xid="${id}"]`)
    let parentWidth = dl.parents(`.${FORM_SELECT}`).width()
    $(`.${PNAME} .${FORM_SELECT}`).not(top).removeClass(FORM_SELECTED)
    if (isShow) {
      dl.find(`.${CZ_GROUP}`).css('min-width', `180px`)
      this.retop(top)
      top.addClass(FORM_SELECTED)
      top.find(`.${INPUT}`).focus()
      if (!top.find(`dl dd[lay-value]:not(.${FORM_SELECT_TIPS})`).length) {
        top.find(`dl .${FORM_NONE}`).addClass(FORM_EMPTY)
      }
      //循环判断
      let widthArr = []
      dl.find(`dd[lay-value]:not(.${FORM_SELECT_TIPS})`).each(function (
        index,
        item
      ) {
        let $item = $(item)
        let spanWidth = $item.find('span')[0].scrollWidth
        widthArr.push(spanWidth)
      })
      let maxWidth = widthArr.length > 0 ? Math.max.apply(null, widthArr) : 0
      const documentWidth = $(document).width() // 浏览器当前窗口文档对象宽度
      const topOffsetLeft = top.offset().left
      // 当top元素的距离窗口文档对象的宽度大于maxwidth+120时，则右对齐
      if (documentWidth - topOffsetLeft < maxWidth + 120) {
        dl.css({ right: 0, left: 'auto' })
      }
      if (maxWidth > parentWidth) {
        dl.css('width', `${maxWidth + 100}px`)
      }
    } else {
      top.removeClass(FORM_SELECTED)
      this.clearInput(id)
      top.find(`dl .${FORM_EMPTY}`).removeClass(FORM_EMPTY)
      top.find(`dl dd.${DD_HIDE}`).removeClass(DD_HIDE)
      top.find(`dl dd.${TEMP}`).remove()
      //计算ajax数据是否为空, 然后重新请求数据
      if (id && data[id] && data[id].config.isEmpty) {
        this.triggerSearch(top)
      }
      this.changePlaceHolder(top.find(`.${LABEL}`))
    }
    if (isShow != realShow) {
      let openFun = data[id].config.opened || events.opened[id]
      isShow && openFun && openFun instanceof Function && openFun(id)
      let closeFun = data[id].config.closed || events.closed[id]
      !isShow && closeFun && closeFun instanceof Function && closeFun(id)
    }
  }

  Common.prototype.changePlaceHolder = function (div) {
    //显示于隐藏提示语
    //调整pane模式下的高度
    let title = div.parents(`.${FORM_TITLE}`)
    title[0] || (title = div.parents(`dl`).prev())
    if (!title[0]) {
      return
    }

    let id = div.parents(`.${PNAME}`).find(`dl[xid]`).attr('xid')
    if (data[id] && data[id].config.height) {
      //既然固定高度了, 那就看着办吧
    } else {
      let height = title.find(`.${NAME}`)[0].clientHeight
      title.css('height', (height > 36 ? height + 4 : height) + 'px')
      //如果是layui pane模式, 处理label的高度
      let label = title.parents(`.${PNAME}`).parent().prev()
      if (
        label.is('.layui-form-label') &&
        title.parents('.layui-form-pane')[0]
      ) {
        height = height > 36 ? height + 4 : height
        title.css('height', height + 'px')
        label.css({
          height: height + 2 + 'px',
          lineHeight: height - 18 + 'px'
        })
      }
    }

    let input = title.find(`.${TDIV} input`),
      isShow = !div.find('span:last')[0] && !title.find(`.${INPUT}`).val()
    if (isShow) {
      let ph = input.attr('back')
      input.removeAttr('back')
      input.attr('placeholder', ph)
    } else {
      let ph = input.attr('placeholder')
      input.removeAttr('placeholder')
      input.attr('back', ph)
    }
  }

  Common.prototype.indexOf = function (arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].value == val ||
        arr[i].value == (val ? val.value : val) ||
        arr[i] == val ||
        JSON.stringify(arr[i]) == JSON.stringify(val)
      ) {
        return i
      }
    }
    return -1
  }

  Common.prototype.remove = function (arr, val) {
    let idx = this.indexOf(arr, val ? val.value : val)
    if (idx > -1) {
      arr.splice(idx, 1)
      return true
    }
    return false
  }

  Common.prototype.selectAll = function (id, isOn, skipDis) {
    let dl = $(`[xid="${id}"]`)
    if (!dl[0]) {
      return
    }
    if (dl.find('.xm-select-linkage')[0]) {
      return
    }
    // 全选不操作disN隐藏的元素
    dl.find(
      `dd[lay-value]:not(.${FORM_SELECT_TIPS}):not(.${THIS}):not('.disN'):not(.${DD_HIDE})${
        skipDis ? ':not(.' + DISABLED + ')' : ''
      }`
    ).each((index, item) => {
      item = $(item)
      let val = this.getItem(id, item)
      this.handlerLabel(
        id,
        dl.find(`dd[lay-value="${val.value}"]`),
        true,
        val,
        !isOn
      )
    })
  }
  // 全部人员
  Common.prototype.allpeopleFn = function (id, isOn, skipDis) {
    let dl = $(`[xid="${id}"]`)
    if (!dl[0]) {
      return
    }
    if (dl.find('.xm-select-linkage')[0]) {
      return
    }
    let dd = dl.find(
      `dd[lay-value]:not(.${FORM_SELECT_TIPS}):not(.${DD_HIDE})${
        skipDis ? ':not(.' + DISABLED + ')' : ''
      }`
    )
    let peopleDD = dl.find('.xm-select-tips div[method=所有人员]')
    let div = $(`[xid="${id}"]`).prev().find(`.${LABEL}`)
    // let ddArr=[]
    if (peopleDD) {
      if (peopleDD.hasClass('allPeopleStyle')) {
        dd.filter('[employee=employee]').addClass('disN')
        peopleDD.removeClass('allPeopleStyle')
        dd.filter('.xm-select-this[employee=employee]').each((i, item) => {
          //点击全部人员按钮时，对离职人员的操作（从input框去掉离职人员的名字名字）
          let case_name = $(item).find('span').attr('name')
          let ddObj = {
            name: case_name,
            value: Number($(item).attr('lay-value')),
            XM_PID_VALUE: $(item).attr('tree-id'),
            disabled: false,
            innerHTML: case_name
          }
          this.delLabel(id, div, ddObj) //input框中减少一项
          // ddArr.push(ddObj)
          // this.remove(ddArr, ddObj)
          this.calcLabelLeft(div, 0, true) //设置xm-select-label元素的left
        })
      } else {
        dd.filter('[employee=employee]').removeClass('disN')
        peopleDD.addClass('allPeopleStyle')
        dd.filter('.xm-select-this[employee=employee]').each((i, item) => {
          //点击全部人员按钮时，对离职人员的操作（把离职人员的名字添加到input框）
          let case_name = $(item).find('span').attr('name')
          let ddObj = {
            name: case_name,
            value: Number($(item).attr('lay-value')),
            XM_PID_VALUE: $(item).attr('tree-id'),
            disabled: false,
            innerHTML: case_name
          }
          this.addLabel(id, div, ddObj) //input框中添加一项
          // ddArr.push(ddObj)
          this.calcLabelLeft(div, 0, true) //设置xm-select-label元素的left
        })
      }
      this.setHidnVal(id, div) //从新设置input框的value值，确保点击全部人员按钮之后，传递的参数正确
    }
  }
  Common.prototype.removeAll = function (id, isOn, skipDis) {
    let dl = $(`[xid="${id}"]`)
    if (!dl[0]) {
      return
    }
    if (dl.find('.xm-select-linkage')[0]) {
      //针对多级联动的处理
      data[id].values.concat([]).forEach((item, idx) => {
        let vs = item.value.split('/')
        let pid,
          li,
          index = 0
        do {
          pid = vs[index++]
          li = dl.find(
            `.xm-select-linkage-group${index}:not(.xm-select-linkage-hide) li[xm-value="${pid}"]`
          )
          li.click()
        } while (li.length && pid != undefined)
      })
      return
    }
    data[id].values.concat([]).forEach((item, index) => {
      if (
        skipDis &&
        dl.find(`dd[lay-value="${item.value}"]`).hasClass(DISABLED)
      ) {
      } else {
        this.handlerLabel(
          id,
          dl.find(`dd[lay-value="${item.value}"]`),
          false,
          item,
          !isOn
        )
      }
    })
  }

  Common.prototype.reverse = function (id, isOn, skipDis) {
    let dl = $(`[xid="${id}"]`)
    if (!dl[0]) {
      return
    }
    if (dl.find('.xm-select-linkage')[0]) {
      return
    }
    dl.find(
      `dd[lay-value]:not(.${FORM_SELECT_TIPS})${
        skipDis ? ':not(.' + DISABLED + ')' : ''
      }`
    ).each((index, item) => {
      item = $(item)
      let val = this.getItem(id, item)
      this.handlerLabel(
        id,
        dl.find(`dd[lay-value="${val.value}"]`),
        !item.hasClass(THIS),
        val,
        !isOn
      )
    })
  }

  Common.prototype.skin = function (id) {
    let skins = ['default', 'primary', 'normal', 'warm', 'danger']
    let skin = skins[Math.floor(Math.random() * skins.length)]
    $(`dl[xid="${id}"]`)
      .parents(`.${PNAME}`)
      .find(`.${FORM_SELECT}`)
      .attr('xm-select-skin', skin)
    this.check(id) &&
      this.commonHandler(
        id,
        $(`dl[xid="${id}"]`).parents(`.${PNAME}`).find(`.${LABEL}`)
      )
  }

  Common.prototype.getPosition = function (e) {
    let x = 0,
      y = 0
    while (e != null) {
      x += e.offsetLeft
      y += e.offsetTop
      e = e.offsetParent
    }
    return { x: x, y: y }
  }

  Common.prototype.onreset = function () {
    //监听reset按钮, 然后重置多选
    $(document).on('click', '[type=reset]', e => {
      $(e.target)
        .parents('form')
        .find(`.${PNAME} dl[xid]`)
        .each((index, item) => {
          let id = item.getAttribute('xid'),
            dl = $(item),
            dd,
            temp = {}
          common.removeAll(id)
          data[id].config.init.forEach((val, idx) => {
            if (
              val &&
              (!temp[val] || data[id].config.repeat) &&
              (dd = dl.find(`dd[lay-value="${val.value}"]`))[0]
            ) {
              common.handlerLabel(id, dd, true)
              temp[val] = 1
            }
          })
        })
    })
  }

  Common.prototype.bindEvent = function (name, id, fun) {
    if (id && id instanceof Function) {
      fun = id
      id = null
    }
    if (fun && fun instanceof Function) {
      if (!id) {
        $.each(data, (id, val) => {
          data[id] ? (data[id].config[name] = fun) : (events[name][id] = fun)
        })
      } else {
        data[id]
          ? ((data[id].config[name] = fun), delete events[name][id])
          : (events[name][id] = fun)
      }
    }
  }

  Common.prototype.check = function (id, notAutoRender) {
    if ($(`dl[xid="${id}"]`).length) {
      return true
    } else if ($(`select[xm-select="${id}"]`).length) {
      if (!notAutoRender) {
        this.render(id, $(`select[xm-select="${id}"]`))
        return true
      }
    } else {
      delete data[id]
      return false
    }
  }

  Common.prototype.render = function (id, select) {
    common.init(select)
    common.one($(`dl[xid="${id}"]`).parents(`.${PNAME}`))
    common.initVal(id)
  }

  Common.prototype.log = function (obj) {
    console.log(obj)
  }

  let Select4 = function () {
    this.v = v
    this.render()
  }
  let common = new Common()

  Select4.prototype.value = function (id, type, isAppend) {
    if (typeof id != 'string') {
      return []
    }
    let fs = data[id]
    if (!common.check(id)) {
      return []
    }
    if (typeof type == 'string' || type == undefined) {
      let arr = fs.values.concat([]) || []
      if (type == 'val') {
        return arr.map(val => {
          return val.value
        })
      }
      if (type == 'valStr') {
        return arr
          .map(val => {
            return val.value
          })
          .join(',')
      }
      if (type == 'name') {
        return arr.map(val => {
          return val.name
        })
      }
      if (type == 'nameStr') {
        return arr
          .map(val => {
            return val.name
          })
          .join(',')
      }
      if (arr.length > 0) {
        //向下兼容获取val
        for (var i = 0; i < arr.length; i++) {
          arr[i].val = arr[i].value
        }
      }
      return arr
    }
    if (common.isArray(type)) {
      let dl = $(`[xid="${id}"]`),
        temp = {},
        dd,
        isAdd = true
      if (isAppend == false) {
        //删除传入的数组
        isAdd = false
      } else if (isAppend == true) {
        //追加模式
        isAdd = true
      } else {
        //删除原有的数据
        common.removeAll(id)
      }
      if (isAdd) {
        fs.values.forEach((val, index) => {
          temp[val.value] = 1
        })
      }
      type.forEach((val, index) => {
        if (val && (!temp[val] || fs.config.repeat)) {
          if ((dd = dl.find(`dd[lay-value="${val}"]`))[0]) {
            common.handlerLabel(id, dd, isAdd, null, true)
            temp[val] = 1
          } else {
            let name = common.valToName(id, val)
            if (name) {
              common.handlerLabel(id, dd, isAdd, common.getItem(id, val), true)
              temp[val] = 1
            }
          }
        }
      })
    }
  }

  Select4.prototype.on = function (id, fun, isEnd) {
    common.bindEvent(isEnd ? 'endOn' : 'on', id, fun)
    return this
  }

  Select4.prototype.filter = function (id, fun) {
    common.bindEvent('filter', id, fun)
    return this
  }

  Select4.prototype.maxTips = function (id, fun) {
    common.bindEvent('maxTips', id, fun)
    return this
  }

  Select4.prototype.opened = function (id, fun) {
    common.bindEvent('opened', id, fun)
    return this
  }

  Select4.prototype.closed = function (id, fun) {
    common.bindEvent('closed', id, fun)
    return this
  }

  Select4.prototype.config = function (id, config, isJson) {
    if (id && typeof id == 'object') {
      isJson = config == true
      config = id
      id = null
    }
    if (config && typeof config == 'object') {
      if (isJson) {
        config.header || (config.header = {})
        config.header['Content-Type'] = 'application/json; charset=UTF-8'
        config.dataType = 'json'
      }
      id
        ? ((ajaxs[id] = $.extend(true, {}, ajaxs[id] || ajax, config)),
          !common.check(id) && this.render(id),
          data[id] &&
            config.direction &&
            (data[id].config.direction = config.direction),
          data[id] && config.clearInput && (data[id].config.clearInput = true),
          config.searchUrl &&
            data[id] &&
            common.triggerSearch(
              $(`.${PNAME} dl[xid="${id}"]`).parents(`.${FORM_SELECT}`),
              true
            ))
        : ($.extend(true, ajax, config),
          $.each(ajaxs, (key, item) => {
            $.extend(true, item, config)
          }))
    }
    return this
  }

  Select4.prototype.render = function (id, options) {
    if (id && typeof id == 'object') {
      options = id
      id = null
    }
    let config = options
      ? {
          init: options.init,
          disabled: options.disabled,
          max: options.max,
          isSearch: options.isSearch,
          searchUrl: options.searchUrl,
          isCreate: options.isCreate,
          radio: options.radio,
          skin: options.skin,
          direction: options.direction,
          height: options.height,
          formname: options.formname,
          layverify: options.layverify,
          layverType: options.layverType,
          showCount: options.showCount,
          placeholder: options.placeholder,
          create: options.create,
          filter: options.filter,
          maxTips: options.maxTips,
          on: options.on,
          on: options.on,
          opened: options.opened,
          closed: options.closed,
          template: options.template,
          clearInput: options.clearInput
        }
      : {}

    options &&
      options.searchType != undefined &&
      (config.searchType = options.searchType == 'dl' ? 1 : 0)

    if (id) {
      fsConfigs[id] = {}
      $.extend(fsConfigs[id], data[id] ? data[id].config : {}, config)
    } else {
      $.extend(fsConfig, config)
    }

    ;($(`select[${NAME}="${id}"]`)[0]
      ? $(`select[${NAME}="${id}"]`)
      : $(`select[${NAME}]`)
    ).each((index, select) => {
      let sid = select.getAttribute(NAME)
      common.render(sid, select)
      setTimeout(
        () =>
          common.setHidnVal(
            sid,
            $(`select[xm-select="${sid}"] + div.${PNAME} .${LABEL}`)
          ),
        10
      )
    })
    return this
  }

  Select4.prototype.disabled = function (id) {
    let target = {}
    id ? common.check(id) && (target[id] = data[id]) : (target = data)

    $.each(target, (key, val) => {
      $(`dl[xid="${key}"]`).prev().addClass(DIS)
    })
    return this
  }

  Select4.prototype.undisabled = function (id) {
    let target = {}
    id ? common.check(id) && (target[id] = data[id]) : (target = data)

    $.each(target, (key, val) => {
      $(`dl[xid="${key}"]`).prev().removeClass(DIS)
    })
    return this
  }

  Select4.prototype.data = function (id, type, config) {
    if (!id || !type || !config) {
      common.log(`id: ${id} param error !!!`)
      return this
    }
    if (!common.check(id)) {
      common.log(`id: ${id} not render !!!`)
      return this
    }
    this.value(id, [])
    this.config(id, config)
    if (type == 'local') {
      common.renderData(
        id,
        config.arr,
        config.linkage == true,
        config.linkageWidth ? config.linkageWidth : '100'
      )
    } else if (type == 'server') {
      common.ajax(
        id,
        config.url,
        config.keyword,
        config.linkage == true,
        config.linkageWidth ? config.linkageWidth : '100'
      )
    }
    return this
  }

  Select4.prototype.btns = function (id, btns, config) {
    if (id && common.isArray(id)) {
      btns = id
      id = null
    }
    if (!btns || !common.isArray(btns)) {
      return this
    }
    let target = {}
    id ? common.check(id) && (target[id] = data[id]) : (target = data)

    btns = btns.map(obj => {
      if (typeof obj == 'string') {
        if (obj == 'select') {
          return quickBtns[0]
        }
        if (obj == 'remove') {
          return quickBtns[1]
        }
        if (obj == 'reverse') {
          return quickBtns[2]
        }
        if (obj == 'skin') {
          return quickBtns[3]
        }
      }
      return obj
    })

    $.each(target, (key, val) => {
      val.config.btns = btns
      let dd = $(`dl[xid="${key}"]`).find(`.${FORM_SELECT_TIPS}:first`)
      if (btns.length) {
        let show =
          config &&
          config.show &&
          (config.show == 'name' || config.show == 'icon')
            ? config.show
            : ''
        let html = common.renderBtns(
          key,
          show,
          config && config.space ? config.space : '20px'
        )
        dd.html(html)
      } else {
        let pcInput = dd.parents(`.${FORM_SELECT}`).find(`.${TDIV} input`)
        let html = pcInput.attr('placeholder') || pcInput.attr('back')
        dd.html(html)
        dd.removeAttr('style')
      }
    })

    return this
  }

  Select4.prototype.search = function (id, val) {
    if (id && common.check(id)) {
      ajaxs[id] = $.extend(true, {}, ajaxs[id] || ajax, {
        first: true,
        searchVal: val
      })
      common.triggerSearch(
        $(`dl[xid="${id}"]`).parents(`.${FORM_SELECT}`),
        true
      )
    }
    return this
  }

  Select4.prototype.replace = function (id, type, config) {
    if (!id || !type || !config) {
      common.log(`id: ${id} param error !!!`)
      return this
    }
    if (!common.check(id, true)) {
      common.log(`id: ${id} not render !!!`)
      return this
    }
    let oldVals = this.value(id, 'val')
    this.value(id, [])
    this.config(id, config)
    if (type == 'local') {
      common.renderData(
        id,
        config.arr,
        config.linkage == true,
        config.linkageWidth ? config.linkageWidth : '100',
        false,
        true
      )
      this.value(id, oldVals, true)
    } else if (type == 'server') {
      common.ajax(
        id,
        config.url,
        config.keyword,
        config.linkage == true,
        config.linkageWidth ? config.linkageWidth : '100',
        false,
        id => {
          this.value(id, oldVals, true)
        },
        true
      )
    }
  }

  return new Select4()
})
