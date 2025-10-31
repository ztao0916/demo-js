let form = layui.form;
let table = layui.table;
let laytpl = layui.laytpl;
let $ = layui.$;
let needHiddenUtilLableList = ['Your Price','Quantity'];
let mustRequire = [
  "container",
  "color",
  "included_components",
  "item_package_weight",
  "manufacturer",
  "externally_assigned_product_identifier",
  "item_shape",
  "model_name",
  "indoor_outdoor_usage",
  "bullet_point",
  "fulfillment_availability",
  "model_number",
  "product_description",
  "supplier_declared_dg_hz_regulation",
  "brand",
  // "purchasable_offer", //默认不展示,即使有必填
  "country_of_origin",
  "list_price",
  "batteries_required",
  "fabric_type",
  "item_depth_width_height",
  "item_type_keyword",
  "number_of_items",
  "merchant_suggested_asin",
  "plant_or_animal_product_type",
  "item_package_dimensions",
  "material",
  "specific_uses_for_product"
]

/**
 * 获取JSON Schema数据
 * @return {Promise<Object>} Schema数据对象
 */
const getSchemaContent = async () => {
  try {
    const response = await fetch("./json/us.json");
    return await response.json();
  } catch (error) {
    console.error("获取Schema数据失败:", error);
    return null;
  }
};

/**
 * 初始化表单渲染
 */
const initFormRender = async () => {
  try {
    // 获取JSON Schema数据
    const schemaData = await getSchemaContent();
    if (!schemaData) {
      console.error("无法获取Schema数据");
      return;
    }
    console.log(amazonGetItemNameMaxLength(schemaData));

    // 使用transformJsonSchemaToForm函数转换数据
    const formData = amazonUtils.transformJsonSchemaToForm(schemaData, mustRequire);

    // 获取模板
    const templateStr = document.getElementById('amazonCateSpecificsNewTempV2').innerHTML;
    
    // 使用laytpl渲染模板
    const template = laytpl(templateStr);
    const renderedHtml = template.render(formData);
    
    // 将渲染结果插入到表单容器中
    const formContainer = document.querySelector('#form-container .layui-form');
    formContainer.innerHTML = renderedHtml;
    
    // 重新渲染layui表单组件
    form.render();
    
    // 隐藏指定的label项
    hideSpecifiedLabels();
    
    // 绑定展开/收起按钮事件
    bindToggleEvents();
    
    // 绑定新增的提交相关事件
    bindSubmitEvents();
  } catch (error) {
    console.error("表单渲染失败:", error);
  }
};

/**
 * 隐藏指定的label项
 */
const hideSpecifiedLabels = () => {
  needHiddenUtilLableList.forEach(labelText => {
    // 查找所有包含指定文本的label元素
    $('.layui-form-label').each(function() {
      if ($(this).text().trim() === labelText) {
        // 隐藏整个表单项容器
        const $formItem = $(this).closest('.layui-form-item').length ? $(this).closest('.layui-form-item') : $(this).closest('div');
        if ($formItem.find('div').length === 2) {
          $formItem.hide();
        } else {
          $(this).closest('div').hide();
        }
      }
    });
  });
};

/**
 * 绑定展开/收起按钮事件
 */
const bindToggleEvents = () => {
  // 展开分类属性按钮事件
  const moreAttrBtn = document.getElementById('publish_moreAttrBtn');
  const optionValue = document.getElementById('optionValue');
  
  if (moreAttrBtn && optionValue) {
    moreAttrBtn.addEventListener('click', function() {
      if (optionValue.classList.contains('disN')) {
        optionValue.classList.remove('disN');
        this.textContent = '收起分类属性';
      } else {
        optionValue.classList.add('disN');
        this.textContent = '展开分类属性';
      }
    });
  }
};

/**
 * 获取表单数据
 * @return {Object} 表单数据对象
 */
