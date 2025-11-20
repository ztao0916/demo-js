let form = layui.form;
let table = layui.table;
let laytpl = layui.laytpl;
let $ = layui.$;
let needHiddenUtilLableList = ["Your Price", "Quantity"];
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
  "specific_uses_for_product",
];

let dataStr = `merchant_suggested_asin:[{"value":"示例值","marketplace_id":"ATVPDKIKX0DER"}]#,#item_type_keyword:[{"value":"示例值","marketplace_id":"ATVPDKIKX0DER"}]#,#model_number:[{"value":"示例值","marketplace_id":"ATVPDKIKX0DER"}]#,#model_name:[{"value":"示例值","marketplace_id":"ATVPDKIKX0DER","language_tag":"en_US"}]#,#manufacturer:[{"value":"示例值","marketplace_id":"ATVPDKIKX0DER","language_tag":"en_US"}]#,#fulfillment_availability:[{"fulfillment_channel_code":"AMAZON_NA"}]#,#material:[{"value":"Acrylic","marketplace_id":"ATVPDKIKX0DER","language_tag":"en_US"},{"value":"Alloy Steel","marketplace_id":"ATVPDKIKX0DER","language_tag":"en_US"}]#,#number_of_items:[{"value":"示例值","marketplace_id":"ATVPDKIKX0DER"}]#,#item_shape:[{"value":"Arch & Bow","marketplace_id":"ATVPDKIKX0DER","language_tag":"en_US"}]#,#included_components:[{"value":"Cover","marketplace_id":"ATVPDKIKX0DER","language_tag":"en_US"},{"value":"Installation Hardware","marketplace_id":"ATVPDKIKX0DER","language_tag":"en_US"}]#,#specific_uses_for_product:[{"value":"Beer Keg","marketplace_id":"ATVPDKIKX0DER","language_tag":"en_US"}]#,#indoor_outdoor_usage:[{"value":"indoor","marketplace_id":"ATVPDKIKX0DER"},{"value":"outdoor","marketplace_id":"ATVPDKIKX0DER"}]#,#country_of_origin:[{"value":"AF","marketplace_id":"ATVPDKIKX0DER"}]#,#batteries_required:[{"value":"false","marketplace_id":"ATVPDKIKX0DER"}]#,#supplier_declared_dg_hz_regulation:[{"value":"ghs","marketplace_id":"ATVPDKIKX0DER"},{"value":"other","marketplace_id":"ATVPDKIKX0DER"}]#,#item_package_dimensions:[{"height":{"unit":"inches","value":"示例值"},"length":{"unit":"inches","value":"示例值"},"width":{"unit":"inches","value":"示例值"},"marketplace_id":"ATVPDKIKX0DER"}]#,#item_package_weight:[{"unit":"pounds","value":"示例值","marketplace_id":"ATVPDKIKX0DER"}]#,#num_batteries:[{"quantity":4,"type":"12v","marketplace_id":"ATVPDKIKX0DER"},{"quantity":6,"type":"9v","marketplace_id":"ATVPDKIKX0DER"}]`;

console.log("amazonParseFormData转换", amazonParseFormData(dataStr));

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
    const formData = amazonUtils.transformJsonSchemaToForm(
      schemaData,
      mustRequire
    );

    // 获取模板
    const templateStr = document.getElementById(
      "amazonCateSpecificsNewTempV2"
    ).innerHTML;

    // 使用laytpl渲染模板
    const template = laytpl(templateStr);
    const renderedHtml = template.render(formData);

    // 将渲染结果插入到表单容器中
    const formContainer = document.querySelector("#form-container .layui-form");
    formContainer.innerHTML = renderedHtml;

    // 重新渲染layui表单组件
    form.render();

    // 隐藏指定的label项
    hideSpecifiedLabels();

    // 绑定展开/收起按钮事件
    bindToggleEvents();

    // 绑定新增的提交相关事件
    bindSubmitEvents();

    // 绑定maxUniqueItemsBtns按钮事件
    bindMaxUniqueItemsBtnsEvents();
  } catch (error) {
    console.error("表单渲染失败:", error);
  }
};

