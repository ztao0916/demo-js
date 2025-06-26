// 示例：如何使用 PropertiesHandler

// 1. 导入处理器
const PropertiesHandler = require('./propertiesHandler');

// 2. 示例Schema（简化版）
const sampleSchema = {
    properties: {
        item_name: {
            title: "Title",
            description: "Provide a title for the item that may be customer facing",
            examples: ["Adidas Blue Sneakers"],
            type: "array",
            items: {
                type: "object",
                properties: {
                    value: {
                        title: "Item Name",
                        description: "Provide a title for the item",
                        editable: true,
                        type: "string",
                        minLength: 0,
                        maxLength: 200
                    }
                }
            }
        },
        brand: {
            title: "Brand Name",
            description: "Max. 50 characters",
            examples: ["Nike"],
            type: "array",
            items: {
                type: "object",
                properties: {
                    value: {
                        title: "Brand Name",
                        description: "Provide the brand name",
                        editable: false,
                        type: "string",
                        minLength: 1,
                        maxLength: 50
                    }
                }
            }
        }
    }
};

// 3. 创建处理器实例
const handler = new PropertiesHandler(sampleSchema);

// 4. 处理属性
const processedProps = handler.process();

// 5. 使用示例
console.log('处理后的属性:');
console.log(JSON.stringify(processedProps, null, 2));

// 6. 验证示例
const itemNameValid = handler.validateProperty('item_name.0.value', 'New Product Name');
console.log('商品名称验证结果:', itemNameValid);

const brandValid = handler.validateProperty('brand.0.value', 'Nike');
console.log('品牌验证结果:', brandValid);

// 7. 获取属性关系
const styleRelations = handler.getPropertyRelations('style');
console.log('样式相关属性:', styleRelations);

// 8. 实际应用示例
function createProductForm(processedProps) {
    const form = {};
    
    // 设置商品名称
    if (processedProps['item_name.0.value'].editable) {
        form.itemName = {
            value: '',
            rules: handler.processValidationRules(processedProps['item_name.0.value']),
            label: processedProps['item_name.0.value'].tTitle,
            help: processedProps['item_name.0.value'].tDescription
        };
    }
    
    // 设置品牌
    if (processedProps['brand.0.value'].editable) {
        form.brand = {
            value: '',
            rules: handler.processValidationRules(processedProps['brand.0.value']),
            label: processedProps['brand.0.value'].tTitle,
            help: processedProps['brand.0.value'].tDescription
        };
    }
    
    return form;
}

// 9. 创建表单配置
const formConfig = createProductForm(processedProps);
console.log('表单配置:', JSON.stringify(formConfig, null, 2)); 