const getFormData = () => {
  const formData = {};
  const formElement = document.querySelector('#form-container .layui-form');
  
  if (formElement) {
    const inputs = formElement.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (input.name && input.value) {
        formData[input.name] = input.value;
      }
    });
  }
  
  return formData;
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initFormRender();
});

/**
 * 获取表单中有值的字段数据
 * @return {Object} 只包含有值字段的表单数据对象
 */
const getFormDataWithValues = () => {
  const formData = {};
  const formElement = document.querySelector('#form-container .layui-form');
  
  if (formElement) {
    const inputs = formElement.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      // 只收集有值的字段
      if (input.name && input.value.trim() !== '') {
        formData[input.name] = input.value;
      }
    });
  }
  
  return formData;
};

/**
 * 自动填写必填项
 */
const fillRequiredFields = () => {
  const formElement = document.querySelector('#form-container .layui-form');
  
  if (formElement) {
    // 查找所有必填项
    const requiredInputs = formElement.querySelectorAll('input[data-required="true"], select[data-required="true"]');
    
    requiredInputs.forEach(input => {
      if (input.tagName.toLowerCase() === 'input') {
        // 为input类型设置默认值
        input.value = '示例值';
      } else if (input.tagName.toLowerCase() === 'select') {
        // 为select类型选择第一个非空选项
        const options = input.querySelectorAll('option');
        for (let i = 0; i < options.length; i++) {
          if (options[i].value) {
            input.value = options[i].value;
            break;
          }
        }
      }
    });
    
    // 重新渲染表单，使select的选中状态生效
    form.render();
  }
};


function standardJsonSchemaDataHandle(submitData){
  let parseProperties = amazonParseSchemaProperties(amazonUtils._schemaData);
  let convertProperties = amazonConvertToObjectArray(parseProperties);
  //获取到convertProperties中和submitData的key相同项并打印
  let submitKeys = Object.keys(submitData);
  //遍历convertProperties,如果item对应的key在submitKeys中,就提出来
  let newProperties = [];
  convertProperties.forEach((item) => {
    let itemKey = Object.keys(item)[0];
    if (submitKeys.includes(itemKey)) {
      newProperties.push(item);
    }
  });
  //遍历submitData,如果key=list_price,就把newProperties中key=list_price的currency的enum中第一项赋值给submitData的list_price的currency字段
  if (submitKeys.includes('list_price')) {
    let listPriceObj= newProperties.find(item => item['list_price'])['list_price'];
    let listPriceArr = submitData['list_price'];
    listPriceArr.forEach(item => {
      item.currency = listPriceObj.items.properties.currency.enum[0];
    })
  }
  console.log('newProperties', newProperties);
  // 使用新的转换函数处理 submitData，确保数据结构符合 schema 规范
  let transformedSubmitData = amazonTransformSubmitDataBySchema(submitData,newProperties);
  //遍历transformedSubmitData,是一个对象
  Object.keys(transformedSubmitData).forEach((key) => {
    if (key == 'fulfillment_availability') {
      transformedSubmitData[key].forEach(item => {
        if(item['fulfillment_channel_code'] == 'AMAZON_NA'){
          delete item.quantity;
        }else{
          item.quantity = Number(item.quantity)
        }
      })
    }
  });
  return transformedSubmitData;
}

/**
 * 提交表单数据
 */
const submitFormData = () => {
  // 获取只有值的表单数据
  const formData = getFormDataWithValues();
  let processData = amazonProcessFormData(formData);
  let standardData = standardJsonSchemaDataHandle(processData);
  
  // 输出到控制台
  console.log('提交的表单数据:', standardData);
  
  // 使用layui的弹窗显示提交的数据
  layer.open({
    type: 1,
    title: '提交的表单数据',
    content: '<pre>' + JSON.stringify(standardData, null, 2) + '</pre>',
    area: ['500px', '300px']
  });
  
  // 这里可以添加实际的表单提交逻辑，如AJAX请求等
};