function bindMaxUniqueItemsBtnsEvents() {
  // 新增按钮点击事件
  $(document).on("click", ".addMaxUniqueItemsBtn", function () {
    const $buttonGroup = $(this).parent();
    const $inputBlock = $buttonGroup.parent();
    const max = $buttonGroup.data("max");
    const childrenLength = $buttonGroup.data("children-length");
    const $items = $inputBlock.find(".attrContent");

    if ($items.length / childrenLength >= max) {
      layer.msg("最多只能添加" + max + "项", { icon: 7 });
      return;
    }

    // 提取并克隆模板组
    const $templateGroup = $items.slice(0, childrenLength).clone();
    $templateGroup.find("input, select").val(""); // 清空克隆项的值
    //为克隆项中的input,select添加类名=input,select的name,同时移除name
    $templateGroup.find("input, select").each(function () {
      const $input = $(this);
      const name = $input.attr("name");
      $input.addClass(name).removeAttr("name");
    });

    // 将克隆组添加到按钮组之前
    $buttonGroup.before($templateGroup);
    form.render(); // 重新渲染layui表单

    // 更新按钮状态
    updateButtonsState($inputBlock);
  });

  // 移除按钮点击事件
  $(document).on("click", ".removeMaxUniqueItemsBtn", function () {
    const $buttonGroup = $(this).parent();
    const $inputBlock = $buttonGroup.parent();
    const childrenLength = $buttonGroup.data("children-length");
    const $items = $inputBlock.find(".attrContent");

    if ($items.length / childrenLength <= 1) {
      layer.msg("最少保留一个", { icon: 7 });
      return;
    }

    // 移除最后一组
    $items.slice(-childrenLength).remove();
    updateButtonsState($inputBlock);
  });

  // 初始化按钮状态
  $(".layui-input-block").each(function () {
    updateButtonsState($(this));
  });
}

/**
 * 更新添加/删除按钮的状态
 * @param {JQuery} $inputBlock - a JQuery object representing the .layui-input-block container
 */
function updateButtonsState($inputBlock) {
  const $buttonGroup = $inputBlock.find(".maxUniqueItemsBtns");
  if ($buttonGroup.length === 0) return; // 如果没有按钮组，则直接返回

  const max = $buttonGroup.data("max");
  const childrenLength = $buttonGroup.data("children-length");
  const $items = $inputBlock.find(".attrContent");
  const $addBtn = $buttonGroup.find(".addMaxUniqueItemsBtn");
  const $removeBtn = $buttonGroup.find(".removeMaxUniqueItemsBtn");

  const currentGroupCount = $items.length / childrenLength;

  // 控制删除按钮的显隐
  $removeBtn.toggle(currentGroupCount > 1);

  // 控制添加按钮的显隐
  $addBtn.toggle(currentGroupCount < max);
}

/**
 * 隐藏指定的label项
 */
