/**
 * 表单渲染模块 - 基于LayUI
 * 用于将字段数据渲染为LayUI表单
 */

/**
 * 渲染表单
 * @param {Array} fields - 字段数组，包含表单项配置
 * @param {string} formSelector - 表单容器选择器
 */
function renderForm(fields, formSelector) {
  const formContainer = document.querySelector(formSelector);
  if (!formContainer) {
    console.error('表单容器未找到:', formSelector);
    return;
  }
  
  // 清空表单容器
  formContainer.innerHTML = '';
  
  // 将字段按照父子关系分组
  const fieldGroups = groupFieldsByParent(fields);
  
  // 渲染字段组
  renderFieldGroups(fieldGroups, formContainer);
  
  // 添加提交按钮
  addSubmitButtons(formContainer);
  
  // 重新渲染表单组件
  layui.form.render();
  
  // 监听表单提交
  layui.form.on('submit(formSubmit)', function(data) {
    console.log('表单数据:', data.field);
    layui.layer.msg('提交成功');
    return false; // 阻止表单跳转
  });
}

/**
 * 将字段按照父子关系分组
 * @param {Array} fields - 字段数组
 * @returns {Object} 分组后的字段对象
 */
function groupFieldsByParent(fields) {
  const groups = {};
  
  fields.forEach(field => {
    if (!field.title) return;
    
    // 检查字段名是否包含点号（表示子字段）
    if (field.name.includes('.')) {
      // 提取父字段名（例如：item_name.0.value -> item_name）
      const parentName = field.name.split('.')[0];
      
      // 查找父字段
      const parentField = fields.find(f => f.name === parentName);
      
      // 如果父字段存在，则将当前字段添加到对应的组
      if (parentField) {
        if (!groups[parentName]) {
          groups[parentName] = {
            parent: parentField,
            children: []
          };
        }
        groups[parentName].children.push(field);
      } else {
        // 如果没有找到父字段，则作为独立字段处理
        if (!groups[field.name]) {
          groups[field.name] = {
            parent: null,
            children: [field]
          };
        }
      }
    } else {
      // 对于没有子字段的字段，检查是否已经作为父字段存在
      if (!groups[field.name]) {
        groups[field.name] = {
          parent: field,
          children: []
        };
      } else {
        // 如果已经存在（由子字段创建），则更新父字段
        groups[field.name].parent = field;
      }
    }
  });
  
  return groups;
}

/**
 * 渲染字段组
 * @param {Object} fieldGroups - 分组后的字段对象
 * @param {HTMLElement} container - 表单容器
 */
function renderFieldGroups(fieldGroups, container) {
  // 遍历所有字段组
  Object.keys(fieldGroups).forEach(groupName => {
    const group = fieldGroups[groupName];
    
    // 如果有子字段，根据子字段数量决定渲染方式
    if (group.children.length > 0) {
      // 只有一个子字段时，直接渲染子字段，不进行分组
      if (group.children.length === 1) {
        renderField(group.children[0], container);
      } else {
        // 多个子字段时，进行分组渲染
        renderFieldGroup(group, container);
      }
    } else if (group.parent) {
      // 如果没有子字段但有父字段，则直接渲染父字段
      renderField(group.parent, container);
    }
  });
}

/**
 * 渲染字段组
 * @param {Object} group - 字段组对象，包含parent和children
 * @param {HTMLElement} container - 表单容器
 */
