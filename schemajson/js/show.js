/**
 * 简单表单回显函数
 * @param {HTMLElement|string} formElement - 表单元素或选择器
 * @param {Object} formData - 表单数据对象，key为表单元素的name属性
 */
function fillFormData(formElement, formData) {
    // 获取表单元素
    const form = typeof formElement === 'string' ? document.querySelector(formElement) : formElement;
    
    if (!form) {
        console.warn('未找到表单元素');
        return;
    }

    // 遍历表单数据
    for (const key in formData) {
        const value = formData[key];
        // 转义name属性中的特殊字符（如点号）
        const escapedKey = key.replace(/\./g, '\\.');
        const element = form.querySelector(`[name="${escapedKey}"]`);
        
        if (element) {
            // 根据元素类型赋值
            if (element.type === 'checkbox' || element.type === 'radio') {
                element.checked = element.value == value;
            } else {
                element.value = value;
            }
        }
    }

    // 使用layui重新渲染表单
    if (typeof layui !== 'undefined' && layui.form) {
        layui.form.render();
    }
}

// 使用示例：
fillFormData(document.querySelector('.amazonCateSpecifics'), {
    "merchant_suggested_asin.value": "B007KQBXN0",
    "plant_or_animal_product_type.value": "Flower",
    "item_type_keyword.value": "artificial-flowers",
    "model_number.value": "RXZER23",
    "model_name.value": "MacBook Pro",
    "manufacturer.value": "Nike, Procter & Gamble",
    "fulfillment_availability.fulfillment_channel_code": "AMAZON_NA",
    "fulfillment_availability.quantity": "",
    "material.value": "Bamboo, Engineered Wood",
    "fabric_type.value": "60% Cotton, 40% Polyester",
    "number_of_items.value": 5,
    "color.value": "Cranberry",
    "item_shape.value": "Round",
    "included_components.value": "Camera Body",
    "specific_uses_for_product.value": "Dry Sanding",
    "container.material.value": "Glass",
    "container.shape.value": "Cube",
    "container.type.value": "Bottle",
    "indoor_outdoor_usage.value": "indoor",
    "item_depth_width_height.depth.unit": "inches",
    "item_depth_width_height.depth.value": 20,
    "item_depth_width_height.height.unit": "inches",
    "item_depth_width_height.height.value": 40,
    "item_depth_width_height.width.unit": "inches",
    "item_depth_width_height.width.value": 20,
    "country_of_origin.value": "AF",
    "batteries_required.value": "false",
    "supplier_declared_dg_hz_regulation.value": "not_applicable",
    "item_package_dimensions.height.unit": "angstrom",
    "item_package_dimensions.height.value": 2.7,
    "item_package_dimensions.length.unit": "angstrom",
    "item_package_dimensions.length.value": 10,
    "item_package_dimensions.width.unit": "angstrom",
    "item_package_dimensions.width.value": 2,
    "item_package_weight.unit": "pounds",
    "item_package_weight.value": 0.65
});