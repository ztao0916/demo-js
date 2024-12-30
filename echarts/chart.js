// 声明图表变量
let parentChart, childChart, stockChart, inStockChart, outStockChart;
let timeAxisData = [];
let chartData = null;  // 存储获取到的数据

// 添加一个标志位来防止循环触发
let isZooming = false;

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

// 修改同步函数
function syncDataZoom(startValue, endValue) {
    if (isZooming) return;  // 如果正在缩放，直接返回
    
    isZooming = true;  // 设置标志位
    
    const charts = {
        parent: parentChart,
        child: childChart,
        stock: stockChart,
        inStock: inStockChart,
        outStock: outStockChart
    };

    // 遍历所有图表实例
    Object.entries(charts).forEach(([type, chart]) => {
        if (chart && type !== this.id) {  // 跳过触发事件的图表
            chart.dispatchAction({
                type: 'dataZoom',
                start: startValue,
                end: endValue
            });
        }
    });
    
    // 重置标志位
    setTimeout(() => {
        isZooming = false;
    }, 0);
}

// 修改事件监听函数
function addDataZoomListener(chart, chartId) {
    chart.on('datazoom', function(params) {
        if (isZooming) return;  // 如果正在缩放，直接返回
        
        // 获取当前的缩放范围
        const option = chart.getOption();
        const dataZoom = option.dataZoom[0];
        
        // 同步其他图表的缩放
        syncDataZoom.call({ id: chartId }, dataZoom.start, dataZoom.end);
    });
}

