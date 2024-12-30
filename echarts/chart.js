// 声明图表变量
let parentChart, childChart, stockChart, inStockChart, outStockChart;
let timeAxisData = [];
let chartData = null;  // 存储获取到的数据

// 获取数据
async function fetchChartData() {
    if (chartData) return chartData;  // 如果已有数据，直接返回
    
    try {
        const response = await fetch('./demo.json');
        chartData = await response.json();
        timeAxisData = chartData.pskuSaleTrendList.map(item => item.curDate);
        return chartData;
    } catch (error) {
        console.error('加载数据失败:', error);
        return null;
    }
}

// 等待 DOM 加载完成后初始化
window.addEventListener('DOMContentLoaded', async function() {
    // 初始化父SKU图表实例
    parentChart = echarts.init(document.getElementById('parentChart'));
    // 初始化子SKU图表实例
    childChart = echarts.init(document.getElementById('childChart'));
    stockChart = echarts.init(document.getElementById('stockChart'));
    inStockChart = echarts.init(document.getElementById('inStockChart'));
    outStockChart = echarts.init(document.getElementById('outStockChart'));
    
    // 获取数据并渲染父SKU图表
    await initParentSKUChart();
});

// tab切换处理
function switchTab(type) {
    // 更新tab样式
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[onclick="switchTab('${type}')"]`).classList.add('active');

    // 更新图表显示
    document.querySelectorAll('.chart-container').forEach(chart => {
        chart.classList.remove('active');
        chart.style.display = 'none';
    });
    const activeChart = document.getElementById(`${type}Chart`);
    activeChart.classList.add('active');
    activeChart.style.display = 'block';

    // 显示/隐藏SKU选择器
    const skuSelector = document.getElementById('skuSelector');
    skuSelector.style.display = (type === 'child' || type === 'stock' || type === 'inStock' || type === 'outStock') ? 'block' : 'none';

    // 重新渲染对应图表
    if (type === 'child') {
        initChildSKUChart();
    } else if (type === 'stock') {
        initStockTrendChart();
    } else if (type === 'inStock') {
        initInStockDetailChart();
    } else if (type === 'outStock') {
        initOutStockDetailChart();
    } else {
        initParentSKUChart();
    }

    // 触发resize以确保图表正确渲染
    const charts = { 
        parent: parentChart, 
        child: childChart, 
        stock: stockChart,
        inStock: inStockChart,
        outStock: outStockChart
    };
    if (charts[type]) {
        charts[type].resize();
    }
}

// 初始化父SKU销量趋势图
async function initParentSKUChart() {
    const data = await fetchChartData();
    if (!data) return;
    
    // 渲染折线图
    renderLineChart({
        timeData: timeAxisData,
        seriesData: data.pskuSaleTrendList
    });
}

// 渲染折线图
function renderLineChart({ timeData, seriesData }) {
    const option = {
        title: {
            text: '父SKU销量趋势',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            orient: 'vertical',
            right: '2%',
            top: 'middle',
            data: ['商品数', '利润']
        },
        grid: {
            left: '3%',
            right: '12%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: timeData,
            axisLabel: {
                formatter: function(value) {
                    return value.substring(5);  // 只显示月-日
                }
            }
        },
        yAxis: [
            {
                type: 'value',
                name: '数量',
                position: 'left',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#5470C6'
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '利润',
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#91CC75'
                    }
                },
                axisLabel: {
                    formatter: '{value} 元'
                }
            }
        ],
        series: [
            {
                name: '商品数',
                type: 'line',
                data: seriesData.map(item => item.productQty),
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    width: 2,
                    color: '#5470C6'
                }
            },
            {
                name: '利润',
                type: 'line',
                yAxisIndex: 1,
                data: seriesData.map(item => Number(item.profit)),
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    width: 2,
                    color: '#91CC75'
                }
            }
        ],
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                bottom: '8%',
                height: 20,
                borderColor: 'transparent'
            },
            {
                type: 'inside'
            }
        ]
    };

    // 设置图表配置
    parentChart.setOption(option);
}

// 初始化子SKU销量趋势图
async function initChildSKUChart() {
    const data = await fetchChartData();
    if (!data) return;
    
    // 初始化SKU选择器
    initSKUSelector(Object.keys(data.sskuSaleTrendMap));
    
    // 获取第一个SKU的数据进行渲染
    const firstSKU = Object.keys(data.sskuSaleTrendMap)[0];
    renderSKUData(firstSKU);
}

// 初始化SKU选择器
function initSKUSelector(skuList) {
    const select = document.querySelector('#skuSelector select');
    select.innerHTML = skuList.map(sku => 
        `<option value="${sku}">${sku}</option>`
    ).join('');
}

// 切换SKU
async function switchSKU(sku) {
    const data = await fetchChartData();
    if (!data) return;
    
    // 根据当前激活的tab决定渲染哪种图表
    const activeTab = document.querySelector('.tab.active').textContent;
    if (activeTab === '子SKU销量趋势') {
        renderSKUData(sku);
    } else if (activeTab === '出入库趋势') {
        renderStockData(sku);
    } else if (activeTab === '入库明细') {
        renderInStockData(sku);
    } else if (activeTab === '出库明细') {
        renderOutStockData(sku);
    }
}

// 渲染指定SKU的数据
function renderSKUData(sku) {
    const skuData = chartData.sskuSaleTrendMap[sku];
    
    renderChildLineChart({
        timeData: timeAxisData,
        seriesData: skuData,
        sku: sku
    });
}

// 渲染子SKU折线图
function renderChildLineChart({ timeData, seriesData, sku }) {
    // 构建标记线数据
    let markLineData = [];
    // 从 sskuNotSaleMap 获取禁售信息
    const notSaleInfo = chartData.sskuNotSaleMap[sku];
    if (notSaleInfo && notSaleInfo.notSaleTime) {
        markLineData = [{
            name: '禁售时间',
            xAxis: notSaleInfo.notSaleTime,
            label: {
                formatter: '禁售',
                position: 'start',
                color: '#ff4d4f'
            },
            lineStyle: {
                color: '#ff4d4f',
                type: 'solid',
                width: 2
            }
        }];
    }

    const option = {
        title: {
            text: `子SKU销量趋势 (${sku})`,
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            formatter: function(params) {
                let result = `${params[0].axisValue}<br/>`;
                
                // 先检查是否是禁售时间点
                if (notSaleInfo && notSaleInfo.notSaleTime === params[0].axisValue) {
                    result += [
                        `<span style="color: #ff4d4f">⚠ 禁售信息</span>`,
                        `禁售原因: ${notSaleInfo.notSaleReason}`,
                        `禁售时间: ${notSaleInfo.notSaleTime}`,
                        `<br/>`  // 添加一个空行分隔
                    ].join('<br/>');
                }

                // 添加常规数据点的提示
                params.forEach(param => {
                    if (param.seriesName) {  // 只处理数据系列
                        const profit = param.seriesName === '商品数' ? 
                            `利润: ${seriesData[param.dataIndex].profit}元` : '';
                        result += `${param.marker}${param.seriesName}: ${param.value}${profit ? '<br/>' + profit : ''}<br/>`;
                    }
                });
                return result;
            }
        },
        legend: {
            orient: 'vertical',
            right: '2%',
            top: 'middle',
            data: ['商品数', '订单数']
        },
        grid: {
            left: '3%',
            right: '12%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: timeData,
            axisLabel: {
                formatter: function(value) {
                    return value.substring(5);
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '数量',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#333'
                }
            }
        },
        series: [
            {
                name: '商品数',
                type: 'line',
                data: seriesData.map(item => item.productQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#5470C6'
                },
                markLine: {
                    silent: false,
                    data: markLineData,
                    animation: false,
                    emphasis: {
                        lineStyle: {
                            width: 3,
                            color: '#ff4d4f'
                        }
                    }
                }
            },
            {
                name: '订单数',
                type: 'line',
                data: seriesData.map(item => item.orderQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#91CC75'
                }
            }
        ],
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                bottom: '8%',
                height: 20,
                borderColor: 'transparent'
            },
            {
                type: 'inside'
            }
        ]
    };

    // 设置图表配置
    childChart.setOption(option);
}

// 添加出入库趋势图初始化函数
async function initStockTrendChart() {
    const data = await fetchChartData();
    if (!data) return;
    
    // 初始化SKU选择器
    initSKUSelector(Object.keys(data.stockTrendMap));
    
    // 获取第一个SKU的数据进行渲染
    const firstSKU = Object.keys(data.stockTrendMap)[0];
    renderStockData(firstSKU);
}

// 添加渲染出入库数据函数
function renderStockData(sku) {
    const stockData = chartData.stockTrendMap[sku];
    
    renderStockTrendChart({
        timeData: timeAxisData,
        seriesData: stockData,
        sku: sku
    });
}

// 添加渲染出入库趋势图函数
function renderStockTrendChart({ timeData, seriesData, sku }) {
    // 构建标记线数据
    let markLineData = [];
    // 从 sskuNotSaleMap 获取禁售信息
    const notSaleInfo = chartData.sskuNotSaleMap[sku];
    if (notSaleInfo && notSaleInfo.notSaleTime) {
        markLineData = [{
            name: '禁售时间',
            xAxis: notSaleInfo.notSaleTime,
            label: {
                formatter: '禁售',
                position: 'start',
                color: '#ff4d4f'
            },
            lineStyle: {
                color: '#ff4d4f',
                type: 'solid',
                width: 2
            }
        }];
    }

    const option = {
        title: {
            text: `出入库趋势 (${sku})`,
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            formatter: function(params) {
                let result = `${params[0].axisValue}<br/>`;
                
                // 先检查是否是禁售时间点
                if (notSaleInfo && notSaleInfo.notSaleTime === params[0].axisValue) {
                    result += [
                        `<span style="color: #ff4d4f">⚠ 禁售信息</span>`,
                        `禁售原因: ${notSaleInfo.notSaleReason}`,
                        `禁售时间: ${notSaleInfo.notSaleTime}`,
                        `<br/>`
                    ].join('<br/>');
                }

                // 添加常规数据点的提示
                params.forEach(param => {
                    if (param.seriesName) {
                        result += `${param.marker}${param.seriesName}: ${param.value}<br/>`;
                    }
                });
                return result;
            }
        },
        legend: {
            orient: 'vertical',
            right: '2%',
            top: 'middle',
            data: ['在库数', '入库数', '出库数']
        },
        grid: {
            left: '3%',
            right: '12%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: timeData,
            axisLabel: {
                formatter: function(value) {
                    return value.substring(5);
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '数量',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#333'
                }
            }
        },
        series: [
            {
                name: '在库数',
                type: 'line',
                data: seriesData.map(item => item.currentStock),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#5470C6'
                },
                markLine: {
                    silent: false,
                    data: markLineData,
                    animation: false,
                    emphasis: {
                        lineStyle: {
                            width: 3,
                            color: '#ff4d4f'
                        }
                    }
                }
            },
            {
                name: '入库数',
                type: 'line',
                data: seriesData.map(item => item.totalInStockQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#91CC75'
                }
            },
            {
                name: '出库数',
                type: 'line',
                data: seriesData.map(item => item.totalOutStockQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#FAC858'
                }
            }
        ],
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                bottom: '8%',
                height: 20,
                borderColor: 'transparent'
            },
            {
                type: 'inside'
            }
        ]
    };

    // 设置图表配置
    stockChart.setOption(option);
}

// 添加入库明细图初始化函数
async function initInStockDetailChart() {
    const data = await fetchChartData();
    if (!data) return;
    
    // 初始化SKU选择器
    initSKUSelector(Object.keys(data.inStockDetailMap));
    
    // 获取第一个SKU的数据进行渲染
    const firstSKU = Object.keys(data.inStockDetailMap)[0];
    renderInStockData(firstSKU);
}

// 添加渲染入库明细数据函数
function renderInStockData(sku) {
    const inStockData = chartData.inStockDetailMap[sku];
    
    renderInStockDetailChart({
        timeData: timeAxisData,
        seriesData: inStockData,
        sku: sku
    });
}

// 添加渲染入库明细图函数
function renderInStockDetailChart({ timeData, seriesData, sku }) {
    // 构建标记线数据
    let markLineData = [];
    // 从 sskuNotSaleMap 获取禁售信息
    const notSaleInfo = chartData.sskuNotSaleMap[sku];
    if (notSaleInfo && notSaleInfo.notSaleTime) {
        markLineData = [{
            name: '禁售时间',
            xAxis: notSaleInfo.notSaleTime,
            label: {
                formatter: '禁售',
                position: 'start',
                color: '#ff4d4f'
            },
            lineStyle: {
                color: '#ff4d4f',
                type: 'solid',
                width: 2
            }
        }];
    }

    const option = {
        title: {
            text: `入库明细 (${sku})`,
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            formatter: function(params) {
                let result = `${params[0].axisValue}<br/>`;
                
                // 先检查是否是禁售时间点
                if (notSaleInfo && notSaleInfo.notSaleTime === params[0].axisValue) {
                    result += [
                        `<span style="color: #ff4d4f">⚠ 禁售信息</span>`,
                        `禁售原因: ${notSaleInfo.notSaleReason}`,
                        `禁售时间: ${notSaleInfo.notSaleTime}`,
                        `<br/>`
                    ].join('<br/>');
                }

                // 添加常规数据点的提示
                params.forEach(param => {
                    if (param.seriesName) {
                        result += `${param.marker}${param.seriesName}: ${param.value}<br/>`;
                        
                        // 如果是其他入库数，且当前时间点有明细数据，则显示明细
                        if (param.seriesName === '其他入库数') {
                            const currentData = seriesData[param.dataIndex];
                            if (currentData.details && currentData.details.length > 0) {
                                result += '<div style="margin-left: 20px; margin-top: 5px;">';
                                result += '入库明细:<br/>';
                                currentData.details.forEach(detail => {
                                    result += [
                                        `<br />类型: ${detail.stockType}`,
                                        `数量: ${detail.num}`,
                                        `审核人: ${detail.auditor}`,
                                        '---'
                                    ].join('<br/>');
                                });
                                result += '</div>';
                            }
                        }
                    }
                });
                return result;
            }
        },
        legend: {
            orient: 'vertical',
            right: '2%',
            top: 'middle',
            data: ['采购入库数', '其他入库数', '调拨入库数']
        },
        grid: {
            left: '3%',
            right: '12%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: timeData,
            axisLabel: {
                formatter: function(value) {
                    return value.substring(5);
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '数量',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#333'
                }
            }
        },
        series: [
            {
                name: '采购入库数',
                type: 'line',
                data: seriesData.map(item => item.purchaseInStockQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#5470C6'
                },
                markLine: {
                    silent: false,
                    data: markLineData,
                    animation: false,
                    emphasis: {
                        lineStyle: {
                            width: 3,
                            color: '#ff4d4f'
                        }
                    }
                }
            },
            {
                name: '其他入库数',
                type: 'line',
                data: seriesData.map(item => item.otherInStockQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#91CC75'
                }
            },
            {
                name: '调拨入库数',
                type: 'line',
                data: seriesData.map(item => item.tranOrderInQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#FAC858'
                }
            }
        ],
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                bottom: '8%',
                height: 20,
                borderColor: 'transparent'
            },
            {
                type: 'inside'
            }
        ]
    };

    // 设置图表配置
    inStockChart.setOption(option);
}

// 添加出库明细图初始化函数
async function initOutStockDetailChart() {
    const data = await fetchChartData();
    if (!data) return;
    
    // 初始化SKU选择器
    initSKUSelector(Object.keys(data.outStockDetailMap));
    
    // 获取第一个SKU的数据进行渲染
    const firstSKU = Object.keys(data.outStockDetailMap)[0];
    renderOutStockData(firstSKU);
}

// 添加渲染出库明细数据函数
function renderOutStockData(sku) {
    const outStockData = chartData.outStockDetailMap[sku];
    
    renderOutStockDetailChart({
        timeData: timeAxisData,
        seriesData: outStockData,
        sku: sku
    });
}

// 添加渲染出库明细图函数
function renderOutStockDetailChart({ timeData, seriesData, sku }) {
    // 构建标记线数据
    let markLineData = [];
    // 从 sskuNotSaleMap 获取禁售信息
    const notSaleInfo = chartData.sskuNotSaleMap[sku];
    if (notSaleInfo && notSaleInfo.notSaleTime) {
        markLineData = [{
            name: '禁售时间',
            xAxis: notSaleInfo.notSaleTime,
            label: {
                formatter: '禁售',
                position: 'start',
                color: '#ff4d4f'
            },
            lineStyle: {
                color: '#ff4d4f',
                type: 'solid',
                width: 2
            }
        }];
    }

    const option = {
        title: {
            text: `出库明细 (${sku})`,
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            formatter: function(params) {
                let result = `${params[0].axisValue}<br/>`;
                
                // 先检查是否是禁售时间点
                if (notSaleInfo && notSaleInfo.notSaleTime === params[0].axisValue) {
                    result += [
                        `<span style="color: #ff4d4f">⚠ 禁售信息</span>`,
                        `禁售原因: ${notSaleInfo.notSaleReason}`,
                        `禁售时间: ${notSaleInfo.notSaleTime}`,
                        `<br/>`
                    ].join('<br/>');
                }

                // 添加常规数据点的提示
                params.forEach(param => {
                    if (param.seriesName) {
                        result += `${param.marker}${param.seriesName}: ${param.value}<br/>`;
                        
                        // 如果是其他出库，且当前时间点有明细数据，则显示明细
                        if (param.seriesName === '其他出库') {
                            const currentData = seriesData[param.dataIndex];
                            if (currentData.details && currentData.details.length > 0) {
                                result += '<div style="margin-left: 20px; margin-top: 5px;">';
                                result += '出库明细:<br/>';
                                currentData.details.forEach(detail => {
                                    result += [
                                        `<br />类型: ${detail.stockType}`,
                                        `数量: ${detail.num}`,
                                        `审核人: ${detail.auditor}`,
                                        '---'
                                    ].join('<br/>');
                                });
                                result += '</div>';
                            }
                        }
                    }
                });
                return result;
            }
        },
        legend: {
            orient: 'vertical',
            right: '2%',
            top: 'middle',
            data: ['直邮订单出库', '货件计划出库', '调拨出库', '其他出库', '采购退回出库', '组合品生产出库'],
            padding: [10, 50, 10, 10]  // 增加右侧内边距
        },
        grid: {
            left: '3%',
            right: '20%',  // 增加右侧留白
            bottom: '15%',
            top: '10%',    // 增加顶部留白
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: timeData,
            axisLabel: {
                formatter: function(value) {
                    return value.substring(5);
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '数量',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#333'
                }
            }
        },
        series: [
            {
                name: '直邮订单出库',
                type: 'line',
                data: seriesData.map(item => item.directOrderOutStockQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#5470C6'
                },
                markLine: {
                    silent: false,
                    data: markLineData,
                    animation: false,
                    emphasis: {
                        lineStyle: {
                            width: 3,
                            color: '#ff4d4f'
                        }
                    }
                }
            },
            {
                name: '货件计划出库',
                type: 'line',
                data: seriesData.map(item => item.shipmentOutStockQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#91CC75'
                }
            },
            {
                name: '调拨出库',
                type: 'line',
                data: seriesData.map(item => item.tranOrderOutQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#FAC858'
                }
            },
            {
                name: '其他出库',
                type: 'line',
                data: seriesData.map(item => item.otherOutStockQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#EE6666'
                }
            },
            {
                name: '采购退回出库',
                type: 'line',
                data: seriesData.map(item => item.purOrderBackOutQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#73C0DE'
                }
            },
            {
                name: '组合品生产出库',
                type: 'line',
                data: seriesData.map(item => item.prodComOutQty),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    width: 2,
                    color: '#3BA272'
                }
            }
        ],
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                bottom: '8%',
                height: 20,
                borderColor: 'transparent'
            },
            {
                type: 'inside'
            }
        ]
    };

    // 设置图表配置
    outStockChart.setOption(option);
}

// 窗口大小改变时重绘图表
window.addEventListener('resize', function() {
    if (parentChart) {
        parentChart.resize();
    }
    if (childChart) {
        childChart.resize();
    }
    if (stockChart) {
        stockChart.resize();
    }
    if (inStockChart) {
        inStockChart.resize();
    }
    if (outStockChart) {
        outStockChart.resize();
    }
});




