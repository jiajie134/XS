/*
 * @Author: your name
 * @Date: 2021-02-23 15:47:11
 * @LastEditTime: 2021-02-24 17:50:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\js\myCharts.js\
 */
import {
    reactive,
    ref,
    watch,
} from 'vue'
let barWidth;
let fontSize = reactive({
    size:{
        fontSize:parseInt(window.innerWidth / 100) 
    }
})

let onresize = function($e){
    test()
}
export function test(){console.log(111)
    window.onresize =()=>{
        // $e.setOption(option)
        console.log('set option')
    }
}
//  智慧党建性别统计
export function SexStatis(echarts, id) {
    let getArrayValue, array2obj, getData, data, option;
    let arrName, arrValue, sumValue, objData, optionData;
    let $e = echarts.init(document.getElementById(id));
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
            top: "center",
            top: '23%',
            bottom: '53%',
            left: "48%",
            data: arrName,
            width: '40%',
            padding: [0, 12],
            formatter: function (name) {
                return "{title|" + name + "} {value|    " + (objData[name].value) + "}  {title|%}"
            },
            textStyle: {
                rich: {
                    title: {
                        fontSize: 40,
                        color: "rgb(0, 178, 246)"
                    },
                    value: {
                        fontSize: fontSize.size.fontSize,
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
    onresize($e)
}

//智慧党建  党龄/年龄统计表
let YearStatis = function (echarts, item) {
    let $e = echarts.init(document.getElementById(item.id));
    let option = {
        title: {
            text: item.title,
            left: 'center',
            bottom: 'bottom',
            textStyle: {
                fontWeight: 'bolder',
                fontSize: 25,
                color: 'rgb(255, 255, 255)'
            }
        },
        series: [{
            type: 'liquidFill',
            radius: '60%',
            center: ['50%', '50%'],
            data: [item.data + item.data / 5, item.data, item.data], // data个数代表波浪数
            backgroundStyle: {
                borderWidth: 1,
                color: 'rgb(255,255,255,0.1)'
            },
            label: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            outline: {
                show: false,
            }
        }, {
            "type": "pie",
            "center": ['50%', '50%'],
            "radius": ["68%", "75%"],
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
                        color: '#ffffff',
                        "normal": {
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 8,
                            "borderRadius": '100%'
                        },
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
    window.onresize = function () {
        $e.resize()
    }
}

export function BuildCom(StatisData, echarts) {
    StatisData.data.forEach((item, i) => {
        YearStatis(echarts, item)
    })
}

//智慧党建人员构成统计表

export function PerBuild(echarts, id) {
    let $e = echarts.init(document.getElementById(id));
    let yList = [320, 580, 640, 640, ];
    let xList = [10, 55, 44, 55, ];
    let xData = ['党员', '申请入党人员', '预备党员', '入党积极人员'];
    let color = ['#CC1CAA', '#8D67FF', '#00FFFF', '#48DE13', '#FFC516', '#DC3E14', '#8E16F8'];
    let barWidth = 380;
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
            left: '10%',
            right: '10%',
            top: '20%',
            bottom: '20%',
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
                margin: 30,
                fontSize: fontSize,
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
                fontSize: 15
            }
        },
        series: [{
                type: 'bar',
                barWidth: barWidth,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return colors[params.dataIndex % 7];
                        }
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
                    normal: {
                        color: function (params) {
                            return colors[params.dataIndex % 7];
                        },
                    }
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
                    normal: {
                        borderWidth: 0,
                        color: function (params) {
                            return colors[params.dataIndex % 7].colorStops[0].color;
                        },

                    }
                },
            },
        ],
    };
    $e.setOption(option)
    window.onresize = function () {
        $e.resize()
    }
}