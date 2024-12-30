// 声明图表变量
let parentChart, childChart;
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
    skuSelector.style.display = type === 'child' ? 'block' : 'none';

    // 重新渲染对应图表
    if (type === 'child') {
        initChildSKUChart();
    } else {
        initParentSKUChart();
    }

    // 触发resize以确保图表正确渲染
    if (type === 'child' && childChart) {
        childChart.resize();
    } else if (type === 'parent' && parentChart) {
        parentChart.resize();
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
    console.log('折线图渲染完成');
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
    
    renderSKUData(sku);
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
    console.log('子SKU折线图渲染完成');
}

// 窗口大小改变时重绘图表
window.addEventListener('resize', function() {
    if (parentChart) {
        parentChart.resize();
    }
    if (childChart) {
        childChart.resize();
    }
});




