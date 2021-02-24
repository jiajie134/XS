/*
 * @Author: your name
 * @Date: 2021-02-23 15:47:11
 * @LastEditTime: 2021-02-23 17:53:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\js\myCharts.js\
 */

//  智慧党建性别统计
export function SexStatis(echarts,id) {
    let getArrayValue,array2obj,getData,data,option;
    let arrName,arrValue,sumValue,objData,optionData;
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
        title: {
            text: '学历统计'
        },
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
                        fontSize: '110%',
                       
                        color: "rgb(0, 178, 246)"
                    },
                    value: {
                        fontSize: '110%',
                        
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
    window.onresize= function(){
        $e.resize()
    }
}