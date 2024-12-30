let canvas;
let textLayers = [];

// 初始化
function init() {
    // 创建 canvas 实例
    canvas = new fabric.Canvas('canvas', {
        width: 800,
        height: 600,
        selection: true,  // 允许选择
        interactive: true // 允许交互
    });

    // 加载图片
    fabric.Image.fromURL('fy.jpg', function(img) {
        // 调整图片大小以适应画布
        img.scaleToWidth(canvas.width);
        // 设置图片为背景，不可选择
        img.set({
            selectable: false,
            evented: false
        });
        canvas.add(img);
        canvas.renderAll();
    });

    // 添加文本编辑事件监听
    canvas.on('text:changed', function(e) {
        const textObj = e.target;
        updateTextList();
    });

    // 添加选中事件监听
    canvas.on('selection:created', function(e) {
        if (e.target && e.target.type === 'i-text') {
            highlightTextInList(e.target);
        }
    });
}

// 识别文字
async function detectText() {
    try {
        const worker = await Tesseract.createWorker('chi_sim');
        await worker.loadLanguage('chi_sim');
        await worker.initialize('chi_sim');
        
        // 获取canvas图片数据
        const dataUrl = canvas.toDataURL();
        
        // 识别文字
        const result = await worker.recognize(dataUrl);
        console.log('识别结果:', result);  // 添加调试日志
        
        // 清除现有文本图层
        clearTextLayers();
        
        // 为每个识别出的文字创建可编辑文本图层
        result.data.words.forEach(word => {
            // 计算相对于canvas的位置
            const scale = canvas.width / result.data.width;
            const x = word.bbox.x0 * scale;
            const y = word.bbox.y0 * scale;
            
            const text = new fabric.IText(word.text, {
                left: x,
                top: y,
                fontSize: 20 * scale,  // 根据图片缩放调整字体大小
                fill: 'red',
                editable: true,
                selectable: true,
                hasControls: true,  // 允许调整大小和旋转
                hasBorders: true,   // 显示边框
                lockUniScaling: false  // 允许非等比缩放
            });
            
            canvas.add(text);
            textLayers.push({
                chinese: text,
                english: null,
                bbox: word.bbox
            });
        });
        
        updateTextList();
        await worker.terminate();
        
    } catch (error) {
        console.error('文字识别失败:', error);
    }
}

// 清除文本图层
function clearTextLayers() {
    textLayers.forEach(layer => {
        if (layer.chinese) canvas.remove(layer.chinese);
        if (layer.english) canvas.remove(layer.english);
    });
    textLayers = [];
    updateTextList();
}

// 高亮列表中的文本
function highlightTextInList(textObj) {
    const items = document.querySelectorAll('.text-item');
    items.forEach(item => item.classList.remove('active'));
    
    textLayers.forEach((layer, index) => {
        if (layer.chinese === textObj || layer.english === textObj) {
            const container = layer.chinese === textObj ? 'chineseTexts' : 'englishTexts';
            const item = document.querySelector(`#${container} .text-item:nth-child(${index + 1})`);
            if (item) item.classList.add('active');
        }
    });
}

// 更新文字列表显示
function updateTextList() {
    const chineseContainer = document.getElementById('chineseTexts');
    const englishContainer = document.getElementById('englishTexts');
    
    chineseContainer.innerHTML = '';
    englishContainer.innerHTML = '';
    
    textLayers.forEach((layer, index) => {
        if (layer.chinese) {
            const div = document.createElement('div');
            div.className = 'text-item';
            div.textContent = layer.chinese.text;
            div.onclick = () => selectText(layer.chinese);
            chineseContainer.appendChild(div);
        }
        
        if (layer.english) {
            const div = document.createElement('div');
            div.className = 'text-item';
            div.textContent = layer.english.text;
            div.onclick = () => selectText(layer.english);
            englishContainer.appendChild(div);
        }
    });
}

// 选中文本
function selectText(textObj) {
    canvas.setActiveObject(textObj);
    canvas.renderAll();
    highlightTextInList(textObj);
}

// 翻译文字
async function translateText() {
    for (let layer of textLayers) {
        if (layer.chinese && !layer.english) {
            try {
                const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        q: layer.chinese.text,
                        source: 'zh',
                        target: 'en'
                    })
                });
                
                const data = await response.json();
                const translatedText = data.data.translations[0].translatedText;
                
                // 创建英文文本图层
                const englishText = new fabric.IText(translatedText, {
                    left: layer.chinese.left,
                    top: layer.chinese.top + 30,
                    fontSize: 20,
                    fill: 'blue',
                    editable: true
                });
                
                canvas.add(englishText);
                layer.english = englishText;
            } catch (error) {
                console.error('翻译失败:', error);
            }
        }
    }
    
    updateTextList();
}

// 保存图片
function saveImage() {
    const dataUrl = canvas.toDataURL({
        format: 'png',
        quality: 1
    });
    
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = dataUrl;
    link.click();
}

// 页面加载完成后初始化
window.addEventListener('load', init); 