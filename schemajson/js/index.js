let form = layui.form;
let table = layui.table;
let laytpl = layui.laytpl;
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
  "purchasable_offer",
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
    const response = await fetch("./demo.json");
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
    
    // 绑定展开/收起按钮事件
    bindToggleEvents();
  } catch (error) {
    console.error("表单渲染失败:", error);
  }
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

// 导出函数供外部使用
window.schemaFormUtils = {
  initFormRender,
  getFormData,
  bindToggleEvents
};