// 等待 DOM 加载完成后初始化
window.addEventListener('DOMContentLoaded', async function() {
    // 初始化所有图表实例
    parentChart = echarts.init(document.getElementById('parentChart'));
    childChart = echarts.init(document.getElementById('childChart'));
    stockChart = echarts.init(document.getElementById('stockChart'));
    inStockChart = echarts.init(document.getElementById('inStockChart'));
    outStockChart = echarts.init(document.getElementById('outStockChart'));
    
    // 为每个图表添加 dataZoom 事件监听
    addDataZoomListener(parentChart, 'parent');
    addDataZoomListener(childChart, 'child');
    addDataZoomListener(stockChart, 'stock');
    addDataZoomListener(inStockChart, 'inStock');
    addDataZoomListener(outStockChart, 'outStock');
    
    // 获取数据并渲染所有图表
    const data = await fetchChartData();
    if (!data) return;

    // 渲染父SKU图表
    renderLineChart({
        timeData: timeAxisData,
        seriesData: data.pskuSaleTrendList
    });

    // 渲染子SKU图表
    const firstChildSKU = Object.keys(data.sskuSaleTrendMap)[0];
    if (firstChildSKU) {
        initSKUSelector(Object.keys(data.sskuSaleTrendMap));
        renderSKUData(firstChildSKU);
    }

    // 渲染出入库趋势图
    const firstStockSKU = Object.keys(data.stockTrendMap)[0];
    if (firstStockSKU) {
        renderStockData(firstStockSKU);
    }

    // 渲染入库明细图
    const firstInStockSKU = Object.keys(data.inStockDetailMap)[0];
    if (firstInStockSKU) {
        renderInStockData(firstInStockSKU);
    }

    // 渲染出库明细图
    const firstOutStockSKU = Object.keys(data.outStockDetailMap)[0];
    if (firstOutStockSKU) {
        renderOutStockData(firstOutStockSKU);
    }
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
    const currentValue = select.value;  // 保存当前选中的值
    
    // 如果当前没有选中值，但其他 tab 有选中值，则使用其他 tab 的选中值
    const otherSelects = document.querySelectorAll('#skuSelector select');
    const selectedValue = Array.from(otherSelects).find(s => s.value)?.value || currentValue;
    
    select.innerHTML = skuList.map(sku => 
        `<option value="${sku}" ${sku === selectedValue ? 'selected' : ''}>${sku}</option>`
    ).join('');
    
    // 如果当前值不在新的选项中，触发 change 事件以更新图表
    if (selectedValue && !skuList.includes(selectedValue)) {
        select.dispatchEvent(new Event('change'));
    }
}

// 切换SKU
async function switchSKU(sku) {
    const data = await fetchChartData();
    if (!data) return;
    
    // 同步所有 tab 的选择器并更新对应图表
    const tabs = {
        'child': {
            map: data.sskuSaleTrendMap,
            render: renderSKUData
        },
        'stock': {
            map: data.stockTrendMap,
            render: renderStockData
        },
        'inStock': {
            map: data.inStockDetailMap,
            render: renderInStockData
        },
        'outStock': {
            map: data.outStockDetailMap,
            render: renderOutStockData
        }
    };

    // 遍历所有 tab
    Object.entries(tabs).forEach(([tabType, { map, render }]) => {
        // 如果该 SKU 在当前 tab 的数据中存在
        if (map && map[sku]) {
            // 更新选择器
            const select = document.querySelector('#skuSelector select');
            if (select && select.querySelector(`option[value="${sku}"]`)) {
                select.value = sku;
            }
            // 更新图表
            render(sku);
        }
    });
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
            }
        },
        legend: {
            orient: 'vertical',
            right: '2%',
            top: 'middle',
            data: ['商品数', '订单数', '利润'],
            padding: [10, 50, 10, 10]
        },
        grid: {
            left: '3%',
            right: '20%',
            bottom: '15%',
            top: '10%',
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
                    color: '#FAC858'
                }
            },
            {
                name: '利润',
                type: 'line',
                yAxisIndex: 1,  // 使用第二个y轴
                data: seriesData.map(item => Number(item.profit)),
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
                        
                        // 如果是其他入库，且当前时间点有明细数据，则显示明细
                        if (param.seriesName === '其他入库') {
                            const currentData = seriesData[param.dataIndex];
                            if (currentData && currentData.details && currentData.details.length > 0) {
                                result += '<div style="margin: 10px 0;">';
                                result += '<table style="width: 100%; border-collapse: collapse; color: #666;">';
                                result += '<tr style="border-bottom: 1px solid #ccc; color: #333;">';
                                result += '<th style="padding: 4px 8px; text-align: left;">类型</th>';
                                result += '<th style="padding: 4px 8px; text-align: left;">数量</th>';
                                result += '<th style="padding: 4px 8px; text-align: left;">审核人</th>';
                                result += '</tr>';
                                currentData.details.forEach(detail => {
                                    result += '<tr style="border-bottom: 1px solid #eee;">';
                                    result += `<td style="padding: 4px 8px;">${detail.stockType || '-'}</td>`;
                                    result += `<td style="padding: 4px 8px;">${detail.num || 0}</td>`;
                                    result += `<td style="padding: 4px 8px;">${detail.auditor || '-'}</td>`;
                                    result += '</tr>';
                                });
                                result += '</table>';
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
            data: ['采购入库', '其他入库', '调拨入库'],
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
                name: '采购入库',
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
                name: '其他入库',
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
                name: '调拨入库',
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
                            if (currentData && currentData.details && currentData.details.length > 0) {
                                result += '<div style="margin: 10px 0;">';
                                result += '<table style="width: 100%; border-collapse: collapse; color: #666;">';
                                result += '<tr style="border-bottom: 1px solid #ccc; color: #333;">';
                                result += '<th style="padding: 4px 8px; text-align: left;">类型</th>';
                                result += '<th style="padding: 4px 8px; text-align: left;">数量</th>';
                                result += '<th style="padding: 4px 8px; text-align: left;">审核人</th>';
                                result += '</tr>';
                                currentData.details.forEach(detail => {
                                    result += '<tr style="border-bottom: 1px solid #eee;">';
                                    result += `<td style="padding: 4px 8px;">${detail.stockType || '-'}</td>`;
                                    result += `<td style="padding: 4px 8px;">${detail.num || 0}</td>`;
                                    result += `<td style="padding: 4px 8px;">${detail.auditor || '-'}</td>`;
                                    result += '</tr>';
                                });
                                result += '</table>';
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




