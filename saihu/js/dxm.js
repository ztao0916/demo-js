(function(C, S) {
  typeof exports == "object" && typeof module < "u" ? S(exports) : typeof define == "function" && define.amd ? define(["exports"], S) : (C = typeof globalThis < "u" ? globalThis : C || self,
  S(C.FormSchema = {}))
}
)(this, function(C) {
  "use strict";
  const S = {
      age_gender_category: ["AGE_GENDER_CATEGORY"],
      style: ["COLOR_NAME/STYLE_NAME/CONFIGURATION", "MODEL/STYLE_NAME", "STYLE_NAME/SIZE_NAME/CONFIGURATION", "SIZE_NAME/STYLE_NAME", "SIZE_NAME/STYLE_NAME/COLOR_NAME", "COLOR_NAME/STYLE_NAME", "STYLE_NAME/MATERIAL_TYPE", "STYLE_NAME/COLOR_NAME", "NUMBER_OF_ITEMS/STYLE_NAME", "MODEL/STYLE_NAME/PART_NUMBER", "SIZE_NAME/STYLE_NAME/PATTERN_NAME", "STYLE_NAME/PATTERN_NAME/COLOR_NAME", "MATERIAL_TYPE/STYLE_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "STYLE_NAME/CONFIGURATION", "STYLE_NAME/PATTERN_NAME/SIZE_NAME", "PATTERN_NAME/STYLE_NAME", "STYLE_NAME/COLOR_NAME/CONFIGURATION", "SIZE_NAME/STYLE_NAME/CONFIGURATION", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "STYLE_NAME/SIZE_NAME/COLOR_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME", "SIZE_NAME/STYLE_NAME/CUSTOMER_PACKAGE_TYPE", "STYLE_NAME/COLOR_NAME/SIZE_NAME", "STYLE_NAME/SIZE_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "STYLE_NAME/CUSTOMER_PACKAGE_TYPE", "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER", "PATTERN_NAME/STYLE_NAME/COLOR_NAME", "STYLE_NAME", "STYLE_NAME/PATTERN_NAME/CONFIGURATION", "ITEM_PACKAGE_QUANTITY/STYLE_NAME", "STYLE_NAME/PATTERN_NAME", "CONFIGURATION/STYLE_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME", "STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME", "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION"],
      material: ["SIZE_NAME/MATERIAL_TYPE", "STYLE_NAME/MATERIAL_TYPE", "MATERIAL_TYPE/ITEM_DISPLAY_WEIGHT", "MATERIAL_TYPE/COLOR_NAME", "MATERIAL_TYPE/STYLE_NAME", "MATERIAL_TYPE", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "MATERIAL_TYPE/SIZE_NAME", "COLOR_NAME/MATERIAL_TYPE"],
      fabric_type: ["FABRIC_TYPE/COLOR_NAME"],
      item_package_quantity: ["ITEM_PACKAGE_QUANTITY/SIZE_NAME", "COLOR_NAME/ITEM_PACKAGE_QUANTITY", "ITEM_PACKAGE_QUANTITY", "ITEM_PACKAGE_QUANTITY/STYLE_NAME", "ITEM_PACKAGE_QUANTITY/COLOR_NAME"],
      color: ["FIT_TYPE/SIZE_NAME/COLOR_NAME", "MODEL_NAME/COLOR_NAME", "COLOR_NAME/SIZE_NAME/PATTERN_NAME", "COLOR_NAME/STYLE_NAME/CONFIGURATION", "COLOR_NAME/PATTERN_NAME", "SIZE_NAME/STYLE_NAME/COLOR_NAME", "COLOR_NAME/STYLE_NAME", "COLOR", "AUTO_PART_POSITION/CONFIGURATION/COLOR_NAME", "MATERIAL_TYPE/COLOR_NAME", "STYLE_NAME/COLOR_NAME", "STYLE_NAME/PATTERN_NAME/COLOR_NAME", "COLOR_NAME/CUSTOMER_PACKAGE_TYPE", "COLOR_NAME/SIZE_NAME/STYLE_NAME", "SIZE/COLOR", "SIZE_NAME/COLOR_NAME/CONFIGURATION", "PATTERN_NAME/COLOR_NAME", "FABRIC_TYPE/COLOR_NAME", "STYLE_NAME/COLOR_NAME/CONFIGURATION", "SIZE_NAME/COLOR_NAME/PATTERN_NAME", "TEAM_NAME/SIZE_NAME/COLOR_NAME", "MODEL/COLOR_NAME", "COLOR_NAME/ITEM_PACKAGE_QUANTITY", "STYLE_NAME/SIZE_NAME/COLOR_NAME", "GRIT_TYPE/COLOR_NAME", "COLOR_NAME/CONFIGURATION", "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME", "SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS", "STYLE_NAME/COLOR_NAME/SIZE_NAME", "SIZE_NAME/COLOR_NAME", "COLOR_NAME/SIZE_NAME/CONFIGURATION", "COLOR_NAME/NUMBER_OF_ITEMS", "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "COLOR_NAME/MATERIAL_TYPE", "PATTERN_NAME/STYLE_NAME/COLOR_NAME", "COLOR_NAME", "CONFIGURATION/COLOR_NAME", "COLOR_NAME/SIZE_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME", "STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME", "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION", "ITEM_PACKAGE_QUANTITY/COLOR_NAME"],
      size: ["FIT_TYPE/SIZE_NAME/COLOR_NAME", "FLAVOR/SIZE", "COLOR_NAME/SIZE_NAME/PATTERN_NAME", "SIZE_NAME/MATERIAL_TYPE", "SIZE_NAME/PATTERN_NAME", "STYLE_NAME/SIZE_NAME/CONFIGURATION", "SIZE_NAME/STYLE_NAME", "SIZE_NAME/STYLE_NAME/COLOR_NAME", "SIZE_NAME/CUSTOMER_PACKAGE_TYPE", "SIZE", "TEAM_NAME/SIZE_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "SIZE/COLOR", "PATTERN_NAME/SIZE_NAME", "ITEM_SHAPE/SIZE_NAME", "SIZE_NAME/COLOR_NAME/CONFIGURATION", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "STYLE_NAME/PATTERN_NAME/SIZE_NAME", "MATERIAL_TYPE/SIZE_NAME", "SIZE_NAME/STYLE_NAME/CONFIGURATION", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "SIZE_NAME/COLOR_NAME/PATTERN_NAME", "TEAM_NAME/SIZE_NAME/COLOR_NAME", "ITEM_PACKAGE_QUANTITY/SIZE_NAME", "STYLE_NAME/SIZE_NAME/COLOR_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME", "SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS", "SIZE_NAME/STYLE_NAME/CUSTOMER_PACKAGE_TYPE", "STYLE_NAME/COLOR_NAME/SIZE_NAME", "SIZE_NAME/COLOR_NAME", "STYLE_NAME/SIZE_NAME", "COLOR_NAME/SIZE_NAME/CONFIGURATION", "SIZE_NAME/CONFIGURATION", "SIZE/PATTERN", "CONFIGURATION/SIZE_NAME", "SIZE_NAME/NUMBER_OF_ITEMS", "MODEL/SIZE_NAME", "GRIT_TYPE/SIZE_NAME", "SIZE_NAME/SCENT_NAME", "COLOR_NAME/SIZE_NAME", "SIZE_NAME", "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION"],
      item_shape: ["ITEM_SHAPE", "ITEM_SHAPE/SIZE_NAME"],
      fit_type: ["FIT_TYPE/SIZE_NAME/COLOR_NAME"],
      configuration: ["COLOR_NAME/STYLE_NAME/CONFIGURATION", "CONFIGURATION", "STYLE_NAME/SIZE_NAME/CONFIGURATION", "AUTO_PART_POSITION/CONFIGURATION/COLOR_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "SIZE_NAME/COLOR_NAME/CONFIGURATION", "STYLE_NAME/CONFIGURATION", "STYLE_NAME/COLOR_NAME/CONFIGURATION", "SIZE_NAME/STYLE_NAME/CONFIGURATION", "COLOR_NAME/CONFIGURATION", "COLOR_NAME/SIZE_NAME/CONFIGURATION", "SIZE_NAME/CONFIGURATION", "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "CONFIGURATION/SIZE_NAME", "STYLE_NAME/PATTERN_NAME/CONFIGURATION", "CONFIGURATION/COLOR_NAME", "CONFIGURATION/STYLE_NAME", "CONNECTIVITY_TECHNOLOGY/CONFIGURATION", "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION"],
      auto_part_position: ["AUTO_PART_POSITION/CONFIGURATION/COLOR_NAME"],
      capacity: ["MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER"],
      lens: ["LENS_COLOR"],
      "lens.0.color": ["LENS_COLOR"],
      item_display_dimensions: ["ITEM_DISPLAY_LENGTH", "ITEM_DISPLAY_WIDTH"],
      flavor: ["FLAVOR/SIZE", "FLAVOR_NAME"],
      connectivity_technology: ["CONNECTIVITY_TECHNOLOGY/CONFIGURATION"],
      volume_capacity_name: ["VOLUME_CAPACITY_NAME"],
      customer_package_type: ["SIZE_NAME/CUSTOMER_PACKAGE_TYPE", "COLOR_NAME/CUSTOMER_PACKAGE_TYPE", "CUSTOMER_PACKAGE_TYPE", "SIZE_NAME/STYLE_NAME/CUSTOMER_PACKAGE_TYPE", "STYLE_NAME/CUSTOMER_PACKAGE_TYPE"],
      pattern: ["COLOR_NAME/SIZE_NAME/PATTERN_NAME", "SIZE_NAME/PATTERN_NAME", "COLOR_NAME/PATTERN_NAME", "PATTERN_NAME", "PATTERN", "SIZE_NAME/STYLE_NAME/PATTERN_NAME", "STYLE_NAME/PATTERN_NAME/COLOR_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "PATTERN_NAME/SIZE_NAME", "PATTERN_NAME/COLOR_NAME", "STYLE_NAME/PATTERN_NAME/SIZE_NAME", "PATTERN_NAME/STYLE_NAME", "SIZE_NAME/COLOR_NAME/PATTERN_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "SIZE/PATTERN", "PATTERN_NAME/STYLE_NAME/COLOR_NAME", "STYLE_NAME/PATTERN_NAME/CONFIGURATION", "STYLE_NAME/PATTERN_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME"],
      unit_count: ["UNIT_COUNT"],
      team_name: ["TEAM_NAME/SIZE_NAME", "TEAM_NAME", "TEAM_NAME/SIZE_NAME/COLOR_NAME"],
      scent: ["SCENT_NAME", "SIZE_NAME/SCENT_NAME"],
      hand_orientation: ["HAND_ORIENTATION"],
      cup: ["CUP_SIZE"],
      "cup.0.size": ["CUP_SIZE"],
      grip: ["GRIP_SIZE/GRIP_TYPE"],
      "grip.0.size": ["GRIP_SIZE/GRIP_TYPE"],
      "grip.0.type": ["GRIP_SIZE/GRIP_TYPE"],
      grit: ["GRIT_TYPE/COLOR_NAME", "GRIT_TYPE", "GRIT_TYPE/SIZE_NAME"],
      "grit.0.type": ["GRIT_TYPE/COLOR_NAME", "GRIT_TYPE", "GRIT_TYPE/SIZE_NAME"],
      length_range: ["LENGTH_RANGE"],
      matte_style: ["MATTE_STYLE"],
      item_thickness: ["ITEM_THICKNESS"],
      item_weight: ["ITEM_WEIGHT"],
      item_dimensions_fraction: ["ITEM_LENGTH_STRING/ITEM_WIDTH_STRING/NUMBER_OF_ITEMS", "ITEM_LENGTH_STRING/ITEM_WIDTH_STRING/NUMBER_OF_ITEMS"],
      item_dimensions: ["STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME", "STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME"],
      item_display_weight: ["MATERIAL_TYPE/ITEM_DISPLAY_WEIGHT", "ITEM_DISPLAY_WEIGHT"],
      model_number: ["MODEL/STYLE_NAME", "MODEL/STYLE_NAME/PART_NUMBER", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "MODEL/COLOR_NAME", "MODEL", "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER", "MODEL/SIZE_NAME"],
      model_name: ["MODEL_NAME/COLOR_NAME", "MODEL_NAME"],
      number_of_items: ["NUMBER_OF_ITEMS/STYLE_NAME", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "NUMBER_OF_ITEMS", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS", "COLOR_NAME/NUMBER_OF_ITEMS", "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER", "SIZE_NAME/NUMBER_OF_ITEMS", "ITEM_LENGTH_STRING/ITEM_WIDTH_STRING/NUMBER_OF_ITEMS"],
      part_number: ["MODEL/STYLE_NAME/PART_NUMBER", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER"]
  }
    , ye = {
      "item_name.0.value": {
          title: "Item Name",
          description: "Provide a title for the item that may be customer facing",
          tTitle: "商品名称",
          tDescription: "提供可能面向顾客的产品标题",
          editable: !0,
          examples: ["Adidas Blue Sneakers"]
      },
      "item_name.0.language_tag": {
          title: "item_name",
          description: "",
          tTitle: "item_name",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "item_name.0.marketplace_id": {
          title: "item_name",
          description: "",
          tTitle: "item_name",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      item_name: {
          title: "Title",
          description: "Provide a title for the item that may be customer facing",
          tTitle: "标题",
          tDescription: "提供可能面向顾客的产品标题",
          editable: !1,
          examples: ["Adidas Blue Sneakers"]
      },
      "brand.0.value": {
          title: "Brand Name",
          description: "Provide the brand name of the product",
          tTitle: "品牌名",
          tDescription: "提供产品品牌名",
          editable: !1,
          examples: ["Sony"]
      },
      "brand.0.language_tag": {
          title: "brand",
          description: "",
          tTitle: "brand",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "brand.0.marketplace_id": {
          title: "brand",
          description: "",
          tTitle: "brand",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      brand: {
          title: "Brand Name",
          description: "Max. 50 characters",
          tTitle: "品牌",
          tDescription: "包含汉字、字母或数字的字符串，长度在 1 到 50 个字符之间（含 1 和 50）。",
          editable: !1,
          examples: ["Ralph Lauren; North Face; Patagonia"]
      },
      "externally_assigned_product_identifier.0.type": {
          title: "External Product ID Type",
          description: "Select the type of external ID (barcode) that is being used to identify this product",
          tTitle: "外部产品 ID 类型",
          tDescription: "选择用于识别此产品的外部 ID（条形码）类型",
          editable: !1,
          examples: ["UPC"]
      },
      "externally_assigned_product_identifier.0.value": {
          title: "External Product ID",
          description: "Provide the corresponding external product id value based on the type that was selected",
          tTitle: "外部产品 ID",
          tDescription: "根据所选类型提供相应的外部产品 ID 值",
          editable: !1,
          examples: ["714532191586"]
      },
      "externally_assigned_product_identifier.0.marketplace_id": {
          title: "externally_assigned_product_identifier",
          description: "",
          tTitle: "externally_assigned_product_identifier",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      externally_assigned_product_identifier: {
          title: "External Product ID",
          description: "Provide the external ID (barcode) type and corresponding value that is being used to identify the product",
          tTitle: "外部产品 ID",
          tDescription: "请提供外部 ID（条形码）类型以及用于识别产品相应的值",
          editable: !1,
          examples: ["714532191586"]
      },
      "merchant_suggested_asin.0.value": {
          title: "Merchant Suggested ASIN",
          description: "Provide an ASIN for your product if one exists. If a value is not provided, the system will attempt a match based on the External Product ID.",
          tTitle: "商家建议的 ASIN",
          tDescription: "为您的商品提供 ASIN（如果存在）。如果未提供数值，系统将尝试根据外部商品 ID 进行匹配。",
          editable: !1,
          examples: ["B007KQBXN0"]
      },
      "merchant_suggested_asin.0.marketplace_id": {
          title: "merchant_suggested_asin",
          description: "",
          tTitle: "merchant_suggested_asin",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      merchant_suggested_asin: {
          title: "Merchant Suggested ASIN",
          description: "Provide an ASIN for your product if one exists. If a value is not provided, the system will attempt a match based on the External Product ID.",
          tTitle: "商家建议的 ASIN",
          tDescription: "为您的商品提供 ASIN（如果存在）。如果未提供数值，系统将尝试根据外部商品 ID 进行匹配。",
          editable: !1,
          examples: ["B007KQBXN0"]
      },
      "supplier_declared_has_product_identifier_exemption.0.value": {
          title: "Is exempt from supplier declared external product identifier",
          description: "Please specify if the product is exempt from supplier declared external product identifiers.",
          tTitle: "從供應商聲明的外部標識符豁免。",
          tDescription: "請指定產品是否免除供應商聲明的外部產品標識碼。",
          editable: !0,
          examples: ["Yes, No"]
      },
      "supplier_declared_has_product_identifier_exemption.0.marketplace_id": {
          title: "supplier_declared_has_product_identifier_exemption",
          description: "",
          tTitle: "supplier_declared_has_product_identifier_exemption",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      supplier_declared_has_product_identifier_exemption: {
          title: "Is exempt from a supplier declared external identifier",
          description: "Please specify if the product is exempt from supplier declared external product identifiers.",
          tTitle: "從供應商聲明的外部標識符豁免。",
          tDescription: "請指定產品是否免除供應商聲明的外部產品標識碼。",
          editable: !1,
          examples: ["Y, N"]
      },
      "item_type_keyword.0.value": {
          title: "Item Type Keyword",
          description: "Item type keywords are used to place new ASINs in the appropriate place(s) within the graph. Select the most specific accurate term for optimal placement.",
          tTitle: "产品类型关键字",
          tDescription: "商品类型关键字用于将新 ASIN 放置在图表中的适当位置。选择最具体、最准确的术语以获得最佳放置位置。",
          editable: !1,
          examples: ["Automotive repair tools"]
      },
      "item_type_keyword.0.marketplace_id": {
          title: "item_type_keyword",
          description: "",
          tTitle: "item_type_keyword",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      item_type_keyword: {
          title: "Item Type Keyword",
          description: "Item type keywords are used to place new ASINs in the appropriate place(s) within the graph. Select the most specific accurate term for optimal placement.",
          tTitle: "产品类型关键字",
          tDescription: "商品类型关键字用于将新 ASIN 放置在图表中的适当位置。选择最具体、最准确的术语以获得最佳放置位置。",
          editable: !1,
          examples: ["Automotive repair tools"]
      },
      "package_level.0.value": {
          title: "Package Level",
          description: "Provide the package level of the item. Choose “Unit” when package hierarchy is not provided or applicable. Provide one “Unit” item for every package hierarchy.",
          tTitle: "包装级别",
          tDescription: "提供商品的包装等级。如果未提供包装等级或不适用，请选择“单位”。为每个包装等级提供一个“单位”商品。",
          editable: !0,
          examples: ["Unit, Case"]
      },
      "package_level.0.marketplace_id": {
          title: "package_level",
          description: "",
          tTitle: "package_level",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      package_level: {
          title: "Package Level",
          description: "Provide the package level of the item. Choose “Unit” when package hierarchy is not provided or applicable. Provide one “Unit” item for every package hierarchy.",
          tTitle: "包装级别",
          tDescription: "提供商品的包装等级。如果未提供包装等级或不适用，请选择“单位”。为每个包装等级提供一个“单位”商品。",
          editable: !1,
          examples: ["Unit, Case"]
      },
      "package_contains_sku.0.marketplace_id": {
          title: "package_contains_sku",
          description: "",
          tTitle: "package_contains_sku",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "package_contains_sku.0.quantity": {
          title: "Package Contains SKU Quantity",
          description: "Provide the quantity of each unit, case, or pallet identified in Package Level.",
          tTitle: "包裹包含 SKU 数量",
          tDescription: "提供包裹级别中标识的每件商品、箱子或托盘的数量。",
          editable: !0,
          examples: ["1"]
      },
      "package_contains_sku.0.sku": {
          title: "Package Contains SKU Identifier",
          description: "Provide the SKU identifier of each unit, case or pallet identified in Package Level.",
          tTitle: "包裹包含 SKU 编码",
          tDescription: "提供包裹级别中标识的每件商品、箱子或托盘的 SKU 编码。",
          editable: !0,
          examples: ["ABC123"]
      },
      package_contains_sku: {
          title: "Package Contains SKU",
          description: "Provide the SKU and quantity of the child items contained in the next package level.",
          tTitle: "包裹包含 SKU",
          tDescription: "提供下一级包裹中包含的子商品的 SKU 和数量。",
          editable: !1,
          examples: ["SKU: ABC123, Quanitity: 1"]
      },
      "age_gender_category.0.value": {
          title: "Age Gender Category",
          description: "Specify the department where the product should be found",
          tTitle: "年龄性别分类",
          tDescription: "说明陈列该产品的部门",
          editable: !0,
          examples: ["Men, Women, Boys Girls"]
      },
      "age_gender_category.0.language_tag": {
          title: "age_gender_category",
          description: "",
          tTitle: "age_gender_category",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "age_gender_category.0.marketplace_id": {
          title: "age_gender_category",
          description: "",
          tTitle: "age_gender_category",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      age_gender_category: {
          title: "Age Gender Category",
          description: "Specify the department where the product should be found",
          tTitle: "年龄性别分类",
          tDescription: "说明陈列该产品的部门",
          editable: !1,
          examples: ["Men, Women, Boys Girls"]
      },
      "model_number.0.value": {
          title: "Model Number",
          description: "Provide the manufacturer 's model number for the item",
          tTitle: "型号",
          tDescription: "提供制造商定义的产品型号",
          editable: !0,
          examples: ["RXZER23"]
      },
      "model_number.0.marketplace_id": {
          title: "model_number",
          description: "",
          tTitle: "model_number",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      model_number: {
          title: "Model Number",
          description: "Product code assigned by the manufacturer; can be numbers, letters, or both",
          tTitle: "净重计量单位",
          tDescription: `请从以下值中选择其一进行填写：
克；
千克`,
          editable: !1,
          examples: ["C-50"]
      },
      "model_name.0.value": {
          title: "Model Name",
          description: "Specify the model name of the product as defined by the manufacturer or brand excluding item type, color, brand or size",
          tTitle: "型号名称",
          tDescription: "指定由制造商或品牌定义的产品型号名称，不包括产品类型、颜色、品牌或尺寸",
          editable: !0,
          examples: ["MacBook Pro"]
      },
      "model_name.0.language_tag": {
          title: "model_name",
          description: "",
          tTitle: "model_name",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "model_name.0.marketplace_id": {
          title: "model_name",
          description: "",
          tTitle: "model_name",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      model_name: {
          title: "Model Name",
          description: "Specify the model name of the product as defined by the manufacturer or brand excluding item type, color, brand or size",
          tTitle: "型号",
          tDescription: "指定由制造商或品牌定义的产品型号名称，不包括产品类型、颜色、品牌或尺寸",
          editable: !1,
          examples: ["Camedia"]
      },
      "manufacturer.0.value": {
          title: "Manufacturer",
          description: "Provide the company that manufactures the product.",
          tTitle: "制造商",
          tDescription: "指定产品的制造商",
          editable: !1,
          examples: ["Nike, Procter & Gamble"]
      },
      "manufacturer.0.language_tag": {
          title: "manufacturer",
          description: "",
          tTitle: "manufacturer",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "manufacturer.0.marketplace_id": {
          title: "manufacturer",
          description: "",
          tTitle: "manufacturer",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      manufacturer: {
          title: "Manufacturer",
          description: "Specify the manufacturer for your product.",
          tTitle: "制造商",
          tDescription: "包含汉字、字母或数字的字符串，长度在 1 到 50 个字符之间（含 1 和 50）。",
          editable: !1,
          examples: ["Sony, Kitchen Aid, Microsoft"]
      },
      "skip_offer.0.value": {
          title: "Skip Offer",
          description: 'Please indicate whether the offer should be skipped and a buyable offer should not be created. A value of "Yes", means no offer will be created.',
          tTitle: "跳过报价",
          tDescription: "指明是否应跳过该报价，是否不应创建可购买的报价。值为“是”表示不会创建任何报价。",
          editable: !0,
          examples: ["Yes"]
      },
      "skip_offer.0.marketplace_id": {
          title: "skip_offer",
          description: "",
          tTitle: "skip_offer",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      skip_offer: {
          title: "Skip Offer",
          description: 'Please indicate whether the offer should be skipped and a buyable offer should not be created. A value of "Yes", means no offer will be created.',
          tTitle: "跳过报价",
          tDescription: "指明是否应跳过该报价，是否不应创建可购买的报价。值为“是”表示不会创建任何报价。",
          editable: !1,
          examples: ["Yes"]
      },
      "fulfillment_availability.0.fulfillment_channel_code": {
          title: "Fulfillment Channel Code",
          description: "For those merchants using Amazon fulfillment services, this designates which fulfillment network will be used. Specifying a value other than DEFAULT will cancel the Merchant-fulfilled offering.",
          tTitle: "物流渠道代码",
          tDescription: "对于使用亚马逊物流服务的商家，指定将使用哪个物流网络。指定除 DEFAULT 以外的值将取消商家交付的产品。对于商家交付的产品，应将此字段留空。",
          editable: !0,
          examples: ["AMAZON_NA"]
      },
      "fulfillment_availability.0.quantity": {
          title: "Quantity",
          description: "Enter the quantity of the item you are making available for sale. This is your current inventory commitment (as a whole number)",
          tTitle: "数量",
          tDescription: "输入您可出售的商品数量。这是您当前的库存承诺（取整数）",
          editable: !0,
          examples: ["152"]
      },
      "fulfillment_availability.0.lead_time_to_ship_max_days": {
          title: "Handling Time",
          description: "Provide the time, in days, between when you receive an order for an item and when you can ship the item",
          tTitle: "处理时间",
          tDescription: "以天为单位，提供收到商品订单到发货的时间",
          editable: !0,
          examples: ["5"]
      },
      "fulfillment_availability.0.restock_date": {
          title: "Restock Date",
          description: "Date that product will be restocked",
          tTitle: "重新库存日期",
          tDescription: "产品补货日期",
          editable: !0,
          examples: ["2020-05-05"]
      },
      "fulfillment_availability.0.is_inventory_available": {
          title: "Inventory Always Available",
          description: "Always available inventory is an alternative to quantity that allows inventory to never deplete. Enabling or disabling will toggle this feature on or off. Note that a quantity cannot be specified when provided.",
          tTitle: "始终有货",
          tDescription: "始终有货是除数量之外的另一种库存表示方式，表示库存永远不会耗尽。启用或禁用将打开或关闭此功能。请注意，提供时不能指定数量。",
          editable: !0,
          examples: ["Enabled"]
      },
      fulfillment_availability: {
          title: "Fulfillment Availability",
          description: "For those merchants using Amazon fulfillment services, please provide associated logistical information.",
          tTitle: "配送可用性",
          tDescription: "对于使用 Amazon 配送服务的商家，请提供相关的物流信息。",
          editable: !1,
          examples: []
      },
      "map_policy.0.value": {
          title: "Minimum Advertised Price Display",
          description: "Select one.",
          tTitle: "最低广告价格显示",
          tDescription: "选择一个。",
          editable: !0,
          examples: ["Policy 9"]
      },
      "map_policy.0.marketplace_id": {
          title: "map_policy",
          description: "",
          tTitle: "map_policy",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      map_policy: {
          title: "Minimum Advertised Price Display",
          description: "Select one.",
          tTitle: "最低广告价格显示",
          tDescription: "选择一个。",
          editable: !1,
          examples: ["Policy 9"]
      },
      "purchasable_offer.0.map_price.0.schedule.0.value_with_tax": {
          title: "Minimum Advertised Price",
          description: "Provide the minimum advertised price",
          tTitle: "最低广告价格",
          tDescription: "提供最低广告价格",
          editable: !0,
          examples: ["259.99"]
      },
      "purchasable_offer.0.map_price.0.schedule": {
          title: "Purchasable Offer Map Price Schedule",
          description: "The attribute indicates the Purchasable Offer Map Price Schedule of the product",
          tTitle: "可购买报价最低广告定价计划",
          tDescription: "该属性表示产品的可购买报价最低广告定价计划",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.map_price": {
          title: "Purchasable Offer Map Price",
          description: "The attribute indicates the Purchasable Offer Map Price of the product",
          tTitle: "可购买报价最低广告价格",
          tDescription: "该属性表示产品的可购买报价最低广告价格",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.currency": {
          title: "Currency",
          description: "Select the corresponding currency",
          tTitle: "貨幣",
          tDescription: "选择相应的货币",
          editable: !1,
          examples: ["USD"],
          default_: "USD"
      },
      "purchasable_offer.0.marketplace_id": {
          title: "purchasable_offer",
          description: "",
          tTitle: "purchasable_offer",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "purchasable_offer.0.our_price.0.schedule.0.value_with_tax": {
          title: "Your Price",
          description: "Provide base price of the item at which it is being offered to the intended buyer segment",
          tTitle: "您的价格",
          tDescription: "指明向目标买家群体提供的商品基本价格",
          editable: !0,
          examples: ["9.00"]
      },
      "purchasable_offer.0.our_price.0.schedule": {
          title: "Purchasable Offer Our Price Schedule",
          description: "The attribute indicates the Purchasable Offer Our Price Schedule of the product",
          tTitle: "可购买报价我方价格计划",
          tDescription: "该属性指示产品的可购买报价我方价格计划",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.our_price": {
          title: "Purchasable Offer Our Price",
          description: "The attribute indicates the Purchasable Offer Our Price of the product",
          tTitle: "可购买报价我方价格",
          tDescription: "该属性表示对该产品的我方可购买报价",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id": {
          title: "Pricing Rule",
          description: "The pricing rule that will automate price on this offer",
          tTitle: "定价规则",
          tDescription: "对优惠自动定价的定价规则",
          editable: !0,
          examples: ["Competitive Price Rule by Amazon"]
      },
      "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax": {
          title: "Minimum Seller Alllowed Price",
          description: "Provide the minimum seller allowed price",
          tTitle: "卖方允许的最低价格",
          tDescription: "提供卖方允许的最低价格",
          editable: !0,
          examples: ["259.99"]
      },
      "purchasable_offer.0.minimum_seller_allowed_price.0.schedule": {
          title: "Purchasable Offer Minimum Seller Allowed Price Schedule",
          description: "The attribute indicates the Purchasable Offer Minimum Seller Allowed Price Schedule of the product",
          tTitle: "可购买报价最低卖方接受的价格计划",
          tDescription: "该属性表示产品的可购买报价、最低卖方接受价格、计划",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.minimum_seller_allowed_price": {
          title: "Purchasable Offer Minimum Seller Allowed Price",
          description: "The attribute indicates the Purchasable Offer Minimum Seller Allowed Price of the product",
          tTitle: "可购买报价最低卖方接受的价格",
          tDescription: "该属性表示产品的可购买报价最低卖方接受的价格",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax": {
          title: "Maximum Seller Allowed Price",
          description: "Provide the maximum seller allowed price",
          tTitle: "卖方允许的最高价格",
          tDescription: "提供卖方允许的最高价格",
          editable: !0,
          examples: ["259.99"]
      },
      "purchasable_offer.0.maximum_seller_allowed_price.0.schedule": {
          title: "Purchasable Offer Maximum Seller Allowed Price Schedule",
          description: "The attribute indicates the Purchasable Offer Maximum Seller Allowed Price Schedule of the product",
          tTitle: "可购买报价最高卖方接受的价格计划",
          tDescription: "该属性表示产品的可购买报价、最高卖方接受的价格、计划",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.maximum_seller_allowed_price": {
          title: "Purchasable Offer Maximum Seller Allowed Price",
          description: "The attribute indicates the Purchasable Offer Maximum Seller Allowed Price of the product",
          tTitle: "可购买报价最高卖方接受的价格",
          tDescription: "该属性表示产品的可购买报价最高卖方接受的价格",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax": {
          title: "Sale Price",
          description: "The price at which you offer the product for sale.",
          tTitle: "销售价格",
          tDescription: "您提供的待售产品的价格。",
          editable: !0,
          examples: ["219.99"]
      },
      "purchasable_offer.0.discounted_price.0.schedule.0.start_at": {
          title: "Sale Start Date",
          description: "The date that the sale price will begin to override the product's standard price; the sale price will be displayed after 0:00AM of Sale From Date.",
          tTitle: "销售开始日期",
          tDescription: "用销售价格替代产品标准价格的第一天；销售价格将在销售开始日期的凌晨 0:00 后显示。",
          editable: !0,
          examples: ["2017-06-30"]
      },
      "purchasable_offer.0.discounted_price.0.schedule.0.end_at": {
          title: "Sale End Date",
          description: "The last date that the sale price will override the item's standard price; the product's standard price will be displayed after 0:00AM of Sale End Date.",
          tTitle: "销售截止日期",
          tDescription: "用销售价格替代产品标准价格的最后一天；产品的标准价格将在销售截止日期的凌晨 0:00 后显示。",
          editable: !0,
          examples: ["2017-07-01"]
      },
      "purchasable_offer.0.discounted_price.0.schedule": {
          title: "Purchasable Offer Discounted Price Schedule",
          description: "The attribute indicates the Purchasable Offer Discounted Price Schedule of the product",
          tTitle: "可购买报价折扣价计划",
          tDescription: "该属性表示产品的可购买报价折扣价格计划",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.discounted_price": {
          title: "Purchasable Offer Discounted Price",
          description: "The attribute indicates the Purchasable Offer Discounted Price of the product",
          tTitle: "可购买报价折扣价格",
          tDescription: "该属性表示产品的可购买报价、折扣价",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.start_at": {
          title: "Purchasable Offer Start At",
          description: "The attribute indicates the Purchasable Offer Start At of the product",
          tTitle: "可购买报价开始于",
          tDescription: "该属性表示产品的可购买报价、起始时间",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.start_at.value": {
          title: "Offering Release Date",
          description: "Your price start date",
          tTitle: "提供发布日期",
          tDescription: "您的价格的开始日期",
          editable: !0,
          examples: ["2017-06-30"]
      },
      "purchasable_offer.0.end_at": {
          title: "Purchasable Offer End At",
          description: "The attribute indicates the Purchasable Offer End At of the product",
          tTitle: "可购买报价结束于",
          tDescription: "该属性表示产品的可购买报价结束于",
          editable: !1,
          examples: []
      },
      "purchasable_offer.0.end_at.value": {
          title: "Stop Selling Date",
          description: "Your price end date",
          tTitle: "停售日期",
          tDescription: "您的价格的截止日期",
          editable: !0,
          examples: ["2017-07-01"]
      },
      "purchasable_offer.0.audience": {
          title: "Audience",
          description: "Provide the intended buyer segment or program that this purchasable offer is applicable to.",
          tTitle: "purchasable_offer",
          tDescription: "",
          editable: !1,
          examples: ["B2B"]
      },
      "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type": {
          title: "Quantity Price Type",
          description: "Provide whether the quantity price type is fixed, a price set in local currency for each quantity threshold, or a percentage of business price",
          tTitle: "批发价格类型",
          tDescription: "说明批量价格类型是否为“固定”、每个批量阈值的当地货币价格或商品企业价格的百分比。",
          editable: !0,
          examples: ["Fixed, Percent"]
      },
      "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound": {
          title: "Quantity Threshold (Lower Bound)",
          description: "Provide the minimum purchase quantity necessary to receive the discount. It will apply to all units if the quantity threshold is met.",
          tTitle: "批量阈值（下限）",
          tDescription: "说明获得折扣所需的最低购买量。如果达到批量阈值，将适用于所有单位。",
          editable: !0,
          examples: ["5, 10"]
      },
      "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value": {
          title: "Quantity Price (Fixed Price/Percentage Discount)",
          description: "Provide the quantity price for each quantity threshold or the discount percentage offered on the business price for each quantity threshold.",
          tTitle: "批发价格（固定价格/百分比折扣）",
          tDescription: "说明每个批量阈值的批发价格，或根据每个批量阈值的企业价格提供的折扣百分比。",
          editable: !0,
          examples: ["10, 20"]
      },
      "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels": {
          title: "Levels",
          description: "Quantity Discount Plan Schedule Levels",
          tTitle: "等级",
          tDescription: "批量折扣计划日程等级",
          editable: !1,
          examples: ["Quantity Discount Plan Schedule Levels"]
      },
      "purchasable_offer.0.quantity_discount_plan.0.schedule": {
          title: "Schedule",
          description: "Provide the details, such as dates, pricing type that define your scheduled quantity discount plan.",
          tTitle: "计划",
          tDescription: "说明用于定义安排的批量折扣计划的详细信息，例如日期、定价类型。",
          editable: !1,
          examples: ["Quantity price start date: 06/30/2024; Quantity price end date: 07/01/2024"]
      },
      "purchasable_offer.0.quantity_discount_plan": {
          title: "Purchasable Business Offer Quantity Discount Plan",
          description: "Provide and define the quantity discount plan for your business price.",
          tTitle: "可购买的企业优惠批量折扣计划",
          tDescription: "为商品企业价格提供并定义批量折扣计划。",
          editable: !1,
          examples: ["Schedule Quantity Price Type: Fixed; Schedule Levels Quantity Lower Bound: 5; Schedule Levels Quantity Price: 10"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy": {
          title: "Pricing Strategy",
          description: "Provide the pricing strategy for the product. The pricing strategy defines how the variable weight product will be picked, priced and sold.",
          tTitle: "定价策略",
          tDescription: "说明商品的定价策略。定价策略定义了可变重量商品的挑选、定价和出售方式。",
          editable: !0,
          examples: ["Produce by UOM"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement": {
          title: "Average Size Measurement",
          description: "Provide the average weight of the variable weight product.",
          tTitle: "purchasable_offer",
          editable: !1,
          examples: ["Unit:Pounds, Value: 1.5"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type": {
          title: "Average Size Unit Type",
          description: "Provide the unit of measure type for average size of the product.",
          tTitle: "purchasable_offer",
          tDescription: "",
          editable: !0,
          examples: ["Weight"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit": {
          title: "Average Size Measurement Unit",
          description: "Provide the corresponding unit used to designate the variable weight product's average weight.",
          tTitle: "purchasable_offer",
          tDescription: "",
          editable: !0,
          examples: ["Pounds"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value": {
          title: "Average Size Measurement",
          description: "Provide the average weight of the variable weight product.",
          tTitle: "purchasable_offer",
          tDescription: "",
          editable: !0,
          examples: ["1.5"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement": {
          title: "Inventory Measurement",
          description: "Provide the inventory measurement, this provides details on the measurement type, value and unit for the inventory of the product.",
          tTitle: "purchasable_offer",
          editable: !1,
          examples: ["Type:Weight, Unit: Pounds"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type": {
          title: "Inventory Measurement Type",
          description: "Provide the inventory measurement type of the variable weight product. Measurement type indicates how the inventory of the product will be measured.",
          tTitle: "库存计量类型",
          tDescription: "",
          editable: !0,
          examples: ["Weight"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit": {
          title: "Inventory Measurement Unit",
          description: "Provide the corresponding unit used to designate the variable weight product's inventory measurement.",
          tTitle: "purchasable_offer",
          tDescription: "",
          editable: !0,
          examples: ["Pounds"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement": {
          title: "Merchant Sale Measurement",
          description: "Provide the merchant sale measurement, this provides details on the measurement type, value and unit for how the product will be sold.",
          tTitle: "卖家销售量计量",
          tDescription: "说明可变重量商品的卖家销售量计量值。这定义出售商品时所使用的重量单位。",
          editable: !1,
          examples: ["Type:Weight, Unit:Pounds, Value:3"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type": {
          title: "Merchant Sale Measurement Type",
          description: "Provide the merchant sale measurement type of the variable weight product. Measurement type indicates how the product will be sold.",
          tTitle: "purchasable_offer",
          tDescription: "",
          editable: !0,
          examples: ["Weight"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit": {
          title: "Merchant Sale Measurement Unit",
          description: "Provide the corresponding unit in which the variable weight product will be sold.",
          tTitle: "卖家销售计量单位",
          tDescription: "说明出售可变重量商品时使用的相应单位。",
          editable: !0,
          examples: ["Pounds"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value": {
          title: "Merchant Sale Measurement",
          description: "Provide the merchant sale measurement value for the variable weight product. This defines the weight in which the product will be sold.",
          tTitle: "卖家销售量计量",
          tDescription: "说明可变重量商品的卖家销售量计量值。这定义出售商品时所使用的重量单位。",
          editable: !0,
          examples: ["5"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification": {
          title: "Order Quantity Specification",
          description: "Provide the order quantity specification, this provides details on the order increment, order minimum and order maximum for the product.",
          tTitle: "订单数量规格",
          tDescription: "说明订单数量规格，这提供了有关商品的订单增量、最小订购量和最大订购量的详细信息。",
          editable: !1,
          examples: ["Order Increment:1, Order Minimum:0.05, Order Maximum:1000"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum": {
          title: "Order Minimum",
          description: "Provide the minimum quantity that a customer can order for the variable weight product.",
          tTitle: "最小订购量",
          tDescription: "说明买家可订购的可变重量商品的最小数量。",
          editable: !0,
          examples: ["0.05"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum": {
          title: "Order Maximum",
          description: "Provide the maximum quantity that a customer can order for the variable weight product.",
          tTitle: "最大订购量",
          tDescription: "说明买家可订购的可变重量商品的最大数量。",
          editable: !0,
          examples: ["1000"]
      },
      "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment": {
          title: "Order Increment",
          description: "Provide the order increment for the product. Order increment defines the increment by which a variable weight will be sold.",
          tTitle: "订单增量",
          tDescription: "说明商品的订单增量。订单增量定义出售可变重量商品时所使用的增量单位。",
          editable: !0,
          examples: ["1"]
      },
      "purchasable_offer.0.variable_weight_based_price": {
          title: "Variable Weight Based Price",
          description: "Provide the variable weight details of the product in order to power variable weight based pricing.",
          tTitle: "基于可变重量的价格",
          tDescription: "说明商品可变重量的详细信息，以支持基于可变重量进行定价。",
          editable: !1,
          examples: ["Pricing Strategy:Produce by UOM, Order Increment:1, Order Minimum:0.05, Order Maximum:1000, Average Size Measurement Type:Weight, Average Size Unit:Pounds, Average Size Value:1.5, Inventory Measurement Type: Weight, Inventory Measurement Unit: Pounds, Merchant Sale Measurement Type: Weight, Merchant Sale Measurement Unit: Pounds, Merchant Sale Measurement Value: 3"]
      },
      purchasable_offer: {
          title: "Purchasable Offer",
          description: "The attribute indicates the Purchasable Offer of the product",
          tTitle: "可购买的报价",
          tDescription: "提供可购买的报价信息",
          editable: !1,
          examples: ["EUR"]
      },
      "condition_type.0.value": {
          title: "Item Condition",
          description: "Provide the actual condition type of the product",
          tTitle: "商品状况",
          tDescription: "提供产品的实际条件类型",
          editable: !1,
          examples: ["New"]
      },
      "condition_type.0.marketplace_id": {
          title: "condition_type",
          description: "",
          tTitle: "condition_type",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      condition_type: {
          title: "Item Condition",
          description: "Provide the actual condition type of the product",
          tTitle: "商品状况",
          tDescription: "提供产品的实际条件类型",
          editable: !1,
          examples: ["New"]
      },
      "condition_note.0.value": {
          title: "Offer Condition Note",
          description: "Provide descriptive text explaining the actual condition of the item",
          tTitle: "出价条件说明",
          tDescription: "提供说明项目实际情况的描述性文字",
          editable: !0,
          examples: ["Small dent in left side panel."]
      },
      "condition_note.0.language_tag": {
          title: "condition_note",
          description: "",
          tTitle: "condition_note",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "condition_note.0.marketplace_id": {
          title: "condition_note",
          description: "",
          tTitle: "condition_note",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      condition_note: {
          title: "Offer Condition Note",
          description: "Provide descriptive text explaining the actual condition of the item",
          tTitle: "新旧程度说明",
          tDescription: "用于具体说明该商品状态的描述性文本。",
          editable: !1,
          examples: ["Small dent in left side panel."]
      },
      "list_price.0.value": {
          title: "List Price",
          description: "Provide the list price for the product not including tax. List Price is the suggested retail price of a product as provided by a manufacturer, supplier, or seller. This is not the offering or cost price. If you are unable to provide a value, enter 0.",
          tTitle: "不含税价目表",
          tDescription: "提供商品的定价（不含税）。定价是制造商、供应商或卖家提供的商品建议零售价。这不是报价或成本价。",
          editable: !0,
          examples: ["64"]
      },
      "list_price.0.currency": {
          title: "List Price Currency",
          description: "Select the corresponding currency",
          tTitle: "价目表货币",
          tDescription: "选择相应的货币",
          editable: !1,
          examples: ["USD"]
      },
      "list_price.0.marketplace_id": {
          title: "list_price",
          description: "",
          tTitle: "list_price",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      list_price: {
          title: "List Price",
          description: "Provide the list price for the product. List Price is the suggested retail price of a product as provided by a manufacturer, supplier, or seller. This is not the offering or cost price.",
          tTitle: "不含税价目表",
          tDescription: "给出不含税的产品标价。  标价通常是指制造商建议零售价（MSRP）、推荐零售价（RRP）或建议零售价（SRP）。这不是发行价或成本价。",
          editable: !1,
          examples: ["64 USD, 69 GBP, 98 EUR"]
      },
      "product_tax_code.0.value": {
          title: "Product Tax Code",
          description: "Enter the product tax code supplied to you by Amazon.com",
          tTitle: "产品税码",
          tDescription: "输入 Amazon.com 向您提供的产品税码",
          editable: !0,
          examples: ["A_GEN_NOTAX"]
      },
      "product_tax_code.0.marketplace_id": {
          title: "product_tax_code",
          description: "",
          tTitle: "product_tax_code",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      product_tax_code: {
          title: "Product Tax Code",
          description: "Enter the product tax code supplied to you by Amazon.com",
          tTitle: "产品税码",
          tDescription: "输入 Amazon.com 向您提供的产品税码",
          editable: !1,
          examples: ["A_GEN_NOTAX"]
      },
      "merchant_release_date.0.marketplace_id": {
          title: "merchant_release_date",
          description: "",
          tTitle: "merchant_release_date",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "merchant_release_date.0.value": {
          title: "Merchant Release Date",
          description: "Provide the merchant release date using YYYY-MM-DD format",
          tTitle: "发售日期",
          tDescription: "卖家可以在该输入项内为商品提前设定可出售日期（在此日期之前该商品可见，但无法被购买）。",
          editable: !0,
          examples: ["2017-07-20"]
      },
      merchant_release_date: {
          title: "Offering Release Date",
          description: "Provide the merchant release date using YYYY-MM-DD format",
          tTitle: "发售日期",
          tDescription: "卖家可以在该输入项内为商品提前设定可出售日期（在此日期之前该商品可见，但无法被购买）。",
          editable: !1,
          examples: []
      },
      "merchant_shipping_group.0.value": {
          title: "Merchant Shipping Group",
          description: "The ship configuration group for an offer. The ship configuration group is created and managed by the seller through the ship setting UI.",
          tTitle: "商船集团",
          tDescription: "出价的船舶配置组。卖方通过船舶设置 UI 创建和管理船舶配置组。",
          editable: !0,
          examples: ["Heavy Bulky Products, NCR Large Appliance Delivery"]
      },
      "merchant_shipping_group.0.marketplace_id": {
          title: "merchant_shipping_group",
          description: "",
          tTitle: "merchant_shipping_group",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      merchant_shipping_group: {
          title: "Merchant Shipping Group",
          description: "The ship configuration group for an offer. The ship configuration group is created and managed by the seller through the ship setting UI.",
          tTitle: "配送模板",
          tDescription: "该商品使用的配送模板。卖家可以在“配送设置”页面创建和管理配送模板。卖家可以自定义模板名称，如“大件商品配送模板”、“促销配送模板”",
          editable: !1,
          examples: []
      },
      "max_order_quantity.0.value": {
          title: "Maximum Order Quantity",
          description: "Max order quantity.",
          tTitle: "最大订单数量",
          tDescription: "整数。",
          editable: !0,
          examples: ["3"]
      },
      "max_order_quantity.0.marketplace_id": {
          title: "max_order_quantity",
          description: "",
          tTitle: "max_order_quantity",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      max_order_quantity: {
          title: "Max Order Quantity",
          description: "Max order quantity.",
          tTitle: "单笔订单最大数量",
          tDescription: "正整数。",
          editable: !1,
          examples: []
      },
      "gift_options.0.can_be_messaged": {
          title: "Offering Can Be Gift Messaged",
          description: "If you can print a gift message with the item indicate that here. If left blank, defaults to 'No'",
          tTitle: "可以提供礼品信息",
          tDescription: "如果您可以打印礼品信息与项目，请在此注明。  如果留白，默认为“false”",
          editable: !0,
          examples: ["Yes"]
      },
      "gift_options.0.can_be_wrapped": {
          title: "Is Gift Wrap Available",
          description: "If you can gift wrap an item indicate that here.  If left blank, defaults to 'No'",
          tTitle: "表示礼品包装可用",
          tDescription: "如果你为一个项目做礼品包装，请在此注明。  如果留白，默认为“false”",
          editable: !0,
          examples: ["Yes"]
      },
      "gift_options.0.marketplace_id": {
          title: "gift_options",
          description: "",
          tTitle: "gift_options",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      gift_options: {
          title: "Gift Options",
          description: "Provide gift card options",
          tTitle: "礼品选项",
          tDescription: "提供礼品卡选项",
          editable: !1,
          examples: ["Yes"]
      },
      "main_offer_image_locator.0.marketplace_id": {
          title: "main_offer_image_locator",
          description: "",
          tTitle: "main_offer_image_locator",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "main_offer_image_locator.0.media_location": {
          title: "Main Image Location",
          description: "The URL where the main offer-specific image of the product is located",
          tTitle: "主图片的地址",
          tDescription: "产品的交付主图所在的链接地址",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.offer.jpg"]
      },
      main_offer_image_locator: {
          title: "Main Offer Image Locator",
          description: "Provide the location of the image",
          tTitle: "主商品图片定位器",
          tDescription: "提供图片的位置",
          editable: !1,
          examples: ["Feed"]
      },
      "other_offer_image_locator_1.0.marketplace_id": {
          title: "other_offer_image_locator_1",
          description: "",
          tTitle: "other_offer_image_locator_1",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_offer_image_locator_1.0.media_location": {
          title: "Other Image Location",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_offer_image_locator_1: {
          title: "Other Offer Image Locator",
          description: "Provide the location of the image",
          tTitle: "其他商品图片定位器",
          tDescription: "提供图片的位置",
          editable: !1,
          examples: ["Feed"]
      },
      "other_offer_image_locator_2.0.marketplace_id": {
          title: "other_offer_image_locator_2",
          description: "",
          tTitle: "other_offer_image_locator_2",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_offer_image_locator_2.0.media_location": {
          title: "Other Image Location",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_offer_image_locator_2: {
          title: "Other Offer Image Locator",
          description: "Provide the location of the image",
          tTitle: "其他商品图片定位器",
          tDescription: "提供图片的位置",
          editable: !1,
          examples: ["Feed"]
      },
      "other_offer_image_locator_3.0.marketplace_id": {
          title: "other_offer_image_locator_3",
          description: "",
          tTitle: "other_offer_image_locator_3",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_offer_image_locator_3.0.media_location": {
          title: "Other Image Location",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_offer_image_locator_3: {
          title: "Other Offer Image Locator",
          description: "Provide the location of the image",
          tTitle: "其他商品图片定位器",
          tDescription: "提供图片的位置",
          editable: !1,
          examples: ["Feed"]
      },
      "other_offer_image_locator_4.0.marketplace_id": {
          title: "other_offer_image_locator_4",
          description: "",
          tTitle: "other_offer_image_locator_4",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_offer_image_locator_4.0.media_location": {
          title: "Other Image Location",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_offer_image_locator_4: {
          title: "Other Offer Image Locator",
          description: "Provide the location of the image",
          tTitle: "其他商品图片定位器",
          tDescription: "提供图片的位置",
          editable: !1,
          examples: ["Feed"]
      },
      "other_offer_image_locator_5.0.marketplace_id": {
          title: "other_offer_image_locator_5",
          description: "",
          tTitle: "other_offer_image_locator_5",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_offer_image_locator_5.0.media_location": {
          title: "Other Image Location",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_offer_image_locator_5: {
          title: "Other Offer Image Locator",
          description: "Provide the location and source of the image",
          tTitle: "其他商品图片定位器",
          tDescription: "提供图片的位置及来源",
          editable: !1,
          examples: ["Feed"]
      },
      "supplemental_condition_information.0.accessories": {
          title: "Accessories",
          description: "Provide the type of accessory included in the non-new product.",
          tTitle: "配件",
          tDescription: "提供包含在非全新产品中的配件类型。",
          editable: !0,
          examples: ["Generic"]
      },
      "supplemental_condition_information.0.battery_life_percentage": {
          title: "Battery Life Percentage",
          description: "Provide the battery health information of the non-new product if it includes batteries.",
          tTitle: "电池电量百分比",
          tDescription: "如果非新产品包含电池，说明其电池状态信息。",
          editable: !0,
          examples: [">90%"]
      },
      "supplemental_condition_information.0.cosmetic": {
          title: "Cosmetic",
          description: "Provide the overall cosmetic condition of the non-new product.",
          tTitle: "化妆品",
          tDescription: "提供非全新商品的整体外观状况。",
          editable: !0,
          examples: ["No Sign of Use"]
      },
      "supplemental_condition_information.0.features": {
          title: "Features",
          description: "Provide the refurbishment type of the non-new product.",
          tTitle: "功能",
          tDescription: "提供非全新商品的翻新类型。",
          editable: !0,
          examples: ["Green Refurbishment"]
      },
      "supplemental_condition_information.0.functional_condition": {
          title: "Functional Condition",
          description: "Provide the functional condition of the non-new product.",
          tTitle: "功能状况",
          tDescription: "说明非新产品的功能状况。",
          editable: !0,
          examples: ["Fully Functional"]
      },
      "supplemental_condition_information.0.marketplace_id": {
          title: "supplemental_condition_information",
          description: "",
          tTitle: "supplemental_condition_information",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "supplemental_condition_information.0.packaging": {
          title: "Packaging",
          description: "Provide the packaging type of the non-new product",
          tTitle: "包装",
          tDescription: "提供非全新商品的包装类型。",
          editable: !0,
          examples: ["OEM Original"]
      },
      "supplemental_condition_information.0.source_type": {
          title: "Source Type",
          description: "Provide the information on how the non-new product was sourced.",
          tTitle: "来源类型",
          tDescription: "提供非全新商品的来源信息。",
          editable: !0,
          examples: ["Returned Never Used"]
      },
      supplemental_condition_information: {
          title: "Supplemental Condition Information",
          description: "Provide the additional condition information on the non-new product.",
          tTitle: "补充状况信息",
          tDescription: "提供有关非全新商品的额外状况信息。",
          editable: !1,
          examples: ["iPhone 14, Open Box Never Used, OEM, Original, Greater than 90%, With Tags, Pristine, Fully Functional"]
      },
      "handmade_classification.0.value": {
          title: "Handmade Classification",
          description: "Select the value that best describes how the product was produced",
          tTitle: "手工制作分类",
          tDescription: "选择最能描述产品生产方式的值",
          editable: !0,
          examples: ["Hand-Altered"]
      },
      "handmade_classification.0.marketplace_id": {
          title: "handmade_classification",
          description: "",
          tTitle: "handmade_classification",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      handmade_classification: {
          title: "Handmade Classification",
          description: "Select the value that best describes how the product was produced",
          tTitle: "手工制作分类",
          tDescription: "选择最能描述产品生产方式的值",
          editable: !1,
          examples: ["Hand-Altered"]
      },
      "product_description.0.value": {
          title: "Product Description",
          description: "Provide a text description of the product. This information will appear in paragraph form on the detail page of your product. Include unique product features, product line details, and product specifications. Do not use all caps.",
          tTitle: "产品描述",
          tDescription: "提供产品的文本说明。该信息将以段落形式显示在产品的详细信息页面上。包括产品的特点、产品系列详情和产品规格。请不要全部大写。",
          editable: !0,
          examples: ["This summer, boots by Jette made from high quality suede leather are real gems. They visually highlight the craftsmanship and fine leather braid positioned at the top of the shaft"]
      },
      "product_description.0.language_tag": {
          title: "product_description",
          description: "",
          tTitle: "product_description",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "product_description.0.marketplace_id": {
          title: "product_description",
          description: "",
          tTitle: "product_description",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      product_description: {
          title: "Product Description",
          description: "The description you provide should pertain to the product in general, not your particular item. There is a 2,000 character maximum.",
          tTitle: "描述",
          tDescription: "文本字符串；最长 2000 个字符。请注意：不支持输入扩展 ASCII 字符（®、©、™ 等） 或其他特殊字符。",
          editable: !1,
          examples: ["This ham has been smoked for 12 hours..."]
      },
      "bullet_point.0.value": {
          title: "Bullet Point",
          description: "Brief descriptive text, called out via a bullet point, regarding a specific aspect of the product. These display directly under or next to your product photo, it is useful to put interesting information in these fields. Do NOT use all caps or abbreviations. Please do NOT use for fabric content, care instructions or country as these are populated in different fields.",
          tTitle: "要点",
          tDescription: "产品特定方面的简要描述文本以项目符号表示。这些符号显示在产品照片的正下方或旁边，在这些字段中放置具有吸引力的信息会很有帮助。不可使用全大写或缩写。因产品销售地域不同，请不要罗列出面料信息、保养说明或国家。",
          editable: !0,
          examples: ["Breathable Leather Lining"]
      },
      "bullet_point.0.language_tag": {
          title: "bullet_point",
          description: "",
          tTitle: "bullet_point",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "bullet_point.0.marketplace_id": {
          title: "bullet_point",
          description: "",
          tTitle: "bullet_point",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      bullet_point: {
          title: "Key Product Features",
          description: "Max. 100 characters per line. Use these to highlight some of the product's most important qualities. Each line will be displayed as a separate bullet point above the product description.",
          tTitle: "商品特性",
          tDescription: "包含汉字、字母或数字的字符串；每条商品特性的长度不能超过 250 个字符。请不要在每条商品特性的开头添加任何数字或符号，只需填写描述您的商品的文本即可。请注意：不支持输入扩展 ASCII 字符（®、©、™ 等） 或其他特殊字符。",
          editable: !1,
          examples: ["Delicious honey-apricot glaze"]
      },
      "generic_keyword.0.value": {
          title: "Generic Keyword",
          description: "Provide any terms that may be relevant to customer searches. No repetition, no competitor brand names or ASINs.",
          tTitle: "搜索关键字",
          tDescription: "提供可能与客户搜索相关的任何术语没有重复、没有竞争对手的品牌名称或 ASIN。",
          editable: !0,
          examples: ["Water sport shoes; Derek Rose; Electric; Wi-Fi; Banana"]
      },
      "generic_keyword.0.language_tag": {
          title: "generic_keyword",
          description: "",
          tTitle: "generic_keyword",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "generic_keyword.0.marketplace_id": {
          title: "generic_keyword",
          description: "",
          tTitle: "generic_keyword",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      generic_keyword: {
          title: "Search Terms",
          description: "Provide specific search terms to help customers find your product.",
          tTitle: "搜索关键词",
          tDescription: "该项作为补充信息，是对您必须为商品提交的有效值的补充。填写与该商品相关的各种搜索关键词，将会促进您的商品销量的提高。",
          editable: !1,
          examples: ["Dark Chocolate, Apples, Cookies"]
      },
      "style.0.value": {
          title: "Style",
          description: "Provide the style of the product. Style refers to the aesthetic choices of a person or a group of people. It describes the distinctive visual representation of a product",
          tTitle: "风格",
          tDescription: "提供产品的样式。样式是指一个人或一群人的审美选择。它描述产品的独特视觉表现",
          editable: !0,
          examples: ["Art Deco"]
      },
      "style.0.language_tag": {
          title: "style",
          description: "",
          tTitle: "style",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "style.0.marketplace_id": {
          title: "style",
          description: "",
          tTitle: "style",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      style: {
          title: "Style Name",
          description: "The style of the item",
          tTitle: "产品款式",
          tDescription: "提供产品的样式。样式是指一个人或一群人的审美选择。它描述产品的独特视觉表现",
          editable: !1,
          examples: ["Mission; Art Deco; Jack Purcell"]
      },
      "material.0.value": {
          title: "Material",
          description: "Specify the primary materials used for manufacturing the item",
          tTitle: "材料",
          tDescription: "指定用来制造产品的主要材料",
          editable: !0,
          examples: ["Aluminum, Plastic, Steel"]
      },
      "material.0.language_tag": {
          title: "material",
          description: "",
          tTitle: "material",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "material.0.marketplace_id": {
          title: "material",
          description: "",
          tTitle: "material",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      material: {
          title: "Material Type",
          description: "What material is the product made out of?",
          tTitle: "材质",
          tDescription: "指明制造该商品的主要材料。",
          editable: !1,
          examples: ["nylon, wood, steel"]
      },
      "fabric_type.0.value": {
          title: "Fabric Type",
          description: `List all fabrics separated by ','. Indicate with % composition. Always add "Viscose" or "Rayon" instead of "Bamboo", and "Azlon" for Soy`,
          tTitle: "面料类型",
          tDescription: "列出所有以 “,” 划分的面料。用 % 成分表示。总是添加 “粘胶纤维” 或 “人造丝” 而不是 “竹制”，并用 “ 人造蛋白质纤维” 代替大豆",
          editable: !0,
          examples: ["60% Cotton, 40% Polyester"]
      },
      "fabric_type.0.language_tag": {
          title: "fabric_type",
          description: "",
          tTitle: "fabric_type",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "fabric_type.0.marketplace_id": {
          title: "fabric_type",
          description: "",
          tTitle: "fabric_type",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      fabric_type: {
          title: "Fabric Type",
          description: `List all fabrics separated by ','. Indicate with % composition. Always add "Viscose" or "Rayon" instead of "Bamboo", and "Azlon" for Soy`,
          tTitle: "布料",
          tDescription: "列出所有以 “,” 划分的面料。用 % 成分表示。总是添加 “粘胶纤维” 或 “人造丝” 而不是 “竹制”，并用 “ 人造蛋白质纤维” 代替大豆",
          editable: !1,
          examples: ["90% cotton/10% rayon"]
      },
      "number_of_items.0.value": {
          title: "Number of Items",
          description: "Provide the total number of identical items in the selling unit to the customer",
          tTitle: "产品数量",
          tDescription: "向客户提供单位销售中相同产品的总数",
          editable: !0,
          examples: ["5"]
      },
      "number_of_items.0.marketplace_id": {
          title: "number_of_items",
          description: "",
          tTitle: "number_of_items",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      number_of_items: {
          title: "Number of Items",
          description: "Provide the total number of identical items in the selling unit to the customer",
          tTitle: "物品数量",
          tDescription: "一个整数",
          editable: !1,
          examples: []
      },
      "item_package_quantity.0.value": {
          title: "Item Package Quantity",
          description: "Provide the number of packages sold as part of a single item. An ASIN selling 5 boxes of paperclips with 100 paperclips per box would have item package quantity = '5'",
          tTitle: "成套产品数量",
          tDescription: "提供单一产品的成套销售数量。ASIN 销售 5 盒回形针，每盒包含 100 个回形针，则此产品成套数量 =“5”",
          editable: !0,
          examples: ["1"]
      },
      "item_package_quantity.0.marketplace_id": {
          title: "item_package_quantity",
          description: "",
          tTitle: "item_package_quantity",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      item_package_quantity: {
          title: "Package Quantity",
          description: "Quantity of the item for sale in one package",
          tTitle: "包装内物品数量",
          tDescription: "正整数。",
          editable: !1,
          examples: ["1"]
      },
      "color.0.value": {
          title: "Color",
          description: "Provide the color of the product",
          tTitle: "颜色",
          tDescription: "提供产品颜色",
          editable: !0,
          examples: ["Cranberry"]
      },
      "color.0.language_tag": {
          title: "color",
          description: "",
          tTitle: "color",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "color.0.marketplace_id": {
          title: "color",
          description: "",
          tTitle: "color",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      color: {
          title: "Color",
          description: "Provide the color of the product",
          tTitle: "颜色",
          tDescription: "提供产品颜色",
          editable: !1,
          examples: ["Cranberry"]
      },
      "size.0.value": {
          title: "Size",
          description: "Provide the size of the item",
          tTitle: "尺码",
          tDescription: "提供产品尺码",
          editable: !0,
          examples: ["Extra Large"]
      },
      "size.0.language_tag": {
          title: "size",
          description: "",
          tTitle: "size",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "size.0.marketplace_id": {
          title: "size",
          description: "",
          tTitle: "size",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      size: {
          title: "Size",
          description: "The numeric or text version of the item's size.",
          tTitle: "尺寸",
          tDescription: "包含汉字、字母或数字的字符串，长度在 1 到 50 个字符之间（含 1 和 50）。",
          editable: !1,
          examples: ["2T, 6X, 12, Small, X-Large, 18 months, 14 Tall, 28Wx32L"]
      },
      "part_number.0.value": {
          title: "Part Number",
          description: "Provide the part number. For many products, this will be identical to the model number however some manufacturers distinguish part number from model number",
          tTitle: "零件编号",
          tDescription: "提供零件编号。在许多产品中，此编号与型号相同，但有些制造商会将零件编号与型号区分表示",
          editable: !1,
          examples: ["RIV001"]
      },
      "part_number.0.marketplace_id": {
          title: "part_number",
          description: "",
          tTitle: "part_number",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      part_number: {
          title: "Manufacturer Part Number",
          description: "For most products, this will be identical to the model number; however, some manufacturers distinguish part number from model number.",
          tTitle: "制造商零件编号",
          tDescription: "包含字母与数字的字符串，长度在 1 到 40 个字符之间（含 1 和 40）。",
          editable: !1,
          examples: ["LE"]
      },
      "item_shape.0.value": {
          title: "Item Shape",
          description: "Specify the shape of the item",
          tTitle: "商品形状",
          tDescription: "指定商品形状",
          editable: !0,
          examples: ["Round"]
      },
      "item_shape.0.language_tag": {
          title: "item_shape",
          description: "",
          tTitle: "item_shape",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "item_shape.0.marketplace_id": {
          title: "item_shape",
          description: "",
          tTitle: "item_shape",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      item_shape: {
          title: "Shape",
          description: "The shape of the item",
          tTitle: "商品形状",
          tDescription: "在这里指明您的商品的形状。",
          editable: !1,
          examples: ["Round; Oval; Square"]
      },
      "fit_type.0.value": {
          title: "Fit Type",
          description: "Specify the item's fit type",
          tTitle: "版型",
          tDescription: "指定商品的版型",
          editable: !0,
          examples: ["Universal Fit"]
      },
      "fit_type.0.language_tag": {
          title: "fit_type",
          description: "",
          tTitle: "fit_type",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "fit_type.0.marketplace_id": {
          title: "fit_type",
          description: "",
          tTitle: "fit_type",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      fit_type: {
          title: "Fit Type",
          description: "Specify the item's fit type",
          tTitle: "版型",
          tDescription: "指定商品的版型",
          editable: !1,
          examples: ["Relaxed"]
      },
      "oe_manufacturer.0.value": {
          title: "Model Brand Part Fits",
          description: "Enter one model brand name that this replacement part fits.",
          tTitle: "型号品牌零件适合",
          tDescription: "输入该替换零件适合的一个型号品牌名称。",
          editable: !0,
          examples: ["OE Manufacturer"]
      },
      "oe_manufacturer.0.language_tag": {
          title: "oe_manufacturer",
          description: "",
          tTitle: "oe_manufacturer",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "oe_manufacturer.0.marketplace_id": {
          title: "oe_manufacturer",
          description: "",
          tTitle: "oe_manufacturer",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      oe_manufacturer: {
          title: "OE Manufacturer",
          description: "Enter one model brand name that this replacement part fits.",
          tTitle: "原始设备制造商",
          tDescription: "该商品的原始制造商名称。",
          editable: !1,
          examples: []
      },
      "oem_equivalent_part_number.0.value": {
          title: "OEM Equivalent Part Number",
          description: "Provide the part number assigned by the original manufacturer of the component for which the item will serve as a replacement.",
          tTitle: "OEM 等效零件编号",
          tDescription: "提供原始制造商为该商品所替代组件分配的零件编号。",
          editable: !0,
          examples: ["Acer KN.A080A.001"]
      },
      "oem_equivalent_part_number.0.marketplace_id": {
          title: "oem_equivalent_part_number",
          description: "",
          tTitle: "oem_equivalent_part_number",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      oem_equivalent_part_number: {
          title: "OEM Equivalent Part Number",
          description: "For aftermarket parts, what is the original part number that the item is intended to replace",
          tTitle: "OEM 等效零件编号",
          tDescription: "提供原始制造商为该商品所替代组件分配的零件编号。",
          editable: !1,
          examples: ["Acer KN.A080A.001, Acer KN.A080A.002, Acer ME.DD266.1GB, Acer ME.DD266.512, Apple M8204LL/A"]
      },
      "configuration.0.value": {
          title: "Configuration",
          description: "Indicate the configuration of the item",
          tTitle: "配置",
          tDescription: "显示商品配置",
          editable: !0,
          examples: ["AWD Configuration"]
      },
      "configuration.0.language_tag": {
          title: "configuration",
          description: "",
          tTitle: "configuration",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "configuration.0.marketplace_id": {
          title: "configuration",
          description: "",
          tTitle: "configuration",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      configuration: {
          title: "Configuration",
          description: "Indicate the configuration of the item",
          tTitle: "配置",
          tDescription: "显示商品配置",
          editable: !1,
          examples: ["AWD Configuration"]
      },
      "auto_part_position.0.value": {
          title: "Auto Part Position",
          description: "Provide the position of the auto part",
          tTitle: "汽车零部件的位置",
          tDescription: "指定汽车部件的位置",
          editable: !0,
          examples: ["Front Right"]
      },
      "auto_part_position.0.marketplace_id": {
          title: "auto_part_position",
          description: "",
          tTitle: "auto_part_position",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      auto_part_position: {
          title: "Auto Part Position",
          description: "Provide the position of the auto part",
          tTitle: "汽车零部件的位置",
          tDescription: "指定汽车部件的位置",
          editable: !1,
          examples: []
      },
      "compatibility_options.0.value": {
          title: "Compatibility Options",
          description: "Specify the product's compatibility options",
          tTitle: "兼容性选项",
          tDescription: "指定产品的相容性选项",
          editable: !0,
          examples: ["Compatible"]
      },
      "compatibility_options.0.language_tag": {
          title: "compatibility_options",
          description: "",
          tTitle: "compatibility_options",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "compatibility_options.0.marketplace_id": {
          title: "compatibility_options",
          description: "",
          tTitle: "compatibility_options",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      compatibility_options: {
          title: "Compatibility Options",
          description: "Specify the product's compatibility options",
          tTitle: "兼容性选项",
          tDescription: "指定产品的相容性选项",
          editable: !1,
          examples: ["Compatible"]
      },
      "part_type_id.0.value": {
          title: "Part Type ID",
          description: "The attribute indicates the Part Type Id of the product",
          tTitle: "零件类型编号",
          tDescription: "PartType（零件类型）是汽车零部件工业协会 (AAIA) 定义的一个主要属性。此值可以是文本字符串也可以是一个编号 (ID)。卓越亚马逊使用 AAIA ACES 和 PIES XML 的规格说明中规定的 ID。这些 ID 的最新完整版本可以在 AAIA 网站的零件配置数据库 (PCDB) 中找到：http://www.aftermarket.org/eCommerce/eCatalog/eCatalog.asp。",
          editable: !0,
          examples: ["MFG-2024-001"]
      },
      "part_type_id.0.marketplace_id": {
          title: "part_type_id",
          description: "",
          tTitle: "part_type_id",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      part_type_id: {
          title: "Part Type ID",
          description: "The attribute indicates the Part Type Id of the product",
          tTitle: "零件类型编号",
          tDescription: "PartType（零件类型）是汽车零部件工业协会 (AAIA) 定义的一个主要属性。此值可以是文本字符串也可以是一个编号 (ID)。卓越亚马逊使用 AAIA ACES 和 PIES XML 的规格说明中规定的 ID。这些 ID 的最新完整版本可以在 AAIA 网站的零件配置数据库 (PCDB) 中找到：http://www.aftermarket.org/eCommerce/eCatalog/eCatalog.asp。",
          editable: !1,
          examples: []
      },
      "capacity.0.value": {
          title: "Capacity",
          description: "Provide the capacity of the item as a numeric value",
          tTitle: "容量",
          tDescription: "给出商品容量数值",
          editable: !0,
          examples: ["5.3"]
      },
      "capacity.0.unit": {
          title: "Capacity Unit",
          description: "Select the unit of measure for Capacity. If a value is provided for Capacity, you must also enter the corresponding unit.",
          tTitle: "容量单位",
          tDescription: "选择 Capacity 度量单位。如果给出 Capacity 的值，还必须输入相应的单位。",
          editable: !0,
          examples: ["Liters"]
      },
      "capacity.0.marketplace_id": {
          title: "capacity",
          description: "",
          tTitle: "capacity",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      capacity: {
          title: "Capacity",
          description: "Provide the capacity of the item",
          tTitle: "容量",
          tDescription: "给出商品容量",
          editable: !1,
          examples: ["5.3 Liters"]
      },
      "is_assembly_required.0.value": {
          title: "Required Assembly",
          description: "Indicate whether or not the item requires assembly by the customer",
          tTitle: "需要组装",
          tDescription: "产品是否需要组装？",
          editable: !0,
          examples: ["Yes"]
      },
      "is_assembly_required.0.marketplace_id": {
          title: "is_assembly_required",
          description: "",
          tTitle: "is_assembly_required",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      is_assembly_required: {
          title: "Is Assembly Required",
          description: "Indicate if assembly is required.",
          tTitle: "是否需要组装",
          tDescription: "指示商品是否需要组装。",
          editable: !1,
          examples: []
      },
      "lens.0.color.0.value": {
          title: "Lens Color",
          description: "Provide the color of lens",
          tTitle: "镜片颜色",
          tDescription: "提供镜头颜色",
          editable: !0,
          examples: ["Blue"]
      },
      "lens.0.color.0.language_tag": {
          title: "lens",
          description: "",
          tTitle: "lens",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "lens.0.color": {
          title: "Lens Color",
          description: "Provide the color of lens",
          tTitle: "镜片颜色",
          tDescription: "提供镜头颜色",
          editable: !1,
          examples: ["Blue"]
      },
      "lens.0.marketplace_id": {
          title: "lens",
          description: "",
          tTitle: "lens",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      lens: {
          title: "Lens",
          description: "The attribute indicates Lens of the product",
          tTitle: "镜片",
          tDescription: "该属性表示产品的镜头",
          editable: !1,
          examples: ["Chemical Resistant Coating"]
      },
      "item_display_dimensions.0.depth": {
          title: "Item Display Depth",
          description: "Provide the depth of the item without packaging",
          tTitle: "商品显示深度",
          tDescription: "给出商品深度（无包装）",
          editable: !1,
          examples: ["2.75, 3.00"]
      },
      "item_display_dimensions.0.depth.value": {
          title: "Item Display Depth",
          description: "Provide the numeric component of the physical depth of the product without packaging and fully assembled",
          tTitle: "商品显示深度",
          tDescription: "给出产品物理深度的数值分量（无包装，无需完全组装）",
          editable: !0,
          examples: ["2.75, 3.00"]
      },
      "item_display_dimensions.0.depth.unit": {
          title: "Item Display Depth Unit",
          description: "Select the corresponding unit",
          tTitle: "商品显示深度单位",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["Inches"]
      },
      "item_display_dimensions.0.diameter": {
          title: "Item Display Diameter",
          description: "Provide the diameter of the product without packaging and fully assembled",
          tTitle: "商品显示直径",
          tDescription: "给出产品直径（无包装，无需完全组装）",
          editable: !1,
          examples: ["2.75, 3.00"]
      },
      "item_display_dimensions.0.diameter.value": {
          title: "Item Display Diameter",
          description: "Provide the numeric component of the diameter of the product without packaging and fully assembled",
          tTitle: "商品显示直径",
          tDescription: "给出产品直径的数值分量（无包装，无需完全组装）",
          editable: !0,
          examples: ["2.75, 3.00"]
      },
      "item_display_dimensions.0.diameter.unit": {
          title: "Item Display Diameter Unit",
          description: "Select the corresponding unit",
          tTitle: "商品显示直径单位",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["Inches"]
      },
      "item_display_dimensions.0.height": {
          title: "Item Display Height",
          description: "Provide the height of the product without packaging and fully assembled",
          tTitle: "商品显示高度",
          tDescription: "给出产品高度（无包装，无需完全组装）",
          editable: !1,
          examples: ["1.8"]
      },
      "item_display_dimensions.0.height.value": {
          title: "Item Display Height",
          description: "Provide the numeric component of the height of the product without packaging and fully assembled",
          tTitle: "商品显示高度",
          tDescription: "给出产品高度的数值分量（无包装，无需完全组装）",
          editable: !0,
          examples: ["1.8"]
      },
      "item_display_dimensions.0.height.unit": {
          title: "Item Display Height Unit",
          description: "Select the corresponding unit",
          tTitle: "商品显示高度单位",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["Inches"]
      },
      "item_display_dimensions.0.length": {
          title: "Item Display Length",
          description: "Provide the length of the product without packaging and fully assembled",
          tTitle: "商品显示长度",
          tDescription: "给出产品长度（无包装，无需完全组装）",
          editable: !1,
          examples: ["5.7"]
      },
      "item_display_dimensions.0.length.value": {
          title: "Item Display Length",
          description: "Provide the numeric component of the length of the product without packaging and fully assembled",
          tTitle: "商品显示长度",
          tDescription: "给出产品长度的数值分量（无包装，无需完全组装）",
          editable: !0,
          examples: ["5.7"]
      },
      "item_display_dimensions.0.length.unit": {
          title: "Item Display Length Unit",
          description: "Select the corresponding unit",
          tTitle: "商品显示长度单位",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["Inches"]
      },
      "item_display_dimensions.0.marketplace_id": {
          title: "item_display_dimensions",
          description: "",
          tTitle: "item_display_dimensions",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "item_display_dimensions.0.width": {
          title: "Item Display Width",
          description: "Provide the width of the product without packaging and fully assembled",
          tTitle: "商品显示宽度",
          tDescription: "给出产品宽度（无包装，无需完全组装）",
          editable: !1,
          examples: ["3.5"]
      },
      "item_display_dimensions.0.width.value": {
          title: "Item Display Width",
          description: "Provide the numeric component of the width of the product without packaging and fully assembled",
          tTitle: "商品显示宽度",
          tDescription: "给出产品宽度的数值分量（无包装，无需完全组装）",
          editable: !0,
          examples: ["3.5"]
      },
      "item_display_dimensions.0.width.unit": {
          title: "Item Display Width Unit",
          description: "Select the corresponding unit",
          tTitle: "商品显示宽度单位",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["Inches"]
      },
      item_display_dimensions: {
          title: "Item Display Dimensions",
          description: "Provide the dimensions of the product, without packaging and fully assembled",
          tTitle: "商品显示尺寸",
          tDescription: "提供产品的尺寸（无包装，无需完全组装）",
          editable: !1,
          examples: ["5.7 Inches x 3.5 Inches x 1.8 Inches"]
      },
      "flavor.0.value": {
          title: "Flavor",
          description: "Specify the flavor of the product",
          tTitle: "口味",
          tDescription: "指定产品的口味",
          editable: !0,
          examples: ["Double Rich Chocolate, Cherry, Chocolate, Vanilla"]
      },
      "flavor.0.language_tag": {
          title: "flavor",
          description: "",
          tTitle: "flavor",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "flavor.0.marketplace_id": {
          title: "flavor",
          description: "",
          tTitle: "flavor",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      flavor: {
          title: "Flavor",
          description: "What flavor is the product?",
          tTitle: "口味",
          tDescription: "产品是何种口味？",
          editable: !1,
          examples: ["Double Rich Chocolate, Cherry, Chocolate, Vanilla"]
      },
      "connectivity_technology.0.value": {
          title: "Connectivity Technology",
          description: "Specify the product's connectivity technology",
          tTitle: "连接技术",
          tDescription: "指定产品的连接技术",
          editable: !0,
          examples: ["Ethernet"]
      },
      "connectivity_technology.0.language_tag": {
          title: "connectivity_technology",
          description: "",
          tTitle: "connectivity_technology",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "connectivity_technology.0.marketplace_id": {
          title: "connectivity_technology",
          description: "",
          tTitle: "connectivity_technology",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      connectivity_technology: {
          title: "Connectivity Technology",
          description: "Specify the product's wired connectivity technology.",
          tTitle: "连接技术",
          tDescription: "指定产品的连接技术",
          editable: !1,
          examples: ["Ethernet"]
      },
      "volume_capacity_name.0.value": {
          title: "Volume Capacity",
          description: "Provide the volume capacity of the item as a numeric value",
          tTitle: "容量",
          tDescription: "提供商品的容量（用数值表示）",
          editable: !0,
          examples: ["7, 16"]
      },
      "volume_capacity_name.0.unit": {
          title: "Volume Capacity Unit",
          description: "Select the corresponding unit",
          tTitle: "容量的单位",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["quarts, liters, gallons"]
      },
      "volume_capacity_name.0.language_tag": {
          title: "volume_capacity_name",
          description: "",
          tTitle: "volume_capacity_name",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "volume_capacity_name.0.marketplace_id": {
          title: "volume_capacity_name",
          description: "",
          tTitle: "volume_capacity_name",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      volume_capacity_name: {
          title: "Volume",
          description: "What is the volume of this item?",
          tTitle: "容量",
          tDescription: "提供商品的容量（用数值表示）",
          editable: !1,
          examples: []
      },
      "customer_package_type.0.value": {
          title: "Customer Package Type",
          description: "Provide the products package type",
          tTitle: "包装类型",
          tDescription: "提供产品的包装类型",
          editable: !0,
          examples: ["Standard Packaging"]
      },
      "customer_package_type.0.language_tag": {
          title: "customer_package_type",
          description: "",
          tTitle: "customer_package_type",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "customer_package_type.0.marketplace_id": {
          title: "customer_package_type",
          description: "",
          tTitle: "customer_package_type",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      customer_package_type: {
          title: "Customer Package Type",
          description: "Provide the products package type",
          tTitle: "包装类型",
          tDescription: "提供产品的包装类型",
          editable: !1,
          examples: ["Standard Packaging"]
      },
      "pattern.0.value": {
          title: "Pattern",
          description: "Provide the most prominent repeated decorative design of the item",
          tTitle: "图案",
          tDescription: "说明商品最醒目的重复装饰设计",
          editable: !0,
          examples: ["Floral, Geometric, Polka Dot"]
      },
      "pattern.0.language_tag": {
          title: "pattern",
          description: "",
          tTitle: "pattern",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "pattern.0.marketplace_id": {
          title: "pattern",
          description: "",
          tTitle: "pattern",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      pattern: {
          title: "Pattern",
          description: "Provide the most prominent repeated decorative design of the item",
          tTitle: "图案",
          tDescription: "说明商品最醒目的重复装饰设计",
          editable: !1,
          examples: ["Floral, Geometric, Polka Dot"]
      },
      "is_expiration_dated_product.0.value": {
          title: "Is Product Expirable",
          description: "Provide whether the product has an expiration date",
          tTitle: "产品是否过期",
          tDescription: "提供产品是否具有有效期",
          editable: !0,
          examples: ["Yes, No"]
      },
      "is_expiration_dated_product.0.marketplace_id": {
          title: "is_expiration_dated_product",
          description: "",
          tTitle: "is_expiration_dated_product",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      is_expiration_dated_product: {
          title: "Expiration Dated Product",
          description: "Provide whether the product has an expiration date",
          tTitle: "产品是否过期",
          tDescription: "如果产品满足以下条件之一，请选择“是”：1.有打印的有效期；2.是供人类或动物使用的外用品或消耗品；3.有建议的保质期。否则，选择“否”。",
          editable: !1,
          examples: ["Yes, No"]
      },
      "unit_count.0.value": {
          title: "Unit Count",
          description: "For products that are consumed by volume, weight, linear dimension, etc., provide the net quantity that would be shipped to a customer who orders one ASIN (e.g. 12 pack of 6 floz. bottles of water = 72, vs. a single 2 liter bottle = 2). For products consumed as individual units, provide the total number of units (pack of 12 pens = 12). For packed assortments of non-identical items, enter 1",
          tTitle: "单位计数",
          tDescription: "指定产品的单位数量可用于计算产品的每单位价格。",
          editable: !0,
          examples: ["72.0"]
      },
      "unit_count.0.type": {
          title: "Unit Count Type",
          description: "For items consumed by volume, weight, linear dimension etc., provide the unit of measure listed on the products. For products consumed as individual units, enter: count",
          tTitle: "单位计数类型",
          tDescription: "指定可让客户做出购买决定的单位类型。一瓶苏打水可以有各种尺寸，以液盎司为单位计量；一盒螺钉用盒中螺钉的个数来计量。",
          editable: !1,
          examples: ["Ounces"]
      },
      "unit_count.0.type.value": {
          title: "Unit Count Type",
          description: "For items consumed by volume, weight, linear dimension etc., provide the unit of measure listed on the products. For products consumed as individual units, enter: count",
          tTitle: "单位计数类型",
          tDescription: "指定可让客户做出购买决定的单位类型。一瓶苏打水可以有各种尺寸，以液盎司为单位计量；一盒螺钉用盒中螺钉的个数来计量。",
          editable: !0,
          examples: ["Ounces"]
      },
      "unit_count.0.type.language_tag": {
          title: "unit_count",
          description: "",
          tTitle: "unit_count",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "unit_count.0.marketplace_id": {
          title: "unit_count",
          description: "",
          tTitle: "unit_count",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      unit_count: {
          title: "Unit Count",
          description: "Specify the number of units and the unit type of the product",
          tTitle: "单位计数",
          tDescription: "指定产品的单位数量和单位类型",
          editable: !1,
          examples: ["72.0 Ounces"]
      },
      "included_components.0.value": {
          title: "Included Components",
          description: "Specify the items that are included with this product",
          tTitle: "所包含组件",
          tDescription: "指定本产品所包含的组件",
          editable: !0,
          examples: ["Camera Body"]
      },
      "included_components.0.language_tag": {
          title: "included_components",
          description: "",
          tTitle: "included_components",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "included_components.0.marketplace_id": {
          title: "included_components",
          description: "",
          tTitle: "included_components",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      included_components: {
          title: "Included Components",
          description: "Which components are included?",
          tTitle: "商品组成信息",
          tDescription: "指定本产品所包含的组件",
          editable: !1,
          examples: ["Camera Body, Battery Pack"]
      },
      "league_name.0.value": {
          title: "League Name",
          description: "Provide the league name associated with this product",
          tTitle: "联赛名称",
          tDescription: "给出与产品相关的联赛名称",
          editable: !0,
          examples: ["NBA"]
      },
      "league_name.0.language_tag": {
          title: "league_name",
          description: "",
          tTitle: "league_name",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "league_name.0.marketplace_id": {
          title: "league_name",
          description: "",
          tTitle: "league_name",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      league_name: {
          title: "League Name",
          description: "Name of league associated with this event",
          tTitle: "联赛名称",
          tDescription: "给出与产品相关的联赛名称",
          editable: !1,
          examples: ["NBA"]
      },
      "team_name.0.value": {
          title: "Team Name",
          description: "Please enter the team name of this product",
          tTitle: "球队名称",
          tDescription: "请输入产品的球队名称",
          editable: !0,
          examples: ["Seattle Seahawks"]
      },
      "team_name.0.language_tag": {
          title: "team_name",
          description: "",
          tTitle: "team_name",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "team_name.0.marketplace_id": {
          title: "team_name",
          description: "",
          tTitle: "team_name",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      team_name: {
          title: "Team Name",
          description: "Please enter the team name of this product",
          tTitle: "球队名称",
          tDescription: "请输入产品的球队名称",
          editable: !1,
          examples: ["Seattle Seahawks"]
      },
      "scent.0.value": {
          title: "Scent",
          description: "Provide a description of the scent of the item",
          tTitle: "芳香",
          tDescription: "给定商品的气味说明",
          editable: !0,
          examples: ["Lavender"]
      },
      "scent.0.language_tag": {
          title: "scent",
          description: "",
          tTitle: "scent",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "scent.0.marketplace_id": {
          title: "scent",
          description: "",
          tTitle: "scent",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      scent: {
          title: "Scent",
          description: "Provide a description of the scent of the item",
          tTitle: "芳香",
          tDescription: "给定商品的气味说明",
          editable: !1,
          examples: ["Lavender"]
      },
      "hand_orientation.0.value": {
          title: "Hand Orientation",
          description: "Provide the hand orientation that the item is built for; left, right or both",
          tTitle: "用手习惯",
          tDescription: "提供产品支持的用手习惯，左、右或均可",
          editable: !0,
          examples: ["Left Hand"]
      },
      "hand_orientation.0.language_tag": {
          title: "hand_orientation",
          description: "",
          tTitle: "hand_orientation",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "hand_orientation.0.marketplace_id": {
          title: "hand_orientation",
          description: "",
          tTitle: "hand_orientation",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      hand_orientation: {
          title: "Hand Orientation",
          description: "Provide the hand orientation that the item is built for; left, right or both",
          tTitle: "握杆方式",
          tDescription: "提供产品支持的用手习惯，左、右或均可",
          editable: !1,
          examples: ["Left Hand"]
      },
      "cup.0.marketplace_id": {
          title: "cup",
          description: "",
          tTitle: "cup",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "cup.0.size.0.value": {
          title: "Cup Size",
          description: "Provide the cup size that the product was designed to fit",
          tTitle: "杯尺寸",
          tDescription: "提供产品适用的罩杯大小",
          editable: !0,
          examples: ["A, B, DD"]
      },
      "cup.0.size.0.language_tag": {
          title: "cup",
          description: "",
          tTitle: "cup",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "cup.0.size": {
          title: "Cup Size",
          description: "Provide the cup size that the product was designed to fit",
          tTitle: "罩杯尺寸",
          tDescription: "提供产品适用的罩杯大小",
          editable: !1,
          examples: []
      },
      cup: {
          title: "Cup",
          description: "The attribute indicates Cup of the product",
          tTitle: "杯子",
          tDescription: "该属性表示产品的杯具",
          editable: !1,
          examples: ["B"]
      },
      "grip.0.marketplace_id": {
          title: "grip",
          description: "",
          tTitle: "grip",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "grip.0.size.0.value": {
          title: "Grip Size",
          description: "Enter the size of the grip",
          tTitle: "握把尺寸",
          tDescription: "输入握把尺寸",
          editable: !0,
          examples: ["Small"]
      },
      "grip.0.size.0.language_tag": {
          title: "grip",
          description: "",
          tTitle: "grip",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "grip.0.size": {
          title: "Grip Size",
          description: "Enter the size of the grip",
          tTitle: "握把尺寸",
          tDescription: "输入握把尺寸",
          editable: !1,
          examples: ["Small"]
      },
      "grip.0.type.0.value": {
          title: "Grip Type",
          description: "Provide the grip type of the product",
          tTitle: "握把类型",
          tDescription: "给出产品的握把类型",
          editable: !0,
          examples: ["Insulated"]
      },
      "grip.0.type.0.language_tag": {
          title: "grip",
          description: "",
          tTitle: "grip",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "grip.0.type": {
          title: "Grip Type",
          description: "Provide the grip type of the product",
          tTitle: "握把类型",
          tDescription: "给出产品的握把类型",
          editable: !1,
          examples: ["Insulated"]
      },
      grip: {
          title: "Grip",
          description: "The attribute indicates Grip of the product",
          tTitle: "握杆",
          tDescription: "该属性表示产品的握把",
          editable: !1,
          examples: ["Rubber"]
      },
      "grit.0.marketplace_id": {
          title: "grit",
          description: "",
          tTitle: "grit",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "grit.0.type.0.value": {
          title: "Grit Type",
          description: "Provide the type of grit associated with the abrasive component of the item",
          tTitle: "砂砾类型",
          tDescription: "给定与商品研磨组件相关的砂粒类型",
          editable: !0,
          examples: ["Coarse"]
      },
      "grit.0.type.0.language_tag": {
          title: "grit",
          description: "",
          tTitle: "grit",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "grit.0.type": {
          title: "Grit Type",
          description: "Provide the type of grit associated with the abrasive component of the item",
          tTitle: "砂砾类型",
          tDescription: "给定与商品研磨组件相关的砂粒类型",
          editable: !1,
          examples: ["Coarse"]
      },
      grit: {
          title: "Grit",
          description: "The attribute indicates Grit of the product",
          tTitle: "砂砾",
          tDescription: "该属性表示产品的细度",
          editable: !1,
          examples: ["Fine"]
      },
      "length_range.0.value": {
          title: "Length Range",
          description: "Length range for blinds",
          tTitle: "长度范围",
          tDescription: "百叶窗的长度范围",
          editable: !0,
          examples: ['24-60" long']
      },
      "length_range.0.language_tag": {
          title: "length_range",
          description: "",
          tTitle: "length_range",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "length_range.0.marketplace_id": {
          title: "length_range",
          description: "",
          tTitle: "length_range",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      length_range: {
          title: "Length Range",
          description: "Length range for blinds",
          tTitle: "长度范围",
          tDescription: "百叶窗的长度范围",
          editable: !1,
          examples: ['24-60" long']
      },
      "matte_style.0.value": {
          title: "Matte Style",
          description: "The type of matte on the product, typically furniture.",
          tTitle: "亚光风格",
          tDescription: "产品上的磨砂类型，通常是家具。",
          editable: !0,
          examples: ["Matte, Smooth Matte, Silk Matte, Textured Matte"]
      },
      "matte_style.0.language_tag": {
          title: "matte_style",
          description: "",
          tTitle: "matte_style",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "matte_style.0.marketplace_id": {
          title: "matte_style",
          description: "",
          tTitle: "matte_style",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      matte_style: {
          title: "Matte Style",
          description: "The type of matte on the product, typically furniture.",
          tTitle: "亚光风格",
          tDescription: "产品上的磨砂类型，通常是家具。",
          editable: !1,
          examples: ["Matte, Smooth Matte, Silk Matte, Textured Matte"]
      },
      "item_thickness.0.decimal_value": {
          title: "Item Thickness Decimal Value",
          description: "Provide the thickness of the item as a decimal",
          tTitle: "商品厚度十进制数值",
          tDescription: "以十进制形式给出商品厚度",
          editable: !0,
          examples: ["0.25"]
      },
      "item_thickness.0.marketplace_id": {
          title: "item_thickness",
          description: "",
          tTitle: "item_thickness",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "item_thickness.0.unit": {
          title: "Item Thickness Unit",
          description: "Select the unit of measure for Item Thickness. If a value is provided for Item Thickness, you must also enter the corresponding unit.",
          tTitle: "商品厚度单位",
          tDescription: "选择 Item Thickness 的度量单位。如果给出 Item Thickness 的值，还必须输入相应的单位。",
          editable: !0,
          examples: ["Inches"]
      },
      item_thickness: {
          title: "Item Thickness",
          description: "Total thickness of the usable product. Do not include modifier. If the item is newsprint wrap, enter the paper thickness; or if the product is a pair of loading dock plates, enter the plate's thickness.",
          tTitle: "商品厚度",
          tDescription: "以十进制形式给出商品厚度",
          editable: !1,
          examples: ["2 inches"]
      },
      "automotive_fit_type.0.value": {
          title: "Automotive Fit Type",
          description: "Provide whether the item is designed to fit a specific vehicle type or all vehicle types.",
          tTitle: "汽车适配类型",
          tDescription: "提供该商品是否专为特定车型设计还是适用于所有车型。",
          editable: !0,
          examples: ["Universal Fit"]
      },
      "automotive_fit_type.0.marketplace_id": {
          title: "automotive_fit_type",
          description: "",
          tTitle: "automotive_fit_type",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      automotive_fit_type: {
          title: "Automotive Fit Type",
          description: "Provide whether the item is designed to fit a specific vehicle type or all vehicle types.",
          tTitle: "汽车适配类型",
          tDescription: "提供该商品是否专为特定车型设计还是适用于所有车型。",
          editable: !1,
          examples: ["Universal Fit"]
      },
      "parentage_level.0.value": {
          title: "Parentage Level",
          description: "Specify whether a SKU is a parent or child",
          tTitle: "父条目的等级",
          tDescription: "注明该库存单位是指父条目还是子条目",
          editable: !0,
          examples: ["Parent"]
      },
      "parentage_level.0.marketplace_id": {
          title: "parentage_level",
          description: "",
          tTitle: "parentage_level",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      parentage_level: {
          title: "Parentage Level",
          description: "Specify whether a SKU is a parent or child",
          tTitle: "父条目的等级",
          tDescription: "注明该库存单位是指父条目还是子条目",
          editable: !1,
          examples: ["Parent"]
      },
      "child_parent_sku_relationship.0.child_relationship_type": {
          title: "Child Relationship Type",
          description: "The relationship that the child has to the parent",
          tTitle: "子条目的关系类型",
          tDescription: "父条目与子条目之间的关系",
          editable: !0,
          examples: ["accessory"]
      },
      "child_parent_sku_relationship.0.marketplace_id": {
          title: "child_parent_sku_relationship",
          description: "",
          tTitle: "child_parent_sku_relationship",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "child_parent_sku_relationship.0.parent_sku": {
          title: "Parent SKU",
          description: "The SKU of the parent item",
          tTitle: "父条目的库存单位",
          tDescription: "父条目的库存单位",
          editable: !0,
          examples: ["ABC123"]
      },
      child_parent_sku_relationship: {
          title: "Child Parent Sku Relationship",
          description: "The attribute indicates the Child Parent Sku Relationship of the product",
          tTitle: "子条目的关系类型",
          tDescription: "提供关系类型",
          editable: !1,
          examples: ["Accessory"]
      },
      "variation_theme.0.name": {
          title: "Variation Theme Name",
          description: "Specify the variation theme that the product will use. The theme's attributes must be populated for all items in the grouping.",
          tTitle: "变体主题名称",
          tDescription: "指定产品将使用的变体主题。主题属性必须应用于分组中的所有商品。",
          editable: !0,
          examples: ["Color, Size, Color/Size"]
      },
      variation_theme: {
          title: "Variation Theme",
          description: "Specify the variation theme that the product will use. The theme's attributes must be populated for all items in the grouping.",
          tTitle: "变体主题",
          tDescription: "指定产品将使用的变体主题。主题属性必须应用于分组中的所有商品。",
          editable: !1,
          examples: ["Size/Color"]
      },
      "country_of_origin.0.value": {
          title: "Country of Origin",
          description: "Select the product's country of origin",
          tTitle: "原产国",
          tDescription: "选择产品的原产国",
          editable: !1,
          examples: ["China"]
      },
      "country_of_origin.0.marketplace_id": {
          title: "country_of_origin",
          description: "",
          tTitle: "country_of_origin",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      country_of_origin: {
          title: "Country of Publication",
          description: "The country in which the product was published.",
          tTitle: "原产国",
          tDescription: "请从“有效值”选项卡中选择一个值进行填写。",
          editable: !1,
          examples: ["FR"]
      },
      "warranty_description.0.value": {
          title: "Warranty Description",
          description: "Provide a description of the product's warranty",
          tTitle: "保修说明",
          tDescription: "提供产品的保修说明",
          editable: !0,
          examples: ["2 Year Manufacturer"]
      },
      "warranty_description.0.language_tag": {
          title: "warranty_description",
          description: "",
          tTitle: "warranty_description",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "warranty_description.0.marketplace_id": {
          title: "warranty_description",
          description: "",
          tTitle: "warranty_description",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      warranty_description: {
          title: "Manufacturer Warranty Description",
          description: "Describe the warranty.",
          tTitle: "制造商保修说明",
          tDescription: "请说明该商品享受的保修。保修条款应该按照制造商的规定来描述。",
          editable: !1,
          examples: ["Manufacturer warranty for 90 days from date of purchase."]
      },
      "supplier_declared_dg_hz_regulation.0.value": {
          title: "Dangerous Goods Regulations",
          description: "Provide the regulations that apply to the item if it is classified as a dangerous good, hazardous material, substance, or waste.",
          tTitle: "危险商品规管",
          tDescription: "如果产品是受运输、储存和/或废物管制的危险商品或危险材料、物质或废物，请从有效值表中进行选择",
          editable: !0,
          examples: ["GHS, Storage, Transportation"]
      },
      "supplier_declared_dg_hz_regulation.0.marketplace_id": {
          title: "supplier_declared_dg_hz_regulation",
          description: "",
          tTitle: "supplier_declared_dg_hz_regulation",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      supplier_declared_dg_hz_regulation: {
          title: "Dangerous Goods Regulations",
          description: "Provide the regulations that apply to the item if it is classified as a dangerous good, hazardous material, substance, or waste.",
          tTitle: "危险商品规管",
          tDescription: "如果产品是受运输、储存和/或废物管制的危险商品或危险材料、物质或废物，请从有效值表中进行选择",
          editable: !1,
          examples: ["GHS, Storage, Transportation"]
      },
      "ghs.0.classification.0.class": {
          title: "GHS Class",
          description: "Select the GHS Class of the product from the list of valid values if GHS is selected as the Dangerous Goods Regulation. GHS Class indicates the warning statement assigned by the GHS classification system.",
          tTitle: "GHS 分类",
          tDescription: "如果选择 GHS 作为危险品规则，请从有效值列表中选择产品的 GHS 类别。GHS 类别指示由 GHS 分类系统分配的警告声明。",
          editable: !0,
          examples: ["Explosive"]
      },
      "ghs.0.classification": {
          title: "GHS Classification",
          description: "Provide the Global Harmonized System (GHS) CLP classification for the product",
          tTitle: "GHS 分类",
          tDescription: "提供产品的全球协调系统（GHS）CLP 分类",
          editable: !1,
          examples: ["Class: Explosive, Subcategory: Liquid"]
      },
      "ghs.0.marketplace_id": {
          title: "ghs",
          description: "",
          tTitle: "ghs",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      ghs: {
          title: "GHS",
          description: "Provide the Global Harmonized System (GHS) information",
          tTitle: "GHS",
          tDescription: "提供全球化学品统一分类和标签制度 (GHS) 信息",
          editable: !1,
          examples: ["NGK"]
      },
      "hazmat.0.aspect": {
          title: "Hazmat Aspect",
          description: "Select the aspect or regulatory body used for the hazardous product information",
          tTitle: "危险品方面",
          tDescription: "选择危险产品信息的方面或监管机构",
          editable: !1,
          examples: ["UN Regulatory Id"]
      },
      "hazmat.0.value": {
          title: "Hazmat",
          description: "Provide hazmat information that is relevant to the product based on the aspect selected",
          tTitle: "危险品",
          tDescription: "根据选择的方面提供与产品相关的危险品信息",
          editable: !1,
          examples: ["UN1993"]
      },
      "hazmat.0.marketplace_id": {
          title: "hazmat",
          description: "",
          tTitle: "hazmat",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      hazmat: {
          title: "Hazmat",
          description: "Provide hazmat information that is relevant to the product based on the aspect selected",
          tTitle: "危险品联合国监管ID",
          tDescription: "根据选择的方面提供与产品相关的危险品信息",
          editable: !1,
          examples: ["UN1993"]
      },
      "safety_data_sheet_url.0.value": {
          title: "Safety Data Sheet (SDS or MSDS) URL",
          description: "Provide the web address for the Safety Data Sheet, containing essential safety information for potentially hazardous materials.",
          tTitle: "安全数据表（SDS 或 MSDS）URL",
          tDescription: "如果在“危险品法规”栏中选择了“不适用”或“未知”以外的任何值，请提供 SDS/MSDS URL",
          editable: !0,
          examples: ["www.safetysheetsRus.com/hazardous_substance/msds.pdf"]
      },
      "safety_data_sheet_url.0.language_tag": {
          title: "safety_data_sheet_url",
          description: "",
          tTitle: "safety_data_sheet_url",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "safety_data_sheet_url.0.marketplace_id": {
          title: "safety_data_sheet_url",
          description: "",
          tTitle: "safety_data_sheet_url",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      safety_data_sheet_url: {
          title: "Safety Data Sheet (SDS or MSDS) URL",
          description: "Provide the SDS/MSDS URL. Required for Hazardous material SDS/MSDS provides information such as physical data (flashpoint, pH, etc.), health concerns, storage, and transportation information for potentially dangerous substances.",
          tTitle: "安全数据表（SDS 或 MSDS）URL",
          tDescription: "提供 SDS/MSDS URL。  危险材料 SDS/MSDS 需要，针对潜在危险物质提供物理数据（闪点、pH 等）、健康问题、存储和运输等信息。",
          editable: !1,
          examples: ["www.safetysheetsRus.com/hazardous_substance/msds.pdf"]
      },
      "item_weight.0.value": {
          title: "Item Weight",
          description: "Provide the item weight numeric value (not including the packaging)",
          tTitle: "商品重量",
          tDescription: "给定商品重量数值（不含包装）",
          editable: !0,
          examples: ["30.0, 1.5"]
      },
      "item_weight.0.unit": {
          title: "Item Weight Unit",
          description: "Provide unit for item weight",
          tTitle: "商品重量单位",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["Pounds, Grams"]
      },
      "item_weight.0.marketplace_id": {
          title: "item_weight",
          description: "",
          tTitle: "item_weight",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      item_weight: {
          title: "Item Weight",
          description: "The weight of the product without shipping material.",
          tTitle: "商品重量",
          tDescription: "小数点左边最多10位数字，小数点右边最多2位数字。请不要使用逗号。",
          editable: !1,
          examples: ["30.0 Pounds, 1.5 Kilograms"]
      },
      "required_product_compliance_certificate.0.value": {
          title: "Product Compliance Certificate",
          description: "Select the regulation/restriction your product is subject to that requires a certificate such as an EO Number or Judgement Order for compliance. If your product is not subject to any of these regulations, select Not Applicable",
          tTitle: "产品合规证书",
          tDescription: "选择产品所要遵循的法规/限制，该法规/限制要求提供证书（例如 EO 号或判决书）以确保合规性。如果产品不受任何这些法规的约束，请选择“不适用”",
          editable: !1,
          examples: ["California Air Review Board (CARB), Not Applicable"]
      },
      "required_product_compliance_certificate.0.marketplace_id": {
          title: "required_product_compliance_certificate",
          description: "",
          tTitle: "required_product_compliance_certificate",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      required_product_compliance_certificate: {
          title: "Product Compliance Certificate",
          description: "Select the regulation/restriction your product is subject to that requires a certificate such as an EO Number or Judgement Order for compliance. If your product is not subject to any of these regulations, select Not Applicable",
          tTitle: "产品合规证书",
          tDescription: "选择产品所要遵循的法规/限制，该法规/限制要求提供证书（例如 EO 号或判决书）以确保合规性。如果产品不受任何这些法规的约束，请选择“不适用”",
          editable: !1,
          examples: ["California Air Resources Board (CARB), Not Applicable"]
      },
      "legal_compliance_certifications.0.regulatory_organization_name": {
          title: "Regulatory Organization Name",
          description: "Select the applicable authority governing the regulation/restriction",
          tTitle: "Regulatory Organization Name",
          tDescription: "Select the applicable authority governing the regulation/restriction",
          editable: !0,
          examples: ["California Environmental Protection Agency - Air Resources Board"]
      },
      "legal_compliance_certifications.0.certification_status": {
          title: "Compliance Certification Status",
          description: "If you have the required certification for compliance, select Compliant; if not, select, Non-compliant, and if not needed, select Exempt",
          tTitle: "合规认证状态",
          tDescription: "如果您具有规定的合规认证，请选择“合规”，如果没有，请选择“不合规”，如果不需要，请选择“豁免”。",
          editable: !0,
          examples: ["Compliant, Exempt"]
      },
      "legal_compliance_certifications.0.value": {
          title: "Compliance Certification Value",
          description: 'Provide the required certification information to indicate compliance, such as an EO Number or judgement order. If you do not have one or are Exempt, please submit "NA"',
          tTitle: "Compliance Certification Value",
          tDescription: 'Provide the required certification information to indicate compliance, such as an EO Number or judgement order. If you do not have one or are Exempt, please submit "NA"',
          editable: !0,
          examples: ["d-759-1, Not Applicable"]
      },
      "legal_compliance_certifications.0.language_tag": {
          title: "legal_compliance_certifications",
          description: "",
          tTitle: "legal_compliance_certifications",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "legal_compliance_certifications.0.marketplace_id": {
          title: "legal_compliance_certifications",
          description: "",
          tTitle: "legal_compliance_certifications",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      legal_compliance_certifications: {
          title: "Legal Compliance Certifications",
          description: "Provide relevant compliance certifications for the product",
          tTitle: "法律合规证明",
          tDescription: "提供产品相关的合规证明",
          editable: !1,
          examples: ["California Air Resources Board (CARB)"]
      },
      "external_testing_certification.0.value": {
          title: "External Testing Certification",
          description: "Provide the product's external testing certification",
          tTitle: "外部测试证书",
          tDescription: "给出产品外部测试证书",
          editable: !0,
          examples: ["Grade 1"]
      },
      "external_testing_certification.0.marketplace_id": {
          title: "external_testing_certification",
          description: "",
          tTitle: "external_testing_certification",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      external_testing_certification: {
          title: "External Testing Certification",
          description: "Provide the product's external testing certification",
          tTitle: "安全标准",
          tDescription: "给出产品外部测试证书",
          editable: !1,
          examples: []
      },
      "california_proposition_65.0.compliance_type": {
          title: "California Proposition 65 Warning Type",
          description: "Select the warning type applicable to your product, if any. You certify that the warning provided satisfies legal requirements and that you’ll remove a warning previously provided only if it is no longer legally required.",
          tTitle: "加州 65 号提案 警告类型",
          tDescription: "选择适用于您的产品的警告类型（如有）。您证明所提供的警告符合法律要求，并且只有在法律不再要求时，您才会删除之前提供的警告。",
          editable: !0,
          examples: ["Furniture"]
      },
      "california_proposition_65.0.chemical_names": {
          title: "California Proposition 65 Chemical Name(s)",
          description: "If you selected the Food, Furniture, or Chemical warning you must indicate a chemical(s). You certify that the chemical(s) satisfies legal requirements and that you’ll remove a chemical previously provided only if it is no longer legally required.",
          tTitle: "加州 65 号提案 化学品名称",
          tDescription: "如果您选择了食品、家具或化学品警告，您必须指明一种或多种化学品。您证明所提供的化学品符合法律要求，并且只有在法律不再要求时，您才会删除之前提供的化学品。",
          editable: !0,
          examples: ["Lead"]
      },
      "california_proposition_65.0.marketplace_id": {
          title: "california_proposition_65",
          description: "",
          tTitle: "california_proposition_65",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      california_proposition_65: {
          title: "California Proposition 65",
          description: "Provide the Proposition 65 warning information applicable to your product, if any. By removing or changing the information you certify that the previously provided warning information is no longer legally required",
          tTitle: "加州 65 号提案",
          tDescription: "提供适用于您的产品的65号提案警告信息（如有）。您可以删除或更改信息，以此证明之前提供的警告信息不再是法律要求的",
          editable: !1,
          examples: ["Furniture; Lead"]
      },
      "fcc_radio_frequency_emission_compliance.0.registration_status": {
          title: "Radio Frequency Emission & Authorization Status",
          description: "Indicate whether this product is capable of emitting radio frequency energy, and if so, what type of FCC RF equipment authorization this product has.",
          tTitle: "射频发射和授权状态",
          tDescription: "请说明该产品是否能够发射射频能量，如果能够，说明产品具有哪种类型的 FCC RF 设备授权。",
          editable: !0,
          examples: ["Product has FCC ID"]
      },
      "fcc_radio_frequency_emission_compliance.0.identification_number": {
          title: "FCC ID",
          description: "If the device has an FCC ID, provide it.",
          tTitle: "FCC ID",
          tDescription: "如果设备具有 FCC ID，请提供。",
          editable: !0,
          examples: ["2AFZZ-XMSF10G"]
      },
      "fcc_radio_frequency_emission_compliance.0.point_of_contact_name": {
          title: "SDoC Contact Name",
          description: "If the device has a Supplier's Declaration of Conformity, provide the name of the point of contact for the Responsible Party, as defined by the FCC.",
          tTitle: "SDoC 联系人姓名",
          tDescription: "如果设备具有供应商的符合性声明，请按照 FCC 的规定为责任方提供联系点名称。",
          editable: !0,
          examples: ["John Doe"]
      },
      "fcc_radio_frequency_emission_compliance.0.point_of_contact_address": {
          title: "SDoC Contact US Mailing Address",
          description: "If the device has a Supplier's Declaration of Conformity, provide a US mailing address for the Responsible Party, as defined by the FCC.",
          tTitle: "SDoC 联系人美国邮寄地址",
          tDescription: "如果设备具有供应商的符合性声明，请按照 FCC 的规定为责任方提供美国的邮寄地址。",
          editable: !0,
          examples: [`500 Oak Street\r
Chicago, IL 60707`]
      },
      "fcc_radio_frequency_emission_compliance.0.point_of_contact_email": {
          title: "SDoC Contact Email Address",
          description: 'If the device has an SDoC, provide an e-mail address (in this field) or a US phone number (in the next field) for the Responsible Party, as defined by the FCC. If you provide a phone number in the next field, you may enter "N/A" in this field.',
          tTitle: "SDoC 联系人电子邮件地址",
          tDescription: '如果设备具有 SDoC，请按照 FCC 的规定为责任方提供电子邮件地址（在此字段中）或美国电话号码（在下一个字段中）。如果在下一个字段中提供电话号码，则可以在此字段中输入 "N/A"。',
          editable: !0,
          examples: ["jdoe@example.eg"]
      },
      "fcc_radio_frequency_emission_compliance.0.point_of_contact_phone_number": {
          title: "SDOC Contact US Phone Number",
          description: 'If the device has an SDoC, provide a US phone number (in this field) or an e-mail address (in the prior field) for the Responsible Party, as defined by the FCC. If you provide an e-mail address in the prior field, you may enter "N/A" in this field.',
          tTitle: "SDOC 联系人美国电话号码",
          tDescription: '如果设备具有 SDoC，请按照 FCC 的规定为责任方提供美国电话号码（在此字段中）或电子邮件地址（在上一个字段中）。如果在上一个字段中提供了电子邮件地址，则可以在此字段中输入 "N/A"。',
          editable: !0,
          examples: ["777-767-1000"]
      },
      "fcc_radio_frequency_emission_compliance.0.marketplace_id": {
          title: "fcc_radio_frequency_emission_compliance",
          description: "",
          tTitle: "fcc_radio_frequency_emission_compliance",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      fcc_radio_frequency_emission_compliance: {
          title: "FCC Radio Frequency Emission Compliance",
          description: "Provide details on compliance to FCC regulations for products that may emit radio frequencies.",
          tTitle: "FCC 射频发射合规性",
          tDescription: "提供有关可能发射射频的产品符合 FCC 法规的详细信息。",
          editable: !1,
          examples: []
      },
      "regulatory_compliance_certification.0.regulation_type": {
          title: "Compliance Regulation Type",
          description: "Select applicable regulation type",
          tTitle: "合规监管类型",
          tDescription: "选择适用的监管类型",
          editable: !0,
          examples: ["CDPR Pest Identification"]
      },
      "regulatory_compliance_certification.0.value": {
          title: "Regulatory Identification",
          description: "Provide the regulatory identification associated with the regulation type.",
          tTitle: "监管标识",
          tDescription: "提供与监管类型相关的监管标识。",
          editable: !0,
          examples: ["1AB1331-121A"]
      },
      "regulatory_compliance_certification.0.marketplace_id": {
          title: "regulatory_compliance_certification",
          description: "",
          tTitle: "regulatory_compliance_certification",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      regulatory_compliance_certification: {
          title: "Regulatory Compliance Certification",
          description: "Provide any regulation that is relevant to the product as well as any required regulatory identications such as certification numbers.",
          tTitle: "合规认证",
          tDescription: "提供与产品相关的任何监管以及任何所需的监管标识，例如认证编号。",
          editable: !1,
          examples: [`FDA 510(k) Number,\r
F2345G234`]
      },
      "dsa_responsible_party_address.0.value": {
          title: "Responsible Person's Email or Electronic Address",
          description: "Provide the email address or URL for the EU Responsible Person, representing the product in compliance with EU regulations.",
          tTitle: "负责人的电子邮件或电子地址",
          tDescription: "说明欧盟责任人的电子邮件地址或 URL，以遵守《通用产品安全法规》(GPSR)。如果您过去已经提交过该责任人的信息，请确保使用相同的电子邮件或 URL。",
          editable: !0,
          examples: ["rsp-email@example.com"]
      },
      "dsa_responsible_party_address.0.marketplace_id": {
          title: "dsa_responsible_party_address",
          description: "",
          tTitle: "dsa_responsible_party_address",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      dsa_responsible_party_address: {
          title: "Responsible Person's Email or Electronic Address",
          description: "Provide the email address or URL for the EU Responsible Person, representing the product in compliance with EU regulations.",
          tTitle: "负责人的电子邮件或电子地址",
          tDescription: "说明欧盟责任人的电子邮件地址或 URL，以遵守《通用产品安全法规》(GPSR)。如果您过去已经提交过该责任人的信息，请确保使用相同的电子邮件或 URL。",
          editable: !1,
          examples: ["rsp-email@example.com"]
      },
      "compliance_media.0.content_type": {
          title: "Compliance Media Content Type",
          description: "Please enter the content type of the compliance document.",
          tTitle: "合规媒介内容类型",
          tDescription: "请输入合规性文档的内容类型。",
          editable: !0,
          examples: ["Safety Data Sheet"]
      },
      "compliance_media.0.content_language": {
          title: "Compliance Media Language",
          description: "Provide the language used for the content of the compliance media.",
          tTitle: "合规媒介语言",
          tDescription: "提供用于合规性媒体内容的语言。",
          editable: !0,
          examples: ["en_US"]
      },
      "compliance_media.0.source_location": {
          title: "Compliance Media Source Location",
          description: "Provide the source location of the compliance media.",
          tTitle: "合规媒体位置来源",
          tDescription: "说明合规媒体的来源位置。",
          editable: !0,
          examples: ["http://example.eg/sds_1.pdf"]
      },
      "compliance_media.0.marketplace_id": {
          title: "compliance_media",
          description: "",
          tTitle: "compliance_media",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      compliance_media: {
          title: "Compliance Media",
          description: "Provide information on the product documents you want to display on the product detail page to comply with the General Product Safety Regulation (GPSR). Alternatively, you can upload images under the PS01-PS06 variants in the Image Manager.",
          tTitle: "合规媒介",
          tDescription: "说明您想要在商品详情页面上显示的商品文档相关信息，以遵守《通用产品安全法规》(GPSR)。或者，您也可以在 Image Manager 的 PS01-PS06 变体下上传图像",
          editable: !1,
          examples: ["Installation Manual"]
      },
      "gpsr_safety_attestation.0.value": {
          title: "GPSR Safety Attestation",
          description: "Check “yes” if your product doesn’t have any warning and safety information, as it can be used safely and as intended without it.",
          tTitle: "GPSR 安全认证",
          tDescription: "如果您的产品没有任何警告和安全信息，请勾选“是”，因为即使没有此类信息，也可以安全地按预期使用。",
          editable: !0,
          examples: ["Yes"]
      },
      "gpsr_safety_attestation.0.marketplace_id": {
          title: "gpsr_safety_attestation",
          description: "",
          tTitle: "gpsr_safety_attestation",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      gpsr_safety_attestation: {
          title: "GPSR Safety Attestation",
          description: "Check “yes” if your product doesn’t have any warning and safety information, as it can be used safely and as intended without it.",
          tTitle: "GPSR 安全认证",
          tDescription: "如果您的产品没有任何警告和安全信息，请勾选“是”，因为即使没有此类信息，也可以安全地按预期使用。",
          editable: !1,
          examples: ["Yes"]
      },
      "gpsr_manufacturer_reference.0.gpsr_manufacturer_email_address": {
          title: "Manufacturer’s Email or Electronic Address",
          description: "Provide the email address or URL of the manufacturer to comply with the EU General Product Safety Regulation (GPSR). If you’ve already submitted this manufacturer’s information in the past, make sure you use the same email or URL.",
          tTitle: "制造商的电子邮件地址或电子地址",
          tDescription: "说明制造商的电子邮件地址或 URL，以遵守欧盟《通用产品安全法规》(GPSR)。如果您过去已经提交过该制造商的信息，请确保使用相同的电子邮件或 URL。",
          editable: !0,
          examples: ["abc@example.com"]
      },
      "gpsr_manufacturer_reference.0.marketplace_id": {
          title: "gpsr_manufacturer_reference",
          description: "",
          tTitle: "gpsr_manufacturer_reference",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      gpsr_manufacturer_reference: {
          title: "GPSR Manufacturer Reference",
          description: "Provide the email address or URL of the manufacturer to comply with the EU General Product Safety Regulation (GPSR). If you’ve already submitted this manufacturer’s information in the past, make sure you use the same email or URL.",
          tTitle: "GPSR 制造商参考",
          tDescription: "说明制造商的电子邮件地址或 URL，以遵守欧盟《通用产品安全法规》(GPSR)。如果您过去已经提交过该制造商的信息，请确保使用相同的电子邮件或 URL。",
          editable: !1,
          examples: ["abc@example.com"]
      },
      "ships_globally.0.value": {
          title: "Ships Globally",
          description: "Provide whether the item can be shipped globally by Amazon ",
          tTitle: "全球发货",
          tDescription: "提供该商品是否可以由亚马逊全球发货。",
          editable: !0,
          examples: ["Yes"]
      },
      "ships_globally.0.marketplace_id": {
          title: "ships_globally",
          description: "",
          tTitle: "ships_globally",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      ships_globally: {
          title: "Ships Globally",
          description: "Provide whether the item can be shipped globally by Amazon ",
          tTitle: "全球发货",
          tDescription: "提供该商品是否可以由亚马逊全球发货。",
          editable: !1,
          examples: ["Yes"]
      },
      "ghs_chemical_h_code.0.value": {
          title: "GHS Chemical H Code",
          description: "Provide the GHS chemical hazard codes for the chemical substance/mixture in order to display warnings to customers.",
          tTitle: "ghs_chemical_h_code",
          tDescription: "提供化学物质/混合物的GHS化学危险编码,以向客户显示警告。",
          editable: !0,
          examples: ["H200"]
      },
      "ghs_chemical_h_code.0.marketplace_id": {
          title: "ghs_chemical_h_code",
          description: "",
          tTitle: "ghs_chemical_h_code",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      ghs_chemical_h_code: {
          title: "GHS Chemical H Code",
          description: "Provide the GHS chemical hazard codes for the chemical substance/mixture in order to display warnings to customers.",
          tTitle: "ghs_chemical_h_code",
          tDescription: "提供化学物质/混合物的GHS化学危险编码,以向客户显示警告。",
          editable: !1,
          examples: ["H200"]
      },
      "main_product_image_locator.0.marketplace_id": {
          title: "main_product_image_locator",
          description: "",
          tTitle: "main_product_image_locator",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "main_product_image_locator.0.media_location": {
          title: "Main Image URL",
          description: "The URL where the main offer-specific image of the product is located.",
          tTitle: "主图像链接地址",
          tDescription: "产品的交付主图所在的链接地址。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.main.jpg"]
      },
      main_product_image_locator: {
          title: "Main Product Image Locator",
          description: "The attribute indicates the Main Product Image Locator of the product",
          tTitle: "主产品图片定位器",
          tDescription: "提供图片的位置和来源",
          editable: !1,
          examples: ["Feed"]
      },
      "other_product_image_locator_1.0.marketplace_id": {
          title: "other_product_image_locator_1",
          description: "",
          tTitle: "other_product_image_locator_1",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_product_image_locator_1.0.media_location": {
          title: "Other Image URL",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片链接地址",
          tDescription: "产品其他图片的链接地址 。当客户点击查看与产品相关的其他视图时，这些图像将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_product_image_locator_1: {
          title: "Other Product Image Locator 1",
          description: "The attribute indicates the Other Product Image Locator 1 of the product",
          tTitle: "其他产品图片定位器",
          tDescription: "提供图片的位置和来源",
          editable: !1,
          examples: ["Feed"]
      },
      "other_product_image_locator_2.0.marketplace_id": {
          title: "other_product_image_locator_2",
          description: "",
          tTitle: "other_product_image_locator_2",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_product_image_locator_2.0.media_location": {
          title: "Other Image URL",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的链接地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_product_image_locator_2: {
          title: "Other Product Image Locator 2",
          description: "The attribute indicates the Other Product Image Locator 2 of the product",
          tTitle: "其他产品图片定位器",
          tDescription: "提供图片的位置和来源",
          editable: !1,
          examples: ["Feed"]
      },
      "other_product_image_locator_3.0.marketplace_id": {
          title: "other_product_image_locator_3",
          description: "",
          tTitle: "other_product_image_locator_3",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_product_image_locator_3.0.media_location": {
          title: "Other Image URL",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的链接地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_product_image_locator_3: {
          title: "Other Product Image Locator 3",
          description: "The attribute indicates the Other Product Image Locator 3 of the product",
          tTitle: "其他产品图片定位器",
          tDescription: "提供图片的位置和来源",
          editable: !1,
          examples: ["Feed"]
      },
      "other_product_image_locator_4.0.marketplace_id": {
          title: "other_product_image_locator_4",
          description: "",
          tTitle: "other_product_image_locator_4",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_product_image_locator_4.0.media_location": {
          title: "Other Image URL",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的链接地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_product_image_locator_4: {
          title: "Other Product Image Locator 4",
          description: "The attribute indicates the Other Product Image Locator 4 of the product",
          tTitle: "其他产品图片定位器",
          tDescription: "提供图片的位置和来源",
          editable: !1,
          examples: ["Feed"]
      },
      "other_product_image_locator_5.0.marketplace_id": {
          title: "other_product_image_locator_5",
          description: "",
          tTitle: "other_product_image_locator_5",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_product_image_locator_5.0.media_location": {
          title: "Other Image URL",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的链接地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_product_image_locator_5: {
          title: "Other Product Image Locator 5",
          description: "The attribute indicates the Other Product Image Locator 5 of the product",
          tTitle: "其他产品图片定位器",
          tDescription: "提供图片的位置和来源",
          editable: !1,
          examples: ["Feed"]
      },
      "other_product_image_locator_6.0.marketplace_id": {
          title: "other_product_image_locator_6",
          description: "",
          tTitle: "other_product_image_locator_6",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_product_image_locator_6.0.media_location": {
          title: "Other Image URL",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的链接地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_product_image_locator_6: {
          title: "Other Product Image Locator 6",
          description: "The attribute indicates the Other Product Image Locator 6 of the product",
          tTitle: "其他产品图片定位器 6",
          tDescription: "该属性表示产品的其他产品图片定位器 6",
          editable: !1,
          examples: ["Feed"]
      },
      "other_product_image_locator_7.0.marketplace_id": {
          title: "other_product_image_locator_7",
          description: "",
          tTitle: "other_product_image_locator_7",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_product_image_locator_7.0.media_location": {
          title: "Other Image URL",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的链接地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_product_image_locator_7: {
          title: "Other Product Image Locator 7",
          description: "The attribute indicates the Other Product Image Locator 7 of the product",
          tTitle: "其他产品图片定位器 7",
          tDescription: "该属性表示产品的其他产品图片定位器 7",
          editable: !1,
          examples: ["Feed"]
      },
      "other_product_image_locator_8.0.marketplace_id": {
          title: "other_product_image_locator_8",
          description: "",
          tTitle: "other_product_image_locator_8",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "other_product_image_locator_8.0.media_location": {
          title: "Other Image URL",
          description: "The URL for additional images of your product. These images will be shown on the detail page when the customer clicks through to see other views associated with the product.",
          tTitle: "其他图片的链接地址",
          tDescription: "其他产品图片的链接地址。当客户点击查看与产品相关的其他视图时，这些图片将显示在详细信息页面上。",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.other1.jpg"]
      },
      other_product_image_locator_8: {
          title: "Other Product Image Locator 8",
          description: "The attribute indicates the Other Product Image Locator 8 of the product",
          tTitle: "其他产品图片定位器 8",
          tDescription: "该属性表示产品的其他产品图片定位器 8",
          editable: !1,
          examples: ["Feed"]
      },
      "swatch_product_image_locator.0.marketplace_id": {
          title: "swatch_product_image_locator",
          description: "",
          tTitle: "swatch_product_image_locator",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      "swatch_product_image_locator.0.media_location": {
          title: "Swatch Image URL",
          description: "The URL where an image of a color swatch from the product is located",
          tTitle: "样品图片的链接地址",
          tDescription: "产品的彩色样品图片所在的链接地址",
          editable: !0,
          examples: ["http://www.companyname.com/images/1250.swatch.jpg"]
      },
      swatch_product_image_locator: {
          title: "Swatch Product Image Locator",
          description: "The attribute indicates the Swatch Product Image Locator of the product",
          tTitle: "样本产品图片定位器",
          tDescription: "提供图片的位置和来源",
          editable: !1,
          examples: ["Feed"]
      },
      "item_dimensions_fraction.0.height": {
          title: "Item Dimensions Fraction Height",
          description: "The attribute indicates the Item Dimensions Fraction Height of the product",
          tTitle: "商品尺寸部分高度",
          tDescription: "该属性表示产品的商品尺寸小数部分高度",
          editable: !1,
          examples: []
      },
      "item_dimensions_fraction.0.height.decimal_value": {
          title: "Overall Height Derived",
          description: "Provide the item height in decimal value",
          tTitle: "所得总高度",
          tDescription: "给出商品高度十进制值",
          editable: !0,
          examples: ["3.1"]
      },
      "item_dimensions_fraction.0.height.unit": {
          title: "Item Dimensions Fraction Height Unit",
          description: "Select the corresponding unit",
          tTitle: "商品尺寸部分高度单位",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["Inches"]
      },
      "item_dimensions_fraction.0.length": {
          title: "Item Dimensions Fraction Length",
          description: "The attribute indicates the Item Dimensions Fraction Length of the product",
          tTitle: "商品尺寸部分长度",
          tDescription: "该属性表示产品的商品尺寸小数部分长度",
          editable: !1,
          examples: []
      },
      "item_dimensions_fraction.0.length.decimal_value": {
          title: "Item Dimensions Fraction Length",
          description: "Provide the item width in decimal value",
          tTitle: "商品尺寸部分长度",
          tDescription: "给出商品宽度十进制值",
          editable: !0,
          examples: ["8.66"]
      },
      "item_dimensions_fraction.0.length.unit": {
          title: "Item Dimensions Fraction Length Unit",
          description: "Select the corresponding unit",
          tTitle: "商品尺寸部分长度单位",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["Inches"]
      },
      "item_dimensions_fraction.0.width": {
          title: "Item Dimensions Fraction Width",
          description: "The attribute indicates the Item Dimensions Fraction Width of the product",
          tTitle: "商品尺寸部分宽度",
          tDescription: "该属性表示产品的商品尺寸小数部分宽度",
          editable: !1,
          examples: []
      },
      "item_dimensions_fraction.0.width.decimal_value": {
          title: "Overall Height Derived",
          description: "Provide the  item width in decimal value",
          tTitle: "所得总高度",
          tDescription: "给出商品宽度十进制值",
          editable: !0,
          examples: ["3.1"]
      },
      "item_dimensions_fraction.0.width.unit": {
          title: "Overall Height Derived",
          description: "Select the corresponding unit",
          tTitle: "所得总高度",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["Inches"]
      },
      "item_dimensions_fraction.0.marketplace_id": {
          title: "item_dimensions_fraction",
          description: "",
          tTitle: "item_dimensions_fraction",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      item_dimensions_fraction: {
          title: "Product Dimensions",
          description: "Provide the item dimensions",
          tTitle: "产品尺寸",
          tDescription: "提供商品尺寸",
          editable: !1,
          examples: ["8.66 Inches"]
      },
      "item_dimensions.0.length": {
          title: "Item Length",
          description: "Provide the length of the item",
          tTitle: "商品长度",
          tDescription: "给出商品长度",
          editable: !1,
          examples: ["10"]
      },
      "item_dimensions.0.length.value": {
          title: "Item Length",
          description: "Provide the item length as a numeric value.",
          tTitle: "商品长度",
          tDescription: "给出商品长度的数值。",
          editable: !0,
          examples: ["10"]
      },
      "item_dimensions.0.length.unit": {
          title: "Item Length Unit",
          description: "Select the unit of measure for Item Length. If a value is provided for Item Length, you must also enter the corresponding unit.",
          tTitle: "商品长度单位",
          tDescription: "选择 Item Length 的度量单位。如果给出 Item Length 的值，还必须输入相应的单位。",
          editable: !0,
          examples: ["Inches"]
      },
      "item_dimensions.0.width": {
          title: "Item Width",
          description: "Provide the width of the item",
          tTitle: "商品宽度",
          tDescription: "给出商品宽度",
          editable: !1,
          examples: ["2"]
      },
      "item_dimensions.0.width.value": {
          title: "Item Width",
          description: "Provide the item width as a numeric value.",
          tTitle: "商品宽度",
          tDescription: "给出商品宽度的数值。",
          editable: !0,
          examples: ["2"]
      },
      "item_dimensions.0.width.unit": {
          title: "Item Width Unit",
          description: "Select the unit of measure for Item Width. If a value is provided for Item Width, you must also enter the corresponding unit.",
          tTitle: "商品宽度单位",
          tDescription: "选择 Item Width 的度量单位。如果给出 Item Width 的值，还必须输入相应的单位。",
          editable: !0,
          examples: ["Inches"]
      },
      "item_dimensions.0.height": {
          title: "Item Height",
          description: "Provide the height of the item",
          tTitle: "商品高度",
          tDescription: "给出商品高度",
          editable: !1,
          examples: ["2.7 Inches"]
      },
      "item_dimensions.0.height.value": {
          title: "Item Height",
          description: "Provide the item height as a numeric value.",
          tTitle: "商品高度",
          tDescription: "给出商品高度的数值。",
          editable: !0,
          examples: ["2.7"]
      },
      "item_dimensions.0.height.unit": {
          title: "Item Height Unit",
          description: "Select the unit of measure for Item Height. If a value is provided for Item Height, you must also enter the corresponding unit.",
          tTitle: "商品高度单位",
          tDescription: "选择 Item Height 的度量单位。如果给出 Item Height 的值，还必须输入相应的单位。",
          editable: !0,
          examples: ["Inches"]
      },
      "item_dimensions.0.marketplace_id": {
          title: "item_dimensions",
          description: "",
          tTitle: "item_dimensions",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      item_dimensions: {
          title: "Item Dimensions",
          description: "Provide the item's dimensions",
          tTitle: "产品尺寸",
          tDescription: "提供商品尺寸",
          editable: !1,
          examples: ["10 inches"]
      },
      "item_package_dimensions.0.length": {
          title: "Package Length",
          description: "Provide the package length",
          tTitle: "包装长度",
          tDescription: "给出包装长度",
          editable: !1,
          examples: ["10"]
      },
      "item_package_dimensions.0.length.value": {
          title: "Item Package Length",
          description: "Provide the package length as a numeric value.",
          tTitle: "包装长度",
          tDescription: "给出包装长度的数值。",
          editable: !1,
          examples: ["10"]
      },
      "item_package_dimensions.0.length.unit": {
          title: "Package Length Unit",
          description: "Select the unit of measure for Package Length. If a value is provided for Package Length, you must also enter the corresponding unit.",
          tTitle: "包装长度单位",
          tDescription: "选择 Package Length 的度量单位。如果给出 Package Length 的值，还必须输入相应的单位。",
          editable: !1,
          examples: ["Inches"]
      },
      "item_package_dimensions.0.width": {
          title: "Package Width",
          description: "Provide the package width",
          tTitle: "包装宽度",
          tDescription: "给出包装宽度",
          editable: !1,
          examples: ["2"]
      },
      "item_package_dimensions.0.width.value": {
          title: "Item Package Width",
          description: "Provide the package width as a numeric value.",
          tTitle: "包装宽度",
          tDescription: "给出包装宽度的数值。",
          editable: !1,
          examples: ["2"]
      },
      "item_package_dimensions.0.width.unit": {
          title: "Package Width Unit",
          description: "Select the unit of measure for Package Width. If a value is provided for Package Width, you must also enter the corresponding unit.",
          tTitle: "包装宽度单位",
          tDescription: "选择 Package Width 的度量单位。如果给出 Package Width 的值，还必须输入相应的单位。",
          editable: !1,
          examples: ["Inches"]
      },
      "item_package_dimensions.0.height": {
          title: "Package Height",
          description: "Provide the package height",
          tTitle: "包装高度",
          tDescription: "给出包装高度",
          editable: !1,
          examples: ["2.7"]
      },
      "item_package_dimensions.0.height.value": {
          title: "Item Package Height",
          description: "Provide the package height as a numeric value.",
          tTitle: "包装高度",
          tDescription: "给出包装高度的数值。",
          editable: !1,
          examples: ["2.7"]
      },
      "item_package_dimensions.0.height.unit": {
          title: "Package Height Unit",
          description: "Select the unit of measure for Package Height. If a value is provided for Package Height, you must also enter the corresponding unit.",
          tTitle: "包装高度单位",
          tDescription: "选择 Package Height 的度量单位。如果给出 Package Height 的值，还必须输入相应的单位。",
          editable: !1,
          examples: ["Inches"]
      },
      "item_package_dimensions.0.marketplace_id": {
          title: "item_package_dimensions",
          description: "",
          tTitle: "item_package_dimensions",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      item_package_dimensions: {
          title: "Item Package Dimensions",
          description: "Provide the item's package dimensions",
          tTitle: "包装尺寸",
          tDescription: "package_width",
          editable: !1,
          examples: ["10 x 2 x 2.7 inches"]
      },
      "item_package_weight.0.value": {
          title: "Package Weight",
          description: "This attribute represents the weight of the item plus the packaging. If your item is shipped to the customer in multiple packages, enter the dimensions of the heaviest package",
          tTitle: "包装重量",
          tDescription: "给出包装重量的数值。",
          editable: !0,
          examples: ["0.65"]
      },
      "item_package_weight.0.unit": {
          title: "Package Weight Unit",
          description: "Select the unit of measure for Package Weight. If a value is provided for Package Weight, you must also enter the corresponding unit.",
          tTitle: "包装重量单位",
          tDescription: "选择 Package Weight 的度量单位。如果给出 Package Weight 的值，还必须输入相应的单位。",
          editable: !0,
          examples: ["Pounds"]
      },
      "item_package_weight.0.marketplace_id": {
          title: "item_package_weight",
          description: "",
          tTitle: "item_package_weight",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      item_package_weight: {
          title: "Package Weight",
          description: "The weight in original package",
          tTitle: "包裹重量",
          tDescription: "小数点左边最多10位数字，小数点右边最多2位数字。请不要使用逗号。",
          editable: !1,
          examples: ["14.89"]
      },
      "abpa_partslink_number.0.value": {
          title: "ABPA Parts Link Number",
          description: "Provide the abpa partslink number for this item",
          tTitle: "ABPA PARTSLINK 编号",
          tDescription: "给出商品的 ABPA PARTSLINK 编号",
          editable: !0,
          examples: ["FO1234567"]
      },
      "abpa_partslink_number.0.language_tag": {
          title: "abpa_partslink_number",
          description: "",
          tTitle: "abpa_partslink_number",
          tDescription: "",
          editable: !1,
          examples: ["English (United States)"],
          default_: "en_US"
      },
      "abpa_partslink_number.0.marketplace_id": {
          title: "abpa_partslink_number",
          description: "",
          tTitle: "abpa_partslink_number",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      abpa_partslink_number: {
          title: "ABPA Parts Link Number",
          description: "Provide the abpa partslink number for this item",
          tTitle: "ABPA PARTSLINK 编号",
          tDescription: "给出商品的 ABPA PARTSLINK 编号",
          editable: !1,
          examples: ["FO1234567"]
      },
      "item_display_weight.0.value": {
          title: "Item Display Weight",
          description: "Provide the item weight (numeric) if the product is a solid",
          tTitle: "商品显示重量",
          tDescription: "如果产品是固体，则提供商品重量（数值）",
          editable: !0,
          examples: ["20.0, 50.0"]
      },
      "item_display_weight.0.unit": {
          title: "Item Display Weight Unit",
          description: "Select the corresponding unit",
          tTitle: "商品显示重量单位",
          tDescription: "选择相应的单位",
          editable: !0,
          examples: ["Ounces, Pounds"]
      },
      "item_display_weight.0.marketplace_id": {
          title: "item_display_weight",
          description: "",
          tTitle: "item_display_weight",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      item_display_weight: {
          title: "Item Display Weight",
          description: "Provide the item weight if the product is a solid",
          tTitle: "净重",
          tDescription: "小数点左边最多10 位数字，小数点右边最多2 位数字。请不要使用逗号。",
          editable: !1,
          examples: []
      },
      "number_of_boxes.0.value": {
          title: "Number of Boxes",
          description: "Provide the number of boxes that the product will be shipped in",
          tTitle: "箱子数量",
          tDescription: "提供运输产品所用的箱子数量",
          editable: !0,
          examples: ["5"]
      },
      "number_of_boxes.0.marketplace_id": {
          title: "number_of_boxes",
          description: "",
          tTitle: "number_of_boxes",
          tDescription: "",
          editable: !1,
          examples: ["Amazon.com"],
          default_: "ATVPDKIKX0DER"
      },
      number_of_boxes: {
          title: "Number of Boxes",
          description: "Provide the number of boxes that the product comes in",
          tTitle: "箱子数量",
          tDescription: "提供产品中包含的箱子数量",
          editable: !1,
          examples: ["5"]
      }
  }
    , be = (e, i) => {
      i({
          name: "item_name",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "item_name.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_name.0.value",
          required: !0,
          maxItems: 1,
          minLength: 0,
          maxLength: 200,
          fieldType: "string"
      }),
      i({
          name: "item_name.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "item_name.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "brand",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "brand.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "brand.0.value",
          required: !0,
          maxItems: 1,
          minLength: 1,
          maxLength: 100,
          fieldType: "string"
      }),
      i({
          name: "brand.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "brand.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "externally_assigned_product_identifier",
          fieldType: "string"
      }),
      i({
          name: "externally_assigned_product_identifier.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "externally_assigned_product_identifier.0.type",
          required: !0,
          maxItems: 1,
          options: ["ean", "gtin", "upc"],
          optionLabels: {
              ean: "EAN",
              gtin: "GTIN",
              upc: "UPC"
          },
          fieldType: "string"
      }),
      i({
          name: "externally_assigned_product_identifier.0.value",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "externally_assigned_product_identifier.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "merchant_suggested_asin",
          fieldType: "string"
      }),
      i({
          name: "merchant_suggested_asin.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "merchant_suggested_asin.0.value",
          required: !0,
          maxItems: 1,
          minLength: 10,
          maxLength: 10,
          maxUtf8ByteLength: 40,
          fieldType: "string"
      }),
      i({
          name: "merchant_suggested_asin.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "supplier_declared_has_product_identifier_exemption",
          fieldType: "string"
      }),
      i({
          name: "supplier_declared_has_product_identifier_exemption.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "supplier_declared_has_product_identifier_exemption.0.value",
          required: !0,
          maxItems: 1,
          options: [!1, !0],
          optionLabels: {
              false: "No",
              true: "Yes"
          },
          fieldType: "boolean"
      }),
      i({
          name: "supplier_declared_has_product_identifier_exemption.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_type_keyword",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "item_type_keyword.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_type_keyword.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 20090,
          fieldType: "string"
      }),
      i({
          name: "item_type_keyword.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "package_level",
          fieldType: "string"
      }),
      i({
          name: "package_level.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "package_level.0.value",
          required: !0,
          maxItems: 1,
          options: ["case", "pallet", "unit"],
          optionLabels: {
              case: "Case",
              pallet: "Pallet",
              unit: "Unit"
          },
          fieldType: "string"
      }),
      i({
          name: "package_level.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "package_contains_sku",
          fieldType: "string"
      }),
      i({
          name: "package_contains_sku.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "package_contains_sku.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "package_contains_sku.0.quantity",
          required: !0,
          maxItems: 1,
          minimum: 1,
          maximum: 250,
          fieldType: "integer"
      }),
      i({
          name: "package_contains_sku.0.sku",
          required: !0,
          maxItems: 1,
          minLength: 1,
          maxLength: 40,
          minUtf8ByteLength: 1,
          maxUtf8ByteLength: 40,
          fieldType: "string"
      }),
      i({
          name: "age_gender_category",
          fieldType: "string"
      }),
      i({
          name: "age_gender_category.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "age_gender_category.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2398,
          fieldType: "string"
      }),
      i({
          name: "age_gender_category.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "age_gender_category.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "model_number",
          fieldType: "string"
      }),
      i({
          name: "model_number.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "model_number.0.value",
          required: !0,
          maxItems: 1,
          minLength: 0,
          maxLength: 40,
          maxUtf8ByteLength: 40,
          fieldType: "string"
      }),
      i({
          name: "model_number.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "model_name",
          fieldType: "string"
      }),
      i({
          name: "model_name.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "model_name.0.value",
          required: !0,
          maxItems: 1,
          minLength: 0,
          maxLength: 120,
          fieldType: "string"
      }),
      i({
          name: "model_name.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "model_name.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "manufacturer",
          fieldType: "string"
      }),
      i({
          name: "manufacturer.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "manufacturer.0.value",
          required: !0,
          maxItems: 1,
          minLength: 0,
          maxLength: 100,
          fieldType: "string"
      }),
      i({
          name: "manufacturer.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "manufacturer.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "skip_offer",
          fieldType: "string"
      }),
      i({
          name: "skip_offer.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "skip_offer.0.value",
          required: !0,
          maxItems: 1,
          options: [!1, !0],
          optionLabels: {
              false: "No",
              true: "Yes"
          },
          fieldType: "boolean"
      }),
      i({
          name: "skip_offer.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "fulfillment_availability",
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0.fulfillment_channel_code",
          required: !0,
          maxItems: 1,
          options: ["AMAZON_NA", "DEFAULT"],
          optionLabels: {
              AMAZON_NA: "AMAZON_NA",
              DEFAULT: "DEFAULT"
          },
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0.quantity",
          maxItems: 1,
          minimum: 0,
          fieldType: "integer"
      }),
      i({
          name: "fulfillment_availability.0.lead_time_to_ship_max_days",
          maxItems: 1,
          minimum: 0,
          maximum: 120,
          fieldType: "integer"
      }),
      i({
          name: "fulfillment_availability.0.restock_date",
          maxItems: 1,
          fieldType: "datetime"
      }),
      i({
          name: "fulfillment_availability.0.is_inventory_available",
          maxItems: 1,
          options: [!1, !0],
          optionLabels: {
              false: "Disabled",
              true: "Enabled"
          },
          fieldType: "boolean"
      }),
      i({
          name: "map_policy",
          fieldType: "string"
      }),
      i({
          name: "map_policy.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "map_policy.0.value",
          required: !0,
          maxItems: 1,
          options: ["policy_1", "policy_10", "policy_11", "policy_2", "policy_3", "policy_4", "policy_5", "policy_6", "policy_7", "policy_8", "policy_9"],
          optionLabels: {
              policy_1: "Policy 1",
              policy_10: "Policy 10",
              policy_11: "Policy 11",
              policy_2: "Policy 2",
              policy_3: "Policy 3",
              policy_4: "Policy 4",
              policy_5: "Policy 5",
              policy_6: "Policy 6",
              policy_7: "Policy 7",
              policy_8: "Policy 8",
              policy_9: "Policy 9"
          },
          fieldType: "string"
      }),
      i({
          name: "map_policy.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.map_price",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.map_price.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.map_price.0.schedule",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.map_price.0.schedule.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.map_price.0.schedule.0.value_with_tax",
          fieldType: "number"
      }),
      i({
          name: "purchasable_offer.0.currency",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["USD"],
          optionLabels: {
              USD: "USD"
          }
      }),
      i({
          name: "purchasable_offer.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "purchasable_offer.0.our_price",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.our_price.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.our_price.0.schedule",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.our_price.0.schedule.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.our_price.0.schedule.0.value_with_tax",
          required: !0,
          fieldType: "number"
      }),
      i({
          name: "purchasable_offer.0.automated_pricing_merchandising_rule_plan",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.minimum_seller_allowed_price",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.minimum_seller_allowed_price.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.minimum_seller_allowed_price.0.schedule",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax",
          fieldType: "number"
      }),
      i({
          name: "purchasable_offer.0.maximum_seller_allowed_price",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.maximum_seller_allowed_price.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.maximum_seller_allowed_price.0.schedule",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax",
          fieldType: "number"
      }),
      i({
          name: "purchasable_offer.0.discounted_price",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.discounted_price.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.discounted_price.0.schedule",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.discounted_price.0.schedule.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax",
          required: !0,
          fieldType: "number"
      }),
      i({
          name: "purchasable_offer.0.discounted_price.0.schedule.0.start_at",
          required: !0,
          fieldType: "datetime"
      }),
      i({
          name: "purchasable_offer.0.discounted_price.0.schedule.0.end_at",
          required: !0,
          fieldType: "datetime"
      }),
      i({
          name: "purchasable_offer.0.start_at",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.start_at.value",
          maxItems: 1,
          fieldType: "datetime"
      }),
      i({
          name: "purchasable_offer.0.end_at",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.end_at.value",
          maxItems: 1,
          fieldType: "datetime"
      }),
      i({
          name: "purchasable_offer.0.audience",
          maxItems: 1,
          options: ["ALL"],
          optionLabels: {
              ALL: "Sell on Amazon"
          },
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.0",
          required: !0,
          maxItems: 0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.0.schedule",
          required: !0,
          maxItems: 0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.0.schedule.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type",
          required: !0,
          options: ["fixed", "percent"],
          optionLabels: {
              fixed: "Fixed",
              percent: "Percent"
          },
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0",
          required: !0,
          maxItems: 5,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound",
          required: !0,
          maxItems: 5,
          minimum: 0,
          fieldType: "integer"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value",
          required: !0,
          maxItems: 5,
          minimum: 0,
          fieldType: "number"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0",
          required: !0,
          maxItems: 0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy",
          required: !0,
          maxItems: 0,
          options: ["bulk_by_uom", "catch_by_uom", "produce_by_uom"],
          optionLabels: {
              bulk_by_uom: "Bulk by UOM",
              catch_by_uom: "Catch by UOM",
              produce_by_uom: "Produce by UOM"
          },
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement",
          maxItems: 0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type",
          required: !0,
          maxItems: 0,
          options: ["weight"],
          optionLabels: {
              weight: "Weight"
          },
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit",
          required: !0,
          maxItems: 0,
          options: ["grams", "kilograms", "ounces", "pounds"],
          optionLabels: {
              grams: "Grams",
              kilograms: "Kilograms",
              ounces: "Ounces",
              pounds: "Pounds"
          },
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value",
          required: !0,
          maxItems: 0,
          maxLength: 12,
          minimum: .05,
          maximum: 1e3,
          multipleOf: .01,
          fieldType: "number"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement",
          required: !0,
          maxItems: 0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type",
          required: !0,
          maxItems: 0,
          options: ["count", "weight"],
          optionLabels: {
              count: "Count",
              weight: "Weight"
          },
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit",
          required: !0,
          maxItems: 0,
          options: ["grams", "kilograms", "ounces", "pounds", "units"],
          optionLabels: {
              grams: "Grams",
              kilograms: "Kilograms",
              ounces: "Ounces",
              pounds: "Pounds",
              units: "Units"
          },
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement",
          required: !0,
          maxItems: 0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type",
          required: !0,
          maxItems: 0,
          options: ["count", "weight"],
          optionLabels: {
              count: "Count",
              weight: "Weight"
          },
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit",
          required: !0,
          maxItems: 0,
          options: ["grams", "kilograms", "ounces", "pounds", "units"],
          optionLabels: {
              grams: "Grams",
              kilograms: "Kilograms",
              ounces: "Ounces",
              pounds: "Pounds",
              units: "Units"
          },
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value",
          required: !0,
          maxItems: 0,
          maxLength: 12,
          minimum: .05,
          maximum: 1e3,
          multipleOf: .01,
          fieldType: "number"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification",
          required: !0,
          maxItems: 0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum",
          required: !0,
          maxItems: 0,
          maxLength: 12,
          minimum: .05,
          maximum: 1e3,
          multipleOf: .01,
          fieldType: "number"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum",
          required: !0,
          maxItems: 0,
          maxLength: 12,
          minimum: .05,
          maximum: 1e3,
          multipleOf: .01,
          fieldType: "number"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment",
          required: !0,
          maxItems: 0,
          maxLength: 12,
          minimum: .05,
          maximum: 100,
          multipleOf: .01,
          fieldType: "number"
      }),
      i({
          name: "condition_type",
          fieldType: "string"
      }),
      i({
          name: "condition_type.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "condition_type.0.value",
          required: !0,
          maxItems: 1,
          options: ["club_club", "collectible_acceptable", "collectible_good", "collectible_like_new", "collectible_very_good", "new_new", "new_oem", "new_open_box", "refurbished_refurbished", "used_acceptable", "used_good", "used_like_new", "used_very_good"],
          optionLabels: {
              club_club: "Club",
              collectible_acceptable: "Collectible - Acceptable",
              collectible_good: "Collectible - Good",
              collectible_like_new: "Collectible - Like New",
              collectible_very_good: "Collectible - Very Good",
              new_new: "New",
              new_oem: "New - OEM",
              new_open_box: "New - Open Box",
              refurbished_refurbished: "Refurbished",
              used_acceptable: "Used - Acceptable",
              used_good: "Used - Good",
              used_like_new: "Used - Like New",
              used_very_good: "Used - Very Good"
          },
          fieldType: "string"
      }),
      i({
          name: "condition_type.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "condition_note",
          fieldType: "string"
      }),
      i({
          name: "condition_note.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "condition_note.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2204,
          fieldType: "string"
      }),
      i({
          name: "condition_note.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "condition_note.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "list_price",
          fieldType: "string"
      }),
      i({
          name: "list_price.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "list_price.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 20,
          minimum: 0,
          multipleOf: .01,
          fieldType: "number"
      }),
      i({
          name: "list_price.0.currency",
          required: !0,
          maxItems: 1,
          options: ["USD"],
          optionLabels: {
              USD: "USD"
          },
          fieldType: "string"
      }),
      i({
          name: "list_price.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "product_tax_code",
          fieldType: "string"
      }),
      i({
          name: "product_tax_code.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "product_tax_code.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 949,
          fieldType: "string"
      }),
      i({
          name: "product_tax_code.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "merchant_release_date",
          fieldType: "string"
      }),
      i({
          name: "merchant_release_date.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "merchant_release_date.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "merchant_release_date.0.value",
          required: !0,
          maxItems: 1,
          fieldType: "datetime"
      }),
      i({
          name: "merchant_shipping_group",
          fieldType: "string"
      }),
      i({
          name: "merchant_shipping_group.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "merchant_shipping_group.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 100,
          fieldType: "string"
      }),
      i({
          name: "merchant_shipping_group.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "max_order_quantity",
          fieldType: "string"
      }),
      i({
          name: "max_order_quantity.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "max_order_quantity.0.value",
          required: !0,
          maxItems: 1,
          minimum: 1,
          fieldType: "integer"
      }),
      i({
          name: "max_order_quantity.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "gift_options",
          fieldType: "string"
      }),
      i({
          name: "gift_options.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "gift_options.0.can_be_messaged",
          maxItems: 1,
          options: [!1, !0],
          optionLabels: {
              false: "No",
              true: "Yes"
          },
          fieldType: "boolean"
      }),
      i({
          name: "gift_options.0.can_be_wrapped",
          maxItems: 1,
          options: [!1, !0],
          optionLabels: {
              false: "No",
              true: "Yes"
          },
          fieldType: "boolean"
      }),
      i({
          name: "gift_options.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "main_offer_image_locator",
          fieldType: "string"
      }),
      i({
          name: "main_offer_image_locator.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "main_offer_image_locator.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "main_offer_image_locator.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_1",
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_1.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_1.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_offer_image_locator_1.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_2",
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_2.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_2.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_offer_image_locator_2.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_3",
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_3.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_3.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_offer_image_locator_3.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_4",
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_4.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_4.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_offer_image_locator_4.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_5",
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_5.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_offer_image_locator_5.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_offer_image_locator_5.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "supplemental_condition_information",
          fieldType: "string"
      }),
      i({
          name: "supplemental_condition_information.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "supplemental_condition_information.0.accessories",
          maxItems: 1,
          options: ["generic", "not_applicable", "not_included", "oem"],
          optionLabels: {
              generic: "Generic",
              not_applicable: "Not Applicable",
              not_included: "Not Included",
              oem: "OEM"
          },
          fieldType: "string"
      }),
      i({
          name: "supplemental_condition_information.0.battery_life_percentage",
          maxItems: 1,
          options: ["equal_to_or_less_than_60_percent", "greater_than_60_percent", "greater_than_70_percent", "greater_than_80_percent", "greater_than_90_percent", "no_battery"],
          optionLabels: {
              equal_to_or_less_than_60_percent: "=<60%",
              greater_than_60_percent: ">60%",
              greater_than_70_percent: ">70%",
              greater_than_80_percent: ">80%",
              greater_than_90_percent: ">90%",
              no_battery: "No Battery"
          },
          fieldType: "string"
      }),
      i({
          name: "supplemental_condition_information.0.cosmetic",
          maxItems: 1,
          options: ["almost_no_sign_of_use", "highly_visible_sign_of_use", "light_sign_of_use", "moderately_visible_sign_of_use", "no_sign_of_use", "unknown"],
          optionLabels: {
              almost_no_sign_of_use: "Almost No Sign Of Use",
              highly_visible_sign_of_use: "Highly Visible Sign Of Use",
              light_sign_of_use: "Light Sign Of Use",
              moderately_visible_sign_of_use: "Moderately Visible Sign Of Use",
              no_sign_of_use: "No Sign Of Use",
              unknown: "Unknown"
          },
          fieldType: "string"
      }),
      i({
          name: "supplemental_condition_information.0.features",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "supplemental_condition_information.0.features.0",
          required: !0,
          maxItems: 10,
          options: ["green_refurbishment", "parts_inspected", "parts_replaced", "with_tags"],
          optionLabels: {
              green_refurbishment: "Green Refurbishment",
              parts_inspected: "Parts Inspected",
              parts_replaced: "Parts Replaced",
              with_tags: "With Tags"
          },
          fieldType: "string"
      }),
      i({
          name: "supplemental_condition_information.0.functional_condition",
          maxItems: 1,
          options: ["fully_functional", "partly_functional", "unknown"],
          optionLabels: {
              fully_functional: "Fully Functional",
              partly_functional: "Partly Functional",
              unknown: "Unknown"
          },
          fieldType: "string"
      }),
      i({
          name: "supplemental_condition_information.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "supplemental_condition_information.0.packaging",
          maxItems: 1,
          options: ["amazon", "generic", "not_applicable", "oem_original", "oem_pre_owned"],
          optionLabels: {
              amazon: "Amazon",
              generic: "Generic",
              not_applicable: "Not Applicable",
              oem_original: "OEM Original",
              oem_pre_owned: "OEM Pre-Owned"
          },
          fieldType: "string"
      }),
      i({
          name: "supplemental_condition_information.0.source_type",
          maxItems: 1,
          options: ["as_is", "cpo", "no_data", "refurbished_amazon", "refurbished_oem", "refurbished_third_party", "returned_never_used", "returned_used"],
          optionLabels: {
              as_is: "As Is",
              cpo: "CPO",
              no_data: "No Data",
              refurbished_amazon: "Refurbished Amazon",
              refurbished_oem: "Refurbished OEM",
              refurbished_third_party: "Refurbished Third Party",
              returned_never_used: "Returned Never Used",
              returned_used: "Returned Used"
          },
          fieldType: "string"
      }),
      i({
          name: "handmade_classification",
          fieldType: "string"
      }),
      i({
          name: "handmade_classification.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "handmade_classification.0.value",
          required: !0,
          maxItems: 1,
          options: ["hand_altered", "hand_designed", "handcrafted", "repurposed", "upcycled"],
          optionLabels: {
              hand_altered: "Hand-Altered",
              hand_designed: "Hand-Designed",
              handcrafted: "Handcrafted",
              repurposed: "Repurposed",
              upcycled: "Upcycled"
          },
          fieldType: "string"
      }),
      i({
          name: "handmade_classification.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "product_description",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "product_description.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "product_description.0.value",
          required: !0,
          maxItems: 1,
          maxUtf8ByteLength: 1e4,
          fieldType: "string"
      }),
      i({
          name: "product_description.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "product_description.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "bullet_point",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "bullet_point.0",
          required: !0,
          maxItems: 10,
          fieldType: "string"
      }),
      i({
          name: "bullet_point.0.value",
          required: !0,
          maxItems: 10,
          minLength: 0,
          maxLength: 700,
          fieldType: "string"
      }),
      i({
          name: "bullet_point.0.language_tag",
          required: !0,
          maxItems: 10,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "bullet_point.0.marketplace_id",
          maxItems: 10,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "generic_keyword",
          fieldType: "string"
      }),
      i({
          name: "generic_keyword.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "generic_keyword.0.value",
          required: !0,
          maxItems: 1,
          minLength: 0,
          maxLength: 500,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "generic_keyword.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "generic_keyword.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "style",
          fieldType: "string"
      }),
      i({
          name: "style.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "style.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2200,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "style.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "style.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "material",
          fieldType: "string"
      }),
      i({
          name: "material.0",
          required: !0,
          maxItems: 14,
          fieldType: "string"
      }),
      i({
          name: "material.0.value",
          required: !0,
          maxItems: 14,
          maxUtf8ByteLength: 2e3,
          fieldType: "string",
          tipsOptions: ["ABS Plastic", "Acrylic", "Aluminum", "Chrome", "Heavy Duty Vinyl", "Leather", "Metal", "Nylon", "Pewter", "Plastic", "Polyester", "Polyvinyl Chloride", "Rubber", "Stainless Steel", "Steel", "Vinyl"],
          optionLabels: {
              "ABS Plastic": "ABS Plastic",
              Acrylic: "Acrylic",
              Aluminum: "Aluminum",
              Chrome: "Chrome",
              "Heavy Duty Vinyl": "Heavy Duty Vinyl",
              Leather: "Leather",
              Metal: "Metal",
              Nylon: "Nylon",
              Pewter: "Pewter",
              Plastic: "Plastic",
              Polyester: "Polyester",
              "Polyvinyl Chloride": "Polyvinyl Chloride",
              Rubber: "Rubber",
              "Stainless Steel": "Stainless Steel",
              Steel: "Steel",
              Vinyl: "Vinyl"
          }
      }),
      i({
          name: "material.0.language_tag",
          required: !0,
          maxItems: 14,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "material.0.marketplace_id",
          maxItems: 14,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "fabric_type",
          fieldType: "string"
      }),
      i({
          name: "fabric_type.0",
          required: !0,
          maxItems: 1e3,
          fieldType: "string"
      }),
      i({
          name: "fabric_type.0.value",
          required: !0,
          maxItems: 1e3,
          maxLength: 2311,
          fieldType: "string"
      }),
      i({
          name: "fabric_type.0.language_tag",
          required: !0,
          maxItems: 1e3,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "fabric_type.0.marketplace_id",
          maxItems: 1e3,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "number_of_items",
          fieldType: "string"
      }),
      i({
          name: "number_of_items.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "number_of_items.0.value",
          required: !0,
          maxItems: 1,
          minimum: 0,
          maximum: 999999999999,
          fieldType: "integer"
      }),
      i({
          name: "number_of_items.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_package_quantity",
          fieldType: "string"
      }),
      i({
          name: "item_package_quantity.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_package_quantity.0.value",
          required: !0,
          maxItems: 1,
          minimum: 1,
          fieldType: "integer"
      }),
      i({
          name: "item_package_quantity.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "color",
          fieldType: "string"
      }),
      i({
          name: "color.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "color.0.value",
          maxItems: 1,
          minLength: 0,
          maxLength: 50,
          fieldType: "string"
      }),
      i({
          name: "color.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "color.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "size",
          fieldType: "string"
      }),
      i({
          name: "size.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "size.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 50,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "size.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "size.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "part_number",
          fieldType: "string"
      }),
      i({
          name: "part_number.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "part_number.0.value",
          required: !0,
          maxItems: 1,
          minLength: 0,
          maxLength: 40,
          fieldType: "string"
      }),
      i({
          name: "part_number.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_shape",
          fieldType: "string"
      }),
      i({
          name: "item_shape.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_shape.0.value",
          required: !0,
          maxItems: 1,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "item_shape.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "item_shape.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "fit_type",
          fieldType: "string"
      }),
      i({
          name: "fit_type.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "fit_type.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2201,
          fieldType: "string",
          tipsOptions: ["Universal Fit", "Vehicle Specific"],
          optionLabels: {
              "Universal Fit": "Universal Fit",
              "Vehicle Specific": "Vehicle Specific"
          }
      }),
      i({
          name: "fit_type.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "fit_type.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "oe_manufacturer",
          fieldType: "string"
      }),
      i({
          name: "oe_manufacturer.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "oe_manufacturer.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2200,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "oe_manufacturer.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "oe_manufacturer.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "oem_equivalent_part_number",
          fieldType: "string"
      }),
      i({
          name: "oem_equivalent_part_number.0",
          required: !0,
          maxItems: 490,
          fieldType: "string"
      }),
      i({
          name: "oem_equivalent_part_number.0.value",
          required: !0,
          maxItems: 490,
          maxLength: 2200,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "oem_equivalent_part_number.0.marketplace_id",
          maxItems: 490,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "configuration",
          fieldType: "string"
      }),
      i({
          name: "configuration.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "configuration.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 3261,
          fieldType: "string"
      }),
      i({
          name: "configuration.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "configuration.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "auto_part_position",
          fieldType: "string"
      }),
      i({
          name: "auto_part_position.0",
          required: !0,
          maxItems: 2,
          fieldType: "string"
      }),
      i({
          name: "auto_part_position.0.value",
          required: !0,
          maxItems: 2,
          options: ["bottom", "bottom_left", "bottom_right", "center", "driveline", "front", "front_center", "front_inner", "front_inside", "front_left", "front_left_inner", "front_left_lower", "front_left_outer", "front_left_upper", "front_lower", "front_outer", "front_outside", "front_right", "front_right_inner", "front_right_lower", "front_right_outer", "front_right_upper", "front_upper", "inner", "inside", "inside_center", "intermediate", "left", "left_center", "left_inner", "left_inside", "left_intermediate", "left_lower", "left_outer", "left_outside", "left_upper", "lower", "outer", "outside", "rear", "rear_center", "rear_inner", "rear_inside", "rear_left", "rear_left_inner", "rear_left_lower", "rear_left_outer", "rear_left_upper", "rear_lower", "rear_outer", "rear_outside", "rear_right", "rear_right_inner", "rear_right_lower", "rear_right_outer", "rear_right_upper", "rear_upper", "right", "right_center", "right_inner", "right_inside", "right_intermediate", "right_lower", "right_outer", "right_outside", "right_upper", "top", "top_left", "top_right", "unknown", "upper"],
          optionLabels: {
              bottom: "Bottom",
              bottom_left: "Bottom Left",
              bottom_right: "Bottom Right",
              center: "Center",
              driveline: "Driveline",
              front: "Front",
              front_center: "Front Center",
              front_inner: "Front Inner",
              front_inside: "Front Inside",
              front_left: "Front Left",
              front_left_inner: "Front Left Inner",
              front_left_lower: "Front Left Lower",
              front_left_outer: "Front Left Outer",
              front_left_upper: "Front Left Upper",
              front_lower: "Front Lower",
              front_outer: "Front Outer",
              front_outside: "Front Outside",
              front_right: "Front Right",
              front_right_inner: "Front Right Inner",
              front_right_lower: "Front Right Lower",
              front_right_outer: "Front Right Outer",
              front_right_upper: "Front Right Upper",
              front_upper: "Front Upper",
              inner: "Inner",
              inside: "Inside",
              inside_center: "Inside Center",
              intermediate: "Intermediate",
              left: "Left",
              left_center: "Left Center",
              left_inner: "Left Inner",
              left_inside: "Left Inside",
              left_intermediate: "Left Intermediate",
              left_lower: "Left Lower",
              left_outer: "Left Outer",
              left_outside: "Left Outside",
              left_upper: "Left Upper",
              lower: "Lower",
              outer: "Outer",
              outside: "Outside",
              rear: "Rear",
              rear_center: "Rear Center",
              rear_inner: "Rear Inner",
              rear_inside: "Rear Inside",
              rear_left: "Rear Left",
              rear_left_inner: "Rear Left Inner",
              rear_left_lower: "Rear Left Lower",
              rear_left_outer: "Rear Left Outer",
              rear_left_upper: "Rear Left Upper",
              rear_lower: "Rear Lower",
              rear_outer: "Rear Outer",
              rear_outside: "Rear Outside",
              rear_right: "Rear Right",
              rear_right_inner: "Rear Right Inner",
              rear_right_lower: "Rear Right Lower",
              rear_right_outer: "Rear Right Outer",
              rear_right_upper: "Rear Right Upper",
              rear_upper: "Rear Upper",
              right: "Right",
              right_center: "Right Center",
              right_inner: "Right Inner",
              right_inside: "Right Inside",
              right_intermediate: "Right Intermediate",
              right_lower: "Right Lower",
              right_outer: "Right Outer",
              right_outside: "Right Outside",
              right_upper: "Right Upper",
              top: "Top",
              top_left: "Top Left",
              top_right: "Top Right",
              unknown: "Unknown",
              upper: "Upper"
          },
          fieldType: "string"
      }),
      i({
          name: "auto_part_position.0.marketplace_id",
          maxItems: 2,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "compatibility_options",
          fieldType: "string"
      }),
      i({
          name: "compatibility_options.0",
          required: !0,
          maxItems: 3,
          fieldType: "string"
      }),
      i({
          name: "compatibility_options.0.value",
          required: !0,
          maxItems: 3,
          maxLength: 1961,
          fieldType: "string"
      }),
      i({
          name: "compatibility_options.0.language_tag",
          required: !0,
          maxItems: 3,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "compatibility_options.0.marketplace_id",
          maxItems: 3,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "part_type_id",
          fieldType: "string"
      }),
      i({
          name: "part_type_id.0",
          required: !0,
          maxItems: 7,
          fieldType: "string"
      }),
      i({
          name: "part_type_id.0.value",
          required: !0,
          maxItems: 7,
          maxLength: 734,
          fieldType: "string"
      }),
      i({
          name: "part_type_id.0.marketplace_id",
          maxItems: 7,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "capacity",
          fieldType: "string"
      }),
      i({
          name: "capacity.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "capacity.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 5e3,
          minimum: 0,
          fieldType: "number"
      }),
      i({
          name: "capacity.0.unit",
          required: !0,
          maxItems: 1,
          options: ["centiliters", "centiliters_per_second", "cubic_centimeters", "cubic_feet", "cubic_inches", "cubic_meters", "cubic_yards", "cups", "deciliters", "fluid_ounces", "gallons_per_day", "gallons", "grams", "hundredths_pounds", "imperial_gallons", "kilograms", "liters_per_day", "liters_per_second", "liters", "load", "liters_per_minute", "microliters", "microliters_per_minute", "microliters_per_second", "milligrams", "milliliters", "milliliters_per_second", "milliliters_per_minute", "nanoliters", "nanoliters_per_minute", "nanoliters_per_second", "ounces", "picoliters", "picoliters_per_minute", "picoliters_per_second", "pints", "pounds", "quarts", "tons"],
          optionLabels: {
              centiliters: "Centiliters",
              centiliters_per_second: "Centiliters per Second",
              cubic_centimeters: "Cubic Centimeters",
              cubic_feet: "Cubic Feet",
              cubic_inches: "Cubic Inches",
              cubic_meters: "Cubic Meters",
              cubic_yards: "Cubic Yards",
              cups: "Cups",
              deciliters: "Deciliters",
              fluid_ounces: "Fluid Ounces",
              gallons_per_day: "G/day",
              gallons: "Gallons",
              grams: "Grams",
              hundredths_pounds: "Hundredths Pounds",
              imperial_gallons: "Imperial Gallons",
              kilograms: "Kilograms",
              liters_per_day: "L/day",
              liters_per_second: "L/sec",
              liters: "Liters",
              load: "load",
              liters_per_minute: "LPM",
              microliters: "Microliters",
              microliters_per_minute: "Microliters per Minute",
              microliters_per_second: "Microliters per Second",
              milligrams: "Milligrams",
              milliliters: "Milliliters",
              milliliters_per_second: "Milliliters per Second",
              milliliters_per_minute: "ml/min",
              nanoliters: "Nanoliters",
              nanoliters_per_minute: "Nanoliters per Minute",
              nanoliters_per_second: "Nanoliters per Second",
              ounces: "ounces",
              picoliters: "Picoliters",
              picoliters_per_minute: "Picoliters per Minute",
              picoliters_per_second: "Picoliters per Second",
              pints: "Pints",
              pounds: "Pounds",
              quarts: "Quarts",
              tons: "Tons"
          },
          fieldType: "string"
      }),
      i({
          name: "capacity.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "is_assembly_required",
          fieldType: "string"
      }),
      i({
          name: "is_assembly_required.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "is_assembly_required.0.value",
          required: !0,
          maxItems: 1,
          options: [!1, !0],
          optionLabels: {
              false: "No",
              true: "Yes"
          },
          fieldType: "boolean"
      }),
      i({
          name: "is_assembly_required.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "lens",
          fieldType: "string"
      }),
      i({
          name: "lens.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "lens.0.color",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "lens.0.color.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "lens.0.color.0.value",
          required: !0,
          maxItems: 1,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "lens.0.color.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "lens.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_display_dimensions",
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0.depth",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0.depth.value",
          required: !0,
          maxItems: 1,
          maxLength: 5e3,
          fieldType: "number"
      }),
      i({
          name: "item_display_dimensions.0.depth.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0.diameter",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0.diameter.value",
          required: !0,
          maxItems: 1,
          maxLength: 5e3,
          fieldType: "number"
      }),
      i({
          name: "item_display_dimensions.0.diameter.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0.height",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0.height.value",
          required: !0,
          maxItems: 1,
          maxLength: 5e3,
          fieldType: "number"
      }),
      i({
          name: "item_display_dimensions.0.height.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0.length",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0.length.value",
          required: !0,
          maxItems: 1,
          maxLength: 5e3,
          fieldType: "number"
      }),
      i({
          name: "item_display_dimensions.0.length.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_display_dimensions.0.width",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_display_dimensions.0.width.value",
          required: !0,
          maxItems: 1,
          maxLength: 5e3,
          fieldType: "number"
      }),
      i({
          name: "item_display_dimensions.0.width.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "flavor",
          fieldType: "string"
      }),
      i({
          name: "flavor.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "flavor.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2200,
          fieldType: "string"
      }),
      i({
          name: "flavor.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "flavor.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "connectivity_technology",
          fieldType: "string"
      }),
      i({
          name: "connectivity_technology.0",
          required: !0,
          maxItems: 24,
          fieldType: "string"
      }),
      i({
          name: "connectivity_technology.0.value",
          required: !0,
          maxItems: 24,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "connectivity_technology.0.language_tag",
          required: !0,
          maxItems: 24,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "connectivity_technology.0.marketplace_id",
          maxItems: 24,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "volume_capacity_name",
          fieldType: "string"
      }),
      i({
          name: "volume_capacity_name.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "volume_capacity_name.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2200,
          fieldType: "string"
      }),
      i({
          name: "volume_capacity_name.0.unit",
          maxItems: 1,
          options: ["thirty_seconds_inches", "amperes_per_watts", "accelerated_reader", "adult_mx", "adult_uk", "adult_us", "afghan_afghani", "albanian_lek", "algerian_dinar", "amp_hours", "amps", "ampules", "angolan_kwanza", "angstrom", "arc_sec", "arc_minute", "argentine_peso", "armenian_dram", "aruban_florin", "assistant", "athens_reading_level", "atmosphere", "attofarad", "australian_dollars", "austrian_schillings", "azerbaijani_manat", "baby_boys_us", "baby_girls_us", "bahamian_dollar", "bahraini_dinar", "bangladeshi_taka", "bante", "food_bars", "barbados_dollar", "barcol", "bars", "belarusian_ruble", "belgian_francs", "belize_dollar", "bermudian_dollar", "bhutanese_ngultrum", "big_boys_us", "big_child_us", "big_girls_us", "bits", "bits_per_second", "boliviano", "botswana_pula", "boys_us", "brazilian_real", "brinnell", "brinell", "btus", "brunei_dollar", "btu_per_hour_per_foot_per_fahrenheit", "bulgarian_lev", "burundian_franc", "bytes", "bytes_per_second", "canadian_dollars", "calls", "calories", "cambodian_riel", "candela", "candela_per_square_meter", "cape_verde_escudo", "capsules", "carats", "cayman_islands_dollar", "center_beam_candle_power", "cubic_centimeters_per_minute", "cubic_centimeters_per_second", "centifarad", "centiliters", "centiliters_per_second", "centimeter_kilograms", "centimeters", "centimeters_mercury", "centimeters_water", "centimeters_per_second", "centimeters_per_second_squared", "centimeters_squared", "central_african_cfa_franc", "cfp_franc", "cubic_feet_per_hour", "chapters", "characters_per_inch", "child_au", "child_mx", "child_uk", "chilean_peso", "chinese_yuan", "cubic_inches_per_minute", "cubic_meters_per_hour", "co", "colombian_peso", "comoro_franc", "congolese_franc", "consulting", "convertible_mark", "costa_rican_colon", "candle_power", "centipoise", "croatian_kuna", "centistokes", "cttw", "cuban_convertible_peso", "cuban_peso", "cubic_centimeters", "cubic_feet", "cubic_feet_per_minute", "cubic_feet_per_minute_per_watt", "cubic_feet_per_second", "cubic_inches", "cubic_meters", "cubic_meters_per_minute", "cubic_meters_per_second", "cubic_yards", "cups", "cycles", "cycles_per_gallon", "cycles_per_liter", "czech_koruna", "daltons", "danish_krone", "days", "decibels", "decibel_volt_per_pascal", "decibel_volt_per_micro_bar", "decafarad", "decifarad", "deciliters", "decimeters", "degrees_per_second", "degrees", "degrees_balling", "degrees_baume", "degrees_brix", "degrees_celsius", "degrees_fahrenheit", "degrees_ochsle", "degrees_per_second_squared", "german_mark", "deputy", "din", "diopters", "djiboutian_franc", "dominican_peso", "dots", "dots_per_inch", "drams", "drp_score", "dwt", "dyne_centimeters", "east_caribbean_dollar", "egyptian_pound", "emails", "eritrean_nakfa", "ethiopian_birr", "euro", "exafarad", "f_stop", "falkland_islands_pound", "farad", "feet", "feet_per_second", "feet_per_second_squared", "femtofarad", "femtoseconds", "fiji_dollar", "finnish_markka", "fluid_ounces", "foot_pounds", "feet_per_minute", "frames_per_second", "fr_school_grade", "french_francs", "foot_ounces", "gravity", "gallons_per_day", "grams_per_liter", "gallons", "gallons_per_flush", "gallons_per_hour", "gallons_per_minute", "gambian_dalasi", "gauge", "GB", "uk_pounds", "georgian_lari", "ghanaian_cedi", "GHz", "gibraltar_pound", "giga_samples_per_second", "gigabits_per_second", "gigabytes_per_hour", "gigabytes_per_second", "gigafarad", "gigaohms", "gigapascals", "girls_us", "us_school_grade", "gram_meters", "grams", "grams_per_100_kilometers", "grams_per_cubic_centimeter", "grams_per_kilometer", "grams_per_milliliter", "grams_per_minute", "grams_per_square_meter", "greek_drachma", "guatemalan_quetzal", "guinean_franc", "guyanese_dollar", "henry", "haitian_gourde", "hectofarad", "honduran_lempira", "hong_kong_dollar", "hour", "hours", "hours_per_gallon", "hours_per_liter", "horsepower", "hectopascal", "hsl", "hsv", "hundredths_pounds", "hundredths_inches", "hungarian_forint", "hertz", "icelandic_krona", "images_per_minute", "imperial_gallons", "inches_mercury", "inches_per_inches_degrees_fahrenheit", "inch_ounces", "inch_pounds", "inches", "inches_water", "inches_per_second", "inches_per_second_squared", "inches_squared", "indonesian_rupiah", "infant_uk", "infant_us", "indian_rupee", "iranian_rial", "iraqi_dinar", "irla_score", "iso", "israeli_new_shekel", "italian_lira", "jamaican_dollar", "jordanian_dinar", "joules", "japanese_yen", "juniors_us", "kazakhstani_tenge", "KB", "Kbaud", "kilobits_per_second", "kilobytes_per_second", "kelvin", "kenyan_shilling", "kilohenry", "KHz", "kilo_samples_per_second", "kiloamps", "kilocalories", "kilodaltons", "kilofarad", "kilogram_centimeters", "kilogram_force_meter", "kilogram_meters", "kilograms", "kilograms_per_cubic_meter", "kilograms_per_liter", "kilograms_per_millimeter", "kilograms_per_square_centimeter", "kilojoules", "kilometer", "kilometers", "kilometers_per_hour", "kilonewton_meters", "kilonewtons", "kiloohms", "kilopixel", "kilovolts", "kilowatt_hours", "kilowatt_hours_per_100_cycles", "kilowatt_hours_per_1000_hours", "kilowatt_hours_per_year", "kilowatts", "knoop", "kilopascal", "kips_per_square_inch", "kuwaiti_dinar", "kyrgyzstani_som", "liters_per_day", "liters_per_second", "liters_per_year", "lao_kip", "latvian_lats", "layers", "lebanese_pound", "lesotho_loti", "levels", "lexile", "lexile_code", "lexile_number", "liberian_dollar", "libyan_dinar", "lines", "lines_per_inch", "links_per_foot", "links_per_inch", "liters", "liters_per_100_kilometers", "liters_per_flush", "lithuanian_litas", "little_boys_us", "little_child_us", "little_girls_us", "lumen", "load", "liters_per_hour", "liters_per_minute", "lux", "luxembourg_franc", "meters_per_meters_kelvin", "macanese_pataca", "macedonian_denar", "malagasy_ariary", "malawian_kwacha", "malaysian_ringgit", "maldivian_rufiyaa", "mauritanian_ouguiya", "mauritian_rupee", "MB", "megabits", "mega_samples_per_second", "megabits_per_second", "megabytes_per_hour", "megabytes_per_second", "megafarad", "megaohms", "megapascals", "mens_au", "mens_uk", "mens_us", "mesh_count_per_square_inch", "messages", "meter", "meters", "meters_per_second", "meters_per_second_squared", "metric_tons_per_hectare", "mexican_peso", "millihenry", "MHz", "microamps", "microcandela", "microfarad", "micrograms", "microhenry", "microhertz", "microliters", "microliters_per_minute", "microliters_per_second", "micrometer", "micron", "micronewton_meters", "microohms", "microradian", "microseconds", "microvolts", "microwatts", "mile", "miles", "miles_per_hour", "milliamp_hours", "milliampere_hour", "milliampere_second", "milliamps", "millibars", "millicandela", "millifarad", "milligrams", "millihertz", "milliliters", "milliliters_per_second", "millimeters", "millimeters_water", "millimeters_per_second", "millimeters_water_per_square_centimeter", "millinewton_meters", "milliohms", "milliradian", "milliseconds", "millivolts", "milliwatts", "milliwatts_per_centimeters_squared", "mils", "minute", "minutes", "minutes_per_liter", "milliliters_per_minute", "millimeters_mercury", "mohs", "moldovan_leu", "mongolian_togrog", "months", "moroccan_dirham", "mozambican_metical", "megapixels", "mean_spherical_candle_power", "mt_s", "millivolts_per_gravity", "millivolts_per_pascals", "millivolts_per_pounds_per_square_inch", "myanma_kyat", "namibian_dollar", "nanoamps", "nanofarad", "nanoliters", "nanoliters_per_minute", "nanoliters_per_second", "nanometer", "nanoohms", "nanoseconds", "nanovolts", "nanowatts", "nepalese_rupee", "netherlands_antillean_guilder", "new_taiwan_dollar", "new_zealand_dollar", "newton_centimeters", "newton_meters", "newton_millimeters", "newtons", "newtons_per_square_millimeter", "nanohenry", "nicaraguan_cordoba", "nigerian_naira", "north_korean_won", "norwegian_krone", "ohm", "ohms_per_centimeter", "ohms_per_inch", "ohms_per_meter", "omani_rial", "openings_per_square_cm", "openings_per_square_inch", "operations", "ounces", "ounces_per_cubic_inch", "ounces_per_square_inch", "poise", "pascal_seconds", "pascal", "pages", "pages_per_month", "pages_per_second", "pages_per_sheet", "pakistani_rupee", "panamanian_balboa", "papua_new_guinean_kina", "paraguayan_guarani", "percent_by_volume", "percent_by_weight", "percent_daily_value_fda", "percentage", "peruvian_nuevo_sol", "petafarad", "ph", "philippine_peso", "photos", "picoamps", "picofarad", "picoliters", "picoliters_per_minute", "picoliters_per_second", "picometer", "picoohms", "picoseconds", "picowatts", "pictures", "pills", "pints", "pitch", "pixels", "pixels_per_inch", "place_settings", "pods", "polish_zloty", "portions", "portuguese_escudos", "pound_per_square_foot", "pounds", "pounds_per_cubic_foot", "pounds_per_cubic_inch", "pounds_per_cubic_yard", "pounds_per_inch", "pounds_per_square_yard", "parts_per_billion", "parts_per_hundred", "parts_per_million", "pages_per_minute", "parts_per_quadrillion", "parts_per_thousand", "parts_per_trillion", "primary", "pounds_per_square_inch", "pulses", "qatari_riyal", "quarters", "quarts", "r_value", "r_value_metric", "radians_per_second", "radians", "radians_per_second_squared", "revolutions_per_month", "revolutions_per_second_squared", "revolutions", "rockwell_15N", "rockwell_15T", "rockwell_30N", "rockwell_30T", "rockwell_45N", "rockwell_45T", "rockwell_a", "rockwell_b", "rockwell_c", "rockwell_d", "rockwell_E", "rockwell_f", "rockwell_g", "rockwell_h", "rockwell_k", "rockwell_l", "rockwell_M", "rockwell_p", "rockwell_R", "rockwell_s", "rockwell_v", "romanian_leu", "rotations", "rows", "revolutions_per_hour", "rpm", "revolutions_per_second", "revolutions_per_week", "russian_rouble", "russian_ruble", "rwandan_franc", "stokes", "saint_helena_pound", "samoan_tala", "samples_per_second", "saudi_riyal", "scoops", "seconds", "serbian_dinar", "seychelles_rupee", "shore_a", "shore_b", "shore_c", "shore_d", "shore_do", "shore_e", "shore_m", "shore_o", "shore_oo", "shore_ooo", "shore_ooo_s", "shore_r", "sierra_leonean_leone", "singapore_dollar", "solomon_islands_dollar", "somali_shilling", "sones", "south_african_rand", "south_korean_won", "south_sudanese_pound", "spanish_pesetas", "sun_protection_factor", "square_centimeters", "square_feet", "square_inches", "square_meters", "sri_lankan_rupee", "stops", "sudanese_pound", "surinamese_dollar", "swazi_lilangeni", "swedish_krona", "swiss_francs", "syrian_pound", "sao_tome_and_principe_dobra", "tablespoons", "tajikistani_somoni", "tanzanian_shilling", "TB", "terabytes_per_second", "teaspoons", "teen_boys_us", "teen_girls_us", "teen_us", "teeth", "teeth_per_inch", "ten_thousandths_inches", "terafarad", "teraohms", "tgw", "thai_baht", "thousandths_inches", "threads_per_centimeter", "threads_per_inch", "terahertz", "toddler_uk", "toddler_us", "tog", "tongan_paanga", "tons", "tons_per_acre", "torr", "trinidad_and_tobago_dollar", "tunisian_dinar", "turkish_lira", "turkmenistani_manat", "turns", "turns_per_centimeter", "turns_per_inch", "ugandan_shilling", "ukrainian_hryvnia", "unidad_de_valor_real", "unisex_br", "unisex_eu", "unisex_jp", "unit_of_alcohol", "united_arab_emirates_dirham", "units", "unknown_modifier", "uruguayan_peso", "us_dollars", "uzbekistan_som", "volts_per_gravity", "vanuatu_vatu", "venezuelan_bolivar", "vickers", "vietnamese_dong", "volt_amperes", "volts", "volts_of_alternating_current", "volts_of_direct_current", "watt_hours", "watts", "watts_per_kilogram", "watts_per_meter_per_celsius", "watts_per_meter_per_kelvin", "weeks", "west_african_cfa_franc", "wir_euro", "wir_franc", "womens_au", "womens_uk", "womens_us", "words", "multiplier_x", "yards", "years", "yemeni_rial", "yoctofarad", "yottafarad", "youth_uk", "youth_us", "zambian_kwacha", "zeptofarad", "zettafarad", "zimbabwe_dollar"],
          optionLabels: {
              thirty_seconds_inches: "32nds",
              amperes_per_watts: "A/W",
              accelerated_reader: "Accelerated Reader",
              adult_mx: "Adult MEX",
              adult_uk: "Adult UK",
              adult_us: "Adult US",
              afghan_afghani: "Afghan afghani",
              albanian_lek: "Albanian lek",
              algerian_dinar: "Algerian dinar",
              amp_hours: "Amp Hours",
              amps: "Amps",
              ampules: "ampule(s)",
              angolan_kwanza: "Angolan kwanza",
              angstrom: "Angstrom",
              arc_sec: "arc sec",
              arc_minute: "arcmin",
              argentine_peso: "Argentine peso",
              armenian_dram: "Armenian dram",
              aruban_florin: "Aruban florin",
              assistant: "Assistant",
              athens_reading_level: "Athens Reading Level",
              atmosphere: "Atm",
              attofarad: "Attofarad",
              australian_dollars: "Australian Dollars",
              austrian_schillings: "Austrian Schillings",
              azerbaijani_manat: "Azerbaijani manat",
              baby_boys_us: "Baby Boys US",
              baby_girls_us: "Baby Girls US",
              bahamian_dollar: "Bahamian dollar",
              bahraini_dinar: "Bahraini dinar",
              bangladeshi_taka: "Bangladeshi taka",
              bante: "Bante",
              food_bars: "bar(s)",
              barbados_dollar: "Barbados dollar",
              barcol: "Barcol",
              bars: "Bars",
              belarusian_ruble: "Belarusian ruble",
              belgian_francs: "Belgian Francs",
              belize_dollar: "Belize dollar",
              bermudian_dollar: "Bermudian dollar",
              bhutanese_ngultrum: "Bhutanese ngultrum",
              big_boys_us: "Big Boys US",
              big_child_us: "Big Child US",
              big_girls_us: "Big Girls US",
              bits: "Bits",
              bits_per_second: "Bits Per Second",
              boliviano: "Boliviano",
              botswana_pula: "Botswana pula",
              boys_us: "Boys US",
              brazilian_real: "Brazilian Real",
              brinnell: "Brinell",
              brinell: "Brinell",
              btus: "British Thermal Units",
              brunei_dollar: "Brunei dollar",
              btu_per_hour_per_foot_per_fahrenheit: "BTU per Hour per Foot per Degree Fahrenheit",
              bulgarian_lev: "Bulgarian lev",
              burundian_franc: "Burundian franc",
              bytes: "Bytes",
              bytes_per_second: "Bytes Per Second",
              canadian_dollars: "CAD",
              calls: "Calls",
              calories: "Calories",
              cambodian_riel: "Cambodian riel",
              candela: "Candela",
              candela_per_square_meter: "Candela per Square Meter",
              cape_verde_escudo: "Cape Verde escudo",
              capsules: "capsule(s)",
              carats: "carats",
              cayman_islands_dollar: "Cayman Islands dollar",
              center_beam_candle_power: "cbcp",
              cubic_centimeters_per_minute: "cc/min",
              cubic_centimeters_per_second: "cc/sec",
              centifarad: "Centifarad",
              centiliters: "Centiliters",
              centiliters_per_second: "Centiliters per Second",
              centimeter_kilograms: "Centimeter Kilograms",
              centimeters: "Centimeters",
              centimeters_mercury: "Centimeters of Mercury",
              centimeters_water: "Centimeters of Water",
              centimeters_per_second: "Centimeters per Second",
              centimeters_per_second_squared: "Centimeters per Second Squared",
              centimeters_squared: "Centimeters Squared",
              central_african_cfa_franc: "Central African CFA franc",
              cfp_franc: "CFP franc",
              cubic_feet_per_hour: "CFPH",
              chapters: "Chapters",
              characters_per_inch: "Characters Per Second",
              child_au: "Child AU",
              child_mx: "Child MEX",
              child_uk: "Child UK",
              chilean_peso: "Chilean peso",
              chinese_yuan: "Chinese Yuan",
              cubic_inches_per_minute: "CIPM",
              cubic_meters_per_hour: "CMPH",
              co: "Co.",
              colombian_peso: "Colombian peso",
              comoro_franc: "Comoro franc",
              congolese_franc: "Congolese franc",
              consulting: "Consulting",
              convertible_mark: "convertible mark",
              costa_rican_colon: "Costa Rican colon",
              candle_power: "cp",
              centipoise: "cp",
              croatian_kuna: "Croatian kuna",
              centistokes: "cs",
              cttw: "CTTW",
              cuban_convertible_peso: "Cuban convertible peso",
              cuban_peso: "Cuban peso",
              cubic_centimeters: "Cubic Centimeters",
              cubic_feet: "Cubic Feet",
              cubic_feet_per_minute: "Cubic Feet Per Minute",
              cubic_feet_per_minute_per_watt: "Cubic Feet Per Minute Per Watt",
              cubic_feet_per_second: "Cubic Feet Per Second",
              cubic_inches: "Cubic Inches",
              cubic_meters: "Cubic Meters",
              cubic_meters_per_minute: "Cubic Meters per Minute",
              cubic_meters_per_second: "Cubic Meters per Second",
              cubic_yards: "Cubic Yards",
              cups: "Cups",
              cycles: "cycles",
              cycles_per_gallon: "Cycles per Gallon",
              cycles_per_liter: "Cycles Per Liter",
              czech_koruna: "Czech koruna",
              daltons: "Daltons",
              danish_krone: "Danish Krone",
              days: "days",
              decibels: "dB",
              decibel_volt_per_pascal: "dBV/Pascal",
              decibel_volt_per_micro_bar: "dBV/uBar",
              decafarad: "Decafarad",
              decifarad: "Decifarad",
              deciliters: "Deciliters",
              decimeters: "decimeters",
              degrees_per_second: "deg/sec",
              degrees: "Degrees",
              degrees_balling: "Degrees Balling",
              degrees_baume: "Degrees Baume",
              degrees_brix: "Degrees Brix",
              degrees_celsius: "Degrees Celsius",
              degrees_fahrenheit: "Degrees Fahrenheit",
              degrees_ochsle: "Degrees Oechsle",
              degrees_per_second_squared: "Degrees per Second Squared",
              german_mark: "DEM",
              deputy: "Deputy",
              din: "DIN",
              diopters: "Diopters",
              djiboutian_franc: "Djiboutian franc",
              dominican_peso: "Dominican peso",
              dots: "Dots",
              dots_per_inch: "Dots Per Inch",
              drams: "Drams",
              drp_score: "DRP Score",
              dwt: "DWT",
              dyne_centimeters: "Dyne-cm",
              east_caribbean_dollar: "East Caribbean dollar",
              egyptian_pound: "Egyptian pound",
              emails: "Emails",
              eritrean_nakfa: "Eritrean nakfa",
              ethiopian_birr: "Ethiopian birr",
              euro: "EUR",
              exafarad: "Exafarad",
              f_stop: "f",
              falkland_islands_pound: "Falkland Islands pound",
              farad: "Farad",
              feet: "Feet",
              feet_per_second: "Feet Per Second",
              feet_per_second_squared: "Feet per Second Squared",
              femtofarad: "Femtofarad",
              femtoseconds: "Femtoseconds",
              fiji_dollar: "Fiji dollar",
              finnish_markka: "Finnish Markka",
              fluid_ounces: "Fluid Ounces",
              foot_pounds: "Foot Pounds",
              feet_per_minute: "FPM",
              frames_per_second: "fps",
              fr_school_grade: "FR School Grade",
              french_francs: "FRF",
              foot_ounces: "ft-oz",
              gravity: "g",
              gallons_per_day: "G/day",
              grams_per_liter: "g/L",
              gallons: "Gallons",
              gallons_per_flush: "Gallons per Flush",
              gallons_per_hour: "Gallons per Hour",
              gallons_per_minute: "Gallons per Minute",
              gambian_dalasi: "Gambian dalasi",
              gauge: "Gauge",
              GB: "GB",
              uk_pounds: "GBP",
              georgian_lari: "Georgian lari",
              ghanaian_cedi: "Ghanaian cedi",
              GHz: "GHz",
              gibraltar_pound: "Gibraltar pound",
              giga_samples_per_second: "Giga Samples per Second",
              gigabits_per_second: "Gigabits Per Second",
              gigabytes_per_hour: "Gigabytes Per Hour",
              gigabytes_per_second: "Gigabytes Per Second",
              gigafarad: "Gigafarad",
              gigaohms: "Gigaohms",
              gigapascals: "gigapascals",
              girls_us: "Girls US",
              us_school_grade: "grades",
              gram_meters: "Gram Meters",
              grams: "Grams",
              grams_per_100_kilometers: "Grams per 100 kilometers",
              grams_per_cubic_centimeter: "Grams per Cubic Centimeter",
              grams_per_kilometer: "Grams per Kilometer",
              grams_per_milliliter: "Grams per Milliliter",
              grams_per_minute: "Grams Per Minute",
              grams_per_square_meter: "Grams per Square Meter",
              greek_drachma: "Greek Drachma",
              guatemalan_quetzal: "Guatemalan quetzal",
              guinean_franc: "Guinean franc",
              guyanese_dollar: "Guyanese dollar",
              henry: "H",
              haitian_gourde: "Haitian gourde",
              hectofarad: "Hectofarad",
              honduran_lempira: "Honduran lempira",
              hong_kong_dollar: "Hong Kong dollar",
              hour: "Hour",
              hours: "Hours",
              hours_per_gallon: "Hours per Gallon",
              hours_per_liter: "Hours per Liter",
              horsepower: "hp",
              hectopascal: "hPa",
              hsl: "HSL",
              hsv: "HSV",
              hundredths_pounds: "Hundredths Pounds",
              hundredths_inches: "hundredths-inches",
              hungarian_forint: "Hungarian forint",
              hertz: "Hz",
              icelandic_krona: "Icelandic króna",
              images_per_minute: "Images per Minute",
              imperial_gallons: "Imperial Gallons",
              inches_mercury: "in Hg",
              inches_per_inches_degrees_fahrenheit: "in/in Degrees Fahrenheit",
              inch_ounces: "Inch Ounces",
              inch_pounds: "Inch Pounds",
              inches: "Inches",
              inches_water: "Inches of Water",
              inches_per_second: "Inches per Second",
              inches_per_second_squared: "Inches per Second Squared",
              inches_squared: "Inches Squared",
              indonesian_rupiah: "Indonesian Rupiah",
              infant_uk: "Infant UK",
              infant_us: "Infant US",
              indian_rupee: "INR",
              iranian_rial: "Iranian rial",
              iraqi_dinar: "Iraqi dinar",
              irla_score: "IRLA Score",
              iso: "ISO",
              israeli_new_shekel: "Israeli new shekel",
              italian_lira: "Italian Lira",
              jamaican_dollar: "Jamaican dollar",
              jordanian_dinar: "Jordanian dinar",
              joules: "Joules",
              japanese_yen: "JPY",
              juniors_us: "Juniors US",
              kazakhstani_tenge: "Kazakhstani tenge",
              KB: "KB",
              Kbaud: "KBaud",
              kilobits_per_second: "Kbps",
              kilobytes_per_second: "Kbps",
              kelvin: "Kelvin",
              kenyan_shilling: "Kenyan shilling",
              kilohenry: "kH",
              KHz: "KHz",
              kilo_samples_per_second: "Kilo Samples per Second",
              kiloamps: "Kiloamps",
              kilocalories: "Kilocalories",
              kilodaltons: "Kilodaltons",
              kilofarad: "Kilofarad",
              kilogram_centimeters: "Kilogram Centimeters",
              kilogram_force_meter: "Kilogram Force Meter",
              kilogram_meters: "Kilogram Meters",
              kilograms: "Kilograms",
              kilograms_per_cubic_meter: "Kilograms per Cubic Meter",
              kilograms_per_liter: "Kilograms per Liter",
              kilograms_per_millimeter: "Kilograms per Millimeter",
              kilograms_per_square_centimeter: "Kilograms Per Square Centimeter",
              kilojoules: "Kilojoules",
              kilometer: "Kilometer",
              kilometers: "Kilometers",
              kilometers_per_hour: "Kilometers per Hour",
              kilonewton_meters: "Kilonewton Meters",
              kilonewtons: "Kilonewtons",
              kiloohms: "Kiloohms",
              kilopixel: "Kilopixel",
              kilovolts: "Kilovolts",
              kilowatt_hours: "Kilowatt Hours",
              kilowatt_hours_per_100_cycles: "Kilowatt Hours per 100 cycles",
              kilowatt_hours_per_1000_hours: "Kilowatt Hours per 1000 hours",
              kilowatt_hours_per_year: "Kilowatt Hours Per Year",
              kilowatts: "Kilowatts",
              knoop: "Knoop",
              kilopascal: "kPa",
              kips_per_square_inch: "KSI",
              kuwaiti_dinar: "Kuwaiti dinar",
              kyrgyzstani_som: "Kyrgyzstani som",
              liters_per_day: "L/day",
              liters_per_second: "L/sec",
              liters_per_year: "L/year",
              lao_kip: "Lao kip",
              latvian_lats: "Latvian lats",
              layers: "Layers",
              lebanese_pound: "Lebanese pound",
              lesotho_loti: "Lesotho loti",
              levels: "Levels",
              lexile: "Lexile",
              lexile_code: "Lexile Code",
              lexile_number: "Lexile Number",
              liberian_dollar: "Liberian dollar",
              libyan_dinar: "Libyan dinar",
              lines: "Lines",
              lines_per_inch: "Lines Per Inch",
              links_per_foot: "Links Per Foot",
              links_per_inch: "Links Per Inch",
              liters: "Liters",
              liters_per_100_kilometers: "Liters per 100 Kilometers",
              liters_per_flush: "Liters Per Flush",
              lithuanian_litas: "Lithuanian litas",
              little_boys_us: "Little Boys US",
              little_child_us: "Little Child US",
              little_girls_us: "Little Girls US",
              lumen: "lm",
              load: "load",
              liters_per_hour: "LPH",
              liters_per_minute: "LPM",
              lux: "Lux",
              luxembourg_franc: "Luxembourg Franc",
              meters_per_meters_kelvin: "m/m Kelvin",
              macanese_pataca: "Macanese pataca",
              macedonian_denar: "Macedonian denar",
              malagasy_ariary: "Malagasy ariary",
              malawian_kwacha: "Malawian kwacha",
              malaysian_ringgit: "Malaysian ringgit",
              maldivian_rufiyaa: "Maldivian rufiyaa",
              mauritanian_ouguiya: "Mauritanian ouguiya",
              mauritian_rupee: "Mauritian rupee",
              MB: "MB",
              megabits: "Mbit",
              mega_samples_per_second: "Mega Samples per Second",
              megabits_per_second: "Megabits Per Second",
              megabytes_per_hour: "Megabytes Per Hour",
              megabytes_per_second: "Megabytes Per Second",
              megafarad: "Megafarad",
              megaohms: "Megaohms",
              megapascals: "megapascals",
              mens_au: "Mens AU",
              mens_uk: "Mens UK",
              mens_us: "Mens US",
              mesh_count_per_square_inch: "Mesh Count Per Square Inch",
              messages: "Messages",
              meter: "Meter",
              meters: "Meters",
              meters_per_second: "Meters per Second",
              meters_per_second_squared: "Meters per Second Squared",
              metric_tons_per_hectare: "Metric Tons per Hectare",
              mexican_peso: "Mexican Peso",
              millihenry: "mH",
              MHz: "MHz",
              microamps: "Microamps",
              microcandela: "microCandela",
              microfarad: "Microfarad",
              micrograms: "Micrograms",
              microhenry: "microH",
              microhertz: "Microhertz",
              microliters: "Microliters",
              microliters_per_minute: "Microliters per Minute",
              microliters_per_second: "Microliters per Second",
              micrometer: "Micrometer",
              micron: "Micron",
              micronewton_meters: "Micronewton Meters",
              microohms: "Microohms",
              microradian: "microrad",
              microseconds: "Microseconds",
              microvolts: "Microvolts",
              microwatts: "Microwatts",
              mile: "Mile",
              miles: "Miles",
              miles_per_hour: "Miles per Hour",
              milliamp_hours: "Milliamp Hours",
              milliampere_hour: "Milliampere Hour (mAh)",
              milliampere_second: "Milliampere Second (mAs)",
              milliamps: "milliamps",
              millibars: "Millibars",
              millicandela: "milliCandela",
              millifarad: "Millifarad",
              milligrams: "Milligrams",
              millihertz: "Millihertz",
              milliliters: "Milliliters",
              milliliters_per_second: "Milliliters per Second",
              millimeters: "Millimeters",
              millimeters_water: "Millimeters of Water",
              millimeters_per_second: "Millimeters per Second",
              millimeters_water_per_square_centimeter: "Millimeters Water Per Square Centimeter",
              millinewton_meters: "Millinewton Meters",
              milliohms: "Milliohms",
              milliradian: "millirad",
              milliseconds: "Milliseconds",
              millivolts: "Millivolts",
              milliwatts: "Milliwatts",
              milliwatts_per_centimeters_squared: "Milliwatts per Centimeters Squared",
              mils: "Mils",
              minute: "Minute",
              minutes: "minutes",
              minutes_per_liter: "Minutes per Liter",
              milliliters_per_minute: "ml/min",
              millimeters_mercury: "mm Hg",
              mohs: "Mohs",
              moldovan_leu: "Moldovan leu",
              mongolian_togrog: "Mongolian tögrög",
              months: "months",
              moroccan_dirham: "Moroccan dirham",
              mozambican_metical: "Mozambican metical",
              megapixels: "MP",
              mean_spherical_candle_power: "mscp",
              mt_s: "MT/s",
              millivolts_per_gravity: "mV/g",
              millivolts_per_pascals: "mV/Pa",
              millivolts_per_pounds_per_square_inch: "mV/psi",
              myanma_kyat: "Myanmar kyat",
              namibian_dollar: "Namibian dollar",
              nanoamps: "Nanoamps",
              nanofarad: "Nanofarad",
              nanoliters: "Nanoliters",
              nanoliters_per_minute: "Nanoliters per Minute",
              nanoliters_per_second: "Nanoliters per Second",
              nanometer: "Nanometer",
              nanoohms: "Nanoohms",
              nanoseconds: "Nanoseconds",
              nanovolts: "Nanovolts",
              nanowatts: "Nanowatts",
              nepalese_rupee: "Nepalese rupee",
              netherlands_antillean_guilder: "Netherlands Antillean guilder",
              new_taiwan_dollar: "New Taiwan dollar",
              new_zealand_dollar: "New Zealand dollar",
              newton_centimeters: "Newton Centimeters",
              newton_meters: "Newton Meters",
              newton_millimeters: "Newton Millimeters",
              newtons: "Newtons",
              newtons_per_square_millimeter: "Newtons Per Square Millimeter (N/mm2)",
              nanohenry: "nH",
              nicaraguan_cordoba: "Nicaraguan córdoba",
              nigerian_naira: "Nigerian naira",
              north_korean_won: "North Korean won",
              norwegian_krone: "Norwegian krone",
              ohm: "Ohm",
              ohms_per_centimeter: "Ohms Per Centimeter",
              ohms_per_inch: "Ohms Per Inch",
              ohms_per_meter: "Ohms Per Meter",
              omani_rial: "Omani rial",
              openings_per_square_cm: "openings_per_square_cm",
              openings_per_square_inch: "openings_per_square_inch",
              operations: "operations",
              ounces: "ounces",
              ounces_per_cubic_inch: "Ounces Per Cubic Inch",
              ounces_per_square_inch: "Ounces Per Square Inch",
              poise: "P",
              pascal_seconds: "P/s",
              pascal: "Pa",
              pages: "Pages",
              pages_per_month: "Pages per month",
              pages_per_second: "Pages per second",
              pages_per_sheet: "Pages Per Sheet",
              pakistani_rupee: "Pakistani rupee",
              panamanian_balboa: "Panamanian balboa",
              papua_new_guinean_kina: "Papua New Guinean kina",
              paraguayan_guarani: "Paraguayan guaraní",
              percent_by_volume: "Percent by Volume",
              percent_by_weight: "Percent by Weight",
              percent_daily_value_fda: "Percent Daily Value",
              percentage: "Percentage",
              peruvian_nuevo_sol: "Peruvian nuevo sol",
              petafarad: "Petafarad",
              ph: "pH",
              philippine_peso: "Philippine peso",
              photos: "Photos",
              picoamps: "Picoamps",
              picofarad: "Picofarad",
              picoliters: "Picoliters",
              picoliters_per_minute: "Picoliters per Minute",
              picoliters_per_second: "Picoliters per Second",
              picometer: "Picometer",
              picoohms: "Picoohms",
              picoseconds: "Picoseconds",
              picowatts: "Picowatts",
              pictures: "Pictures",
              pills: "pill(s)",
              pints: "Pints",
              pitch: "Pitch",
              pixels: "Pixels",
              pixels_per_inch: "Pixels Per Inch",
              place_settings: "Place Settings",
              pods: "Pods",
              polish_zloty: "Polish Zloty",
              portions: "Portion(s)",
              portuguese_escudos: "Portuguese Escudos",
              pound_per_square_foot: "Pound per Square Foot",
              pounds: "Pounds",
              pounds_per_cubic_foot: "Pounds per Cubic Foot",
              pounds_per_cubic_inch: "Pounds per Cubic Inch",
              pounds_per_cubic_yard: "Pounds per Cubic Yard",
              pounds_per_inch: "Pounds Per Inch",
              pounds_per_square_yard: "Pounds Per Square Yard",
              parts_per_billion: "ppb",
              parts_per_hundred: "pph",
              parts_per_million: "ppm",
              pages_per_minute: "ppm",
              parts_per_quadrillion: "ppq",
              parts_per_thousand: "ppt",
              parts_per_trillion: "ppt",
              primary: "Primary",
              pounds_per_square_inch: "PSI",
              pulses: "pulses",
              qatari_riyal: "Qatari riyal",
              quarters: "quarters",
              quarts: "Quarts",
              r_value: "R-value",
              r_value_metric: "R-value (Metric)",
              radians_per_second: "rad/sec",
              radians: "Radians",
              radians_per_second_squared: "Radians per Second Squared",
              revolutions_per_month: "rev/month",
              revolutions_per_second_squared: "Revolutions per Second Squared",
              revolutions: "revs",
              rockwell_15N: "rockwell 15N",
              rockwell_15T: "rockwell 15T",
              rockwell_30N: "rockwell 30N",
              rockwell_30T: "rockwell 30T",
              rockwell_45N: "rockwell 45N",
              rockwell_45T: "rockwell 45T",
              rockwell_a: "Rockwell A",
              rockwell_b: "Rockwell B",
              rockwell_c: "Rockwell C",
              rockwell_d: "Rockwell D",
              rockwell_E: "rockwell E",
              rockwell_f: "rockwell F",
              rockwell_g: "Rockwell G",
              rockwell_h: "Rockwell H",
              rockwell_k: "Rockwell K",
              rockwell_l: "Rockwell L",
              rockwell_M: "rockwell M",
              rockwell_p: "Rockwell P",
              rockwell_R: "rockwell R",
              rockwell_s: "Rockwell S",
              rockwell_v: "Rockwell V",
              romanian_leu: "Romanian Leu",
              rotations: "rotations",
              rows: "Rows",
              revolutions_per_hour: "rph",
              rpm: "RPM",
              revolutions_per_second: "rps",
              revolutions_per_week: "rpw",
              russian_rouble: "Russian rouble",
              russian_ruble: "Russian Ruble",
              rwandan_franc: "Rwandan franc",
              stokes: "S",
              saint_helena_pound: "Saint Helena pound",
              samoan_tala: "Samoan tala",
              samples_per_second: "Samples per Second",
              saudi_riyal: "Saudi Riyal",
              scoops: "scoop(s)",
              seconds: "seconds",
              serbian_dinar: "Serbian dinar",
              seychelles_rupee: "Seychelles rupee",
              shore_a: "Shore A",
              shore_b: "Shore B",
              shore_c: "Shore C",
              shore_d: "Shore D",
              shore_do: "Shore DO",
              shore_e: "Shore E",
              shore_m: "Shore M",
              shore_o: "Shore O",
              shore_oo: "Shore OO",
              shore_ooo: "Shore OOO",
              shore_ooo_s: "Shore OOO-S",
              shore_r: "Shore R",
              sierra_leonean_leone: "Sierra Leonean leone",
              singapore_dollar: "Singapore dollar",
              solomon_islands_dollar: "Solomon Islands dollar",
              somali_shilling: "Somali shilling",
              sones: "Sones",
              south_african_rand: "South African rand",
              south_korean_won: "South Korean Won",
              south_sudanese_pound: "South Sudanese pound",
              spanish_pesetas: "Spanish Pesetas",
              sun_protection_factor: "SPF",
              square_centimeters: "Square Centimeters",
              square_feet: "Square Feet",
              square_inches: "Square Inches",
              square_meters: "Square Meters",
              sri_lankan_rupee: "Sri Lankan rupee",
              stops: "Stops",
              sudanese_pound: "Sudanese pound",
              surinamese_dollar: "Surinamese dollar",
              swazi_lilangeni: "Swazi lilangeni",
              swedish_krona: "Swedish Krona",
              swiss_francs: "Swiss Francs",
              syrian_pound: "Syrian pound",
              sao_tome_and_principe_dobra: "São Tomé and Príncipe dobra",
              tablespoons: "tablespoon(s)",
              tajikistani_somoni: "Tajikistani somoni",
              tanzanian_shilling: "Tanzanian shilling",
              TB: "TB",
              terabytes_per_second: "TB/sec",
              teaspoons: "teaspoon(s)",
              teen_boys_us: "Teen Boys US",
              teen_girls_us: "Teen Girls US",
              teen_us: "Teen US",
              teeth: "Teeth",
              teeth_per_inch: "Teeth per Inch",
              ten_thousandths_inches: "Ten Thousandths Inches",
              terafarad: "Terafarad",
              teraohms: "Teraohms",
              tgw: "TGW",
              thai_baht: "Thai baht",
              thousandths_inches: "Thousandths Inches",
              threads_per_centimeter: "Threads Per Centimeter",
              threads_per_inch: "Threads Per Inch",
              terahertz: "THz",
              toddler_uk: "Toddler UK",
              toddler_us: "Toddler US",
              tog: "Tog",
              tongan_paanga: "Tongan paʻanga",
              tons: "Tons",
              tons_per_acre: "Tons per Acre",
              torr: "Torr",
              trinidad_and_tobago_dollar: "Trinidad and Tobago dollar",
              tunisian_dinar: "Tunisian dinar",
              turkish_lira: "Turkish Lira",
              turkmenistani_manat: "Turkmenistani manat",
              turns: "turns",
              turns_per_centimeter: "Turns Per Centimeter",
              turns_per_inch: "Turns Per Inch",
              ugandan_shilling: "Ugandan shilling",
              ukrainian_hryvnia: "Ukrainian hryvnia",
              unidad_de_valor_real: "Unidad de Valor Real",
              unisex_br: "Unisex BR",
              unisex_eu: "Unisex EU",
              unisex_jp: "Unisex JP",
              unit_of_alcohol: "Unit of Alcohol",
              united_arab_emirates_dirham: "United Arab Emirates dirham",
              units: "Units",
              unknown_modifier: "Unknown modifier",
              uruguayan_peso: "Uruguayan peso",
              us_dollars: "USD",
              uzbekistan_som: "Uzbekistani sum",
              volts_per_gravity: "V/g",
              vanuatu_vatu: "Vanuatu vatu",
              venezuelan_bolivar: "Venezuelan bolívar",
              vickers: "Vickers",
              vietnamese_dong: "Vietnamese dong",
              volt_amperes: "Volt Amperes",
              volts: "Volts",
              volts_of_alternating_current: "Volts (AC)",
              volts_of_direct_current: "Volts (DC)",
              watt_hours: "Watt Hours",
              watts: "Watts",
              watts_per_kilogram: "Watts per Kilogram",
              watts_per_meter_per_celsius: "Watts per Meter per Degree Celsius",
              watts_per_meter_per_kelvin: "Watts per Meter per Kelvin",
              weeks: "weeks",
              west_african_cfa_franc: "West African CFA franc",
              wir_euro: "WIR Euro",
              wir_franc: "WIR Franc",
              womens_au: "Womens AU",
              womens_uk: "Womens UK",
              womens_us: "Womens US",
              words: "Words",
              multiplier_x: "x",
              yards: "Yards",
              years: "years",
              yemeni_rial: "Yemeni rial",
              yoctofarad: "Yoctofarad",
              yottafarad: "Yottafarad",
              youth_uk: "Youth UK",
              youth_us: "Youth US",
              zambian_kwacha: "Zambian kwacha",
              zeptofarad: "Zeptofarad",
              zettafarad: "Zettafarad",
              zimbabwe_dollar: "Zimbabwe dollar"
          },
          fieldType: "string"
      }),
      i({
          name: "volume_capacity_name.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "volume_capacity_name.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "customer_package_type",
          fieldType: "string"
      }),
      i({
          name: "customer_package_type.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "customer_package_type.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2176,
          fieldType: "string"
      }),
      i({
          name: "customer_package_type.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "customer_package_type.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "pattern",
          fieldType: "string"
      }),
      i({
          name: "pattern.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "pattern.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2200,
          maxUtf8ByteLength: 2e3,
          fieldType: "string",
          tipsOptions: ["Animal Print", "Argyle", "Camouflage", "Checkered", "Chevron", "Floral", "Geometric", "Herringbone", "Houndstooth", "Moiré", "Paisley", "Plaid", "Polka Dot", "Solid", "Striped", "Toile"],
          optionLabels: {
              "Animal Print": "Animal Print",
              Argyle: "Argyle",
              Camouflage: "Camouflage",
              Checkered: "Checkered",
              Chevron: "Chevron",
              Floral: "Floral",
              Geometric: "Geometric",
              Herringbone: "Herringbone",
              Houndstooth: "Houndstooth",
              Moiré: "Moiré",
              Paisley: "Paisley",
              Plaid: "Plaid",
              "Polka Dot": "Polka Dot",
              Solid: "Solid",
              Striped: "Striped",
              Toile: "Toile"
          }
      }),
      i({
          name: "pattern.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "pattern.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "is_expiration_dated_product",
          fieldType: "string"
      }),
      i({
          name: "is_expiration_dated_product.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "is_expiration_dated_product.0.value",
          required: !0,
          maxItems: 1,
          options: [!1, !0],
          optionLabels: {
              false: "No",
              true: "Yes"
          },
          fieldType: "boolean"
      }),
      i({
          name: "is_expiration_dated_product.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "unit_count",
          fieldType: "string"
      }),
      i({
          name: "unit_count.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "unit_count.0.value",
          required: !0,
          maxItems: 1,
          fieldType: "number"
      }),
      i({
          name: "unit_count.0.type",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "unit_count.0.type.value",
          required: !0,
          maxItems: 1,
          maxLength: 100,
          maxUtf8ByteLength: 20,
          fieldType: "string"
      }),
      i({
          name: "unit_count.0.type.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "unit_count.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "included_components",
          fieldType: "string"
      }),
      i({
          name: "included_components.0",
          required: !0,
          maxItems: 79,
          fieldType: "string"
      }),
      i({
          name: "included_components.0.value",
          required: !0,
          maxItems: 79,
          maxLength: 1e3,
          fieldType: "string"
      }),
      i({
          name: "included_components.0.language_tag",
          required: !0,
          maxItems: 79,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "included_components.0.marketplace_id",
          maxItems: 79,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "league_name",
          fieldType: "string"
      }),
      i({
          name: "league_name.0",
          required: !0,
          maxItems: 6,
          fieldType: "string"
      }),
      i({
          name: "league_name.0.value",
          required: !0,
          maxItems: 6,
          maxLength: 100,
          maxUtf8ByteLength: 50,
          fieldType: "string",
          tipsOptions: ["Canadian Football League", "Canadian Premier League", "Dutch Soccer", "E-Sports", "English Soccer", "European Basketball", "Formula 1", "French Soccer", "German Soccer", "Hockey India League", "I-League", "Indian Premier League", "Indian Soccer League", "International Cricket", "Italian Soccer", "Japanese Baseball", "Japanese Basketball", "Japanese Soccer", "LPGA", "Mexican Football Federation", "Minor League Baseball", "MLB", "MLS", "NASCAR", "National Lacrosse League", "National Teams", "NBA", "NCAA", "NFL", "NHL", "NWSL", "Other Soccer Leagues", "PGA", "Portuguese Soccer", "Premier Badminton League", "Pro Kabaddi League", "Pro Volleyball League", "Pro Wrestling League", "Scottish Soccer", "Spanish Soccer", "Tennis", "UFC", "WNBA", "World Baseball Classic", "World Cup Soccer", "WUSA", "WWE", "X-Games"],
          optionLabels: {
              "Canadian Football League": "Canadian Football League",
              "Canadian Premier League": "Canadian Premier League",
              "Dutch Soccer": "Dutch Soccer",
              "E-Sports": "E-Sports",
              "English Soccer": "English Soccer",
              "European Basketball": "European Basketball",
              "Formula 1": "Formula 1",
              "French Soccer": "French Soccer",
              "German Soccer": "German Soccer",
              "Hockey India League": "Hockey India League",
              "I-League": "I-League",
              "Indian Premier League": "Indian Premier League",
              "Indian Soccer League": "Indian Soccer League",
              "International Cricket": "International Cricket",
              "Italian Soccer": "Italian Soccer",
              "Japanese Baseball": "Japanese Baseball",
              "Japanese Basketball": "Japanese Basketball",
              "Japanese Soccer": "Japanese Soccer",
              LPGA: "LPGA",
              "Mexican Football Federation": "Mexican Football Federation",
              "Minor League Baseball": "Minor League Baseball",
              MLB: "MLB",
              MLS: "MLS",
              NASCAR: "NASCAR",
              "National Lacrosse League": "National Lacrosse League",
              "National Teams": "National Teams",
              NBA: "NBA",
              NCAA: "NCAA",
              NFL: "NFL",
              NHL: "NHL",
              NWSL: "NWSL",
              "Other Soccer Leagues": "Other Soccer Leagues",
              PGA: "PGA",
              "Portuguese Soccer": "Portuguese Soccer",
              "Premier Badminton League": "Premier Badminton League",
              "Pro Kabaddi League": "Pro Kabaddi League",
              "Pro Volleyball League": "Pro Volleyball League",
              "Pro Wrestling League": "Pro Wrestling League",
              "Scottish Soccer": "Scottish Soccer",
              "Spanish Soccer": "Spanish Soccer",
              Tennis: "Tennis",
              UFC: "UFC",
              WNBA: "WNBA",
              "World Baseball Classic": "World Baseball Classic",
              "World Cup Soccer": "World Cup Soccer",
              WUSA: "WUSA",
              WWE: "WWE",
              "X-Games": "X-Games"
          }
      }),
      i({
          name: "league_name.0.language_tag",
          required: !0,
          maxItems: 6,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "league_name.0.marketplace_id",
          maxItems: 6,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "team_name",
          fieldType: "string"
      }),
      i({
          name: "team_name.0",
          required: !0,
          maxItems: 2,
          fieldType: "string"
      }),
      i({
          name: "team_name.0.value",
          required: !0,
          maxItems: 2,
          maxLength: 100,
          maxUtf8ByteLength: 50,
          fieldType: "string",
          tipsOptions: ["1. FC Koln", "1. FC Magdeburg", "A. J. Allmendinger", "A.S. Livorno Calcio", "Aberdeen", "Aberdeen IronBirds", "Abilene Christian Wildcats", "AC Ajaccio", "AC Milan", "AC Nagano Parceiro", "AD Alcorcón", "ADO Den Haag", "AFC Bournemouth", "Afghanistan", "Ahmedabad Defenders", "Air Force Falcons", "Airdrieonians", "AISIN AW AREIONS ANJO", "Aizawl FC", "Ajax Amsterdam", "AKITA NORTHERN HAPPINETS", "Akron Aeros", "Akron Zips", "Al Iaquinta", "Alabama A&M Bulldogs", "Alabama Birmingham Blazers", "Alabama Crimson Tide", "Alabama State Hornets", "Alaves", "ALBA Berlin Basketball", "Albacete BP", "Albania", "Albany Great Danes", "Albirex Niigata", "Albuquerque Isotopes", "Alcorn State Braves", "Alejandro Perez", "Alex Bowman", "Alex Oliveira", "Alex Perez", "Alexa Grasso", "Alexander Gustafsson", "Alexander Hernandez", "Alexander Volkanoski", "Alexander Volkov", "Alexandre Pantoja", "Alexis Davis", "Alfa Romeo Racing", "Algeria", "Alistair Overeem", "Aljamain Sterling", "Almere City", "Alpine", "Altoona Curve", "ALVARK TOKYO", "Amanda Nunes", "American Samoa", "American University Eagles", "Amiens SC", "Anadolu Efes Istanbul Basketball", "Anaheim Ducks", "Andorra", "Andrea Lee", "Andrei Arlovski", "Angel City FC", "Angela Hill", "Angers SCO", "Angola", "Anthony Pettis", "Anthony Smith", "Antigua and Barbuda", "Antonio Carlos Junior", "AOMORI WAT'S", "Appalachian State Mountaineers", "Arbroath", "Argentina", "Aric Almirola", "Arizona Cardinals", "Arizona Coyotes", "Arizona Diamondbacks", "Arizona State Sun Devils", "Arizona Wildcats", "Arkansas Little Rock Trojans", "Arkansas Razorbacks", "Arkansas State Indians", "Arkansas State Red Wolves", "Arkansas Travelers", "Arkansas-Pine Bluff Golden Lions", "Armenia", "Arminia Bielefeld", "Army Black Knights", "Arsenal", "Arsenal de Sarandí", "Aruba", "AS Roma", "AS Saint-Etienne", "Ascoli", "Asheville Tourists", "Ashlee Evans-Smith", "Aspen Ladd", "Aston Martin", "Aston Villa", "Atalanta", "Athletic Bilbao", "ATK Mohun Bagan FC", "Atlanta Braves", "Atlanta Dream", "Atlanta Falcons", "Atlanta Flames", "Atlanta Hawks", "Atlanta Thrashers", "Atlanta United FC", "Atletico Madrid", "Atlético de San Luis", "Atlético Ottawa", "Auburn Doubledays", "Auburn Tigers", "Augusta GreenJackets", "Austin Dillon", "Austin FC", "Austin Peay Governors", "Australia", "Austria", "Auxerre", "Avispa Fukuoka", "Awadhe Warriors", "AX Armani Exchange Milan Basketball", "AZ Alkmaar", "Azerbaijan", "Bahamas", "Bahrain", "Bakersfield Blaze", "Ball State Cardinals", "Baltimore Orioles", "Baltimore Ravens", "BAMBITIOUS NARA", "Bangladesh", "Barbados", "Barcelona", "Barcelona Basketball", "Bari", "Bastia", "Batavia Muckdogs", "Bates Bobcats", "Bayer Leverkusen", "Bayern Munich", "Bayern Munich Basketball", "Baylor Bears", "BC Lions", "Belarus", "Belenenses", "Belgium", "Belize", "Belmont Bruins", "Beloit Snappers", "Ben Nguyen", "Benfica", "Bengal Warriors", "Bengaluru Bulls", "Bengaluru FC", "Bengaluru Raptors", "Benin", "Bermuda", "Bethe Correia", "Bethune Cookman Wildcats", "Betis Sevilla", "Bhutan", "Billings Mustangs", "Binghamton Bearcats", "Binghamton Mets", "Birmingham Barons", "Birmingham City", "Black Hawks Hyderabad", "Blackburn Rovers", "Blaublitz Akita", "Bluefield Orioles", "Boavista", "Bobby Labonte", "Boca Juniors", "Boise Hawks", "Boise State Broncos", "Bolivia", "Bologna", "Bolton Wanderers", "Bordeaux", "Borussia Dortmund", "Borussia Monchengladbach", "Bosnia and Herzegovina", "Boston Beaneaters", "Boston Beans", "Boston Bruins", "Boston Celtics", "Boston College Eagles", "Boston Legacy FC", "Boston Patriots", "Boston Red Sox", "Boston Redskins", "Boston University Terriers", "Botswana", "Bowie Baysox", "Bowling Green Falcons", "Bowling Green Hot Rods", "Brad Keselowski", "Brad Tavares", "Bradenton Marauders", "Bradley Braves", "Brandon Moreno", "Brazil", "Brentford", "Brescia", "Brest", "Brevard County Manatees", "Brian Ortega", "Brighton & Hove Albion", "Bristol City", "Bristol White Sox", "British Virgin Islands", "Brooklyn Cyclones", "Brooklyn Nets", "Brown Bears", "Brunei", "Bryant Bulldogs", "Bucknell Bison", "Buffalo Bandits", "Buffalo Bills", "Buffalo Bisons", "Buffalo Braves", "Buffalo Bulls", "Buffalo Sabres", "Bulgaria", "Burkina Faso", "Burlington Bees", "Burlington Royals", "Burnley", "Burundi", "Butler Bulldogs", "BWT Racing Point", "BYU Cougars", "C.D. Chivas USA", "CA River Plate", "Cagliari Calcio", "Cal Irvine Anteaters", "Cal Poly Mustangs", "Cal Riverside Highlanders", "Cal Santa Barbara Gauchos", "Cal State Bakersfield Roadrunners", "Cal State Fullerton Titans", "Cal State Northridge Matadors", "Cal State Sacramento Hornets", "Calcio Catania", "Calgary Flames", "Calgary Roughnecks", "Calgary Stampeders", "Calicut Heroes", "California Angels", "California Baptist Lancers", "California Golden Bears", "California Seals", "Cambodia", "Cameroon", "Campbell Fighting Camels", "Canada", "Canisius Golden Griffins", "Cape Verde", "Cardiff City", "Carl Edwards", "Carla Esparza", "Carolina Hurricanes", "Carolina Mudcats", "Carolina Panthers", "Casa Pia AC", "Casey Mears", "Casper Ghosts", "Cat Zingano", "Catanzaro", "Cavalry FC", "Cayman Islands", "CD Lugo", "CD Mirandés", "CD Numancia", "CD Santa Clara", "CD Tenerife", "Cedar Rapids Kernels", "Celta Vigo", "Celtic", "Centenary Gentlemen", "Central African Republic", "Central Arkansas Bears", "Central Connecticut Blue Devils", "Central Connecticut State Blue Devils", "Central Florida Golden Knights", "Central Michigan Chippewas", "Cerezo Osaka", "CF Atlas", "CF Estrela", "CF Fuenlabrada", "CF Monterrey", "Chad", "Chad Mendes", "Chan Sung Jung", "Charleston Cougars", "Charleston RiverDogs", "Charleston Southern Buccaneers", "Charlotte 49ers", "Charlotte Hornets", "Charlotte Knights", "Charlotte Sting", "Charlotte Stone Crabs", "Charlton Athletic", "Chase Elliott", "Chattanooga Lookouts", "Chaves", "Chelsea", "Chennai City FC", "Chennai Spartans", "Chennai Super Kings", "Chennai Superstarz", "Chennaiyin FC", "CHIBA JETS", "Chiba Lotte Marines", "Chicago Bears", "Chicago Blackhawks", "Chicago Bulls", "Chicago Cardinals", "Chicago Cubs", "Chicago Fire", "Chicago Red Stars", "Chicago Sky", "Chicago Stags", "Chicago State Cougars", "Chicago White Sox", "Chicago White Stockings", "Chicago Whitesox", "Chicago Zephyrs", "Chievo Verona", "Chile", "China", "Chinese Taipei", "Chris Buescher", "Chris Weidman", "Chunichi Dragons", "Churchill Brothers FC Goa", "Cincinnati Bearcats", "Cincinnati Bengals", "Cincinnati Redlegs", "Cincinnati Reds", "Citadel Bulldogs", "Cittadella", "Claudia Gadelha", "Clearwater Threshers", "Clemson Tigers", "Clermont Foot 63", "Cleveland Barons", "Cleveland Blues", "Cleveland Browns", "Cleveland Cavaliers", "Cleveland Indians", "Cleveland Naps", "Cleveland Rockers", "Cleveland State Vikings", "Clint Bowyer", "Clinton LumberKings", "Club América", "Club Atlético River Plate", "Club Deportivo Guadalajara - Chivas", "Club Deportivo Social y Cultural - Cruz Azul", "Club Santos Laguna", "Club Universidad Nacional A.C. - Pumas", "Coastal Carolina Chanticleers", "Cody Garbrandt", "Cody Stamann", "Colby Covington", "Colgate Raiders", "Colombia", "Colorado Avalanche", "Colorado Buffaloes", "Colorado College Tigers", "Colorado Mammoth", "Colorado Rapids", "Colorado Rockies", "Colorado Springs Sky Sox", "Colorado State Rams", "Columbia Lions", "Columbus Blue Jackets", "Columbus Clippers", "Columbus Crew", "Como", "Comoros", "Congo", "Connecticut Huskies", "Connecticut Sun", "Connecticut Tigers", "Conor McGregor", "Consadole Sapporo", "Cook Islands", "Coppin State Eagles", "Corey Anderson", "Cornell Big Red", "Corpus Christi Hooks", "Cortney Casey", "Cosenza", "Costa Rica", "Cote d'Ivoire", "Coventry City", "Creighton Bluejays", "Cris Cyborg", "Croatia", "Crvena Zvezda mts Belgrade Basketball", "Crystal Palace", "CSKA Moscow Basketball", "Cub Swanson", "Cuba", "Curtis Blaydes", "Cyprus", "Czech Republic", "Cádiz CF", "D.C. United", "Dabang Delhi KC", "Dabang Mumbai HC", "Dale Earnhardt", "Dale Earnhardt Jr.", "Dallas Baptist Patriots", "Dallas Cowboys", "Dallas Mavericks", "Dallas Stars", "Dallas Texans", "Dallas Wings", "Dan Hooker", "Daniel Cormier", "Daniel Suárez", "Danville Braves", "Darmstadt 98", "Darrell Wallace Jr.", "Darren Elkins", "Darren Till", "Dartmouth Big Green", "David Branch", "David Ragan", "Davidson Wildcats", "Dayton Dragons", "Dayton Flyers", "Daytona Cubs", "De Graafschap", "Deiveson Figueiredo", "Delaware Fightin' Blue Hens", "Delaware State Hornets", "Delhi Capitals", "Delhi Sultans", "Delhi Waveriders", "Delmarva Shorebirds", "Demian Maia", "Democratic Republic of the Congo", "Denmark", "Denny Hamlin", "Denver Broncos", "Denver Nuggets", "Denver Pioneers", "DePaul Blue Demons", "Deportivo La Coruna", "Derby County", "Derek Brunson", "Derrick Lewis", "Desportivo das Aves", "Detroit Cougars", "Detroit Falcons", "Detroit Lions", "Detroit Pistons", "Detroit Red Wings", "Detroit Shock", "Detroit Tigers", "Detroit Titans", "Dijon FCO", "Djibouti", "Dominica", "Dominican Republic", "Dominick Cruz", "Dominick Reyes", "Donald Cerrone", "Douglas Silva de Andrade", "Drake Bulldogs", "Drexel Dragons", "Duke Blue Devils", "Dundee", "Dundee United", "Dunedin Blue Jays", "Dunfermline", "Duquesne Dukes", "Durham Bulls", "Dustin Ortiz", "Dustin Poirier", "Dynamo Dresden", "E-Sports", "EARTHFRIENDS TOKYO Z", "East Carolina Pirates", "East Tennessee State Buccaneers", "East Timor", "Eastern Illinois Panthers", "Eastern Kentucky Colonels", "Eastern Michigan Eagles", "Eastern Washington Eagles", "Ecuador", "Edmonton Football Team", "Edmonton Oilers", "Edson Barboza", "Egypt", "Ehime FC", "EHIME ORANGE VIKINGS", "Eintracht Braunschweig", "Eintracht Frankfurt", "El Salvador", "Elche CF", "Elias Theodorou", "Elizabethton Twins", "Elizeu Zaleski dos Santos", "Elliott Sadler", "Elon Phoenix", "Empoli", "Energie Cottbus", "England", "Equatorial Guinea", "Erie SeaWolves", "Erik Jones", "Eritrea", "Espanyol", "Estonia", "Estoril", "Ethiopia", "Eugene Emeralds", "Evansville Purple Aces", "Everett AquaSox", "Everton", "Excelsior", "Extremadura UD", "F EAGLES NAGOYA", "F.C. Gifu", "Fagiano Okayama FC", "Fairfield Stags", "Fairleigh Dickinson Devils", "Fairleigh Dickinson Knights", "Famalicão", "Farense", "FC Arouca", "FC Arsenal Tula", "FC Augsburg", "FC Basel", "FC Cincinnati", "FC Dallas", "FC Edmonton", "FC Goa", "FC Groningen", "FC Heidenheim", "FC Juárez", "FC Lorient", "FC Machida Zelvia", "FC Ryūkyū", "FC Sevilla", "FC St. Pauli", "FC Startak Moscow", "FC Tokyo", "FC Utrecht", "FC Volendam", "FC Zwolle", "Federated States of Micronesia", "Felice Herrig", "Fenerbahce Beko Istanbul", "Feyenoord Rotterdam", "Fiji", "Finland", "Fiorentina", "FIU Panthers", "Florida A&M Rattlers", "Florida Atlantic Owls", "Florida Gators", "Florida Gulf Coast Eagles", "Florida International Golden Panthers", "Florida Panthers", "Florida State Seminoles", "Fordham Rams", "Forge FC", "Fort Myers Miracle", "Fort Wayne Mastodons", "Fort Wayne Pistons", "Fort Wayne TinCaps", "Fortuna Düsseldorf", "Fortuna Sittard", "France", "Francis Ngannou", "Francisco Trinaldo", "Frankie Edgar", "Frederick Keys", "Fresno Grizzlies", "Fresno State Bulldogs", "Frisco RoughRiders", "Frosinone FC", "FSV Mainz 05", "Fujieda MYFC", "Fukuoka SoftBank Hawks", "FUKUSHIMA FIREBONDS", "Fukushima United FC", "Fulham", "Furman Paladins", "Gabon", "Gainare Tottori", "Galatasaray SK", "Gamba Osaka", "Gardner-Webb Runnin' Bulldogs", "Genoa", "George Mason Patriots", "George Washington Colonials", "Georges St-Pierre", "Georgetown Hoyas", "Georgia", "Georgia Bulldogs", "Georgia Southern Eagles", "Georgia State Panthers", "Georgia Swarm", "Georgia Tech Yellow Jackets", "Germaine de Randamie", "Germany", "Getafe CF", "Getafe FC", "Ghana", "Gil Vicente", "Giravanz Kitakyushu", "Girona FC", "Glover Teixeira", "Go Ahead Eagles", "Gokulam Kerala FC", "Golden State Valkyries", "Golden State Warriors", "Gonzaga Bulldogs", "Grambling Tigers", "Granada CF", "Grand Canyon Antelopes", "Gray Gaulding", "Great Britain", "Great Falls Voyagers", "Great Lakes Loons", "Greece", "Green Bay Packers", "Greeneville Astros", "Greensboro Grasshoppers", "Greenville Drive", "Greg Biffle", "Grenada", "Greuther Fürth", "Grulla Morioka", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guingamp", "Gujarat Fortunegiants", "Gujarat Lions", "GUNMA CRANE THUNDERS", "Gunnar Nelson", "Guyana", "Gwinnett Braves", "Haas F1 Team", "Hagerstown Suns", "Haiti", "Halifax Thunderbirds", "Hamburg SV", "Hamilton Tiger-Cats", "Hamilton Tigers", "Hampton Pirates", "Hannover 96", "Hansa Rostock", "Hanshin Tigers", "Harrisburg Senators", "Hartford Hawks", "Hartford Whalers", "Harvard Crimson", "Haryana Hammers", "Haryana Steelers", "Hawaii Rainbow Warriors", "Hearts", "Heerenveen", "Helena Brewers", "Henry Cejudo", "Heracles Almelo", "Hertha Berlin", "Hertha BSC", "HFX Wanderers FC", "Hibernian", "Hickory Crawdads", "High Desert Mavericks", "High Point Panthers", "High School Baseball Team", "HIROSHIMA DRAGONFLIES", "Hiroshima Toyo Carp", "Hofstra Flying Dutchmen", "Hofstra Pride", "Hokkaido Nippon-Ham Fighters", "Holly Holm", "Holy Cross Crusaders", "Honduras", "Hong Kong", "Houston Astros", "Houston Baptist Huskies", "Houston Comets", "Houston Cougars", "Houston Dash", "Houston Dynamo", "Houston Oilers", "Houston Rockets", "Houston Texans", "Howard Bison", "Huddersfield Town", "Hudson Valley Renegades", "Hull City", "Hungary", "Huntsville Stars", "Hyderabad FC", "Hyderabad Hunters", "IBARAKI ROBOTS", "Iceland", "Idaho Falls Chukars", "Idaho State Bengals", "Idaho Vandals", "Ilir Latifi", "Illinois Chicago Flames", "Illinois Illini", "Illinois State Redbirds", "Incarnate Word Cardinals", "Independent Olympic Athletes", "India", "Indian Arrows", "Indiana Fever", "Indiana Hoosiers", "Indiana Pacers", "Indiana State Sycamores", "Indianapolis Colts", "Indianapolis Indians", "Indonesia", "Inland Empire 66ers", "Inter Miami CF", "Inter Milan", "Inverness Caledonian Thistle", "Iona Gaels", "Iowa Cubs", "Iowa Hawkeyes", "Iowa State Cyclones", "IPFW Mastodons", "Ipswich Town", "Iran", "Iraq", "Ireland", "Irene Aldana", "Israel", "Israel Adesanya", "Italy", "IUPUI Jaguars", "Ivory Coast", "Iwaki FC", "IWATE BIG BULLS", "Jacare Souza", "Jackson State Tigers", "Jacksonville Dolphins", "Jacksonville Jaguars", "Jacksonville State Gamecocks", "Jacksonville Suns", "Jaipur Pink Panthers", "Jamaica", "James Madison Dukes", "James Vick", "Jamestown Jammers", "Jamie McMurray", "Jamshedpur FC", "Jan Blachowicz", "Japan", "Jared Cannonier", "Jaypee Punjab Warriors", "JEF United Ichihara Chiba", "Jeff Burton", "Jeff Gordon", "Jennifer Maia", "Jeremy Stephens", "Jessica Andrade", "Jessica Eye", "Jessica-Rose Clark", "Jimi Manuwa", "Jimmie Johnson", "Jimmie Rivera", "Joanna Jedrzejczyk", "Joanne Calderwood", "Joey Logano", "John Dodson", "John Lineker", "John Moraga", "Johnson City Cardinals", "Jon Jones", "Jordan", "Jorge Masvidal", "Jose Aldo", "Joseph Benavidez", "Josh Emmett", "Juan Pablo Montoya", "Julianna Pena", "Junior dos Santos", "Jupiter Hammerheads", "Jussier Formiga", "Justin Gaethje", "Justin Willis", "Juventus", "Júbilo Iwata", "KAGAWA FIVE ARROWS", "KAGOSHIMA REBNISE", "Kaiserslautern", "Kalinga Lancers", "Kamaru Usman", "Kamatamare Sanuki", "KANAZAWA SAMURAIZ", "Kane County Cougars", "Kannapolis Intimidators", "Kansas City Athletics", "Kansas City Chiefs", "Kansas City Current", "Kansas City Kings", "Kansas City Royals", "Kansas City Scouts", "Kansas Jayhawks", "Kansas State Wildcats", "Karlsruher SC", "Karolina Kowalkiewicz", "Kasey Kahne", "Kashima Antlers", "Kashiwa Reysol", "Kataller Toyama", "Katlyn Chookagian", "KAWASAKI BRAVE THUNDERS", "Kawasaki Frontale", "Kazakhstan", "Kelvin Gastelum", "Kennesaw State Owls", "Kent State Golden Flashes", "Kentucky Wildcats", "Kenya", "Kerala Blasters FC", "Ketlen Vieira", "Kevin Harvick", "Kevin Lee", "Khabib Nurmagomedov", "Khimki Moscow Region Basketball", "Kilmarnock", "Kings XI Punjab", "Kingsport Mets", "Kinston Indians", "Kiribati", "KIROLBET Baskonia Vitoria-Gasteiz Basketball", "Kochi Blue Spikers", "Kolkata Knight Riders", "Kosovo", "KUMAMOTO VOLTERS", "Kurt Busch", "Kyle Busch", "Kyle Larson", "KYOTO HANNARYZ", "Kyoto Sanga FC", "Kyrgyzstan", "La Salle Explorers", "Lafayette Leopards", "Lake County Captains", "Lake Elsinore Storm", "Lakeland Flying Tigers", "Lakewood BlueClaws", "Lamar Cardinals", "Lancaster JetHawks", "Lansing Lugnuts", "Laos", "Las Vegas 51s", "Las Vegas Aces", "Las Vegas Raiders", "Latvia", "Lauren Murphy Increase1", "Lazio", "LDLC ASVEL Villeurbanne", "Le Havre", "Lebanon", "Lecce", "Lecco", "Leeds United", "Leganés", "Lehigh Mountain Hawks", "Lehigh Valley IronPigs", "Leicester City", "Lens", "Leon Edwards", "Lesotho", "LEVANGA HOKKAIDO", "Levante UD", "Lexington Legends", "Liberia", "Liberty Flames", "Libya", "Liechtenstein", "Lille", "Lina Lansberg", "Lipscomb Bisons", "Lithuania", "Liverpool", "Livingston", "Liz Carmouche", "Long Beach State 49ers", "Long Beach State Sharks", "Long Island Blackbirds", "Longwood Lancers", "Los Angeles Angels", "Los Angeles Chargers", "Los Angeles Clippers", "Los Angeles Dodgers", "Los Angeles FC", "Los Angeles Galaxy", "Los Angeles Kings", "Los Angeles Lakers", "Los Angeles Rams", "Los Angeles Sparks", "Louisiana Lafayette Ragin' Cajuns", "Louisiana Monroe Indians", "Louisiana Tech Bulldogs", "Louisiana-Monroe Warhawks", "Louisville Bats", "Louisville Cardinals", "Lowell Spinners", "Loyola Chicago Ramblers", "Loyola Maryland Greyhounds", "Loyola Marymount Lions", "LPGA", "LSU Tigers", "Lucie Pudilova", "Luke Rockhold", "Luton Town", "Luxembourg", "Lynchburg Hillcats", "Lyon", "Maccabi FOX Tel Aviv Basketball", "Macedonia", "Mackenzie Dern", "Madagascar", "Mahoning Valley Scrappers", "Maine Black Bears", "Malaga", "Malawi", "Malaysia", "Maldives", "Mali", "Mallorca", "Malta", "Manchester City", "Manchester United", "Manhattan Jaspers", "Mara Romero Borella", "Marcin Tybura", "Marion Reneau", "Marist Red Foxes", "Mark Hunt", "Mark Martin", "Marlon Moraes", "Marquette Golden Eagles", "Marseille", "Marshall Islands", "Marshall Thundering Herd", "Martin Truex Jr.", "Maryland Baltimore County Retrievers", "Maryland Eastern Shore Fighting Hawks", "Maryland Terrapins", "Marítimo", "Massachusetts Minutemen", "Matheus Nicolau", "Matsumoto Yamaga FC", "Matt DiBenedetto", "Matt Kenseth", "Mauricio Rua", "Mauritania", "Mauritius", "Max Holloway", "Mazatlán", "Mclaren", "McNeese State Cowboys", "Memphis Grizzlies", "Memphis Redbirds", "Memphis Tigers", "Mercedes-AMG Petronas", "Mercer Bears", "Metz", "Mexico", "Miami (Ohio) Redhawks", "Miami Dolphins", "Miami Heat", "Miami Hurricanes", "Miami Marlins", "Miami Sol", "Michael Chiesa", "Michael McDowell", "Michelle Waterson", "Michigan State Spartans", "Michigan Wolverines", "Middle Tennessee State Blue Raiders", "Middlesbrough", "Middleweight", "Midland RockHounds", "Millwall", "Milwaukee Braves", "Milwaukee Brewers", "Milwaukee Bucks", "Milwaukee Hawks", "Minnesota Golden Gophers", "Minnesota Lynx", "Minnesota North Stars", "Minnesota Timberwolves", "Minnesota Twins", "Minnesota United FC", "Minnesota Vikings", "Minnesota Wild", "Mirsad Bektic", "Misha Cirkunov", "Mississippi Braves", "Mississippi Old Miss Rebels", "Mississippi State Bulldogs", "Mississippi Valley State Delta Devils", "Missoula Osprey", "Missouri Kansas City Kangaroos", "Missouri Tigers", "Mito HollyHock", "Mobile BayBears", "Modena", "Modesto Nuts", "Mohun Bagan", "Moldova", "Monaco", "Mongolia", "Monmouth Hawks", "Montana Grizzlies", "Montana State Bobcats", "Montedio Yamagata", "Montenegro", "Montgomery Biscuits", "Montpellier", "Montreal Alouettes", "Montreal Canadiens", "Montreal Expos", "Montreal Impact", "Montreal Maroons", "Montreal Wanderers", "Monza", "Morehead State Eagles", "Moreirense", "Morgan State Bears", "Morocco", "Motherwell", "Mount St. Mary's Mountaineers", "Mozambique", "MP Yodha", "Mumbai City FC", "Mumbai Indians", "Mumbai Maharathi", "Mumbai Rockets", "Murray State Racers", "Myanmar", "Myrtle Beach Pelicans", "NAC Breda", "NAGOYA DIAMOND DOLPHINS", "Nagoya Grampus Eight", "Namibia", "Nantes", "Nashville Predators", "Nashville SC", "Nashville Sounds", "Nate Diaz", "Nauru", "Navy Midshipmen", "NCR Punjab Royals", "Nebraska Cornhuskers", "NEC Nijmegen", "Necaxa", "Neil Magny", "Nepal", "NEROCA FC", "Netherlands", "Nevada Wolf Pack", "New Britain Rock Cats", "New England Black Wolves", "New England Patriots", "New England Revolution", "New Hampshire Fisher Cats", "New Hampshire Wildcats", "New Jersey Devils", "New Jersey Nets", "New Mexico Lobos", "New Mexico State Aggies", "New Orleans Pelicans", "New Orleans Privateers", "New Orleans Saints", "New Orleans Zephyrs", "New York Americans", "New York City FC", "New York Giants", "New York Highlanders", "New York Islanders", "New York Jets", "New York Knicks", "New York Liberty", "New York Mets", "New York Rangers", "New York Red Bulls", "New York Riptide", "New York Titans", "New York Yankees", "New Zealand", "Newcastle United", "Niagara Purple Eagles", "Nicaragua", "Nicco Montaño", "Nice", "Nicholls State Colonels", "Niger", "Nigeria", "NIIGATA ALBIREX BB", "Nikita Krylov", "Nina Ansaroff", "NISHINOMIYA STORKS", "NJ/NY Gotham FC", "NJIT Highlanders", "Norfolk State Spartans", "Norfolk Tides", "North Alabama Lions", "North Carolina A&T Aggies", "North Carolina Asheville Bulldogs", "North Carolina Central Eagles", "North Carolina Charlotte 49ers", "North Carolina Courage", "North Carolina Greensboro Spartans", "North Carolina State Wolfpack", "North Carolina Tar Heels", "North Carolina Wilmington Seahawks", "North Dakota", "North Dakota Fighting Hawks", "North Dakota Fighting Sioux", "North Dakota State Bison", "North Eastern Warriors", "North Florida Ospreys", "North Korea", "North Texas Mean Green", "Northeast United FC", "Northeastern Huskies", "Northeastern Illinois Golden Eagles", "Northern Arizona Lumberjacks", "Northern Colorado Bears", "Northern Illinois Huskies", "Northern Iowa Panthers", "Northern Kentucky Norse", "Northwest Arkansas Naturals", "Northwestern State Demons", "Northwestern Wildcats", "Norway", "Norwich City", "Notre Dame Fighting Irish", "Nottingham Forest", "Nurnberg", "NYIT Bears", "NYU Bobcats", "NYU Violets", "Nîmes Olympique", "Oakland Athletics", "Oakland Golden Grizzlies", "Oakland Raiders", "Odisha FC", "Ogden Raptors", "Ohio Bobcats", "Ohio State Buckeyes", "Oita Trinita", "Oklahoma City RedHawks", "Oklahoma City Thunder", "Oklahoma Sooners", "Oklahoma State Cowboys", "Old Dominion Monarchs", "Ole Miss Rebels", "Oleksiy Oliynyk", "Olympiacos Basketball", "Omaha Mavericks", "Omaha Royals", "Oman", "Omiya Ardija", "Oral Roberts Golden Eagles", "Oregon Ducks", "Oregon State Beavers", "Orem Owlz", "Orix Buffaloes", "Orlando City SC", "Orlando Magic", "Orlando Pride", "OSAKA EVESSA", "Osasuna", "OTSUKA CORPORATION ALPHAS", "Ottawa Redblacks", "Ottawa Senators", "Ovince Saint Preux", "Pacific Boxers", "Pacific FC", "Pacific Tigers", "Pakistan", "Palau", "Palermo", "Palestine", "Palm Beach Cardinals", "Panama", "Panathinaikos Basketball", "Papua New Guinea", "Paraguay", "Parma", "Parma Calcio", "Patna Pirates", "Patrick Thistle", "Paul Felder", "Paul Menard", "Paulo Costa", "Pawtucket Red Sox", "Paços de Ferreira", "Pedro Munhoz", "Penn Quakers", "Penn State Nittany Lions", "Pennsylvania Quakers", "Peoria Chiefs", "Pepperdine Waves", "Peru", "Perugia", "PGA", "Philadelphia 76ers", "Philadelphia Athletics", "Philadelphia Eagles", "Philadelphia Flyers", "Philadelphia Phillies", "Philadelphia Quakers", "Philadelphia Union", "Philadelphia Wings", "Philippines", "Phoenix Mercury", "Phoenix Suns", "Piacenza", "Pisa", "Pittsburgh Panthers", "Pittsburgh Penguins", "Pittsburgh Pirates", "Pittsburgh Steelers", "Plymouth Argyle", "Poland", "Portimonense SC", "Portland Beavers", "Portland Fire", "Portland Pilots", "Portland Sea Dogs", "Portland State Vikings", "Portland Thorns FC", "Portland Timbers", "Portland Trail Blazers", "Porto", "Portugal", "Potomac Nationals", "Prairie View Panthers", "Presbyterian Blue Hose", "Preston North End", "Princeton Rays", "Princeton Tigers", "Providence Friars", "PSG", "PSV Eindhoven", "Puerto Rico", "Pulaski Mariners", "Pune 7 Aces", "Puneri Paltan", "Punjab FC", "Purdue Boilermakers", "Qatar", "QPR", "Quad Cities River Bandits", "Querétaro", "Quess East Bengal", "Quinnipiac Bobcats", "Racing Louisville FC", "Racing Santander", "Radford Highlanders", "Rafael dos Anjos", "Rajasthan Royals", "Ranchi Rays", "Rancho Cucamonga Quakes", "Randa Markos", "Rangers", "Rani Yahya", "Raphael Assunção", "Raquel Pennington", "Ray Borg", "Rayo Vallecano", "RB Leipzig", "RBC Roosendaal", "Reading", "Reading Phillies", "Real Kashmir FC", "Real Madrid", "Real Madrid Basketball", "Real Oviedo", "Real Salt Lake", "Real Sociedad", "Real Zaragoza", "Recreativo Huelva", "Red Bull Racing", "Refugee Olympic Team", "Reggina", "Renato Moicano", "Renault DP World", "Rennes", "Reno Aces", "RENOFA Yamaguchi", "Rhode Island Rams", "Ricardo Lamas", "Rice Owls", "Richard Petty", "Richmond Flying Squirrels", "Richmond Spiders", "Ricky Stenhouse Jr.", "Rider Broncs", "Rio Ave", "Rising Pune Supergiants", "RIZING ZEPHYR FUKUOKA", "RKC Waalwijk", "Roasso Kumamoto", "Rob Font", "Robbie Lawler", "Robert Morris Colonials", "Robert Whittaker", "Rochester Knighthawks", "Rochester Red Wings", "Rochester Royals", "Roda JC Kerkrade", "Roma", "Romania", "Rome Braves", "Rose Namajunas", "Ross County", "Rotherham United", "Round Rock Express", "Roxanne Modafferi", "Royal Challengers Bangalore", "Russia", "Rutgers Scarlet Knights", "Rwanda", "Ryan Blaney", "Ryan Newman", "RYUKYU GOLDEN KINGS", "Sacramento Kings", "Sacramento Monarchs", "Sacramento River Cats", "Sacred Heart Pioneers", "Sagan Tosu", "Saint Kitts and Nevis", "Saint Lucia", "Saint Mary's Gaels", "Saint Vincent and the Grenadines", "SAITAMA BRONCOS", "Saitama Seibu Lions", "Salem Red Sox", "Salem-Keizer Volcanoes", "Salt Lake Bees", "Sam Houston State Bearkats", "Samford Bulldogs", "Samoa", "Sampdoria", "San Antonio Missions", "San Antonio Silver Stars", "San Antonio Spurs", "San Diego Chargers", "San Diego Clippers", "San Diego Padres", "San Diego Rockets", "San Diego Seals", "San Diego State Aztecs", "San Diego Toreros", "San Diego Wave FC", "San Francisco 49ers", "San Francisco Dons", "San Francisco Giants", "San Francisco Warriors", "San Jose Earthquakes", "San Jose Giants", "San Jose Sharks", "San Jose State Spartans", "San Marino", "SAN-EN NEOPHOENIX", "Sanfrecce Hiroshima", "Santa Clara Broncos", "Santiago Ponzinibbio", "Sao Paulo FC", "Sara McMann", "Saskatchewan Roughriders", "Saskatchewan Rush", "Sassuolo", "Saudi Arabia", "Savannah Sand Gnats", "Savannah State Tigers", "SC Cambuur", "SC Sagamihara", "Schalke", "Scotland", "Scranton/Wilkes-Barre Yankees", "Scuderia AlphaTauri", "Scuderia Ferrari", "SD Eibar", "SD Huesca", "SD Ponferradina", "SEAHORSES MIKAWA", "Seattle Kraken", "Seattle Mariners", "Seattle Redhawks", "Seattle Reign FC", "Seattle Seahawks", "Seattle Sounders FC", "Seattle Storm", "Seattle SuperSonics", "Sedan", "SENDAI EIGHTY NINERS", "Senegal", "Serbia", "Serbia and Montenegro", "Sergio Pettis", "Seton Hall Pirates", "Seychelles", "Shamil Abdurakhimov", "Sheffield United", "Sheffield Wednesday", "SHIGA LAKESTARS", "SHIMANE SUSANOO MAGIC", "Shimizu S-Pulse", "SHINSHU BRAVE WARRIORS", "Shonan Bellmare", "Siena Saints", "Sierra Leone", "Sijara Eubanks", "Singapore", "SIU Edwardsville Cougars", "Sky Blue FC", "Slovakia", "Slovenia", "SM Caen", "SMU Mustangs", "Sochaux", "Solomon Islands", "Somalia", "South Africa", "South Alabama Jaguars", "South Bend Silver Hawks", "South Carolina Fighting Gamecocks", "South Carolina State Bulldogs", "South Dakota Coyotes", "South Dakota State Jackrabbits", "South Florida Bulls", "South Korea", "South Sudan", "Southampton", "Southeast Missouri State Indians", "Southeast Missouri State Redhawks", "Southeastern Louisiana Lions", "Southern Illinois Salukis", "Southern Jaguars", "Southern Mississippi Golden Eagles", "Southern Utah Thunderbirds", "Southwest Missouri State Bears", "Spain", "Spal", "Sparta Rotterdam", "Spokane Indians", "Sport Club Corinthians Paulista", "Sport-Club Freiburg", "Sporting", "Sporting de Braga", "Sporting Gijón", "Sporting Kansas City", "Springfield Cardinals", "Sri Lanka", "SSC Napoli", "St Johnstone", "St Mirren", "St. Bonaventure Bonnies", "St. Francis (New York) Terriers", "St. Francis (Pennsylvania) Red Flash", "St. Francis Brooklyn Terriers", "St. John's Red Storm", "St. Joseph's Hawks", "St. Louis Blues", "St. Louis Bombers", "St. Louis Cardinals", "St. Louis City", "St. Louis Eagles", "St. Louis Hawks", "St. Louis Rams", "St. Louis University Billikens", "St. Lucie Mets", "St. Mary's Rattlers", "St. Peter's Peacocks", "Stade de Reims", "Stanford Cardinal", "State College Spikes", "Staten Island Yankees", "Stefan Struve", "Stephen F. Austin Lumberjacks", "Stephen Thompson", "Stetson Hatters", "Stipe Miocic", "Stockton Ports", "Stoke City", "Stony Brook Seawolves", "Strasbourg", "Sudan", "Sunderland", "Sunrisers Hyderabad", "SUNROCKERS SHIBUYA", "Suriname", "Swansea City", "Swaziland", "Sweden", "Switzerland", "Syracuse Chiefs", "Syracuse Nationals", "Syracuse Orange", "Syria", "São Tomé and Príncipe", "Tacoma Rainiers", "Tai Tuivasa", "Tajikistan", "Tamil Thalaivas", "Tampa Bay Buccaneers", "Tampa Bay Lightning", "Tampa Bay Rays", "Tampa Rays", "Tampa Yankees", "Tanzania", "Tatiana Suarez", "TCU Horned Frogs", "Team Cuba", "Team Dominican Republic", "Team Japan", "Team Netherlands", "Team Panama", "Team Puerto Rico", "Team South Korea", "Team United States", "Team Venezuela", "Tecia Torres", "Telugu Titans", "Temple Owls", "Tennessee Chattanooga Mocs", "Tennessee Martin Skyhawks", "Tennessee Smokies", "Tennessee State Tigers", "Tennessee Tech Golden Eagles", "Tennessee Titans", "Tennessee Volunteers", "Tennis", "Ternana", "Texas A&M Aggies", "Texas A&M-Corpus Christi Islanders", "Texas Arlington Mavericks", "Texas El Paso Miners", "Texas Longhorns", "Texas Pan American Broncs", "Texas Rangers", "Texas San Antonio Roadrunners", "Texas Southern Tigers", "Texas State Bobcats", "Texas Tech Red Raiders", "Texas-Rio Grande Valley Vaqueros", "Thailand", "The Gambia", "Thespakusatsu Gunma", "Thiago Santos", "Thomas Almeida", "Thonon Evian FC", "Tiddim Road Athletic Union", "Tim Elliott", "TJ Dillashaw", "TOCHIGI BREX", "Tochigi SC", "Togo", "Tohoku Rakuten Golden Eagles", "TOKIO MARINE NICHIDO BIG BLUE", "Tokushima Vortis", "TOKYO CINQ REVES", "TOKYO EXCELLENCE", "TOKYO HACHIOJI TRAINS", "Tokyo Verdy1969", "Tokyo Yakult Swallows", "Toledo Mud Hens", "Toledo Rockets", "Tondela", "Tonga", "Tony Ferguson", "Tony Stewart", "Tonya Evinger", "Torino", "Toronto Arenas", "Toronto Argonauts", "Toronto Blue Jays", "Toronto FC", "Toronto Maple Leafs", "Toronto Raptors", "Toronto Rock", "Toronto St. Pats", "Toronto Tempo", "Tottenham Hotspur", "Toulouse FC", "Towson Tigers", "TOYAMA GROUSES", "TOYODA GOSEI SCORPIONS", "Trenton Thunder", "Trevor Bayne", "Tri-City Dust Devils", "Tri-City ValleyCats", "Trinidad and Tobago", "Troy State Trojans", "Troyes", "TSG 1899 Hoffenheim", "TSV 1860 Munich", "Tulane Green Wave", "Tulsa Drillers", "Tulsa Golden Hurricane", "Tulsa Shock", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Twente Enschede", "Ty Dillon", "Tyron Woodley", "Tyson Pedro", "U Mumba", "U Mumba Volley", "UANL Tigres", "UC Davis Aggies", "UCLA Bruins", "UD Almería", "UD Las Palmas", "Udinese", "Uganda", "Ukraine", "Ulka Sasaki", "UMass Lowell River Hawks", "Union Berlin", "United Arab Emirates", "United States", "UNLV Rebels", "UP Dangal", "UP Yoddha", "Urawa Red Diamonds", "Uriah Hall", "Uruguay", "US Salernitana", "USC Trojans", "USC Upstate Spartans", "Utah Jazz", "Utah Mammoth", "Utah Royals FC", "Utah State Aggies", "Utah Utes", "Utah Valley Wolverines", "Uttar Pradesh Wizards", "Uzbekistan", "V-Varen Nagasaki", "Valencia", "Valencia Basketball", "Valenciennes FC", "Valentina Shevchenko", "Valladolid", "Valour FC", "Valparaiso Crusaders", "Vancouver Canadians", "Vancouver Canucks", "Vancouver FC", "Vancouver Warriors", "Vancouver Whitecaps", "Vanderbilt Commodores", "Vanuatu", "Vegalta Sendai", "Vegas Golden Knights", "Venezia FC", "Venezuela", "Ventforet Kofu", "Vermont Catamounts", "Vermont Lake Monsters", "Verona FC", "VfB Stuttgart", "VfL Bochum", "VfL Osnabrück", "VfL Wolfsburg", "Vietnam", "Villanova Wildcats", "Villareal", "Virgin Islands", "Virginia Cavaliers", "Virginia Commonwealth Rams", "Virginia Tech Hokies", "Visalia Rawhide", "Vissel Kobe", "Vitesse Arnhem", "Vitória Guimarães", "Vitória Setúbal", "VMI Keydets", "Volkan Oezdemir", "Wagner Seahawks", "Wake Forest Demon Deacons", "Wales", "Washington Capitals", "Washington Commanders", "Washington Football Team", "Washington Huskies", "Washington Mystics", "Washington Nationals", "Washington Spirit", "Washington State Cougars", "Washington Wizards", "Watford", "Weber State Wildcats", "Werder Bremen", "West Bromwich Albion", "West Ham United", "West Indies", "West Michigan Whitecaps", "West Tenn Diamond Jaxx", "West Virginia Mountaineers", "West Virginia Power", "Western Carolina Catamounts", "Western Illinois Leathernecks", "Western Kentucky Hilltoppers", "Western Michigan Broncos", "Wichita State Shockers", "Wigan", "Willem II Tilburg", "William & Mary Tribe", "William Byron", "Williams Racing", "Williamsport Crosscutters", "Wilmington Blue Rocks", "Wilson Reis", "Winnipeg Blue Bombers", "Winnipeg Jets", "Winston-Salem Dash", "Winthrop Eagles", "Wisconsin Badgers", "Wisconsin Green Bay Phoenix", "Wisconsin Milwaukee Panthers", "Wisconsin Timber Rattlers", "Wofford Terriers", "Wolverhampton Wanderers", "Wright State Raiders", "WUSA", "WWE", "Wyoming Cowboys", "X-Games", "Xavier Musketeers", "Yair Rodriguez", "Yakima Bears", "Yale Bulldogs", "YAMAGATA WYVERNS", "Yana Kunitskaya", "Yemen", "Yoel Romero", "YOKOHAMA B-CORSAIRS", "Yokohama DeNA BayStars", "Yokohama F. Marinos", "Yokohama FC", "Yomiuri Giants", "York United FC", "Youngstown State Penguins", "YSCC Yokohama", "Yugoslavia", "Zabit Magomedsharipov", "Zalgiris Kaunas Basketball", "Zambia", "Zenit St Petersburg Basketball", "Zimbabwe", "Zweigen Kanazawa"],
          optionLabels: {
              "1. FC Koln": "1. FC Koln",
              "1. FC Magdeburg": "1. FC Magdeburg",
              "A. J. Allmendinger": "A. J. Allmendinger",
              "A.S. Livorno Calcio": "A.S. Livorno Calcio",
              Aberdeen: "Aberdeen",
              "Aberdeen IronBirds": "Aberdeen IronBirds",
              "Abilene Christian Wildcats": "Abilene Christian Wildcats",
              "AC Ajaccio": "AC Ajaccio",
              "AC Milan": "AC Milan",
              "AC Nagano Parceiro": "AC Nagano Parceiro",
              "AD Alcorcón": "AD Alcorcón",
              "ADO Den Haag": "ADO Den Haag",
              "AFC Bournemouth": "AFC Bournemouth",
              Afghanistan: "Afghanistan",
              "Ahmedabad Defenders": "Ahmedabad Defenders",
              "Air Force Falcons": "Air Force Falcons",
              Airdrieonians: "Airdrieonians",
              "AISIN AW AREIONS ANJO": "AISIN AW AREIONS ANJO",
              "Aizawl FC": "Aizawl FC",
              "Ajax Amsterdam": "Ajax Amsterdam",
              "AKITA NORTHERN HAPPINETS": "AKITA NORTHERN HAPPINETS",
              "Akron Aeros": "Akron Aeros",
              "Akron Zips": "Akron Zips",
              "Al Iaquinta": "Al Iaquinta",
              "Alabama A&M Bulldogs": "Alabama A&M Bulldogs",
              "Alabama Birmingham Blazers": "Alabama Birmingham Blazers",
              "Alabama Crimson Tide": "Alabama Crimson Tide",
              "Alabama State Hornets": "Alabama State Hornets",
              Alaves: "Alaves",
              "ALBA Berlin Basketball": "ALBA Berlin Basketball",
              "Albacete BP": "Albacete BP",
              Albania: "Albania",
              "Albany Great Danes": "Albany Great Danes",
              "Albirex Niigata": "Albirex Niigata",
              "Albuquerque Isotopes": "Albuquerque Isotopes",
              "Alcorn State Braves": "Alcorn State Braves",
              "Alejandro Perez": "Alejandro Perez",
              "Alex Bowman": "Alex Bowman",
              "Alex Oliveira": "Alex Oliveira",
              "Alex Perez": "Alex Perez",
              "Alexa Grasso": "Alexa Grasso",
              "Alexander Gustafsson": "Alexander Gustafsson",
              "Alexander Hernandez": "Alexander Hernandez",
              "Alexander Volkanoski": "Alexander Volkanoski",
              "Alexander Volkov": "Alexander Volkov",
              "Alexandre Pantoja": "Alexandre Pantoja",
              "Alexis Davis": "Alexis Davis",
              "Alfa Romeo Racing": "Alfa Romeo Racing",
              Algeria: "Algeria",
              "Alistair Overeem": "Alistair Overeem",
              "Aljamain Sterling": "Aljamain Sterling",
              "Almere City": "Almere City",
              Alpine: "Alpine",
              "Altoona Curve": "Altoona Curve",
              "ALVARK TOKYO": "ALVARK TOKYO",
              "Amanda Nunes": "Amanda Nunes",
              "American Samoa": "American Samoa",
              "American University Eagles": "American University Eagles",
              "Amiens SC": "Amiens SC",
              "Anadolu Efes Istanbul Basketball": "Anadolu Efes Istanbul Basketball",
              "Anaheim Ducks": "Anaheim Ducks",
              Andorra: "Andorra",
              "Andrea Lee": "Andrea Lee",
              "Andrei Arlovski": "Andrei Arlovski",
              "Angel City FC": "Angel City FC",
              "Angela Hill": "Angela Hill",
              "Angers SCO": "Angers SCO",
              Angola: "Angola",
              "Anthony Pettis": "Anthony Pettis",
              "Anthony Smith": "Anthony Smith",
              "Antigua and Barbuda": "Antigua and Barbuda",
              "Antonio Carlos Junior": "Antonio Carlos Junior",
              "AOMORI WAT'S": "AOMORI WAT'S",
              "Appalachian State Mountaineers": "Appalachian State Mountaineers",
              Arbroath: "Arbroath",
              Argentina: "Argentina",
              "Aric Almirola": "Aric Almirola",
              "Arizona Cardinals": "Arizona Cardinals",
              "Arizona Coyotes": "Arizona Coyotes",
              "Arizona Diamondbacks": "Arizona Diamondbacks",
              "Arizona State Sun Devils": "Arizona State Sun Devils",
              "Arizona Wildcats": "Arizona Wildcats",
              "Arkansas Little Rock Trojans": "Arkansas Little Rock Trojans",
              "Arkansas Razorbacks": "Arkansas Razorbacks",
              "Arkansas State Indians": "Arkansas State Indians",
              "Arkansas State Red Wolves": "Arkansas State Red Wolves",
              "Arkansas Travelers": "Arkansas Travelers",
              "Arkansas-Pine Bluff Golden Lions": "Arkansas-Pine Bluff Golden Lions",
              Armenia: "Armenia",
              "Arminia Bielefeld": "Arminia Bielefeld",
              "Army Black Knights": "Army Black Knights",
              Arsenal: "Arsenal",
              "Arsenal de Sarandí": "Arsenal de Sarandí",
              Aruba: "Aruba",
              "AS Roma": "AS Roma",
              "AS Saint-Etienne": "AS Saint-Etienne",
              Ascoli: "Ascoli",
              "Asheville Tourists": "Asheville Tourists",
              "Ashlee Evans-Smith": "Ashlee Evans-Smith",
              "Aspen Ladd": "Aspen Ladd",
              "Aston Martin": "Aston Martin",
              "Aston Villa": "Aston Villa",
              Atalanta: "Atalanta",
              "Athletic Bilbao": "Athletic Bilbao",
              "ATK Mohun Bagan FC": "ATK Mohun Bagan FC",
              "Atlanta Braves": "Atlanta Braves",
              "Atlanta Dream": "Atlanta Dream",
              "Atlanta Falcons": "Atlanta Falcons",
              "Atlanta Flames": "Atlanta Flames",
              "Atlanta Hawks": "Atlanta Hawks",
              "Atlanta Thrashers": "Atlanta Thrashers",
              "Atlanta United FC": "Atlanta United FC",
              "Atletico Madrid": "Atletico Madrid",
              "Atlético de San Luis": "Atlético de San Luis",
              "Atlético Ottawa": "Atlético Ottawa",
              "Auburn Doubledays": "Auburn Doubledays",
              "Auburn Tigers": "Auburn Tigers",
              "Augusta GreenJackets": "Augusta GreenJackets",
              "Austin Dillon": "Austin Dillon",
              "Austin FC": "Austin FC",
              "Austin Peay Governors": "Austin Peay Governors",
              Australia: "Australia",
              Austria: "Austria",
              Auxerre: "Auxerre",
              "Avispa Fukuoka": "Avispa Fukuoka",
              "Awadhe Warriors": "Awadhe Warriors",
              "AX Armani Exchange Milan Basketball": "AX Armani Exchange Milan Basketball",
              "AZ Alkmaar": "AZ Alkmaar",
              Azerbaijan: "Azerbaijan",
              Bahamas: "Bahamas",
              Bahrain: "Bahrain",
              "Bakersfield Blaze": "Bakersfield Blaze",
              "Ball State Cardinals": "Ball State Cardinals",
              "Baltimore Orioles": "Baltimore Orioles",
              "Baltimore Ravens": "Baltimore Ravens",
              "BAMBITIOUS NARA": "BAMBITIOUS NARA",
              Bangladesh: "Bangladesh",
              Barbados: "Barbados",
              Barcelona: "Barcelona",
              "Barcelona Basketball": "Barcelona Basketball",
              Bari: "Bari",
              Bastia: "Bastia",
              "Batavia Muckdogs": "Batavia Muckdogs",
              "Bates Bobcats": "Bates Bobcats",
              "Bayer Leverkusen": "Bayer Leverkusen",
              "Bayern Munich": "Bayern Munich",
              "Bayern Munich Basketball": "Bayern Munich Basketball",
              "Baylor Bears": "Baylor Bears",
              "BC Lions": "BC Lions",
              Belarus: "Belarus",
              Belenenses: "Belenenses",
              Belgium: "Belgium",
              Belize: "Belize",
              "Belmont Bruins": "Belmont Bruins",
              "Beloit Snappers": "Beloit Snappers",
              "Ben Nguyen": "Ben Nguyen",
              Benfica: "Benfica",
              "Bengal Warriors": "Bengal Warriors",
              "Bengaluru Bulls": "Bengaluru Bulls",
              "Bengaluru FC": "Bengaluru FC",
              "Bengaluru Raptors": "Bengaluru Raptors",
              Benin: "Benin",
              Bermuda: "Bermuda",
              "Bethe Correia": "Bethe Correia",
              "Bethune Cookman Wildcats": "Bethune Cookman Wildcats",
              "Betis Sevilla": "Betis Sevilla",
              Bhutan: "Bhutan",
              "Billings Mustangs": "Billings Mustangs",
              "Binghamton Bearcats": "Binghamton Bearcats",
              "Binghamton Mets": "Binghamton Mets",
              "Birmingham Barons": "Birmingham Barons",
              "Birmingham City": "Birmingham City",
              "Black Hawks Hyderabad": "Black Hawks Hyderabad",
              "Blackburn Rovers": "Blackburn Rovers",
              "Blaublitz Akita": "Blaublitz Akita",
              "Bluefield Orioles": "Bluefield Orioles",
              Boavista: "Boavista",
              "Bobby Labonte": "Bobby Labonte",
              "Boca Juniors": "Boca Juniors",
              "Boise Hawks": "Boise Hawks",
              "Boise State Broncos": "Boise State Broncos",
              Bolivia: "Bolivia",
              Bologna: "Bologna",
              "Bolton Wanderers": "Bolton Wanderers",
              Bordeaux: "Bordeaux",
              "Borussia Dortmund": "Borussia Dortmund",
              "Borussia Monchengladbach": "Borussia Monchengladbach",
              "Bosnia and Herzegovina": "Bosnia and Herzegovina",
              "Boston Beaneaters": "Boston Beaneaters",
              "Boston Beans": "Boston Beans",
              "Boston Bruins": "Boston Bruins",
              "Boston Celtics": "Boston Celtics",
              "Boston College Eagles": "Boston College Eagles",
              "Boston Legacy FC": "Boston Legacy FC",
              "Boston Patriots": "Boston Patriots",
              "Boston Red Sox": "Boston Red Sox",
              "Boston Redskins": "Boston Redskins",
              "Boston University Terriers": "Boston University Terriers",
              Botswana: "Botswana",
              "Bowie Baysox": "Bowie Baysox",
              "Bowling Green Falcons": "Bowling Green Falcons",
              "Bowling Green Hot Rods": "Bowling Green Hot Rods",
              "Brad Keselowski": "Brad Keselowski",
              "Brad Tavares": "Brad Tavares",
              "Bradenton Marauders": "Bradenton Marauders",
              "Bradley Braves": "Bradley Braves",
              "Brandon Moreno": "Brandon Moreno",
              Brazil: "Brazil",
              Brentford: "Brentford",
              Brescia: "Brescia",
              Brest: "Brest",
              "Brevard County Manatees": "Brevard County Manatees",
              "Brian Ortega": "Brian Ortega",
              "Brighton & Hove Albion": "Brighton & Hove Albion",
              "Bristol City": "Bristol City",
              "Bristol White Sox": "Bristol White Sox",
              "British Virgin Islands": "British Virgin Islands",
              "Brooklyn Cyclones": "Brooklyn Cyclones",
              "Brooklyn Nets": "Brooklyn Nets",
              "Brown Bears": "Brown Bears",
              Brunei: "Brunei",
              "Bryant Bulldogs": "Bryant Bulldogs",
              "Bucknell Bison": "Bucknell Bison",
              "Buffalo Bandits": "Buffalo Bandits",
              "Buffalo Bills": "Buffalo Bills",
              "Buffalo Bisons": "Buffalo Bisons",
              "Buffalo Braves": "Buffalo Braves",
              "Buffalo Bulls": "Buffalo Bulls",
              "Buffalo Sabres": "Buffalo Sabres",
              Bulgaria: "Bulgaria",
              "Burkina Faso": "Burkina Faso",
              "Burlington Bees": "Burlington Bees",
              "Burlington Royals": "Burlington Royals",
              Burnley: "Burnley",
              Burundi: "Burundi",
              "Butler Bulldogs": "Butler Bulldogs",
              "BWT Racing Point": "BWT Racing Point",
              "BYU Cougars": "BYU Cougars",
              "C.D. Chivas USA": "C.D. Chivas USA",
              "CA River Plate": "CA River Plate",
              "Cagliari Calcio": "Cagliari Calcio",
              "Cal Irvine Anteaters": "Cal Irvine Anteaters",
              "Cal Poly Mustangs": "Cal Poly Mustangs",
              "Cal Riverside Highlanders": "Cal Riverside Highlanders",
              "Cal Santa Barbara Gauchos": "Cal Santa Barbara Gauchos",
              "Cal State Bakersfield Roadrunners": "Cal State Bakersfield Roadrunners",
              "Cal State Fullerton Titans": "Cal State Fullerton Titans",
              "Cal State Northridge Matadors": "Cal State Northridge Matadors",
              "Cal State Sacramento Hornets": "Cal State Sacramento Hornets",
              "Calcio Catania": "Calcio Catania",
              "Calgary Flames": "Calgary Flames",
              "Calgary Roughnecks": "Calgary Roughnecks",
              "Calgary Stampeders": "Calgary Stampeders",
              "Calicut Heroes": "Calicut Heroes",
              "California Angels": "California Angels",
              "California Baptist Lancers": "California Baptist Lancers",
              "California Golden Bears": "California Golden Bears",
              "California Seals": "California Seals",
              Cambodia: "Cambodia",
              Cameroon: "Cameroon",
              "Campbell Fighting Camels": "Campbell Fighting Camels",
              Canada: "Canada",
              "Canisius Golden Griffins": "Canisius Golden Griffins",
              "Cape Verde": "Cape Verde",
              "Cardiff City": "Cardiff City",
              "Carl Edwards": "Carl Edwards",
              "Carla Esparza": "Carla Esparza",
              "Carolina Hurricanes": "Carolina Hurricanes",
              "Carolina Mudcats": "Carolina Mudcats",
              "Carolina Panthers": "Carolina Panthers",
              "Casa Pia AC": "Casa Pia AC",
              "Casey Mears": "Casey Mears",
              "Casper Ghosts": "Casper Ghosts",
              "Cat Zingano": "Cat Zingano",
              Catanzaro: "Catanzaro",
              "Cavalry FC": "Cavalry FC",
              "Cayman Islands": "Cayman Islands",
              "CD Lugo": "CD Lugo",
              "CD Mirandés": "CD Mirandés",
              "CD Numancia": "CD Numancia",
              "CD Santa Clara": "CD Santa Clara",
              "CD Tenerife": "CD Tenerife",
              "Cedar Rapids Kernels": "Cedar Rapids Kernels",
              "Celta Vigo": "Celta Vigo",
              Celtic: "Celtic",
              "Centenary Gentlemen": "Centenary Gentlemen",
              "Central African Republic": "Central African Republic",
              "Central Arkansas Bears": "Central Arkansas Bears",
              "Central Connecticut Blue Devils": "Central Connecticut Blue Devils",
              "Central Connecticut State Blue Devils": "Central Connecticut State Blue Devils",
              "Central Florida Golden Knights": "Central Florida Golden Knights",
              "Central Michigan Chippewas": "Central Michigan Chippewas",
              "Cerezo Osaka": "Cerezo Osaka",
              "CF Atlas": "CF Atlas",
              "CF Estrela": "CF Estrela",
              "CF Fuenlabrada": "CF Fuenlabrada",
              "CF Monterrey": "CF Monterrey",
              Chad: "Chad",
              "Chad Mendes": "Chad Mendes",
              "Chan Sung Jung": "Chan Sung Jung",
              "Charleston Cougars": "Charleston Cougars",
              "Charleston RiverDogs": "Charleston RiverDogs",
              "Charleston Southern Buccaneers": "Charleston Southern Buccaneers",
              "Charlotte 49ers": "Charlotte 49ers",
              "Charlotte Hornets": "Charlotte Hornets",
              "Charlotte Knights": "Charlotte Knights",
              "Charlotte Sting": "Charlotte Sting",
              "Charlotte Stone Crabs": "Charlotte Stone Crabs",
              "Charlton Athletic": "Charlton Athletic",
              "Chase Elliott": "Chase Elliott",
              "Chattanooga Lookouts": "Chattanooga Lookouts",
              Chaves: "Chaves",
              Chelsea: "Chelsea",
              "Chennai City FC": "Chennai City FC",
              "Chennai Spartans": "Chennai Spartans",
              "Chennai Super Kings": "Chennai Super Kings",
              "Chennai Superstarz": "Chennai Superstarz",
              "Chennaiyin FC": "Chennaiyin FC",
              "CHIBA JETS": "CHIBA JETS",
              "Chiba Lotte Marines": "Chiba Lotte Marines",
              "Chicago Bears": "Chicago Bears",
              "Chicago Blackhawks": "Chicago Blackhawks",
              "Chicago Bulls": "Chicago Bulls",
              "Chicago Cardinals": "Chicago Cardinals",
              "Chicago Cubs": "Chicago Cubs",
              "Chicago Fire": "Chicago Fire",
              "Chicago Red Stars": "Chicago Red Stars",
              "Chicago Sky": "Chicago Sky",
              "Chicago Stags": "Chicago Stags",
              "Chicago State Cougars": "Chicago State Cougars",
              "Chicago White Sox": "Chicago White Sox",
              "Chicago White Stockings": "Chicago White Stockings",
              "Chicago Whitesox": "Chicago Whitesox",
              "Chicago Zephyrs": "Chicago Zephyrs",
              "Chievo Verona": "Chievo Verona",
              Chile: "Chile",
              China: "China",
              "Chinese Taipei": "Chinese Taipei",
              "Chris Buescher": "Chris Buescher",
              "Chris Weidman": "Chris Weidman",
              "Chunichi Dragons": "Chunichi Dragons",
              "Churchill Brothers FC Goa": "Churchill Brothers FC Goa",
              "Cincinnati Bearcats": "Cincinnati Bearcats",
              "Cincinnati Bengals": "Cincinnati Bengals",
              "Cincinnati Redlegs": "Cincinnati Redlegs",
              "Cincinnati Reds": "Cincinnati Reds",
              "Citadel Bulldogs": "Citadel Bulldogs",
              Cittadella: "Cittadella",
              "Claudia Gadelha": "Claudia Gadelha",
              "Clearwater Threshers": "Clearwater Threshers",
              "Clemson Tigers": "Clemson Tigers",
              "Clermont Foot 63": "Clermont Foot 63",
              "Cleveland Barons": "Cleveland Barons",
              "Cleveland Blues": "Cleveland Blues",
              "Cleveland Browns": "Cleveland Browns",
              "Cleveland Cavaliers": "Cleveland Cavaliers",
              "Cleveland Indians": "Cleveland Indians",
              "Cleveland Naps": "Cleveland Naps",
              "Cleveland Rockers": "Cleveland Rockers",
              "Cleveland State Vikings": "Cleveland State Vikings",
              "Clint Bowyer": "Clint Bowyer",
              "Clinton LumberKings": "Clinton LumberKings",
              "Club América": "Club América",
              "Club Atlético River Plate": "Club Atlético River Plate",
              "Club Deportivo Guadalajara - Chivas": "Club Deportivo Guadalajara - Chivas",
              "Club Deportivo Social y Cultural - Cruz Azul": "Club Deportivo Social y Cultural - Cruz Azul",
              "Club Santos Laguna": "Club Santos Laguna",
              "Club Universidad Nacional A.C. - Pumas": "Club Universidad Nacional A.C. - Pumas",
              "Coastal Carolina Chanticleers": "Coastal Carolina Chanticleers",
              "Cody Garbrandt": "Cody Garbrandt",
              "Cody Stamann": "Cody Stamann",
              "Colby Covington": "Colby Covington",
              "Colgate Raiders": "Colgate Raiders",
              Colombia: "Colombia",
              "Colorado Avalanche": "Colorado Avalanche",
              "Colorado Buffaloes": "Colorado Buffaloes",
              "Colorado College Tigers": "Colorado College Tigers",
              "Colorado Mammoth": "Colorado Mammoth",
              "Colorado Rapids": "Colorado Rapids",
              "Colorado Rockies": "Colorado Rockies",
              "Colorado Springs Sky Sox": "Colorado Springs Sky Sox",
              "Colorado State Rams": "Colorado State Rams",
              "Columbia Lions": "Columbia Lions",
              "Columbus Blue Jackets": "Columbus Blue Jackets",
              "Columbus Clippers": "Columbus Clippers",
              "Columbus Crew": "Columbus Crew",
              Como: "Como",
              Comoros: "Comoros",
              Congo: "Congo",
              "Connecticut Huskies": "Connecticut Huskies",
              "Connecticut Sun": "Connecticut Sun",
              "Connecticut Tigers": "Connecticut Tigers",
              "Conor McGregor": "Conor McGregor",
              "Consadole Sapporo": "Consadole Sapporo",
              "Cook Islands": "Cook Islands",
              "Coppin State Eagles": "Coppin State Eagles",
              "Corey Anderson": "Corey Anderson",
              "Cornell Big Red": "Cornell Big Red",
              "Corpus Christi Hooks": "Corpus Christi Hooks",
              "Cortney Casey": "Cortney Casey",
              Cosenza: "Cosenza",
              "Costa Rica": "Costa Rica",
              "Cote d'Ivoire": "Cote d'Ivoire",
              "Coventry City": "Coventry City",
              "Creighton Bluejays": "Creighton Bluejays",
              "Cris Cyborg": "Cris Cyborg",
              Croatia: "Croatia",
              "Crvena Zvezda mts Belgrade Basketball": "Crvena Zvezda mts Belgrade Basketball",
              "Crystal Palace": "Crystal Palace",
              "CSKA Moscow Basketball": "CSKA Moscow Basketball",
              "Cub Swanson": "Cub Swanson",
              Cuba: "Cuba",
              "Curtis Blaydes": "Curtis Blaydes",
              Cyprus: "Cyprus",
              "Czech Republic": "Czech Republic",
              "Cádiz CF": "Cádiz CF",
              "D.C. United": "D.C. United",
              "Dabang Delhi KC": "Dabang Delhi KC",
              "Dabang Mumbai HC": "Dabang Mumbai HC",
              "Dale Earnhardt": "Dale Earnhardt",
              "Dale Earnhardt Jr.": "Dale Earnhardt Jr.",
              "Dallas Baptist Patriots": "Dallas Baptist Patriots",
              "Dallas Cowboys": "Dallas Cowboys",
              "Dallas Mavericks": "Dallas Mavericks",
              "Dallas Stars": "Dallas Stars",
              "Dallas Texans": "Dallas Texans",
              "Dallas Wings": "Dallas Wings",
              "Dan Hooker": "Dan Hooker",
              "Daniel Cormier": "Daniel Cormier",
              "Daniel Suárez": "Daniel Suárez",
              "Danville Braves": "Danville Braves",
              "Darmstadt 98": "Darmstadt 98",
              "Darrell Wallace Jr.": "Darrell Wallace Jr.",
              "Darren Elkins": "Darren Elkins",
              "Darren Till": "Darren Till",
              "Dartmouth Big Green": "Dartmouth Big Green",
              "David Branch": "David Branch",
              "David Ragan": "David Ragan",
              "Davidson Wildcats": "Davidson Wildcats",
              "Dayton Dragons": "Dayton Dragons",
              "Dayton Flyers": "Dayton Flyers",
              "Daytona Cubs": "Daytona Cubs",
              "De Graafschap": "De Graafschap",
              "Deiveson Figueiredo": "Deiveson Figueiredo",
              "Delaware Fightin' Blue Hens": "Delaware Fightin' Blue Hens",
              "Delaware State Hornets": "Delaware State Hornets",
              "Delhi Capitals": "Delhi Capitals",
              "Delhi Sultans": "Delhi Sultans",
              "Delhi Waveriders": "Delhi Waveriders",
              "Delmarva Shorebirds": "Delmarva Shorebirds",
              "Demian Maia": "Demian Maia",
              "Democratic Republic of the Congo": "Democratic Republic of the Congo",
              Denmark: "Denmark",
              "Denny Hamlin": "Denny Hamlin",
              "Denver Broncos": "Denver Broncos",
              "Denver Nuggets": "Denver Nuggets",
              "Denver Pioneers": "Denver Pioneers",
              "DePaul Blue Demons": "DePaul Blue Demons",
              "Deportivo La Coruna": "Deportivo La Coruna",
              "Derby County": "Derby County",
              "Derek Brunson": "Derek Brunson",
              "Derrick Lewis": "Derrick Lewis",
              "Desportivo das Aves": "Desportivo das Aves",
              "Detroit Cougars": "Detroit Cougars",
              "Detroit Falcons": "Detroit Falcons",
              "Detroit Lions": "Detroit Lions",
              "Detroit Pistons": "Detroit Pistons",
              "Detroit Red Wings": "Detroit Red Wings",
              "Detroit Shock": "Detroit Shock",
              "Detroit Tigers": "Detroit Tigers",
              "Detroit Titans": "Detroit Titans",
              "Dijon FCO": "Dijon FCO",
              Djibouti: "Djibouti",
              Dominica: "Dominica",
              "Dominican Republic": "Dominican Republic",
              "Dominick Cruz": "Dominick Cruz",
              "Dominick Reyes": "Dominick Reyes",
              "Donald Cerrone": "Donald Cerrone",
              "Douglas Silva de Andrade": "Douglas Silva de Andrade",
              "Drake Bulldogs": "Drake Bulldogs",
              "Drexel Dragons": "Drexel Dragons",
              "Duke Blue Devils": "Duke Blue Devils",
              Dundee: "Dundee",
              "Dundee United": "Dundee United",
              "Dunedin Blue Jays": "Dunedin Blue Jays",
              Dunfermline: "Dunfermline",
              "Duquesne Dukes": "Duquesne Dukes",
              "Durham Bulls": "Durham Bulls",
              "Dustin Ortiz": "Dustin Ortiz",
              "Dustin Poirier": "Dustin Poirier",
              "Dynamo Dresden": "Dynamo Dresden",
              "E-Sports": "E-Sports",
              "EARTHFRIENDS TOKYO Z": "EARTHFRIENDS TOKYO Z",
              "East Carolina Pirates": "East Carolina Pirates",
              "East Tennessee State Buccaneers": "East Tennessee State Buccaneers",
              "East Timor": "East Timor",
              "Eastern Illinois Panthers": "Eastern Illinois Panthers",
              "Eastern Kentucky Colonels": "Eastern Kentucky Colonels",
              "Eastern Michigan Eagles": "Eastern Michigan Eagles",
              "Eastern Washington Eagles": "Eastern Washington Eagles",
              Ecuador: "Ecuador",
              "Edmonton Football Team": "Edmonton Football Team",
              "Edmonton Oilers": "Edmonton Oilers",
              "Edson Barboza": "Edson Barboza",
              Egypt: "Egypt",
              "Ehime FC": "Ehime FC",
              "EHIME ORANGE VIKINGS": "EHIME ORANGE VIKINGS",
              "Eintracht Braunschweig": "Eintracht Braunschweig",
              "Eintracht Frankfurt": "Eintracht Frankfurt",
              "El Salvador": "El Salvador",
              "Elche CF": "Elche CF",
              "Elias Theodorou": "Elias Theodorou",
              "Elizabethton Twins": "Elizabethton Twins",
              "Elizeu Zaleski dos Santos": "Elizeu Zaleski dos Santos",
              "Elliott Sadler": "Elliott Sadler",
              "Elon Phoenix": "Elon Phoenix",
              Empoli: "Empoli",
              "Energie Cottbus": "Energie Cottbus",
              England: "England",
              "Equatorial Guinea": "Equatorial Guinea",
              "Erie SeaWolves": "Erie SeaWolves",
              "Erik Jones": "Erik Jones",
              Eritrea: "Eritrea",
              Espanyol: "Espanyol",
              Estonia: "Estonia",
              Estoril: "Estoril",
              Ethiopia: "Ethiopia",
              "Eugene Emeralds": "Eugene Emeralds",
              "Evansville Purple Aces": "Evansville Purple Aces",
              "Everett AquaSox": "Everett AquaSox",
              Everton: "Everton",
              Excelsior: "Excelsior",
              "Extremadura UD": "Extremadura UD",
              "F EAGLES NAGOYA": "F EAGLES NAGOYA",
              "F.C. Gifu": "F.C. Gifu",
              "Fagiano Okayama FC": "Fagiano Okayama FC",
              "Fairfield Stags": "Fairfield Stags",
              "Fairleigh Dickinson Devils": "Fairleigh Dickinson Devils",
              "Fairleigh Dickinson Knights": "Fairleigh Dickinson Knights",
              Famalicão: "Famalicão",
              Farense: "Farense",
              "FC Arouca": "FC Arouca",
              "FC Arsenal Tula": "FC Arsenal Tula",
              "FC Augsburg": "FC Augsburg",
              "FC Basel": "FC Basel",
              "FC Cincinnati": "FC Cincinnati",
              "FC Dallas": "FC Dallas",
              "FC Edmonton": "FC Edmonton",
              "FC Goa": "FC Goa",
              "FC Groningen": "FC Groningen",
              "FC Heidenheim": "FC Heidenheim",
              "FC Juárez": "FC Juárez",
              "FC Lorient": "FC Lorient",
              "FC Machida Zelvia": "FC Machida Zelvia",
              "FC Ryūkyū": "FC Ryūkyū",
              "FC Sevilla": "FC Sevilla",
              "FC St. Pauli": "FC St. Pauli",
              "FC Startak Moscow": "FC Startak Moscow",
              "FC Tokyo": "FC Tokyo",
              "FC Utrecht": "FC Utrecht",
              "FC Volendam": "FC Volendam",
              "FC Zwolle": "FC Zwolle",
              "Federated States of Micronesia": "Federated States of Micronesia",
              "Felice Herrig": "Felice Herrig",
              "Fenerbahce Beko Istanbul": "Fenerbahce Beko Istanbul",
              "Feyenoord Rotterdam": "Feyenoord Rotterdam",
              Fiji: "Fiji",
              Finland: "Finland",
              Fiorentina: "Fiorentina",
              "FIU Panthers": "FIU Panthers",
              "Florida A&M Rattlers": "Florida A&M Rattlers",
              "Florida Atlantic Owls": "Florida Atlantic Owls",
              "Florida Gators": "Florida Gators",
              "Florida Gulf Coast Eagles": "Florida Gulf Coast Eagles",
              "Florida International Golden Panthers": "Florida International Golden Panthers",
              "Florida Panthers": "Florida Panthers",
              "Florida State Seminoles": "Florida State Seminoles",
              "Fordham Rams": "Fordham Rams",
              "Forge FC": "Forge FC",
              "Fort Myers Miracle": "Fort Myers Miracle",
              "Fort Wayne Mastodons": "Fort Wayne Mastodons",
              "Fort Wayne Pistons": "Fort Wayne Pistons",
              "Fort Wayne TinCaps": "Fort Wayne TinCaps",
              "Fortuna Düsseldorf": "Fortuna Düsseldorf",
              "Fortuna Sittard": "Fortuna Sittard",
              France: "France",
              "Francis Ngannou": "Francis Ngannou",
              "Francisco Trinaldo": "Francisco Trinaldo",
              "Frankie Edgar": "Frankie Edgar",
              "Frederick Keys": "Frederick Keys",
              "Fresno Grizzlies": "Fresno Grizzlies",
              "Fresno State Bulldogs": "Fresno State Bulldogs",
              "Frisco RoughRiders": "Frisco RoughRiders",
              "Frosinone FC": "Frosinone FC",
              "FSV Mainz 05": "FSV Mainz 05",
              "Fujieda MYFC": "Fujieda MYFC",
              "Fukuoka SoftBank Hawks": "Fukuoka SoftBank Hawks",
              "FUKUSHIMA FIREBONDS": "FUKUSHIMA FIREBONDS",
              "Fukushima United FC": "Fukushima United FC",
              Fulham: "Fulham",
              "Furman Paladins": "Furman Paladins",
              Gabon: "Gabon",
              "Gainare Tottori": "Gainare Tottori",
              "Galatasaray SK": "Galatasaray SK",
              "Gamba Osaka": "Gamba Osaka",
              "Gardner-Webb Runnin' Bulldogs": "Gardner-Webb Runnin' Bulldogs",
              Genoa: "Genoa",
              "George Mason Patriots": "George Mason Patriots",
              "George Washington Colonials": "George Washington Colonials",
              "Georges St-Pierre": "Georges St-Pierre",
              "Georgetown Hoyas": "Georgetown Hoyas",
              Georgia: "Georgia",
              "Georgia Bulldogs": "Georgia Bulldogs",
              "Georgia Southern Eagles": "Georgia Southern Eagles",
              "Georgia State Panthers": "Georgia State Panthers",
              "Georgia Swarm": "Georgia Swarm",
              "Georgia Tech Yellow Jackets": "Georgia Tech Yellow Jackets",
              "Germaine de Randamie": "Germaine de Randamie",
              Germany: "Germany",
              "Getafe CF": "Getafe CF",
              "Getafe FC": "Getafe FC",
              Ghana: "Ghana",
              "Gil Vicente": "Gil Vicente",
              "Giravanz Kitakyushu": "Giravanz Kitakyushu",
              "Girona FC": "Girona FC",
              "Glover Teixeira": "Glover Teixeira",
              "Go Ahead Eagles": "Go Ahead Eagles",
              "Gokulam Kerala FC": "Gokulam Kerala FC",
              "Golden State Valkyries": "Golden State Valkyries",
              "Golden State Warriors": "Golden State Warriors",
              "Gonzaga Bulldogs": "Gonzaga Bulldogs",
              "Grambling Tigers": "Grambling Tigers",
              "Granada CF": "Granada CF",
              "Grand Canyon Antelopes": "Grand Canyon Antelopes",
              "Gray Gaulding": "Gray Gaulding",
              "Great Britain": "Great Britain",
              "Great Falls Voyagers": "Great Falls Voyagers",
              "Great Lakes Loons": "Great Lakes Loons",
              Greece: "Greece",
              "Green Bay Packers": "Green Bay Packers",
              "Greeneville Astros": "Greeneville Astros",
              "Greensboro Grasshoppers": "Greensboro Grasshoppers",
              "Greenville Drive": "Greenville Drive",
              "Greg Biffle": "Greg Biffle",
              Grenada: "Grenada",
              "Greuther Fürth": "Greuther Fürth",
              "Grulla Morioka": "Grulla Morioka",
              Guam: "Guam",
              Guatemala: "Guatemala",
              Guinea: "Guinea",
              "Guinea-Bissau": "Guinea-Bissau",
              Guingamp: "Guingamp",
              "Gujarat Fortunegiants": "Gujarat Fortunegiants",
              "Gujarat Lions": "Gujarat Lions",
              "GUNMA CRANE THUNDERS": "GUNMA CRANE THUNDERS",
              "Gunnar Nelson": "Gunnar Nelson",
              Guyana: "Guyana",
              "Gwinnett Braves": "Gwinnett Braves",
              "Haas F1 Team": "Haas F1 Team",
              "Hagerstown Suns": "Hagerstown Suns",
              Haiti: "Haiti",
              "Halifax Thunderbirds": "Halifax Thunderbirds",
              "Hamburg SV": "Hamburg SV",
              "Hamilton Tiger-Cats": "Hamilton Tiger-Cats",
              "Hamilton Tigers": "Hamilton Tigers",
              "Hampton Pirates": "Hampton Pirates",
              "Hannover 96": "Hannover 96",
              "Hansa Rostock": "Hansa Rostock",
              "Hanshin Tigers": "Hanshin Tigers",
              "Harrisburg Senators": "Harrisburg Senators",
              "Hartford Hawks": "Hartford Hawks",
              "Hartford Whalers": "Hartford Whalers",
              "Harvard Crimson": "Harvard Crimson",
              "Haryana Hammers": "Haryana Hammers",
              "Haryana Steelers": "Haryana Steelers",
              "Hawaii Rainbow Warriors": "Hawaii Rainbow Warriors",
              Hearts: "Hearts",
              Heerenveen: "Heerenveen",
              "Helena Brewers": "Helena Brewers",
              "Henry Cejudo": "Henry Cejudo",
              "Heracles Almelo": "Heracles Almelo",
              "Hertha Berlin": "Hertha Berlin",
              "Hertha BSC": "Hertha BSC",
              "HFX Wanderers FC": "HFX Wanderers FC",
              Hibernian: "Hibernian",
              "Hickory Crawdads": "Hickory Crawdads",
              "High Desert Mavericks": "High Desert Mavericks",
              "High Point Panthers": "High Point Panthers",
              "High School Baseball Team": "High School Baseball Team",
              "HIROSHIMA DRAGONFLIES": "HIROSHIMA DRAGONFLIES",
              "Hiroshima Toyo Carp": "Hiroshima Toyo Carp",
              "Hofstra Flying Dutchmen": "Hofstra Flying Dutchmen",
              "Hofstra Pride": "Hofstra Pride",
              "Hokkaido Nippon-Ham Fighters": "Hokkaido Nippon-Ham Fighters",
              "Holly Holm": "Holly Holm",
              "Holy Cross Crusaders": "Holy Cross Crusaders",
              Honduras: "Honduras",
              "Hong Kong": "Hong Kong",
              "Houston Astros": "Houston Astros",
              "Houston Baptist Huskies": "Houston Baptist Huskies",
              "Houston Comets": "Houston Comets",
              "Houston Cougars": "Houston Cougars",
              "Houston Dash": "Houston Dash",
              "Houston Dynamo": "Houston Dynamo",
              "Houston Oilers": "Houston Oilers",
              "Houston Rockets": "Houston Rockets",
              "Houston Texans": "Houston Texans",
              "Howard Bison": "Howard Bison",
              "Huddersfield Town": "Huddersfield Town",
              "Hudson Valley Renegades": "Hudson Valley Renegades",
              "Hull City": "Hull City",
              Hungary: "Hungary",
              "Huntsville Stars": "Huntsville Stars",
              "Hyderabad FC": "Hyderabad FC",
              "Hyderabad Hunters": "Hyderabad Hunters",
              "IBARAKI ROBOTS": "IBARAKI ROBOTS",
              Iceland: "Iceland",
              "Idaho Falls Chukars": "Idaho Falls Chukars",
              "Idaho State Bengals": "Idaho State Bengals",
              "Idaho Vandals": "Idaho Vandals",
              "Ilir Latifi": "Ilir Latifi",
              "Illinois Chicago Flames": "Illinois Chicago Flames",
              "Illinois Illini": "Illinois Illini",
              "Illinois State Redbirds": "Illinois State Redbirds",
              "Incarnate Word Cardinals": "Incarnate Word Cardinals",
              "Independent Olympic Athletes": "Independent Olympic Athletes",
              India: "India",
              "Indian Arrows": "Indian Arrows",
              "Indiana Fever": "Indiana Fever",
              "Indiana Hoosiers": "Indiana Hoosiers",
              "Indiana Pacers": "Indiana Pacers",
              "Indiana State Sycamores": "Indiana State Sycamores",
              "Indianapolis Colts": "Indianapolis Colts",
              "Indianapolis Indians": "Indianapolis Indians",
              Indonesia: "Indonesia",
              "Inland Empire 66ers": "Inland Empire 66ers",
              "Inter Miami CF": "Inter Miami CF",
              "Inter Milan": "Inter Milan",
              "Inverness Caledonian Thistle": "Inverness Caledonian Thistle",
              "Iona Gaels": "Iona Gaels",
              "Iowa Cubs": "Iowa Cubs",
              "Iowa Hawkeyes": "Iowa Hawkeyes",
              "Iowa State Cyclones": "Iowa State Cyclones",
              "IPFW Mastodons": "IPFW Mastodons",
              "Ipswich Town": "Ipswich Town",
              Iran: "Iran",
              Iraq: "Iraq",
              Ireland: "Ireland",
              "Irene Aldana": "Irene Aldana",
              Israel: "Israel",
              "Israel Adesanya": "Israel Adesanya",
              Italy: "Italy",
              "IUPUI Jaguars": "IUPUI Jaguars",
              "Ivory Coast": "Ivory Coast",
              "Iwaki FC": "Iwaki FC",
              "IWATE BIG BULLS": "IWATE BIG BULLS",
              "Jacare Souza": "Jacare Souza",
              "Jackson State Tigers": "Jackson State Tigers",
              "Jacksonville Dolphins": "Jacksonville Dolphins",
              "Jacksonville Jaguars": "Jacksonville Jaguars",
              "Jacksonville State Gamecocks": "Jacksonville State Gamecocks",
              "Jacksonville Suns": "Jacksonville Suns",
              "Jaipur Pink Panthers": "Jaipur Pink Panthers",
              Jamaica: "Jamaica",
              "James Madison Dukes": "James Madison Dukes",
              "James Vick": "James Vick",
              "Jamestown Jammers": "Jamestown Jammers",
              "Jamie McMurray": "Jamie McMurray",
              "Jamshedpur FC": "Jamshedpur FC",
              "Jan Blachowicz": "Jan Blachowicz",
              Japan: "Japan",
              "Jared Cannonier": "Jared Cannonier",
              "Jaypee Punjab Warriors": "Jaypee Punjab Warriors",
              "JEF United Ichihara Chiba": "JEF United Ichihara Chiba",
              "Jeff Burton": "Jeff Burton",
              "Jeff Gordon": "Jeff Gordon",
              "Jennifer Maia": "Jennifer Maia",
              "Jeremy Stephens": "Jeremy Stephens",
              "Jessica Andrade": "Jessica Andrade",
              "Jessica Eye": "Jessica Eye",
              "Jessica-Rose Clark": "Jessica-Rose Clark",
              "Jimi Manuwa": "Jimi Manuwa",
              "Jimmie Johnson": "Jimmie Johnson",
              "Jimmie Rivera": "Jimmie Rivera",
              "Joanna Jedrzejczyk": "Joanna Jedrzejczyk",
              "Joanne Calderwood": "Joanne Calderwood",
              "Joey Logano": "Joey Logano",
              "John Dodson": "John Dodson",
              "John Lineker": "John Lineker",
              "John Moraga": "John Moraga",
              "Johnson City Cardinals": "Johnson City Cardinals",
              "Jon Jones": "Jon Jones",
              Jordan: "Jordan",
              "Jorge Masvidal": "Jorge Masvidal",
              "Jose Aldo": "Jose Aldo",
              "Joseph Benavidez": "Joseph Benavidez",
              "Josh Emmett": "Josh Emmett",
              "Juan Pablo Montoya": "Juan Pablo Montoya",
              "Julianna Pena": "Julianna Pena",
              "Junior dos Santos": "Junior dos Santos",
              "Jupiter Hammerheads": "Jupiter Hammerheads",
              "Jussier Formiga": "Jussier Formiga",
              "Justin Gaethje": "Justin Gaethje",
              "Justin Willis": "Justin Willis",
              Juventus: "Juventus",
              "Júbilo Iwata": "Júbilo Iwata",
              "KAGAWA FIVE ARROWS": "KAGAWA FIVE ARROWS",
              "KAGOSHIMA REBNISE": "KAGOSHIMA REBNISE",
              Kaiserslautern: "Kaiserslautern",
              "Kalinga Lancers": "Kalinga Lancers",
              "Kamaru Usman": "Kamaru Usman",
              "Kamatamare Sanuki": "Kamatamare Sanuki",
              "KANAZAWA SAMURAIZ": "KANAZAWA SAMURAIZ",
              "Kane County Cougars": "Kane County Cougars",
              "Kannapolis Intimidators": "Kannapolis Intimidators",
              "Kansas City Athletics": "Kansas City Athletics",
              "Kansas City Chiefs": "Kansas City Chiefs",
              "Kansas City Current": "Kansas City Current",
              "Kansas City Kings": "Kansas City Kings",
              "Kansas City Royals": "Kansas City Royals",
              "Kansas City Scouts": "Kansas City Scouts",
              "Kansas Jayhawks": "Kansas Jayhawks",
              "Kansas State Wildcats": "Kansas State Wildcats",
              "Karlsruher SC": "Karlsruher SC",
              "Karolina Kowalkiewicz": "Karolina Kowalkiewicz",
              "Kasey Kahne": "Kasey Kahne",
              "Kashima Antlers": "Kashima Antlers",
              "Kashiwa Reysol": "Kashiwa Reysol",
              "Kataller Toyama": "Kataller Toyama",
              "Katlyn Chookagian": "Katlyn Chookagian",
              "KAWASAKI BRAVE THUNDERS": "KAWASAKI BRAVE THUNDERS",
              "Kawasaki Frontale": "Kawasaki Frontale",
              Kazakhstan: "Kazakhstan",
              "Kelvin Gastelum": "Kelvin Gastelum",
              "Kennesaw State Owls": "Kennesaw State Owls",
              "Kent State Golden Flashes": "Kent State Golden Flashes",
              "Kentucky Wildcats": "Kentucky Wildcats",
              Kenya: "Kenya",
              "Kerala Blasters FC": "Kerala Blasters FC",
              "Ketlen Vieira": "Ketlen Vieira",
              "Kevin Harvick": "Kevin Harvick",
              "Kevin Lee": "Kevin Lee",
              "Khabib Nurmagomedov": "Khabib Nurmagomedov",
              "Khimki Moscow Region Basketball": "Khimki Moscow Region Basketball",
              Kilmarnock: "Kilmarnock",
              "Kings XI Punjab": "Kings XI Punjab",
              "Kingsport Mets": "Kingsport Mets",
              "Kinston Indians": "Kinston Indians",
              Kiribati: "Kiribati",
              "KIROLBET Baskonia Vitoria-Gasteiz Basketball": "KIROLBET Baskonia Vitoria-Gasteiz Basketball",
              "Kochi Blue Spikers": "Kochi Blue Spikers",
              "Kolkata Knight Riders": "Kolkata Knight Riders",
              Kosovo: "Kosovo",
              "KUMAMOTO VOLTERS": "KUMAMOTO VOLTERS",
              "Kurt Busch": "Kurt Busch",
              "Kyle Busch": "Kyle Busch",
              "Kyle Larson": "Kyle Larson",
              "KYOTO HANNARYZ": "KYOTO HANNARYZ",
              "Kyoto Sanga FC": "Kyoto Sanga FC",
              Kyrgyzstan: "Kyrgyzstan",
              "La Salle Explorers": "La Salle Explorers",
              "Lafayette Leopards": "Lafayette Leopards",
              "Lake County Captains": "Lake County Captains",
              "Lake Elsinore Storm": "Lake Elsinore Storm",
              "Lakeland Flying Tigers": "Lakeland Flying Tigers",
              "Lakewood BlueClaws": "Lakewood BlueClaws",
              "Lamar Cardinals": "Lamar Cardinals",
              "Lancaster JetHawks": "Lancaster JetHawks",
              "Lansing Lugnuts": "Lansing Lugnuts",
              Laos: "Laos",
              "Las Vegas 51s": "Las Vegas 51s",
              "Las Vegas Aces": "Las Vegas Aces",
              "Las Vegas Raiders": "Las Vegas Raiders",
              Latvia: "Latvia",
              "Lauren Murphy Increase1": "Lauren Murphy Increase1",
              Lazio: "Lazio",
              "LDLC ASVEL Villeurbanne": "LDLC ASVEL Villeurbanne",
              "Le Havre": "Le Havre",
              Lebanon: "Lebanon",
              Lecce: "Lecce",
              Lecco: "Lecco",
              "Leeds United": "Leeds United",
              Leganés: "Leganés",
              "Lehigh Mountain Hawks": "Lehigh Mountain Hawks",
              "Lehigh Valley IronPigs": "Lehigh Valley IronPigs",
              "Leicester City": "Leicester City",
              Lens: "Lens",
              "Leon Edwards": "Leon Edwards",
              Lesotho: "Lesotho",
              "LEVANGA HOKKAIDO": "LEVANGA HOKKAIDO",
              "Levante UD": "Levante UD",
              "Lexington Legends": "Lexington Legends",
              Liberia: "Liberia",
              "Liberty Flames": "Liberty Flames",
              Libya: "Libya",
              Liechtenstein: "Liechtenstein",
              Lille: "Lille",
              "Lina Lansberg": "Lina Lansberg",
              "Lipscomb Bisons": "Lipscomb Bisons",
              Lithuania: "Lithuania",
              Liverpool: "Liverpool",
              Livingston: "Livingston",
              "Liz Carmouche": "Liz Carmouche",
              "Long Beach State 49ers": "Long Beach State 49ers",
              "Long Beach State Sharks": "Long Beach State Sharks",
              "Long Island Blackbirds": "Long Island Blackbirds",
              "Longwood Lancers": "Longwood Lancers",
              "Los Angeles Angels": "Los Angeles Angels",
              "Los Angeles Chargers": "Los Angeles Chargers",
              "Los Angeles Clippers": "Los Angeles Clippers",
              "Los Angeles Dodgers": "Los Angeles Dodgers",
              "Los Angeles FC": "Los Angeles FC",
              "Los Angeles Galaxy": "Los Angeles Galaxy",
              "Los Angeles Kings": "Los Angeles Kings",
              "Los Angeles Lakers": "Los Angeles Lakers",
              "Los Angeles Rams": "Los Angeles Rams",
              "Los Angeles Sparks": "Los Angeles Sparks",
              "Louisiana Lafayette Ragin' Cajuns": "Louisiana Lafayette Ragin' Cajuns",
              "Louisiana Monroe Indians": "Louisiana Monroe Indians",
              "Louisiana Tech Bulldogs": "Louisiana Tech Bulldogs",
              "Louisiana-Monroe Warhawks": "Louisiana-Monroe Warhawks",
              "Louisville Bats": "Louisville Bats",
              "Louisville Cardinals": "Louisville Cardinals",
              "Lowell Spinners": "Lowell Spinners",
              "Loyola Chicago Ramblers": "Loyola Chicago Ramblers",
              "Loyola Maryland Greyhounds": "Loyola Maryland Greyhounds",
              "Loyola Marymount Lions": "Loyola Marymount Lions",
              LPGA: "LPGA",
              "LSU Tigers": "LSU Tigers",
              "Lucie Pudilova": "Lucie Pudilova",
              "Luke Rockhold": "Luke Rockhold",
              "Luton Town": "Luton Town",
              Luxembourg: "Luxembourg",
              "Lynchburg Hillcats": "Lynchburg Hillcats",
              Lyon: "Lyon",
              "Maccabi FOX Tel Aviv Basketball": "Maccabi FOX Tel Aviv Basketball",
              Macedonia: "Macedonia",
              "Mackenzie Dern": "Mackenzie Dern",
              Madagascar: "Madagascar",
              "Mahoning Valley Scrappers": "Mahoning Valley Scrappers",
              "Maine Black Bears": "Maine Black Bears",
              Malaga: "Malaga",
              Malawi: "Malawi",
              Malaysia: "Malaysia",
              Maldives: "Maldives",
              Mali: "Mali",
              Mallorca: "Mallorca",
              Malta: "Malta",
              "Manchester City": "Manchester City",
              "Manchester United": "Manchester United",
              "Manhattan Jaspers": "Manhattan Jaspers",
              "Mara Romero Borella": "Mara Romero Borella",
              "Marcin Tybura": "Marcin Tybura",
              "Marion Reneau": "Marion Reneau",
              "Marist Red Foxes": "Marist Red Foxes",
              "Mark Hunt": "Mark Hunt",
              "Mark Martin": "Mark Martin",
              "Marlon Moraes": "Marlon Moraes",
              "Marquette Golden Eagles": "Marquette Golden Eagles",
              Marseille: "Marseille",
              "Marshall Islands": "Marshall Islands",
              "Marshall Thundering Herd": "Marshall Thundering Herd",
              "Martin Truex Jr.": "Martin Truex Jr.",
              "Maryland Baltimore County Retrievers": "Maryland Baltimore County Retrievers",
              "Maryland Eastern Shore Fighting Hawks": "Maryland Eastern Shore Fighting Hawks",
              "Maryland Terrapins": "Maryland Terrapins",
              Marítimo: "Marítimo",
              "Massachusetts Minutemen": "Massachusetts Minutemen",
              "Matheus Nicolau": "Matheus Nicolau",
              "Matsumoto Yamaga FC": "Matsumoto Yamaga FC",
              "Matt DiBenedetto": "Matt DiBenedetto",
              "Matt Kenseth": "Matt Kenseth",
              "Mauricio Rua": "Mauricio Rua",
              Mauritania: "Mauritania",
              Mauritius: "Mauritius",
              "Max Holloway": "Max Holloway",
              Mazatlán: "Mazatlán",
              Mclaren: "Mclaren",
              "McNeese State Cowboys": "McNeese State Cowboys",
              "Memphis Grizzlies": "Memphis Grizzlies",
              "Memphis Redbirds": "Memphis Redbirds",
              "Memphis Tigers": "Memphis Tigers",
              "Mercedes-AMG Petronas": "Mercedes-AMG Petronas",
              "Mercer Bears": "Mercer Bears",
              Metz: "Metz",
              Mexico: "Mexico",
              "Miami (Ohio) Redhawks": "Miami (Ohio) Redhawks",
              "Miami Dolphins": "Miami Dolphins",
              "Miami Heat": "Miami Heat",
              "Miami Hurricanes": "Miami Hurricanes",
              "Miami Marlins": "Miami Marlins",
              "Miami Sol": "Miami Sol",
              "Michael Chiesa": "Michael Chiesa",
              "Michael McDowell": "Michael McDowell",
              "Michelle Waterson": "Michelle Waterson",
              "Michigan State Spartans": "Michigan State Spartans",
              "Michigan Wolverines": "Michigan Wolverines",
              "Middle Tennessee State Blue Raiders": "Middle Tennessee State Blue Raiders",
              Middlesbrough: "Middlesbrough",
              Middleweight: "Middleweight",
              "Midland RockHounds": "Midland RockHounds",
              Millwall: "Millwall",
              "Milwaukee Braves": "Milwaukee Braves",
              "Milwaukee Brewers": "Milwaukee Brewers",
              "Milwaukee Bucks": "Milwaukee Bucks",
              "Milwaukee Hawks": "Milwaukee Hawks",
              "Minnesota Golden Gophers": "Minnesota Golden Gophers",
              "Minnesota Lynx": "Minnesota Lynx",
              "Minnesota North Stars": "Minnesota North Stars",
              "Minnesota Timberwolves": "Minnesota Timberwolves",
              "Minnesota Twins": "Minnesota Twins",
              "Minnesota United FC": "Minnesota United FC",
              "Minnesota Vikings": "Minnesota Vikings",
              "Minnesota Wild": "Minnesota Wild",
              "Mirsad Bektic": "Mirsad Bektic",
              "Misha Cirkunov": "Misha Cirkunov",
              "Mississippi Braves": "Mississippi Braves",
              "Mississippi Old Miss Rebels": "Mississippi Old Miss Rebels",
              "Mississippi State Bulldogs": "Mississippi State Bulldogs",
              "Mississippi Valley State Delta Devils": "Mississippi Valley State Delta Devils",
              "Missoula Osprey": "Missoula Osprey",
              "Missouri Kansas City Kangaroos": "Missouri Kansas City Kangaroos",
              "Missouri Tigers": "Missouri Tigers",
              "Mito HollyHock": "Mito HollyHock",
              "Mobile BayBears": "Mobile BayBears",
              Modena: "Modena",
              "Modesto Nuts": "Modesto Nuts",
              "Mohun Bagan": "Mohun Bagan",
              Moldova: "Moldova",
              Monaco: "Monaco",
              Mongolia: "Mongolia",
              "Monmouth Hawks": "Monmouth Hawks",
              "Montana Grizzlies": "Montana Grizzlies",
              "Montana State Bobcats": "Montana State Bobcats",
              "Montedio Yamagata": "Montedio Yamagata",
              Montenegro: "Montenegro",
              "Montgomery Biscuits": "Montgomery Biscuits",
              Montpellier: "Montpellier",
              "Montreal Alouettes": "Montreal Alouettes",
              "Montreal Canadiens": "Montreal Canadiens",
              "Montreal Expos": "Montreal Expos",
              "Montreal Impact": "Montreal Impact",
              "Montreal Maroons": "Montreal Maroons",
              "Montreal Wanderers": "Montreal Wanderers",
              Monza: "Monza",
              "Morehead State Eagles": "Morehead State Eagles",
              Moreirense: "Moreirense",
              "Morgan State Bears": "Morgan State Bears",
              Morocco: "Morocco",
              Motherwell: "Motherwell",
              "Mount St. Mary's Mountaineers": "Mount St. Mary's Mountaineers",
              Mozambique: "Mozambique",
              "MP Yodha": "MP Yodha",
              "Mumbai City FC": "Mumbai City FC",
              "Mumbai Indians": "Mumbai Indians",
              "Mumbai Maharathi": "Mumbai Maharathi",
              "Mumbai Rockets": "Mumbai Rockets",
              "Murray State Racers": "Murray State Racers",
              Myanmar: "Myanmar",
              "Myrtle Beach Pelicans": "Myrtle Beach Pelicans",
              "NAC Breda": "NAC Breda",
              "NAGOYA DIAMOND DOLPHINS": "NAGOYA DIAMOND DOLPHINS",
              "Nagoya Grampus Eight": "Nagoya Grampus Eight",
              Namibia: "Namibia",
              Nantes: "Nantes",
              "Nashville Predators": "Nashville Predators",
              "Nashville SC": "Nashville SC",
              "Nashville Sounds": "Nashville Sounds",
              "Nate Diaz": "Nate Diaz",
              Nauru: "Nauru",
              "Navy Midshipmen": "Navy Midshipmen",
              "NCR Punjab Royals": "NCR Punjab Royals",
              "Nebraska Cornhuskers": "Nebraska Cornhuskers",
              "NEC Nijmegen": "NEC Nijmegen",
              Necaxa: "Necaxa",
              "Neil Magny": "Neil Magny",
              Nepal: "Nepal",
              "NEROCA FC": "NEROCA FC",
              Netherlands: "Netherlands",
              "Nevada Wolf Pack": "Nevada Wolf Pack",
              "New Britain Rock Cats": "New Britain Rock Cats",
              "New England Black Wolves": "New England Black Wolves",
              "New England Patriots": "New England Patriots",
              "New England Revolution": "New England Revolution",
              "New Hampshire Fisher Cats": "New Hampshire Fisher Cats",
              "New Hampshire Wildcats": "New Hampshire Wildcats",
              "New Jersey Devils": "New Jersey Devils",
              "New Jersey Nets": "New Jersey Nets",
              "New Mexico Lobos": "New Mexico Lobos",
              "New Mexico State Aggies": "New Mexico State Aggies",
              "New Orleans Pelicans": "New Orleans Pelicans",
              "New Orleans Privateers": "New Orleans Privateers",
              "New Orleans Saints": "New Orleans Saints",
              "New Orleans Zephyrs": "New Orleans Zephyrs",
              "New York Americans": "New York Americans",
              "New York City FC": "New York City FC",
              "New York Giants": "New York Giants",
              "New York Highlanders": "New York Highlanders",
              "New York Islanders": "New York Islanders",
              "New York Jets": "New York Jets",
              "New York Knicks": "New York Knicks",
              "New York Liberty": "New York Liberty",
              "New York Mets": "New York Mets",
              "New York Rangers": "New York Rangers",
              "New York Red Bulls": "New York Red Bulls",
              "New York Riptide": "New York Riptide",
              "New York Titans": "New York Titans",
              "New York Yankees": "New York Yankees",
              "New Zealand": "New Zealand",
              "Newcastle United": "Newcastle United",
              "Niagara Purple Eagles": "Niagara Purple Eagles",
              Nicaragua: "Nicaragua",
              "Nicco Montaño": "Nicco Montaño",
              Nice: "Nice",
              "Nicholls State Colonels": "Nicholls State Colonels",
              Niger: "Niger",
              Nigeria: "Nigeria",
              "NIIGATA ALBIREX BB": "NIIGATA ALBIREX BB",
              "Nikita Krylov": "Nikita Krylov",
              "Nina Ansaroff": "Nina Ansaroff",
              "NISHINOMIYA STORKS": "NISHINOMIYA STORKS",
              "NJ/NY Gotham FC": "NJ/NY Gotham FC",
              "NJIT Highlanders": "NJIT Highlanders",
              "Norfolk State Spartans": "Norfolk State Spartans",
              "Norfolk Tides": "Norfolk Tides",
              "North Alabama Lions": "North Alabama Lions",
              "North Carolina A&T Aggies": "North Carolina A&T Aggies",
              "North Carolina Asheville Bulldogs": "North Carolina Asheville Bulldogs",
              "North Carolina Central Eagles": "North Carolina Central Eagles",
              "North Carolina Charlotte 49ers": "North Carolina Charlotte 49ers",
              "North Carolina Courage": "North Carolina Courage",
              "North Carolina Greensboro Spartans": "North Carolina Greensboro Spartans",
              "North Carolina State Wolfpack": "North Carolina State Wolfpack",
              "North Carolina Tar Heels": "North Carolina Tar Heels",
              "North Carolina Wilmington Seahawks": "North Carolina Wilmington Seahawks",
              "North Dakota": "North Dakota",
              "North Dakota Fighting Hawks": "North Dakota Fighting Hawks",
              "North Dakota Fighting Sioux": "North Dakota Fighting Sioux",
              "North Dakota State Bison": "North Dakota State Bison",
              "North Eastern Warriors": "North Eastern Warriors",
              "North Florida Ospreys": "North Florida Ospreys",
              "North Korea": "North Korea",
              "North Texas Mean Green": "North Texas Mean Green",
              "Northeast United FC": "Northeast United FC",
              "Northeastern Huskies": "Northeastern Huskies",
              "Northeastern Illinois Golden Eagles": "Northeastern Illinois Golden Eagles",
              "Northern Arizona Lumberjacks": "Northern Arizona Lumberjacks",
              "Northern Colorado Bears": "Northern Colorado Bears",
              "Northern Illinois Huskies": "Northern Illinois Huskies",
              "Northern Iowa Panthers": "Northern Iowa Panthers",
              "Northern Kentucky Norse": "Northern Kentucky Norse",
              "Northwest Arkansas Naturals": "Northwest Arkansas Naturals",
              "Northwestern State Demons": "Northwestern State Demons",
              "Northwestern Wildcats": "Northwestern Wildcats",
              Norway: "Norway",
              "Norwich City": "Norwich City",
              "Notre Dame Fighting Irish": "Notre Dame Fighting Irish",
              "Nottingham Forest": "Nottingham Forest",
              Nurnberg: "Nurnberg",
              "NYIT Bears": "NYIT Bears",
              "NYU Bobcats": "NYU Bobcats",
              "NYU Violets": "NYU Violets",
              "Nîmes Olympique": "Nîmes Olympique",
              "Oakland Athletics": "Oakland Athletics",
              "Oakland Golden Grizzlies": "Oakland Golden Grizzlies",
              "Oakland Raiders": "Oakland Raiders",
              "Odisha FC": "Odisha FC",
              "Ogden Raptors": "Ogden Raptors",
              "Ohio Bobcats": "Ohio Bobcats",
              "Ohio State Buckeyes": "Ohio State Buckeyes",
              "Oita Trinita": "Oita Trinita",
              "Oklahoma City RedHawks": "Oklahoma City RedHawks",
              "Oklahoma City Thunder": "Oklahoma City Thunder",
              "Oklahoma Sooners": "Oklahoma Sooners",
              "Oklahoma State Cowboys": "Oklahoma State Cowboys",
              "Old Dominion Monarchs": "Old Dominion Monarchs",
              "Ole Miss Rebels": "Ole Miss Rebels",
              "Oleksiy Oliynyk": "Oleksiy Oliynyk",
              "Olympiacos Basketball": "Olympiacos Basketball",
              "Omaha Mavericks": "Omaha Mavericks",
              "Omaha Royals": "Omaha Royals",
              Oman: "Oman",
              "Omiya Ardija": "Omiya Ardija",
              "Oral Roberts Golden Eagles": "Oral Roberts Golden Eagles",
              "Oregon Ducks": "Oregon Ducks",
              "Oregon State Beavers": "Oregon State Beavers",
              "Orem Owlz": "Orem Owlz",
              "Orix Buffaloes": "Orix Buffaloes",
              "Orlando City SC": "Orlando City SC",
              "Orlando Magic": "Orlando Magic",
              "Orlando Pride": "Orlando Pride",
              "OSAKA EVESSA": "OSAKA EVESSA",
              Osasuna: "Osasuna",
              "OTSUKA CORPORATION ALPHAS": "OTSUKA CORPORATION ALPHAS",
              "Ottawa Redblacks": "Ottawa Redblacks",
              "Ottawa Senators": "Ottawa Senators",
              "Ovince Saint Preux": "Ovince Saint Preux",
              "Pacific Boxers": "Pacific Boxers",
              "Pacific FC": "Pacific FC",
              "Pacific Tigers": "Pacific Tigers",
              Pakistan: "Pakistan",
              Palau: "Palau",
              Palermo: "Palermo",
              Palestine: "Palestine",
              "Palm Beach Cardinals": "Palm Beach Cardinals",
              Panama: "Panama",
              "Panathinaikos Basketball": "Panathinaikos Basketball",
              "Papua New Guinea": "Papua New Guinea",
              Paraguay: "Paraguay",
              Parma: "Parma",
              "Parma Calcio": "Parma Calcio",
              "Patna Pirates": "Patna Pirates",
              "Patrick Thistle": "Patrick Thistle",
              "Paul Felder": "Paul Felder",
              "Paul Menard": "Paul Menard",
              "Paulo Costa": "Paulo Costa",
              "Pawtucket Red Sox": "Pawtucket Red Sox",
              "Paços de Ferreira": "Paços de Ferreira",
              "Pedro Munhoz": "Pedro Munhoz",
              "Penn Quakers": "Penn Quakers",
              "Penn State Nittany Lions": "Penn State Nittany Lions",
              "Pennsylvania Quakers": "Pennsylvania Quakers",
              "Peoria Chiefs": "Peoria Chiefs",
              "Pepperdine Waves": "Pepperdine Waves",
              Peru: "Peru",
              Perugia: "Perugia",
              PGA: "PGA",
              "Philadelphia 76ers": "Philadelphia 76ers",
              "Philadelphia Athletics": "Philadelphia Athletics",
              "Philadelphia Eagles": "Philadelphia Eagles",
              "Philadelphia Flyers": "Philadelphia Flyers",
              "Philadelphia Phillies": "Philadelphia Phillies",
              "Philadelphia Quakers": "Philadelphia Quakers",
              "Philadelphia Union": "Philadelphia Union",
              "Philadelphia Wings": "Philadelphia Wings",
              Philippines: "Philippines",
              "Phoenix Mercury": "Phoenix Mercury",
              "Phoenix Suns": "Phoenix Suns",
              Piacenza: "Piacenza",
              Pisa: "Pisa",
              "Pittsburgh Panthers": "Pittsburgh Panthers",
              "Pittsburgh Penguins": "Pittsburgh Penguins",
              "Pittsburgh Pirates": "Pittsburgh Pirates",
              "Pittsburgh Steelers": "Pittsburgh Steelers",
              "Plymouth Argyle": "Plymouth Argyle",
              Poland: "Poland",
              "Portimonense SC": "Portimonense SC",
              "Portland Beavers": "Portland Beavers",
              "Portland Fire": "Portland Fire",
              "Portland Pilots": "Portland Pilots",
              "Portland Sea Dogs": "Portland Sea Dogs",
              "Portland State Vikings": "Portland State Vikings",
              "Portland Thorns FC": "Portland Thorns FC",
              "Portland Timbers": "Portland Timbers",
              "Portland Trail Blazers": "Portland Trail Blazers",
              Porto: "Porto",
              Portugal: "Portugal",
              "Potomac Nationals": "Potomac Nationals",
              "Prairie View Panthers": "Prairie View Panthers",
              "Presbyterian Blue Hose": "Presbyterian Blue Hose",
              "Preston North End": "Preston North End",
              "Princeton Rays": "Princeton Rays",
              "Princeton Tigers": "Princeton Tigers",
              "Providence Friars": "Providence Friars",
              PSG: "PSG",
              "PSV Eindhoven": "PSV Eindhoven",
              "Puerto Rico": "Puerto Rico",
              "Pulaski Mariners": "Pulaski Mariners",
              "Pune 7 Aces": "Pune 7 Aces",
              "Puneri Paltan": "Puneri Paltan",
              "Punjab FC": "Punjab FC",
              "Purdue Boilermakers": "Purdue Boilermakers",
              Qatar: "Qatar",
              QPR: "QPR",
              "Quad Cities River Bandits": "Quad Cities River Bandits",
              Querétaro: "Querétaro",
              "Quess East Bengal": "Quess East Bengal",
              "Quinnipiac Bobcats": "Quinnipiac Bobcats",
              "Racing Louisville FC": "Racing Louisville FC",
              "Racing Santander": "Racing Santander",
              "Radford Highlanders": "Radford Highlanders",
              "Rafael dos Anjos": "Rafael dos Anjos",
              "Rajasthan Royals": "Rajasthan Royals",
              "Ranchi Rays": "Ranchi Rays",
              "Rancho Cucamonga Quakes": "Rancho Cucamonga Quakes",
              "Randa Markos": "Randa Markos",
              Rangers: "Rangers",
              "Rani Yahya": "Rani Yahya",
              "Raphael Assunção": "Raphael Assunção",
              "Raquel Pennington": "Raquel Pennington",
              "Ray Borg": "Ray Borg",
              "Rayo Vallecano": "Rayo Vallecano",
              "RB Leipzig": "RB Leipzig",
              "RBC Roosendaal": "RBC Roosendaal",
              Reading: "Reading",
              "Reading Phillies": "Reading Phillies",
              "Real Kashmir FC": "Real Kashmir FC",
              "Real Madrid": "Real Madrid",
              "Real Madrid Basketball": "Real Madrid Basketball",
              "Real Oviedo": "Real Oviedo",
              "Real Salt Lake": "Real Salt Lake",
              "Real Sociedad": "Real Sociedad",
              "Real Zaragoza": "Real Zaragoza",
              "Recreativo Huelva": "Recreativo Huelva",
              "Red Bull Racing": "Red Bull Racing",
              "Refugee Olympic Team": "Refugee Olympic Team",
              Reggina: "Reggina",
              "Renato Moicano": "Renato Moicano",
              "Renault DP World": "Renault DP World",
              Rennes: "Rennes",
              "Reno Aces": "Reno Aces",
              "RENOFA Yamaguchi": "RENOFA Yamaguchi",
              "Rhode Island Rams": "Rhode Island Rams",
              "Ricardo Lamas": "Ricardo Lamas",
              "Rice Owls": "Rice Owls",
              "Richard Petty": "Richard Petty",
              "Richmond Flying Squirrels": "Richmond Flying Squirrels",
              "Richmond Spiders": "Richmond Spiders",
              "Ricky Stenhouse Jr.": "Ricky Stenhouse Jr.",
              "Rider Broncs": "Rider Broncs",
              "Rio Ave": "Rio Ave",
              "Rising Pune Supergiants": "Rising Pune Supergiants",
              "RIZING ZEPHYR FUKUOKA": "RIZING ZEPHYR FUKUOKA",
              "RKC Waalwijk": "RKC Waalwijk",
              "Roasso Kumamoto": "Roasso Kumamoto",
              "Rob Font": "Rob Font",
              "Robbie Lawler": "Robbie Lawler",
              "Robert Morris Colonials": "Robert Morris Colonials",
              "Robert Whittaker": "Robert Whittaker",
              "Rochester Knighthawks": "Rochester Knighthawks",
              "Rochester Red Wings": "Rochester Red Wings",
              "Rochester Royals": "Rochester Royals",
              "Roda JC Kerkrade": "Roda JC Kerkrade",
              Roma: "Roma",
              Romania: "Romania",
              "Rome Braves": "Rome Braves",
              "Rose Namajunas": "Rose Namajunas",
              "Ross County": "Ross County",
              "Rotherham United": "Rotherham United",
              "Round Rock Express": "Round Rock Express",
              "Roxanne Modafferi": "Roxanne Modafferi",
              "Royal Challengers Bangalore": "Royal Challengers Bangalore",
              Russia: "Russia",
              "Rutgers Scarlet Knights": "Rutgers Scarlet Knights",
              Rwanda: "Rwanda",
              "Ryan Blaney": "Ryan Blaney",
              "Ryan Newman": "Ryan Newman",
              "RYUKYU GOLDEN KINGS": "RYUKYU GOLDEN KINGS",
              "Sacramento Kings": "Sacramento Kings",
              "Sacramento Monarchs": "Sacramento Monarchs",
              "Sacramento River Cats": "Sacramento River Cats",
              "Sacred Heart Pioneers": "Sacred Heart Pioneers",
              "Sagan Tosu": "Sagan Tosu",
              "Saint Kitts and Nevis": "Saint Kitts and Nevis",
              "Saint Lucia": "Saint Lucia",
              "Saint Mary's Gaels": "Saint Mary's Gaels",
              "Saint Vincent and the Grenadines": "Saint Vincent and the Grenadines",
              "SAITAMA BRONCOS": "SAITAMA BRONCOS",
              "Saitama Seibu Lions": "Saitama Seibu Lions",
              "Salem Red Sox": "Salem Red Sox",
              "Salem-Keizer Volcanoes": "Salem-Keizer Volcanoes",
              "Salt Lake Bees": "Salt Lake Bees",
              "Sam Houston State Bearkats": "Sam Houston State Bearkats",
              "Samford Bulldogs": "Samford Bulldogs",
              Samoa: "Samoa",
              Sampdoria: "Sampdoria",
              "San Antonio Missions": "San Antonio Missions",
              "San Antonio Silver Stars": "San Antonio Silver Stars",
              "San Antonio Spurs": "San Antonio Spurs",
              "San Diego Chargers": "San Diego Chargers",
              "San Diego Clippers": "San Diego Clippers",
              "San Diego Padres": "San Diego Padres",
              "San Diego Rockets": "San Diego Rockets",
              "San Diego Seals": "San Diego Seals",
              "San Diego State Aztecs": "San Diego State Aztecs",
              "San Diego Toreros": "San Diego Toreros",
              "San Diego Wave FC": "San Diego Wave FC",
              "San Francisco 49ers": "San Francisco 49ers",
              "San Francisco Dons": "San Francisco Dons",
              "San Francisco Giants": "San Francisco Giants",
              "San Francisco Warriors": "San Francisco Warriors",
              "San Jose Earthquakes": "San Jose Earthquakes",
              "San Jose Giants": "San Jose Giants",
              "San Jose Sharks": "San Jose Sharks",
              "San Jose State Spartans": "San Jose State Spartans",
              "San Marino": "San Marino",
              "SAN-EN NEOPHOENIX": "SAN-EN NEOPHOENIX",
              "Sanfrecce Hiroshima": "Sanfrecce Hiroshima",
              "Santa Clara Broncos": "Santa Clara Broncos",
              "Santiago Ponzinibbio": "Santiago Ponzinibbio",
              "Sao Paulo FC": "Sao Paulo FC",
              "Sara McMann": "Sara McMann",
              "Saskatchewan Roughriders": "Saskatchewan Roughriders",
              "Saskatchewan Rush": "Saskatchewan Rush",
              Sassuolo: "Sassuolo",
              "Saudi Arabia": "Saudi Arabia",
              "Savannah Sand Gnats": "Savannah Sand Gnats",
              "Savannah State Tigers": "Savannah State Tigers",
              "SC Cambuur": "SC Cambuur",
              "SC Sagamihara": "SC Sagamihara",
              Schalke: "Schalke",
              Scotland: "Scotland",
              "Scranton/Wilkes-Barre Yankees": "Scranton/Wilkes-Barre Yankees",
              "Scuderia AlphaTauri": "Scuderia AlphaTauri",
              "Scuderia Ferrari": "Scuderia Ferrari",
              "SD Eibar": "SD Eibar",
              "SD Huesca": "SD Huesca",
              "SD Ponferradina": "SD Ponferradina",
              "SEAHORSES MIKAWA": "SEAHORSES MIKAWA",
              "Seattle Kraken": "Seattle Kraken",
              "Seattle Mariners": "Seattle Mariners",
              "Seattle Redhawks": "Seattle Redhawks",
              "Seattle Reign FC": "Seattle Reign FC",
              "Seattle Seahawks": "Seattle Seahawks",
              "Seattle Sounders FC": "Seattle Sounders FC",
              "Seattle Storm": "Seattle Storm",
              "Seattle SuperSonics": "Seattle SuperSonics",
              Sedan: "Sedan",
              "SENDAI EIGHTY NINERS": "SENDAI EIGHTY NINERS",
              Senegal: "Senegal",
              Serbia: "Serbia",
              "Serbia and Montenegro": "Serbia and Montenegro",
              "Sergio Pettis": "Sergio Pettis",
              "Seton Hall Pirates": "Seton Hall Pirates",
              Seychelles: "Seychelles",
              "Shamil Abdurakhimov": "Shamil Abdurakhimov",
              "Sheffield United": "Sheffield United",
              "Sheffield Wednesday": "Sheffield Wednesday",
              "SHIGA LAKESTARS": "SHIGA LAKESTARS",
              "SHIMANE SUSANOO MAGIC": "SHIMANE SUSANOO MAGIC",
              "Shimizu S-Pulse": "Shimizu S-Pulse",
              "SHINSHU BRAVE WARRIORS": "SHINSHU BRAVE WARRIORS",
              "Shonan Bellmare": "Shonan Bellmare",
              "Siena Saints": "Siena Saints",
              "Sierra Leone": "Sierra Leone",
              "Sijara Eubanks": "Sijara Eubanks",
              Singapore: "Singapore",
              "SIU Edwardsville Cougars": "SIU Edwardsville Cougars",
              "Sky Blue FC": "Sky Blue FC",
              Slovakia: "Slovakia",
              Slovenia: "Slovenia",
              "SM Caen": "SM Caen",
              "SMU Mustangs": "SMU Mustangs",
              Sochaux: "Sochaux",
              "Solomon Islands": "Solomon Islands",
              Somalia: "Somalia",
              "South Africa": "South Africa",
              "South Alabama Jaguars": "South Alabama Jaguars",
              "South Bend Silver Hawks": "South Bend Silver Hawks",
              "South Carolina Fighting Gamecocks": "South Carolina Fighting Gamecocks",
              "South Carolina State Bulldogs": "South Carolina State Bulldogs",
              "South Dakota Coyotes": "South Dakota Coyotes",
              "South Dakota State Jackrabbits": "South Dakota State Jackrabbits",
              "South Florida Bulls": "South Florida Bulls",
              "South Korea": "South Korea",
              "South Sudan": "South Sudan",
              Southampton: "Southampton",
              "Southeast Missouri State Indians": "Southeast Missouri State Indians",
              "Southeast Missouri State Redhawks": "Southeast Missouri State Redhawks",
              "Southeastern Louisiana Lions": "Southeastern Louisiana Lions",
              "Southern Illinois Salukis": "Southern Illinois Salukis",
              "Southern Jaguars": "Southern Jaguars",
              "Southern Mississippi Golden Eagles": "Southern Mississippi Golden Eagles",
              "Southern Utah Thunderbirds": "Southern Utah Thunderbirds",
              "Southwest Missouri State Bears": "Southwest Missouri State Bears",
              Spain: "Spain",
              Spal: "Spal",
              "Sparta Rotterdam": "Sparta Rotterdam",
              "Spokane Indians": "Spokane Indians",
              "Sport Club Corinthians Paulista": "Sport Club Corinthians Paulista",
              "Sport-Club Freiburg": "Sport-Club Freiburg",
              Sporting: "Sporting",
              "Sporting de Braga": "Sporting de Braga",
              "Sporting Gijón": "Sporting Gijón",
              "Sporting Kansas City": "Sporting Kansas City",
              "Springfield Cardinals": "Springfield Cardinals",
              "Sri Lanka": "Sri Lanka",
              "SSC Napoli": "SSC Napoli",
              "St Johnstone": "St Johnstone",
              "St Mirren": "St Mirren",
              "St. Bonaventure Bonnies": "St. Bonaventure Bonnies",
              "St. Francis (New York) Terriers": "St. Francis (New York) Terriers",
              "St. Francis (Pennsylvania) Red Flash": "St. Francis (Pennsylvania) Red Flash",
              "St. Francis Brooklyn Terriers": "St. Francis Brooklyn Terriers",
              "St. John's Red Storm": "St. John's Red Storm",
              "St. Joseph's Hawks": "St. Joseph's Hawks",
              "St. Louis Blues": "St. Louis Blues",
              "St. Louis Bombers": "St. Louis Bombers",
              "St. Louis Cardinals": "St. Louis Cardinals",
              "St. Louis City": "St. Louis City",
              "St. Louis Eagles": "St. Louis Eagles",
              "St. Louis Hawks": "St. Louis Hawks",
              "St. Louis Rams": "St. Louis Rams",
              "St. Louis University Billikens": "St. Louis University Billikens",
              "St. Lucie Mets": "St. Lucie Mets",
              "St. Mary's Rattlers": "St. Mary's Rattlers",
              "St. Peter's Peacocks": "St. Peter's Peacocks",
              "Stade de Reims": "Stade de Reims",
              "Stanford Cardinal": "Stanford Cardinal",
              "State College Spikes": "State College Spikes",
              "Staten Island Yankees": "Staten Island Yankees",
              "Stefan Struve": "Stefan Struve",
              "Stephen F. Austin Lumberjacks": "Stephen F. Austin Lumberjacks",
              "Stephen Thompson": "Stephen Thompson",
              "Stetson Hatters": "Stetson Hatters",
              "Stipe Miocic": "Stipe Miocic",
              "Stockton Ports": "Stockton Ports",
              "Stoke City": "Stoke City",
              "Stony Brook Seawolves": "Stony Brook Seawolves",
              Strasbourg: "Strasbourg",
              Sudan: "Sudan",
              Sunderland: "Sunderland",
              "Sunrisers Hyderabad": "Sunrisers Hyderabad",
              "SUNROCKERS SHIBUYA": "SUNROCKERS SHIBUYA",
              Suriname: "Suriname",
              "Swansea City": "Swansea City",
              Swaziland: "Swaziland",
              Sweden: "Sweden",
              Switzerland: "Switzerland",
              "Syracuse Chiefs": "Syracuse Chiefs",
              "Syracuse Nationals": "Syracuse Nationals",
              "Syracuse Orange": "Syracuse Orange",
              Syria: "Syria",
              "São Tomé and Príncipe": "São Tomé and Príncipe",
              "Tacoma Rainiers": "Tacoma Rainiers",
              "Tai Tuivasa": "Tai Tuivasa",
              Tajikistan: "Tajikistan",
              "Tamil Thalaivas": "Tamil Thalaivas",
              "Tampa Bay Buccaneers": "Tampa Bay Buccaneers",
              "Tampa Bay Lightning": "Tampa Bay Lightning",
              "Tampa Bay Rays": "Tampa Bay Rays",
              "Tampa Rays": "Tampa Rays",
              "Tampa Yankees": "Tampa Yankees",
              Tanzania: "Tanzania",
              "Tatiana Suarez": "Tatiana Suarez",
              "TCU Horned Frogs": "TCU Horned Frogs",
              "Team Cuba": "Team Cuba",
              "Team Dominican Republic": "Team Dominican Republic",
              "Team Japan": "Team Japan",
              "Team Netherlands": "Team Netherlands",
              "Team Panama": "Team Panama",
              "Team Puerto Rico": "Team Puerto Rico",
              "Team South Korea": "Team South Korea",
              "Team United States": "Team United States",
              "Team Venezuela": "Team Venezuela",
              "Tecia Torres": "Tecia Torres",
              "Telugu Titans": "Telugu Titans",
              "Temple Owls": "Temple Owls",
              "Tennessee Chattanooga Mocs": "Tennessee Chattanooga Mocs",
              "Tennessee Martin Skyhawks": "Tennessee Martin Skyhawks",
              "Tennessee Smokies": "Tennessee Smokies",
              "Tennessee State Tigers": "Tennessee State Tigers",
              "Tennessee Tech Golden Eagles": "Tennessee Tech Golden Eagles",
              "Tennessee Titans": "Tennessee Titans",
              "Tennessee Volunteers": "Tennessee Volunteers",
              Tennis: "Tennis",
              Ternana: "Ternana",
              "Texas A&M Aggies": "Texas A&M Aggies",
              "Texas A&M-Corpus Christi Islanders": "Texas A&M-Corpus Christi Islanders",
              "Texas Arlington Mavericks": "Texas Arlington Mavericks",
              "Texas El Paso Miners": "Texas El Paso Miners",
              "Texas Longhorns": "Texas Longhorns",
              "Texas Pan American Broncs": "Texas Pan American Broncs",
              "Texas Rangers": "Texas Rangers",
              "Texas San Antonio Roadrunners": "Texas San Antonio Roadrunners",
              "Texas Southern Tigers": "Texas Southern Tigers",
              "Texas State Bobcats": "Texas State Bobcats",
              "Texas Tech Red Raiders": "Texas Tech Red Raiders",
              "Texas-Rio Grande Valley Vaqueros": "Texas-Rio Grande Valley Vaqueros",
              Thailand: "Thailand",
              "The Gambia": "The Gambia",
              "Thespakusatsu Gunma": "Thespakusatsu Gunma",
              "Thiago Santos": "Thiago Santos",
              "Thomas Almeida": "Thomas Almeida",
              "Thonon Evian FC": "Thonon Evian FC",
              "Tiddim Road Athletic Union": "Tiddim Road Athletic Union",
              "Tim Elliott": "Tim Elliott",
              "TJ Dillashaw": "TJ Dillashaw",
              "TOCHIGI BREX": "TOCHIGI BREX",
              "Tochigi SC": "Tochigi SC",
              Togo: "Togo",
              "Tohoku Rakuten Golden Eagles": "Tohoku Rakuten Golden Eagles",
              "TOKIO MARINE NICHIDO BIG BLUE": "TOKIO MARINE NICHIDO BIG BLUE",
              "Tokushima Vortis": "Tokushima Vortis",
              "TOKYO CINQ REVES": "TOKYO CINQ REVES",
              "TOKYO EXCELLENCE": "TOKYO EXCELLENCE",
              "TOKYO HACHIOJI TRAINS": "TOKYO HACHIOJI TRAINS",
              "Tokyo Verdy1969": "Tokyo Verdy1969",
              "Tokyo Yakult Swallows": "Tokyo Yakult Swallows",
              "Toledo Mud Hens": "Toledo Mud Hens",
              "Toledo Rockets": "Toledo Rockets",
              Tondela: "Tondela",
              Tonga: "Tonga",
              "Tony Ferguson": "Tony Ferguson",
              "Tony Stewart": "Tony Stewart",
              "Tonya Evinger": "Tonya Evinger",
              Torino: "Torino",
              "Toronto Arenas": "Toronto Arenas",
              "Toronto Argonauts": "Toronto Argonauts",
              "Toronto Blue Jays": "Toronto Blue Jays",
              "Toronto FC": "Toronto FC",
              "Toronto Maple Leafs": "Toronto Maple Leafs",
              "Toronto Raptors": "Toronto Raptors",
              "Toronto Rock": "Toronto Rock",
              "Toronto St. Pats": "Toronto St. Pats",
              "Toronto Tempo": "Toronto Tempo",
              "Tottenham Hotspur": "Tottenham Hotspur",
              "Toulouse FC": "Toulouse FC",
              "Towson Tigers": "Towson Tigers",
              "TOYAMA GROUSES": "TOYAMA GROUSES",
              "TOYODA GOSEI SCORPIONS": "TOYODA GOSEI SCORPIONS",
              "Trenton Thunder": "Trenton Thunder",
              "Trevor Bayne": "Trevor Bayne",
              "Tri-City Dust Devils": "Tri-City Dust Devils",
              "Tri-City ValleyCats": "Tri-City ValleyCats",
              "Trinidad and Tobago": "Trinidad and Tobago",
              "Troy State Trojans": "Troy State Trojans",
              Troyes: "Troyes",
              "TSG 1899 Hoffenheim": "TSG 1899 Hoffenheim",
              "TSV 1860 Munich": "TSV 1860 Munich",
              "Tulane Green Wave": "Tulane Green Wave",
              "Tulsa Drillers": "Tulsa Drillers",
              "Tulsa Golden Hurricane": "Tulsa Golden Hurricane",
              "Tulsa Shock": "Tulsa Shock",
              Tunisia: "Tunisia",
              Turkey: "Turkey",
              Turkmenistan: "Turkmenistan",
              Tuvalu: "Tuvalu",
              "Twente Enschede": "Twente Enschede",
              "Ty Dillon": "Ty Dillon",
              "Tyron Woodley": "Tyron Woodley",
              "Tyson Pedro": "Tyson Pedro",
              "U Mumba": "U Mumba",
              "U Mumba Volley": "U Mumba Volley",
              "UANL Tigres": "UANL Tigres",
              "UC Davis Aggies": "UC Davis Aggies",
              "UCLA Bruins": "UCLA Bruins",
              "UD Almería": "UD Almería",
              "UD Las Palmas": "UD Las Palmas",
              Udinese: "Udinese",
              Uganda: "Uganda",
              Ukraine: "Ukraine",
              "Ulka Sasaki": "Ulka Sasaki",
              "UMass Lowell River Hawks": "UMass Lowell River Hawks",
              "Union Berlin": "Union Berlin",
              "United Arab Emirates": "United Arab Emirates",
              "United States": "United States",
              "UNLV Rebels": "UNLV Rebels",
              "UP Dangal": "UP Dangal",
              "UP Yoddha": "UP Yoddha",
              "Urawa Red Diamonds": "Urawa Red Diamonds",
              "Uriah Hall": "Uriah Hall",
              Uruguay: "Uruguay",
              "US Salernitana": "US Salernitana",
              "USC Trojans": "USC Trojans",
              "USC Upstate Spartans": "USC Upstate Spartans",
              "Utah Jazz": "Utah Jazz",
              "Utah Mammoth": "Utah Mammoth",
              "Utah Royals FC": "Utah Royals FC",
              "Utah State Aggies": "Utah State Aggies",
              "Utah Utes": "Utah Utes",
              "Utah Valley Wolverines": "Utah Valley Wolverines",
              "Uttar Pradesh Wizards": "Uttar Pradesh Wizards",
              Uzbekistan: "Uzbekistan",
              "V-Varen Nagasaki": "V-Varen Nagasaki",
              Valencia: "Valencia",
              "Valencia Basketball": "Valencia Basketball",
              "Valenciennes FC": "Valenciennes FC",
              "Valentina Shevchenko": "Valentina Shevchenko",
              Valladolid: "Valladolid",
              "Valour FC": "Valour FC",
              "Valparaiso Crusaders": "Valparaiso Crusaders",
              "Vancouver Canadians": "Vancouver Canadians",
              "Vancouver Canucks": "Vancouver Canucks",
              "Vancouver FC": "Vancouver FC",
              "Vancouver Warriors": "Vancouver Warriors",
              "Vancouver Whitecaps": "Vancouver Whitecaps",
              "Vanderbilt Commodores": "Vanderbilt Commodores",
              Vanuatu: "Vanuatu",
              "Vegalta Sendai": "Vegalta Sendai",
              "Vegas Golden Knights": "Vegas Golden Knights",
              "Venezia FC": "Venezia FC",
              Venezuela: "Venezuela",
              "Ventforet Kofu": "Ventforet Kofu",
              "Vermont Catamounts": "Vermont Catamounts",
              "Vermont Lake Monsters": "Vermont Lake Monsters",
              "Verona FC": "Verona FC",
              "VfB Stuttgart": "VfB Stuttgart",
              "VfL Bochum": "VfL Bochum",
              "VfL Osnabrück": "VfL Osnabrück",
              "VfL Wolfsburg": "VfL Wolfsburg",
              Vietnam: "Vietnam",
              "Villanova Wildcats": "Villanova Wildcats",
              Villareal: "Villareal",
              "Virgin Islands": "Virgin Islands",
              "Virginia Cavaliers": "Virginia Cavaliers",
              "Virginia Commonwealth Rams": "Virginia Commonwealth Rams",
              "Virginia Tech Hokies": "Virginia Tech Hokies",
              "Visalia Rawhide": "Visalia Rawhide",
              "Vissel Kobe": "Vissel Kobe",
              "Vitesse Arnhem": "Vitesse Arnhem",
              "Vitória Guimarães": "Vitória Guimarães",
              "Vitória Setúbal": "Vitória Setúbal",
              "VMI Keydets": "VMI Keydets",
              "Volkan Oezdemir": "Volkan Oezdemir",
              "Wagner Seahawks": "Wagner Seahawks",
              "Wake Forest Demon Deacons": "Wake Forest Demon Deacons",
              Wales: "Wales",
              "Washington Capitals": "Washington Capitals",
              "Washington Commanders": "Washington Commanders",
              "Washington Football Team": "Washington Football Team",
              "Washington Huskies": "Washington Huskies",
              "Washington Mystics": "Washington Mystics",
              "Washington Nationals": "Washington Nationals",
              "Washington Spirit": "Washington Spirit",
              "Washington State Cougars": "Washington State Cougars",
              "Washington Wizards": "Washington Wizards",
              Watford: "Watford",
              "Weber State Wildcats": "Weber State Wildcats",
              "Werder Bremen": "Werder Bremen",
              "West Bromwich Albion": "West Bromwich Albion",
              "West Ham United": "West Ham United",
              "West Indies": "West Indies",
              "West Michigan Whitecaps": "West Michigan Whitecaps",
              "West Tenn Diamond Jaxx": "West Tenn Diamond Jaxx",
              "West Virginia Mountaineers": "West Virginia Mountaineers",
              "West Virginia Power": "West Virginia Power",
              "Western Carolina Catamounts": "Western Carolina Catamounts",
              "Western Illinois Leathernecks": "Western Illinois Leathernecks",
              "Western Kentucky Hilltoppers": "Western Kentucky Hilltoppers",
              "Western Michigan Broncos": "Western Michigan Broncos",
              "Wichita State Shockers": "Wichita State Shockers",
              Wigan: "Wigan",
              "Willem II Tilburg": "Willem II Tilburg",
              "William & Mary Tribe": "William & Mary Tribe",
              "William Byron": "William Byron",
              "Williams Racing": "Williams Racing",
              "Williamsport Crosscutters": "Williamsport Crosscutters",
              "Wilmington Blue Rocks": "Wilmington Blue Rocks",
              "Wilson Reis": "Wilson Reis",
              "Winnipeg Blue Bombers": "Winnipeg Blue Bombers",
              "Winnipeg Jets": "Winnipeg Jets",
              "Winston-Salem Dash": "Winston-Salem Dash",
              "Winthrop Eagles": "Winthrop Eagles",
              "Wisconsin Badgers": "Wisconsin Badgers",
              "Wisconsin Green Bay Phoenix": "Wisconsin Green Bay Phoenix",
              "Wisconsin Milwaukee Panthers": "Wisconsin Milwaukee Panthers",
              "Wisconsin Timber Rattlers": "Wisconsin Timber Rattlers",
              "Wofford Terriers": "Wofford Terriers",
              "Wolverhampton Wanderers": "Wolverhampton Wanderers",
              "Wright State Raiders": "Wright State Raiders",
              WUSA: "WUSA",
              WWE: "WWE",
              "Wyoming Cowboys": "Wyoming Cowboys",
              "X-Games": "X-Games",
              "Xavier Musketeers": "Xavier Musketeers",
              "Yair Rodriguez": "Yair Rodriguez",
              "Yakima Bears": "Yakima Bears",
              "Yale Bulldogs": "Yale Bulldogs",
              "YAMAGATA WYVERNS": "YAMAGATA WYVERNS",
              "Yana Kunitskaya": "Yana Kunitskaya",
              Yemen: "Yemen",
              "Yoel Romero": "Yoel Romero",
              "YOKOHAMA B-CORSAIRS": "YOKOHAMA B-CORSAIRS",
              "Yokohama DeNA BayStars": "Yokohama DeNA BayStars",
              "Yokohama F. Marinos": "Yokohama F. Marinos",
              "Yokohama FC": "Yokohama FC",
              "Yomiuri Giants": "Yomiuri Giants",
              "York United FC": "York United FC",
              "Youngstown State Penguins": "Youngstown State Penguins",
              "YSCC Yokohama": "YSCC Yokohama",
              Yugoslavia: "Yugoslavia",
              "Zabit Magomedsharipov": "Zabit Magomedsharipov",
              "Zalgiris Kaunas Basketball": "Zalgiris Kaunas Basketball",
              Zambia: "Zambia",
              "Zenit St Petersburg Basketball": "Zenit St Petersburg Basketball",
              Zimbabwe: "Zimbabwe",
              "Zweigen Kanazawa": "Zweigen Kanazawa"
          }
      }),
      i({
          name: "team_name.0.language_tag",
          required: !0,
          maxItems: 2,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "team_name.0.marketplace_id",
          maxItems: 2,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "scent",
          fieldType: "string"
      }),
      i({
          name: "scent.0",
          required: !0,
          maxItems: 5,
          fieldType: "string"
      }),
      i({
          name: "scent.0.value",
          required: !0,
          maxItems: 5,
          maxLength: 2200,
          fieldType: "string"
      }),
      i({
          name: "scent.0.language_tag",
          required: !0,
          maxItems: 5,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "scent.0.marketplace_id",
          maxItems: 5,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "hand_orientation",
          fieldType: "string"
      }),
      i({
          name: "hand_orientation.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "hand_orientation.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2200,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "hand_orientation.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "hand_orientation.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "cup",
          fieldType: "string"
      }),
      i({
          name: "cup.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "cup.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "cup.0.size",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "cup.0.size.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "cup.0.size.0.value",
          required: !0,
          maxItems: 1,
          maxUtf8ByteLength: 5e3,
          fieldType: "string"
      }),
      i({
          name: "cup.0.size.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "grip",
          fieldType: "string"
      }),
      i({
          name: "grip.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "grip.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "grip.0.size",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "grip.0.size.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "grip.0.size.0.value",
          required: !0,
          maxItems: 1,
          maxUtf8ByteLength: 5e3,
          fieldType: "string"
      }),
      i({
          name: "grip.0.size.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "grip.0.type",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "grip.0.type.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "grip.0.type.0.value",
          required: !0,
          maxItems: 1,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "grip.0.type.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "grit",
          fieldType: "string"
      }),
      i({
          name: "grit.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "grit.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "grit.0.type",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "grit.0.type.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "grit.0.type.0.value",
          required: !0,
          maxItems: 1,
          maxUtf8ByteLength: 5e3,
          fieldType: "string"
      }),
      i({
          name: "grit.0.type.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "length_range",
          fieldType: "string"
      }),
      i({
          name: "length_range.0",
          required: !0,
          maxItems: 1e3,
          fieldType: "string"
      }),
      i({
          name: "length_range.0.value",
          required: !0,
          maxItems: 1e3,
          maxUtf8ByteLength: 20,
          fieldType: "string"
      }),
      i({
          name: "length_range.0.language_tag",
          required: !0,
          maxItems: 1e3,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "length_range.0.marketplace_id",
          maxItems: 1e3,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "matte_style",
          fieldType: "string"
      }),
      i({
          name: "matte_style.0",
          required: !0,
          maxItems: 1e3,
          fieldType: "string"
      }),
      i({
          name: "matte_style.0.value",
          required: !0,
          maxItems: 1e3,
          maxLength: 1073,
          fieldType: "string"
      }),
      i({
          name: "matte_style.0.language_tag",
          required: !0,
          maxItems: 1e3,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "matte_style.0.marketplace_id",
          maxItems: 1e3,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_thickness",
          fieldType: "string"
      }),
      i({
          name: "item_thickness.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_thickness.0.decimal_value",
          maxItems: 1,
          maxLength: 5e3,
          fieldType: "number"
      }),
      i({
          name: "item_thickness.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_thickness.0.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "automotive_fit_type",
          fieldType: "string"
      }),
      i({
          name: "automotive_fit_type.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "automotive_fit_type.0.value",
          required: !0,
          maxItems: 1,
          options: ["universal_fit", "vehicle_specific_fit"],
          optionLabels: {
              universal_fit: "Universal Fit",
              vehicle_specific_fit: "Vehicle Specific Fit"
          },
          fieldType: "string"
      }),
      i({
          name: "automotive_fit_type.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "parentage_level",
          fieldType: "string"
      }),
      i({
          name: "parentage_level.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "parentage_level.0.value",
          required: !0,
          maxItems: 1,
          options: ["child", "parent"],
          optionLabels: {
              child: "Child",
              parent: "Parent"
          },
          fieldType: "string"
      }),
      i({
          name: "parentage_level.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "child_parent_sku_relationship",
          fieldType: "string"
      }),
      i({
          name: "child_parent_sku_relationship.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "child_parent_sku_relationship.0.child_relationship_type",
          required: !0,
          maxItems: 1,
          options: ["variation"],
          optionLabels: {
              variation: "Variation"
          },
          fieldType: "string"
      }),
      i({
          name: "child_parent_sku_relationship.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "child_parent_sku_relationship.0.parent_sku",
          maxItems: 1,
          minLength: 1,
          maxLength: 40,
          minUtf8ByteLength: 1,
          maxUtf8ByteLength: 40,
          fieldType: "string"
      }),
      i({
          name: "variation_theme",
          fieldType: "string"
      }),
      i({
          name: "variation_theme.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "variation_theme.0.name",
          required: !0,
          maxItems: 1,
          options: ["AGE_GENDER_CATEGORY", "AUTO_PART_POSITION/CONFIGURATION/COLOR_NAME", "COLOR", "COLOR_NAME", "COLOR_NAME/CONFIGURATION", "COLOR_NAME/CUSTOMER_PACKAGE_TYPE", "COLOR_NAME/ITEM_PACKAGE_QUANTITY", "COLOR_NAME/MATERIAL_TYPE", "COLOR_NAME/NUMBER_OF_ITEMS", "COLOR_NAME/PATTERN_NAME", "COLOR_NAME/SIZE_NAME", "COLOR_NAME/SIZE_NAME/CONFIGURATION", "COLOR_NAME/SIZE_NAME/PATTERN_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME", "COLOR_NAME/STYLE_NAME", "COLOR_NAME/STYLE_NAME/CONFIGURATION", "COLOR_NAME/STYLE_NAME/PATTERN_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "CONFIGURATION", "CONFIGURATION/COLOR_NAME", "CONFIGURATION/SIZE_NAME", "CONFIGURATION/STYLE_NAME", "CONNECTIVITY_TECHNOLOGY/CONFIGURATION", "CUP_SIZE", "CUSTOMER_PACKAGE_TYPE", "FABRIC_TYPE/COLOR_NAME", "FIT_TYPE/SIZE_NAME/COLOR_NAME", "FLAVOR/SIZE", "FLAVOR_NAME", "GRIP_SIZE/GRIP_TYPE", "GRIT_TYPE", "GRIT_TYPE/COLOR_NAME", "GRIT_TYPE/SIZE_NAME", "HAND_ORIENTATION", "ITEM_DISPLAY_LENGTH", "ITEM_DISPLAY_WEIGHT", "ITEM_DISPLAY_WIDTH", "ITEM_LENGTH_STRING/ITEM_WIDTH_STRING/NUMBER_OF_ITEMS", "ITEM_PACKAGE_QUANTITY", "ITEM_PACKAGE_QUANTITY/COLOR_NAME", "ITEM_PACKAGE_QUANTITY/SIZE_NAME", "ITEM_PACKAGE_QUANTITY/STYLE_NAME", "ITEM_SHAPE", "ITEM_SHAPE/SIZE_NAME", "ITEM_THICKNESS", "ITEM_WEIGHT", "LENGTH_RANGE", "LENS_COLOR", "MATERIAL_TYPE", "MATERIAL_TYPE/COLOR_NAME", "MATERIAL_TYPE/ITEM_DISPLAY_WEIGHT", "MATERIAL_TYPE/SIZE_NAME", "MATERIAL_TYPE/STYLE_NAME", "MATTE_STYLE", "MODEL", "MODEL/COLOR_NAME", "MODEL/SIZE_NAME", "MODEL/STYLE_NAME", "MODEL/STYLE_NAME/PART_NUMBER", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "MODEL_NAME", "MODEL_NAME/COLOR_NAME", "NUMBER_OF_ITEMS", "NUMBER_OF_ITEMS/STYLE_NAME", "PATTERN", "PATTERN_NAME", "PATTERN_NAME/COLOR_NAME", "PATTERN_NAME/SIZE_NAME", "PATTERN_NAME/STYLE_NAME", "PATTERN_NAME/STYLE_NAME/COLOR_NAME", "SCENT_NAME", "SIZE", "SIZE/COLOR", "SIZE/PATTERN", "SIZE_NAME", "SIZE_NAME/COLOR_NAME", "SIZE_NAME/COLOR_NAME/CONFIGURATION", "SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS", "SIZE_NAME/COLOR_NAME/PATTERN_NAME", "SIZE_NAME/CONFIGURATION", "SIZE_NAME/CUSTOMER_PACKAGE_TYPE", "SIZE_NAME/MATERIAL_TYPE", "SIZE_NAME/NUMBER_OF_ITEMS", "SIZE_NAME/PATTERN_NAME", "SIZE_NAME/SCENT_NAME", "SIZE_NAME/STYLE_NAME", "SIZE_NAME/STYLE_NAME/COLOR_NAME", "SIZE_NAME/STYLE_NAME/CONFIGURATION", "SIZE_NAME/STYLE_NAME/CUSTOMER_PACKAGE_TYPE", "SIZE_NAME/STYLE_NAME/PATTERN_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "STYLE_NAME", "STYLE_NAME/COLOR_NAME", "STYLE_NAME/COLOR_NAME/CONFIGURATION", "STYLE_NAME/COLOR_NAME/SIZE_NAME", "STYLE_NAME/CONFIGURATION", "STYLE_NAME/CUSTOMER_PACKAGE_TYPE", "STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME", "STYLE_NAME/MATERIAL_TYPE", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER", "STYLE_NAME/PATTERN_NAME", "STYLE_NAME/PATTERN_NAME/COLOR_NAME", "STYLE_NAME/PATTERN_NAME/CONFIGURATION", "STYLE_NAME/PATTERN_NAME/SIZE_NAME", "STYLE_NAME/SIZE_NAME", "STYLE_NAME/SIZE_NAME/COLOR_NAME", "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION", "STYLE_NAME/SIZE_NAME/CONFIGURATION", "TEAM_NAME", "TEAM_NAME/SIZE_NAME", "TEAM_NAME/SIZE_NAME/COLOR_NAME", "UNIT_COUNT", "VOLUME_CAPACITY_NAME"],
          optionLabels: {
              AGE_GENDER_CATEGORY: "AGE_GENDER_CATEGORY",
              "AUTO_PART_POSITION/CONFIGURATION/COLOR_NAME": "AUTO_PART_POSITION/CONFIGURATION/COLOR_NAME",
              COLOR: "COLOR",
              COLOR_NAME: "COLOR_NAME",
              "COLOR_NAME/CONFIGURATION": "COLOR_NAME/CONFIGURATION",
              "COLOR_NAME/CUSTOMER_PACKAGE_TYPE": "COLOR_NAME/CUSTOMER_PACKAGE_TYPE",
              "COLOR_NAME/ITEM_PACKAGE_QUANTITY": "COLOR_NAME/ITEM_PACKAGE_QUANTITY",
              "COLOR_NAME/MATERIAL_TYPE": "COLOR_NAME/MATERIAL_TYPE",
              "COLOR_NAME/NUMBER_OF_ITEMS": "COLOR_NAME/NUMBER_OF_ITEMS",
              "COLOR_NAME/PATTERN_NAME": "COLOR_NAME/PATTERN_NAME",
              "COLOR_NAME/SIZE_NAME": "COLOR_NAME/SIZE_NAME",
              "COLOR_NAME/SIZE_NAME/CONFIGURATION": "COLOR_NAME/SIZE_NAME/CONFIGURATION",
              "COLOR_NAME/SIZE_NAME/PATTERN_NAME": "COLOR_NAME/SIZE_NAME/PATTERN_NAME",
              "COLOR_NAME/SIZE_NAME/STYLE_NAME": "COLOR_NAME/SIZE_NAME/STYLE_NAME",
              "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME": "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME",
              "COLOR_NAME/STYLE_NAME": "COLOR_NAME/STYLE_NAME",
              "COLOR_NAME/STYLE_NAME/CONFIGURATION": "COLOR_NAME/STYLE_NAME/CONFIGURATION",
              "COLOR_NAME/STYLE_NAME/PATTERN_NAME": "COLOR_NAME/STYLE_NAME/PATTERN_NAME",
              "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION": "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION",
              CONFIGURATION: "CONFIGURATION",
              "CONFIGURATION/COLOR_NAME": "CONFIGURATION/COLOR_NAME",
              "CONFIGURATION/SIZE_NAME": "CONFIGURATION/SIZE_NAME",
              "CONFIGURATION/STYLE_NAME": "CONFIGURATION/STYLE_NAME",
              "CONNECTIVITY_TECHNOLOGY/CONFIGURATION": "CONNECTIVITY_TECHNOLOGY/CONFIGURATION",
              CUP_SIZE: "CUP_SIZE",
              CUSTOMER_PACKAGE_TYPE: "CUSTOMER_PACKAGE_TYPE",
              "FABRIC_TYPE/COLOR_NAME": "FABRIC_TYPE/COLOR_NAME",
              "FIT_TYPE/SIZE_NAME/COLOR_NAME": "FIT_TYPE/SIZE_NAME/COLOR_NAME",
              "FLAVOR/SIZE": "FLAVOR/SIZE",
              FLAVOR_NAME: "FLAVOR_NAME",
              "GRIP_SIZE/GRIP_TYPE": "GRIP_SIZE/GRIP_TYPE",
              GRIT_TYPE: "GRIT_TYPE",
              "GRIT_TYPE/COLOR_NAME": "GRIT_TYPE/COLOR_NAME",
              "GRIT_TYPE/SIZE_NAME": "GRIT_TYPE/SIZE_NAME",
              HAND_ORIENTATION: "HAND_ORIENTATION",
              ITEM_DISPLAY_LENGTH: "ITEM_DISPLAY_LENGTH",
              ITEM_DISPLAY_WEIGHT: "ITEM_DISPLAY_WEIGHT",
              ITEM_DISPLAY_WIDTH: "ITEM_DISPLAY_WIDTH",
              "ITEM_LENGTH_STRING/ITEM_WIDTH_STRING/NUMBER_OF_ITEMS": "ITEM_LENGTH_STRING/ITEM_WIDTH_STRING/NUMBER_OF_ITEMS",
              ITEM_PACKAGE_QUANTITY: "ITEM_PACKAGE_QUANTITY",
              "ITEM_PACKAGE_QUANTITY/COLOR_NAME": "ITEM_PACKAGE_QUANTITY/COLOR_NAME",
              "ITEM_PACKAGE_QUANTITY/SIZE_NAME": "ITEM_PACKAGE_QUANTITY/SIZE_NAME",
              "ITEM_PACKAGE_QUANTITY/STYLE_NAME": "ITEM_PACKAGE_QUANTITY/STYLE_NAME",
              ITEM_SHAPE: "ITEM_SHAPE",
              "ITEM_SHAPE/SIZE_NAME": "ITEM_SHAPE/SIZE_NAME",
              ITEM_THICKNESS: "ITEM_THICKNESS",
              ITEM_WEIGHT: "ITEM_WEIGHT",
              LENGTH_RANGE: "LENGTH_RANGE",
              LENS_COLOR: "LENS_COLOR",
              MATERIAL_TYPE: "MATERIAL_TYPE",
              "MATERIAL_TYPE/COLOR_NAME": "MATERIAL_TYPE/COLOR_NAME",
              "MATERIAL_TYPE/ITEM_DISPLAY_WEIGHT": "MATERIAL_TYPE/ITEM_DISPLAY_WEIGHT",
              "MATERIAL_TYPE/SIZE_NAME": "MATERIAL_TYPE/SIZE_NAME",
              "MATERIAL_TYPE/STYLE_NAME": "MATERIAL_TYPE/STYLE_NAME",
              MATTE_STYLE: "MATTE_STYLE",
              MODEL: "MODEL",
              "MODEL/COLOR_NAME": "MODEL/COLOR_NAME",
              "MODEL/SIZE_NAME": "MODEL/SIZE_NAME",
              "MODEL/STYLE_NAME": "MODEL/STYLE_NAME",
              "MODEL/STYLE_NAME/PART_NUMBER": "MODEL/STYLE_NAME/PART_NUMBER",
              "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER": "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER",
              MODEL_NAME: "MODEL_NAME",
              "MODEL_NAME/COLOR_NAME": "MODEL_NAME/COLOR_NAME",
              NUMBER_OF_ITEMS: "NUMBER_OF_ITEMS",
              "NUMBER_OF_ITEMS/STYLE_NAME": "NUMBER_OF_ITEMS/STYLE_NAME",
              PATTERN: "PATTERN",
              PATTERN_NAME: "PATTERN_NAME",
              "PATTERN_NAME/COLOR_NAME": "PATTERN_NAME/COLOR_NAME",
              "PATTERN_NAME/SIZE_NAME": "PATTERN_NAME/SIZE_NAME",
              "PATTERN_NAME/STYLE_NAME": "PATTERN_NAME/STYLE_NAME",
              "PATTERN_NAME/STYLE_NAME/COLOR_NAME": "PATTERN_NAME/STYLE_NAME/COLOR_NAME",
              SCENT_NAME: "SCENT_NAME",
              SIZE: "SIZE",
              "SIZE/COLOR": "SIZE/COLOR",
              "SIZE/PATTERN": "SIZE/PATTERN",
              SIZE_NAME: "SIZE_NAME",
              "SIZE_NAME/COLOR_NAME": "SIZE_NAME/COLOR_NAME",
              "SIZE_NAME/COLOR_NAME/CONFIGURATION": "SIZE_NAME/COLOR_NAME/CONFIGURATION",
              "SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS": "SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS",
              "SIZE_NAME/COLOR_NAME/PATTERN_NAME": "SIZE_NAME/COLOR_NAME/PATTERN_NAME",
              "SIZE_NAME/CONFIGURATION": "SIZE_NAME/CONFIGURATION",
              "SIZE_NAME/CUSTOMER_PACKAGE_TYPE": "SIZE_NAME/CUSTOMER_PACKAGE_TYPE",
              "SIZE_NAME/MATERIAL_TYPE": "SIZE_NAME/MATERIAL_TYPE",
              "SIZE_NAME/NUMBER_OF_ITEMS": "SIZE_NAME/NUMBER_OF_ITEMS",
              "SIZE_NAME/PATTERN_NAME": "SIZE_NAME/PATTERN_NAME",
              "SIZE_NAME/SCENT_NAME": "SIZE_NAME/SCENT_NAME",
              "SIZE_NAME/STYLE_NAME": "SIZE_NAME/STYLE_NAME",
              "SIZE_NAME/STYLE_NAME/COLOR_NAME": "SIZE_NAME/STYLE_NAME/COLOR_NAME",
              "SIZE_NAME/STYLE_NAME/CONFIGURATION": "SIZE_NAME/STYLE_NAME/CONFIGURATION",
              "SIZE_NAME/STYLE_NAME/CUSTOMER_PACKAGE_TYPE": "SIZE_NAME/STYLE_NAME/CUSTOMER_PACKAGE_TYPE",
              "SIZE_NAME/STYLE_NAME/PATTERN_NAME": "SIZE_NAME/STYLE_NAME/PATTERN_NAME",
              "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION": "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION",
              STYLE_NAME: "STYLE_NAME",
              "STYLE_NAME/COLOR_NAME": "STYLE_NAME/COLOR_NAME",
              "STYLE_NAME/COLOR_NAME/CONFIGURATION": "STYLE_NAME/COLOR_NAME/CONFIGURATION",
              "STYLE_NAME/COLOR_NAME/SIZE_NAME": "STYLE_NAME/COLOR_NAME/SIZE_NAME",
              "STYLE_NAME/CONFIGURATION": "STYLE_NAME/CONFIGURATION",
              "STYLE_NAME/CUSTOMER_PACKAGE_TYPE": "STYLE_NAME/CUSTOMER_PACKAGE_TYPE",
              "STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME": "STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME",
              "STYLE_NAME/MATERIAL_TYPE": "STYLE_NAME/MATERIAL_TYPE",
              "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER": "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER",
              "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER": "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER",
              "STYLE_NAME/PATTERN_NAME": "STYLE_NAME/PATTERN_NAME",
              "STYLE_NAME/PATTERN_NAME/COLOR_NAME": "STYLE_NAME/PATTERN_NAME/COLOR_NAME",
              "STYLE_NAME/PATTERN_NAME/CONFIGURATION": "STYLE_NAME/PATTERN_NAME/CONFIGURATION",
              "STYLE_NAME/PATTERN_NAME/SIZE_NAME": "STYLE_NAME/PATTERN_NAME/SIZE_NAME",
              "STYLE_NAME/SIZE_NAME": "STYLE_NAME/SIZE_NAME",
              "STYLE_NAME/SIZE_NAME/COLOR_NAME": "STYLE_NAME/SIZE_NAME/COLOR_NAME",
              "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION": "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION",
              "STYLE_NAME/SIZE_NAME/CONFIGURATION": "STYLE_NAME/SIZE_NAME/CONFIGURATION",
              TEAM_NAME: "TEAM_NAME",
              "TEAM_NAME/SIZE_NAME": "TEAM_NAME/SIZE_NAME",
              "TEAM_NAME/SIZE_NAME/COLOR_NAME": "TEAM_NAME/SIZE_NAME/COLOR_NAME",
              UNIT_COUNT: "UNIT_COUNT",
              VOLUME_CAPACITY_NAME: "VOLUME_CAPACITY_NAME"
          },
          fieldType: "string"
      }),
      i({
          name: "country_of_origin",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "country_of_origin.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "country_of_origin.0.value",
          required: !0,
          maxItems: 1,
          options: ["AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AC", "AU", "AT", "AZ", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "IC", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "KP", "DK", "DJ", "DM", "DO", "TP", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FM", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GE", "DE", "GH", "GI", "GB", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IE", "IQ", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "KR", "MD", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "CS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TH", "BS", "CD", "GM", "TL", "TG", "TK", "TO", "TT", "TA", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "UK", "TZ", "US", "UM", "unknown", "UY", "UZ", "VU", "VE", "VN", "WF", "WD", "EH", "WZ", "XB", "XC", "XE", "XK", "XM", "XN", "XY", "YE", "YU", "ZR", "ZM", "ZW"],
          optionLabels: {
              AF: "Afghanistan",
              AX: "Aland Islands",
              AL: "Albania",
              DZ: "Algeria",
              AS: "American Samoa",
              AD: "Andorra",
              AO: "Angola",
              AI: "Anguilla",
              AQ: "Antarctica",
              AG: "Antigua and Barbuda",
              AR: "Argentina",
              AM: "Armenia",
              AW: "Aruba",
              AC: "Ascension Island",
              AU: "Australia",
              AT: "Austria",
              AZ: "Azerbaijan",
              BH: "Bahrain",
              BD: "Bangladesh",
              BB: "Barbados",
              BY: "Belarus",
              BE: "Belgium",
              BZ: "Belize",
              BJ: "Benin",
              BM: "Bermuda",
              BT: "Bhutan",
              BO: "Bolivia",
              BQ: "Bonaire, Saint Eustatius and Saba",
              BA: "Bosnia and Herzegovina",
              BW: "Botswana",
              BV: "Bouvet Island",
              BR: "Brazil",
              IO: "British Indian Ocean Territory",
              VG: "British Virgin Islands",
              BN: "Brunei Darussalam",
              BG: "Bulgaria",
              BF: "Burkina Faso",
              BI: "Burundi",
              KH: "Cambodia",
              CM: "Cameroon",
              CA: "Canada",
              IC: "Canary Islands",
              CV: "Cape Verde",
              KY: "Cayman Islands",
              CF: "Central African Republic",
              TD: "Chad",
              CL: "Chile",
              CN: "China",
              CX: "Christmas Island",
              CC: "Cocos (Keeling) Islands",
              CO: "Colombia",
              KM: "Comoros",
              CG: "Congo",
              CK: "Cook Islands",
              CR: "Costa Rica",
              HR: "Croatia",
              CU: "Cuba",
              CW: "Curaçao",
              CY: "Cyprus",
              CZ: "Czech Republic",
              KP: "Democratic People's Republic of Korea",
              DK: "Denmark",
              DJ: "Djibouti",
              DM: "Dominica",
              DO: "Dominican Republic",
              TP: "East Timor",
              EC: "Ecuador",
              EG: "Egypt",
              SV: "El Salvador",
              GQ: "Equatorial Guinea",
              ER: "Eritrea",
              EE: "Estonia",
              ET: "Ethiopia",
              FK: "Falkland Islands (Malvinas)",
              FO: "Faroe Islands",
              FM: "Federated States of Micronesia",
              FJ: "Fiji",
              FI: "Finland",
              FR: "France",
              GF: "French Guiana",
              PF: "French Polynesia",
              TF: "French Southern Territories",
              GA: "Gabon",
              GE: "Georgia",
              DE: "Germany",
              GH: "Ghana",
              GI: "Gibraltar",
              GB: "Great Britain",
              GR: "Greece",
              GL: "Greenland",
              GD: "Grenada",
              GP: "Guadeloupe",
              GU: "Guam",
              GT: "Guatemala",
              GG: "Guernsey",
              GN: "Guinea",
              GW: "Guinea-Bissau",
              GY: "Guyana",
              HT: "Haiti",
              HM: "Heard Island and the McDonald Islands",
              VA: "Holy See",
              HN: "Honduras",
              HK: "Hong Kong",
              HU: "Hungary",
              IS: "Iceland",
              IN: "India",
              ID: "Indonesia",
              IR: "Iran",
              IE: "Ireland",
              IQ: "Islamic Republic of Iraq",
              IM: "Isle of Man",
              IL: "Israel",
              IT: "Italy",
              CI: "Ivory Coast",
              JM: "Jamaica",
              JP: "Japan",
              JE: "Jersey",
              JO: "Jordan",
              KZ: "Kazakhstan",
              KE: "Kenya",
              KI: "Kiribati",
              KW: "Kuwait",
              KG: "Kyrgyzstan",
              LA: "Lao People's Democratic Republic",
              LV: "Latvia",
              LB: "Lebanon",
              LS: "Lesotho",
              LR: "Liberia",
              LY: "Libya",
              LI: "Liechtenstein",
              LT: "Lithuania",
              LU: "Luxembourg",
              MO: "Macao",
              MK: "Macedonia",
              MG: "Madagascar",
              MW: "Malawi",
              MY: "Malaysia",
              MV: "Maldives",
              ML: "Mali",
              MT: "Malta",
              MH: "Marshall Islands",
              MQ: "Martinique",
              MR: "Mauritania",
              MU: "Mauritius",
              YT: "Mayotte",
              MX: "Mexico",
              MC: "Monaco",
              MN: "Mongolia",
              ME: "Montenegro",
              MS: "Montserrat",
              MA: "Morocco",
              MZ: "Mozambique",
              MM: "Myanmar",
              NA: "Namibia",
              NR: "Nauru",
              NP: "Nepal",
              NL: "Netherlands",
              AN: "Netherlands Antilles",
              NC: "New Caledonia",
              NZ: "New Zealand",
              NI: "Nicaragua",
              NE: "Niger",
              NG: "Nigeria",
              NU: "Niue",
              NF: "Norfolk Island",
              MP: "Northern Mariana Islands",
              NO: "Norway",
              OM: "Oman",
              PK: "Pakistan",
              PW: "Palau",
              PS: "Palestinian Territories",
              PA: "Panama",
              PG: "Papua New Guinea",
              PY: "Paraguay",
              PE: "Peru",
              PH: "Philippines",
              PN: "Pitcairn",
              PL: "Poland",
              PT: "Portugal",
              PR: "Puerto Rico",
              QA: "Qatar",
              KR: "Republic of Korea",
              MD: "Republic of Moldova",
              RE: "Reunion",
              RO: "Romania",
              RU: "Russian Federation",
              RW: "Rwanda",
              BL: "Saint Barthelemy",
              SH: "Saint Helena, Ascension and Tristan da Cunha",
              KN: "Saint Kitts and Nevis",
              LC: "Saint Lucia",
              MF: "Saint Martin",
              PM: "Saint Pierre and Miquelon",
              VC: "Saint Vincent and the Grenadines",
              WS: "Samoa",
              SM: "San Marino",
              ST: "Sao Tome and Principe",
              SA: "Saudi Arabia",
              SN: "Senegal",
              RS: "Serbia",
              CS: "Serbia and Montenegro",
              SC: "Seychelles",
              SL: "Sierra Leone",
              SG: "Singapore",
              SX: "Sint Maarten",
              SK: "Slovakia",
              SI: "Slovenia",
              SB: "Solomon Islands",
              SO: "Somalia",
              ZA: "South Africa",
              GS: "South Georgia and the South Sandwich Islands",
              SS: "South Sudan",
              ES: "Spain",
              LK: "Sri Lanka",
              SD: "Sudan",
              SR: "Suriname",
              SJ: "Svalbard and Jan Mayen",
              SZ: "Swaziland",
              SE: "Sweden",
              CH: "Switzerland",
              SY: "Syria",
              TW: "Taiwan",
              TJ: "Tajikistan",
              TH: "Thailand",
              BS: "The Bahamas",
              CD: "The Democratic Republic of the Congo",
              GM: "The Gambia",
              TL: "Timor-Leste",
              TG: "Togo",
              TK: "Tokelau",
              TO: "Tonga",
              TT: "Trinidad and Tobago",
              TA: "Tristan da Cunha",
              TN: "Tunisia",
              TR: "Turkey",
              TM: "Turkmenistan",
              TC: "Turks and Caicos Islands",
              TV: "Tuvalu",
              VI: "U.S. Virgin Islands",
              UG: "Uganda",
              UA: "Ukraine",
              AE: "United Arab Emirates",
              UK: "United Kingdom",
              TZ: "United Republic of Tanzania",
              US: "United States",
              UM: "United States Minor Outlying Islands",
              unknown: "Unknown",
              UY: "Uruguay",
              UZ: "Uzbekistan",
              VU: "Vanuatu",
              VE: "Venezuela",
              VN: "Vietnam",
              WF: "Wallis and Futuna",
              WD: "WD",
              EH: "Western Sahara",
              WZ: "WZ",
              XB: "XB",
              XC: "XC",
              XE: "XE",
              XK: "XK",
              XM: "XM",
              XN: "XN",
              XY: "XY",
              YE: "Yemen",
              YU: "Yugoslavia",
              ZR: "Zaire",
              ZM: "Zambia",
              ZW: "Zimbabwe"
          },
          fieldType: "string"
      }),
      i({
          name: "country_of_origin.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "warranty_description",
          fieldType: "string"
      }),
      i({
          name: "warranty_description.0",
          required: !0,
          maxItems: 10,
          fieldType: "string"
      }),
      i({
          name: "warranty_description.0.value",
          required: !0,
          maxItems: 10,
          maxLength: 2e3,
          maxUtf8ByteLength: 2e3,
          fieldType: "string"
      }),
      i({
          name: "warranty_description.0.language_tag",
          required: !0,
          maxItems: 10,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "warranty_description.0.marketplace_id",
          maxItems: 10,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "supplier_declared_dg_hz_regulation",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "supplier_declared_dg_hz_regulation.0",
          required: !0,
          maxItems: 1e3,
          fieldType: "string"
      }),
      i({
          name: "supplier_declared_dg_hz_regulation.0.value",
          required: !0,
          maxItems: 1e3,
          options: ["ghs", "not_applicable", "other", "storage", "transportation", "unknown", "waste"],
          optionLabels: {
              ghs: "GHS",
              not_applicable: "Not Applicable",
              other: "Other",
              storage: "Storage",
              transportation: "Transportation",
              unknown: "Unknown",
              waste: "Waste"
          },
          fieldType: "string"
      }),
      i({
          name: "supplier_declared_dg_hz_regulation.0.marketplace_id",
          maxItems: 1e3,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "ghs",
          fieldType: "string"
      }),
      i({
          name: "ghs.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "ghs.0.classification",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "ghs.0.classification.0",
          required: !0,
          maxItems: 1e3,
          fieldType: "string"
      }),
      i({
          name: "ghs.0.classification.0.class",
          required: !0,
          maxItems: 1e3,
          options: ["amzn_specific_no_label_with_warning", "compressed_gas", "corrosive", "environmentally_damaging", "explosive", "flammable", "health_hazard", "irritant", "oxidizing", "toxic"],
          optionLabels: {
              amzn_specific_no_label_with_warning: "Amazon Specific No Label With Warning",
              compressed_gas: "Compressed Gas",
              corrosive: "Corrosive",
              environmentally_damaging: "Environmentally Damaging",
              explosive: "Explosive",
              flammable: "Flammable",
              health_hazard: "Health Hazard",
              irritant: "Irritant",
              oxidizing: "Oxidizing",
              toxic: "Toxic"
          },
          fieldType: "string"
      }),
      i({
          name: "ghs.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "hazmat",
          fieldType: "string"
      }),
      i({
          name: "hazmat.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "hazmat.0.aspect",
          required: !0,
          maxItems: 1,
          options: ["united_nations_regulatory_id"],
          optionLabels: {
              united_nations_regulatory_id: "UN Regulatory Id"
          },
          fieldType: "string"
      }),
      i({
          name: "hazmat.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 2197,
          fieldType: "string"
      }),
      i({
          name: "hazmat.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "safety_data_sheet_url",
          fieldType: "string"
      }),
      i({
          name: "safety_data_sheet_url.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "safety_data_sheet_url.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 23397,
          fieldType: "string"
      }),
      i({
          name: "safety_data_sheet_url.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "safety_data_sheet_url.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_weight",
          fieldType: "string"
      }),
      i({
          name: "item_weight.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_weight.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 5e3,
          minimum: 0,
          fieldType: "number"
      }),
      i({
          name: "item_weight.0.unit",
          required: !0,
          maxItems: 1,
          options: ["grams", "hundredths_pounds", "kilograms", "milligrams", "ounces", "pounds", "tons"],
          optionLabels: {
              grams: "Grams",
              hundredths_pounds: "Hundredths Pounds",
              kilograms: "Kilograms",
              milligrams: "Milligrams",
              ounces: "Ounces",
              pounds: "Pounds",
              tons: "Tons"
          },
          fieldType: "string"
      }),
      i({
          name: "item_weight.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "required_product_compliance_certificate",
          fieldType: "string"
      }),
      i({
          name: "required_product_compliance_certificate.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "required_product_compliance_certificate.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 100,
          options: ["California Air Review Board (CARB)", "Not Applicable"],
          optionLabels: {
              "California Air Review Board (CARB)": "California Air Review Board (CARB)",
              "Not Applicable": "Not Applicable"
          },
          fieldType: "string"
      }),
      i({
          name: "required_product_compliance_certificate.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "legal_compliance_certifications",
          fieldType: "string"
      }),
      i({
          name: "legal_compliance_certifications.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "legal_compliance_certifications.0.regulatory_organization_name",
          required: !0,
          maxItems: 1,
          maxUtf8ByteLength: 5e3,
          options: ["California Environmental Protection Agency - Air Resources Board"],
          optionLabels: {
              "California Environmental Protection Agency - Air Resources Board": "California Environmental Protection Agency - Air Resources Board"
          },
          fieldType: "string"
      }),
      i({
          name: "legal_compliance_certifications.0.certification_status",
          required: !0,
          maxItems: 1,
          options: ["Compliant", "Exempt", "NonCompliant"],
          optionLabels: {
              Compliant: "Compliant",
              Exempt: "Exempt",
              NonCompliant: "Non-compliant"
          },
          fieldType: "string"
      }),
      i({
          name: "legal_compliance_certifications.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 135,
          fieldType: "string"
      }),
      i({
          name: "legal_compliance_certifications.0.language_tag",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "legal_compliance_certifications.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "external_testing_certification",
          fieldType: "string"
      }),
      i({
          name: "external_testing_certification.0",
          required: !0,
          maxItems: 8,
          fieldType: "string"
      }),
      i({
          name: "external_testing_certification.0.value",
          required: !0,
          maxItems: 8,
          maxLength: 23147,
          fieldType: "string"
      }),
      i({
          name: "external_testing_certification.0.marketplace_id",
          maxItems: 8,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "california_proposition_65",
          fieldType: "string"
      }),
      i({
          name: "california_proposition_65.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "california_proposition_65.0.compliance_type",
          required: !0,
          maxItems: 1,
          options: ["alcoholic_beverage", "chemical", "diesel_engines", "food", "furniture", "on_product_cancer", "on_product_combined_cancer_reproductive", "on_product_reproductive", "passenger_or_off_road_vehicle", "raw_wood", "recreational_vessel"],
          optionLabels: {
              alcoholic_beverage: "Alcoholic Beverage",
              chemical: "Chemical",
              diesel_engines: "Diesel Engines",
              food: "Food",
              furniture: "Furniture",
              on_product_cancer: "On Product Cancer",
              on_product_combined_cancer_reproductive: "On Product Combined Cancer Reproductive",
              on_product_reproductive: "On Product Reproductive",
              passenger_or_off_road_vehicle: "Passenger or Off Road Vehicle",
              raw_wood: "Raw Wood",
              recreational_vessel: "Recreational Vessel"
          },
          fieldType: "string"
      }),
      i({
          name: "california_proposition_65.0.chemical_names",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "california_proposition_65.0.chemical_names.0",
          required: !0,
          maxItems: 5,
          options: ["1_1_1_2_tetrachloroethane", "1_1_1_trichloroethane", "1_1_2_2_tetrachloroethane", "1_1_dichlor_2_2_bis_p_chlorop_ethyle_dde", "1_1_dichloroethane", "1_1_dimethylhydrazine_udmh", "1_2_3_trichloropropane", "1_2_dibromo_3_chloropropane_dbcp", "1_2_dichloropropane", "1_2_diethylhydrazine", "1_2_dimethylhydrazine", "1_3_butadiene", "1_3_dichloro_2_propanol_1_3_dcp", "1_3_dichloropropene", "1_3_dinitropyrene", "1_3_propane_sultone", "1_4_butanediol_dimethanesulfona_busulfan", "1_4_dichloro_2_butene", "1_4_dichloro_2_nitrobenzene", "1_4_dioxane", "1_6_dinitropyrene", "1_8_dinitropyrene", "1_2_chloroethyl_3_4_methylcyclohexyl_1_n", "1_2_chloroethyl_3_cyclohexyl_1_nitrosour", "1_5_nitrofurfurylidene_amino_2_imidazoli", "1_amino_2_4_dibromoanthraquinone", "1_amino_2_methylanthraquinone", "1_bromo_3_chloropropane", "1_bromopropane_1_bp", "1_butyl_glycidyl_ether", "1_chloro_4_nitrobenzene", "1_hydroxyanthraquinone", "1_naphthylamine", "1_nitropyrene", "2_2_bis_bromomethyl_1_3_propanediol", "2_3_7_8_tetrachlorodibenzo_p_dioxin_tcdd", "2_3_dibromo_1_propanol", "2_4_5_trimethy_and_its_strong_acid_salts", "2_4_6_trichlorophenol", "2_4_6_trinitrotoluene_tnt", "2_4_d_butyric_acid", "2_4_diamino_6_chloro_s_triazine_dact", "2_4_diaminoanisole", "2_4_diaminoanisole_sulfate", "2_4_diaminotoluene", "2_4_dichloro_1_nitrobenzene", "2_4_dinitrotoluene", "2_4_hexadienal_89_percent_trans_trans_is", "2_5_hexanedione", "2_6_dimethyl_n_nitrosomorpholine_dmnm", "2_6_dinitrotoluene", "2_6_xylidine_2_6_dimethylaniline", "2_2_formylhyd_4_5_nitro_2_furyl_thiazole", "2_acetylaminofluorene", "2_amino_4_chlorophenol", "2_amino_5_5_nitro_2_furyl_1_3_4_thiadiaz", "2_aminoanthraquinone", "2_aminofluorene", "2_bromopropane_2_bp", "2_chloronitrobenzene", "2_chloropropionic_acid", "2_ethylhexyl_acrylate", "2_methyl_1_nitroanth_of_uncertain_purity", "2_methylaziridine_propyleneimine", "2_methylimidazole", "2_naphthylamine", "2_nitrofluorene", "2_nitropropane", "2_mercaptobenzothiazole", "3_3_4_4_tetrachloroazobenzene", "3_3_dichloro_4_4_diamino_diphenyl_ether", "3_3_dichlorobenzidine", "3_3_dichlorobenzidine_dihydrochloride", "3_3_dimethoxybenzidine_o_dianisidine", "3_3_dimethoxybenzidine_dihydrochloride", "3_3_dimethoxybenzidine_based_dyes_metabo", "3_3_dimethylbenzidine_ortho_tolidine", "3_3_dimethylbenzidine_dihydrochloride", "3_3_dimethylbenzidine_based_dyes_metabol", "3_7_dinitrofluoranthene", "3_9_dinitrofluoranthene", "3_n_nitrosomethylamino_propionitrile", "3_amino_9_ethylcarbazole_hydrochloride", "3_chloro_2_methylpropene", "3_methylcholanthrene", "3_monochloropropane_1_2_diol_3_mcpd", "4_4_diaminodiphen_ether_4_4_oxydianiline", "4_4_methylene_bis_2_chloroaniline", "4_4_methylene_bis_2_methylaniline", "4_4_methylene_bis_n_n_dimethyl_benzenami", "4_4_methylenedianiline", "4_4_methylenedianiline_dihydrochloride", "4_4_thiodianiline", "4_n_nitrosomethyl_1_3_pyridyl_1_butanone", "4_amino_2_nitrophenol", "4_aminobiphenyl_4_aminodiphenyl", "4_chloro_o_phenylenediamine", "4_dimethylaminoazobenzene", "4_methylimidazole", "4_nitrobiphenyl", "4_nitropyrene", "4_vinyl_1_cycloh_diepoxide_vinyl_cyclohe", "4_vinylcyclohexene", "morphmethylnitrfurylidenamnooxazolidinon", "5_chloro_o_toluidi_its_strong_acid_salts", "5_methoxypsor_with_ultraviolet_a_therapy", "5_methylchrysene", "5_nitroacenaphthene", "6_nitrochrysene", "7_12_dimethylbenz_a_anthracene", "7_h_dibenzo_c_g_carbazole", "8_methoxypsor_with_ultraviolet_a_therapy", "a_alpha_c_2_amino_9_h_pyrido_2_3_b_indol", "abiraterone_acetate", "acetaldehyde", "acetamide", "acetazolamide", "acetochlor", "acetohydroxamic_acid", "acifluorfen_sodium", "acrylamide", "acrylonitrile", "actinomycin_d", "adultb", "af_2_2_2_furyl_3_5_nitro_2_furyl_acrylam", "aflatoxins", "alachlor", "alcoholic_beverages", "alcoholicbeverage_associatedalcoholabuse", "aldrin", "all_trans_retinoic_acid", "aloe_vera_non_decolor_whole_leaf_extract", "alprazolam", "altretamine", "amantadine_hydrochloride", "amikacin_sulfate", "aminoglutethimide", "aminoglycosides", "aminopterin", "amiodarone_hydrochloride", "amitraz", "amitrole", "amoxapine", "amsacrine", "anabolic_steroids", "analgesic_mixtures_containing_phenacetin", "androstenedione", "angiotensinconvertenzyme _ace_inhibitors", "angiote_converting_enzyme_ace_inhibitors", "aniline", "aniline_hydrochloride", "anisindione", "anthracene", "anthraquinone", "antimony_oxide_antimony_trioxide", "aramite", "areca_nut", "aristolochic_acids", "arsenic_inorganic_arsenic_compounds", "arsenic_inorganic_oxides", "asbestos", "aspirin", "atenolol", "atrazine", "auramine", "auranofin", "avermectin_b_1_abamectin", "azacitidine", "azaserine", "azathioprine", "azobenzene", "barbiturates", "beclomethasone_dipropionate", "benomyl", "benthiavalicarb_isopropyl", "benz_a_anthracene", "benzene", "benzidine_and_its_salts", "benzidine_based_dyes", "benzo_a_pyrene", "benzo_b_fluoranthene", "benzo_j_fluoranthene", "benzo_k_fluoranthene", "benzodiazepines", "benzofuran", "benzophenone", "benzotrichloride", "benzphetamine_hydrochloride", "benzyl_chloride", "benzyl_violet_4_b", "beryllium", "beryllium_and_beryllium_compounds", "beryllium_oxide", "beryllium_sulfate", "beta_butyrolactone", "beta_myrcene", "beta_propiolactone", "betel_quid_with_tobacco", "betel_quid_without_tobacco", "bevacizumab", "bis_2chloro1methylethyl_ethertechgrade", "bis_2_chloro_1_methyleth_ether_technical", "bis_2_chloroethyl_ether", "bis_chloromethyl_ether", "bischloroethyl_nitrosourea_bcnu_carmusti", "bisphenol_a_bpa", "bisphenol_s_bps", "bitumens_extracts_steam_refined_air_refi", "bracken_fern", "bromacil_lithium_salt", "bromate", "bromochloroacetic_acid", "bromodichloroacetic_acid", "bromodichloromethane", "bromoethane", "bromoform", "bromoxynil", "bromoxynil_octanoate", "butabarbital_sodium", "butyl_benzyl_phthalate_bbp_d", "butylated_hydroxyanisole", "c_i_acid_red_114", "c_i_basic_red_9_monohydrochloride", "c_i_direct_blue_15", "c_i_direct_blue_218", "c_i_disperse_yellow_3", "c_i_solvent_yellow_14", "cacodylic_acid", "cadmium", "cadmium_and_cadmium_compounds", "caffeic_acid", "captafol", "captan", "carbamazepine", "carbaryl", "carbazole", "carbon_black_airborne_unbound_particles_", "carbon_disulfide", "carbon_monoxide", "carbon_tetrachloride", "carbon_black_extracts", "carboplatin", "catechol", "ceramic_fiber_airbor_part_respirable_siz", "certain_combined_chemotherapy_for_lympho", "chenodiol", "chloral", "chloral_hydrate", "chlorambucil", "chloramphenicol_sodium_succinate", "chlorcyclizine_hydrochloride", "chlordane", "chlordecone_kepone", "chlordiazepoxide", "chlordiazepoxide_hydrochloride", "chlordimeform", "chlorendic_acid", "chlorinated_paraffins_average_chain_leng", "chloroethane_ethyl_chloride", "chloroform", "chloromethyl_methyl_ether_technical_grad", "chloroprene", "chlorothalonil", "chlorotrianisene", "chlorozotocin", "chlorpyrifos", "chromium_hexavalent_compounds", "chrysene", "ciclosporin_cyclosporin_a_cyclosporine", "cidofovir", "cinnamyl_anthranilate", "cisplatin", "citrus_red_no_2", "cladribine", "clarithromycin", "clobetasol_propionate", "clofibrate", "clomiphene_citrate", "clorazepate_dipotassium", "cmnp_pyrazachlor", "coal_tar_pitch", "cobalt_ii_oxide", "cobalt_metal_powder", "cobalt_sulfate", "cobalt_sulfate_heptahydrate", "coconutoilcocamidediethanolamine", "codeine_phosphate", "coke_oven_emissions", "colchicine", "conjugated_estrogens", "creosotes", "cumene", "cupferron", "cyanazine", "cyanidesaltsdisassociatesolution", "cycasin", "cycloate", "cycloheximide", "cyclopenta_cd_pyrene", "cyclophosphamide_anhydrous", "cyclophosphamide_hydrated", "cyhexatin", "cytarabine", "cytembena", "d_c_orange_no_17", "d_c_red_no_19", "d_c_red_no_8", "d_c_red_no_9", "dacarbazine", "daminozide", "danazol", "dantron_chrysazin_1_8_dihydroxyanthraqui", "daunomycin", "daunorubicin_hydrochloride", "ddd_dichlorodiphenyl_dichloroethane", "dde_dichlorodiphenyl_dichloroethylene", "ddt_dichlorodiphenyl_trichloroethane", "ddvp_dichlorvos", "demeclocyclin_hydrochloride_internal_use", "des_ethyl_atrazine_dea", "des_isopropyl_atrazine_dia", "di_2_ethylhexyl_phthalate_dehp", "di_isodecyl_phthalate_didp", "di_n_butyl_phthalate_dbp", "di_n_hexyl_phthalate_dn_hp", "di_n_propyl_isocinchom_mgk_repellent_326", "diazepam", "diazoaminobenzene", "diazoxide", "dibenz_a_c_anthracene", "dibenz_a_h_acridine", "dibenz_a_h_anthracene", "dibenz_a_j_acridine", "dibenz_a_j_anthracene", "dibenzanthracenes", "dibenzo_a_e_pyrene", "dibenzo_a_h_pyrene", "dibenzo_a_i_pyrene", "dibenzo_a_l_pyrene", "dibromoacetic_acid", "dibromoacetonitrile", "dichloroacetic_acid", "dichloromethane_methylene_chloride", "dichlorophene", "dichlorphenamide", "diclofop_methyl", "dicumarol", "dieldrin", "diepoxybutane", "diesel_engine_exhaust", "diethanolamine", "diethyl_sulfate", "diethylstilbestrol_des", "diflunisal", "diglycidyl_resorcinol_ether_dgre", "dihydroergotamine_mesylate", "dihydrosafrole", "diisononyl_phthalate_dinp", "diisopropyl_sulfate", "diltiazem_hydrochloride", "dimethyl_hydrogen_phosphite", "dimethyl_sulfate", "dimethylcarbamoyl_chloride", "dimethylvinylchloride", "dinitrotoluene_technical_grade", "dinitrotoluene_mixture_2_4_2_6", "dinocap", "dinoseb", "diphenylhydantoin_phenytoin", "diphenylhydantoin_phenytoin_sodium_salt", "direct_black_38_technical_grade", "direct_blue_6_technical_grade", "direct_brown_95_technical_grade", "disodium_cyanodithioimidocarbonate", "disperse_blue_1", "diuron", "doxorubicin_hydrochloride_adriamycin", "doxycycline_internal_use", "doxycycline_calcium_internal_use", "doxycycline_hyclate_internal_use", "doxycycline_monohydrate_internal_use", "emissions_from_combustion_of_coal", "emissions_from_high_temperature_unrefine", "endrin", "environmental_tobacco_smoke_ets", "epichlorohydrin", "epoxiconazole", "ergotamine_tartrate", "erionite", "estradiol_17_b", "estragole", "estrogen_progestogen_combined_used_as_me", "estrogens_steroidal", "estrone", "estropipate", "ethanol_in_alcoholic_beverages", "ethinylestradiol", "ethionamide", "ethoprop", "ethyl_acrylate", "ethyl_alcohol_in_alcoholic_beverages", "ethyl_dipropylthiocarbamate", "ethyl_methanesulfonate", "ethyl_4_4_dichlorobenzilate", "ethylbenzene", "ethylene_dibromide", "ethylene_dichloride_1_2_dichloroethane", "ethylene_glycol_ingested", "ethylene_glycol_monoethyl_ether", "ethylene_glycol_monoethyl_ether_acetate", "ethylene_glycol_monomethyl_ether", "ethylene_glycol_monomethyl_ether_acetate", "ethylene_oxide", "ethylene_thiourea", "ethyleneimine_aziridine", "etodolac", "etoposide", "etoposide_in_comb_with_cispla_and_bleomy", "etretinate", "fenoxaprop_ethyl", "fenoxycarb", "filgrastim", "fluazifop_butyl", "flunisolide", "fluoro_edenite_fibrous_amphibole", "fluorouracil", "fluoxymesterone", "flurazepam_hydrochloride", "flurbiprofen", "flutamide", "fluticasone_propionate", "fluvalinate", "folpet", "formaldehyde_gas", "fumonisin_b_1", "furan", "furazolidone", "furfuryl_alcohol", "furmecyclox", "fusarin_c", "gallium_arsenide", "ganciclovir", "ganciclovir_sodium", "gaso_engine_exhaust_condensates_extracts", "gemfibrozil", "gentian_violet_crystal_violet", "glass_wool_fibers_inhalable_and_biopersi", "glu_p_1_2_amino_6_meth_1_2_a_3_2_d_imida", "glu_p_2_2_aminodip_1_2_a_3_2_d_imidazole", "glycidaldehyde", "glycidol", "glycidyl_methacrylate", "glyphosate", "goldenseal_root_powder", "goserelin_acetate", "griseofulvin", "gyromitrin_acetaldehyde_methylformylhydr", "halazepam", "halobetasol_propionate", "haloperidol", "halothane", "hc_blue_1", "heptachlor", "heptachlor_epoxide", "herbal_remedies_containing_plant_species", "hexachlorobenzene", "hexachlorobutadiene", "hexachlorocyclohexane_alpha_isomer", "hexachlorocyclohexane_beta_isomer", "hexachlorocyclohexane_gamma_isomer", "hexachlorocyclohexane_technical_grade", "hexachlorodibenzodioxin", "hexachloroethane", "hexafluoroacetone", "hexamethylphosphoramide", "histrelin_acetate", "hydramethylnon", "hydrazine", "hydrazine_sulfate", "hydrazobenzene_1_2_diphenylhydrazine", "hydrogen_cyanide", "hydrogen_cyanide_hcn_and_cyanide_salts", "hydrogen_cyanidef", "hydroxyurea", "idarubicin_hydrochloride", "ifosfamide", "imazalil", "indeno_1_2_3_cd_pyrene", "indium_phosphide", "indium_tin_oxide", "infant_boys_ age_29_days_to_24_monthsb", "iodine_131", "iprodione", "iprovalicarb", "iq_2_amino_3_methylimida_4_5_f_quinoline", "iron_dextran_complex", "isobutyl_nitrite", "isoprene", "isopyrazam", "isotretinoin", "isoxaflutole", "kresoxim_methyl", "lactofen", "lasiocarpine", "lead", "lead_acetate", "lead_and_lead_compounds", "lead_phosphate", "lead_subacetate", "leather_dust", "leucomalachite_green", "leuprolide_acetate", "levodopa", "levonorgestrel_implants", "lindane_and_other_hexachlorocycl_isomers", "linuron", "lithium_carbonate", "lithium_citrate", "lorazepam", "lovastatin", "lynestrenol", "m_dinitrobenzene", "malathion", "malonaldehyde_sodium_salt", "mancozeb", "maneb", "me_a_alpha_c_amino_methyl_pyrido_indole", "mebendazole", "medroxyprogesterone_acetate", "megestrol_acetate", "me_iq_2_amino_3_4_dimeth_4_5_f_quinoline", "meiqx_amino_dimethylimidazo_quinoxaline", "melphalan", "menotropins", "mepanipyrim", "meprobamate", "mercaptopurine", "mercury_and_mercury_compounds", "merphalan", "mestranol", "metam_potassium", "methacycline_hydrochloride", "metham_sodium", "methanol", "methazole", "methimazole", "methotrexate", "methotrexate_sodium", "methyl_acrylate", "methyl_bromide_as_a_structural_fumigant", "methyl_carbamate", "methyl_chloride", "methyl_iodide", "methyl_isobutyl_ketone", "methyl_isobutyl_ketone_mibk", "methyl_isocyanate_mic", "methyl_mercury", "methyl_methanesulfonate", "methyl_n_butyl_ketone", "methylazoxymethanol", "methylazoxymethanol_acetate", "methyleugenol", "methylhydrazine", "methylhydrazine_and_its_salts", "methylhydrazine_sulfate", "methylmercury_compounds", "methyltestosterone", "methylthiouracil", "metiram", "metronidazole", "michlers_ketone", "midazolam_hydrochloride", "minocycline_hydrochloride_internal_use", "mirex", "misoprostol", "mitomycin_c", "mitoxantrone_hydrochloride", "molinate", "molybdenum_trioxide", "mon_13900_furilazole", "mon_4660_dichl_1_oxa_4_azaspi_4_5_decane", "monocrotaline", "mopp_vincrstprednsonnitromstrdprocarbmix", "mustard_gas", "mx_3_chloro_4_dich_5_hydr_2_5_h_furanone", "myclobutanil", "n_n_diacetylbenzidine", "NNBISChlorethlNapthylmnChlornapzne", "n_n_bis_2_chloroethyl_2_naphthyla_chlorn", "n_n_dimethyl_p_toluidine", "n_n_dimethylacetamide", "n_n_dimethylformamide", "n_4_5_nitro_2_furyl_2_thiazolyl_acetamid", "n_carboxymethyl_n_nitrosourea", "n_hexane", "n_methyl_n_nitro_n_nitrosoguanidine", "n_methylolacrylamide", "n_methylpyrrolidone", "n_nitroso_n_ethylurea", "n_nitroso_n_methylurea", "n_nitroso_n_methylurethane", "n_nitrosodi_n_butylamine", "n_nitrosodi_n_propylamine", "n_nitrosodiethanolamine", "n_nitrosodiethylamine", "n_nitrosodimethylamine", "n_nitrosodiphenylamine", "n_nitrosohexamethyleneimine", "n_nitrosomethyl_n_butylamine", "n_nitrosomethyl_n_decylamine", "n_nitrosomethyl_n_dodecylamine", "n_nitrosomethyl_n_heptylamine", "n_nitrosomethyl_n_hexylamine", "n_nitrosomethyl_n_nonylamine", "n_nitrosomethyl_n_octylamine", "n_nitrosomethyl_n_pentylamine", "n_nitrosomethyl_n_propylamine", "n_nitrosomethyl_n_tetradecylamine", "n_nitrosomethyl_n_undecylamine", "n_nitrosomethylethylamine", "n_nitrosomethylvinylamine", "n_nitrosomorpholine", "n_nitrosonornicotine", "n_nitrosopiperidine", "n_nitrosopyrrolidine", "n_nitrososarcosine", "nabam", "nafarelin_acetate", "nafenopin", "nalidixic_acid", "naphthalene", "neomycin_sulfate_internal_use", "neonatal_infant_boys_age_0_to_28_daysb", "netilmicin_sulfate", "nickel_metallic", "nickel_soluble_compounds", "nickel_acetate", "nickel_carbonate", "nickel_carbonyl", "nickel_compounds", "nickel_hydroxide", "nickel_oxide", "nickelrefinerydustpyrometallurgprocess", "nickel_subsulfide", "nickelocene", "nicotine", "nifedipine", "nimodipine", "niridazole", "nitrapyrin", "nitrilotriacetic_acid", "nitrilot_acid_trisodium_salt_monohydrate", "nitrobenzene", "nitrofen_technical_grade", "nitrofurantoin", "nitrofurazone", "nitrogen_mustard_mechlorethamine", "nitromustardhydrochloridemechlorethamine", "nitrogen_mustard_n_oxide", "nitrogen_mustard_n_oxide_hydrochloride", "nitromethane", "nitrous_oxide", "norethisterone_norethindrone", "norethis_norethindrone_ethinyl_estradiol", "norethisterone_norethindrone_mestranol", "norethiste_acetate_norethindrone_acetate", "norethynodrel", "norgestrel", "o_p_ddt", "o_aminoazotoluene", "o_anisidine", "o_anisidine_hydrochloride", "o_dinitrobenzene", "o_nitroanisole", "o_nitrotoluene", "o_phenylenediamine", "o_phenylenediamine_and_its_salts", "o_phenylenediamine_dihydochloride", "o_phenylenediamine dihydrochloride", "o_phenylphenate_sodium", "o_phenylphenol", "o_toluidine", "o_toluidine_hydrochloride", "ochratoxin_a", "oil_orange_ss", "oral_contraceptives_combined", "oral_contraceptives_sequential", "oryzalin", "oxadiazon", "oxazepam", "oxydemeton_methyl", "oxymetholone", "oxytetracycline_internal_use", "oxytetracycli_hydrochloride_internal_use", "oxythioquinox_chinomethionat", "p_p_ddt", "p_a_a_a_tetrachlorotoluene", "p_aminoazobenzene", "p_chloro_o_toluidine", "p_chloro_o_toluidine_hydrochloride", "p_chloro_o_toluidine_strong_acid_salts", "p_chloro_alpha_alpha_alpha_trifluorotolu", "p_chloroaniline", "p_chloroaniline_hydrochloride", "p_cresidine", "p_dichlorobenzene", "p_dinitrobenzene", "p_nitrosodiphenylamine", "paclitaxel", "palygorskite_fibers_morthn_5µm_length", "panfuran_s", "para_nitroanisole", "paramethadione", "parathion", "penicillamine", "pent_ether_mixture_de_71_technical_grade", "pentachlorophenol", "pentachlorophenolandbyproductofsynthesis", "pentobarbital_sodium", "pentosan_polysulfate_sodium", "pentostatin", "perfluorononanoicacid_pfna_salts", "perfluorooctane_sulfonate_pfos", "perfluorooctanesulfonicacid _pfos_salts", "perfluorooctanoic_acid_pfoa", "pertuzumab", "phenacemide", "phenacetin", "phenazopyridine", "phenazopyridine_hydrochloride", "phenesterin", "phenobarbital", "phenolphthalein", "phenoxybenzamine", "phenoxybenzamine_hydrochloride", "phenprocoumon", "phenyl_glycidyl_ether", "phenylhydrazine", "phenylhydrazine_and_its_salts", "phenylhydrazine_hydrochloride", "phenylphosphine", "phi_p_2_amino_1_methyl_6_phen_4_5_b_pyri", "pimozide", "pioglitazone", "pipobroman", "pirimicarb", "plicamycin", "polybrominated_biphenyls", "polychlorinated_biphenyls", "polychlorinatedbiphenyls60ormoreperent", "polychlorinated_dibenzo_p_dioxins", "polychlorinated_dibenzofurans", "polygeenan", "ponceau_3_r", "ponceau_mx", "potassium_bromate", "potassium_cyanide", "potassium_cyanidef", "potassium_dimethyldithiocarbamate", "pravastatin_sodium", "prednisolone_sodium_phosphate", "primidone", "procarbazine", "procarbazine_hydrochloride", "procymidone", "progesterone", "pronamide", "propachlor", "propargite", "propazine", "propoxur", "propylene_glycol_mono_t_butyl_ether", "propylene_oxide", "propylthiouracil", "pulegone", "pymetrozine", "pyridine", "pyrimethamine", "quazepam", "quinoline_and_its_strong_acid_salts", "quizalofop_ethyl", "radionuclides", "reserpine", "residual_heavy_fuel_oils", "resmethrin", "retinol_retinyl_esters_when_in_daily_dos", "ribavirin", "riddelliine", "rifampin", "s_s_s_tributyl_phosphorotri_tribufos_def", "safrole", "salted_fish_chinese_style", "secobarbital_sodium", "sedaxane", "selenium_sulfide", "sermorelin_acetate", "shale_oils", "silica_crystalline_airborne_particles_of", "silicon_carbide_whiskers", "simazine", "sodium_cyanide", "sodium_cyanidef", "sodium_dimethyldithiocarbamate", "sodium_fluoroacetate", "soots_tars_and_mineral_oils_untreated_an", "spirodiclofen", "spironolactone", "stanozolol", "sterigmatocystin", "streptomycin_sulfate", "streptozocin_streptozotocin", "streptozotocin_streptozocin", "strong_inorganic_acid_mists_containing_s", "styrene", "styrene_oxide", "sulfallate", "sulfasalazine_salicylazosulfapyridine", "sulfur_dioxidee", "sulindac", "talc_containing_asbestiform_fibers", "tamoxifen_and_its_salts", "tamoxifen_citrate", "temazepam", "teniposide", "terbacil", "teriparatide", "terrazole", "testosterone_and_its_esters", "testosterone_cypionate", "testosterone_enanthate", "tetrabromobisphenol_a", "tetrachloroethylene_perchloroethylene", "tetrachlorvinphos", "tetracycline_internal_use", "tetracycline_hydrochloride_internal_use", "tetracyclines_internal_use", "tetrafluoroethylene", "tetrahydrofuran", "tetranitromethane", "thalidomide", "thioacetamide", "thiodicarb", "thioguanine", "thiophanate_methyl", "thiouracil", "thiourea", "thorium_dioxide", "titanium_dioxide_airborne_unbound_partic", "tobacco_smoke", "tobacco_smoke_primary", "tobacco_oral_use_of_smokeless_products", "tobramycin_sulfate", "toluene", "toluene_diisocyanate", "topiramate", "toxaphene_polychlorinated_camphenes", "toxins_derived_from_fusarium_moniliforme", "trans_2_dimethylamino_methylimino_5_2_5_", "treosulfan", "triadimefon", "triamterene", "triazolam", "tributyltin_methacrylate", "trichlormethine_trimustine_hydrochloride", "trichloroacetic_acid", "trichloroethylene", "trientine_hydrochloride", "triforine", "trilostane", "trimethadione", "trimethyl_phosphate", "trimethylolpropane_triacrylate_technical", "trimetrexate_glucuronate", "trim_vx", "triphenyltin_hydroxide", "tris_1_3_dichloro_2_propyl_phospha_tdcpp", "tris_1_aziridinyl_phosp_sulfide_thiotepa", "tris_2_3_dibromopropyl_phosphate", "tris_2_chloroethyl_phosphate", "tris_aziridinyl_p_benzoquinone_triaziquo", "trp_p_1_tryptophan_p_1", "trp_p_2_tryptophan_p_2", "trypan_blue_commercial_grade", "unleaded_gasoline_wholly_vaporized", "uracil_mustard", "urethane_ethyl_carbamate", "urofollitropin", "valproate_valproic_acid", "vanadiumpentoxide_orthorhcrystallineform", "vinblastine_sulfate", "vinclozolin", "vincristine_sulfate", "vinyl_bromide", "vinyl_chloride", "vinyl_cyclohe_dioxide_4_vinyl_1_cycl_die", "vinyl_fluoride", "vinyl_trichloride_1_1_2_trichloroethane", "vinylidenechloride", "vinylidene_chloride_1_1_dichloroethylene", "vismodegib", "warfarin", "wood_dust", "zalcitabine", "zidovudine_azt", "zileuton", "alpha_methyl_styrene_alpha_methylstyrene"],
          optionLabels: {
              "1_1_1_2_tetrachloroethane": "1,1,1,2-Tetrachloroethane",
              "1_1_1_trichloroethane": "1,1,1-trichloroethane",
              "1_1_2_2_tetrachloroethane": "1,1,2,2-Tetrachloroethane",
              "1_1_dichlor_2_2_bis_p_chlorop_ethyle_dde": "1,1-Dichloro-2,2-bis(p-chloropheny)ethylene (DDE)",
              "1_1_dichloroethane": "1,1-Dichloroethane",
              "1_1_dimethylhydrazine_udmh": "1,1-Dimethylhydrazine (UDMH)",
              "1_2_3_trichloropropane": "1,2,3-Trichloropropane",
              "1_2_dibromo_3_chloropropane_dbcp": "1,2-Dibromo-3-chloropropane (DBCP)",
              "1_2_dichloropropane": "1,2-Dichloropropane",
              "1_2_diethylhydrazine": "1,2-Diethylhydrazine",
              "1_2_dimethylhydrazine": "1,2-Dimethylhydrazine",
              "1_3_butadiene": "1,3-Butadiene",
              "1_3_dichloro_2_propanol_1_3_dcp": "1,3-Dichloro-2-propanol (1,3-DCP)",
              "1_3_dichloropropene": "1,3-Dichloropropene",
              "1_3_dinitropyrene": "1,3-Dinitropyrene",
              "1_3_propane_sultone": "1,3-Propane sultone",
              "1_4_butanediol_dimethanesulfona_busulfan": "1,4-Butanediol dimethanesulfonate (Busulfan)",
              "1_4_dichloro_2_butene": "1,4-Dichloro-2-butene",
              "1_4_dichloro_2_nitrobenzene": "1,4-Dichloro-2-nitrobenzene",
              "1_4_dioxane": "1,4-Dioxane",
              "1_6_dinitropyrene": "1,6-Dinitropyrene",
              "1_8_dinitropyrene": "1,8-Dinitropyrene",
              "1_2_chloroethyl_3_4_methylcyclohexyl_1_n": "1-(2-Chloroethyl)-3-(4-methylcyclohexyl)-1-nitrosourea (Methyl-CCNU)",
              "1_2_chloroethyl_3_cyclohexyl_1_nitrosour": "1-(2-Chloroethyl)-3-cyclohexyl-1-nitrosourea (CCNU) (Lomustine)",
              "1_5_nitrofurfurylidene_amino_2_imidazoli": "1-[(5-Nitrofurfurylidene)-amino]-2-imidazolidinone",
              "1_amino_2_4_dibromoanthraquinone": "1-Amino-2,4-dibromoanthraquinone",
              "1_amino_2_methylanthraquinone": "1-Amino-2-methylanthraquinone",
              "1_bromo_3_chloropropane": "1-Bromo-3-chloropropane",
              "1_bromopropane_1_bp": "1-Bromopropane (1-BP)",
              "1_butyl_glycidyl_ether": "1-Butyl glycidyl ether",
              "1_chloro_4_nitrobenzene": "1-Chloro-4-nitrobenzene",
              "1_hydroxyanthraquinone": "1-Hydroxyanthraquinone",
              "1_naphthylamine": "1-Naphthylamine",
              "1_nitropyrene": "1-Nitropyrene",
              "2_2_bis_bromomethyl_1_3_propanediol": "2,2-Bis(bromomethyl)-1,3-propanediol",
              "2_3_7_8_tetrachlorodibenzo_p_dioxin_tcdd": "2,3,7,8-Tetrachlorodibenzo-p-dioxin (TCDD)",
              "2_3_dibromo_1_propanol": "2,3-Dibromo-1-propanol",
              "2_4_5_trimethy_and_its_strong_acid_salts": "2,4,5-Trimethylaniline and its strong acid salts",
              "2_4_6_trichlorophenol": "2,4,6-Trichlorophenol",
              "2_4_6_trinitrotoluene_tnt": "2,4,6-Trinitrotoluene (TNT)",
              "2_4_d_butyric_acid": "2,4-D butyric acid",
              "2_4_diamino_6_chloro_s_triazine_dact": "2,4-Diamino-6-chloro-s-triazine (DACT)",
              "2_4_diaminoanisole": "2,4-Diaminoanisole",
              "2_4_diaminoanisole_sulfate": "2,4-Diaminoanisole sulfate",
              "2_4_diaminotoluene": "2,4-Diaminotoluene",
              "2_4_dichloro_1_nitrobenzene": "2,4-Dichloro-1-nitrobenzene",
              "2_4_dinitrotoluene": "2,4-Dinitrotoluene",
              "2_4_hexadienal_89_percent_trans_trans_is": "2,4-Hexadienal (89% trans, trans isomer; 11% cis, trans isomer)",
              "2_5_hexanedione": "2,5-Hexanedione",
              "2_6_dimethyl_n_nitrosomorpholine_dmnm": "2,6-Dimethyl-N-nitrosomorpholine (DMNM)",
              "2_6_dinitrotoluene": "2,6-Dinitrotoluene",
              "2_6_xylidine_2_6_dimethylaniline": "2,6-Xylidine (2,6-Dimethylaniline)",
              "2_2_formylhyd_4_5_nitro_2_furyl_thiazole": "2-(2-Formylhydrazino)-4-(5-nitro-2-furyl)thiazole",
              "2_acetylaminofluorene": "2-Acetylaminofluorene",
              "2_amino_4_chlorophenol": "2-Amino-4-chlorophenol",
              "2_amino_5_5_nitro_2_furyl_1_3_4_thiadiaz": "2-Amino-5-(5-nitro-2-furyl)-1,3,4-thiadiazole",
              "2_aminoanthraquinone": "2-Aminoanthraquinone",
              "2_aminofluorene": "2-Aminofluorene",
              "2_bromopropane_2_bp": "2-Bromopropane (2-BP)",
              "2_chloronitrobenzene": "2-Chloronitrobenzene",
              "2_chloropropionic_acid": "2-Chloropropionic acid",
              "2_ethylhexyl_acrylate": "2-Ethylhexyl acrylate",
              "2_methyl_1_nitroanth_of_uncertain_purity": "2-Methyl-1-nitroanthraquinone (of uncertain purity)",
              "2_methylaziridine_propyleneimine": "2-Methylaziridine (Propyleneimine)",
              "2_methylimidazole": "2-Methylimidazole",
              "2_naphthylamine": "2-Naphthylamine",
              "2_nitrofluorene": "2-Nitrofluorene",
              "2_nitropropane": "2-Nitropropane",
              "2_mercaptobenzothiazole": "2‑Mercaptobenzothiazole",
              "3_3_4_4_tetrachloroazobenzene": "3,3',4,4'-Tetrachloroazobenzene",
              "3_3_dichloro_4_4_diamino_diphenyl_ether": "3,3'-Dichloro-4,4'-diamino-diphenyl ether",
              "3_3_dichlorobenzidine": "3,3'-Dichlorobenzidine",
              "3_3_dichlorobenzidine_dihydrochloride": "3,3'-Dichlorobenzidine dihydrochloride",
              "3_3_dimethoxybenzidine_o_dianisidine": "3,3'-Dimethoxybenzidine (o-Dianisidine)",
              "3_3_dimethoxybenzidine_dihydrochloride": "3,3'-Dimethoxybenzidine dihydrochloride",
              "3_3_dimethoxybenzidine_based_dyes_metabo": "3,3'-Dimethoxybenzidine-based dyes metabolized to 3,3'-dimethoxybenzidine",
              "3_3_dimethylbenzidine_ortho_tolidine": "3,3'-Dimethylbenzidine (ortho-Tolidine)",
              "3_3_dimethylbenzidine_dihydrochloride": "3,3'-Dimethylbenzidine dihydrochloride",
              "3_3_dimethylbenzidine_based_dyes_metabol": "3,3'-Dimethylbenzidine-based dyes metabolized to 3,3'-dimethylbenzidine",
              "3_7_dinitrofluoranthene": "3,7-Dinitrofluoranthene",
              "3_9_dinitrofluoranthene": "3,9-Dinitrofluoranthene",
              "3_n_nitrosomethylamino_propionitrile": "3-(N-Nitrosomethylamino) propionitrile",
              "3_amino_9_ethylcarbazole_hydrochloride": "3-Amino-9-ethylcarbazole hydrochloride",
              "3_chloro_2_methylpropene": "3-Chloro-2-methylpropene",
              "3_methylcholanthrene": "3-Methylcholanthrene",
              "3_monochloropropane_1_2_diol_3_mcpd": "3-Monochloropropane-1,2-diol (3-MCPD)",
              "4_4_diaminodiphen_ether_4_4_oxydianiline": "4,4'-Diaminodiphenyl ether (4,4'-Oxydianiline)",
              "4_4_methylene_bis_2_chloroaniline": "4,4'-Methylene bis(2-chloroaniline)",
              "4_4_methylene_bis_2_methylaniline": "4,4'-Methylene bis(2-methylaniline)",
              "4_4_methylene_bis_n_n_dimethyl_benzenami": "4,4'-Methylene bis(N,N-dimethyl)benzenamine",
              "4_4_methylenedianiline": "4,4'-Methylenedianiline",
              "4_4_methylenedianiline_dihydrochloride": "4,4'-Methylenedianiline dihydrochloride",
              "4_4_thiodianiline": "4,4'-Thiodianiline",
              "4_n_nitrosomethyl_1_3_pyridyl_1_butanone": "4-(N-Nitrosomethylamino)-1-(3-pyridyl)1-butanone",
              "4_amino_2_nitrophenol": "4-Amino-2-nitrophenol",
              "4_aminobiphenyl_4_aminodiphenyl": "4-Aminobiphenyl (4-aminodiphenyl)",
              "4_chloro_o_phenylenediamine": "4-Chloro-o-phenylenediamine",
              "4_dimethylaminoazobenzene": "4-Dimethylaminoazobenzene",
              "4_methylimidazole": "4-Methylimidazole",
              "4_nitrobiphenyl": "4-Nitrobiphenyl",
              "4_nitropyrene": "4-Nitropyrene",
              "4_vinyl_1_cycloh_diepoxide_vinyl_cyclohe": "4-Vinyl-1-cyclohexene diepoxide (Vinyl cyclohexenedioxide)",
              "4_vinylcyclohexene": "4-Vinylcyclohexene",
              morphmethylnitrfurylidenamnooxazolidinon: "5-(Morpholinomethyl)-3-[(5-nitrofurfuryl-idene)-amino]-2-oxazolidinone",
              "5_chloro_o_toluidi_its_strong_acid_salts": "5-Chloro-o-toluidine and its strong acid salts",
              "5_methoxypsor_with_ultraviolet_a_therapy": "5-Methoxypsoralen with ultraviolet A therapy",
              "5_methylchrysene": "5-Methylchrysene",
              "5_nitroacenaphthene": "5-Nitroacenaphthene",
              "6_nitrochrysene": "6-Nitrochrysene",
              "7_12_dimethylbenz_a_anthracene": "7,12-Dimethylbenz(a)anthracene",
              "7_h_dibenzo_c_g_carbazole": "7H-Dibenzo[c,g]carbazole",
              "8_methoxypsor_with_ultraviolet_a_therapy": "8-Methoxypsoralen with ultraviolet A therapy",
              a_alpha_c_2_amino_9_h_pyrido_2_3_b_indol: "A-alpha-C (2-Amino-9H-pyrido[2,3-b]indole)",
              abiraterone_acetate: "Abiraterone acetate",
              acetaldehyde: "Acetaldehyde",
              acetamide: "Acetamide",
              acetazolamide: "Acetazolamide",
              acetochlor: "Acetochlor",
              acetohydroxamic_acid: "Acetohydroxamic acid",
              acifluorfen_sodium: "Acifluorfen sodium",
              acrylamide: "Acrylamide",
              acrylonitrile: "Acrylonitrile",
              actinomycin_d: "Actinomycin D",
              adultb: "Adultb",
              af_2_2_2_furyl_3_5_nitro_2_furyl_acrylam: "AF-2;[2-(2-furyl)-3-(5-nitro-2-furyl)]acrylamide",
              aflatoxins: "Aflatoxins",
              alachlor: "Alachlor",
              alcoholic_beverages: "Alcoholic beverages",
              alcoholicbeverage_associatedalcoholabuse: "Alcoholic beverages, when associated with alcohol abuse",
              aldrin: "Aldrin",
              all_trans_retinoic_acid: "All-trans retinoic acid",
              aloe_vera_non_decolor_whole_leaf_extract: "Aloe Vera, non-decolorized whole leaf extract",
              alprazolam: "Alprazolam",
              altretamine: "Altretamine",
              amantadine_hydrochloride: "Amantadine hydrochloride",
              amikacin_sulfate: "Amikacin sulfate",
              aminoglutethimide: "Aminoglutethimide",
              aminoglycosides: "Aminoglycosides",
              aminopterin: "Aminopterin",
              amiodarone_hydrochloride: "Amiodarone hydrochloride",
              amitraz: "Amitraz",
              amitrole: "Amitrole",
              amoxapine: "Amoxapine",
              amsacrine: "Amsacrine",
              anabolic_steroids: "Anabolic steroids",
              analgesic_mixtures_containing_phenacetin: "Analgesic mixtures containing Phenacetin",
              androstenedione: "Androstenedione",
              "angiotensinconvertenzyme _ace_inhibitors": "Angiotensin converting enzyme  (ACE) inhibitors",
              angiote_converting_enzyme_ace_inhibitors: "Angiotensin converting enzyme (ACE) inhibitors",
              aniline: "Aniline",
              aniline_hydrochloride: "Aniline hydrochloride",
              anisindione: "Anisindione",
              anthracene: "Anthracene",
              anthraquinone: "Anthraquinone",
              antimony_oxide_antimony_trioxide: "Antimony oxide (Antimony trioxide)",
              aramite: "Aramite",
              areca_nut: "Areca nut",
              aristolochic_acids: "Aristolochic acids",
              arsenic_inorganic_arsenic_compounds: "Arsenic (inorganic arsenic compounds)",
              arsenic_inorganic_oxides: "Arsenic (inorganic oxides)",
              asbestos: "Asbestos",
              aspirin: "Aspirin",
              atenolol: "Atenolol",
              atrazine: "Atrazine",
              auramine: "Auramine",
              auranofin: "Auranofin",
              avermectin_b_1_abamectin: "Avermectin B1 (Abamectin)",
              azacitidine: "Azacitidine",
              azaserine: "Azaserine",
              azathioprine: "Azathioprine",
              azobenzene: "Azobenzene",
              barbiturates: "Barbiturates",
              beclomethasone_dipropionate: "Beclomethasone dipropionate",
              benomyl: "Benomyl",
              benthiavalicarb_isopropyl: "Benthiavalicarb-isopropyl",
              benz_a_anthracene: "Benz[a]anthracene",
              benzene: "Benzene",
              benzidine_and_its_salts: "Benzidine [and its salts]",
              benzidine_based_dyes: "Benzidine-based dyes",
              benzo_a_pyrene: "Benzo[a]pyrene",
              benzo_b_fluoranthene: "Benzo[b]fluoranthene",
              benzo_j_fluoranthene: "Benzo[j]fluoranthene",
              benzo_k_fluoranthene: "Benzo[k]fluoranthene",
              benzodiazepines: "Benzodiazepines",
              benzofuran: "Benzofuran",
              benzophenone: "Benzophenone",
              benzotrichloride: "Benzotrichloride",
              benzphetamine_hydrochloride: "Benzphetamine hydrochloride",
              benzyl_chloride: "Benzyl chloride",
              benzyl_violet_4_b: "Benzyl violet 4B",
              beryllium: "Beryllium",
              beryllium_and_beryllium_compounds: "Beryllium and beryllium compounds",
              beryllium_oxide: "Beryllium oxide",
              beryllium_sulfate: "Beryllium sulfate",
              beta_butyrolactone: "beta-Butyrolactone",
              beta_myrcene: "beta-Myrcene",
              beta_propiolactone: "beta-Propiolactone",
              betel_quid_with_tobacco: "Betel quid with tobacco",
              betel_quid_without_tobacco: "Betel quid without tobacco",
              bevacizumab: "Bevacizumab",
              bis_2chloro1methylethyl_ethertechgrade: "Bis(2-chloro-1-methylethyl)ether,  technical grade",
              bis_2_chloro_1_methyleth_ether_technical: "Bis(2-chloro-1-methylethyl)ether, technical grade",
              bis_2_chloroethyl_ether: "Bis(2-chloroethyl)ether",
              bis_chloromethyl_ether: "Bis(chloromethyl)ether",
              bischloroethyl_nitrosourea_bcnu_carmusti: "Bischloroethyl nitrosourea (BCNU) (Carmustine)",
              bisphenol_a_bpa: "Bisphenol A (BPA)",
              bisphenol_s_bps: "Bisphenol S (BPS)",
              bitumens_extracts_steam_refined_air_refi: "Bitumens, extracts of steam-refined and air refined",
              bracken_fern: "Bracken fern",
              bromacil_lithium_salt: "Bromacil lithium salt",
              bromate: "Bromate",
              bromochloroacetic_acid: "Bromochloroacetic acid",
              bromodichloroacetic_acid: "Bromodichloroacetic acid",
              bromodichloromethane: "Bromodichloromethane",
              bromoethane: "Bromoethane",
              bromoform: "Bromoform",
              bromoxynil: "Bromoxynil",
              bromoxynil_octanoate: "Bromoxynil octanoate",
              butabarbital_sodium: "Butabarbital sodium",
              butyl_benzyl_phthalate_bbp_d: "Butyl benzyl phthalate (BBP)d",
              butylated_hydroxyanisole: "Butylated hydroxyanisole",
              c_i_acid_red_114: "C.I. Acid Red 114",
              c_i_basic_red_9_monohydrochloride: "C.I. Basic Red 9 monohydrochloride",
              c_i_direct_blue_15: "C.I. Direct Blue 15",
              c_i_direct_blue_218: "C.I. Direct Blue 218",
              c_i_disperse_yellow_3: "C.I. Disperse Yellow 3",
              c_i_solvent_yellow_14: "C.I. Solvent Yellow 14",
              cacodylic_acid: "Cacodylic acid",
              cadmium: "Cadmium",
              cadmium_and_cadmium_compounds: "Cadmium and cadmium compounds",
              caffeic_acid: "Caffeic acid",
              captafol: "Captafol",
              captan: "Captan",
              carbamazepine: "Carbamazepine",
              carbaryl: "Carbaryl",
              carbazole: "Carbazole",
              carbon_black_airborne_unbound_particles_: "Carbon black (airborne, unbound particles of respirable size)",
              carbon_disulfide: "Carbon disulfide",
              carbon_monoxide: "Carbon monoxide",
              carbon_tetrachloride: "Carbon tetrachloride",
              carbon_black_extracts: "Carbon-black extracts",
              carboplatin: "Carboplatin",
              catechol: "Catechol",
              ceramic_fiber_airbor_part_respirable_siz: "Ceramic fibers (airborne particles of respirable size)",
              certain_combined_chemotherapy_for_lympho: "Certain combined chemotherapy for lymphomas",
              chenodiol: "Chenodiol",
              chloral: "Chloral",
              chloral_hydrate: "Chloral hydrate",
              chlorambucil: "Chlorambucil",
              chloramphenicol_sodium_succinate: "Chloramphenicol sodium succinate",
              chlorcyclizine_hydrochloride: "Chlorcyclizine hydrochloride",
              chlordane: "Chlordane",
              chlordecone_kepone: "Chlordecone (Kepone)",
              chlordiazepoxide: "Chlordiazepoxide",
              chlordiazepoxide_hydrochloride: "Chlordiazepoxide hydrochloride",
              chlordimeform: "Chlordimeform",
              chlorendic_acid: "Chlorendic acid",
              chlorinated_paraffins_average_chain_leng: "Chlorinated paraffins (Average chain length, C12;approximately 60 percent chlorine by weight)",
              chloroethane_ethyl_chloride: "Chloroethane (Ethyl chloride)",
              chloroform: "Chloroform",
              chloromethyl_methyl_ether_technical_grad: "Chloromethyl methyl ether (technical grade)",
              chloroprene: "Chloroprene",
              chlorothalonil: "Chlorothalonil",
              chlorotrianisene: "Chlorotrianisene",
              chlorozotocin: "Chlorozotocin",
              chlorpyrifos: "Chlorpyrifos",
              chromium_hexavalent_compounds: "Chromium (hexavalent compounds)",
              chrysene: "Chrysene",
              ciclosporin_cyclosporin_a_cyclosporine: "Ciclosporin (Cyclosporin A; Cyclosporine)",
              cidofovir: "Cidofovir",
              cinnamyl_anthranilate: "Cinnamyl anthranilate",
              cisplatin: "Cisplatin",
              citrus_red_no_2: "Citrus Red No. 2",
              cladribine: "Cladribine",
              clarithromycin: "Clarithromycin",
              clobetasol_propionate: "Clobetasol propionate",
              clofibrate: "Clofibrate",
              clomiphene_citrate: "Clomiphene citrate",
              clorazepate_dipotassium: "Clorazepate dipotassium",
              cmnp_pyrazachlor: "CMNP (pyrazachlor)",
              coal_tar_pitch: "Coal-tar pitch",
              cobalt_ii_oxide: "Cobalt [II] oxide",
              cobalt_metal_powder: "Cobalt metal powder",
              cobalt_sulfate: "Cobalt sulfate",
              cobalt_sulfate_heptahydrate: "Cobalt sulfate heptahydrate",
              coconutoilcocamidediethanolamine: "Coconut oil diethanolamine condensate (cocamide diethanolamine)",
              codeine_phosphate: "Codeine phosphate",
              coke_oven_emissions: "Coke oven emissions",
              colchicine: "Colchicine",
              conjugated_estrogens: "Conjugated estrogens",
              creosotes: "Creosotes",
              cumene: "Cumene",
              cupferron: "Cupferron",
              cyanazine: "Cyanazine",
              cyanidesaltsdisassociatesolution: "Cyanide salts that readily dissociate in solution (expressed as cyanide)f",
              cycasin: "Cycasin",
              cycloate: "Cycloate",
              cycloheximide: "Cycloheximide",
              cyclopenta_cd_pyrene: "Cyclopenta[cd]pyrene",
              cyclophosphamide_anhydrous: "Cyclophosphamide (anhydrous)",
              cyclophosphamide_hydrated: "Cyclophosphamide (hydrated)",
              cyhexatin: "Cyhexatin",
              cytarabine: "Cytarabine",
              cytembena: "Cytembena",
              d_c_orange_no_17: "D&C Orange No. 17",
              d_c_red_no_19: "D&C Red No. 19",
              d_c_red_no_8: "D&C Red No. 8",
              d_c_red_no_9: "D&C Red No. 9",
              dacarbazine: "Dacarbazine",
              daminozide: "Daminozide",
              danazol: "Danazol",
              dantron_chrysazin_1_8_dihydroxyanthraqui: "Dantron (Chrysazin; 1,8-Dihydroxyanthraquinone)",
              daunomycin: "Daunomycin",
              daunorubicin_hydrochloride: "Daunorubicin hydrochloride",
              ddd_dichlorodiphenyl_dichloroethane: "DDD (Dichlorodiphenyl-dichloroethane)",
              dde_dichlorodiphenyl_dichloroethylene: "DDE (Dichlorodiphenyl-dichloroethylene)",
              ddt_dichlorodiphenyl_trichloroethane: "DDT (Dichlorodiphenyl-trichloroethane)",
              ddvp_dichlorvos: "DDVP (Dichlorvos)",
              demeclocyclin_hydrochloride_internal_use: "Demeclocycline hydrochloride (internal use)",
              des_ethyl_atrazine_dea: "Des-ethyl atrazine (DEA)",
              des_isopropyl_atrazine_dia: "Des-isopropyl atrazine (DIA)",
              di_2_ethylhexyl_phthalate_dehp: "Di(2-ethylhexyl)phthalate (DEHP)",
              di_isodecyl_phthalate_didp: "Di-isodecyl phthalate (DIDP)",
              di_n_butyl_phthalate_dbp: "Di-n-butyl phthalate (DBP)",
              di_n_hexyl_phthalate_dn_hp: "Di-n-hexyl phthalate (DnHP)",
              di_n_propyl_isocinchom_mgk_repellent_326: "Di-n-propyl isocinchomeronate (MGK Repellent 326)",
              diazepam: "Diazepam",
              diazoaminobenzene: "Diazoaminobenzene",
              diazoxide: "Diazoxide",
              dibenz_a_c_anthracene: "Dibenz[a,c]anthracene",
              dibenz_a_h_acridine: "Dibenz[a,h]acridine",
              dibenz_a_h_anthracene: "Dibenz[a,h]anthracene",
              dibenz_a_j_acridine: "Dibenz[a,j]acridine",
              dibenz_a_j_anthracene: "Dibenz[a,j]anthracene",
              dibenzanthracenes: "Dibenzanthracenes",
              dibenzo_a_e_pyrene: "Dibenzo[a,e]pyrene",
              dibenzo_a_h_pyrene: "Dibenzo[a,h]pyrene",
              dibenzo_a_i_pyrene: "Dibenzo[a,i]pyrene",
              dibenzo_a_l_pyrene: "Dibenzo[a,l]pyrene",
              dibromoacetic_acid: "Dibromoacetic acid",
              dibromoacetonitrile: "Dibromoacetonitrile",
              dichloroacetic_acid: "Dichloroacetic acid",
              dichloromethane_methylene_chloride: "Dichloromethane (Methylene chloride)",
              dichlorophene: "Dichlorophene",
              dichlorphenamide: "Dichlorphenamide",
              diclofop_methyl: "Diclofop-methyl",
              dicumarol: "Dicumarol",
              dieldrin: "Dieldrin",
              diepoxybutane: "Diepoxybutane",
              diesel_engine_exhaust: "Diesel engine exhaust",
              diethanolamine: "Diethanolamine",
              diethyl_sulfate: "Diethyl sulfate",
              diethylstilbestrol_des: "Diethylstilbestrol (DES)",
              diflunisal: "Diflunisal",
              diglycidyl_resorcinol_ether_dgre: "Diglycidyl resorcinol ether (DGRE)",
              dihydroergotamine_mesylate: "Dihydroergotamine mesylate",
              dihydrosafrole: "Dihydrosafrole",
              diisononyl_phthalate_dinp: "Diisononyl phthalate (DINP)",
              diisopropyl_sulfate: "Diisopropyl sulfate",
              diltiazem_hydrochloride: "Diltiazem hydrochloride",
              dimethyl_hydrogen_phosphite: "Dimethyl hydrogen phosphite",
              dimethyl_sulfate: "Dimethyl sulfate",
              dimethylcarbamoyl_chloride: "Dimethylcarbamoyl chloride",
              dimethylvinylchloride: "Dimethylvinylchloride",
              dinitrotoluene_technical_grade: "Dinitrotoluene (technical grade)",
              dinitrotoluene_mixture_2_4_2_6: "Dinitrotoluene mixture, 2,4-/2,6-",
              dinocap: "Dinocap",
              dinoseb: "Dinoseb",
              diphenylhydantoin_phenytoin: "Diphenylhydantoin (Phenytoin)",
              diphenylhydantoin_phenytoin_sodium_salt: "Diphenylhydantoin (Phenytoin), sodium salt",
              direct_black_38_technical_grade: "Direct Black 38 (technical grade)",
              direct_blue_6_technical_grade: "Direct Blue 6 (technical grade)",
              direct_brown_95_technical_grade: "Direct Brown 95 (technical grade)",
              disodium_cyanodithioimidocarbonate: "Disodium cyanodithioimidocarbonate",
              disperse_blue_1: "Disperse Blue 1",
              diuron: "Diuron",
              doxorubicin_hydrochloride_adriamycin: "Doxorubicin hydrochloride (Adriamycin)",
              doxycycline_internal_use: "Doxycycline (internal use)",
              doxycycline_calcium_internal_use: "Doxycycline calcium (internal use)",
              doxycycline_hyclate_internal_use: "Doxycycline hyclate (internal use)",
              doxycycline_monohydrate_internal_use: "Doxycycline monohydrate (internal use)",
              emissions_from_combustion_of_coal: "Emissions from combustion of coal",
              emissions_from_high_temperature_unrefine: "Emissions from high-temperature unrefined rapeseed oil",
              endrin: "Endrin",
              environmental_tobacco_smoke_ets: "Environmental tobacco smoke (ETS)",
              epichlorohydrin: "Epichlorohydrin",
              epoxiconazole: "Epoxiconazole",
              ergotamine_tartrate: "Ergotamine tartrate",
              erionite: "Erionite",
              estradiol_17_b: "Estradiol 17B",
              estragole: "Estragole",
              estrogen_progestogen_combined_used_as_me: "Estrogen-progestogen (combined) used as menopausal therapy",
              estrogens_steroidal: "Estrogens, steroidal",
              estrone: "Estrone",
              estropipate: "Estropipate",
              ethanol_in_alcoholic_beverages: "Ethanol in alcoholic beverages",
              ethinylestradiol: "Ethinylestradiol",
              ethionamide: "Ethionamide",
              ethoprop: "Ethoprop",
              ethyl_acrylate: "Ethyl acrylate",
              ethyl_alcohol_in_alcoholic_beverages: "Ethyl alcohol in alcoholic beverages",
              ethyl_dipropylthiocarbamate: "Ethyl dipropylthiocarbamate",
              ethyl_methanesulfonate: "Ethyl methanesulfonate",
              ethyl_4_4_dichlorobenzilate: "Ethyl-4,4'-dichlorobenzilate",
              ethylbenzene: "Ethylbenzene",
              ethylene_dibromide: "Ethylene dibromide",
              ethylene_dichloride_1_2_dichloroethane: "Ethylene dichloride (1,2-Dichloroethane)",
              ethylene_glycol_ingested: "Ethylene glycol (ingested)",
              ethylene_glycol_monoethyl_ether: "Ethylene glycol monoethyl ether",
              ethylene_glycol_monoethyl_ether_acetate: "Ethylene glycol monoethyl ether acetate",
              ethylene_glycol_monomethyl_ether: "Ethylene glycol monomethyl ether",
              ethylene_glycol_monomethyl_ether_acetate: "Ethylene glycol monomethyl ether acetate",
              ethylene_oxide: "Ethylene oxide",
              ethylene_thiourea: "Ethylene thiourea",
              ethyleneimine_aziridine: "Ethyleneimine (Aziridine)",
              etodolac: "Etodolac",
              etoposide: "Etoposide",
              etoposide_in_comb_with_cispla_and_bleomy: "Etoposide in combination with cisplatin and bleomycin",
              etretinate: "Etretinate",
              fenoxaprop_ethyl: "Fenoxaprop ethyl",
              fenoxycarb: "Fenoxycarb",
              filgrastim: "Filgrastim",
              fluazifop_butyl: "Fluazifop butyl",
              flunisolide: "Flunisolide",
              fluoro_edenite_fibrous_amphibole: "Fluoro-edenite fibrous amphibole",
              fluorouracil: "Fluorouracil",
              fluoxymesterone: "Fluoxymesterone",
              flurazepam_hydrochloride: "Flurazepam hydrochloride",
              flurbiprofen: "Flurbiprofen",
              flutamide: "Flutamide",
              fluticasone_propionate: "Fluticasone propionate",
              fluvalinate: "Fluvalinate",
              folpet: "Folpet",
              formaldehyde_gas: "Formaldehyde (gas)",
              fumonisin_b_1: "Fumonisin B1",
              furan: "Furan",
              furazolidone: "Furazolidone",
              furfuryl_alcohol: "Furfuryl alcohol",
              furmecyclox: "Furmecyclox",
              fusarin_c: "Fusarin C",
              gallium_arsenide: "Gallium arsenide",
              ganciclovir: "Ganciclovir",
              ganciclovir_sodium: "Ganciclovir sodium",
              gaso_engine_exhaust_condensates_extracts: "Gasoline engine exhaust (condensates/extracts)",
              gemfibrozil: "Gemfibrozil",
              gentian_violet_crystal_violet: "Gentian violet (Crystal violet)",
              glass_wool_fibers_inhalable_and_biopersi: "Glass wool fibers (inhalable and biopersistent)",
              glu_p_1_2_amino_6_meth_1_2_a_3_2_d_imida: "Glu-P-1 (2-Amino-6-methyldipyrido[1,2- a:3',2'-d]imidazole)",
              glu_p_2_2_aminodip_1_2_a_3_2_d_imidazole: "Glu-P-2 (2-Aminodipyrido[1,2-a:3',2'-d]imidazole)",
              glycidaldehyde: "Glycidaldehyde",
              glycidol: "Glycidol",
              glycidyl_methacrylate: "Glycidyl methacrylate",
              glyphosate: "Glyphosate",
              goldenseal_root_powder: "Goldenseal root powder",
              goserelin_acetate: "Goserelin acetate",
              griseofulvin: "Griseofulvin",
              gyromitrin_acetaldehyde_methylformylhydr: "Gyromitrin (Acetaldehyde methylformylhydrazone)",
              halazepam: "Halazepam",
              halobetasol_propionate: "Halobetasol propionate",
              haloperidol: "Haloperidol",
              halothane: "Halothane",
              hc_blue_1: "HC Blue 1",
              heptachlor: "Heptachlor",
              heptachlor_epoxide: "Heptachlor epoxide",
              herbal_remedies_containing_plant_species: "Herbal remedies containing plant species of the genus Aristolochia",
              hexachlorobenzene: "Hexachlorobenzene",
              hexachlorobutadiene: "Hexachlorobutadiene",
              hexachlorocyclohexane_alpha_isomer: "Hexachlorocyclohexane (alpha isomer)",
              hexachlorocyclohexane_beta_isomer: "Hexachlorocyclohexane (beta isomer)",
              hexachlorocyclohexane_gamma_isomer: "Hexachlorocyclohexane (gamma isomer)",
              hexachlorocyclohexane_technical_grade: "Hexachlorocyclohexane (technical grade)",
              hexachlorodibenzodioxin: "Hexachlorodibenzodioxin",
              hexachloroethane: "Hexachloroethane",
              hexafluoroacetone: "Hexafluoroacetone",
              hexamethylphosphoramide: "Hexamethylphosphoramide",
              histrelin_acetate: "Histrelin acetate",
              hydramethylnon: "Hydramethylnon",
              hydrazine: "Hydrazine",
              hydrazine_sulfate: "Hydrazine sulfate",
              hydrazobenzene_1_2_diphenylhydrazine: "Hydrazobenzene (1,2-Diphenylhydrazine)",
              hydrogen_cyanide: "Hydrogen cyanide",
              hydrogen_cyanide_hcn_and_cyanide_salts: "Hydrogen cyanide (HCN) and cyanide salts (CN salts)",
              hydrogen_cyanidef: "Hydrogen cyanidef",
              hydroxyurea: "Hydroxyurea",
              idarubicin_hydrochloride: "Idarubicin hydrochloride",
              ifosfamide: "Ifosfamide",
              imazalil: "Imazalil",
              indeno_1_2_3_cd_pyrene: "Indeno[1,2,3-cd]pyrene",
              indium_phosphide: "Indium phosphide",
              indium_tin_oxide: "Indium tin oxide",
              "infant_boys_ age_29_days_to_24_monthsb": "Infant boys, age 29 days to 24 monthsb",
              iodine_131: "Iodine-131",
              iprodione: "Iprodione",
              iprovalicarb: "Iprovalicarb",
              iq_2_amino_3_methylimida_4_5_f_quinoline: "IQ (2-Amino-3-methylimidazo[4,5-f] quinoline)",
              iron_dextran_complex: "Iron dextran complex",
              isobutyl_nitrite: "Isobutyl nitrite",
              isoprene: "Isoprene",
              isopyrazam: "Isopyrazam",
              isotretinoin: "Isotretinoin",
              isoxaflutole: "Isoxaflutole",
              kresoxim_methyl: "Kresoxim-methyl",
              lactofen: "Lactofen",
              lasiocarpine: "Lasiocarpine",
              lead: "Lead",
              lead_acetate: "Lead acetate",
              lead_and_lead_compounds: "Lead and lead compounds",
              lead_phosphate: "Lead phosphate",
              lead_subacetate: "Lead subacetate",
              leather_dust: "Leather dust",
              leucomalachite_green: "leucomalachite green",
              leuprolide_acetate: "Leuprolide acetate",
              levodopa: "Levodopa",
              levonorgestrel_implants: "Levonorgestrel implants",
              lindane_and_other_hexachlorocycl_isomers: "Lindane and other hexachlorocyclohexane isomers",
              linuron: "Linuron",
              lithium_carbonate: "Lithium carbonate",
              lithium_citrate: "Lithium citrate",
              lorazepam: "Lorazepam",
              lovastatin: "Lovastatin",
              lynestrenol: "Lynestrenol",
              m_dinitrobenzene: "m-Dinitrobenzene",
              malathion: "Malathion",
              malonaldehyde_sodium_salt: "Malonaldehyde, sodium salt",
              mancozeb: "Mancozeb",
              maneb: "Maneb",
              me_a_alpha_c_amino_methyl_pyrido_indole: "Me-A-alpha-C (2-Amino-3-methyl-9H-pyrido[2,3-b]indole)",
              mebendazole: "Mebendazole",
              medroxyprogesterone_acetate: "Medroxyprogesterone acetate",
              megestrol_acetate: "Megestrol acetate",
              me_iq_2_amino_3_4_dimeth_4_5_f_quinoline: "MeIQ (2-Amino-3,4-dimethylimidazo[4,5-f]quinoline)",
              meiqx_amino_dimethylimidazo_quinoxaline: "MeIQx (2-Amino-3,8-dimethylimidazo[4,5-f]quinoxaline)",
              melphalan: "Melphalan",
              menotropins: "Menotropins",
              mepanipyrim: "Mepanipyrim",
              meprobamate: "Meprobamate",
              mercaptopurine: "Mercaptopurine",
              mercury_and_mercury_compounds: "Mercury and mercury compounds",
              merphalan: "Merphalan",
              mestranol: "Mestranol",
              metam_potassium: "Metam potassium",
              methacycline_hydrochloride: "Methacycline hydrochloride",
              metham_sodium: "Metham sodium",
              methanol: "Methanol",
              methazole: "Methazole",
              methimazole: "Methimazole",
              methotrexate: "Methotrexate",
              methotrexate_sodium: "Methotrexate sodium",
              methyl_acrylate: "Methyl acrylate",
              methyl_bromide_as_a_structural_fumigant: "Methyl bromide, as a structural fumigant",
              methyl_carbamate: "Methyl carbamate",
              methyl_chloride: "Methyl chloride",
              methyl_iodide: "Methyl iodide",
              methyl_isobutyl_ketone: "Methyl isobutyl ketone",
              methyl_isobutyl_ketone_mibk: "Methyl isobutyl ketone (MIBK)",
              methyl_isocyanate_mic: "Methyl isocyanate (MIC)",
              methyl_mercury: "Methyl mercury",
              methyl_methanesulfonate: "Methyl methanesulfonate",
              methyl_n_butyl_ketone: "Methyl-n-butyl ketone",
              methylazoxymethanol: "Methylazoxymethanol",
              methylazoxymethanol_acetate: "Methylazoxymethanol acetate",
              methyleugenol: "Methyleugenol",
              methylhydrazine: "Methylhydrazine",
              methylhydrazine_and_its_salts: "Methylhydrazine and its salts",
              methylhydrazine_sulfate: "Methylhydrazine sulfate",
              methylmercury_compounds: "Methylmercury compounds",
              methyltestosterone: "Methyltestosterone",
              methylthiouracil: "Methylthiouracil",
              metiram: "Metiram",
              metronidazole: "Metronidazole",
              michlers_ketone: "Michler's ketone",
              midazolam_hydrochloride: "Midazolam hydrochloride",
              minocycline_hydrochloride_internal_use: "Minocycline hydrochloride (internal use)",
              mirex: "Mirex",
              misoprostol: "Misoprostol",
              mitomycin_c: "Mitomycin C",
              mitoxantrone_hydrochloride: "Mitoxantrone hydrochloride",
              molinate: "Molinate",
              molybdenum_trioxide: "Molybdenum trioxide",
              mon_13900_furilazole: "MON 13900 (furilazole)",
              mon_4660_dichl_1_oxa_4_azaspi_4_5_decane: "MON 4660 (dichloroacetyl-1-oxa-4-azaspiro(4,5)-decane",
              monocrotaline: "Monocrotaline",
              mopp_vincrstprednsonnitromstrdprocarbmix: "MOPP (vincristine-prednisone-nitrogen mustard-procarbazine mixture)",
              mustard_gas: "Mustard Gas",
              mx_3_chloro_4_dich_5_hydr_2_5_h_furanone: "MX (3-chloro-4-dichloromethyl-5-hydroxy-2(5H)-furanone)",
              myclobutanil: "Myclobutanil",
              n_n_diacetylbenzidine: "N,N'-Diacetylbenzidine",
              NNBISChlorethlNapthylmnChlornapzne: "N,N-Bis(2-chloroethyl)-2-naphthylamine  (Chlornapazine)",
              n_n_bis_2_chloroethyl_2_naphthyla_chlorn: "N,N-Bis(2-chloroethyl)-2-naphthylamine (Chlornapazine)",
              n_n_dimethyl_p_toluidine: "N,N-Dimethyl-p-toluidine",
              n_n_dimethylacetamide: "N,N-Dimethylacetamide",
              n_n_dimethylformamide: "N,N-Dimethylformamide",
              n_4_5_nitro_2_furyl_2_thiazolyl_acetamid: "N-[4-(5-Nitro-2-furyl)-2-thiazolyl]acetamide",
              n_carboxymethyl_n_nitrosourea: "N-Carboxymethyl-N-nitrosourea",
              n_hexane: "n-Hexane",
              n_methyl_n_nitro_n_nitrosoguanidine: "N-Methyl-N'-nitro-N-nitrosoguanidine",
              n_methylolacrylamide: "N-Methylolacrylamide",
              n_methylpyrrolidone: "N-Methylpyrrolidone",
              n_nitroso_n_ethylurea: "N-Nitroso-N-ethylurea",
              n_nitroso_n_methylurea: "N-Nitroso-N-methylurea",
              n_nitroso_n_methylurethane: "N-Nitroso-N-methylurethane",
              n_nitrosodi_n_butylamine: "N-Nitrosodi-n-butylamine",
              n_nitrosodi_n_propylamine: "N-Nitrosodi-n-propylamine",
              n_nitrosodiethanolamine: "N-Nitrosodiethanolamine",
              n_nitrosodiethylamine: "N-Nitrosodiethylamine",
              n_nitrosodimethylamine: "N-Nitrosodimethylamine",
              n_nitrosodiphenylamine: "N-Nitrosodiphenylamine",
              n_nitrosohexamethyleneimine: "N-Nitrosohexamethyleneimine",
              n_nitrosomethyl_n_butylamine: "N-Nitrosomethyl-n-butylamine",
              n_nitrosomethyl_n_decylamine: "N-Nitrosomethyl-n-decylamine",
              n_nitrosomethyl_n_dodecylamine: "N-Nitrosomethyl-n-dodecylamine",
              n_nitrosomethyl_n_heptylamine: "N-Nitrosomethyl-n-heptylamine",
              n_nitrosomethyl_n_hexylamine: "N-Nitrosomethyl-n-hexylamine",
              n_nitrosomethyl_n_nonylamine: "N-Nitrosomethyl-n-nonylamine",
              n_nitrosomethyl_n_octylamine: "N-Nitrosomethyl-n-octylamine",
              n_nitrosomethyl_n_pentylamine: "N-Nitrosomethyl-n-pentylamine",
              n_nitrosomethyl_n_propylamine: "N-Nitrosomethyl-n-propylamine",
              n_nitrosomethyl_n_tetradecylamine: "N-Nitrosomethyl-n-tetradecylamine",
              n_nitrosomethyl_n_undecylamine: "N-Nitrosomethyl-n-undecylamine",
              n_nitrosomethylethylamine: "N-Nitrosomethylethylamine",
              n_nitrosomethylvinylamine: "N-Nitrosomethylvinylamine",
              n_nitrosomorpholine: "N-Nitrosomorpholine",
              n_nitrosonornicotine: "N-Nitrosonornicotine",
              n_nitrosopiperidine: "N-Nitrosopiperidine",
              n_nitrosopyrrolidine: "N-Nitrosopyrrolidine",
              n_nitrososarcosine: "N-Nitrososarcosine",
              nabam: "Nabam",
              nafarelin_acetate: "Nafarelin acetate",
              nafenopin: "Nafenopin",
              nalidixic_acid: "Nalidixic acid",
              naphthalene: "Naphthalene",
              neomycin_sulfate_internal_use: "Neomycin sulfate (internal use)",
              neonatal_infant_boys_age_0_to_28_daysb: "Neonatal infant boys, age 0 to 28 daysb",
              netilmicin_sulfate: "Netilmicin sulfate",
              nickel_metallic: "Nickel (Metallic)",
              nickel_soluble_compounds: "Nickel (soluble compounds)",
              nickel_acetate: "Nickel acetate",
              nickel_carbonate: "Nickel carbonate",
              nickel_carbonyl: "Nickel carbonyl",
              nickel_compounds: "Nickel compounds",
              nickel_hydroxide: "Nickel hydroxide",
              nickel_oxide: "Nickel oxide",
              nickelrefinerydustpyrometallurgprocess: "Nickel refinery dust from the pyrometallurgical process",
              nickel_subsulfide: "Nickel subsulfide",
              nickelocene: "Nickelocene",
              nicotine: "Nicotine",
              nifedipine: "Nifedipine",
              nimodipine: "Nimodipine",
              niridazole: "Niridazole",
              nitrapyrin: "Nitrapyrin",
              nitrilotriacetic_acid: "Nitrilotriacetic acid",
              nitrilot_acid_trisodium_salt_monohydrate: "Nitrilotriacetic acid, trisodium salt monohydrate",
              nitrobenzene: "Nitrobenzene",
              nitrofen_technical_grade: "Nitrofen (technical grade)",
              nitrofurantoin: "Nitrofurantoin",
              nitrofurazone: "Nitrofurazone",
              nitrogen_mustard_mechlorethamine: "Nitrogen mustard (Mechlorethamine)",
              nitromustardhydrochloridemechlorethamine: "Nitrogen mustard hydrochloride (Mechlorethamine hydrochloride)",
              nitrogen_mustard_n_oxide: "Nitrogen mustard N-oxide",
              nitrogen_mustard_n_oxide_hydrochloride: "Nitrogen mustard N-oxide hydrochloride",
              nitromethane: "Nitromethane",
              nitrous_oxide: "Nitrous oxide",
              norethisterone_norethindrone: "Norethisterone (Norethindrone)",
              norethis_norethindrone_ethinyl_estradiol: "Norethisterone (Norethindrone) /Ethinyl estradiol",
              norethisterone_norethindrone_mestranol: "Norethisterone (Norethindrone) /Mestranol",
              norethiste_acetate_norethindrone_acetate: "Norethisterone acetate (Norethindrone acetate)",
              norethynodrel: "Norethynodrel",
              norgestrel: "Norgestrel",
              o_p_ddt: "o,p'-DDT",
              o_aminoazotoluene: "o-Aminoazotoluene",
              o_anisidine: "o-Anisidine",
              o_anisidine_hydrochloride: "o-Anisidine hydrochloride",
              o_dinitrobenzene: "o-Dinitrobenzene",
              o_nitroanisole: "o-Nitroanisole",
              o_nitrotoluene: "o-Nitrotoluene",
              o_phenylenediamine: "o-Phenylenediamine",
              o_phenylenediamine_and_its_salts: "o-Phenylenediamine and its salts",
              o_phenylenediamine_dihydochloride: "o-Phenylenediamine dihydochloride",
              "o_phenylenediamine dihydrochloride": "o-Phenylenediamine dihydrochloride",
              o_phenylphenate_sodium: "o-Phenylphenate, sodium",
              o_phenylphenol: "o-Phenylphenol",
              o_toluidine: "o-Toluidine",
              o_toluidine_hydrochloride: "o-Toluidine hydrochloride",
              ochratoxin_a: "Ochratoxin A",
              oil_orange_ss: "Oil Orange SS",
              oral_contraceptives_combined: "Oral contraceptives, combined",
              oral_contraceptives_sequential: "Oral contraceptives, sequential",
              oryzalin: "Oryzalin",
              oxadiazon: "Oxadiazon",
              oxazepam: "Oxazepam",
              oxydemeton_methyl: "Oxydemeton methyl",
              oxymetholone: "Oxymetholone",
              oxytetracycline_internal_use: "Oxytetracycline (internal use)",
              oxytetracycli_hydrochloride_internal_use: "Oxytetracycline hydrochloride (internal use)",
              oxythioquinox_chinomethionat: "Oxythioquinox (Chinomethionat)",
              p_p_ddt: "p,p'-DDT",
              p_a_a_a_tetrachlorotoluene: "p-a,a,a-Tetrachlorotoluene",
              p_aminoazobenzene: "p-Aminoazobenzene",
              p_chloro_o_toluidine: "p-Chloro-o-toluidine",
              p_chloro_o_toluidine_hydrochloride: "p-Chloro-o-toluidine, hydrochloride",
              p_chloro_o_toluidine_strong_acid_salts: "p-Chloro-o-toluidine, strong acid salts of",
              p_chloro_alpha_alpha_alpha_trifluorotolu: "p-chloro-α,α,α-trifluorotoluene (para-Chlorobenzotrifluoride, PCBTF)",
              p_chloroaniline: "p-Chloroaniline",
              p_chloroaniline_hydrochloride: "p-Chloroaniline hydrochloride",
              p_cresidine: "p-Cresidine",
              p_dichlorobenzene: "p-Dichlorobenzene",
              p_dinitrobenzene: "p-Dinitrobenzene",
              p_nitrosodiphenylamine: "p-Nitrosodiphenylamine",
              paclitaxel: "Paclitaxel",
              palygorskite_fibers_morthn_5µm_length: "Palygorskite fibers (> 5µm in length)",
              panfuran_s: "Panfuran S",
              para_nitroanisole: "para-Nitroanisole",
              paramethadione: "Paramethadione",
              parathion: "Parathion",
              penicillamine: "Penicillamine",
              pent_ether_mixture_de_71_technical_grade: "pentabromodiphenyl ether mixture [DE-71 (technical grade)]",
              pentachlorophenol: "Pentachlorophenol",
              pentachlorophenolandbyproductofsynthesis: "Pentachlorophenol and by-products of its synthesis (complex mixture)",
              pentobarbital_sodium: "Pentobarbital sodium",
              pentosan_polysulfate_sodium: "Pentosan polysulfate sodium",
              pentostatin: "Pentostatin",
              perfluorononanoicacid_pfna_salts: "Perfluorononanoic acid (PFNA) and its salts",
              perfluorooctane_sulfonate_pfos: "Perfluorooctane sulfonate (PFOS)",
              "perfluorooctanesulfonicacid _pfos_salts": "Perfluorooctane sulfonic acid (PFOS) and its salts and transformation and degradation precursors",
              perfluorooctanoic_acid_pfoa: "Perfluorooctanoic acid (PFOA)",
              pertuzumab: "Pertuzumab",
              phenacemide: "Phenacemide",
              phenacetin: "Phenacetin",
              phenazopyridine: "Phenazopyridine",
              phenazopyridine_hydrochloride: "Phenazopyridine hydrochloride",
              phenesterin: "Phenesterin",
              phenobarbital: "Phenobarbital",
              phenolphthalein: "Phenolphthalein",
              phenoxybenzamine: "Phenoxybenzamine",
              phenoxybenzamine_hydrochloride: "Phenoxybenzamine hydrochloride",
              phenprocoumon: "Phenprocoumon",
              phenyl_glycidyl_ether: "Phenyl glycidyl ether",
              phenylhydrazine: "Phenylhydrazine",
              phenylhydrazine_and_its_salts: "Phenylhydrazine and its salts",
              phenylhydrazine_hydrochloride: "Phenylhydrazine hydrochloride",
              phenylphosphine: "Phenylphosphine",
              phi_p_2_amino_1_methyl_6_phen_4_5_b_pyri: "PhiP(2-Amino-1-methyl-6-phenylimidazol[4,5-b]pyridine)",
              pimozide: "Pimozide",
              pioglitazone: "Pioglitazone",
              pipobroman: "Pipobroman",
              pirimicarb: "Pirimicarb",
              plicamycin: "Plicamycin",
              polybrominated_biphenyls: "Polybrominated biphenyls",
              polychlorinated_biphenyls: "Polychlorinated biphenyls",
              polychlorinatedbiphenyls60ormoreperent: "Polychlorinated biphenyls (containing 60 or more percent chlorine by molecular weight)",
              polychlorinated_dibenzo_p_dioxins: "Polychlorinated dibenzo-p-dioxins",
              polychlorinated_dibenzofurans: "Polychlorinated dibenzofurans",
              polygeenan: "Polygeenan",
              ponceau_3_r: "Ponceau 3R",
              ponceau_mx: "Ponceau MX",
              potassium_bromate: "Potassium bromate",
              potassium_cyanide: "Potassium cyanide",
              potassium_cyanidef: "Potassium cyanidef",
              potassium_dimethyldithiocarbamate: "Potassium dimethyldithiocarbamate",
              pravastatin_sodium: "Pravastatin sodium",
              prednisolone_sodium_phosphate: "Prednisolone sodium phosphate",
              primidone: "Primidone",
              procarbazine: "Procarbazine",
              procarbazine_hydrochloride: "Procarbazine hydrochloride",
              procymidone: "Procymidone",
              progesterone: "Progesterone",
              pronamide: "Pronamide",
              propachlor: "Propachlor",
              propargite: "Propargite",
              propazine: "Propazine",
              propoxur: "Propoxur",
              propylene_glycol_mono_t_butyl_ether: "Propylene glycol mono-t-butyl ether",
              propylene_oxide: "Propylene oxide",
              propylthiouracil: "Propylthiouracil",
              pulegone: "Pulegone",
              pymetrozine: "Pymetrozine",
              pyridine: "Pyridine",
              pyrimethamine: "Pyrimethamine",
              quazepam: "Quazepam",
              quinoline_and_its_strong_acid_salts: "Quinoline and its strong acid salts",
              quizalofop_ethyl: "Quizalofop-ethyl",
              radionuclides: "Radionuclides",
              reserpine: "Reserpine",
              residual_heavy_fuel_oils: "Residual (heavy) fuel oils",
              resmethrin: "Resmethrin",
              retinol_retinyl_esters_when_in_daily_dos: "Retinol/retinyl esters, when in daily dosages in excess of 10,000 IU, or 3,000 retinol equivalents.",
              ribavirin: "Ribavirin",
              riddelliine: "Riddelliine",
              rifampin: "Rifampin",
              s_s_s_tributyl_phosphorotri_tribufos_def: "S,S,S-Tributyl phosphorotrithioate (Tribufos, DEF)",
              safrole: "Safrole",
              salted_fish_chinese_style: "Salted fish, Chinese-style",
              secobarbital_sodium: "Secobarbital sodium",
              sedaxane: "Sedaxane",
              selenium_sulfide: "Selenium sulfide",
              sermorelin_acetate: "Sermorelin acetate",
              shale_oils: "Shale-oils",
              silica_crystalline_airborne_particles_of: "Silica, crystalline (airborne particles of respirable size)",
              silicon_carbide_whiskers: "Silicon carbide whiskers",
              simazine: "Simazine",
              sodium_cyanide: "Sodium cyanide",
              sodium_cyanidef: "Sodium cyanidef",
              sodium_dimethyldithiocarbamate: "Sodium dimethyldithiocarbamate",
              sodium_fluoroacetate: "Sodium fluoroacetate",
              soots_tars_and_mineral_oils_untreated_an: "Soots, tars, and mineral oils (untreated and mildly treated oils and used engine oils)",
              spirodiclofen: "Spirodiclofen",
              spironolactone: "Spironolactone",
              stanozolol: "Stanozolol",
              sterigmatocystin: "Sterigmatocystin",
              streptomycin_sulfate: "Streptomycin sulfate",
              streptozocin_streptozotocin: "Streptozocin (streptozotocin)",
              streptozotocin_streptozocin: "Streptozotocin (streptozocin)",
              strong_inorganic_acid_mists_containing_s: "Strong inorganic acid mists containing sulfuric acid",
              styrene: "Styrene",
              styrene_oxide: "Styrene oxide",
              sulfallate: "Sulfallate",
              sulfasalazine_salicylazosulfapyridine: "Sulfasalazine (Salicylazosulfapyridine)",
              sulfur_dioxidee: "Sulfur dioxidee",
              sulindac: "Sulindac",
              talc_containing_asbestiform_fibers: "Talc containing asbestiform fibers",
              tamoxifen_and_its_salts: "Tamoxifen and its salts",
              tamoxifen_citrate: "Tamoxifen citrate",
              temazepam: "Temazepam",
              teniposide: "Teniposide",
              terbacil: "Terbacil",
              teriparatide: "Teriparatide",
              terrazole: "Terrazole",
              testosterone_and_its_esters: "Testosterone and its esters",
              testosterone_cypionate: "Testosterone cypionate",
              testosterone_enanthate: "Testosterone enanthate",
              tetrabromobisphenol_a: "Tetrabromobisphenol A",
              tetrachloroethylene_perchloroethylene: "Tetrachloroethylene (Perchloroethylene)",
              tetrachlorvinphos: "Tetrachlorvinphos",
              tetracycline_internal_use: "Tetracycline (internal use)",
              tetracycline_hydrochloride_internal_use: "Tetracycline hydrochloride (internal use)",
              tetracyclines_internal_use: "Tetracyclines (internal use)",
              tetrafluoroethylene: "Tetrafluoroethylene",
              tetrahydrofuran: "Tetrahydrofuran",
              tetranitromethane: "Tetranitromethane",
              thalidomide: "Thalidomide",
              thioacetamide: "Thioacetamide",
              thiodicarb: "Thiodicarb",
              thioguanine: "Thioguanine",
              thiophanate_methyl: "Thiophanate methyl",
              thiouracil: "Thiouracil",
              thiourea: "Thiourea",
              thorium_dioxide: "Thorium dioxide",
              titanium_dioxide_airborne_unbound_partic: "Titanium dioxide (airborne, unbound particles of respirable size)",
              tobacco_smoke: "Tobacco smoke",
              tobacco_smoke_primary: "Tobacco smoke (primary)",
              tobacco_oral_use_of_smokeless_products: "Tobacco, oral use of smokeless products",
              tobramycin_sulfate: "Tobramycin sulfate",
              toluene: "Toluene",
              toluene_diisocyanate: "Toluene diisocyanate",
              topiramate: "Topiramate",
              toxaphene_polychlorinated_camphenes: "Toxaphene (Polychlorinated camphenes)",
              toxins_derived_from_fusarium_moniliforme: "Toxins derived from Fusarium moniliforme (Fusarium verticillioides)",
              trans_2_dimethylamino_methylimino_5_2_5_: "trans-2-[(Dimethylamino)methylimino]-5-[2-(5-nitro-2-furyl)vinyl]-1,3,4-oxadiazole",
              treosulfan: "Treosulfan",
              triadimefon: "Triadimefon",
              triamterene: "Triamterene",
              triazolam: "Triazolam",
              tributyltin_methacrylate: "Tributyltin methacrylate",
              trichlormethine_trimustine_hydrochloride: "Trichlormethine (Trimustine hydrochloride)",
              trichloroacetic_acid: "Trichloroacetic acid",
              trichloroethylene: "Trichloroethylene",
              trientine_hydrochloride: "Trientine hydrochloride",
              triforine: "Triforine",
              trilostane: "Trilostane",
              trimethadione: "Trimethadione",
              trimethyl_phosphate: "Trimethyl phosphate",
              trimethylolpropane_triacrylate_technical: "Trimethylolpropane triacrylate, technical grade",
              trimetrexate_glucuronate: "Trimetrexate glucuronate",
              trim_vx: "TRIM® VX",
              triphenyltin_hydroxide: "Triphenyltin hydroxide",
              tris_1_3_dichloro_2_propyl_phospha_tdcpp: "Tris(1,3-dichloro-2-propyl) phosphate (TDCPP)",
              tris_1_aziridinyl_phosp_sulfide_thiotepa: "Tris(1-aziridinyl)phosphine sulfide (Thiotepa)",
              tris_2_3_dibromopropyl_phosphate: "Tris(2,3-dibromopropyl)phosphate",
              tris_2_chloroethyl_phosphate: "Tris(2-chloroethyl) phosphate",
              tris_aziridinyl_p_benzoquinone_triaziquo: "Tris(aziridinyl)-p-benzoquinone (Triaziquone)",
              trp_p_1_tryptophan_p_1: "Trp-P-1 (Tryptophan-P-1)",
              trp_p_2_tryptophan_p_2: "Trp-P-2 (Tryptophan-P-2)",
              trypan_blue_commercial_grade: "Trypan blue (commercial grade)",
              unleaded_gasoline_wholly_vaporized: "Unleaded gasoline (wholly vaporized)",
              uracil_mustard: "Uracil mustard",
              urethane_ethyl_carbamate: "Urethane (Ethyl carbamate)",
              urofollitropin: "Urofollitropin",
              valproate_valproic_acid: "Valproate (Valproic acid)",
              vanadiumpentoxide_orthorhcrystallineform: "Vanadium pentoxide (orthorhombic crystalline form)",
              vinblastine_sulfate: "Vinblastine sulfate",
              vinclozolin: "Vinclozolin",
              vincristine_sulfate: "Vincristine sulfate",
              vinyl_bromide: "Vinyl bromide",
              vinyl_chloride: "Vinyl chloride",
              vinyl_cyclohe_dioxide_4_vinyl_1_cycl_die: "Vinyl cyclohexene dioxide (4-Vinyl-1-cyclohexene diepoxide)",
              vinyl_fluoride: "Vinyl fluoride",
              vinyl_trichloride_1_1_2_trichloroethane: "Vinyl trichloride (1,1,2-Trichloroethane)",
              vinylidenechloride: `Vinylidene chloride \r\r
(1,1-Dichloroethylene)`,
              vinylidene_chloride_1_1_dichloroethylene: "Vinylidene chloride (1,1-Dichloroethylene)",
              vismodegib: "Vismodegib",
              warfarin: "Warfarin",
              wood_dust: "Wood dust",
              zalcitabine: "Zalcitabine",
              zidovudine_azt: "Zidovudine (AZT)",
              zileuton: "Zileuton",
              alpha_methyl_styrene_alpha_methylstyrene: "α-Methyl styrene (alpha-Methylstyrene)"
          },
          fieldType: "string"
      }),
      i({
          name: "california_proposition_65.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance",
          fieldType: "string"
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.registration_status",
          required: !0,
          maxItems: 1,
          options: ["fcc_supplier_declaration_of_conformity", "has_fcc_id", "fcc_incidental_radiator", "not_capable_emitting_rf_energy"],
          optionLabels: {
              fcc_supplier_declaration_of_conformity: "Product has a Supplier's Declaration of Conformity (SDoC) with the FCC Rules",
              has_fcc_id: "Product has an FCC ID",
              fcc_incidental_radiator: "Product is an incidental radiator as defined by the FCC. It is not designed to intentionally use, generate or emit RF energy over 9 kHz. It does not require FCC RF equipment authorization",
              not_capable_emitting_rf_energy: "Product not capable of emitting radio frequency energy"
          },
          fieldType: "string"
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.identification_number",
          maxItems: 1,
          maxLength: 100,
          fieldType: "string"
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.point_of_contact_name",
          maxItems: 1,
          maxLength: 100,
          fieldType: "string"
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.point_of_contact_address",
          maxItems: 1,
          maxLength: 2500,
          fieldType: "string"
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.point_of_contact_email",
          maxItems: 1,
          maxLength: 300,
          fieldType: "string"
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.point_of_contact_phone_number",
          maxItems: 1,
          maxLength: 100,
          fieldType: "string"
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "regulatory_compliance_certification",
          fieldType: "string"
      }),
      i({
          name: "regulatory_compliance_certification.0",
          required: !0,
          maxItems: 5,
          fieldType: "string"
      }),
      i({
          name: "regulatory_compliance_certification.0.regulation_type",
          required: !0,
          maxItems: 5,
          options: ["carb_eo", "cdpr_pest_id", "energy_star_unique_id", "certificate_of_conformity", "fda_510_k", "intertek_certificate_no", "national_organic_program_id", "tuv_certificate_no", "ul_cetrification_no", "wasda_pest_id"],
          optionLabels: {
              carb_eo: "CARB EO",
              cdpr_pest_id: "CDPR Pest Identification",
              energy_star_unique_id: "ENERGY STAR Unique ID",
              certificate_of_conformity: "EPA Certificate of Conformity (CoC)",
              fda_510_k: "FDA 510(k) Number",
              intertek_certificate_no: "Intertek Certificate Number",
              national_organic_program_id: "National Organic Program ID",
              tuv_certificate_no: "TUV Certificate Number",
              ul_cetrification_no: "UL Certificate Number",
              wasda_pest_id: "WASDA Pest Identification"
          },
          fieldType: "string"
      }),
      i({
          name: "regulatory_compliance_certification.0.value",
          required: !0,
          maxItems: 5,
          minLength: 1,
          maxLength: 135,
          fieldType: "string"
      }),
      i({
          name: "regulatory_compliance_certification.0.marketplace_id",
          maxItems: 5,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "dsa_responsible_party_address",
          fieldType: "string"
      }),
      i({
          name: "dsa_responsible_party_address.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "dsa_responsible_party_address.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 1e3,
          fieldType: "string"
      }),
      i({
          name: "dsa_responsible_party_address.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "compliance_media",
          fieldType: "string"
      }),
      i({
          name: "compliance_media.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "compliance_media.0.content_type",
          required: !0,
          maxItems: 1,
          options: ["application_guide", "certificate_of_analysis", "certificate_of_compliance", "compatibility_guide", "emergency_use_authorization", "emergency_use_authorization_amendment", "installation_manual", "instructions_for_use", "patient_fact_sheet", "provider_fact_sheet", "safety_data_sheet", "safety_information", "specification_sheet", "troubleshooting_guide", "user_guide", "user_manual", "warranty"],
          optionLabels: {
              application_guide: "Application Guide",
              certificate_of_analysis: "Certificate of Analysis",
              certificate_of_compliance: "Certificate of Compliance",
              compatibility_guide: "Compatibility Guide",
              emergency_use_authorization: "Emergency Use Authorization",
              emergency_use_authorization_amendment: "Emergency Use Authorization Amendment",
              installation_manual: "Installation Manual",
              instructions_for_use: "Instructions for Use",
              patient_fact_sheet: "Patient Fact Sheet",
              provider_fact_sheet: "Provider Fact Sheet",
              safety_data_sheet: "Safety Data Sheet",
              safety_information: "Safety Information",
              specification_sheet: "Specification Sheet",
              troubleshooting_guide: "Troubleshooting Guide",
              user_guide: "User Guide",
              user_manual: "User Manual",
              warranty: "Warranty"
          },
          fieldType: "string"
      }),
      i({
          name: "compliance_media.0.content_language",
          required: !0,
          maxItems: 1,
          options: ["ar_AE", "ar_BH", "ar_DZ", "ar_EG", "ar_IQ", "ar_JO", "ar_KW", "ar_LB", "ar_LY", "ar_MA", "ar_OM", "ar_QA", "ar_SA", "ar_SD", "ar_SY", "ar_TN", "ar_YE", "az_AZ", "be_BY", "bg_BG", "bn_IN", "bs_BA", "ca_AD", "ca_ES", "cs_CZ", "da_DK", "de_AT", "de_CH", "de_DE", "de_LU", "el_CY", "el_GR", "en_AE", "en_AU", "en_CA", "en_GB", "en_IE", "en_IN", "en_MT", "en_NG", "en_NZ", "en_PH", "en_SG", "en_US", "en_ZA", "es_AR", "es_BO", "es_CL", "es_CO", "es_CR", "es_DO", "es_EC", "es_ES", "es_GT", "es_HN", "es_MX", "es_NI", "es_PA", "es_PE", "es_PR", "es_PY", "es_SV", "es_US", "es_UY", "es_VE", "et_EE", "fi_FI", "fil", "fil_PH", "fr_BE", "fr_CA", "fr_CH", "fr_FR", "fr_LU", "ga_IE", "gu_IN", "he_IL", "hi_IN", "hr_HR", "hu_HU", "id_ID", "in_ID", "is_IS", "it_CH", "it_IT", "iw_IL", "ja_JP", "ka_GE", "kn_IN", "ko_KR", "lt_LT", "lv_LV", "mk_MK", "ml_IN", "mr_IN", "ms_MY", "mt_MT", "nb_NO", "nl_BE", "nl_NL", "no_NO", "pl_PL", "pt_BR", "pt_PT", "ro_RO", "ru_RU", "sk_SK", "sl_SI", "sq_AL", "sr_BA", "sr_CS", "sr_ME", "sr_RS", "sv_SE", "ta_IN", "te_IN", "th_TH", "tr_TR", "uk_UA", "vi_VN", "zh_CN", "zh_HK", "zh_SG", "zh_TW"],
          optionLabels: {
              ar_AE: "ar_AE",
              ar_BH: "ar_BH",
              ar_DZ: "ar_DZ",
              ar_EG: "ar_EG",
              ar_IQ: "ar_IQ",
              ar_JO: "ar_JO",
              ar_KW: "ar_KW",
              ar_LB: "ar_LB",
              ar_LY: "ar_LY",
              ar_MA: "ar_MA",
              ar_OM: "ar_OM",
              ar_QA: "ar_QA",
              ar_SA: "ar_SA",
              ar_SD: "ar_SD",
              ar_SY: "ar_SY",
              ar_TN: "ar_TN",
              ar_YE: "ar_YE",
              az_AZ: "az_AZ",
              be_BY: "be_BY",
              bg_BG: "bg_BG",
              bn_IN: "bn_IN",
              bs_BA: "bs_BA",
              ca_AD: "ca_AD",
              ca_ES: "ca_ES",
              cs_CZ: "cs_CZ",
              da_DK: "da_DK",
              de_AT: "de_AT",
              de_CH: "de_CH",
              de_DE: "de_DE",
              de_LU: "de_LU",
              el_CY: "el_CY",
              el_GR: "el_GR",
              en_AE: "en_AE",
              en_AU: "en_AU",
              en_CA: "en_CA",
              en_GB: "en_GB",
              en_IE: "en_IE",
              en_IN: "en_IN",
              en_MT: "en_MT",
              en_NG: "en_NG",
              en_NZ: "en_NZ",
              en_PH: "en_PH",
              en_SG: "en_SG",
              en_US: "en_US",
              en_ZA: "en_ZA",
              es_AR: "es_AR",
              es_BO: "es_BO",
              es_CL: "es_CL",
              es_CO: "es_CO",
              es_CR: "es_CR",
              es_DO: "es_DO",
              es_EC: "es_EC",
              es_ES: "es_ES",
              es_GT: "es_GT",
              es_HN: "es_HN",
              es_MX: "es_MX",
              es_NI: "es_NI",
              es_PA: "es_PA",
              es_PE: "es_PE",
              es_PR: "es_PR",
              es_PY: "es_PY",
              es_SV: "es_SV",
              es_US: "es_US",
              es_UY: "es_UY",
              es_VE: "es_VE",
              et_EE: "et_EE",
              fi_FI: "fi_FI",
              fil: "fil",
              fil_PH: "fil_PH",
              fr_BE: "fr_BE",
              fr_CA: "fr_CA",
              fr_CH: "fr_CH",
              fr_FR: "fr_FR",
              fr_LU: "fr_LU",
              ga_IE: "ga_IE",
              gu_IN: "gu_IN",
              he_IL: "he_IL",
              hi_IN: "hi_IN",
              hr_HR: "hr_HR",
              hu_HU: "hu_HU",
              id_ID: "id_ID",
              in_ID: "in_ID",
              is_IS: "is_IS",
              it_CH: "it_CH",
              it_IT: "it_IT",
              iw_IL: "iw_IL",
              ja_JP: "ja_JP",
              ka_GE: "ka_GE",
              kn_IN: "kn_IN",
              ko_KR: "ko_KR",
              lt_LT: "lt_LT",
              lv_LV: "lv_LV",
              mk_MK: "mk_MK",
              ml_IN: "ml_IN",
              mr_IN: "mr_IN",
              ms_MY: "ms_MY",
              mt_MT: "mt_MT",
              nb_NO: "nb_NO",
              nl_BE: "nl_BE",
              nl_NL: "nl_NL",
              no_NO: "no_NO",
              pl_PL: "pl_PL",
              pt_BR: "pt_BR",
              pt_PT: "pt_PT",
              ro_RO: "ro_RO",
              ru_RU: "ru_RU",
              sk_SK: "sk_SK",
              sl_SI: "sl_SI",
              sq_AL: "sq_AL",
              sr_BA: "sr_BA",
              sr_CS: "sr_CS",
              sr_ME: "sr_ME",
              sr_RS: "sr_RS",
              sv_SE: "sv_SE",
              ta_IN: "ta_IN",
              te_IN: "te_IN",
              th_TH: "th_TH",
              tr_TR: "tr_TR",
              uk_UA: "uk_UA",
              vi_VN: "vi_VN",
              zh_CN: "zh_CN",
              zh_HK: "zh_HK",
              zh_SG: "zh_SG",
              zh_TW: "zh_TW"
          },
          fieldType: "string"
      }),
      i({
          name: "compliance_media.0.source_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "compliance_media.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "gpsr_safety_attestation",
          fieldType: "string"
      }),
      i({
          name: "gpsr_safety_attestation.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "gpsr_safety_attestation.0.value",
          required: !0,
          maxItems: 1,
          options: [!1, !0],
          optionLabels: {
              false: "No",
              true: "Yes"
          },
          fieldType: "boolean"
      }),
      i({
          name: "gpsr_safety_attestation.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "gpsr_manufacturer_reference",
          fieldType: "string"
      }),
      i({
          name: "gpsr_manufacturer_reference.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "gpsr_manufacturer_reference.0.gpsr_manufacturer_email_address",
          maxItems: 1,
          maxLength: 100,
          fieldType: "string"
      }),
      i({
          name: "gpsr_manufacturer_reference.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "ships_globally",
          fieldType: "string"
      }),
      i({
          name: "ships_globally.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "ships_globally.0.value",
          required: !0,
          maxItems: 1,
          options: [!1, !0],
          optionLabels: {
              false: "No",
              true: "Yes"
          },
          fieldType: "boolean"
      }),
      i({
          name: "ships_globally.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "ghs_chemical_h_code",
          fieldType: "string"
      }),
      i({
          name: "ghs_chemical_h_code.0",
          required: !0,
          maxItems: 100,
          fieldType: "string"
      }),
      i({
          name: "ghs_chemical_h_code.0.value",
          required: !0,
          maxItems: 100,
          options: ["EUH014", "EUH018", "EUH019", "EUH029", "EUH031", "EUH032", "EUH044", "EUH066", "EUH070", "EUH071", "EUH201", "EUH201A", "EUH202", "EUH203", "EUH204", "EUH205", "EUH206", "EUH207", "EUH208", "EUH209", "EUH209A", "EUH210", "EUH211", "EUH212", "EUH380", "EUH381", "EUH401", "EUH430", "EUH431", "EUH440", "EUH441", "EUH450", "EUH451", "H200", "H201", "H202", "H203", "H204", "H205", "H220", "H221", "H222", "H223", "H224", "H225", "H226", "H228", "H229", "H230", "H231", "H240", "H241", "H242", "H250", "H251", "H252", "H260", "H261", "H270", "H271", "H272", "H280", "H281", "H290", "H300", "H301", "H302", "H304", "H310", "H311", "H312", "H314", "H315", "H317", "H318", "H319", "H330", "H331", "H332", "H334", "H335", "H336", "H340", "H341", "H350", "H350I", "H351", "H360", "H361", "H362", "H370", "H371", "H372", "H373", "H400", "H410", "H411", "H412", "H413", "H420"],
          optionLabels: {
              EUH014: "EUH014",
              EUH018: "EUH018",
              EUH019: "EUH019",
              EUH029: "EUH029",
              EUH031: "EUH031",
              EUH032: "EUH032",
              EUH044: "EUH044",
              EUH066: "EUH066",
              EUH070: "EUH070",
              EUH071: "EUH071",
              EUH201: "EUH201",
              EUH201A: "EUH201A",
              EUH202: "EUH202",
              EUH203: "EUH203",
              EUH204: "EUH204",
              EUH205: "EUH205",
              EUH206: "EUH206",
              EUH207: "EUH207",
              EUH208: "EUH208",
              EUH209: "EUH209",
              EUH209A: "EUH209A",
              EUH210: "EUH210",
              EUH211: "EUH211",
              EUH212: "EUH212",
              EUH380: "EUH380",
              EUH381: "EUH381",
              EUH401: "EUH401",
              EUH430: "EUH430",
              EUH431: "EUH431",
              EUH440: "EUH440",
              EUH441: "EUH441",
              EUH450: "EUH450",
              EUH451: "EUH451",
              H200: "H200",
              H201: "H201",
              H202: "H202",
              H203: "H203",
              H204: "H204",
              H205: "H205",
              H220: "H220",
              H221: "H221",
              H222: "H222",
              H223: "H223",
              H224: "H224",
              H225: "H225",
              H226: "H226",
              H228: "H228",
              H229: "H229",
              H230: "H230",
              H231: "H231",
              H240: "H240",
              H241: "H241",
              H242: "H242",
              H250: "H250",
              H251: "H251",
              H252: "H252",
              H260: "H260",
              H261: "H261",
              H270: "H270",
              H271: "H271",
              H272: "H272",
              H280: "H280",
              H281: "H281",
              H290: "H290",
              H300: "H300",
              H301: "H301",
              H302: "H302",
              H304: "H304",
              H310: "H310",
              H311: "H311",
              H312: "H312",
              H314: "H314",
              H315: "H315",
              H317: "H317",
              H318: "H318",
              H319: "H319",
              H330: "H330",
              H331: "H331",
              H332: "H332",
              H334: "H334",
              H335: "H335",
              H336: "H336",
              H340: "H340",
              H341: "H341",
              H350: "H350",
              H350I: "H350I",
              H351: "H351",
              H360: "H360",
              H361: "H361",
              H362: "H362",
              H370: "H370",
              H371: "H371",
              H372: "H372",
              H373: "H373",
              H400: "H400",
              H410: "H410",
              H411: "H411",
              H412: "H412",
              H413: "H413",
              H420: "H420"
          },
          fieldType: "string"
      }),
      i({
          name: "ghs_chemical_h_code.0.marketplace_id",
          maxItems: 100,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "main_product_image_locator",
          fieldType: "string"
      }),
      i({
          name: "main_product_image_locator.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "main_product_image_locator.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "main_product_image_locator.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_1",
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_1.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_1.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_product_image_locator_1.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_2",
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_2.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_2.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_product_image_locator_2.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_3",
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_3.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_3.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_product_image_locator_3.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_4",
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_4.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_4.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_product_image_locator_4.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_5",
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_5.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_5.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_product_image_locator_5.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_6",
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_6.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_6.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_product_image_locator_6.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_7",
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_7.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_7.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_product_image_locator_7.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_8",
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_8.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "other_product_image_locator_8.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "other_product_image_locator_8.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "swatch_product_image_locator",
          fieldType: "string"
      }),
      i({
          name: "swatch_product_image_locator.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "swatch_product_image_locator.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "swatch_product_image_locator.0.media_location",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_dimensions_fraction",
          fieldType: "string"
      }),
      i({
          name: "item_dimensions_fraction.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_dimensions_fraction.0.height",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_dimensions_fraction.0.height.decimal_value",
          maxItems: 1,
          maxLength: 5e3,
          fieldType: "number"
      }),
      i({
          name: "item_dimensions_fraction.0.height.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_dimensions_fraction.0.length",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_dimensions_fraction.0.length.decimal_value",
          maxItems: 1,
          maxLength: 5e3,
          fieldType: "number"
      }),
      i({
          name: "item_dimensions_fraction.0.length.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_dimensions_fraction.0.width",
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_dimensions_fraction.0.width.decimal_value",
          maxItems: 1,
          maxLength: 5e3,
          fieldType: "number"
      }),
      i({
          name: "item_dimensions_fraction.0.width.unit",
          required: !0,
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["Angstrom", "Centimeters", "Decimeters", "Feet", "Hundredths-Inches", "Inches", "Kilometers", "Meters", "Micron", "Miles", "Millimeters", "Mils", "Nanometer", "Picometer", "Yards"],
          optionLabels: {
              Angstrom: "Angstrom",
              Centimeters: "Centimeters",
              Decimeters: "Decimeters",
              Feet: "Feet",
              "Hundredths-Inches": "Hundredths-Inches",
              Inches: "Inches",
              Kilometers: "Kilometers",
              Meters: "Meters",
              Micron: "Micron",
              Miles: "Miles",
              Millimeters: "Millimeters",
              Mils: "Mils",
              Nanometer: "Nanometer",
              Picometer: "Picometer",
              Yards: "Yards"
          }
      }),
      i({
          name: "item_dimensions_fraction.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_dimensions",
          fieldType: "string"
      }),
      i({
          name: "item_dimensions.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_dimensions.0.length",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_dimensions.0.length.value",
          required: !0,
          maxItems: 1,
          maximum: 1e9,
          fieldType: "number"
      }),
      i({
          name: "item_dimensions.0.length.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_dimensions.0.width",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_dimensions.0.width.value",
          required: !0,
          maxItems: 1,
          maximum: 1e9,
          fieldType: "number"
      }),
      i({
          name: "item_dimensions.0.width.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_dimensions.0.height",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_dimensions.0.height.value",
          required: !0,
          maxItems: 1,
          maximum: 1e9,
          fieldType: "number"
      }),
      i({
          name: "item_dimensions.0.height.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_dimensions.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_package_dimensions",
          fieldType: "string"
      }),
      i({
          name: "item_package_dimensions.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_package_dimensions.0.length",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_package_dimensions.0.length.value",
          required: !0,
          maxItems: 1,
          maximum: 1e9,
          fieldType: "number"
      }),
      i({
          name: "item_package_dimensions.0.length.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_package_dimensions.0.width",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_package_dimensions.0.width.value",
          required: !0,
          maxItems: 1,
          maximum: 1e9,
          fieldType: "number"
      }),
      i({
          name: "item_package_dimensions.0.width.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_package_dimensions.0.height",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_package_dimensions.0.height.value",
          required: !0,
          maxItems: 1,
          maximum: 1e9,
          fieldType: "number"
      }),
      i({
          name: "item_package_dimensions.0.height.unit",
          required: !0,
          maxItems: 1,
          options: ["angstrom", "centimeters", "decimeters", "feet", "hundredths_inches", "inches", "kilometers", "meters", "micrometer", "miles", "millimeters", "mils", "nanometer", "picometer", "yards"],
          optionLabels: {
              angstrom: "Angstrom",
              centimeters: "Centimeters",
              decimeters: "Decimeters",
              feet: "Feet",
              hundredths_inches: "Hundredths-Inches",
              inches: "Inches",
              kilometers: "Kilometers",
              meters: "Meters",
              micrometer: "Micron",
              miles: "Miles",
              millimeters: "Millimeters",
              mils: "Mils",
              nanometer: "Nanometer",
              picometer: "Picometer",
              yards: "Yards"
          },
          fieldType: "string"
      }),
      i({
          name: "item_package_dimensions.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_package_weight",
          fieldType: "string"
      }),
      i({
          name: "item_package_weight.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_package_weight.0.value",
          required: !0,
          maxItems: 1,
          exclusiveMinimum: 0,
          minimum: 0,
          maximum: 1e9,
          fieldType: "number"
      }),
      i({
          name: "item_package_weight.0.unit",
          required: !0,
          maxItems: 1,
          options: ["grams", "hundredths_pounds", "kilograms", "milligrams", "ounces", "pounds", "tons"],
          optionLabels: {
              grams: "Grams",
              hundredths_pounds: "Hundredths Pounds",
              kilograms: "Kilograms",
              milligrams: "Milligrams",
              ounces: "Ounces",
              pounds: "Pounds",
              tons: "Tons"
          },
          fieldType: "string"
      }),
      i({
          name: "item_package_weight.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "abpa_partslink_number",
          fieldType: "string"
      }),
      i({
          name: "abpa_partslink_number.0",
          required: !0,
          maxItems: 2,
          fieldType: "string"
      }),
      i({
          name: "abpa_partslink_number.0.value",
          required: !0,
          maxItems: 2,
          maxLength: 20531,
          fieldType: "string"
      }),
      i({
          name: "abpa_partslink_number.0.language_tag",
          required: !0,
          maxItems: 2,
          fieldType: "string",
          tipsOptions: ["en_US"],
          optionLabels: {
              en_US: "English (United States)"
          }
      }),
      i({
          name: "abpa_partslink_number.0.marketplace_id",
          maxItems: 2,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "item_display_weight",
          fieldType: "string"
      }),
      i({
          name: "item_display_weight.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "item_display_weight.0.value",
          required: !0,
          maxItems: 1,
          maxLength: 5e3,
          minimum: 0,
          fieldType: "number"
      }),
      i({
          name: "item_display_weight.0.unit",
          required: !0,
          maxItems: 1,
          options: ["grams", "hundredths_pounds", "kilograms", "milligrams", "ounces", "pounds", "tons"],
          optionLabels: {
              grams: "Grams",
              hundredths_pounds: "Hundredths Pounds",
              kilograms: "Kilograms",
              milligrams: "Milligrams",
              ounces: "Ounces",
              pounds: "Pounds",
              tons: "Tons"
          },
          fieldType: "string"
      }),
      i({
          name: "item_display_weight.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      i({
          name: "number_of_boxes",
          fieldType: "string"
      }),
      i({
          name: "number_of_boxes.0",
          required: !0,
          maxItems: 1,
          fieldType: "string"
      }),
      i({
          name: "number_of_boxes.0.value",
          required: !0,
          maxItems: 1,
          minimum: 1,
          maximum: 40,
          fieldType: "integer"
      }),
      i({
          name: "number_of_boxes.0.marketplace_id",
          maxItems: 1,
          fieldType: "string",
          tipsOptions: ["ATVPDKIKX0DER"],
          optionLabels: {
              ATVPDKIKX0DER: "Amazon.com"
          }
      }),
      (!(typeof e == "object" && e.merchant_suggested_asin && Array.isArray(e.merchant_suggested_asin) && e.merchant_suggested_asin.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) && typeof e == "object" && e.supplier_declared_has_product_identifier_exemption && Array.isArray(e.supplier_declared_has_product_identifier_exemption) && e.supplier_declared_has_product_identifier_exemption.some(a => typeof a == "object" && a.value && [!1].includes(a.value)) || !(typeof e == "object" && e.merchant_suggested_asin && Array.isArray(e.merchant_suggested_asin) && e.merchant_suggested_asin.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.supplier_declared_has_product_identifier_exemption && Array.isArray(e.supplier_declared_has_product_identifier_exemption) && e.supplier_declared_has_product_identifier_exemption.some(a => typeof a == "object" && a.value && [!1].includes(a.value)) || !(typeof e == "object" && e.merchant_suggested_asin && Array.isArray(e.merchant_suggested_asin) && e.merchant_suggested_asin.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.supplier_declared_has_product_identifier_exemption && Array.isArray(e.supplier_declared_has_product_identifier_exemption) && e.supplier_declared_has_product_identifier_exemption.every(a => typeof a == "object" && a.value)) || !(typeof e == "object" && e.merchant_suggested_asin && Array.isArray(e.merchant_suggested_asin) && e.merchant_suggested_asin.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && !(typeof e == "object" && e.supplier_declared_has_product_identifier_exemption && Array.isArray(e.supplier_declared_has_product_identifier_exemption) && e.supplier_declared_has_product_identifier_exemption.every(a => typeof a == "object" && a.value))) && i({
          name: "externally_assigned_product_identifier",
          required: !0
      }),
      (!(typeof e == "object" && e.externally_assigned_product_identifier && Array.isArray(e.externally_assigned_product_identifier) && e.externally_assigned_product_identifier.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) && typeof e == "object" && e.supplier_declared_has_product_identifier_exemption && Array.isArray(e.supplier_declared_has_product_identifier_exemption) && e.supplier_declared_has_product_identifier_exemption.some(a => typeof a == "object" && a.value && [!1].includes(a.value)) || !(typeof e == "object" && e.externally_assigned_product_identifier && Array.isArray(e.externally_assigned_product_identifier) && e.externally_assigned_product_identifier.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.supplier_declared_has_product_identifier_exemption && Array.isArray(e.supplier_declared_has_product_identifier_exemption) && e.supplier_declared_has_product_identifier_exemption.some(a => typeof a == "object" && a.value && [!1].includes(a.value)) || !(typeof e == "object" && e.externally_assigned_product_identifier && Array.isArray(e.externally_assigned_product_identifier) && e.externally_assigned_product_identifier.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.supplier_declared_has_product_identifier_exemption && Array.isArray(e.supplier_declared_has_product_identifier_exemption) && e.supplier_declared_has_product_identifier_exemption.every(a => typeof a == "object" && a.value)) || !(typeof e == "object" && e.externally_assigned_product_identifier && Array.isArray(e.externally_assigned_product_identifier) && e.externally_assigned_product_identifier.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && !(typeof e == "object" && e.supplier_declared_has_product_identifier_exemption && Array.isArray(e.supplier_declared_has_product_identifier_exemption) && e.supplier_declared_has_product_identifier_exemption.every(a => typeof a == "object" && a.value))) && i({
          name: "merchant_suggested_asin",
          required: !0
      }),
      (typeof e == "object" && e.package_level && Array.isArray(e.package_level) && e.package_level.some(a => typeof a == "object" && a.value && ["case", "pallet"].includes(a.value)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) || typeof e == "object" && e.package_level && Array.isArray(e.package_level) && e.package_level.some(a => typeof a == "object" && a.value && ["case", "pallet"].includes(a.value)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value)))) && i({
          name: "package_contains_sku",
          required: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["AGE_GENDER_CATEGORY"].includes(a.name)) && i({
          name: "age_gender_category",
          required: !0,
          variation: !0
      }),
      (!(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) || !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value)))) && (i({
          name: "included_components",
          required: !0
      }),
      i({
          name: "is_assembly_required",
          required: !0
      }),
      i({
          name: "manufacturer",
          required: !0
      }),
      i({
          name: "required_product_compliance_certificate",
          required: !0
      }),
      i({
          name: "warranty_description",
          required: !0
      })),
      !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && !(typeof e == "object" && e.skip_offer && Array.isArray(e.skip_offer) && e.skip_offer.some(a => typeof a == "object" && a.value && [!0].includes(a.value))) && i({
          name: "fulfillment_availability",
          required: !0
      }),
      typeof e == "object" && e.purchasable_offer && Array.isArray(e.purchasable_offer) && e.purchasable_offer.some(a => typeof a == "object" && a.quantity_discount_plan && Array.isArray(a.quantity_discount_plan) && a.quantity_discount_plan.some(t => typeof t == "object" && t.schedule && Array.isArray(t.schedule) && t.schedule.some(r => typeof r == "object" && r.discount_type && ["percent"].includes(r.discount_type)))) && (i({
          name: "purchasable_offer"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.schedule"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.schedule.levels"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.schedule.levels.value",
          maximum: 99
      })),
      (!(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.skip_offer && Array.isArray(e.skip_offer) && e.skip_offer.some(a => typeof a == "object" && a.value && [!0].includes(a.value))) || !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && !(typeof e == "object" && e.skip_offer && Array.isArray(e.skip_offer) && e.skip_offer.some(a => typeof a == "object" && a.value && [!0].includes(a.value)))) && i({
          name: "condition_type",
          required: !0
      }),
      (!(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.skip_offer && Array.isArray(e.skip_offer) && e.skip_offer.some(a => typeof a == "object" && a.value && [!0].includes(a.value))) || !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && !(typeof e == "object" && e.skip_offer && Array.isArray(e.skip_offer) && e.skip_offer.some(a => typeof a == "object" && a.value && [!0].includes(a.value)))) && i({
          name: "list_price",
          required: !0
      }),
      (typeof e == "object" && e.fulfillment_availability && Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.some(a => typeof a == "object" && a.fulfillment_channel_code && ["DEFAULT"].includes(a.fulfillment_channel_code)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) && !(typeof e == "object" && e.skip_offer && Array.isArray(e.skip_offer) && e.skip_offer.some(a => typeof a == "object" && a.value && [!0].includes(a.value))) || typeof e == "object" && e.fulfillment_availability && Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.some(a => typeof a == "object" && a.fulfillment_channel_code && ["DEFAULT"].includes(a.fulfillment_channel_code)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && !(typeof e == "object" && e.skip_offer && Array.isArray(e.skip_offer) && e.skip_offer.some(a => typeof a == "object" && a.value && [!0].includes(a.value)))) && i({
          name: "merchant_shipping_group",
          required: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["COLOR_NAME/STYLE_NAME/CONFIGURATION", "MODEL/STYLE_NAME", "STYLE_NAME/SIZE_NAME/CONFIGURATION", "SIZE_NAME/STYLE_NAME", "SIZE_NAME/STYLE_NAME/COLOR_NAME", "COLOR_NAME/STYLE_NAME", "STYLE_NAME/MATERIAL_TYPE", "STYLE_NAME/COLOR_NAME", "NUMBER_OF_ITEMS/STYLE_NAME", "MODEL/STYLE_NAME/PART_NUMBER", "SIZE_NAME/STYLE_NAME/PATTERN_NAME", "STYLE_NAME/PATTERN_NAME/COLOR_NAME", "MATERIAL_TYPE/STYLE_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "STYLE_NAME/CONFIGURATION", "STYLE_NAME/PATTERN_NAME/SIZE_NAME", "PATTERN_NAME/STYLE_NAME", "STYLE_NAME/COLOR_NAME/CONFIGURATION", "SIZE_NAME/STYLE_NAME/CONFIGURATION", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "STYLE_NAME/SIZE_NAME/COLOR_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME", "SIZE_NAME/STYLE_NAME/CUSTOMER_PACKAGE_TYPE", "STYLE_NAME/COLOR_NAME/SIZE_NAME", "STYLE_NAME/SIZE_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "STYLE_NAME/CUSTOMER_PACKAGE_TYPE", "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER", "PATTERN_NAME/STYLE_NAME/COLOR_NAME", "STYLE_NAME", "STYLE_NAME/PATTERN_NAME/CONFIGURATION", "ITEM_PACKAGE_QUANTITY/STYLE_NAME", "STYLE_NAME/PATTERN_NAME", "CONFIGURATION/STYLE_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME", "STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME", "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION"].includes(a.name)) && i({
          name: "style",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["SIZE_NAME/MATERIAL_TYPE", "STYLE_NAME/MATERIAL_TYPE", "MATERIAL_TYPE/ITEM_DISPLAY_WEIGHT", "MATERIAL_TYPE/COLOR_NAME", "MATERIAL_TYPE/STYLE_NAME", "MATERIAL_TYPE", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "MATERIAL_TYPE/SIZE_NAME", "COLOR_NAME/MATERIAL_TYPE"].includes(a.name)) && i({
          name: "material",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["FABRIC_TYPE/COLOR_NAME"].includes(a.name)) && i({
          name: "fabric_type",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["ITEM_PACKAGE_QUANTITY/SIZE_NAME", "COLOR_NAME/ITEM_PACKAGE_QUANTITY", "ITEM_PACKAGE_QUANTITY", "ITEM_PACKAGE_QUANTITY/STYLE_NAME", "ITEM_PACKAGE_QUANTITY/COLOR_NAME"].includes(a.name)) && i({
          name: "item_package_quantity",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["FIT_TYPE/SIZE_NAME/COLOR_NAME", "MODEL_NAME/COLOR_NAME", "COLOR_NAME/SIZE_NAME/PATTERN_NAME", "COLOR_NAME/STYLE_NAME/CONFIGURATION", "COLOR_NAME/PATTERN_NAME", "SIZE_NAME/STYLE_NAME/COLOR_NAME", "COLOR_NAME/STYLE_NAME", "COLOR", "AUTO_PART_POSITION/CONFIGURATION/COLOR_NAME", "MATERIAL_TYPE/COLOR_NAME", "STYLE_NAME/COLOR_NAME", "STYLE_NAME/PATTERN_NAME/COLOR_NAME", "COLOR_NAME/CUSTOMER_PACKAGE_TYPE", "COLOR_NAME/SIZE_NAME/STYLE_NAME", "SIZE/COLOR", "SIZE_NAME/COLOR_NAME/CONFIGURATION", "PATTERN_NAME/COLOR_NAME", "FABRIC_TYPE/COLOR_NAME", "STYLE_NAME/COLOR_NAME/CONFIGURATION", "SIZE_NAME/COLOR_NAME/PATTERN_NAME", "TEAM_NAME/SIZE_NAME/COLOR_NAME", "MODEL/COLOR_NAME", "COLOR_NAME/ITEM_PACKAGE_QUANTITY", "STYLE_NAME/SIZE_NAME/COLOR_NAME", "GRIT_TYPE/COLOR_NAME", "COLOR_NAME/CONFIGURATION", "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME", "SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS", "STYLE_NAME/COLOR_NAME/SIZE_NAME", "SIZE_NAME/COLOR_NAME", "COLOR_NAME/SIZE_NAME/CONFIGURATION", "COLOR_NAME/NUMBER_OF_ITEMS", "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "COLOR_NAME/MATERIAL_TYPE", "PATTERN_NAME/STYLE_NAME/COLOR_NAME", "COLOR_NAME", "CONFIGURATION/COLOR_NAME", "COLOR_NAME/SIZE_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME", "STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME", "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION", "ITEM_PACKAGE_QUANTITY/COLOR_NAME"].includes(a.name)) && i({
          name: "color",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["FIT_TYPE/SIZE_NAME/COLOR_NAME", "FLAVOR/SIZE", "COLOR_NAME/SIZE_NAME/PATTERN_NAME", "SIZE_NAME/MATERIAL_TYPE", "SIZE_NAME/PATTERN_NAME", "STYLE_NAME/SIZE_NAME/CONFIGURATION", "SIZE_NAME/STYLE_NAME", "SIZE_NAME/STYLE_NAME/COLOR_NAME", "SIZE_NAME/CUSTOMER_PACKAGE_TYPE", "SIZE", "TEAM_NAME/SIZE_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "SIZE/COLOR", "PATTERN_NAME/SIZE_NAME", "ITEM_SHAPE/SIZE_NAME", "SIZE_NAME/COLOR_NAME/CONFIGURATION", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "STYLE_NAME/PATTERN_NAME/SIZE_NAME", "MATERIAL_TYPE/SIZE_NAME", "SIZE_NAME/STYLE_NAME/CONFIGURATION", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "SIZE_NAME/COLOR_NAME/PATTERN_NAME", "TEAM_NAME/SIZE_NAME/COLOR_NAME", "ITEM_PACKAGE_QUANTITY/SIZE_NAME", "STYLE_NAME/SIZE_NAME/COLOR_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME", "SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS", "SIZE_NAME/STYLE_NAME/CUSTOMER_PACKAGE_TYPE", "STYLE_NAME/COLOR_NAME/SIZE_NAME", "SIZE_NAME/COLOR_NAME", "STYLE_NAME/SIZE_NAME", "COLOR_NAME/SIZE_NAME/CONFIGURATION", "SIZE_NAME/CONFIGURATION", "SIZE/PATTERN", "CONFIGURATION/SIZE_NAME", "SIZE_NAME/NUMBER_OF_ITEMS", "MODEL/SIZE_NAME", "GRIT_TYPE/SIZE_NAME", "SIZE_NAME/SCENT_NAME", "COLOR_NAME/SIZE_NAME", "SIZE_NAME", "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION"].includes(a.name)) && i({
          name: "size",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["ITEM_SHAPE", "ITEM_SHAPE/SIZE_NAME"].includes(a.name)) && i({
          name: "item_shape",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["FIT_TYPE/SIZE_NAME/COLOR_NAME"].includes(a.name)) && i({
          name: "fit_type",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["COLOR_NAME/STYLE_NAME/CONFIGURATION", "CONFIGURATION", "STYLE_NAME/SIZE_NAME/CONFIGURATION", "AUTO_PART_POSITION/CONFIGURATION/COLOR_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "SIZE_NAME/COLOR_NAME/CONFIGURATION", "STYLE_NAME/CONFIGURATION", "STYLE_NAME/COLOR_NAME/CONFIGURATION", "SIZE_NAME/STYLE_NAME/CONFIGURATION", "COLOR_NAME/CONFIGURATION", "COLOR_NAME/SIZE_NAME/CONFIGURATION", "SIZE_NAME/CONFIGURATION", "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "CONFIGURATION/SIZE_NAME", "STYLE_NAME/PATTERN_NAME/CONFIGURATION", "CONFIGURATION/COLOR_NAME", "CONFIGURATION/STYLE_NAME", "CONNECTIVITY_TECHNOLOGY/CONFIGURATION", "STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION"].includes(a.name)) && i({
          name: "configuration",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["AUTO_PART_POSITION/CONFIGURATION/COLOR_NAME"].includes(a.name)) && i({
          name: "auto_part_position",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER"].includes(a.name)) && i({
          name: "capacity",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["LENS_COLOR"].includes(a.name)) && (i({
          name: "lens",
          required: !0,
          variation: !0
      }),
      i({
          name: "lens.0",
          required: !0,
          variation: !0
      }),
      i({
          name: "lens.0.color",
          required: !0,
          variation: !0
      })),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["ITEM_DISPLAY_LENGTH", "ITEM_DISPLAY_WIDTH"].includes(a.name)) && i({
          name: "item_display_dimensions",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["FLAVOR/SIZE", "FLAVOR_NAME"].includes(a.name)) && i({
          name: "flavor",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["CONNECTIVITY_TECHNOLOGY/CONFIGURATION"].includes(a.name)) && i({
          name: "connectivity_technology",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["VOLUME_CAPACITY_NAME"].includes(a.name)) && i({
          name: "volume_capacity_name",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["SIZE_NAME/CUSTOMER_PACKAGE_TYPE", "COLOR_NAME/CUSTOMER_PACKAGE_TYPE", "CUSTOMER_PACKAGE_TYPE", "SIZE_NAME/STYLE_NAME/CUSTOMER_PACKAGE_TYPE", "STYLE_NAME/CUSTOMER_PACKAGE_TYPE"].includes(a.name)) && i({
          name: "customer_package_type",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["COLOR_NAME/SIZE_NAME/PATTERN_NAME", "SIZE_NAME/PATTERN_NAME", "COLOR_NAME/PATTERN_NAME", "PATTERN_NAME", "PATTERN", "SIZE_NAME/STYLE_NAME/PATTERN_NAME", "STYLE_NAME/PATTERN_NAME/COLOR_NAME", "SIZE_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "PATTERN_NAME/SIZE_NAME", "PATTERN_NAME/COLOR_NAME", "STYLE_NAME/PATTERN_NAME/SIZE_NAME", "PATTERN_NAME/STYLE_NAME", "SIZE_NAME/COLOR_NAME/PATTERN_NAME", "COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME/CONFIGURATION", "SIZE/PATTERN", "PATTERN_NAME/STYLE_NAME/COLOR_NAME", "STYLE_NAME/PATTERN_NAME/CONFIGURATION", "STYLE_NAME/PATTERN_NAME", "COLOR_NAME/STYLE_NAME/PATTERN_NAME"].includes(a.name)) && i({
          name: "pattern",
          required: !0,
          variation: !0
      }),
      (typeof e == "object" && e.fulfillment_availability && Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.some(a => typeof a == "object" && a.fulfillment_channel_code && ["AMAZON_NA"].includes(a.fulfillment_channel_code)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) || typeof e == "object" && e.fulfillment_availability && Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.some(a => typeof a == "object" && a.fulfillment_channel_code && ["AMAZON_NA"].includes(a.fulfillment_channel_code)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) || !(typeof e == "object" && e.fulfillment_availability && Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.every(a => typeof a == "object" && a.fulfillment_channel_code)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) || !(typeof e == "object" && e.fulfillment_availability && Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.every(a => typeof a == "object" && a.fulfillment_channel_code)) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value)))) && (i({
          name: "is_expiration_dated_product",
          required: !0
      }),
      i({
          name: "item_package_dimensions",
          required: !0
      }),
      i({
          name: "item_package_weight",
          required: !0
      }),
      i({
          name: "number_of_boxes",
          required: !0
      })),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["UNIT_COUNT"].includes(a.name)) && i({
          name: "unit_count",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["NASCAR", "nascar", "ناسكار"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["A. J. Allmendinger", "Alex Bowman", "Aric Almirola", "Austin Dillon", "Bobby Labonte", "Brad Keselowski", "Carl Edwards", "Casey Mears", "Chase Elliott", "Chris Buescher", "Clint Bowyer", "Dale Earnhardt", "Dale Earnhardt Jr.", "Daniel Suárez", "Darrell Wallace Jr.", "David Ragan", "Denny Hamlin", "Elliott Sadler", "Erik Jones", "Gray Gaulding", "Greg Biffle", "Jamie McMurray", "Jeff Burton", "Jeff Gordon", "Jimmie Johnson", "Joey Logano", "Juan Pablo Montoya", "Kasey Kahne", "Kevin Harvick", "Kurt Busch", "Kyle Busch", "Kyle Larson", "Mark Martin", "Martin Truex Jr.", "Matt DiBenedetto", "Matt Kenseth", "Michael McDowell", "Paul Menard", "Richard Petty", "Ricky Stenhouse Jr.", "Ryan Blaney", "Ryan Newman", "Tony Stewart", "Trevor Bayne", "Ty Dillon", "William Byron"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["eスポーツ", "E-Sports (sport elettronici)", "E-sport", "E-Sports", "ألعاب إلكترونية", "E-Sport", "e_sports", "Deportes electrónicos"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["E-Sports"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Pro Wrestling League", "Liga de lucha libre profesional", "インド/プロレスリーグ", "Liga Profissional de Luta Livre", "pro_wrestling_league", "Pro Wrestling Ligan", "دوري المصارعة للمحترفين"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Delhi Sultans", "Haryana Hammers", "MP Yodha", "Mumbai Maharathi", "NCR Punjab Royals", "UP Dangal"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Formel 1", "Formuła 1", "formula_1", "Fórmula 1", "Formula 1", "فورمولا 1", "Formule 1", "フォーミュラ1"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Alfa Romeo Racing", "Alpine", "Aston Martin", "BWT Racing Point", "Haas F1 Team", "Mclaren", "Mercedes-AMG Petronas", "Red Bull Racing", "Renault DP World", "Scuderia AlphaTauri", "Scuderia Ferrari", "Williams Racing"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["I-ligan", "I-League", "インド/Iリーグ", "Liga I", "i_league", "الدوري الهندي للمحترفين"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Aizawl FC", "Chennai City FC", "Churchill Brothers FC Goa", "Gokulam Kerala FC", "Indian Arrows", "Mohun Bagan", "NEROCA FC", "Punjab FC", "Quess East Bengal", "Real Kashmir FC", "Tiddim Road Athletic Union"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Japanischer Baseball", "Campionato di baseball giapponese", "Baseball japonais", "Béisbol japonés", "日本/セ・パリーグ・高校野球", "Japanese Baseball", "Japans honkbal", "japanese_baseball", "Japansk baseboll", "البيسبول الياباني", "Japoński baseball", "Beisebol japonês"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Chiba Lotte Marines", "Chunichi Dragons", "Fukuoka SoftBank Hawks", "Hanshin Tigers", "High School Baseball Team", "Hiroshima Toyo Carp", "Hokkaido Nippon-Ham Fighters", "Orix Buffaloes", "Saitama Seibu Lions", "Tohoku Rakuten Golden Eagles", "Tokyo Yakult Swallows", "Yokohama DeNA BayStars", "Yomiuri Giants"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["イギリス/サッカー", "English Football", "Engels voetbal", "Football britannique", "كرة القدم الإنجليزية", "Angielska piłka nożna", "english_football", "English Soccer", "British Football", "Calcio inglese", "Futebol inglês", "Engelsk fotboll", "Englischer Fußball", "Fútbol inglés"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["AFC Bournemouth", "Arsenal", "Aston Villa", "Birmingham City", "Blackburn Rovers", "Bolton Wanderers", "Brentford", "Brighton & Hove Albion", "Bristol City", "Burnley", "Cardiff City", "Charlton Athletic", "Chelsea", "Coventry City", "Crystal Palace", "Derby County", "Everton", "Fulham", "Huddersfield Town", "Hull City", "Ipswich Town", "Leeds United", "Leicester City", "Liverpool", "Luton Town", "Manchester City", "Manchester United", "Middlesbrough", "Millwall", "Newcastle United", "Norwich City", "Nottingham Forest", "Plymouth Argyle", "Preston North End", "QPR", "Reading", "Rotherham United", "Sheffield United", "Sheffield Wednesday", "Southampton", "Stoke City", "Sunderland", "Swansea City", "Tottenham Hotspur", "Watford", "West Bromwich Albion", "West Ham United", "Wigan", "Wolverhampton Wanderers"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["الاتحاد الدولي للمصارعة", "WUSA", "wusa"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["WUSA"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Première Ligue canadienne", "Kanadensisk premiärliga", "Canadian Premier League", "Liga Premier Canadense", "canadian_premier_league", "Premiere League canadiense", "Liga Premier canadiense", "Premier League Kanada", "Canadian Premiere League", "الدوري الكندي الممتاز", "カナダ/プレミアリーグ", "Kanadyjska Premiere League"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Atlético Ottawa", "Cavalry FC", "FC Edmonton", "Forge FC", "HFX Wanderers FC", "Pacific FC", "Valour FC", "Vancouver FC", "York United FC"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Fútbol español", "Spanish Football", "كرة القدم الاسبانية", "Calcio spagnolo", "Futebol espanhol", "Football espagnol", "spanish_football", "Hiszpańska piłka nożna", "Spanish Soccer", "Spanischer Fußball", "Spaans voetbal", "Spansk fotboll", "スペイン/サッカー"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["AD Alcorcón", "Alaves", "Albacete BP", "Athletic Bilbao", "Atletico Madrid", "Barcelona", "Betis Sevilla", "CD Lugo", "CD Mirandés", "CD Numancia", "CD Tenerife", "Celta Vigo", "CF Fuenlabrada", "Cádiz CF", "Deportivo La Coruna", "Elche CF", "Espanyol", "Extremadura UD", "FC Sevilla", "Getafe CF", "Getafe FC", "Girona FC", "Granada CF", "Leganés", "Levante UD", "Malaga", "Mallorca", "Osasuna", "Racing Santander", "Rayo Vallecano", "Real Madrid", "Real Oviedo", "Real Sociedad", "Real Zaragoza", "Recreativo Huelva", "SD Eibar", "SD Huesca", "SD Ponferradina", "Sporting Gijón", "UD Almería", "UD Las Palmas", "Valencia", "Valladolid", "Villareal"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Canadian Football League", "Liga Canadense de Futebol", "Kanadyjska Liga Piłkarska", "canadian_football_league", "Ligue canadienne de football", "Kanadensisk fotbollsliga", "الدوري الكندي لكرة القدم", "Kanadische Fußballliga", "カナディアン・フットボール・リーグ", "Liga de fútbol canadiense"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["BC Lions", "Calgary Stampeders", "Edmonton Football Team", "Hamilton Tiger-Cats", "Montreal Alouettes", "Ottawa Redblacks", "Saskatchewan Roughriders", "Toronto Argonauts", "Winnipeg Blue Bombers"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["دوري كرة السلة الأميركي للمحترفين", "nba", "NBA"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Buffalo Braves", "Charlotte Hornets", "Chicago Bulls", "Chicago Stags", "Chicago Zephyrs", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Fort Wayne Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Kansas City Kings", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Milwaukee Hawks", "Minnesota Timberwolves", "New Jersey Nets", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Rochester Royals", "Sacramento Kings", "San Antonio Spurs", "San Diego Clippers", "San Diego Rockets", "San Francisco Warriors", "Seattle SuperSonics", "St. Louis Bombers", "St. Louis Hawks", "Syracuse Nationals", "Toronto Raptors", "Utah Jazz", "Washington Wizards"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Minor League Honkbal", "minor_league_baseball", "Béisbol de ligas menores", "Minor League Baseball", "Liga Menor de Beisebol", "Ligue mineure de baseball", "アメリカ/マイナーリーグ", "دوري البيسبول المصغر"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Aberdeen IronBirds", "Akron Aeros", "Albuquerque Isotopes", "Altoona Curve", "Arkansas Travelers", "Asheville Tourists", "Auburn Doubledays", "Augusta GreenJackets", "Bakersfield Blaze", "Batavia Muckdogs", "Beloit Snappers", "Billings Mustangs", "Binghamton Mets", "Birmingham Barons", "Bluefield Orioles", "Boise Hawks", "Bowie Baysox", "Bowling Green Hot Rods", "Bradenton Marauders", "Brevard County Manatees", "Bristol White Sox", "Brooklyn Cyclones", "Buffalo Bisons", "Burlington Bees", "Burlington Royals", "Carolina Mudcats", "Casper Ghosts", "Cedar Rapids Kernels", "Charleston RiverDogs", "Charlotte Knights", "Charlotte Stone Crabs", "Chattanooga Lookouts", "Clearwater Threshers", "Clinton LumberKings", "Colorado Springs Sky Sox", "Columbus Clippers", "Connecticut Tigers", "Corpus Christi Hooks", "Danville Braves", "Dayton Dragons", "Daytona Cubs", "Delmarva Shorebirds", "Dunedin Blue Jays", "Durham Bulls", "Elizabethton Twins", "Erie SeaWolves", "Eugene Emeralds", "Everett AquaSox", "Fort Myers Miracle", "Fort Wayne TinCaps", "Frederick Keys", "Fresno Grizzlies", "Frisco RoughRiders", "Great Falls Voyagers", "Great Lakes Loons", "Greeneville Astros", "Greensboro Grasshoppers", "Greenville Drive", "Gwinnett Braves", "Hagerstown Suns", "Harrisburg Senators", "Helena Brewers", "Hickory Crawdads", "High Desert Mavericks", "Hudson Valley Renegades", "Huntsville Stars", "Idaho Falls Chukars", "Indianapolis Indians", "Inland Empire 66ers", "Iowa Cubs", "Jacksonville Suns", "Jamestown Jammers", "Johnson City Cardinals", "Jupiter Hammerheads", "Kane County Cougars", "Kannapolis Intimidators", "Kingsport Mets", "Kinston Indians", "Lake County Captains", "Lake Elsinore Storm", "Lakeland Flying Tigers", "Lakewood BlueClaws", "Lancaster JetHawks", "Lansing Lugnuts", "Las Vegas 51s", "Lehigh Valley IronPigs", "Lexington Legends", "Louisville Bats", "Lowell Spinners", "Lynchburg Hillcats", "Mahoning Valley Scrappers", "Memphis Redbirds", "Midland RockHounds", "Mississippi Braves", "Missoula Osprey", "Mobile BayBears", "Modesto Nuts", "Montgomery Biscuits", "Myrtle Beach Pelicans", "Nashville Sounds", "New Britain Rock Cats", "New Hampshire Fisher Cats", "New Orleans Zephyrs", "Norfolk Tides", "Northwest Arkansas Naturals", "Ogden Raptors", "Oklahoma City RedHawks", "Omaha Royals", "Orem Owlz", "Palm Beach Cardinals", "Pawtucket Red Sox", "Peoria Chiefs", "Portland Beavers", "Portland Sea Dogs", "Potomac Nationals", "Princeton Rays", "Pulaski Mariners", "Quad Cities River Bandits", "Rancho Cucamonga Quakes", "Reading Phillies", "Reno Aces", "Richmond Flying Squirrels", "Rochester Red Wings", "Rome Braves", "Round Rock Express", "Sacramento River Cats", "Salem Red Sox", "Salem-Keizer Volcanoes", "Salt Lake Bees", "San Antonio Missions", "San Jose Giants", "Savannah Sand Gnats", "Scranton/Wilkes-Barre Yankees", "South Bend Silver Hawks", "Spokane Indians", "Springfield Cardinals", "St. Lucie Mets", "State College Spikes", "Staten Island Yankees", "Stockton Ports", "Syracuse Chiefs", "Tacoma Rainiers", "Tampa Yankees", "Tennessee Smokies", "Toledo Mud Hens", "Trenton Thunder", "Tri-City Dust Devils", "Tri-City ValleyCats", "Tulsa Drillers", "Vancouver Canadians", "Vermont Lake Monsters", "Visalia Rawhide", "Washington Nationals", "West Michigan Whitecaps", "West Tenn Diamond Jaxx", "West Virginia Power", "Williamsport Crosscutters", "Wilmington Blue Rocks", "Winston-Salem Dash", "Wisconsin Timber Rattlers", "Yakima Bears"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["دوري الهوكي الوطني", "nhl", "NHL", "Ligue nationale de hockey"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Anaheim Ducks", "Arizona Coyotes", "Atlanta Flames", "Atlanta Thrashers", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "California Seals", "Carolina Hurricanes", "Chicago Blackhawks", "Cleveland Barons", "Colorado Avalanche", "Columbus Blue Jackets", "Dallas Stars", "Detroit Cougars", "Detroit Falcons", "Detroit Red Wings", "Edmonton Oilers", "Florida Panthers", "Hamilton Tigers", "Hartford Whalers", "Kansas City Scouts", "Los Angeles Kings", "Minnesota North Stars", "Minnesota Wild", "Montreal Canadiens", "Montreal Maroons", "Montreal Wanderers", "Nashville Predators", "New Jersey Devils", "New York Americans", "New York Islanders", "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Philadelphia Quakers", "Pittsburgh Penguins", "San Jose Sharks", "Seattle Kraken", "St. Louis Blues", "St. Louis Eagles", "Tampa Bay Lightning", "Toronto Arenas", "Toronto Maple Leafs", "Toronto St. Pats", "Utah Mammoth", "Vancouver Canucks", "Vegas Golden Knights", "Washington Capitals", "Winnipeg Jets"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["European Basketball", "Europees basketbal", "كرة السلة الأوروبية", "european_basketball", "Baloncesto europeo", "Europeisk basket", "Lega europea di pallacanestro", "バスケットボール ユーロリーグ", "Basquete europeu", "Europejska koszykówka", "Basketball européen", "Europäischer Basketball"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["ALBA Berlin Basketball", "Anadolu Efes Istanbul Basketball", "AX Armani Exchange Milan Basketball", "Barcelona Basketball", "Bayern Munich Basketball", "Crvena Zvezda mts Belgrade Basketball", "CSKA Moscow Basketball", "Fenerbahce Beko Istanbul", "Khimki Moscow Region Basketball", "KIROLBET Baskonia Vitoria-Gasteiz Basketball", "LDLC ASVEL Villeurbanne", "Maccabi FOX Tel Aviv Basketball", "Olympiacos Basketball", "Panathinaikos Basketball", "Real Madrid Basketball", "Valencia Basketball", "Zalgiris Kaunas Basketball", "Zenit St Petersburg Basketball"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Liga Premier de Badminton", "インド/バドミントンリーグ", "Premier Badminton League", "premier_badminton_league", "Liga Premier de Bádminton", "Premier Badminton Ligan", "الدوري الممتاز لكرة الريشة"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Awadhe Warriors", "Bengaluru Raptors", "Chennai Superstarz", "Hyderabad Hunters", "Mumbai Rockets", "North Eastern Warriors", "Pune 7 Aces"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Otros equipos de fútbol", "Other Soccer Leagues", "other_football_leagues", "サッカーリーグ/その他", "Otras ligas de fútbol", "Inne ligi piłkarskie", "Andere voetbalcompetities", "Autres équipes de football", "Mehr Fußballmannschaften", "More Football Leagues", "Outras ligas de futebol", "بطولات كرة القدم الأخرى", "Altre squadre di calcio", "Andra fotbollsligor"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Arsenal de Sarandí", "AS Roma", "Boca Juniors", "CA River Plate", "Club Atlético River Plate", "FC Arsenal Tula", "FC Basel", "FC Startak Moscow", "Galatasaray SK", "Sao Paulo FC", "Sport Club Corinthians Paulista"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["ポルトガル/サッカー", "Portuguese Football", "Futebol português", "Fútbol portugués", "Football portugais", "Portugees voetbal", "Portugiesischer Fußball", "portuguese_football", "Portugisisk fotboll", "Portuguese Soccer", "Portugalska piłka nożna", "كرة القدم البرتغالية", "Campionato di calcio portoghese"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Belenenses", "Benfica", "Boavista", "Casa Pia AC", "CD Santa Clara", "CF Estrela", "Chaves", "Desportivo das Aves", "Estoril", "Famalicão", "Farense", "FC Arouca", "Gil Vicente", "Marítimo", "Moreirense", "Paços de Ferreira", "Portimonense SC", "Porto", "Rio Ave", "Sporting", "Sporting de Braga", "Tondela", "Vitória Guimarães", "Vitória Setúbal"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["الدوري الأمريكي لكرة القدم", "mls", "MLS"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Atlanta United FC", "Austin FC", "C.D. Chivas USA", "Chicago Fire", "Colorado Rapids", "Columbus Crew", "D.C. United", "FC Cincinnati", "FC Dallas", "Houston Dynamo", "Inter Miami CF", "Los Angeles FC", "Los Angeles Galaxy", "Minnesota United FC", "Montreal Impact", "Nashville SC", "New England Revolution", "New York City FC", "New York Red Bulls", "Orlando City SC", "Philadelphia Union", "Portland Timbers", "Real Salt Lake", "San Jose Earthquakes", "Seattle Sounders FC", "Sporting Kansas City", "St. Louis City", "Toronto FC", "Vancouver Whitecaps"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["ncaa", "دوري الجامعات الأمريكية لكرة السلة", "NCAA"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Abilene Christian Wildcats", "Air Force Falcons", "Akron Zips", "Alabama A&M Bulldogs", "Alabama Birmingham Blazers", "Alabama Crimson Tide", "Alabama State Hornets", "Albany Great Danes", "Alcorn State Braves", "American University Eagles", "Appalachian State Mountaineers", "Arizona State Sun Devils", "Arizona Wildcats", "Arkansas Little Rock Trojans", "Arkansas Razorbacks", "Arkansas State Indians", "Arkansas State Red Wolves", "Arkansas-Pine Bluff Golden Lions", "Army Black Knights", "Auburn Tigers", "Austin Peay Governors", "Ball State Cardinals", "Bates Bobcats", "Baylor Bears", "Belmont Bruins", "Bethune Cookman Wildcats", "Binghamton Bearcats", "Boise State Broncos", "Boston College Eagles", "Boston University Terriers", "Bowling Green Falcons", "Bradley Braves", "Brown Bears", "Bryant Bulldogs", "Bucknell Bison", "Buffalo Bulls", "Butler Bulldogs", "BYU Cougars", "Cal Irvine Anteaters", "Cal Poly Mustangs", "Cal Riverside Highlanders", "Cal Santa Barbara Gauchos", "Cal State Bakersfield Roadrunners", "Cal State Fullerton Titans", "Cal State Northridge Matadors", "Cal State Sacramento Hornets", "California Baptist Lancers", "California Golden Bears", "Campbell Fighting Camels", "Canisius Golden Griffins", "Centenary Gentlemen", "Central Arkansas Bears", "Central Connecticut Blue Devils", "Central Connecticut State Blue Devils", "Central Florida Golden Knights", "Central Michigan Chippewas", "Charleston Cougars", "Charleston Southern Buccaneers", "Charlotte 49ers", "Chicago State Cougars", "Cincinnati Bearcats", "Citadel Bulldogs", "Clemson Tigers", "Cleveland State Vikings", "Coastal Carolina Chanticleers", "Colgate Raiders", "Colorado Buffaloes", "Colorado College Tigers", "Colorado State Rams", "Columbia Lions", "Connecticut Huskies", "Coppin State Eagles", "Cornell Big Red", "Creighton Bluejays", "Dallas Baptist Patriots", "Dartmouth Big Green", "Davidson Wildcats", "Dayton Flyers", "Delaware Fightin' Blue Hens", "Delaware State Hornets", "Denver Pioneers", "DePaul Blue Demons", "Detroit Titans", "Drake Bulldogs", "Drexel Dragons", "Duke Blue Devils", "Duquesne Dukes", "East Carolina Pirates", "East Tennessee State Buccaneers", "Eastern Illinois Panthers", "Eastern Kentucky Colonels", "Eastern Michigan Eagles", "Eastern Washington Eagles", "Elon Phoenix", "Evansville Purple Aces", "Fairfield Stags", "Fairleigh Dickinson Devils", "Fairleigh Dickinson Knights", "FIU Panthers", "Florida A&M Rattlers", "Florida Atlantic Owls", "Florida Gators", "Florida Gulf Coast Eagles", "Florida International Golden Panthers", "Florida State Seminoles", "Fordham Rams", "Fort Wayne Mastodons", "Fresno State Bulldogs", "Furman Paladins", "Gardner-Webb Runnin' Bulldogs", "George Mason Patriots", "George Washington Colonials", "Georgetown Hoyas", "Georgia Bulldogs", "Georgia Southern Eagles", "Georgia State Panthers", "Georgia Tech Yellow Jackets", "Gonzaga Bulldogs", "Grambling Tigers", "Grand Canyon Antelopes", "Hampton Pirates", "Hartford Hawks", "Harvard Crimson", "Hawaii Rainbow Warriors", "High Point Panthers", "Hofstra Flying Dutchmen", "Hofstra Pride", "Holy Cross Crusaders", "Houston Baptist Huskies", "Houston Cougars", "Howard Bison", "Idaho State Bengals", "Idaho Vandals", "Illinois Chicago Flames", "Illinois Illini", "Illinois State Redbirds", "Incarnate Word Cardinals", "Indiana Hoosiers", "Indiana State Sycamores", "Iona Gaels", "Iowa Hawkeyes", "Iowa State Cyclones", "IPFW Mastodons", "IUPUI Jaguars", "Jackson State Tigers", "Jacksonville Dolphins", "Jacksonville State Gamecocks", "James Madison Dukes", "Kansas Jayhawks", "Kansas State Wildcats", "Kennesaw State Owls", "Kent State Golden Flashes", "Kentucky Wildcats", "La Salle Explorers", "Lafayette Leopards", "Lamar Cardinals", "Lehigh Mountain Hawks", "Liberty Flames", "Lipscomb Bisons", "Long Beach State 49ers", "Long Beach State Sharks", "Long Island Blackbirds", "Longwood Lancers", "Louisiana Lafayette Ragin' Cajuns", "Louisiana Monroe Indians", "Louisiana Tech Bulldogs", "Louisiana-Monroe Warhawks", "Louisville Cardinals", "Loyola Chicago Ramblers", "Loyola Maryland Greyhounds", "Loyola Marymount Lions", "LSU Tigers", "Maine Black Bears", "Manhattan Jaspers", "Marist Red Foxes", "Marquette Golden Eagles", "Marshall Thundering Herd", "Maryland Baltimore County Retrievers", "Maryland Eastern Shore Fighting Hawks", "Maryland Terrapins", "Massachusetts Minutemen", "McNeese State Cowboys", "Memphis Tigers", "Mercer Bears", "Miami (Ohio) Redhawks", "Miami Hurricanes", "Michigan State Spartans", "Michigan Wolverines", "Middle Tennessee State Blue Raiders", "Minnesota Golden Gophers", "Mississippi Old Miss Rebels", "Mississippi State Bulldogs", "Mississippi Valley State Delta Devils", "Missouri Kansas City Kangaroos", "Missouri Tigers", "Monmouth Hawks", "Montana Grizzlies", "Montana State Bobcats", "Morehead State Eagles", "Morgan State Bears", "Mount St. Mary's Mountaineers", "Murray State Racers", "Navy Midshipmen", "Nebraska Cornhuskers", "Nevada Wolf Pack", "New Hampshire Wildcats", "New Mexico Lobos", "New Mexico State Aggies", "New Orleans Privateers", "Niagara Purple Eagles", "Nicholls State Colonels", "NJIT Highlanders", "Norfolk State Spartans", "North Alabama Lions", "North Carolina A&T Aggies", "North Carolina Asheville Bulldogs", "North Carolina Central Eagles", "North Carolina Charlotte 49ers", "North Carolina Greensboro Spartans", "North Carolina State Wolfpack", "North Carolina Tar Heels", "North Carolina Wilmington Seahawks", "North Dakota", "North Dakota Fighting Hawks", "North Dakota Fighting Sioux", "North Dakota State Bison", "North Florida Ospreys", "North Texas Mean Green", "Northeastern Huskies", "Northeastern Illinois Golden Eagles", "Northern Arizona Lumberjacks", "Northern Colorado Bears", "Northern Illinois Huskies", "Northern Iowa Panthers", "Northern Kentucky Norse", "Northwestern State Demons", "Northwestern Wildcats", "Notre Dame Fighting Irish", "NYIT Bears", "NYU Bobcats", "NYU Violets", "Oakland Golden Grizzlies", "Ohio Bobcats", "Ohio State Buckeyes", "Oklahoma Sooners", "Oklahoma State Cowboys", "Old Dominion Monarchs", "Ole Miss Rebels", "Omaha Mavericks", "Oral Roberts Golden Eagles", "Oregon Ducks", "Oregon State Beavers", "Pacific Boxers", "Pacific Tigers", "Penn Quakers", "Penn State Nittany Lions", "Pennsylvania Quakers", "Pepperdine Waves", "Pittsburgh Panthers", "Portland Pilots", "Portland State Vikings", "Prairie View Panthers", "Presbyterian Blue Hose", "Princeton Tigers", "Providence Friars", "Purdue Boilermakers", "Quinnipiac Bobcats", "Radford Highlanders", "Rhode Island Rams", "Rice Owls", "Richmond Spiders", "Rider Broncs", "Robert Morris Colonials", "Rutgers Scarlet Knights", "Sacred Heart Pioneers", "Saint Mary's Gaels", "Sam Houston State Bearkats", "Samford Bulldogs", "San Diego State Aztecs", "San Diego Toreros", "San Francisco Dons", "San Jose State Spartans", "Santa Clara Broncos", "Savannah State Tigers", "Seattle Redhawks", "Seton Hall Pirates", "Siena Saints", "SIU Edwardsville Cougars", "SMU Mustangs", "South Alabama Jaguars", "South Carolina Fighting Gamecocks", "South Carolina State Bulldogs", "South Dakota Coyotes", "South Dakota State Jackrabbits", "South Florida Bulls", "Southeast Missouri State Indians", "Southeast Missouri State Redhawks", "Southeastern Louisiana Lions", "Southern Illinois Salukis", "Southern Jaguars", "Southern Mississippi Golden Eagles", "Southern Utah Thunderbirds", "Southwest Missouri State Bears", "St. Bonaventure Bonnies", "St. Francis (New York) Terriers", "St. Francis (Pennsylvania) Red Flash", "St. Francis Brooklyn Terriers", "St. John's Red Storm", "St. Joseph's Hawks", "St. Louis University Billikens", "St. Mary's Rattlers", "St. Peter's Peacocks", "Stanford Cardinal", "Stephen F. Austin Lumberjacks", "Stetson Hatters", "Stony Brook Seawolves", "Syracuse Orange", "TCU Horned Frogs", "Temple Owls", "Tennessee Chattanooga Mocs", "Tennessee Martin Skyhawks", "Tennessee State Tigers", "Tennessee Tech Golden Eagles", "Tennessee Volunteers", "Texas A&M Aggies", "Texas A&M-Corpus Christi Islanders", "Texas Arlington Mavericks", "Texas El Paso Miners", "Texas Longhorns", "Texas Pan American Broncs", "Texas San Antonio Roadrunners", "Texas Southern Tigers", "Texas State Bobcats", "Texas Tech Red Raiders", "Texas-Rio Grande Valley Vaqueros", "Toledo Rockets", "Towson Tigers", "Troy State Trojans", "Tulane Green Wave", "Tulsa Golden Hurricane", "UC Davis Aggies", "UCLA Bruins", "UMass Lowell River Hawks", "UNLV Rebels", "USC Trojans", "USC Upstate Spartans", "Utah State Aggies", "Utah Utes", "Utah Valley Wolverines", "Valparaiso Crusaders", "Vanderbilt Commodores", "Vermont Catamounts", "Villanova Wildcats", "Virginia Cavaliers", "Virginia Commonwealth Rams", "Virginia Tech Hokies", "VMI Keydets", "Wagner Seahawks", "Wake Forest Demon Deacons", "Washington Huskies", "Washington State Cougars", "Weber State Wildcats", "West Virginia Mountaineers", "Western Carolina Catamounts", "Western Illinois Leathernecks", "Western Kentucky Hilltoppers", "Western Michigan Broncos", "Wichita State Shockers", "William & Mary Tribe", "Winthrop Eagles", "Wisconsin Badgers", "Wisconsin Green Bay Phoenix", "Wisconsin Milwaukee Panthers", "Wofford Terriers", "Wright State Raiders", "Wyoming Cowboys", "Xavier Musketeers", "Yale Bulldogs", "Youngstown State Penguins"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Campionato mondiale di calcio", "World Cup Football", "Wereldkampioenschap voetbal", "Copa do Mundo de Futebol", "World Cup Soccer", "Mistrzostwa Świata w Piłce Nożnej", "VM-fotboll", "Fútbol Copa del Mundo", "Fußballweltmeisterschaft", "كأس العالم لكرة القدم", "FIFAワールドカップ", "Coupe du monde de football", "Copa mundial de fútbol", "world_cup_football"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Angola", "Argentina", "Australia", "Austria", "Belgium", "Bolivia", "Brazil", "Bulgaria", "Cameroon", "Canada", "Chile", "China", "Colombia", "Costa Rica", "Cote d'Ivoire", "Croatia", "Czech Republic", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Greece", "Iran", "Ireland", "Italy", "Jamaica", "Japan", "Mexico", "Morocco", "Netherlands", "Nigeria", "Norway", "Paraguay", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia", "Scotland", "Senegal", "Serbia and Montenegro", "Slovenia", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Ukraine", "United States", "Uruguay", "Venezuela", "Wales", "Yugoslavia"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Indiska Soccer-ligan", "Indian Soccer League", "Indian Super League", "Indyjska Soccer League", "Indische Fußballliga", "インド/サッカーリーグ", "Liga de fútbol de la India", "Liga de fútbol india", "indian_soccer_league", "دوري كرة القدم الهندي", "Liga Indiana de Futebol", "Ligue indienne de football"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["ATK Mohun Bagan FC", "Bengaluru FC", "Chennaiyin FC", "FC Goa", "Hyderabad FC", "Jamshedpur FC", "Kerala Blasters FC", "Mumbai City FC", "Northeast United FC", "Odisha FC"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Equipes nationales de football", "代表チーム", "National Teams", "Selecciones nacionales", "Landslag", "Nationale teams", "Squadre Nazionali", "national_teams", "Nationale Fußballmannschaften", "Selecciones de fútbol", "Seleções Nacionais", "Drużyny narodowe", "المنتخبات الوطنية"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Chinese Taipei", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Federated States of Micronesia", "Fiji", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana", "Great Britain", "Greece", "Grenada", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "Independent Olympic Athletes", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Refugee Olympic Team", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "São Tomé and Príncipe", "Tajikistan", "Tanzania", "Thailand", "The Gambia", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Yemen", "Zambia", "Zimbabwe"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["メキシコ/サッカー連盟", "Mexican Football Federation", "Federação Mexicana de Futebol", "Mexicaanse Vereniging Van De Voetbalbond", "Federazione calcistica del Messico", "Federación Mexicana De Fútbol Asociación", "Federación Mexicana de Fútbol Asociación", "اتحاد كرة القدم المكسيكي", "Fédération du Mexique de football", "federacion_mexicana_de_futbol_ascn"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Atlético de San Luis", "CF Atlas", "CF Monterrey", "Club América", "Club Deportivo Guadalajara - Chivas", "Club Deportivo Social y Cultural - Cruz Azul", "Club Santos Laguna", "Club Universidad Nacional A.C. - Pumas", "FC Juárez", "Mazatlán", "Necaxa", "Querétaro", "UANL Tigres"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Football néerlandais", "Dutch Soccer", "Holenderska piłka nożna", "كرة القدم الهولندية", "Futebol holandês", "Fútbol holandés", "dutch_football", "Nederlands voetbal", "オランダ/サッカー", "Dutch Football", "Holländsk fotboll", "Niederländischer Fußball", "Campionato di calcio olandese"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["ADO Den Haag", "Ajax Amsterdam", "Almere City", "AZ Alkmaar", "De Graafschap", "Excelsior", "FC Groningen", "FC Utrecht", "FC Volendam", "FC Zwolle", "Feyenoord Rotterdam", "Fortuna Sittard", "Go Ahead Eagles", "Heerenveen", "Heracles Almelo", "NAC Breda", "NEC Nijmegen", "PSV Eindhoven", "RBC Roosendaal", "RKC Waalwijk", "Roda JC Kerkrade", "SC Cambuur", "Sparta Rotterdam", "Twente Enschede", "Vitesse Arnhem", "Willem II Tilburg"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["X-spel", "العاب اكس", "X-Games", "X Games", "Xゲーム", "x_games"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["X-Games"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["german_football", "كرة القدم الألمانية", "Tysk fotboll", "Deutscher Fußball", "Fútbol alemán", "Niemiecka piłka nożna", "Calcio tedesco", "German Soccer", "Football allemand", "Futebol alemão", "Duits voetbal", "German Football", "ドイツ/サッカー"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["1. FC Koln", "1. FC Magdeburg", "Arminia Bielefeld", "Bayer Leverkusen", "Bayern Munich", "Borussia Dortmund", "Borussia Monchengladbach", "Darmstadt 98", "Dynamo Dresden", "Eintracht Braunschweig", "Eintracht Frankfurt", "Energie Cottbus", "FC Augsburg", "FC Heidenheim", "FC St. Pauli", "Fortuna Düsseldorf", "FSV Mainz 05", "Greuther Fürth", "Hamburg SV", "Hannover 96", "Hansa Rostock", "Hertha Berlin", "Hertha BSC", "Kaiserslautern", "Karlsruher SC", "Nurnberg", "RB Leipzig", "Schalke", "Sport-Club Freiburg", "TSG 1899 Hoffenheim", "TSV 1860 Munich", "Union Berlin", "VfB Stuttgart", "VfL Bochum", "VfL Osnabrück", "VfL Wolfsburg", "Werder Bremen"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["الدوري الوطني لكرة القدم للسيدات", "NWSL", "nwsl"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Angel City FC", "Boston Legacy FC", "Chicago Red Stars", "Houston Dash", "Kansas City Current", "NJ/NY Gotham FC", "North Carolina Courage", "Orlando Pride", "Portland Thorns FC", "Racing Louisville FC", "San Diego Wave FC", "Seattle Reign FC", "Sky Blue FC", "Utah Royals FC", "Washington Spirit"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Pro Kabaddi League", "pro_kabaddi_league", "Pro Kabaddi Ligan", "دوري كبادي للمحترفين", "Liga Pro Kabaddi", "インド/プロカバディリーグ"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Bengal Warriors", "Bengaluru Bulls", "Dabang Delhi KC", "Gujarat Fortunegiants", "Haryana Steelers", "Jaipur Pink Panthers", "Patna Pirates", "Puneri Paltan", "Tamil Thalaivas", "Telugu Titans", "U Mumba", "UP Yoddha"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["رابطة لاعبي الغولف المحترفين", "pga", "PGA", "PGAツアー"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["PGA"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Schottischer Fußball", "كرة القدم الاسكتلندية", "Skotsk fotboll", "Futebol escocês", "Football écossais", "Fútbol escocés", "Scottish Soccer", "Scottish Football", "Schots voetbal", "スコットランド/サッカー", "Szkocka piłka nożna", "scottish_football", "Campionato di calcio scozzese"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Aberdeen", "Airdrieonians", "Arbroath", "Celtic", "Dundee", "Dundee United", "Dunfermline", "Hearts", "Hibernian", "Inverness Caledonian Thistle", "Kilmarnock", "Livingston", "Motherwell", "Patrick Thistle", "Rangers", "Ross County", "St Johnstone", "St Mirren"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Französischer Fußball", "Frans voetbal", "French Football", "Fransk fotboll", "French Soccer", "Francuska piłka nożna", "Calcio francese", "Futebol francês", "french_football", "كرة القدم الفرنسية", "Fútbol francés", "フランス/サッカー", "Football français"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["AC Ajaccio", "Amiens SC", "Angers SCO", "AS Saint-Etienne", "Auxerre", "Bastia", "Bordeaux", "Brest", "Clermont Foot 63", "Dijon FCO", "FC Lorient", "Guingamp", "Le Havre", "Lens", "Lille", "Lyon", "Marseille", "Metz", "Monaco", "Montpellier", "Nantes", "Nice", "Nîmes Olympique", "PSG", "Rennes", "Sedan", "SM Caen", "Sochaux", "Stade de Reims", "Strasbourg", "Thonon Evian FC", "Toulouse FC", "Troyes", "Valenciennes FC"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["LPGAツアー", "lpga", "رابطة لاعبات الغولف المحترفات", "LPGA"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["LPGA"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["لعبة الكريكيت الدولية", "Międzynarodowy krykiet", "Internationales Cricket", "クリケット代表チーム", "international_cricket", "Campionato internazionale di cricket", "Internationell Cricket", "Cricket international", "Cricket internacional", "Críquete Internacional", "International Cricket"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Afghanistan", "Australia", "Bangladesh", "England", "India", "Ireland", "New Zealand", "Pakistan", "South Africa", "Sri Lanka", "West Indies", "Zimbabwe"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Nationella Lacrosse-ligan", "دوري لاكروس الوطني", "ナショナル・ラクロス・リーグ", "National Lacrosse League", "Liga Nacional de Lacrosse", "Liga nacional de lacrosse", "national_lacrosse_league", "Narodowa Liga Lacrosse"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Buffalo Bandits", "Calgary Roughnecks", "Colorado Mammoth", "Georgia Swarm", "Halifax Thunderbirds", "New England Black Wolves", "New York Riptide", "Philadelphia Wings", "Rochester Knighthawks", "San Diego Seals", "Saskatchewan Rush", "Toronto Rock", "Vancouver Warriors"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["hockey_india_league", "Liga De Hóquei Indiano", "Hockey India League", "Hokejowa liga indyjska", "Liga India de Hockey", "ホッケーインドリーグ", "Liga india de hockey", "Indiens hockeyliga", "دوري الهوكي الهندي", "Campionato di hockey indiano"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Dabang Mumbai HC", "Delhi Waveriders", "Jaypee Punjab Warriors", "Kalinga Lancers", "Ranchi Rays", "Uttar Pradesh Wizards"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["كرة القدم الايطالية", "italian_football", "Italienischer Fußball", "Italian Soccer", "Włoska piłka nożna", "Italiensk fotboll", "Football italien", "Calcio italiano", "Italiaans voetbal", "Fútbol italiano", "Futebol italiano", "Italian Football", "イタリア/サッカー"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["A.S. Livorno Calcio", "AC Milan", "Ascoli", "Atalanta", "Bari", "Bologna", "Brescia", "Cagliari Calcio", "Calcio Catania", "Catanzaro", "Chievo Verona", "Cittadella", "Como", "Cosenza", "Empoli", "Fiorentina", "Frosinone FC", "Genoa", "Inter Milan", "Juventus", "Lazio", "Lecce", "Lecco", "Modena", "Monza", "Palermo", "Parma", "Parma Calcio", "Perugia", "Piacenza", "Pisa", "Reggina", "Roma", "Sampdoria", "Sassuolo", "Spal", "SSC Napoli", "Ternana", "Torino", "Udinese", "US Salernitana", "Venezia FC", "Verona FC"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Campionato di pallavolo professionale", "دوري المحترفين للكرة الطائرة", "インド/バレーボールリーグ", "Pro Volleyball Ligan", "Pro Volleyball League", "pro_volleyball_league", "Liga Profissional de Vôlei", "Liga de voleibol profesional"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Ahmedabad Defenders", "Black Hawks Hyderabad", "Calicut Heroes", "Chennai Spartans", "Kochi Blue Spikers", "U Mumba Volley"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Japońska piłka nożna", "Campionato di calcio giapponese", "Japansk fotboll", "Japanese Soccer", "Japanischer Fußball", "Japans voetbal", "Japanese Football", "Futebol japonês", "كرة القدم اليابانية", "日本/Jリーグ", "Fútbol japonés", "japanese_football", "Football japonais"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["AC Nagano Parceiro", "Albirex Niigata", "Avispa Fukuoka", "Blaublitz Akita", "Cerezo Osaka", "Consadole Sapporo", "Ehime FC", "F.C. Gifu", "Fagiano Okayama FC", "FC Machida Zelvia", "FC Ryūkyū", "FC Tokyo", "Fujieda MYFC", "Fukushima United FC", "Gainare Tottori", "Gamba Osaka", "Giravanz Kitakyushu", "Grulla Morioka", "Iwaki FC", "JEF United Ichihara Chiba", "Júbilo Iwata", "Kamatamare Sanuki", "Kashima Antlers", "Kashiwa Reysol", "Kataller Toyama", "Kawasaki Frontale", "Kyoto Sanga FC", "Matsumoto Yamaga FC", "Mito HollyHock", "Montedio Yamagata", "Nagoya Grampus Eight", "Oita Trinita", "Omiya Ardija", "RENOFA Yamaguchi", "Roasso Kumamoto", "Sagan Tosu", "Sanfrecce Hiroshima", "SC Sagamihara", "Shimizu S-Pulse", "Shonan Bellmare", "Thespakusatsu Gunma", "Tochigi SC", "Tokushima Vortis", "Tokyo Verdy1969", "Urawa Red Diamonds", "V-Varen Nagasaki", "Vegalta Sendai", "Ventforet Kofu", "Vissel Kobe", "Yokohama F. Marinos", "Yokohama FC", "YSCC Yokohama", "Zweigen Kanazawa"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["البيسبول الكلاسيكية العالمية", "world_baseball_classic", "Clásico mundial de béisbol", "Classique mondiale de baseball", "Wereld Honkbal Klassieker", "World Baseball Classic", "Clássico Mundial de Beisebol", "ワールドベースボールクラシック"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Team Cuba", "Team Dominican Republic", "Team Japan", "Team Netherlands", "Team Panama", "Team Puerto Rico", "Team South Korea", "Team United States", "Team Venezuela"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Indiska Premier-ligan", "Szkocka Premier League", "Liga Premier de la India", "Indian Premier League", "インディアン・プレミアリーグ", "الدوري الهندي الممتاز", "Liga Premier Indiana", "indian_premier_league", "Premier League india"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Chennai Super Kings", "Delhi Capitals", "Gujarat Lions", "Kings XI Punjab", "Kolkata Knight Riders", "Mumbai Indians", "Rajasthan Royals", "Rising Pune Supergiants", "Royal Challengers Bangalore", "Sunrisers Hyderabad"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["wwe", "WWE", "المصارعة العالمية الترفيهية"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["WWE"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["اتحاد كرة القدم الأميركي", "nfl", "NFL"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Boston Patriots", "Boston Redskins", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Chicago Cardinals", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Dallas Texans", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Oilers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "New York Titans", "Oakland Raiders", "Philadelphia Eagles", "Pittsburgh Steelers", "San Diego Chargers", "San Francisco 49ers", "Seattle Seahawks", "St. Louis Rams", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Commanders", "Washington Football Team"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["ufc", "UFC", "بطولة القتال النهائي"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Al Iaquinta", "Alejandro Perez", "Alex Oliveira", "Alex Perez", "Alexa Grasso", "Alexander Gustafsson", "Alexander Hernandez", "Alexander Volkanoski", "Alexander Volkov", "Alexandre Pantoja", "Alexis Davis", "Alistair Overeem", "Aljamain Sterling", "Amanda Nunes", "Andrea Lee", "Andrei Arlovski", "Angela Hill", "Anthony Pettis", "Anthony Smith", "Antonio Carlos Junior", "Ashlee Evans-Smith", "Aspen Ladd", "Ben Nguyen", "Bethe Correia", "Brad Tavares", "Brandon Moreno", "Brian Ortega", "Carla Esparza", "Cat Zingano", "Chad Mendes", "Chan Sung Jung", "Chris Weidman", "Claudia Gadelha", "Cody Garbrandt", "Cody Stamann", "Colby Covington", "Conor McGregor", "Corey Anderson", "Cortney Casey", "Cris Cyborg", "Cub Swanson", "Curtis Blaydes", "Dan Hooker", "Daniel Cormier", "Darren Elkins", "Darren Till", "David Branch", "Deiveson Figueiredo", "Demian Maia", "Derek Brunson", "Derrick Lewis", "Dominick Cruz", "Dominick Reyes", "Donald Cerrone", "Douglas Silva de Andrade", "Dustin Ortiz", "Dustin Poirier", "Edson Barboza", "Elias Theodorou", "Elizeu Zaleski dos Santos", "Felice Herrig", "Francis Ngannou", "Francisco Trinaldo", "Frankie Edgar", "Georges St-Pierre", "Germaine de Randamie", "Glover Teixeira", "Gunnar Nelson", "Henry Cejudo", "Holly Holm", "Ilir Latifi", "Irene Aldana", "Israel Adesanya", "Jacare Souza", "James Vick", "Jan Blachowicz", "Jared Cannonier", "Jennifer Maia", "Jeremy Stephens", "Jessica Andrade", "Jessica Eye", "Jessica-Rose Clark", "Jimi Manuwa", "Jimmie Rivera", "Joanna Jedrzejczyk", "Joanne Calderwood", "John Dodson", "John Lineker", "John Moraga", "Jon Jones", "Jorge Masvidal", "Jose Aldo", "Joseph Benavidez", "Josh Emmett", "Julianna Pena", "Junior dos Santos", "Jussier Formiga", "Justin Gaethje", "Justin Willis", "Kamaru Usman", "Karolina Kowalkiewicz", "Katlyn Chookagian", "Kelvin Gastelum", "Ketlen Vieira", "Kevin Lee", "Khabib Nurmagomedov", "Lauren Murphy Increase1", "Leon Edwards", "Lina Lansberg", "Liz Carmouche", "Lucie Pudilova", "Luke Rockhold", "Mackenzie Dern", "Mara Romero Borella", "Marcin Tybura", "Marion Reneau", "Mark Hunt", "Marlon Moraes", "Matheus Nicolau", "Mauricio Rua", "Max Holloway", "Michael Chiesa", "Michelle Waterson", "Middleweight", "Mirsad Bektic", "Misha Cirkunov", "Nate Diaz", "Neil Magny", "Nicco Montaño", "Nikita Krylov", "Nina Ansaroff", "Oleksiy Oliynyk", "Ovince Saint Preux", "Paul Felder", "Paulo Costa", "Pedro Munhoz", "Rafael dos Anjos", "Randa Markos", "Rani Yahya", "Raphael Assunção", "Raquel Pennington", "Ray Borg", "Renato Moicano", "Ricardo Lamas", "Rob Font", "Robbie Lawler", "Robert Whittaker", "Rose Namajunas", "Roxanne Modafferi", "Santiago Ponzinibbio", "Sara McMann", "Sergio Pettis", "Shamil Abdurakhimov", "Sijara Eubanks", "Stefan Struve", "Stephen Thompson", "Stipe Miocic", "Tai Tuivasa", "Tatiana Suarez", "Tecia Torres", "Thiago Santos", "Thomas Almeida", "Tim Elliott", "TJ Dillashaw", "Tony Ferguson", "Tonya Evinger", "Tyron Woodley", "Tyson Pedro", "Ulka Sasaki", "Uriah Hall", "Valentina Shevchenko", "Volkan Oezdemir", "Wilson Reis", "Yair Rodriguez", "Yana Kunitskaya", "Yoel Romero", "Zabit Magomedsharipov"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["Baloncesto japonés", "Basketball japonais", "Japanese Basketball", "日本/Bリーグ", "japanese_basketball", "Japansk basket", "Japans basketbal", "Basquete japonês", "كرة السلة اليابانية", "Japońska koszykówka", "Campionato di basket giapponese", "Japanischer Basketball"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["AISIN AW AREIONS ANJO", "AKITA NORTHERN HAPPINETS", "ALVARK TOKYO", "AOMORI WAT'S", "BAMBITIOUS NARA", "CHIBA JETS", "EARTHFRIENDS TOKYO Z", "EHIME ORANGE VIKINGS", "F EAGLES NAGOYA", "FUKUSHIMA FIREBONDS", "GUNMA CRANE THUNDERS", "HIROSHIMA DRAGONFLIES", "IBARAKI ROBOTS", "IWATE BIG BULLS", "KAGAWA FIVE ARROWS", "KAGOSHIMA REBNISE", "KANAZAWA SAMURAIZ", "KAWASAKI BRAVE THUNDERS", "KUMAMOTO VOLTERS", "KYOTO HANNARYZ", "LEVANGA HOKKAIDO", "NAGOYA DIAMOND DOLPHINS", "NIIGATA ALBIREX BB", "NISHINOMIYA STORKS", "OSAKA EVESSA", "OTSUKA CORPORATION ALPHAS", "RIZING ZEPHYR FUKUOKA", "RYUKYU GOLDEN KINGS", "SAITAMA BRONCOS", "SAN-EN NEOPHOENIX", "SEAHORSES MIKAWA", "SENDAI EIGHTY NINERS", "SHIGA LAKESTARS", "SHIMANE SUSANOO MAGIC", "SHINSHU BRAVE WARRIORS", "SUNROCKERS SHIBUYA", "TOCHIGI BREX", "TOKIO MARINE NICHIDO BIG BLUE", "TOKYO CINQ REVES", "TOKYO EXCELLENCE", "TOKYO HACHIOJI TRAINS", "TOYAMA GROUSES", "TOYODA GOSEI SCORPIONS", "YAMAGATA WYVERNS", "YOKOHAMA B-CORSAIRS"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["wnba", "الاتحاد الوطني لكرة السلة النسائية", "WNBA"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Atlanta Dream", "Charlotte Sting", "Chicago Sky", "Cleveland Rockers", "Connecticut Sun", "Dallas Wings", "Detroit Shock", "Golden State Valkyries", "Houston Comets", "Indiana Fever", "Las Vegas Aces", "Los Angeles Sparks", "Miami Sol", "Minnesota Lynx", "New York Liberty", "Phoenix Mercury", "Portland Fire", "Sacramento Monarchs", "San Antonio Silver Stars", "Seattle Storm", "Toronto Tempo", "Tulsa Shock", "Washington Mystics"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["mlb", "MLB", "Ligue majeure de baseball", "دوري البيسبول الرئيسي"].includes(a.value)) ? (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Beaneaters", "Boston Beans", "Boston Red Sox", "California Angels", "Chicago Cubs", "Chicago White Sox", "Chicago White Stockings", "Chicago Whitesox", "Cincinnati Redlegs", "Cincinnati Reds", "Cleveland Blues", "Cleveland Indians", "Cleveland Naps", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Athletics", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Braves", "Milwaukee Brewers", "Minnesota Twins", "Montreal Expos", "New York Highlanders", "New York Mets", "New York Yankees", "Oakland Athletics", "Philadelphia Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Tampa Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"]
      })) : typeof e == "object" && e.league_name && Array.isArray(e.league_name) && e.league_name.some(a => typeof a == "object" && a.value && ["تنس", "Tennis", "Tenis", "Tênis", "テニス", "tennis"].includes(a.value)) && (i({
          name: "team_name"
      }),
      i({
          name: "team_name.0",
          required: !0
      }),
      i({
          name: "team_name.0.value",
          options: ["Tennis"]
      })),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["TEAM_NAME/SIZE_NAME", "TEAM_NAME", "TEAM_NAME/SIZE_NAME/COLOR_NAME"].includes(a.name)) && i({
          name: "team_name",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["SCENT_NAME", "SIZE_NAME/SCENT_NAME"].includes(a.name)) && i({
          name: "scent",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["HAND_ORIENTATION"].includes(a.name)) && i({
          name: "hand_orientation",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["CUP_SIZE"].includes(a.name)) && (i({
          name: "cup",
          required: !0,
          variation: !0
      }),
      i({
          name: "cup.0",
          required: !0,
          variation: !0
      }),
      i({
          name: "cup.0.size",
          required: !0,
          variation: !0
      })),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["GRIP_SIZE/GRIP_TYPE"].includes(a.name)) && (i({
          name: "grip",
          required: !0,
          variation: !0
      }),
      i({
          name: "grip.0",
          required: !0,
          variation: !0
      }),
      i({
          name: "grip.0.size",
          required: !0,
          variation: !0
      }),
      i({
          name: "grip.0.type",
          required: !0,
          variation: !0
      })),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["GRIT_TYPE/COLOR_NAME", "GRIT_TYPE", "GRIT_TYPE/SIZE_NAME"].includes(a.name)) && (i({
          name: "grit",
          required: !0,
          variation: !0
      }),
      i({
          name: "grit.0",
          required: !0,
          variation: !0
      }),
      i({
          name: "grit.0.type",
          required: !0,
          variation: !0
      })),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["LENGTH_RANGE"].includes(a.name)) && i({
          name: "length_range",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["MATTE_STYLE"].includes(a.name)) && i({
          name: "matte_style",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["ITEM_THICKNESS"].includes(a.name)) && i({
          name: "item_thickness",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["child"].includes(a.value)) || (i({
          name: "child_parent_sku_relationship"
      }),
      i({
          name: "child_parent_sku_relationship.0",
          required: !0
      }),
      i({
          name: "child_parent_sku_relationship.0.parent_sku",
          forbidden: !0,
          required: !1
      })),
      typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["child"].includes(a.value)) && (i({
          name: "child_parent_sku_relationship"
      }),
      i({
          name: "child_parent_sku_relationship.0",
          required: !0
      }),
      i({
          name: "child_parent_sku_relationship.0.parent_sku",
          required: !0
      })),
      typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value) && i({
          name: "child_parent_sku_relationship",
          required: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.some(a => typeof a == "object" && a.child_relationship_type && ["variation"].includes(a.child_relationship_type)) && typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value) && i({
          name: "variation_theme",
          required: !0
      }),
      typeof e == "object" && e.supplier_declared_dg_hz_regulation && Array.isArray(e.supplier_declared_dg_hz_regulation) && e.supplier_declared_dg_hz_regulation.some(a => typeof a == "object" && a.value && ["not_applicable"].includes(a.value)) && (i({
          name: "supplier_declared_dg_hz_regulation"
      }),
      i({
          name: "supplier_declared_dg_hz_regulation.0",
          required: !0
      }),
      i({
          name: "supplier_declared_dg_hz_regulation.0.value",
          notOptions: ["other", "storage", "transportation", "waste"]
      })),
      typeof e == "object" && e.supplier_declared_dg_hz_regulation && Array.isArray(e.supplier_declared_dg_hz_regulation) && e.supplier_declared_dg_hz_regulation.some(a => typeof a == "object" && a.value && ["ghs"].includes(a.value)) && (i({
          name: "ghs",
          required: !0
      }),
      i({
          name: "ghs.0",
          required: !0
      }),
      i({
          name: "ghs.0.classification",
          required: !0
      }),
      i({
          name: "safety_data_sheet_url",
          required: !0
      })),
      typeof e == "object" && e.supplier_declared_dg_hz_regulation && Array.isArray(e.supplier_declared_dg_hz_regulation) && e.supplier_declared_dg_hz_regulation.some(a => typeof a == "object" && a.value && ["transportation"].includes(a.value)) && i({
          name: "hazmat",
          required: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["ITEM_WEIGHT"].includes(a.name)) && i({
          name: "item_weight",
          required: !0,
          variation: !0
      }),
      (!(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) && typeof e == "object" && e.required_product_compliance_certificate && Array.isArray(e.required_product_compliance_certificate) && e.required_product_compliance_certificate.some(a => typeof a == "object" && a.value && ["California Air Review Board (CARB)"].includes(a.value)) || !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.required_product_compliance_certificate && Array.isArray(e.required_product_compliance_certificate) && e.required_product_compliance_certificate.some(a => typeof a == "object" && a.value && ["California Air Review Board (CARB)"].includes(a.value))) && i({
          name: "legal_compliance_certifications",
          required: !0
      }),
      typeof e == "object" && e.fcc_radio_frequency_emission_compliance && Array.isArray(e.fcc_radio_frequency_emission_compliance) && e.fcc_radio_frequency_emission_compliance.some(a => typeof a == "object" && a.registration_status && ["has_fcc_id"].includes(a.registration_status)) && (i({
          name: "fcc_radio_frequency_emission_compliance"
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0",
          required: !0
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.identification_number",
          required: !0
      })),
      typeof e == "object" && e.fcc_radio_frequency_emission_compliance && Array.isArray(e.fcc_radio_frequency_emission_compliance) && e.fcc_radio_frequency_emission_compliance.some(a => typeof a == "object" && a.registration_status && ["fcc_supplier_declaration_of_conformity"].includes(a.registration_status)) && (i({
          name: "fcc_radio_frequency_emission_compliance"
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0",
          required: !0
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.point_of_contact_address",
          required: !0
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.point_of_contact_email",
          required: !0
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.point_of_contact_name",
          required: !0
      }),
      i({
          name: "fcc_radio_frequency_emission_compliance.0.point_of_contact_phone_number",
          required: !0
      })),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["ITEM_LENGTH_STRING/ITEM_WIDTH_STRING/NUMBER_OF_ITEMS", "ITEM_LENGTH_STRING/ITEM_WIDTH_STRING/NUMBER_OF_ITEMS"].includes(a.name)) && i({
          name: "item_dimensions_fraction",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME", "STYLE_NAME/ITEM_LENGTH/ITEM_WIDTH/COLOR_NAME"].includes(a.name)) && i({
          name: "item_dimensions",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["MATERIAL_TYPE/ITEM_DISPLAY_WEIGHT", "ITEM_DISPLAY_WEIGHT"].includes(a.name)) && i({
          name: "item_display_weight",
          required: !0,
          variation: !0
      }),
      (!(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) || !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value)))) && i({
          name: "model_number",
          required: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["MODEL/STYLE_NAME", "MODEL/STYLE_NAME/PART_NUMBER", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "MODEL/COLOR_NAME", "MODEL", "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER", "MODEL/SIZE_NAME"].includes(a.name)) && i({
          name: "model_number",
          required: !0,
          variation: !0
      }),
      (!(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) || !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value)))) && i({
          name: "model_name",
          required: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["MODEL_NAME/COLOR_NAME", "MODEL_NAME"].includes(a.name)) && i({
          name: "model_name",
          required: !0,
          variation: !0
      }),
      (!e.fulfillment_availability || Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.every(a => typeof a == "object" && a.fulfillment_channel_code && ["DEFAULT"].includes(a.fulfillment_channel_code) && !(typeof a == "object" && a.is_inventory_available))) && (i({
          name: "fulfillment_availability",
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0.quantity",
          required: !0
      })),
      (!e.fulfillment_availability || Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.every(a => !(typeof a == "object" && a.fulfillment_channel_code && ["DEFAULT"].includes(a.fulfillment_channel_code) && !(typeof a == "object" && a.is_inventory_available)))) && (i({
          name: "fulfillment_availability",
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0",
          required: !0
      }),
      i({
          name: "fulfillment_availability.0.quantity",
          forbidden: !0,
          required: !1
      })),
      (!e.fulfillment_availability || Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.every(a => !(typeof a == "object" && a.fulfillment_channel_code && ["DEFAULT"].includes(a.fulfillment_channel_code)))) && (i({
          name: "fulfillment_availability",
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0",
          required: !0
      }),
      i({
          name: "fulfillment_availability.0.lead_time_to_ship_max_days",
          forbidden: !0,
          required: !1
      })),
      (!e.fulfillment_availability || Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.every(a => !(typeof a == "object" && a.fulfillment_channel_code && ["DEFAULT"].includes(a.fulfillment_channel_code)))) && (i({
          name: "fulfillment_availability",
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0",
          required: !0
      }),
      i({
          name: "fulfillment_availability.0.restock_date",
          forbidden: !0,
          required: !1
      })),
      (!e.fulfillment_availability || Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.every(a => typeof a == "object" && a.fulfillment_channel_code && ["DEFAULT"].includes(a.fulfillment_channel_code) && !(typeof a == "object" && a.quantity))) && (i({
          name: "fulfillment_availability",
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0.is_inventory_available",
          required: !0
      })),
      (!e.fulfillment_availability || Array.isArray(e.fulfillment_availability) && e.fulfillment_availability.every(a => !(typeof a == "object" && a.fulfillment_channel_code && ["DEFAULT"].includes(a.fulfillment_channel_code) && !(typeof a == "object" && a.quantity)))) && (i({
          name: "fulfillment_availability",
          fieldType: "string"
      }),
      i({
          name: "fulfillment_availability.0",
          required: !0
      }),
      i({
          name: "fulfillment_availability.0.is_inventory_available",
          forbidden: !0,
          required: !1
      })),
      (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.map_price || typeof a.map_price == "object" && (!a.map_price.schedule || typeof a.map_price.schedule == "object" && a.map_price.schedule.currency && ["JPY"].includes(a.map_price.schedule.currency))))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.map_price",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.map_price.schedule",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.map_price.schedule.value_with_tax",
          multipleOf: 1
      })),
      !e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && a.audience && ["ALL"].includes(a.audience) || !(typeof a == "object" && a.audience)) ? (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.map_price"
      })) : (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0
      }),
      i({
          name: "purchasable_offer.0.map_price",
          forbidden: !0,
          required: !1
      })),
      (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.our_price || typeof a.our_price == "object" && (!a.our_price.schedule || typeof a.our_price.schedule == "object" && a.our_price.schedule.currency && ["JPY"].includes(a.our_price.schedule.currency))))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.our_price",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.our_price.schedule",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.our_price.schedule.value_with_tax",
          multipleOf: 1
      })),
      (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && a.discounted_price && Array.isArray(a.discounted_price) && a.discounted_price.every(t => typeof t == "object" && t.schedule && Array.isArray(t.schedule) && t.schedule.every(r => typeof r == "object" && r.value_with_tax)))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.our_price",
          required: !0
      })),
      !e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && a.audience && ["ALL"].includes(a.audience) || !(typeof a == "object" && a.audience)) ? (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.automated_pricing_merchandising_rule_plan"
      })) : (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0
      }),
      i({
          name: "purchasable_offer.0.automated_pricing_merchandising_rule_plan",
          forbidden: !0,
          required: !1
      })),
      (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.minimum_seller_allowed_price || typeof a.minimum_seller_allowed_price == "object" && (!a.minimum_seller_allowed_price.schedule || typeof a.minimum_seller_allowed_price.schedule == "object" && a.minimum_seller_allowed_price.schedule.currency && ["JPY"].includes(a.minimum_seller_allowed_price.schedule.currency))))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.minimum_seller_allowed_price",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.minimum_seller_allowed_price.schedule",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.minimum_seller_allowed_price.schedule.value_with_tax",
          multipleOf: 1
      })),
      (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && a.audience && ["ALL"].includes(a.audience) || !(typeof a == "object" && a.audience))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.minimum_seller_allowed_price"
      })),
      (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.maximum_seller_allowed_price || typeof a.maximum_seller_allowed_price == "object" && (!a.maximum_seller_allowed_price.schedule || typeof a.maximum_seller_allowed_price.schedule == "object" && a.maximum_seller_allowed_price.schedule.currency && ["JPY"].includes(a.maximum_seller_allowed_price.schedule.currency))))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.maximum_seller_allowed_price",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.maximum_seller_allowed_price.schedule",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.maximum_seller_allowed_price.schedule.value_with_tax",
          multipleOf: 1
      })),
      (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && a.audience && ["ALL"].includes(a.audience) || !(typeof a == "object" && a.audience))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.maximum_seller_allowed_price"
      })),
      (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.discounted_price || typeof a.discounted_price == "object" && (!a.discounted_price.schedule || typeof a.discounted_price.schedule == "object" && a.discounted_price.schedule.currency && ["JPY"].includes(a.discounted_price.schedule.currency))))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.discounted_price",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.discounted_price.schedule",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.discounted_price.schedule.value_with_tax",
          multipleOf: 1
      })),
      !e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && a.audience && ["ALL"].includes(a.audience) || !(typeof a == "object" && a.audience)) ? (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.discounted_price"
      })) : (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0
      }),
      i({
          name: "purchasable_offer.0.discounted_price",
          forbidden: !0,
          required: !1
      })),
      (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.quantity_discount_plan || typeof a.quantity_discount_plan == "object" && (!a.quantity_discount_plan.schedule || typeof a.quantity_discount_plan.schedule == "object" && (!a.quantity_discount_plan.schedule.levels || typeof a.quantity_discount_plan.schedule.levels == "object" && a.quantity_discount_plan.schedule.levels.currency && ["JPY"].includes(a.quantity_discount_plan.schedule.levels.currency)))))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.schedule",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.schedule.levels",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.quantity_discount_plan.schedule.levels.value",
          multipleOf: 1
      })),
      (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.variable_weight_based_price || typeof a.variable_weight_based_price == "object" && !a.variable_weight_based_price.variable_weight_based_price))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.average_size_measurement",
          required: !0
      })),
      !e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.variable_weight_based_price || typeof a.variable_weight_based_price == "object" && (!a.variable_weight_based_price.inventory_measurement || typeof a.variable_weight_based_price.inventory_measurement == "object" && !a.variable_weight_based_price.inventory_measurement.variable_weight_based_price))) ? (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.inventory_measurement",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.inventory_measurement.unit",
          options: ["grams", "kilograms", "ounces", "pounds"]
      })) : (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.variable_weight_based_price || typeof a.variable_weight_based_price == "object" && (!a.variable_weight_based_price.inventory_measurement || typeof a.variable_weight_based_price.inventory_measurement == "object" && !a.variable_weight_based_price.inventory_measurement.variable_weight_based_price)))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.inventory_measurement",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.inventory_measurement.unit",
          options: ["units"]
      })),
      !e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.variable_weight_based_price || typeof a.variable_weight_based_price == "object" && (!a.variable_weight_based_price.merchant_sale_measurement || typeof a.variable_weight_based_price.merchant_sale_measurement == "object" && !a.variable_weight_based_price.merchant_sale_measurement.variable_weight_based_price))) ? (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.unit",
          options: ["grams", "kilograms", "ounces", "pounds"]
      })) : (!e.purchasable_offer || Array.isArray(e.purchasable_offer) && e.purchasable_offer.every(a => typeof a == "object" && (!a.variable_weight_based_price || typeof a.variable_weight_based_price == "object" && (!a.variable_weight_based_price.merchant_sale_measurement || typeof a.variable_weight_based_price.merchant_sale_measurement == "object" && !a.variable_weight_based_price.merchant_sale_measurement.variable_weight_based_price)))) && (i({
          name: "purchasable_offer",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement",
          fieldType: "string"
      }),
      i({
          name: "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.unit",
          options: ["units"]
      })),
      (!e.list_price || Array.isArray(e.list_price) && e.list_price.every(a => typeof a == "object" && a.currency)) && (i({
          name: "list_price",
          fieldType: "string"
      }),
      i({
          name: "list_price.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "list_price.0.value",
          required: !0
      })),
      (!(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) || !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value)))) && i({
          name: "number_of_items",
          required: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["NUMBER_OF_ITEMS/STYLE_NAME", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "NUMBER_OF_ITEMS", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS", "COLOR_NAME/NUMBER_OF_ITEMS", "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER", "SIZE_NAME/NUMBER_OF_ITEMS", "ITEM_LENGTH_STRING/ITEM_WIDTH_STRING/NUMBER_OF_ITEMS"].includes(a.name)) && i({
          name: "number_of_items",
          required: !0,
          variation: !0
      }),
      typeof e == "object" && e.child_parent_sku_relationship && Array.isArray(e.child_parent_sku_relationship) && e.child_parent_sku_relationship.every(a => typeof a == "object" && a.parent_sku) && !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value))) && typeof e == "object" && e.variation_theme && Array.isArray(e.variation_theme) && e.variation_theme.some(a => typeof a == "object" && a.name && ["MODEL/STYLE_NAME/PART_NUMBER", "STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER", "MODEL/STYLE_NAME/SIZE_NAME/CAPACITY/NUMBER_OF_ITEMS/PART_NUMBER", "STYLE_NAME/MODEL/NUMBER_OF_ITEMS/PART_NUMBER"].includes(a.name)) && i({
          name: "part_number",
          required: !0,
          variation: !0
      }),
      (!(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) || !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value)))) && i({
          name: "part_number",
          required: !0
      }),
      (!(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) || !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value)))) && i({
          name: "automotive_fit_type",
          required: !0
      }),
      (!(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.every(a => typeof a == "object" && a.value)) || !(typeof e == "object" && e.parentage_level && Array.isArray(e.parentage_level) && e.parentage_level.some(a => typeof a == "object" && a.value && ["parent"].includes(a.value)))) && i({
          name: "automotive_fit_type",
          required: !0
      }),
      (!e.california_proposition_65 || Array.isArray(e.california_proposition_65) && e.california_proposition_65.every(a => typeof a == "object" && a.compliance_type && ["food", "furniture", "chemical"].includes(a.compliance_type))) && (i({
          name: "california_proposition_65",
          fieldType: "string"
      }),
      i({
          name: "california_proposition_65.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "california_proposition_65.0.chemical_names",
          required: !0
      })),
      !e.california_proposition_65 || Array.isArray(e.california_proposition_65) && e.california_proposition_65.every(a => typeof a == "object" && a.compliance_type && ["food", "furniture", "chemical"].includes(a.compliance_type)) ? (i({
          name: "california_proposition_65",
          fieldType: "string"
      }),
      i({
          name: "california_proposition_65.0",
          required: !0,
          fieldType: "string"
      }),
      i({
          name: "california_proposition_65.0.chemical_names"
      })) : (i({
          name: "california_proposition_65",
          fieldType: "string"
      }),
      i({
          name: "california_proposition_65.0",
          required: !0
      }),
      i({
          name: "california_proposition_65.0.chemical_names",
          forbidden: !0,
          required: !1
      }))
  }
    , Ee = {
      externally_assigned_product_identifier: ["merchant_suggested_asin.0.value", "merchant_suggested_asin", "parentage_level.0.value", "parentage_level", "supplier_declared_has_product_identifier_exemption.0.value", "supplier_declared_has_product_identifier_exemption"],
      merchant_suggested_asin: ["externally_assigned_product_identifier.0.value", "externally_assigned_product_identifier", "parentage_level.0.value", "parentage_level", "supplier_declared_has_product_identifier_exemption.0.value", "supplier_declared_has_product_identifier_exemption"],
      package_contains_sku: ["package_level.0.value", "package_level", "parentage_level.0.value", "parentage_level"],
      age_gender_category: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      included_components: ["parentage_level.0.value", "parentage_level"],
      is_assembly_required: ["parentage_level.0.value", "parentage_level"],
      manufacturer: ["parentage_level.0.value", "parentage_level"],
      required_product_compliance_certificate: ["parentage_level.0.value", "parentage_level"],
      warranty_description: ["parentage_level.0.value", "parentage_level"],
      fulfillment_availability: ["parentage_level.0.value", "parentage_level", "skip_offer.0.value", "skip_offer", "fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability.0.is_inventory_available", "fulfillment_availability", "fulfillment_availability.0.quantity"],
      purchasable_offer: ["purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer", "purchasable_offer.0.map_price.schedule.currency", "purchasable_offer.0.map_price.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.audience", "purchasable_offer.0.our_price.schedule.currency", "purchasable_offer.0.our_price.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.minimum_seller_allowed_price.schedule.currency", "purchasable_offer.0.minimum_seller_allowed_price.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.schedule.currency", "purchasable_offer.0.maximum_seller_allowed_price.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.schedule.currency", "purchasable_offer.0.discounted_price.schedule", "purchasable_offer.0.quantity_discount_plan.schedule.levels.currency", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan.schedule", "purchasable_offer.0.variable_weight_based_price.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price.inventory_measurement.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement"],
      "purchasable_offer.0.quantity_discount_plan": ["purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer", "purchasable_offer.0.quantity_discount_plan.schedule.levels.currency", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan.schedule"],
      "purchasable_offer.0.quantity_discount_plan.schedule": ["purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer", "purchasable_offer.0.quantity_discount_plan.schedule.levels.currency", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan.schedule"],
      "purchasable_offer.0.quantity_discount_plan.schedule.levels": ["purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer", "purchasable_offer.0.quantity_discount_plan.schedule.levels.currency", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan.schedule"],
      "purchasable_offer.0.quantity_discount_plan.schedule.levels.value": ["purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer", "purchasable_offer.0.quantity_discount_plan.schedule.levels.currency", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan.schedule"],
      condition_type: ["parentage_level.0.value", "parentage_level", "skip_offer.0.value", "skip_offer"],
      list_price: ["parentage_level.0.value", "parentage_level", "skip_offer.0.value", "skip_offer", "list_price.0.currency", "list_price"],
      merchant_shipping_group: ["fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability", "parentage_level.0.value", "parentage_level", "skip_offer.0.value", "skip_offer"],
      style: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      material: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      fabric_type: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      item_package_quantity: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      color: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      size: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      item_shape: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      fit_type: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      configuration: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      auto_part_position: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      capacity: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      lens: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      "lens.0.color": ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      item_display_dimensions: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      flavor: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      connectivity_technology: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      volume_capacity_name: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      customer_package_type: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      pattern: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      is_expiration_dated_product: ["fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability", "parentage_level.0.value", "parentage_level"],
      item_package_dimensions: ["fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability", "parentage_level.0.value", "parentage_level"],
      item_package_weight: ["fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability", "parentage_level.0.value", "parentage_level"],
      number_of_boxes: ["fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability", "parentage_level.0.value", "parentage_level"],
      unit_count: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      team_name: ["league_name.0.value", "league_name", "child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      "team_name.0.value": ["league_name.0.value", "league_name"],
      scent: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      hand_orientation: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      cup: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      "cup.0.size": ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      grip: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      "grip.0.size": ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      "grip.0.type": ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      grit: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      "grit.0.type": ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      length_range: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      matte_style: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      item_thickness: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      child_parent_sku_relationship: ["parentage_level.0.value", "parentage_level"],
      "child_parent_sku_relationship.0.parent_sku": ["parentage_level.0.value", "parentage_level"],
      variation_theme: ["child_parent_sku_relationship.0.child_relationship_type", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level"],
      supplier_declared_dg_hz_regulation: ["supplier_declared_dg_hz_regulation.0.value", "supplier_declared_dg_hz_regulation"],
      "supplier_declared_dg_hz_regulation.0.value": ["supplier_declared_dg_hz_regulation.0.value", "supplier_declared_dg_hz_regulation"],
      ghs: ["supplier_declared_dg_hz_regulation.0.value", "supplier_declared_dg_hz_regulation"],
      "ghs.0.classification": ["supplier_declared_dg_hz_regulation.0.value", "supplier_declared_dg_hz_regulation"],
      safety_data_sheet_url: ["supplier_declared_dg_hz_regulation.0.value", "supplier_declared_dg_hz_regulation"],
      hazmat: ["supplier_declared_dg_hz_regulation.0.value", "supplier_declared_dg_hz_regulation"],
      item_weight: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      legal_compliance_certifications: ["parentage_level.0.value", "parentage_level", "required_product_compliance_certificate.0.value", "required_product_compliance_certificate"],
      fcc_radio_frequency_emission_compliance: ["fcc_radio_frequency_emission_compliance.0.registration_status", "fcc_radio_frequency_emission_compliance"],
      "fcc_radio_frequency_emission_compliance.0.identification_number": ["fcc_radio_frequency_emission_compliance.0.registration_status", "fcc_radio_frequency_emission_compliance"],
      "fcc_radio_frequency_emission_compliance.0.point_of_contact_address": ["fcc_radio_frequency_emission_compliance.0.registration_status", "fcc_radio_frequency_emission_compliance"],
      "fcc_radio_frequency_emission_compliance.0.point_of_contact_email": ["fcc_radio_frequency_emission_compliance.0.registration_status", "fcc_radio_frequency_emission_compliance"],
      "fcc_radio_frequency_emission_compliance.0.point_of_contact_name": ["fcc_radio_frequency_emission_compliance.0.registration_status", "fcc_radio_frequency_emission_compliance"],
      "fcc_radio_frequency_emission_compliance.0.point_of_contact_phone_number": ["fcc_radio_frequency_emission_compliance.0.registration_status", "fcc_radio_frequency_emission_compliance"],
      item_dimensions_fraction: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      item_dimensions: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      item_display_weight: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      model_number: ["parentage_level.0.value", "parentage_level", "child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "variation_theme.0.name", "variation_theme"],
      model_name: ["parentage_level.0.value", "parentage_level", "child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "variation_theme.0.name", "variation_theme"],
      "fulfillment_availability.0.quantity": ["fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability.0.is_inventory_available", "fulfillment_availability"],
      "fulfillment_availability.0.lead_time_to_ship_max_days": ["fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability"],
      "fulfillment_availability.0.restock_date": ["fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability"],
      "fulfillment_availability.0.is_inventory_available": ["fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability.0.quantity", "fulfillment_availability"],
      "purchasable_offer.0.map_price": ["purchasable_offer.0.map_price.schedule.currency", "purchasable_offer.0.map_price.schedule", "purchasable_offer.0.map_price", "purchasable_offer", "purchasable_offer.0.audience"],
      "purchasable_offer.0.map_price.schedule": ["purchasable_offer.0.map_price.schedule.currency", "purchasable_offer.0.map_price.schedule", "purchasable_offer.0.map_price", "purchasable_offer"],
      "purchasable_offer.0.map_price.schedule.value_with_tax": ["purchasable_offer.0.map_price.schedule.currency", "purchasable_offer.0.map_price.schedule", "purchasable_offer.0.map_price", "purchasable_offer"],
      "purchasable_offer.0.our_price": ["purchasable_offer.0.our_price.schedule.currency", "purchasable_offer.0.our_price.schedule", "purchasable_offer.0.our_price", "purchasable_offer", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price"],
      "purchasable_offer.0.our_price.schedule": ["purchasable_offer.0.our_price.schedule.currency", "purchasable_offer.0.our_price.schedule", "purchasable_offer.0.our_price", "purchasable_offer"],
      "purchasable_offer.0.our_price.schedule.value_with_tax": ["purchasable_offer.0.our_price.schedule.currency", "purchasable_offer.0.our_price.schedule", "purchasable_offer.0.our_price", "purchasable_offer"],
      "purchasable_offer.0.automated_pricing_merchandising_rule_plan": ["purchasable_offer.0.audience", "purchasable_offer"],
      "purchasable_offer.0.minimum_seller_allowed_price": ["purchasable_offer.0.minimum_seller_allowed_price.schedule.currency", "purchasable_offer.0.minimum_seller_allowed_price.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer", "purchasable_offer.0.audience"],
      "purchasable_offer.0.minimum_seller_allowed_price.schedule": ["purchasable_offer.0.minimum_seller_allowed_price.schedule.currency", "purchasable_offer.0.minimum_seller_allowed_price.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer"],
      "purchasable_offer.0.minimum_seller_allowed_price.schedule.value_with_tax": ["purchasable_offer.0.minimum_seller_allowed_price.schedule.currency", "purchasable_offer.0.minimum_seller_allowed_price.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer"],
      "purchasable_offer.0.maximum_seller_allowed_price": ["purchasable_offer.0.maximum_seller_allowed_price.schedule.currency", "purchasable_offer.0.maximum_seller_allowed_price.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer", "purchasable_offer.0.audience"],
      "purchasable_offer.0.maximum_seller_allowed_price.schedule": ["purchasable_offer.0.maximum_seller_allowed_price.schedule.currency", "purchasable_offer.0.maximum_seller_allowed_price.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer"],
      "purchasable_offer.0.maximum_seller_allowed_price.schedule.value_with_tax": ["purchasable_offer.0.maximum_seller_allowed_price.schedule.currency", "purchasable_offer.0.maximum_seller_allowed_price.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer"],
      "purchasable_offer.0.discounted_price": ["purchasable_offer.0.discounted_price.schedule.currency", "purchasable_offer.0.discounted_price.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer", "purchasable_offer.0.audience"],
      "purchasable_offer.0.discounted_price.schedule": ["purchasable_offer.0.discounted_price.schedule.currency", "purchasable_offer.0.discounted_price.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer"],
      "purchasable_offer.0.discounted_price.schedule.value_with_tax": ["purchasable_offer.0.discounted_price.schedule.currency", "purchasable_offer.0.discounted_price.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer"],
      "purchasable_offer.0.variable_weight_based_price": ["purchasable_offer.0.variable_weight_based_price.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer", "purchasable_offer.0.variable_weight_based_price.inventory_measurement.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement"],
      "purchasable_offer.0.variable_weight_based_price.average_size_measurement": ["purchasable_offer.0.variable_weight_based_price.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer"],
      "purchasable_offer.0.variable_weight_based_price.inventory_measurement": ["purchasable_offer.0.variable_weight_based_price.inventory_measurement.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price.inventory_measurement", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer"],
      "purchasable_offer.0.variable_weight_based_price.inventory_measurement.unit": ["purchasable_offer.0.variable_weight_based_price.inventory_measurement.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price.inventory_measurement", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer"],
      "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement": ["purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer"],
      "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.unit": ["purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.variable_weight_based_price", "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer"],
      "list_price.0.value": ["list_price.0.currency", "list_price"],
      number_of_items: ["parentage_level.0.value", "parentage_level", "child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "variation_theme.0.name", "variation_theme"],
      part_number: ["child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "parentage_level.0.value", "parentage_level", "variation_theme.0.name", "variation_theme"],
      automotive_fit_type: ["parentage_level.0.value", "parentage_level"],
      california_proposition_65: ["california_proposition_65.0.compliance_type", "california_proposition_65"],
      "california_proposition_65.0.chemical_names": ["california_proposition_65.0.compliance_type", "california_proposition_65"]
  }
    , Ae = {
      california_proposition_65: ["california_proposition_65.0.chemical_names", "california_proposition_65.0.compliance_type", "california_proposition_65.0.marketplace_id"],
      "california_proposition_65.0.compliance_type": ["california_proposition_65.0.chemical_names", "california_proposition_65", "california_proposition_65.0.marketplace_id"],
      child_parent_sku_relationship: ["volume_capacity_name", "variation_theme", "unit_count", "team_name", "style", "size", "scent", "pattern", "part_number", "number_of_items", "model_number", "model_name", "matte_style", "material", "lens.0.color", "lens", "length_range", "item_weight", "item_thickness", "item_shape", "item_package_quantity", "item_display_weight", "item_display_dimensions", "item_dimensions_fraction", "item_dimensions", "hand_orientation", "grit.0.type", "grit", "grip.0.type", "grip.0.size", "grip", "flavor", "fit_type", "fabric_type", "customer_package_type", "cup.0.size", "cup", "connectivity_technology", "configuration", "color", "capacity", "auto_part_position", "age_gender_category", "age_gender_category.0.value", "age_gender_category.0.language_tag", "age_gender_category.0.marketplace_id", "auto_part_position.0.value", "auto_part_position.0.marketplace_id", "capacity.0.value", "capacity.0.unit", "capacity.0.marketplace_id", "color.0.value", "color.0.language_tag", "color.0.marketplace_id", "configuration.0.value", "configuration.0.language_tag", "configuration.0.marketplace_id", "connectivity_technology.0.value", "connectivity_technology.0.language_tag", "connectivity_technology.0.marketplace_id", "cup.0.marketplace_id", "cup.0.size.0.value", "cup.0.size.0.language_tag", "customer_package_type.0.value", "customer_package_type.0.language_tag", "customer_package_type.0.marketplace_id", "fabric_type.0.value", "fabric_type.0.language_tag", "fabric_type.0.marketplace_id", "fit_type.0.value", "fit_type.0.language_tag", "fit_type.0.marketplace_id", "flavor.0.value", "flavor.0.language_tag", "flavor.0.marketplace_id", "grip.0.marketplace_id", "grip.0.size.0.value", "grip.0.size.0.language_tag", "grip.0.type.0.value", "grip.0.type.0.language_tag", "grit.0.marketplace_id", "grit.0.type.0.value", "grit.0.type.0.language_tag", "hand_orientation.0.value", "hand_orientation.0.language_tag", "hand_orientation.0.marketplace_id", "item_dimensions.0.length.value", "item_dimensions.0.length.unit", "item_dimensions.0.length", "item_dimensions.0.width.value", "item_dimensions.0.width.unit", "item_dimensions.0.width", "item_dimensions.0.height.value", "item_dimensions.0.height.unit", "item_dimensions.0.height", "item_dimensions.0.marketplace_id", "item_dimensions_fraction.0.height.decimal_value", "item_dimensions_fraction.0.height.unit", "item_dimensions_fraction.0.height", "item_dimensions_fraction.0.length.decimal_value", "item_dimensions_fraction.0.length.unit", "item_dimensions_fraction.0.length", "item_dimensions_fraction.0.width.decimal_value", "item_dimensions_fraction.0.width.unit", "item_dimensions_fraction.0.width", "item_dimensions_fraction.0.marketplace_id", "item_display_dimensions.0.depth.value", "item_display_dimensions.0.depth.unit", "item_display_dimensions.0.depth", "item_display_dimensions.0.diameter.value", "item_display_dimensions.0.diameter.unit", "item_display_dimensions.0.diameter", "item_display_dimensions.0.height.value", "item_display_dimensions.0.height.unit", "item_display_dimensions.0.height", "item_display_dimensions.0.length.value", "item_display_dimensions.0.length.unit", "item_display_dimensions.0.length", "item_display_dimensions.0.marketplace_id", "item_display_dimensions.0.width.value", "item_display_dimensions.0.width.unit", "item_display_dimensions.0.width", "item_display_weight.0.value", "item_display_weight.0.unit", "item_display_weight.0.marketplace_id", "item_package_quantity.0.value", "item_package_quantity.0.marketplace_id", "item_shape.0.value", "item_shape.0.language_tag", "item_shape.0.marketplace_id", "item_thickness.0.decimal_value", "item_thickness.0.marketplace_id", "item_thickness.0.unit", "item_weight.0.value", "item_weight.0.unit", "item_weight.0.marketplace_id", "length_range.0.value", "length_range.0.language_tag", "length_range.0.marketplace_id", "lens.0.color.0.value", "lens.0.color.0.language_tag", "lens.0.marketplace_id", "material.0.value", "material.0.language_tag", "material.0.marketplace_id", "matte_style.0.value", "matte_style.0.language_tag", "matte_style.0.marketplace_id", "model_name.0.value", "model_name.0.language_tag", "model_name.0.marketplace_id", "model_number.0.value", "model_number.0.marketplace_id", "number_of_items.0.value", "number_of_items.0.marketplace_id", "part_number.0.value", "part_number.0.marketplace_id", "pattern.0.value", "pattern.0.language_tag", "pattern.0.marketplace_id", "scent.0.value", "scent.0.language_tag", "scent.0.marketplace_id", "size.0.value", "size.0.language_tag", "size.0.marketplace_id", "style.0.value", "style.0.language_tag", "style.0.marketplace_id", "team_name.0.value", "team_name.0.language_tag", "team_name.0.marketplace_id", "unit_count.0.value", "unit_count.0.type.value", "unit_count.0.type.language_tag", "unit_count.0.type", "unit_count.0.marketplace_id", "variation_theme.0.name", "volume_capacity_name.0.value", "volume_capacity_name.0.unit", "volume_capacity_name.0.language_tag", "volume_capacity_name.0.marketplace_id"],
      "child_parent_sku_relationship.0.child_relationship_type": ["variation_theme", "variation_theme.0.name"],
      "child_parent_sku_relationship.0.parent_sku": ["volume_capacity_name", "unit_count", "team_name", "style", "size", "scent", "pattern", "part_number", "number_of_items", "model_number", "model_name", "matte_style", "material", "lens.0.color", "lens", "length_range", "item_weight", "item_thickness", "item_shape", "item_package_quantity", "item_display_weight", "item_display_dimensions", "item_dimensions_fraction", "item_dimensions", "hand_orientation", "grit.0.type", "grit", "grip.0.type", "grip.0.size", "grip", "flavor", "fit_type", "fabric_type", "customer_package_type", "cup.0.size", "cup", "connectivity_technology", "configuration", "color", "capacity", "auto_part_position", "age_gender_category", "age_gender_category.0.value", "age_gender_category.0.language_tag", "age_gender_category.0.marketplace_id", "auto_part_position.0.value", "auto_part_position.0.marketplace_id", "capacity.0.value", "capacity.0.unit", "capacity.0.marketplace_id", "color.0.value", "color.0.language_tag", "color.0.marketplace_id", "configuration.0.value", "configuration.0.language_tag", "configuration.0.marketplace_id", "connectivity_technology.0.value", "connectivity_technology.0.language_tag", "connectivity_technology.0.marketplace_id", "cup.0.marketplace_id", "cup.0.size.0.value", "cup.0.size.0.language_tag", "customer_package_type.0.value", "customer_package_type.0.language_tag", "customer_package_type.0.marketplace_id", "fabric_type.0.value", "fabric_type.0.language_tag", "fabric_type.0.marketplace_id", "fit_type.0.value", "fit_type.0.language_tag", "fit_type.0.marketplace_id", "flavor.0.value", "flavor.0.language_tag", "flavor.0.marketplace_id", "grip.0.marketplace_id", "grip.0.size.0.value", "grip.0.size.0.language_tag", "grip.0.type.0.value", "grip.0.type.0.language_tag", "grit.0.marketplace_id", "grit.0.type.0.value", "grit.0.type.0.language_tag", "hand_orientation.0.value", "hand_orientation.0.language_tag", "hand_orientation.0.marketplace_id", "item_dimensions.0.length.value", "item_dimensions.0.length.unit", "item_dimensions.0.length", "item_dimensions.0.width.value", "item_dimensions.0.width.unit", "item_dimensions.0.width", "item_dimensions.0.height.value", "item_dimensions.0.height.unit", "item_dimensions.0.height", "item_dimensions.0.marketplace_id", "item_dimensions_fraction.0.height.decimal_value", "item_dimensions_fraction.0.height.unit", "item_dimensions_fraction.0.height", "item_dimensions_fraction.0.length.decimal_value", "item_dimensions_fraction.0.length.unit", "item_dimensions_fraction.0.length", "item_dimensions_fraction.0.width.decimal_value", "item_dimensions_fraction.0.width.unit", "item_dimensions_fraction.0.width", "item_dimensions_fraction.0.marketplace_id", "item_display_dimensions.0.depth.value", "item_display_dimensions.0.depth.unit", "item_display_dimensions.0.depth", "item_display_dimensions.0.diameter.value", "item_display_dimensions.0.diameter.unit", "item_display_dimensions.0.diameter", "item_display_dimensions.0.height.value", "item_display_dimensions.0.height.unit", "item_display_dimensions.0.height", "item_display_dimensions.0.length.value", "item_display_dimensions.0.length.unit", "item_display_dimensions.0.length", "item_display_dimensions.0.marketplace_id", "item_display_dimensions.0.width.value", "item_display_dimensions.0.width.unit", "item_display_dimensions.0.width", "item_display_weight.0.value", "item_display_weight.0.unit", "item_display_weight.0.marketplace_id", "item_package_quantity.0.value", "item_package_quantity.0.marketplace_id", "item_shape.0.value", "item_shape.0.language_tag", "item_shape.0.marketplace_id", "item_thickness.0.decimal_value", "item_thickness.0.marketplace_id", "item_thickness.0.unit", "item_weight.0.value", "item_weight.0.unit", "item_weight.0.marketplace_id", "length_range.0.value", "length_range.0.language_tag", "length_range.0.marketplace_id", "lens.0.color.0.value", "lens.0.color.0.language_tag", "lens.0.marketplace_id", "material.0.value", "material.0.language_tag", "material.0.marketplace_id", "matte_style.0.value", "matte_style.0.language_tag", "matte_style.0.marketplace_id", "model_name.0.value", "model_name.0.language_tag", "model_name.0.marketplace_id", "model_number.0.value", "model_number.0.marketplace_id", "number_of_items.0.value", "number_of_items.0.marketplace_id", "part_number.0.value", "part_number.0.marketplace_id", "pattern.0.value", "pattern.0.language_tag", "pattern.0.marketplace_id", "scent.0.value", "scent.0.language_tag", "scent.0.marketplace_id", "size.0.value", "size.0.language_tag", "size.0.marketplace_id", "style.0.value", "style.0.language_tag", "style.0.marketplace_id", "team_name.0.value", "team_name.0.language_tag", "team_name.0.marketplace_id", "unit_count.0.value", "unit_count.0.type.value", "unit_count.0.type.language_tag", "unit_count.0.type", "unit_count.0.marketplace_id", "volume_capacity_name.0.value", "volume_capacity_name.0.unit", "volume_capacity_name.0.language_tag", "volume_capacity_name.0.marketplace_id"],
      externally_assigned_product_identifier: ["merchant_suggested_asin", "merchant_suggested_asin.0.value", "merchant_suggested_asin.0.marketplace_id"],
      "externally_assigned_product_identifier.0.value": ["merchant_suggested_asin", "merchant_suggested_asin.0.value", "merchant_suggested_asin.0.marketplace_id"],
      fcc_radio_frequency_emission_compliance: ["fcc_radio_frequency_emission_compliance.0.point_of_contact_phone_number", "fcc_radio_frequency_emission_compliance.0.point_of_contact_name", "fcc_radio_frequency_emission_compliance.0.point_of_contact_email", "fcc_radio_frequency_emission_compliance.0.point_of_contact_address", "fcc_radio_frequency_emission_compliance.0.identification_number", "fcc_radio_frequency_emission_compliance.0.registration_status", "fcc_radio_frequency_emission_compliance.0.marketplace_id"],
      "fcc_radio_frequency_emission_compliance.0.registration_status": ["fcc_radio_frequency_emission_compliance.0.point_of_contact_phone_number", "fcc_radio_frequency_emission_compliance.0.point_of_contact_name", "fcc_radio_frequency_emission_compliance.0.point_of_contact_email", "fcc_radio_frequency_emission_compliance.0.point_of_contact_address", "fcc_radio_frequency_emission_compliance.0.identification_number", "fcc_radio_frequency_emission_compliance", "fcc_radio_frequency_emission_compliance.0.marketplace_id"],
      fulfillment_availability: ["number_of_boxes", "merchant_shipping_group", "item_package_weight", "item_package_dimensions", "is_expiration_dated_product", "fulfillment_availability.0.restock_date", "fulfillment_availability.0.quantity", "fulfillment_availability.0.lead_time_to_ship_max_days", "fulfillment_availability.0.is_inventory_available", "fulfillment_availability.0.fulfillment_channel_code", "is_expiration_dated_product.0.value", "is_expiration_dated_product.0.marketplace_id", "item_package_dimensions.0.length.value", "item_package_dimensions.0.length.unit", "item_package_dimensions.0.length", "item_package_dimensions.0.width.value", "item_package_dimensions.0.width.unit", "item_package_dimensions.0.width", "item_package_dimensions.0.height.value", "item_package_dimensions.0.height.unit", "item_package_dimensions.0.height", "item_package_dimensions.0.marketplace_id", "item_package_weight.0.value", "item_package_weight.0.unit", "item_package_weight.0.marketplace_id", "merchant_shipping_group.0.value", "merchant_shipping_group.0.marketplace_id", "number_of_boxes.0.value", "number_of_boxes.0.marketplace_id"],
      "fulfillment_availability.0.fulfillment_channel_code": ["number_of_boxes", "merchant_shipping_group", "item_package_weight", "item_package_dimensions", "is_expiration_dated_product", "fulfillment_availability.0.restock_date", "fulfillment_availability.0.quantity", "fulfillment_availability.0.lead_time_to_ship_max_days", "fulfillment_availability.0.is_inventory_available", "fulfillment_availability", "is_expiration_dated_product.0.value", "is_expiration_dated_product.0.marketplace_id", "item_package_dimensions.0.length.value", "item_package_dimensions.0.length.unit", "item_package_dimensions.0.length", "item_package_dimensions.0.width.value", "item_package_dimensions.0.width.unit", "item_package_dimensions.0.width", "item_package_dimensions.0.height.value", "item_package_dimensions.0.height.unit", "item_package_dimensions.0.height", "item_package_dimensions.0.marketplace_id", "item_package_weight.0.value", "item_package_weight.0.unit", "item_package_weight.0.marketplace_id", "merchant_shipping_group.0.value", "merchant_shipping_group.0.marketplace_id", "number_of_boxes.0.value", "number_of_boxes.0.marketplace_id"],
      "fulfillment_availability.0.is_inventory_available": ["fulfillment_availability.0.quantity", "fulfillment_availability", "fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability.0.lead_time_to_ship_max_days", "fulfillment_availability.0.restock_date"],
      "fulfillment_availability.0.quantity": ["fulfillment_availability.0.is_inventory_available", "fulfillment_availability", "fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability.0.lead_time_to_ship_max_days", "fulfillment_availability.0.restock_date"],
      league_name: ["team_name.0.value", "team_name", "team_name.0.language_tag", "team_name.0.marketplace_id"],
      "league_name.0.value": ["team_name.0.value", "team_name", "team_name.0.language_tag", "team_name.0.marketplace_id"],
      list_price: ["list_price.0.value", "list_price.0.currency", "list_price.0.marketplace_id"],
      "list_price.0.currency": ["list_price.0.value", "list_price", "list_price.0.marketplace_id"],
      merchant_suggested_asin: ["externally_assigned_product_identifier", "externally_assigned_product_identifier.0.type", "externally_assigned_product_identifier.0.value", "externally_assigned_product_identifier.0.marketplace_id"],
      "merchant_suggested_asin.0.value": ["externally_assigned_product_identifier", "externally_assigned_product_identifier.0.type", "externally_assigned_product_identifier.0.value", "externally_assigned_product_identifier.0.marketplace_id"],
      package_level: ["package_contains_sku", "package_contains_sku.0.marketplace_id", "package_contains_sku.0.quantity", "package_contains_sku.0.sku"],
      "package_level.0.value": ["package_contains_sku", "package_contains_sku.0.marketplace_id", "package_contains_sku.0.quantity", "package_contains_sku.0.sku"],
      parentage_level: ["warranty_description", "volume_capacity_name", "variation_theme", "unit_count", "team_name", "style", "size", "scent", "required_product_compliance_certificate", "pattern", "part_number", "package_contains_sku", "number_of_items", "number_of_boxes", "model_number", "model_name", "merchant_suggested_asin", "merchant_shipping_group", "matte_style", "material", "manufacturer", "list_price", "lens.0.color", "lens", "length_range", "legal_compliance_certifications", "item_weight", "item_thickness", "item_shape", "item_package_weight", "item_package_quantity", "item_package_dimensions", "item_display_weight", "item_display_dimensions", "item_dimensions_fraction", "item_dimensions", "is_expiration_dated_product", "is_assembly_required", "included_components", "hand_orientation", "grit.0.type", "grit", "grip.0.type", "grip.0.size", "grip", "fulfillment_availability", "flavor", "fit_type", "fabric_type", "externally_assigned_product_identifier", "customer_package_type", "cup.0.size", "cup", "connectivity_technology", "configuration", "condition_type", "color", "child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "capacity", "automotive_fit_type", "auto_part_position", "age_gender_category", "age_gender_category.0.value", "age_gender_category.0.language_tag", "age_gender_category.0.marketplace_id", "auto_part_position.0.value", "auto_part_position.0.marketplace_id", "automotive_fit_type.0.value", "automotive_fit_type.0.marketplace_id", "capacity.0.value", "capacity.0.unit", "capacity.0.marketplace_id", "child_parent_sku_relationship.0.child_relationship_type", "child_parent_sku_relationship.0.marketplace_id", "color.0.value", "color.0.language_tag", "color.0.marketplace_id", "condition_type.0.value", "condition_type.0.marketplace_id", "configuration.0.value", "configuration.0.language_tag", "configuration.0.marketplace_id", "connectivity_technology.0.value", "connectivity_technology.0.language_tag", "connectivity_technology.0.marketplace_id", "cup.0.marketplace_id", "cup.0.size.0.value", "cup.0.size.0.language_tag", "customer_package_type.0.value", "customer_package_type.0.language_tag", "customer_package_type.0.marketplace_id", "externally_assigned_product_identifier.0.type", "externally_assigned_product_identifier.0.value", "externally_assigned_product_identifier.0.marketplace_id", "fabric_type.0.value", "fabric_type.0.language_tag", "fabric_type.0.marketplace_id", "fit_type.0.value", "fit_type.0.language_tag", "fit_type.0.marketplace_id", "flavor.0.value", "flavor.0.language_tag", "flavor.0.marketplace_id", "fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability.0.quantity", "fulfillment_availability.0.lead_time_to_ship_max_days", "fulfillment_availability.0.restock_date", "fulfillment_availability.0.is_inventory_available", "grip.0.marketplace_id", "grip.0.size.0.value", "grip.0.size.0.language_tag", "grip.0.type.0.value", "grip.0.type.0.language_tag", "grit.0.marketplace_id", "grit.0.type.0.value", "grit.0.type.0.language_tag", "hand_orientation.0.value", "hand_orientation.0.language_tag", "hand_orientation.0.marketplace_id", "included_components.0.value", "included_components.0.language_tag", "included_components.0.marketplace_id", "is_assembly_required.0.value", "is_assembly_required.0.marketplace_id", "is_expiration_dated_product.0.value", "is_expiration_dated_product.0.marketplace_id", "item_dimensions.0.length.value", "item_dimensions.0.length.unit", "item_dimensions.0.length", "item_dimensions.0.width.value", "item_dimensions.0.width.unit", "item_dimensions.0.width", "item_dimensions.0.height.value", "item_dimensions.0.height.unit", "item_dimensions.0.height", "item_dimensions.0.marketplace_id", "item_dimensions_fraction.0.height.decimal_value", "item_dimensions_fraction.0.height.unit", "item_dimensions_fraction.0.height", "item_dimensions_fraction.0.length.decimal_value", "item_dimensions_fraction.0.length.unit", "item_dimensions_fraction.0.length", "item_dimensions_fraction.0.width.decimal_value", "item_dimensions_fraction.0.width.unit", "item_dimensions_fraction.0.width", "item_dimensions_fraction.0.marketplace_id", "item_display_dimensions.0.depth.value", "item_display_dimensions.0.depth.unit", "item_display_dimensions.0.depth", "item_display_dimensions.0.diameter.value", "item_display_dimensions.0.diameter.unit", "item_display_dimensions.0.diameter", "item_display_dimensions.0.height.value", "item_display_dimensions.0.height.unit", "item_display_dimensions.0.height", "item_display_dimensions.0.length.value", "item_display_dimensions.0.length.unit", "item_display_dimensions.0.length", "item_display_dimensions.0.marketplace_id", "item_display_dimensions.0.width.value", "item_display_dimensions.0.width.unit", "item_display_dimensions.0.width", "item_display_weight.0.value", "item_display_weight.0.unit", "item_display_weight.0.marketplace_id", "item_package_dimensions.0.length.value", "item_package_dimensions.0.length.unit", "item_package_dimensions.0.length", "item_package_dimensions.0.width.value", "item_package_dimensions.0.width.unit", "item_package_dimensions.0.width", "item_package_dimensions.0.height.value", "item_package_dimensions.0.height.unit", "item_package_dimensions.0.height", "item_package_dimensions.0.marketplace_id", "item_package_quantity.0.value", "item_package_quantity.0.marketplace_id", "item_package_weight.0.value", "item_package_weight.0.unit", "item_package_weight.0.marketplace_id", "item_shape.0.value", "item_shape.0.language_tag", "item_shape.0.marketplace_id", "item_thickness.0.decimal_value", "item_thickness.0.marketplace_id", "item_thickness.0.unit", "item_weight.0.value", "item_weight.0.unit", "item_weight.0.marketplace_id", "legal_compliance_certifications.0.regulatory_organization_name", "legal_compliance_certifications.0.certification_status", "legal_compliance_certifications.0.value", "legal_compliance_certifications.0.language_tag", "legal_compliance_certifications.0.marketplace_id", "length_range.0.value", "length_range.0.language_tag", "length_range.0.marketplace_id", "lens.0.color.0.value", "lens.0.color.0.language_tag", "lens.0.marketplace_id", "list_price.0.value", "list_price.0.currency", "list_price.0.marketplace_id", "manufacturer.0.value", "manufacturer.0.language_tag", "manufacturer.0.marketplace_id", "material.0.value", "material.0.language_tag", "material.0.marketplace_id", "matte_style.0.value", "matte_style.0.language_tag", "matte_style.0.marketplace_id", "merchant_shipping_group.0.value", "merchant_shipping_group.0.marketplace_id", "merchant_suggested_asin.0.value", "merchant_suggested_asin.0.marketplace_id", "model_name.0.value", "model_name.0.language_tag", "model_name.0.marketplace_id", "model_number.0.value", "model_number.0.marketplace_id", "number_of_boxes.0.value", "number_of_boxes.0.marketplace_id", "number_of_items.0.value", "number_of_items.0.marketplace_id", "package_contains_sku.0.marketplace_id", "package_contains_sku.0.quantity", "package_contains_sku.0.sku", "part_number.0.value", "part_number.0.marketplace_id", "pattern.0.value", "pattern.0.language_tag", "pattern.0.marketplace_id", "required_product_compliance_certificate.0.value", "required_product_compliance_certificate.0.marketplace_id", "scent.0.value", "scent.0.language_tag", "scent.0.marketplace_id", "size.0.value", "size.0.language_tag", "size.0.marketplace_id", "style.0.value", "style.0.language_tag", "style.0.marketplace_id", "team_name.0.value", "team_name.0.language_tag", "team_name.0.marketplace_id", "unit_count.0.value", "unit_count.0.type.value", "unit_count.0.type.language_tag", "unit_count.0.type", "unit_count.0.marketplace_id", "variation_theme.0.name", "volume_capacity_name.0.value", "volume_capacity_name.0.unit", "volume_capacity_name.0.language_tag", "volume_capacity_name.0.marketplace_id", "warranty_description.0.value", "warranty_description.0.language_tag", "warranty_description.0.marketplace_id"],
      "parentage_level.0.value": ["warranty_description", "volume_capacity_name", "variation_theme", "unit_count", "team_name", "style", "size", "scent", "required_product_compliance_certificate", "pattern", "part_number", "package_contains_sku", "number_of_items", "number_of_boxes", "model_number", "model_name", "merchant_suggested_asin", "merchant_shipping_group", "matte_style", "material", "manufacturer", "list_price", "lens.0.color", "lens", "length_range", "legal_compliance_certifications", "item_weight", "item_thickness", "item_shape", "item_package_weight", "item_package_quantity", "item_package_dimensions", "item_display_weight", "item_display_dimensions", "item_dimensions_fraction", "item_dimensions", "is_expiration_dated_product", "is_assembly_required", "included_components", "hand_orientation", "grit.0.type", "grit", "grip.0.type", "grip.0.size", "grip", "fulfillment_availability", "flavor", "fit_type", "fabric_type", "externally_assigned_product_identifier", "customer_package_type", "cup.0.size", "cup", "connectivity_technology", "configuration", "condition_type", "color", "child_parent_sku_relationship.0.parent_sku", "child_parent_sku_relationship", "capacity", "automotive_fit_type", "auto_part_position", "age_gender_category", "age_gender_category.0.value", "age_gender_category.0.language_tag", "age_gender_category.0.marketplace_id", "auto_part_position.0.value", "auto_part_position.0.marketplace_id", "automotive_fit_type.0.value", "automotive_fit_type.0.marketplace_id", "capacity.0.value", "capacity.0.unit", "capacity.0.marketplace_id", "child_parent_sku_relationship.0.child_relationship_type", "child_parent_sku_relationship.0.marketplace_id", "color.0.value", "color.0.language_tag", "color.0.marketplace_id", "condition_type.0.value", "condition_type.0.marketplace_id", "configuration.0.value", "configuration.0.language_tag", "configuration.0.marketplace_id", "connectivity_technology.0.value", "connectivity_technology.0.language_tag", "connectivity_technology.0.marketplace_id", "cup.0.marketplace_id", "cup.0.size.0.value", "cup.0.size.0.language_tag", "customer_package_type.0.value", "customer_package_type.0.language_tag", "customer_package_type.0.marketplace_id", "externally_assigned_product_identifier.0.type", "externally_assigned_product_identifier.0.value", "externally_assigned_product_identifier.0.marketplace_id", "fabric_type.0.value", "fabric_type.0.language_tag", "fabric_type.0.marketplace_id", "fit_type.0.value", "fit_type.0.language_tag", "fit_type.0.marketplace_id", "flavor.0.value", "flavor.0.language_tag", "flavor.0.marketplace_id", "fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability.0.quantity", "fulfillment_availability.0.lead_time_to_ship_max_days", "fulfillment_availability.0.restock_date", "fulfillment_availability.0.is_inventory_available", "grip.0.marketplace_id", "grip.0.size.0.value", "grip.0.size.0.language_tag", "grip.0.type.0.value", "grip.0.type.0.language_tag", "grit.0.marketplace_id", "grit.0.type.0.value", "grit.0.type.0.language_tag", "hand_orientation.0.value", "hand_orientation.0.language_tag", "hand_orientation.0.marketplace_id", "included_components.0.value", "included_components.0.language_tag", "included_components.0.marketplace_id", "is_assembly_required.0.value", "is_assembly_required.0.marketplace_id", "is_expiration_dated_product.0.value", "is_expiration_dated_product.0.marketplace_id", "item_dimensions.0.length.value", "item_dimensions.0.length.unit", "item_dimensions.0.length", "item_dimensions.0.width.value", "item_dimensions.0.width.unit", "item_dimensions.0.width", "item_dimensions.0.height.value", "item_dimensions.0.height.unit", "item_dimensions.0.height", "item_dimensions.0.marketplace_id", "item_dimensions_fraction.0.height.decimal_value", "item_dimensions_fraction.0.height.unit", "item_dimensions_fraction.0.height", "item_dimensions_fraction.0.length.decimal_value", "item_dimensions_fraction.0.length.unit", "item_dimensions_fraction.0.length", "item_dimensions_fraction.0.width.decimal_value", "item_dimensions_fraction.0.width.unit", "item_dimensions_fraction.0.width", "item_dimensions_fraction.0.marketplace_id", "item_display_dimensions.0.depth.value", "item_display_dimensions.0.depth.unit", "item_display_dimensions.0.depth", "item_display_dimensions.0.diameter.value", "item_display_dimensions.0.diameter.unit", "item_display_dimensions.0.diameter", "item_display_dimensions.0.height.value", "item_display_dimensions.0.height.unit", "item_display_dimensions.0.height", "item_display_dimensions.0.length.value", "item_display_dimensions.0.length.unit", "item_display_dimensions.0.length", "item_display_dimensions.0.marketplace_id", "item_display_dimensions.0.width.value", "item_display_dimensions.0.width.unit", "item_display_dimensions.0.width", "item_display_weight.0.value", "item_display_weight.0.unit", "item_display_weight.0.marketplace_id", "item_package_dimensions.0.length.value", "item_package_dimensions.0.length.unit", "item_package_dimensions.0.length", "item_package_dimensions.0.width.value", "item_package_dimensions.0.width.unit", "item_package_dimensions.0.width", "item_package_dimensions.0.height.value", "item_package_dimensions.0.height.unit", "item_package_dimensions.0.height", "item_package_dimensions.0.marketplace_id", "item_package_quantity.0.value", "item_package_quantity.0.marketplace_id", "item_package_weight.0.value", "item_package_weight.0.unit", "item_package_weight.0.marketplace_id", "item_shape.0.value", "item_shape.0.language_tag", "item_shape.0.marketplace_id", "item_thickness.0.decimal_value", "item_thickness.0.marketplace_id", "item_thickness.0.unit", "item_weight.0.value", "item_weight.0.unit", "item_weight.0.marketplace_id", "legal_compliance_certifications.0.regulatory_organization_name", "legal_compliance_certifications.0.certification_status", "legal_compliance_certifications.0.value", "legal_compliance_certifications.0.language_tag", "legal_compliance_certifications.0.marketplace_id", "length_range.0.value", "length_range.0.language_tag", "length_range.0.marketplace_id", "lens.0.color.0.value", "lens.0.color.0.language_tag", "lens.0.marketplace_id", "list_price.0.value", "list_price.0.currency", "list_price.0.marketplace_id", "manufacturer.0.value", "manufacturer.0.language_tag", "manufacturer.0.marketplace_id", "material.0.value", "material.0.language_tag", "material.0.marketplace_id", "matte_style.0.value", "matte_style.0.language_tag", "matte_style.0.marketplace_id", "merchant_shipping_group.0.value", "merchant_shipping_group.0.marketplace_id", "merchant_suggested_asin.0.value", "merchant_suggested_asin.0.marketplace_id", "model_name.0.value", "model_name.0.language_tag", "model_name.0.marketplace_id", "model_number.0.value", "model_number.0.marketplace_id", "number_of_boxes.0.value", "number_of_boxes.0.marketplace_id", "number_of_items.0.value", "number_of_items.0.marketplace_id", "package_contains_sku.0.marketplace_id", "package_contains_sku.0.quantity", "package_contains_sku.0.sku", "part_number.0.value", "part_number.0.marketplace_id", "pattern.0.value", "pattern.0.language_tag", "pattern.0.marketplace_id", "required_product_compliance_certificate.0.value", "required_product_compliance_certificate.0.marketplace_id", "scent.0.value", "scent.0.language_tag", "scent.0.marketplace_id", "size.0.value", "size.0.language_tag", "size.0.marketplace_id", "style.0.value", "style.0.language_tag", "style.0.marketplace_id", "team_name.0.value", "team_name.0.language_tag", "team_name.0.marketplace_id", "unit_count.0.value", "unit_count.0.type.value", "unit_count.0.type.language_tag", "unit_count.0.type", "unit_count.0.marketplace_id", "variation_theme.0.name", "volume_capacity_name.0.value", "volume_capacity_name.0.unit", "volume_capacity_name.0.language_tag", "volume_capacity_name.0.marketplace_id", "warranty_description.0.value", "warranty_description.0.language_tag", "warranty_description.0.marketplace_id"],
      purchasable_offer: ["purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.average_size_measurement", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer.0.quantity_discount_plan.schedule.levels.value", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.our_price.schedule.value_with_tax", "purchasable_offer.0.our_price.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.minimum_seller_allowed_price.schedule.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.schedule.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.map_price.schedule.value_with_tax", "purchasable_offer.0.map_price.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.discounted_price.schedule.value_with_tax", "purchasable_offer.0.discounted_price.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification"],
      "purchasable_offer.0.audience": ["purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.map_price", "purchasable_offer.0.discounted_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.discounted_price": ["purchasable_offer.0.our_price", "purchasable_offer.0.discounted_price.schedule.value_with_tax", "purchasable_offer.0.discounted_price.schedule", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.discounted_price.0.schedule": ["purchasable_offer.0.our_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax": ["purchasable_offer.0.our_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.discounted_price.schedule": ["purchasable_offer.0.discounted_price.schedule.value_with_tax", "purchasable_offer.0.discounted_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.discounted_price.schedule.currency": ["purchasable_offer.0.discounted_price.schedule.value_with_tax", "purchasable_offer.0.discounted_price.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.map_price": ["purchasable_offer.0.map_price.schedule.value_with_tax", "purchasable_offer.0.map_price.schedule", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.map_price.schedule": ["purchasable_offer.0.map_price.schedule.value_with_tax", "purchasable_offer.0.map_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.map_price.schedule.currency": ["purchasable_offer.0.map_price.schedule.value_with_tax", "purchasable_offer.0.map_price.schedule", "purchasable_offer.0.map_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.maximum_seller_allowed_price": ["purchasable_offer.0.maximum_seller_allowed_price.schedule.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.schedule", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.maximum_seller_allowed_price.schedule": ["purchasable_offer.0.maximum_seller_allowed_price.schedule.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.maximum_seller_allowed_price.schedule.currency": ["purchasable_offer.0.maximum_seller_allowed_price.schedule.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.minimum_seller_allowed_price": ["purchasable_offer.0.minimum_seller_allowed_price.schedule.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.schedule", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.minimum_seller_allowed_price.schedule": ["purchasable_offer.0.minimum_seller_allowed_price.schedule.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.minimum_seller_allowed_price.schedule.currency": ["purchasable_offer.0.minimum_seller_allowed_price.schedule.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.our_price": ["purchasable_offer.0.our_price.schedule.value_with_tax", "purchasable_offer.0.our_price.schedule", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.our_price.schedule": ["purchasable_offer.0.our_price.schedule.value_with_tax", "purchasable_offer.0.our_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.our_price.schedule.currency": ["purchasable_offer.0.our_price.schedule.value_with_tax", "purchasable_offer.0.our_price.schedule", "purchasable_offer.0.our_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.quantity_discount_plan": ["purchasable_offer.0.quantity_discount_plan.schedule.levels.value", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan.schedule", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.quantity_discount_plan.0.schedule": ["purchasable_offer.0.quantity_discount_plan.schedule.levels.value", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type": ["purchasable_offer.0.quantity_discount_plan.schedule.levels.value", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.quantity_discount_plan.schedule": ["purchasable_offer.0.quantity_discount_plan.schedule.levels.value", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.quantity_discount_plan.schedule.levels": ["purchasable_offer.0.quantity_discount_plan.schedule.levels.value", "purchasable_offer.0.quantity_discount_plan.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.quantity_discount_plan.schedule.levels.currency": ["purchasable_offer.0.quantity_discount_plan.schedule.levels.value", "purchasable_offer.0.quantity_discount_plan.schedule.levels", "purchasable_offer.0.quantity_discount_plan.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification", "purchasable_offer.0.variable_weight_based_price"],
      "purchasable_offer.0.variable_weight_based_price": ["purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.average_size_measurement", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification"],
      "purchasable_offer.0.variable_weight_based_price.inventory_measurement": ["purchasable_offer.0.variable_weight_based_price.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification"],
      "purchasable_offer.0.variable_weight_based_price.inventory_measurement.variable_weight_based_price": ["purchasable_offer.0.variable_weight_based_price.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.inventory_measurement", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification"],
      "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement": ["purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification"],
      "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.variable_weight_based_price": ["purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification"],
      "purchasable_offer.0.variable_weight_based_price.variable_weight_based_price": ["purchasable_offer.0.variable_weight_based_price.average_size_measurement", "purchasable_offer.0.variable_weight_based_price", "purchasable_offer", "purchasable_offer.0.map_price.0.schedule.0.value_with_tax", "purchasable_offer.0.map_price.0.schedule", "purchasable_offer.0.map_price", "purchasable_offer.0.currency", "purchasable_offer.0.marketplace_id", "purchasable_offer.0.our_price.0.schedule.0.value_with_tax", "purchasable_offer.0.our_price.0.schedule", "purchasable_offer.0.our_price", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule.rule_id", "purchasable_offer.0.automated_pricing_merchandising_rule_plan.0.merchandising_rule", "purchasable_offer.0.automated_pricing_merchandising_rule_plan", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.minimum_seller_allowed_price.0.schedule", "purchasable_offer.0.minimum_seller_allowed_price", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule.0.value_with_tax", "purchasable_offer.0.maximum_seller_allowed_price.0.schedule", "purchasable_offer.0.maximum_seller_allowed_price", "purchasable_offer.0.discounted_price.0.schedule.0.value_with_tax", "purchasable_offer.0.discounted_price.0.schedule.0.start_at", "purchasable_offer.0.discounted_price.0.schedule.0.end_at", "purchasable_offer.0.discounted_price.0.schedule", "purchasable_offer.0.discounted_price", "purchasable_offer.0.start_at.value", "purchasable_offer.0.start_at", "purchasable_offer.0.end_at.value", "purchasable_offer.0.end_at", "purchasable_offer.0.audience", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.discount_type", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.lower_bound", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels.0.value", "purchasable_offer.0.quantity_discount_plan.0.schedule.0.levels", "purchasable_offer.0.quantity_discount_plan.0.schedule", "purchasable_offer.0.quantity_discount_plan", "purchasable_offer.0.variable_weight_based_price.0.pricing_strategy", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.average_size_measurement", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.inventory_measurement", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.type", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.unit", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement.value", "purchasable_offer.0.variable_weight_based_price.0.merchant_sale_measurement", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_minimum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_maximum", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification.order_increment", "purchasable_offer.0.variable_weight_based_price.0.order_quantity_specification"],
      required_product_compliance_certificate: ["legal_compliance_certifications", "legal_compliance_certifications.0.regulatory_organization_name", "legal_compliance_certifications.0.certification_status", "legal_compliance_certifications.0.value", "legal_compliance_certifications.0.language_tag", "legal_compliance_certifications.0.marketplace_id"],
      "required_product_compliance_certificate.0.value": ["legal_compliance_certifications", "legal_compliance_certifications.0.regulatory_organization_name", "legal_compliance_certifications.0.certification_status", "legal_compliance_certifications.0.value", "legal_compliance_certifications.0.language_tag", "legal_compliance_certifications.0.marketplace_id"],
      skip_offer: ["merchant_shipping_group", "list_price", "fulfillment_availability", "condition_type", "condition_type.0.value", "condition_type.0.marketplace_id", "fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability.0.quantity", "fulfillment_availability.0.lead_time_to_ship_max_days", "fulfillment_availability.0.restock_date", "fulfillment_availability.0.is_inventory_available", "list_price.0.value", "list_price.0.currency", "list_price.0.marketplace_id", "merchant_shipping_group.0.value", "merchant_shipping_group.0.marketplace_id"],
      "skip_offer.0.value": ["merchant_shipping_group", "list_price", "fulfillment_availability", "condition_type", "condition_type.0.value", "condition_type.0.marketplace_id", "fulfillment_availability.0.fulfillment_channel_code", "fulfillment_availability.0.quantity", "fulfillment_availability.0.lead_time_to_ship_max_days", "fulfillment_availability.0.restock_date", "fulfillment_availability.0.is_inventory_available", "list_price.0.value", "list_price.0.currency", "list_price.0.marketplace_id", "merchant_shipping_group.0.value", "merchant_shipping_group.0.marketplace_id"],
      supplier_declared_dg_hz_regulation: ["supplier_declared_dg_hz_regulation.0.value", "safety_data_sheet_url", "hazmat", "ghs.0.classification", "ghs", "ghs.0.classification.0.class", "ghs.0.marketplace_id", "hazmat.0.aspect", "hazmat.0.value", "hazmat.0.marketplace_id", "safety_data_sheet_url.0.value", "safety_data_sheet_url.0.language_tag", "safety_data_sheet_url.0.marketplace_id", "supplier_declared_dg_hz_regulation.0.marketplace_id"],
      "supplier_declared_dg_hz_regulation.0.value": ["supplier_declared_dg_hz_regulation", "safety_data_sheet_url", "hazmat", "ghs.0.classification", "ghs", "ghs.0.classification.0.class", "ghs.0.marketplace_id", "hazmat.0.aspect", "hazmat.0.value", "hazmat.0.marketplace_id", "safety_data_sheet_url.0.value", "safety_data_sheet_url.0.language_tag", "safety_data_sheet_url.0.marketplace_id", "supplier_declared_dg_hz_regulation.0.marketplace_id"],
      supplier_declared_has_product_identifier_exemption: ["merchant_suggested_asin", "externally_assigned_product_identifier", "externally_assigned_product_identifier.0.type", "externally_assigned_product_identifier.0.value", "externally_assigned_product_identifier.0.marketplace_id", "merchant_suggested_asin.0.value", "merchant_suggested_asin.0.marketplace_id"],
      "supplier_declared_has_product_identifier_exemption.0.value": ["merchant_suggested_asin", "externally_assigned_product_identifier", "externally_assigned_product_identifier.0.type", "externally_assigned_product_identifier.0.value", "externally_assigned_product_identifier.0.marketplace_id", "merchant_suggested_asin.0.value", "merchant_suggested_asin.0.marketplace_id"],
      variation_theme: ["volume_capacity_name", "unit_count", "team_name", "style", "size", "scent", "pattern", "part_number", "number_of_items", "model_number", "model_name", "matte_style", "material", "lens.0.color", "lens", "length_range", "item_weight", "item_thickness", "item_shape", "item_package_quantity", "item_display_weight", "item_display_dimensions", "item_dimensions_fraction", "item_dimensions", "hand_orientation", "grit.0.type", "grit", "grip.0.type", "grip.0.size", "grip", "flavor", "fit_type", "fabric_type", "customer_package_type", "cup.0.size", "cup", "connectivity_technology", "configuration", "color", "capacity", "auto_part_position", "age_gender_category", "age_gender_category.0.value", "age_gender_category.0.language_tag", "age_gender_category.0.marketplace_id", "auto_part_position.0.value", "auto_part_position.0.marketplace_id", "capacity.0.value", "capacity.0.unit", "capacity.0.marketplace_id", "color.0.value", "color.0.language_tag", "color.0.marketplace_id", "configuration.0.value", "configuration.0.language_tag", "configuration.0.marketplace_id", "connectivity_technology.0.value", "connectivity_technology.0.language_tag", "connectivity_technology.0.marketplace_id", "cup.0.marketplace_id", "cup.0.size.0.value", "cup.0.size.0.language_tag", "customer_package_type.0.value", "customer_package_type.0.language_tag", "customer_package_type.0.marketplace_id", "fabric_type.0.value", "fabric_type.0.language_tag", "fabric_type.0.marketplace_id", "fit_type.0.value", "fit_type.0.language_tag", "fit_type.0.marketplace_id", "flavor.0.value", "flavor.0.language_tag", "flavor.0.marketplace_id", "grip.0.marketplace_id", "grip.0.size.0.value", "grip.0.size.0.language_tag", "grip.0.type.0.value", "grip.0.type.0.language_tag", "grit.0.marketplace_id", "grit.0.type.0.value", "grit.0.type.0.language_tag", "hand_orientation.0.value", "hand_orientation.0.language_tag", "hand_orientation.0.marketplace_id", "item_dimensions.0.length.value", "item_dimensions.0.length.unit", "item_dimensions.0.length", "item_dimensions.0.width.value", "item_dimensions.0.width.unit", "item_dimensions.0.width", "item_dimensions.0.height.value", "item_dimensions.0.height.unit", "item_dimensions.0.height", "item_dimensions.0.marketplace_id", "item_dimensions_fraction.0.height.decimal_value", "item_dimensions_fraction.0.height.unit", "item_dimensions_fraction.0.height", "item_dimensions_fraction.0.length.decimal_value", "item_dimensions_fraction.0.length.unit", "item_dimensions_fraction.0.length", "item_dimensions_fraction.0.width.decimal_value", "item_dimensions_fraction.0.width.unit", "item_dimensions_fraction.0.width", "item_dimensions_fraction.0.marketplace_id", "item_display_dimensions.0.depth.value", "item_display_dimensions.0.depth.unit", "item_display_dimensions.0.depth", "item_display_dimensions.0.diameter.value", "item_display_dimensions.0.diameter.unit", "item_display_dimensions.0.diameter", "item_display_dimensions.0.height.value", "item_display_dimensions.0.height.unit", "item_display_dimensions.0.height", "item_display_dimensions.0.length.value", "item_display_dimensions.0.length.unit", "item_display_dimensions.0.length", "item_display_dimensions.0.marketplace_id", "item_display_dimensions.0.width.value", "item_display_dimensions.0.width.unit", "item_display_dimensions.0.width", "item_display_weight.0.value", "item_display_weight.0.unit", "item_display_weight.0.marketplace_id", "item_package_quantity.0.value", "item_package_quantity.0.marketplace_id", "item_shape.0.value", "item_shape.0.language_tag", "item_shape.0.marketplace_id", "item_thickness.0.decimal_value", "item_thickness.0.marketplace_id", "item_thickness.0.unit", "item_weight.0.value", "item_weight.0.unit", "item_weight.0.marketplace_id", "length_range.0.value", "length_range.0.language_tag", "length_range.0.marketplace_id", "lens.0.color.0.value", "lens.0.color.0.language_tag", "lens.0.marketplace_id", "material.0.value", "material.0.language_tag", "material.0.marketplace_id", "matte_style.0.value", "matte_style.0.language_tag", "matte_style.0.marketplace_id", "model_name.0.value", "model_name.0.language_tag", "model_name.0.marketplace_id", "model_number.0.value", "model_number.0.marketplace_id", "number_of_items.0.value", "number_of_items.0.marketplace_id", "part_number.0.value", "part_number.0.marketplace_id", "pattern.0.value", "pattern.0.language_tag", "pattern.0.marketplace_id", "scent.0.value", "scent.0.language_tag", "scent.0.marketplace_id", "size.0.value", "size.0.language_tag", "size.0.marketplace_id", "style.0.value", "style.0.language_tag", "style.0.marketplace_id", "team_name.0.value", "team_name.0.language_tag", "team_name.0.marketplace_id", "unit_count.0.value", "unit_count.0.type.value", "unit_count.0.type.language_tag", "unit_count.0.type", "unit_count.0.marketplace_id", "volume_capacity_name.0.value", "volume_capacity_name.0.unit", "volume_capacity_name.0.language_tag", "volume_capacity_name.0.marketplace_id"],
      "variation_theme.0.name": ["volume_capacity_name", "unit_count", "team_name", "style", "size", "scent", "pattern", "part_number", "number_of_items", "model_number", "model_name", "matte_style", "material", "lens.0.color", "lens", "length_range", "item_weight", "item_thickness", "item_shape", "item_package_quantity", "item_display_weight", "item_display_dimensions", "item_dimensions_fraction", "item_dimensions", "hand_orientation", "grit.0.type", "grit", "grip.0.type", "grip.0.size", "grip", "flavor", "fit_type", "fabric_type", "customer_package_type", "cup.0.size", "cup", "connectivity_technology", "configuration", "color", "capacity", "auto_part_position", "age_gender_category", "age_gender_category.0.value", "age_gender_category.0.language_tag", "age_gender_category.0.marketplace_id", "auto_part_position.0.value", "auto_part_position.0.marketplace_id", "capacity.0.value", "capacity.0.unit", "capacity.0.marketplace_id", "color.0.value", "color.0.language_tag", "color.0.marketplace_id", "configuration.0.value", "configuration.0.language_tag", "configuration.0.marketplace_id", "connectivity_technology.0.value", "connectivity_technology.0.language_tag", "connectivity_technology.0.marketplace_id", "cup.0.marketplace_id", "cup.0.size.0.value", "cup.0.size.0.language_tag", "customer_package_type.0.value", "customer_package_type.0.language_tag", "customer_package_type.0.marketplace_id", "fabric_type.0.value", "fabric_type.0.language_tag", "fabric_type.0.marketplace_id", "fit_type.0.value", "fit_type.0.language_tag", "fit_type.0.marketplace_id", "flavor.0.value", "flavor.0.language_tag", "flavor.0.marketplace_id", "grip.0.marketplace_id", "grip.0.size.0.value", "grip.0.size.0.language_tag", "grip.0.type.0.value", "grip.0.type.0.language_tag", "grit.0.marketplace_id", "grit.0.type.0.value", "grit.0.type.0.language_tag", "hand_orientation.0.value", "hand_orientation.0.language_tag", "hand_orientation.0.marketplace_id", "item_dimensions.0.length.value", "item_dimensions.0.length.unit", "item_dimensions.0.length", "item_dimensions.0.width.value", "item_dimensions.0.width.unit", "item_dimensions.0.width", "item_dimensions.0.height.value", "item_dimensions.0.height.unit", "item_dimensions.0.height", "item_dimensions.0.marketplace_id", "item_dimensions_fraction.0.height.decimal_value", "item_dimensions_fraction.0.height.unit", "item_dimensions_fraction.0.height", "item_dimensions_fraction.0.length.decimal_value", "item_dimensions_fraction.0.length.unit", "item_dimensions_fraction.0.length", "item_dimensions_fraction.0.width.decimal_value", "item_dimensions_fraction.0.width.unit", "item_dimensions_fraction.0.width", "item_dimensions_fraction.0.marketplace_id", "item_display_dimensions.0.depth.value", "item_display_dimensions.0.depth.unit", "item_display_dimensions.0.depth", "item_display_dimensions.0.diameter.value", "item_display_dimensions.0.diameter.unit", "item_display_dimensions.0.diameter", "item_display_dimensions.0.height.value", "item_display_dimensions.0.height.unit", "item_display_dimensions.0.height", "item_display_dimensions.0.length.value", "item_display_dimensions.0.length.unit", "item_display_dimensions.0.length", "item_display_dimensions.0.marketplace_id", "item_display_dimensions.0.width.value", "item_display_dimensions.0.width.unit", "item_display_dimensions.0.width", "item_display_weight.0.value", "item_display_weight.0.unit", "item_display_weight.0.marketplace_id", "item_package_quantity.0.value", "item_package_quantity.0.marketplace_id", "item_shape.0.value", "item_shape.0.language_tag", "item_shape.0.marketplace_id", "item_thickness.0.decimal_value", "item_thickness.0.marketplace_id", "item_thickness.0.unit", "item_weight.0.value", "item_weight.0.unit", "item_weight.0.marketplace_id", "length_range.0.value", "length_range.0.language_tag", "length_range.0.marketplace_id", "lens.0.color.0.value", "lens.0.color.0.language_tag", "lens.0.marketplace_id", "material.0.value", "material.0.language_tag", "material.0.marketplace_id", "matte_style.0.value", "matte_style.0.language_tag", "matte_style.0.marketplace_id", "model_name.0.value", "model_name.0.language_tag", "model_name.0.marketplace_id", "model_number.0.value", "model_number.0.marketplace_id", "number_of_items.0.value", "number_of_items.0.marketplace_id", "part_number.0.value", "part_number.0.marketplace_id", "pattern.0.value", "pattern.0.language_tag", "pattern.0.marketplace_id", "scent.0.value", "scent.0.language_tag", "scent.0.marketplace_id", "size.0.value", "size.0.language_tag", "size.0.marketplace_id", "style.0.value", "style.0.language_tag", "style.0.marketplace_id", "team_name.0.value", "team_name.0.language_tag", "team_name.0.marketplace_id", "unit_count.0.value", "unit_count.0.type.value", "unit_count.0.type.language_tag", "unit_count.0.type", "unit_count.0.marketplace_id", "volume_capacity_name.0.value", "volume_capacity_name.0.unit", "volume_capacity_name.0.language_tag", "volume_capacity_name.0.marketplace_id"]
  }
    , z = (e, i) => {
      if (Object.is(e, i))
          return !0;
      if (typeof e != "object" || e === null || typeof i != "object" || i === null)
          return !1;
      const a = Object.keys(e)
        , t = Object.keys(i);
      if (a.length !== t.length)
          return !1;
      for (let r = 0; r < a.length; r++)
          if (!Object.hasOwnProperty.call(i, a[r]) || !Object.is(e[a[r]], i[a[r]]))
              return !1;
      return !0
  }
    , N = (e, i, a) => (e[i] = a,
  e)
    , I = (e, i, a) => i.length === 0 ? a : i.length === 1 ? N(e, i[0], a) : e[i[0]] ? N(e, i[0], I(e[i[0]], i.slice(1), a)) : /^\d+$/.test(i[1]) ? N(e, i[0], I([], i.slice(1), a)) : N(e, i[0], I({}, i.slice(1), a))
    , W = e => e ? Object.keys(e).reduce( (i, a) => I(i, a.split("."), e[a]), {}) : {}
    , j = (e, i) => !e || e.constructor !== Object && e.constructor !== Array ? [[i, e]] : Object.keys(e).flatMap(a => j(e[a], i ? `${i}.${a}` : a))
    , Ce = e => e ? Object.fromEntries(j(e, "")) : {}
    , Te = (e, i) => Object.fromEntries(Object.keys(e).map(a => [a, i(e[a], a)]))
    , w = (e, i) => i.reduce( (a, t) => (delete a[t],
  a), {
      ...e
  })
    , Fe = (e, i) => e.reduce( (a, t) => {
      const r = i(t)
        , n = a[r];
      return n && n.length > 0 ? n.push(t) : a[r] = [t],
      a
  }
  , {})
    , R = (e, i, a) => e.reduce( (t, r) => (t[i(r)] = a(r),
  t), {})
    , U = (e, i) => e.filter(a => !i.includes(a));
  var ve = function(e) {
      return function(i) {
          return i(e)
      }
  };
  function Se(e) {
      return e
  }
  function De(e) {
      return function() {
          return e
      }
  }
  var Be = De(void 0)
    , K = Be;
  function D(e, i, a, t, r, n, o, u, s) {
      switch (arguments.length) {
      case 1:
          return e;
      case 2:
          return function() {
              return i(e.apply(this, arguments))
          }
          ;
      case 3:
          return function() {
              return a(i(e.apply(this, arguments)))
          }
          ;
      case 4:
          return function() {
              return t(a(i(e.apply(this, arguments))))
          }
          ;
      case 5:
          return function() {
              return r(t(a(i(e.apply(this, arguments)))))
          }
          ;
      case 6:
          return function() {
              return n(r(t(a(i(e.apply(this, arguments))))))
          }
          ;
      case 7:
          return function() {
              return o(n(r(t(a(i(e.apply(this, arguments)))))))
          }
          ;
      case 8:
          return function() {
              return u(o(n(r(t(a(i(e.apply(this, arguments))))))))
          }
          ;
      case 9:
          return function() {
              return s(u(o(n(r(t(a(i(e.apply(this, arguments)))))))))
          }
      }
  }
  function F(e, i, a, t, r, n, o, u, s) {
      switch (arguments.length) {
      case 1:
          return e;
      case 2:
          return i(e);
      case 3:
          return a(i(e));
      case 4:
          return t(a(i(e)));
      case 5:
          return r(t(a(i(e))));
      case 6:
          return n(r(t(a(i(e)))));
      case 7:
          return o(n(r(t(a(i(e))))));
      case 8:
          return u(o(n(r(t(a(i(e)))))));
      case 9:
          return s(u(o(n(r(t(a(i(e))))))));
      default:
          {
              for (var d = arguments[0], _ = 1; _ < arguments.length; _++)
                  d = arguments[_](d);
              return d
          }
      }
  }
  var Me = globalThis && globalThis.__spreadArray || function(e, i, a) {
      if (a || arguments.length === 2)
          for (var t = 0, r = i.length, n; t < r; t++)
              (n || !(t in i)) && (n || (n = Array.prototype.slice.call(i, 0, t)),
              n[t] = i[t]);
      return e.concat(n || Array.prototype.slice.call(i))
  }
    , Ne = function(e) {
      return e._tag === "Left"
  }
    , Ie = function(e) {
      return e[0]
  }
    , we = function(e) {
      return Me([e[0]], e.slice(1), !0)
  }
    , Re = function(e) {
      return e._tag === "None"
  }
    , xe = function(e, i) {
      return function(a) {
          return Re(a) ? e() : i(a.value)
      }
  }
    , Le = xe
    , Pe = Le
    , Oe = Ne
    , ke = function(e, i) {
      return function(a) {
          return Oe(a) ? e(a.left) : i(a.right)
      }
  }
    , ze = ke
    , Z = ze;
  const B = "Finder"
    , x = e => i => a => i(D(e, a))
    , J = {
      URI: B,
      map: (e, i) => F(e, x(i))
  }
    , X = e => i => e(Pe(K, i))
    , Q = e => ({
      left: i => e(Z(i, K)),
      right: i => e(Z(K, i))
  })
    , Ue = {
      URI: B,
      compact: X,
      separate: Q
  }
    , ee = e => i => a => i(t => e(t) && a(t))
    , Ke = (e, i) => F(e, ee(i))
    , qe = e => D(x(e), X)
    , He = e => i => ({
      left: a => i(t => !e(t) && a(t)),
      right: a => i(t => e(t) && a(t))
  })
    , Ge = (e, i) => F(e, He(i))
    , Ye = e => D(x(e), Q);
  ({
      ...J,
      ...Ue
  });
  const Ve = e => i => a => i(t => F(e, x(t))(a))
    , We = {
      ...J,
      URI: B,
      ap: (e, i) => F(e, Ve(i))
  }
    , je = e => i => a => i(D(e, ve(a)));
  ({
      ...We
  });
  const Ze = e => {
      const i = [];
      return e(a => i.push(a)),
      i
  }
  ;
  var Je = Ie
    , Xe = Je
    , M = {
      equals: function(e, i) {
          return e === i
      }
  };
  M.equals;
  var Qe = function(e) {
      return e.length > 0
  }
    , $e = function(e) {
      return function(i) {
          if (i.length === 1)
              return aa(i);
          for (var a = [ia(i)], t = ta(i), r = function(s) {
              a.every(function(d) {
                  return !e.equals(d, s)
              }) && a.push(s)
          }, n = 0, o = t; n < o.length; n++) {
              var u = o[n];
              r(u)
          }
          return a
      }
  }
    , ea = we
    , aa = ea
    , ia = Xe
    , ta = function(e) {
      return e.slice(1)
  };
  function ae(e) {
      return function(i, a) {
          if (a === void 0) {
              var t = ae(e);
              return function(o) {
                  return t(i, o)
              }
          }
          for (var r = function(o) {
              return e.equals(o, i)
          }, n = 0; n < a.length; n++)
              if (r(a[n]))
                  return !0;
          return !1
      }
  }
  var ie = function(e) {
      return e.length === 0
  }
    , ra = Qe
    , q = function(e) {
      return e.slice()
  }
    , te = ae
    , re = function(e) {
      var i = $e(e);
      return function(a) {
          return ra(a) ? i(a) : q(a)
      }
  }
    , na = function(e) {
      return function(i) {
          return ie(i) ? q(e) : ie(e) ? q(i) : i.concat(e)
      }
  }
    , oa = na;
  function ne(e) {
      var i = te(e);
      return function(a, t) {
          if (t === void 0) {
              var r = ne(e);
              return function(n) {
                  return r(n, a)
              }
          }
          return a.filter(function(n) {
              return i(n, t)
          })
      }
  }
  function oe(e) {
      var i = te(e);
      return function(a, t) {
          if (t === void 0) {
              var r = oe(e);
              return function(n) {
                  return r(n, a)
              }
          }
          return a.filter(function(n) {
              return !i(n, t)
          })
      }
  }
  var ua = function(e) {
      return function(i) {
          return i.map(function(a) {
              return e(a)
          })
      }
  }
    , sa = function(e) {
      return function(i) {
          return i.filter(e)
      }
  };
  const L = ["options", "tipsOptions", "notOptions", "optionLabels"]
    , H = (e, i) => e === i || !!(e && i && e.length === i.length && e.every( (a, t) => z(a, i[t])))
    , la = {
      equals: (e, i) => z(w(e, L), w(i, L)) ? H(e.options, i.options) && H(e.tipsOptions, i.tipsOptions) && H(e.notOptions, i.notOptions) && z(e.optionLabels, i.optionLabels) : !1
  }
    , ue = {
      empty: {},
      concat: (e, i) => {
          const a = {
              ...w(e, L),
              ...w(i, L)
          }
            , t = e.options && i.options ? F(e.options, ne(M)(i.options)) : i.options ?? e.options
            , r = e.notOptions && i.notOptions ? F(e.notOptions, oa(i.notOptions), re(M)) : i.notOptions ?? e.notOptions
            , n = t && r ? F(t, oe(M)(r)) : t
            , o = n ? void 0 : i.tipsOptions ?? e.tipsOptions
            , u = {
              ...e.optionLabels,
              ...i.optionLabels
          };
          return {
              ...a,
              options: n,
              notOptions: r,
              tipsOptions: o,
              optionLabels: u
          }
      }
  }
    , se = {
      empty: {
          required: !0
      },
      concat: (e, i) => ({
          ...i,
          hidden: i.hidden || e.hidden,
          required: i.required && e.required,
          variation: i.variation || e.variation
      })
  }
    , _a = e => {
      const i = Te(Fe(e, r => r.name || ""), r => (r || []).reduce(ue.concat, ue.empty))
        , a = F(e, ua(r => r.name), sa(r => !!r), re(M))
        , t = a.filter(r => !a.some(n => n !== r && n.startsWith(r + ".")));
      return R(t, r => r, r => ({
          ...a.filter(n => r.startsWith(n + ".") || r === n).map(n => ({
              ...i[n],
              name: n
          })).sort( (n, o) => n.name.length - o.name.length).reduce(se.concat, se.empty),
          name: r
      }))
  }
    , ca = (e, i) => {
      const a = Object.keys(e)
        , t = Object.keys(i)
        , r = U(t, a)
        , n = U(a, t)
        , o = U(a, n).filter(u => !la.equals(e[u], i[u]));
      return {
          create: R(n.map(u => e[u]), u => u.name, u => u),
          remove: R(r.map(u => i[u]), u => u.name, u => u),
          modify: R(o.map(u => e[u]), u => u.name, u => u)
      }
  }
    , da = (e, i) => D(W, a => t => e(a, t), i ? ee(i) : Se, Ze, _a)
    , le = e => {
      let i = {};
      return a => {
          const t = e(a)
            , r = ca(t, i);
          return i = t,
          r
      }
  }
    , P = da(be)
    , _e = le(P)
    , v = ye
    , O = S
    , pa = Ee
    , ma = Ae;
  let ce = $('[name="saleType"]')
    , ha = function(e, i) {
      let a = !1;
      return $.each(e.commonVariationGangedAttr, function(t, r) {
          if (new RegExp("^" + t + "$").test(i))
              return r.data[i] = "",
              a = !0,
              !1
      }),
      a
  }
    , fa = function(e, i, a) {
      let t = !1;
      return Object.keys(O).length && $.each(e.commonVariationThemeAttr, function(r, n) {
          if (new RegExp("^" + r + "$").test(i))
              return n.data[i] = a,
              t = !0,
              AMAZON_PRODUCT_FN.proAttributeFn.createVariationThemeOption(a, O),
              !1
      }),
      t
  }
    , ga = function(e, i, a) {
      let t = !1;
      return $.each(e.commonHideAttr, function(r, n) {
          if (new RegExp("^" + n.key + "$").test(i)) {
              e.fixedValueDataList[i] = "";
              let u = $(n.dom);
              if (n.getOption && a.options) {
                  let d = '<option value="">请选择</option>';
                  n.dom === "#productIdTypeSel" && (d = "");
                  let _ = a.optionLabels || {};
                  $.each(a.options, function(l, h) {
                      d += '<option value="' + h + '">' + (_[h] || h) + "</option>"
                  }),
                  u.html(d),
                  n.dom === "#proItemCondition" ? e.itemConditionOption = d : n.dom === "#productIdTypeSel" && (e.productIdTypeSelOption = d,
                  u.val("upc"))
              }
              u.closest("tr").removeClass("hide").addClass("otherProAttribute").attr({
                  "data-nodePath": i,
                  "data-minLength": a.minLength !== null && a.minLength !== void 0 ? a.minLength : "",
                  "data-maxLength": a.maxLength !== null && a.maxLength !== void 0 ? a.maxLength : "",
                  "data-minByteLength": a.minUtf8ByteLength !== null && a.minUtf8ByteLength !== void 0 ? a.minUtf8ByteLength : "",
                  "data-maxByteLength": a.maxUtf8ByteLength !== null && a.maxUtf8ByteLength !== void 0 ? a.maxUtf8ByteLength : "",
                  "data-minimum": a.minimum !== null && a.minimum !== void 0 ? a.minimum : "",
                  "data-maximum": a.maximum !== null && a.maximum !== void 0 ? a.maximum : "",
                  "data-maxItems": a.maxItems
              }).find(".attrMust")[a.required ? "addClass" : "removeClass"]("must"),
              n.isMust ? u.removeAttr("formId").attr({
                  formtype: n.dataType,
                  datatype: n.dataType
              }).closest("tr").find(".attrMust").addClass("must") : u.attr({
                  formId: a.required ? "form" : "none",
                  formtype: n.dataType,
                  datatype: a.required ? n.dataType : "none"
              });
              let s = u.attr("data-initVal");
              return s && u.attr("data-initVal", "").find('option[value="' + s + '"]').prop("selected", !0),
              n.key.indexOf("bullet_point") !== -1 ? a.maxItems === 10 ? u.closest(".amazonBulletPointBox").removeClass("hide") : u.closest(".amazonBulletPointBox").addClass("hide") : n.key.indexOf("externally_assigned_product_identifier") !== -1 ? u.attr("data-nodePath", i) : n.key.indexOf("fulfillment_channel_code") !== -1 && (a.options && $.each(a.options, function(d, _) {
                  _ !== "DEFAULT" && u.find('option[value="AFN"]').attr("data-value", _)
              }),
              u.attr("data-nodePath", i)),
              t = !0,
              !1
          }
      }),
      t
  }
    , ya = function(e, i) {
      let a = !1;
      return $.each(e.commonNoSaveAttr, function(t, r) {
          if (new RegExp("^" + r + "$").test(i))
              return a = !0,
              !1
      }),
      a
  }
    , ba = function(e, i, a, t, r, n) {
      var o = ""
        , u = "";
      if (a.maxItems > 1) {
          let _ = []
            , l = ""
            , h = t.lastIndexOf(".0")
            , p = t.substring(0, h + 1)
            , b = t.substring(h + 2)
            , g = p + "[\\S]*" + b
            , y = []
            , E = -1
            , c = !1
            , f = a.optionLabels || {}
            , m = [];
          $.each(n, function(T, A) {
              new RegExp("^" + g + "$").test(T) && (y.push(A),
              c = !0)
          }),
          a.options ? ($.each(a.options, function(T, A) {
              l = $(r.proCheckBoxIptHtml),
              E = y.indexOf(A),
              l.find(".amazonAttrCheckbox").val(A).attr("data-value", strToUc(A)).prop("checked", E !== -1),
              o = f[A] || A,
              u = r.translateData && r.translateData[o.toLowerCase()],
              u && u.toLowerCase() !== o.toLowerCase() && (o = o + "(" + u + ")"),
              l.find(".amazonAttrCheckboxName").text(o),
              _.push(l),
              E !== -1 && y.splice(E, 1),
              m.push({
                  value: A,
                  label: o,
                  tanslateName: u
              })
          }),
          a.optionsData = m) : (a.tipsOptions && ($.each(a.tipsOptions, function(T, A) {
              l = $(r.proCheckBoxIptHtml),
              E = y.indexOf(A),
              l.find(".amazonAttrCheckbox").val(A).attr("data-value", strToUc(A)).prop("checked", E !== -1),
              o = f[A] || A,
              u = r.translateData && r.translateData[o.toLowerCase()],
              u && u.toLowerCase() !== o.toLowerCase() && (o = o + "(" + u + ")"),
              l.find(".amazonAttrCheckboxName").text(o),
              _.push(l),
              E !== -1 && y.splice(E, 1),
              m.push({
                  value: A,
                  label: o,
                  tanslateName: u
              })
          }),
          a.optionsData = m),
          y.length && $.each(y, function(T, A) {
              l = $(r.proUserCheckBoxIptHtml),
              l.find(".amazonAttrCheckbox").val(A).attr("data-value", strToUc(A)).prop("checked", !0),
              l.find(".amazonAttrCheckboxName").text(A),
              _.push(l)
          })),
          e.find(".amazonAddCustomAttrBox").html(_),
          c && AMAZON_PRODUCT_FN.proAttributeFn.amazonAttrCheckboxClickFn(l.find(".amazonAttrCheckbox"))
      } else {
          var s = []
            , d = a.optionLabels || {};
          a.options ? ($.each(a.options, function(_, l) {
              o = d[l] || l,
              u = r.translateData && r.translateData[o.toLowerCase()],
              u && u.toLowerCase() !== o.toLowerCase() && (o = o + "(" + u + ")"),
              s.push({
                  value: l,
                  label: o,
                  tanslateName: u
              })
          }),
          a.optionsData = s,
          a.optionsData.unshift({
              value: "",
              label: "请选择"
          }),
          e.find(".commSelectBox").selectMenu({
              data: a.optionsData,
              valueKey: "value",
              dataKey: "label",
              position: "fixed",
              scrollDom: r.$productAttrShow,
              initCall: function(_, l) {
                  if (i = String(i),
                  !i)
                      _.attr("data-value", "").val("");
                  else {
                      let h = !0;
                      $.each(l, function(p, b) {
                          if (b.$li.attr("data-value") === i)
                              return h = !1,
                              _.attr("data-value", i).val(b.$li.attr("data-label")),
                              !1
                      }),
                      h && _.attr("data-value", i).val(i)
                  }
              },
              clickCall: function(_, l, h) {
                  h.attr("data-value") || l.val(""),
                  AMAZON_PRODUCT_FN.proAttributeFn.getNewAttrList(l, 1),
                  l.trigger("blur")
              }
          })) : a.tipsOptions && ($.each(a.tipsOptions, function(_, l) {
              o = d[l] || l,
              u = r.translateData && r.translateData[o.toLowerCase()],
              u && u.toLowerCase() !== o.toLowerCase() && (o = o + "(" + u + ")"),
              s.push({
                  value: l,
                  label: o,
                  tanslateName: u
              })
          }),
          a.optionsData = s,
          e.find(".commSelectBox").selectMenu({
              data: a.optionsData,
              dataKey: "label",
              position: "fixed",
              scrollDom: r.$productAttrShow,
              initCall: function(_, l) {
                  if (i = String(i),
                  !i)
                      _.attr("data-value", "").val("");
                  else {
                      let h = !0;
                      $.each(l, function(p, b) {
                          if (b.$li.attr("data-value") === i || b.$li.attr("data-label") === i)
                              return h = !1,
                              _.attr("data-value", b.$li.attr("data-value")).val(b.$li.attr("data-label")),
                              !1
                      }),
                      h && _.attr("data-value", i).val(i)
                  }
              },
              clickCall: function(_, l, h) {
                  AMAZON_PRODUCT_FN.proAttributeFn.getNewAttrList(l, 2),
                  l.removeClass("Validform_error").closest(".validformOut").find(".errorMsg").remove()
              }
          }))
      }
      delete n[t]
  }
    , Ea = function(e, i) {
      let a = 0;
      $.each(e, function(t, r) {
          if (r.length > 1) {
              let n = "hide"
                , o = v[t] || {};
              $.each(r.dom, function(u, s) {
                  s.attr("data-required") && (n = "")
              }),
              t.endWith(".0") && (o = v[t.substring(0, t.length - 2)] || {}),
              i.splice(r.index + a, 0, '<tr class="content attributeTr attributeParentTr ' + n + '" data-nodepath="' + t + '"><td class="p0-imp p-top15" colspan="2"><div class="p10 p-bottom0 f-w600 attrName">' + strEscapeCharacter(o.title + (o.tTitle ? "(" + o.tTitle + ")" : "")) + "</div></td></tr>"),
              a++
          }
      })
  }
    , de = function(e, i, a, t) {
      let r = {}
        , n = ""
        , o = [];
      a ? (a = Ce(a),
      $.each(a, function(u, s) {
          (u.indexOf("language_tag") !== -1 || u.indexOf("marketplace_id") !== -1) && delete a[u]
      })) : a = {},
      Object.keys(O).length || (ce.filter('[value="0"]').click(),
      ce.filter('[value="1"]').closest("label").addClass("hide")),
      $.each(e, function(u, s) {
          let d = s.name;
          if (u.indexOf("language_tag") !== -1) {
              i.otherValueDataList[u] = 1;
              return
          } else if (u.indexOf("marketplace_id") !== -1) {
              i.otherValueDataList[u] = 1;
              return
          }
          if (ha(i, d) || fa(i, d, s) || ga(i, d, s) || ya(i, d))
              return;
          $.each(i.commonNoRequiredAttr, function(b, g) {
              new RegExp("^" + g + "$").test(d) && (s.required = !1)
          });
          let _ = v[d] || {}
            , l = a[d] !== "" && a[d] !== null && a[d] !== void 0 ? a[d] : "";
          if (d.endWith(".0") && (_ = v[d.substring(0, d.length - 2)] || {}),
          isEmptyObject(_))
              return;
          let h = strEscapeCharacter(_.title + (_.tTitle ? "(" + _.tTitle + ")" : ""))
            , p = strEscapeCharacter(_.description + (_.tDescription ? "(" + _.tDescription + ")" : ""));
          h.indexOf("原产国") !== -1 ? h = returnStringReplaceResult(h, "原产国", "原产地") : h.indexOf("国家") !== -1 && (h = returnStringReplaceResult(h, "国家", "国家/地区")),
          p.indexOf("原产国") !== -1 ? p = returnStringReplaceResult(p, "原产国", "原产地") : p.indexOf("国家") !== -1 && (p = returnStringReplaceResult(p, "国家", "国家/地区")),
          l !== "" && l !== null && l !== void 0 && (i.valueDataList[d] = l),
          n = $(i.productAttributeTrHtml.format({
              nodePath: d,
              must: s.required ? "must" : "",
              hide: s.required ? "" : "hide",
              title: h,
              description: p,
              minLength: s.minLength !== null && s.minLength !== void 0 ? s.minLength : "",
              maxLength: s.maxLength !== null && s.maxLength !== void 0 ? s.maxLength : "",
              minByteLength: s.minUtf8ByteLength !== null && s.minUtf8ByteLength !== void 0 ? s.minUtf8ByteLength : "",
              maxByteLength: s.maxUtf8ByteLength !== null && s.maxUtf8ByteLength !== void 0 ? s.maxUtf8ByteLength : "",
              minimum: s.minimum !== null && s.minimum !== void 0 ? s.minimum : "",
              maximum: s.maximum !== null && s.maximum !== void 0 ? s.maximum : "",
              maxItems: s.maxItems,
              content: function() {
                  return s.maxItems > 1 ? s.options ? i.proCheckBoxHtml.format({
                      valType: s.fieldType
                  }) : i.proCheckBoxCustomerHtml.format({
                      valType: s.fieldType
                  }) : s.options ? i.proSelectHtml.format({
                      valType: s.fieldType
                  }) : s.tipsOptions ? i.proSelectCustomerHtml.format({
                      valType: s.fieldType
                  }) : s.fieldType === "number" ? i.proNumberIptHtml.format({
                      value: l
                  }) : s.fieldType === "integer" ? i.proIntegerIptHtml.format({
                      value: l
                  }) : s.fieldType === "datetime" ? i.proDateTimeIptHtml.format({
                      value: l
                  }) : i.proStringIptHtml.format({
                      value: strEscapeCharacter(l)
                  })
              }()
          })),
          ba(n, l, s, d, i, a),
          o.push(n),
          n.data("originData", s),
          i.attributeDomObj[d] = n,
          r[d.split(".")[0]] ? (r[d.split(".")[0]].length++,
          r[d.split(".")[0]].dom.push(n)) : r[d.split(".")[0]] = {
              title: s.title,
              dom: [n],
              length: 1,
              index: o.length - 1
          }
      }),
      Ea(r, o),
      t ? i.$productAttrShow.find("tbody").append(o) : (i.$productAttrShow.find("tbody").html(o),
      AMAZON_PRODUCT_FN.proAttributeFn.getNewAttrList()),
      i.$productAttrShow.find('[data-toggle="popover"]').popover()
  };
  const Aa = () => (e, i, a, t) => {
      let r = _e(e);
      de(r.create, i, a, t)
  }
    , Ca = () => e => {
      let i = _e(e.valueDataList);
      if (Object.keys(i.create).length && de(i.create, e, null, !0),
      Object.keys(i.modify).length) {
          let a = $(".otherProAttribute")
            , t = $(".attributeListShowHide").attr("data-type") === "open"
            , r = !1;
          if ($.each(i.modify, function(n, o) {
              let u = e.attributeDomObj[n];
              if (u && u.length) {
                  $.each(e.commonNoRequiredAttr, function(p, b) {
                      new RegExp("^" + b + "$").test(o.name) && (o.required = !1)
                  }),
                  u[o.required || t ? "removeClass" : "addClass"]("hide").attr("data-required", o.required ? "must" : "").data("originData", o).find(".attrName")[o.required ? "addClass" : "removeClass"]("must"),
                  u.hasClass("variationHide") && (r = !0);
                  let _ = u.find(".commSelectBox")
                    , l = u.find(".amazonAttrBox")
                    , h = l.attr("data-type");
                  if (l.attr({
                      formId: o.required ? "form" : "none"
                  }),
                  h === "select") {
                      let p = l.attr("data-value")
                        , b = []
                        , g = o.optionLabels || {};
                      $.each(o.options, function(y, E) {
                          let c = g[E] || E
                            , f = e.translateData && e.translateData[c.toLowerCase()];
                          f && f.toLowerCase() !== c.toLowerCase() && (c = c + "(" + f + ")"),
                          b.push({
                              value: E,
                              label: c,
                              tanslateName: f
                          })
                      }),
                      o.optionsData = b,
                      o.optionsData.unshift({
                          value: "",
                          label: "请选择"
                      }),
                      _.trigger("selectMenu:updateSelectMenu", [o.optionsData, function(y) {
                          let E = !0;
                          $.each(y, function(c, f) {
                              if (f.$li.attr("data-value") === p)
                                  return l.attr("data-value", p).val(f.$li.text()),
                                  E = !1,
                                  !1
                          }),
                          E && l.attr("data-value", "").val("")
                      }
                      ]),
                      u.data("originData", o)
                  } else if (h === "selectOther") {
                      var s = []
                        , d = o.optionLabels || {};
                      $.each(o.tipsOptions, function(p, b) {
                          let g = d[b] || b
                            , y = e.translateData && e.translateData[g.toLowerCase()];
                          y && y.toLowerCase() !== g.toLowerCase() && (g = g + "(" + y + ")"),
                          s.push({
                              value: b,
                              label: g,
                              tanslateName: y
                          })
                      }),
                      o.optionsData = s,
                      _.trigger("selectMenu:updateSelectMenu", [o.optionsData]),
                      u.data("originData", o)
                  } else if (h === "checkbox" || h === "checkboxOther") {
                      let p = l.closest(".amazonCheckboxAttrBox").find(".amazonAttrCheckbox");
                      p.prop("disabled", !1),
                      o.notOptions && o.notOptions.length && ($.each(o.notOptions, function(b, g) {
                          p.filter('[data-value="' + strToUc(g) + '"]').prop({
                              disabled: !0,
                              checked: !1
                          })
                      }),
                      AMAZON_PRODUCT_FN.proAttributeFn.amazonAttrCheckboxClickFn(p.first()))
                  }
              } else {
                  let _ = a.filter('[data-nodePath="' + n + '"]')
                    , l = "";
                  _.length ? (_.find(".attrMust")[o.required ? "addClass" : "removeClass"]("must"),
                  l = _.find("[datatype]"),
                  l.attr({
                      formId: o.required ? "form" : "none"
                  })) : n.indexOf("externally_assigned_product_identifier") !== -1 && (l = $('[data-nodePath="' + n + '"]'),
                  l.attr({
                      formId: o.required ? "form" : "none"
                  }).closest("tr").find(".attrMust")[o.required ? "addClass" : "removeClass"]("must"))
              }
          }),
          r) {
              let n = $(".variationThemeBox")
                , o = n.attr("data-value")
                , u = n.val();
              AMAZON_PRODUCT_FN.proAttributeFn.variationThemeClickFn(o, u, !0)
          }
          $.each(e.$productAttrShow.find(".attributeParentTr"), function(n, o) {
              e.$productAttrShow.find('.attributeTr[data-required][data-nodePath^="' + $(o).attr("data-nodePath") + '"]').not(".hide").length ? $(o).removeClass("hide") : $(o).addClass("hide")
          }),
          AMAZON_PRODUCT_FN.customAttrOfSkuFn && AMAZON_PRODUCT_FN.customAttrOfSkuFn.batchBuildCustomAttrToSku()
      }
      Object.keys(i.remove).length && $.each(i.remove, function(a, t) {
          e.attributeDomObj[a] && (e.attributeDomObj[a].remove(),
          delete e.attributeDomObj[a])
      })
  }
    , Ta = W
    , Fa = O
    , G = new Map;
  function va(e, i) {
      const {valueDataList: a, customAttrFormData: t} = i
        , r = t[e] || {}
        , n = Object.assign({}, a || {}, r)
        , o = G.get(e)
        , u = o && o(n);
      if (u)
          return i.customAttrFormModify[e] = {
              ...i.customAttrFormModify[e],
              ...u.modify
          }
  }
  function Sa(e, i) {
      const {valueDataList: a, customAttrFormData: t} = i
        , r = t[e] || {}
        , n = Object.assign({}, a || {}, r)
        , o = le(P);
      i.customAttrFormModify[e] = o(n).create,
      G.set(e, o)
  }
  function Da(e, i) {
      G.has(e) ? va(e, i) : Sa(e, i)
  }
  const pe = function(e) {
      let i = v[e] || {};
      e.endWith(".0") && (i = v[e.substring(0, e.length - 2)] || {});
      let a = strEscapeCharacter(i.title + (i.tTitle ? "(" + i.tTitle + ")" : ""));
      return a.indexOf("原产国") !== -1 ? a = returnStringReplaceResult(a, "原产国", "原产地") : a.indexOf("国家") !== -1 && (a = returnStringReplaceResult(a, "国家", "国家/地区")),
      a
  }
    , Ba = function({attributeDomObj: e, commonVariationValueAttr: i}, a) {
      const r = a.toLowerCase().split("/").reduce( (u, s) => [...u, ...i[s] || []], [])
        , n = r.reduce( (u, s) => [...u, ...pa[s] || []], []);
      return Object.keys(e).filter(u => !n.includes(u) && !r.includes(u)).map(u => {
          const s = e[u];
          return {
              ...$(s).data("originData"),
              title: pe(u)
          }
      }
      )
  };
  function Ma({skuThemeList: e}, {productAttrApplyOfSkuTempBox: i}) {
      const a = $(e).find(".skuThemeTrBox")
        , t = [];
      return $.each(a, (r, n) => {
          const o = $(n)
            , u = o.attr("name")
            , s = o.attr("themename");
          t.push({
              name: ucToStr(s),
              themeNameUc: u
          })
      }
      ),
      t.reduce( (r, {name: n, themeNameUc: o}) => r += i.format({
          themeNameUc: o,
          showThemeName: n
      }), "")
  }
  const Na = ({maxItems: e, options: i, fieldType: a, tipsOptions: t}) => e > 1 ? i ? "mul" : "mulCustom" : i ? "select" : t ? "selectCustom" : a;
  function me({options: e, optionLabels: i, tipsOptions: a}, {translateData: t}) {
      const r = (e || a || []).map(n => {
          let o = i[n] || n
            , u = t && t[o.toLowerCase()];
          return u && u.toLowerCase() !== o.toLowerCase() && (o = `${o}（${u}）`),
          {
              value: n,
              label: o,
              tanslateName: u
          }
      }
      );
      return e && !a && r.unshift({
          value: "",
          label: "请选择"
      }),
      r
  }
  function Ia({options: e, value: i, formData: a, key: t}) {
      e.some(n => String(n.value) === i) || delete a[t]
  }
  function wa({result: e, data: i, amazonDataObj: a, value: t, formData: r, key: n}) {
      const o = me(i, a);
      t && Ia({
          value: t,
          formData: r,
          key: n,
          options: o
      }),
      e.find(".productAttrSelectOfSku").dropdownFilter({
          value: t,
          options: o,
          onSelect: function(u) {
              AMAZON_PRODUCT_FN.customAttrOfSkuFn.debounceUpdateAttrFormOfSkuItem(u, !0)
          }
      })
  }
  function Ra({result: e, data: i, amazonDataObj: a, value: t, formData: r}) {
      e.find(".productAttrSelectOfSku").dropdownFilter({
          value: t,
          options: me(i, a),
          input: !0,
          onBlur: function(n) {
              AMAZON_PRODUCT_FN.customAttrOfSkuFn.debounceUpdateAttrFormOfSkuItem(n, !0)
          },
          onSelect: function(n) {
              AMAZON_PRODUCT_FN.customAttrOfSkuFn.debounceUpdateAttrFormOfSkuItem(n, !0)
          }
      })
  }
  function he(e, i) {
      const {valueDataList: a, attributeDomObj: t} = e;
      delete a[i];
      const r = t[i];
      if (!r)
          return;
      const n = $(r.find("[datatype]"))
        , o = n.attr("data-type");
      switch (o) {
      case "select":
      case "selectOther":
          n.attr("data-value", "").val("");
          break;
      case "checkbox":
      case "checkboxOther":
          r.find('input[type="checkbox"]').prop("checked", !1),
          n.attr("data-value", "").val(""),
          o === "checkboxOther" && r.find(".amazonCustomAttrBox input").val("");
          break;
      default:
          n.val("")
      }
  }
  function k(e, i={}) {
      const a = e.lastIndexOf(".0")
        , t = e.substring(0, a + 1)
        , r = e.substring(a + 2)
        , n = new RegExp("^" + t + "[\\S]*" + r + "$")
        , o = Object.keys(i).filter(u => n.test(u));
      return {
          keys: o,
          value: o.map(u => i[u])
      }
  }
  const fe = ({result: e, amazonDataObj: i, key: a, formData: t, trid: r}) => {
      const {valueDataList: n} = i;
      let o = k(a, n)
        , u = [];
      if (o && o.keys.length) {
          const {keys: p, value: b} = o;
          p.forEach(g => {
              t[g] = n[g],
              he(i, g)
          }
          ),
          u = b
      } else {
          const {value: p} = k(a, t);
          u = p || []
      }
      const _ = ge({
          amazonDataObj: i,
          key: a,
          formData: t,
          trid: r
      }).filter( ({value: p}) => u.includes(p)).map( ({label: p}) => p).join("、")
        , l = _.length > 20 ? _.substring(0, 20) + "..." : _;
      e.find(".itemWrap").text(l).attr("data-content", `<div style="width: 140px;">${_}</div>`).popover()
  }
  ;
  function Y(e) {
      return e != null ? `${e}` : e
  }
  const xa = (e, i, a) => {
      const {productAttrOfSkuTempBox: t, productAttrSelectOfSku: r, productAttrNumberIptCustomOfSku: n, productAttrIntIptCustomOfSku: o, productAttrIptCustomOfSku: u, productAttrDateCustomOfSku: s, productAttrMulOfSku: d, productAttrMulCustomOfSku: _} = e
        , {attributeDomObj: l, customAttrFormModify: h, customAttrFormData: p, valueDataList: b} = i
        , g = p[a] || (p[a] = {})
        , y = {
          mul: (c, f) => d.format({
              valType: c.fieldType
          }),
          mulCustom: (c, f) => _.format({
              valType: c.fieldType
          }),
          select: (c, f) => r.format(),
          selectCustom: (c, f) => r.format(),
          number: (c, f) => n.format({
              value: f
          }),
          integer: (c, f) => o.format({
              value: f
          }),
          datetime: (c, f) => s.format({
              value: f
          }),
          string: (c, f) => u.format({
              value: strEscapeCharacter(f)
          })
      }
        , E = {
          select: ({result: c, data: f, value: m, key: T}) => wa({
              result: c,
              data: f,
              amazonDataObj: i,
              value: m,
              formData: g,
              key: T
          }),
          selectCustom: ({result: c, data: f, value: m, key: T}) => Ra({
              result: c,
              data: f,
              amazonDataObj: i,
              value: m,
              formData: g,
              key: T
          }),
          mul: ({result: c, key: f}) => fe({
              result: c,
              amazonDataObj: i,
              key: f,
              formData: g,
              trid: a
          }),
          mulCustom: ({result: c, key: f}) => fe({
              result: c,
              amazonDataObj: i,
              key: f,
              formData: g,
              trid: a
          })
      };
      return c => {
          const f = l[c]
            , m = h[a][c] || $(f).data("originData")
            , T = Na(m);
          let A = "";
          ["mulCustom", "mul"].includes(T) || (A = Y(b[c]) || Y(g[c]) || "",
          Y(b[c]) && he(i, c),
          A && (g[c] = A));
          const V = $(t.format({
              nodePath: m.name,
              must: m.required ? "must" : "",
              valType: m.fieldType,
              minLength: m.minLength !== null && m.minLength !== void 0 ? m.minLength : "",
              maxLength: m.maxLength !== null && m.maxLength !== void 0 ? m.maxLength : "",
              minByteLength: m.minUtf8ByteLength !== null && m.minUtf8ByteLength !== void 0 ? m.minUtf8ByteLength : "",
              maxByteLength: m.maxUtf8ByteLength !== null && m.maxUtf8ByteLength !== void 0 ? m.maxUtf8ByteLength : "",
              minimum: m.minimum !== null && m.minimum !== void 0 ? m.minimum : "",
              maximum: m.maximum !== null && m.maximum !== void 0 ? m.maximum : "",
              maxItems: m.maxItems,
              content: (y[T] || y.string)(m, A),
              inputType: T,
              applyList: Ma(i, e)
          }));
          return E[T] && E[T]({
              result: V,
              data: m,
              value: A,
              key: c
          }),
          V
      }
  }
    , La = (e, {html: i}, a) => {
      const {customAttrChecked: t} = e;
      if (!t.length)
          return;
      const r = xa(i, e, a);
      return Da(a, e),
      t.map(n => r(n))
  }
  ;
  function ge({amazonDataObj: e, key: i, formData: a={}, trid: t, fieldData: r=null}) {
      const {attributeDomObj: n, translateData: o, customAttrFormModify: u} = e
        , s = P()
        , {options: d, optionLabels: _, tipsOptions: l} = s[i]
        , h = r || u[t][i] || n[i].data("originData")
        , {notOptions: p} = h
        , b = (d || l || []).map(y => {
          let E = _[y] || y
            , c = o && o[E.toLowerCase()];
          return c && c.toLowerCase() !== E.toLowerCase() && (E = `${E}（${c}）`),
          {
              value: y,
              label: E,
              tanslateName: c,
              disabled: (p || []).includes(y)
          }
      }
      );
      let g = [];
      if (!d) {
          const {value: y} = k(i, a);
          if (y && y.length) {
              const E = l || [];
              g = y.filter(c => !E.includes(c)).map(c => ({
                  value: c,
                  label: c,
                  tanslateName: c
              }))
          }
      }
      return [...b, ...g]
  }
  const Pa = Aa()
    , Oa = Ca()
    , ka = Ta
    , za = Fa;
  C.buildSkuTdOfCustomAttr = La,
  C.construct = ka,
  C.getCustomAttrOption = Ba,
  C.getFieldMap = P,
  C.getFormItemDomFn = Pa,
  C.getMulOptions = ge,
  C.getMulSelectList = k,
  C.getRelevance = ma,
  C.getTitle = pe,
  C.getVariations = za,
  C.updateFormItemDomFn = Oa,
  Object.defineProperty(C, Symbol.toStringTag, {
      value: "Module"
  })
});