const hideSpecifiedLabels = () => {
  needHiddenUtilLableList.forEach((labelText) => {
    // 查找所有包含指定文本的label元素
    $(".layui-form-label").each(function () {
      if ($(this).text().trim() === labelText) {
        // 隐藏整个表单项容器
        const $formItem = $(this).closest(".layui-form-item").length
          ? $(this).closest(".layui-form-item")
          : $(this).closest("div");
        if ($formItem.find("div").length === 2) {
          $formItem.hide();
        } else {
          $(this).closest("div").hide();
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
  const moreAttrBtn = document.getElementById("publish_moreAttrBtn");
  const optionValue = document.getElementById("optionValue");

  if (moreAttrBtn && optionValue) {
    moreAttrBtn.addEventListener("click", function () {
      if (optionValue.classList.contains("disN")) {
        optionValue.classList.remove("disN");
        this.textContent = "收起分类属性";
      } else {
        optionValue.classList.add("disN");
        this.textContent = "展开分类属性";
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
  const formElement = document.querySelector("#form-container .layui-form");

  if (formElement) {
    const inputs = formElement.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      if (input.name && input.value) {
        formData[input.name] = input.value;
      }
    });
  }

  return formData;
};

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", () => {
  initFormRender();
});

/**
 * 获取表单中有值的字段数据
 * @return {Object} 只包含有值字段的表单数据对象
 */
const getFormDataWithValues = () => {
  const formData = {};
  const $formElement = $("#form-container .layui-form");

  if ($formElement.length) {
    // 使用jQuery获取所有input、select、textarea元素
    const $inputs = $formElement.find("input, select, textarea");

    // 收集有值的字段
    $inputs.each(function () {
      const $input = $(this);
      const name = $input.attr("name");
      const value = $input.val();

      // 只收集有值的字段，且父元素未被隐藏
      if (name && value && value.trim() !== "") {
        // 检查父元素的显示状态
        const $parent = $input.parent().parent();
        const isVisible = $parent.css("display") !== "none";

        if (isVisible) {
          formData[name] = value;
        }
      }
    });

    // 获取所有inputs的class
    const inputClasses = $inputs
      .map(function () {
        return $(this).attr("class") || "";
      })
      .get();

    // 过滤出包含"."的class
    const requiredClasses = inputClasses.filter(
      (cls) => cls !== "" && cls.indexOf(".") !== -1
    );
    console.log("requiredClasses", requiredClasses);

    // 获取requiredClasses中class元素对应的值，组成class:value形式对象
    const classCountMap = {}; // 记录每个类名已取的次数

    const requiredClassesWithValue = requiredClasses
      .map((cls) => {
        // 先使用空格分割cls，取最后一个作为需要的类名
        const requiredCls = cls.split(" ")[cls.split(" ").length - 1];
        const escapedCls = requiredCls.replace(/\./g, "\\.");
        console.log("escapedCls", escapedCls);

        // 使用jQuery查找元素
        const $elements = $formElement.find(`.${escapedCls}`);

        // 计数器：如果没有则初始化为0
        classCountMap[requiredCls] = classCountMap[requiredCls] || 0;
        const $element = $elements.eq(classCountMap[requiredCls]);
        classCountMap[requiredCls]++; // 下次遇到同名类，计数器+1

        const value = $element.length ? $element.val().trim() : "";
        if (value !== "") {
          return { [requiredCls]: value };
        }
      })
      .filter(Boolean); // 过滤掉 undefined

    formData.classValue = requiredClassesWithValue;
  }
  return formData;
};

/**
 * 自动填写必填项
 */
const fillRequiredFields = () => {
  const formElement = document.querySelector("#form-container .layui-form");

  if (formElement) {
    // 查找所有必填项
    const requiredInputs = formElement.querySelectorAll(
      'input[data-required="true"], select[data-required="true"]'
    );

    requiredInputs.forEach((input) => {
      if (input.tagName.toLowerCase() === "input") {
        // 为input类型设置默认值
        input.value = "示例值";
      } else if (input.tagName.toLowerCase() === "select") {
        // 为select类型选择第一个非空选项
        const options = input.querySelectorAll("option");
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

function standardJsonSchemaDataHandle(submitData) {
  console.log("submitData", submitData);
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
  if (submitKeys.includes("list_price")) {
    let listPriceObj = newProperties.find((item) => item["list_price"])[
      "list_price"
    ];
    let listPriceArr = submitData["list_price"];
    listPriceArr.forEach((item) => {
      item.currency = listPriceObj.items.properties.currency.enum[0];
    });
  }
  console.log("newProperties", newProperties);
  // 使用新的转换函数处理 submitData，确保数据结构符合 schema 规范
  let transformedSubmitData = amazonTransformSubmitDataBySchema(
    submitData,
    newProperties
  );
  //遍历transformedSubmitData,是一个对象
  Object.keys(transformedSubmitData).forEach((key) => {
    if (key == "fulfillment_availability") {
      transformedSubmitData[key].forEach((item) => {
        if (item["fulfillment_channel_code"] == "AMAZON_NA") {
          delete item.quantity;
        } else {
          item.quantity = Number(item.quantity);
        }
      });
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
  console.log("formData", formData);
  let processData = amazonProcessFormData(formData);
  let standardData = standardJsonSchemaDataHandle(processData);

  // 输出到控制台
  console.log("提交的表单数据:", standardData);

  // 使用layui的弹窗显示提交的数据
  layer.open({
    type: 1,
    title: "提交的表单数据",
    content: "<pre>" + JSON.stringify(standardData, null, 2) + "</pre>",
    area: ["500px", "300px"],
  });

  // 这里可以添加实际的表单提交逻辑，如AJAX请求等
};

/**
 * 绑定提交相关的按钮事件
 */
const bindSubmitEvents = () => {
  // 填写必填项按钮事件
  const fillRequiredBtn = document.getElementById("fillRequiredBtn");
  if (fillRequiredBtn) {
    fillRequiredBtn.addEventListener("click", fillRequiredFields);
  }

  // 提交表单按钮事件
  const submitFormBtn = document.getElementById("submitFormBtn");
  if (submitFormBtn) {
    submitFormBtn.addEventListener("click", submitFormData);
  }
};

//添加重量/尺寸处理
let amazonDefaultAttrValue = {
  model_number: [
    {
      value: "--d2--4807",
      marketplace_id: "ATVPDKIKX0DER",
    },
  ],
  model_name: [
    {
      value:
        "Appliances >> Garbage Disposals & Compactors >> Garbage Disposals",
      language_tag: "en_US",
    },
  ],
  manufacturer: [
    {
      value: "Genenic",
      language_tag: "en_US",
      marketplace_id: "ATVPDKIKX0DER",
    },
  ],
  country_of_origin: [
    {
      value: "CN",
      marketplace_id: "ATVPDKIKX0DER",
    },
  ],
  supplier_declared_dg_hz_regulation: [
    {
      value: "not_applicable",
      marketplace_id: "ATVPDKIKX0DER",
    },
  ],
  number_of_boxes: [
    {
      value: "1",
      marketplace_id: "ATVPDKIKX0DER",
    },
  ],
  number_of_items: [
    {
      value: "1",
      marketplace_id: "ATVPDKIKX0DER",
    },
  ],
  unit_count: [
    {
      value: "1",
      type: {
        value: "Count",
        language_tag: "en_US",
      },
    },
  ],
  batteries_required: [
    {
      marketplace_id: "ATVPDKIKX0DER",
      value: false,
    },
  ],
  import_designation: [
    {
      value: "imported",
      language_tag: "en_US",
      marketplace_id: "ATVPDKIKX0DER",
    },
  ],
  cpsia_cautionary_statement: [
    {
      value: "no_warning_applicable",
      marketplace_id: "ATVPDKIKX0DER",
    },
  ],
  item_package_dimensions: [
    {
      height: {
        value: 12,
        marketplace_id: "ATVPDKIKX0DER",
      },
      length: {
        value: 14,
        marketplace_id: "ATVPDKIKX0DER",
      },
      width: {
        value: 13,
        marketplace_id: "ATVPDKIKX0DER",
      },
      marketplace_id: "ATVPDKIKX0DER",
    },
  ],
  item_package_weight: [
    {
      value: 30,
      marketplace_id: "ATVPDKIKX0DER",
    },
  ],
};

// 导出函数供外部使用
window.schemaFormUtils = {
  initFormRender,
  getFormData,
  getFormDataWithValues,
  fillRequiredFields,
  submitFormData,
  bindToggleEvents,
  bindSubmitEvents,
};
