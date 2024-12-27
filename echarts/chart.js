// 声明图表变量
let parentChart;
let timeAxisData = [];

// 加载数据
fetch('./demo.json')
    .then(response => response.json())
    .then(data => {
        // 初始化时间轴数据
        timeAxisData = data.pskuSaleTrendList.map(item => item.curDate);
        
        // 初始化图表
        initParentChart();
    })
    .catch(error => {
        console.error('加载数据失败:', error);
    });

// 初始化父SKU销量趋势图
function initParentChart() {
    console.log('timeAxisData:', timeAxisData);
}




