/*
 * @Author: your name
 * @Date: 2021-02-23 15:47:11
 * @LastEditTime: 2021-02-26 17:04:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\js\myCharts.js\
 */
// import {
//     reactive,
// } from 'vue'
// let fontSize = reactive({
//     size: {
//         fontSize: parseInt(window.innerWidth / 100)
//     }
// });

let echartsArr = [],
    timer, site = 0,
    door = true;

function fS(res) {
    let docEl = document.documentElement,
        clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = 100 * (clientWidth / 1920);
    return res * fontSize;
}
// 防抖函数
let debounce = function (echartsArr, wait) {
    // 闭包
    return function () {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            // 需要防抖的操作...
            door = false;
            echartsArr.forEach((echarted, i) => {
                const {
                    $e,
                    echarts,
                    dataArr
                } = echarted;
                $e.clear && $e.clear();
                switch (i) {
                    case 0:
                        $e.resize()
                        EduStatis(echarts, dataArr, $e);
                        break;
                    case 1:
                        $e.forEach((item, e) => {
                            item.clear();
                            item.resize();
                            YearStatis(echarts, dataArr.data[e], item)
                        })
                        break;
                    case 2:
                        $e.forEach((item, e) => {
                            item.clear();
                            item.resize();
                            YearStatis(echarts, dataArr.data[e], item)
                        })
                        break;
                    case 3:
                        $e.resize()
                        PerBuild(echarts, dataArr, $e);
                        break;
                }
            })
        }, wait);
    }

}
//  智慧党建学历统计
export function EduStatis(echarts, statisDataSex, $e) {
    let getArrayValue, array2obj, getData, data, option;
    let arrName, arrValue, sumValue, objData, optionData;
    if (!$e) {
        $e = echarts.init(document.getElementById(statisDataSex.data[0].id));
    }
    getArrayValue = function (array, key) {
        var key = key || "value";
        var res = [];
        if (array) {
            array.forEach(function (t) {
                res.push(t[key]);
            });
        }
        return res;
    }
    array2obj = function (array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
            resObj[array[i][key]] = array[i];
        }
        return resObj;
    }
    getData = function (data) {
        var res = {
            series: [],
            yAxis: []
        };
        for (let i = 0; i < data.length; i++) {
            res.series.push({
                name: '',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [76 - i * 15 + '%', 68 - i * 15 + '%'],
                center: ["40%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: data[i].value,
                    name: data[i].name
                }, {
                    value: sumValue - data[i].value,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.series.push({
                name: '',
                type: 'pie',
                silent: true,
                z: 1,
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [76 - i * 15 + '%', 68 - i * 15 + '%'],
                center: ["40%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: 7.5,
                    itemStyle: {
                        color: "rgb(3, 31, 62)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }, {
                    value: 2.5,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.yAxis.push((data[i].value / sumValue * 100).toFixed(2) + "%");
        }
        return res;
    }
    data = [{
            name: "研究学",
            value: 100
        },
        {
            name: "大学",
            value: 75
        },
        {
            name: "中专",
            value: 50
        },
        {
            name: "中学",
            value: 25
        },
        {
            name: "小学",
            value: 25
        }
    ];
    arrName = getArrayValue(data, "name");
    arrValue = getArrayValue(data, "value");
    sumValue = eval(arrValue.join('+'));
    objData = array2obj(data, "name");
    optionData = getData(data)
    option = {
        // title: {
        //     text: '学历统计'
        // },
        legend: {
            show: true,
            icon: "circle",
            top: '10%',
            // bottom: '53%',
            left: "48%",
            data: arrName,
            orient: 'horizontal',
            width: '35%',
            height: '20%',
            itemGap: fS(0.02),
            itemWidth: fS(0.1),
            formatter: function (name) {
                return "{title|" + name + "} {value|    " + (objData[name].value) + "}  {title|%}"
            },
            textStyle: {
                rich: {
                    title: {
                        fontSize: fS(0.1),
                        color: "rgb(0, 178, 246)"
                    },
                    value: {
                        fontSize: fS(0.1),
                        color: "#fff"
                    }
                }
            },
        },
        tooltip: {
            show: true,
            trigger: "item",
            formatter: "{a}<br>{b}:{c}({d}%)"
        },
        color: ['rgb(9,187,247)', 'rgb(184,254,165)', 'rgb(253,218,23)', 'rgb(252,152,12)'],
        xAxis: [{
            show: false
        }],
        series: optionData.series
    };
    $e.setOption(option)
    if (door) {
        echartsArr.push({
            $e,
            echarts,
            dataArr: statisDataSex,
        })
    }
}

//智慧党建  党龄/年龄统计表
let YearStatis = function (echarts, item, $e) {
    if (!$e) {
        $e = echarts.init(document.getElementById(item.id));
    }
    let option = {
        title: {
            text: item.title,
            left: 'center',
            bottom: 'bottom',
            textStyle: {
                fontWeight: 400,
                fontSize: fS(0.1),
                color: 'rgb(255, 255, 255)'
            }
        },
        series: [{
            type: 'liquidFill',
            radius: '50%',
            center: ['50%', '50%'],
            data: [item.data + item.data / 5, item.data, item.data], // data个数代表波浪数
            backgroundStyle: {
                borderWidth: 1,
                color: 'rgb(255,255,255,0.1)'
            },
            label: {

                textStyle: {
                    fontSize: fS(0.1)
                }

            },
            outline: {
                show: false,
            }
        }, {
            "type": "pie",
            "center": ['50%', '50%'],
            "radius": ["58%", "65%"],
            "hoverAnimation": false,
            "data": [{
                    "name": "",
                    "value": 500,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: '#5886f0'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0'
                        },
                    }
                },
                { //画中间的图标
                    "name": "",
                    "value": 5,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {

                        "color": "#5886f0",
                        "borderColor": "#5886f0",
                        "borderWidth": 8,
                        "borderRadius": '100%'

                    },
                    label: {

                        borderRadius: '100%'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0'
                        },
                    }

                },
                { // 解决圆点过大后续部分显示明显的问题
                    "name": "",
                    "value": 1,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: '#5886f0'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0'
                        },
                    }
                },
                { //画剩余的刻度圆环
                    "name": "",
                    "value": 88,
                    itemStyle: {
                        color: 'rgba(255,255,255,0)'
                    },
                    "label": {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: 'rgba(255,255,255,0)'
                        },
                    }
                }
            ]
        }]
    }
    $e.setOption(option)
    if (door) {
        echartsArr[site].$e.push($e)
    }

}