function renderFieldGroup(group, container) {
  if (!group.parent || !group.parent.title) return;
  
  // 创建分组容器
  const fieldsetDiv = document.createElement('div');
  fieldsetDiv.className = 'layui-form-item layui-form-group';
  fieldsetDiv.style.marginBottom = '20px';
  fieldsetDiv.style.borderBottom = '1px solid #e6e6e6';
  fieldsetDiv.style.paddingBottom = '10px';
  
  // 创建分组标题
  const legendDiv = document.createElement('div');
  legendDiv.className = 'layui-form-group-title';
  legendDiv.style.fontSize = '16px';
  legendDiv.style.fontWeight = 'bold';
  legendDiv.style.marginBottom = '10px';
  legendDiv.textContent = group.parent.title;
  
  // 添加描述（如果有）
  if (group.parent.description) {
    const descDiv = document.createElement('div');
    descDiv.className = 'layui-form-group-desc';
    descDiv.style.fontSize = '12px';
    descDiv.style.color = '#666';
    descDiv.style.marginBottom = '10px';
    descDiv.textContent = group.parent.description;
    legendDiv.appendChild(descDiv);
  }
  
  fieldsetDiv.appendChild(legendDiv);
  
  // 渲染子字段
  group.children.forEach(child => {
    renderField(child, fieldsetDiv);
  });
  
  container.appendChild(fieldsetDiv);
}

/**
 * 渲染单个字段
 * @param {Object} field - 字段对象
 * @param {HTMLElement} container - 容器元素
 */
function renderField(field, container) {
  // 创建表单项容器
  const itemDiv = document.createElement('div');
  itemDiv.className = 'layui-form-item';
  
  // 创建标签
  const labelDiv = document.createElement('div');
  labelDiv.className = 'layui-form-label';
  
  // 处理必填项标记
  if (field.required) {
    const requiredSpan = document.createElement('span');
    requiredSpan.className = 'layui-badge-dot';
    requiredSpan.style.marginRight = '5px';
    labelDiv.appendChild(requiredSpan);
  }
  
  labelDiv.appendChild(document.createTextNode(field.title));
  itemDiv.appendChild(labelDiv);
  
  // 创建输入区域
  const inputDiv = document.createElement('div');
  inputDiv.className = 'layui-input-block';
  
  // 根据是否有options字段决定渲染select还是input
  if (field.options) {
    // 渲染select
    const select = document.createElement('select');
    select.name = field.name;
    
    // 添加必填验证
    if (field.required) {
      select.setAttribute('lay-verify', 'required');
    }
    
    select.setAttribute('lay-filter', field.name.replace(/\./g, '_'));
    
    // 添加默认空选项
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '请选择';
    select.appendChild(defaultOption);
    
    // 添加选项
    field.options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      
      // 使用optionLabels显示标签（如果有）
      if (field.optionLabels && field.optionLabels[option]) {
        optionElement.textContent = field.optionLabels[option];
      } else {
        optionElement.textContent = option;
      }
      
      select.appendChild(optionElement);
    });
    
    inputDiv.appendChild(select);
  } else {
    // 渲染input
    const input = document.createElement('input');
    input.type = 'text';
    input.name = field.name;
    input.className = 'layui-input';
    
    // 添加必填验证
    if (field.required) {
      input.setAttribute('lay-verify', 'required');
    }
    
    // 添加长度限制
    if (field.maxLength) {
      input.maxLength = field.maxLength;
    }
    
    // 添加placeholder
    if (field.description) {
      input.placeholder = field.description;
    }
    
    inputDiv.appendChild(input);
  }
  
  itemDiv.appendChild(inputDiv);
  container.appendChild(itemDiv);
}

/**
 * 添加提交和重置按钮
 * @param {HTMLElement} container - 表单容器
 */
function addSubmitButtons(container) {
  const submitDiv = document.createElement('div');
  submitDiv.className = 'layui-form-item';
  
  const submitButtonDiv = document.createElement('div');
  submitButtonDiv.className = 'layui-input-block';
  
  const submitButton = document.createElement('button');
  submitButton.className = 'layui-btn';
  submitButton.setAttribute('lay-submit', '');
  submitButton.setAttribute('lay-filter', 'formSubmit');
  submitButton.textContent = '提交';
  
  const resetButton = document.createElement('button');
  resetButton.type = 'reset';
  resetButton.className = 'layui-btn layui-btn-primary';
  resetButton.textContent = '重置';
  
  submitButtonDiv.appendChild(submitButton);
  submitButtonDiv.appendChild(resetButton);
  submitDiv.appendChild(submitButtonDiv);
  container.appendChild(submitDiv);
}

// 导出函数到全局
window.renderForm = renderForm; 