/**
 * 绑定提交相关的按钮事件
 */
const bindSubmitEvents = () => {
  // 填写必填项按钮事件
  const fillRequiredBtn = document.getElementById('fillRequiredBtn');
  if (fillRequiredBtn) {
    fillRequiredBtn.addEventListener('click', fillRequiredFields);
  }
  
  // 提交表单按钮事件
  const submitFormBtn = document.getElementById('submitFormBtn');
  if (submitFormBtn) {
    submitFormBtn.addEventListener('click', submitFormData);
  }
};

//添加重量/尺寸处理
let amazonDefaultAttrValue = {
    "model_number": [
        {
            "value": "--d2--4807",
            "marketplace_id": "ATVPDKIKX0DER"
        }
    ],
    "model_name": [
        {
            "value": "Appliances >> Garbage Disposals & Compactors >> Garbage Disposals",
            "language_tag": "en_US"
        }
    ],
    "manufacturer": [
        {
            "value": "Genenic",
            "language_tag": "en_US",
            "marketplace_id": "ATVPDKIKX0DER"
        }
    ],
    "country_of_origin": [
        {
            "value": "CN",
            "marketplace_id": "ATVPDKIKX0DER"
        }
    ],
    "supplier_declared_dg_hz_regulation": [
        {
            "value": "not_applicable",
            "marketplace_id": "ATVPDKIKX0DER"
        }
    ],
    "number_of_boxes": [
        {
            "value": "1",
            "marketplace_id": "ATVPDKIKX0DER"
        }
    ],
    "number_of_items": [
        {
            "value": "1",
            "marketplace_id": "ATVPDKIKX0DER"
        }
    ],
    "unit_count": [
        {
            "value": "1",
            "type": {
                "value": "Count",
                "language_tag": "en_US"
            }
        }
    ],
    "batteries_required": [
        {
            "marketplace_id": "ATVPDKIKX0DER",
            "value": false
        }
    ],
    "import_designation": [
        {
            "value": "imported",
            "language_tag": "en_US",
            "marketplace_id": "ATVPDKIKX0DER"
        }
    ],
    "cpsia_cautionary_statement": [
        {
            "value": "no_warning_applicable",
            "marketplace_id": "ATVPDKIKX0DER"
        }
    ],
    "item_package_dimensions": [
        {
            "height": {
                "value": 12,
                "marketplace_id": "ATVPDKIKX0DER"
            },
            "length": {
                "value": 14,
                "marketplace_id": "ATVPDKIKX0DER"
            },
            "width": {
                "value": 13,
                "marketplace_id": "ATVPDKIKX0DER"
            },
            "marketplace_id": "ATVPDKIKX0DER"
        }
    ],
    "item_package_weight": [
        {
            "value": 30,
            "marketplace_id": "ATVPDKIKX0DER"
        }
    ]
}

/**
 * 功能: 根据传入的对象获取到重量和尺寸,进行匹配转换,需要适应匹配规则:重量规则和尺寸规则
 * @param {*} obj
 * @param {*} obj.data 属性对象
 * @param {*} obj.propertiesName 重量属性名
 * @param {*} obj.typeRules 规则类型: 重量规则或尺寸规则
 * @return {*} 转换后的重量和尺寸对象
 */
const convertWeightAndDimension = (obj) => {
  let {data, propertiesName, typeRules} = obj;
  let currentObj = data[propertiesName];
  //定义默认的重量规则: 首先取第一项,如果没有取第二项,以此类推
  let propertiesNameArr = ['item_package_dimensions'];
  console.log('propertiesNameArr', propertiesNameArr)
}


// 导出函数供外部使用
window.schemaFormUtils = {
  initFormRender,
  getFormData,
  getFormDataWithValues,
  fillRequiredFields,
  submitFormData,
  bindToggleEvents,
  bindSubmitEvents
};