export function BuildCom(StatisData, echarts) {
    site += 1;
    if (door) {
        echartsArr[site] = {
            dataArr: StatisData,
            echarts,
            $e: []
        }
    }
    StatisData.data.forEach((item, i) => {
        YearStatis(echarts, item)
    })
}

//智慧党建人员构成统计表

export function PerBuild(echarts, statisPerBuild, $e) {
    if (!$e) {
        $e = echarts.init(document.getElementById(statisPerBuild.data.id));
    }
    let yList = [320, 580, 640, 640, ];
    let xList = [10, 55, 44, 55, ];
    let xData = ['党员', '申请入党人员', '预备党员', '入党积极人员'];
    let color = ['#CC1CAA', '#8D67FF', '#00FFFF', '#48DE13', '#FFC516', '#DC3E14', '#8E16F8'];
    let barWidth = fS(0.2);
    let colors = []
    for (let i = 0; i < 4; i++) {
        colors.push({
            type: 'linear',
            x: 0,
            x2: 1,
            y: 0,
            y2: 0,
            colorStops: [{
                offset: 0,
                color: '#73fcff' // 最左边
            }, {
                offset: 0.5,
                color: '#86eef1' // 左边的右边 颜色
            }, {
                offset: 0.5,
                color: '#5ad6d9' // 右边的左边 颜色
            }, {
                offset: 1,
                color: '#3dc8ca'
            }]
        })
    }
    let option = {
        //提示框
        tooltip: {
            trigger: 'axis',
            formatter: "{b} : {c}",
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        /**区域位置*/
        grid: {
            left: '20%',
            right: '5%',
            top: '15%',
            bottom: '15%',
        },
        //X轴
        xAxis: {
            data: xData,
            type: 'category',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,1)',
                    shadowColor: 'rgba(255,255,255,1)',
                    shadowOffsetX: '20',
                },
                symbol: ['none', 'arrow'],
                symbolOffset: [0, 25]
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: fS(0.15),
                fontSize: fS(0.1),
            },
        },
        yAxis: {
            show: true,
            splitNumber: 4,
            axisLine: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#075858'
                },
            },
            axisLabel: {
                color: '#FFFFFF',
                margin: 30,
                fontSize: fS(0.1)
            }
        },
        series: [{
                type: 'bar',
                barWidth: barWidth,
                itemStyle: {

                    color: function (params) {
                        return colors[params.dataIndex % 7];
                    }

                },
                label: {
                    show: false,
                    position: [barWidth / 2, -(barWidth + 20)],
                    color: '#ffffff',
                    fontSize: 14,
                    fontStyle: 'bold',
                    align: 'center',
                },
                data: yList
            },
            {
                z: 2,
                type: 'pictorialBar',
                data: yList,
                symbol: 'diamond',
                symbolOffset: [0, '50%'],
                symbolSize: [barWidth, barWidth * 0.5],
                itemStyle: {

                    color: function (params) {
                        return colors[params.dataIndex % 7];
                    },

                },
            },
            {
                z: 3,
                type: 'pictorialBar',
                symbolPosition: 'end',
                data: yList,
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolSize: [barWidth, barWidth * 0.5],
                itemStyle: {

                    borderWidth: 0,
                    color: function (params) {
                        return colors[params.dataIndex % 7].colorStops[0].color;
                    },


                },
            },
        ],
    };
    $e.setOption(option)
    if (door) {
        echartsArr.push({
            $e,
            echarts,
            dataArr: statisPerBuild,
        })
    }
}

//智慧党建性别统计

export function SexStatis(){}
window.addEventListener("resize", function () {
    let Resize = debounce(echartsArr, 50);
    Resize()
});