/*
 * @Author: your name
 * @Date: 2020-11-25 16:41:11
 * @LastEditTime: 2020-12-02 17:37:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \treeMap\flex\js\Eachers.js
 */
export default function (echarts) {
  this.Ech = echarts;
  const SCREEN_WIDTH = window.innerWidth;

  //图形尺寸比例
  let sizeRatio = 1;

  //4k时 文字大小
  const fontSizeLarge = {
    minier: 20,
    mini: 28,
    titlesize: 20,
    normal: 32,
    h4: 34,
    h3: 36,
    h2: 40,
    h1: 45,
    big: 60
  }

  //2k时文字大小
  const fontSizeNormal = {
    minier: 8,
    fontSize: 9,
    normal: 10,
    mini: 9,
    titlesize: 6,
    h4: 11,
    h3: 12,
    h2: 14,
    h1: 16,
    big: 20,
  }

  let fontSize;

  if (SCREEN_WIDTH >= 3800) {
    fontSize = fontSizeLarge;

  } else {
    fontSize = fontSizeNormal;
    sizeRatio = 0.45;
  }

  const themeColors = {
    light: {
      mapColor: "#166895",
      mapBorder: "#31d3e5",
      mapHoverColor: "#6ac1f1",
      mapFontColor: "#31d3e5",
      mapHoverFontColor: "#cce9fb"
    },
    dark: {
      mapColor: "#000",
      mapBorder: "#3bc8ef",
      mapHoverColor: "#2a9ad2",
      mapFontColor: "#35696f",
      mapHoverFontColor: "#cce9fb"
    }
  };
  // 左边社区治理饼图
  this.leftCrowd = function () {

    let Round = this.Ech.init(
      document.getElementById("left-crowd-left")
    );
    let fontColor = "#fff";
    let data = [{
        name: "特困人员",
        value: 456,
      },
      {
        name: "重残补贴对象",
        value: 231,
      },
      {
        name: "困难残疾补贴",
        value: 121,
      },
      {
        name: "无人抚养保障",
        value: 45,
      },
      {
        name: "孤儿保障对象",
        value: 154,
      },
      {
        name: "高龄补贴对象",
        value: 67,
      },
      {
        name: "临时救助对象",
        value: 67,
      },
    ];

    let option = {
      color: [
        "#ff3d3d",
        "#22a1f2",
        "#00bb6e",
        "#00bb6e",
        "#79c036",
        "#00d08d",
        "#f9a426",
        "#009db2",
        "#024b51- 0780cf",
        "#765005",
      ],
      grid: {
        bottom: 0,
        left: 100,
        right: "70%",
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/> {c}人  ({d}%)",
      },

      legend: {
        type: "scroll",
        icon: "circle",
        orient: "horizontal",
        align: "auto",
        left: "0%",
        bottom: "0%",
        textStyle: {
          color: "#f2f2f2",
          fontSize: fontSize.mini,
        },
        data: data,
      },
      series: [
        // 主要展示层的
        {
          radius: ["50%", "80%"],
          center: ["50%", "45%"],
          type: "pie",
          label: {
            position: "inner",
            formatter: "{c}",
          },
          labelLine: {
            normal: {
              show: true,
              length: 30,
              length2: 55,
            },
            emphasis: {
              show: true,
            },
          },
          data: data,
        },
      ],
    };
    Round.setOption(option);
    window.addEventListener("resize", function () {
      Round.resize();
    });
  }
  //日间照料饼图
  this.rightCrowd = function (ele, op_ = {}) {
    let pie = this.Ech.init(document.getElementById(ele));
    let data = [{
        value: 50
      },
      {
        value: 50
      }
    ];

    let option = {
      color: [
        "#22a1f2",
        "rgba(255,255,255,.1)",
      ],
      series: [{
          name: op_.name,
          type: 'pie',
          radius: ['45%', '70%'],
          center: ['50%', '40%'],
          hoverAnimation: false,
          label: {
            show: false
          },
          data: data
        },
        {
          center: ['50%', "40%"],
          radius: ['80%', '82%'],
          name: "",
          type: "pie",
          silent: true,
          z: 1,
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          label: {
            show: false,
          },
          data: [{
            value: 1,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(255,255,255,.1)'
                  },
                  {
                    offset: 0.2,
                    color: '#22a1f2'
                  },
                  {
                    offset: 0.4,
                    color: '#22a1f2'
                  },
                  {
                    offset: 0.8,
                    color: '#22a1f2'
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,255,255,.1)'
                  }
                ]
              }
            }
          }],
        }
      ],
      tooltip: {
        show: false
      },
      legend: {
        show: false
      },
      title: {
        show: true,
        text: op_.text,
        // textAlign: 'center',
        left: 'center',
        textVerticalAlign: 'bottom',
        bottom: '0%',
        textStyle: {
          color: '#fff',
          fontWeight: 200,
          fontSize: fontSize.mini
        }
      }
    }
    pie.setOption(option);
    window.addEventListener("resize", function () {
      pie.resize();
    });
  }
  //社区管理
  this.leftPlace = function (ele) {
    let bar = this.Ech.init(
      document.getElementById(ele)
    );
    var category = [{
        name: "家庭医生签约",
        value: 714,
      },
      {
        name: "卫生健康建档",
        value: 5714,
      },
      {
        name: "慢性病管理",
        value: 32,
      },
      {
        name: "0-6岁儿童管理",
        value: 286,
      }
    ]; // 类别
    var total = category.map(item=>item.value); // 数据总数
    total = total.reduce((a,b)=>{ return a+b})
    var datas = [];
    category.forEach((value) => {
      datas.push(value.value);
    });
    let option = {
      // backgroundColor:'#071347',
      xAxis: {
        max: total,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      grid: {
        left: '25%',
        height: 'auto',
        top: "1%", // 设置条形图的边距
        right: '25%',
        bottom: "10%",
      },
      yAxis: [{
        type: "category",
        inverse: false,
        data: category,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      }, ],
      series: [{
          // 内
          type: "bar",
          barWidth: 18 * sizeRatio,

          legendHoverLink: false,
          silent: true,
          itemStyle: {
            normal: {
              color: function (params) {
                var color;
                if (params.dataIndex == 19) {
                  color = {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: "#4fb3d3", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#4fb3d3", // 100% 处的颜色
                      },
                    ],
                  };
                } else if (params.dataIndex == 18) {
                  color = {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: "#4fb3d3", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#4fb3d3", // 100% 处的颜色
                      },
                    ],
                  };
                } else if (params.dataIndex == 17) {
                  color = {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: "#4fb3d3", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#4fb3d3", // 100% 处的颜色
                      },
                    ],
                  };
                } else {
                  color = {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: "#4fb3d3", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#4fb3d3", // 100% 处的颜色
                      },
                    ],
                  };
                }
                return color;
              },
            },
          },
          label: {
            normal: {
              show: true,
              position: "left",
              formatter: "{b}",
              textStyle: {
                color: "#fff",
                fontSize: fontSize.h3,
              },
            },
          },
          data: category,
          z: 1,
          animationEasing: "elasticOut",
        },
        {
          // 分隔
          type: "pictorialBar",
          itemStyle: {
            normal: {
              color: "#061348",
            },
          },
          symbolRepeat: "fixed",
          symbolMargin: 6 * sizeRatio,
          symbol: "roundRect",
          symbolClip: true,
          symbolSize: [1, 19 * sizeRatio],
          symbolPosition: "start",
          symbolOffset: [1, -1],
          symbolBoundingData: this.total,
          data: category,
          z: 2,
          animationEasing: "elasticOut",
        },
        {
          // 外边框
          type: "pictorialBar",
          symbol: "roundRect",
          symbolBoundingData: total,
          itemStyle: {
            normal: {
              color: "none",
            },
          },
          label: {
            normal: {
              formatter: (params) => {
                // var text;
                // if (params.dataIndex == 6) {
                //   text = "{a|  "+(params.data / total*100).toFixed(2) +"}{z|  " + params.data + "}";
                // } else if (params.dataIndex == 5) {
                //   text = "{b|  91.30%}{z|  " + params.data + "}";
                // } else if (params.dataIndex == 4) {
                //   text = "{c|  100%}{z|  " + params.data + "}";
                // } else if (params.dataIndex == 3) {
                //   text = "{d|  84.79%}{z|  " + params.data + "}";
                // } else if (params.dataIndex == 2) {
                //   text = "{e|  83.13%}{z|  " + params.data + "}";
                // } else if (params.dataIndex == 1) {
                //   text = "{f|  100%}{z|  " + params.data + "}";
                // } else if (params.dataIndex == 0) {
                //   text = "{a|  "+(params.data / total*100).toFixed(2) +"}{z|  " + params.data + "}";
                // }
                return "{a|  "+(params.data / total*100).toFixed(2) +"%}{z|  " + params.data + "}";
              },
              rich: {
                a: {
                  color: "#f9c22a",
                },
                b: {
                  color: "#f9c22a",
                },
                c: {
                  color: "#f9c22a",
                },
                d: {
                  color: "#f9c22a",
                },
                e: {
                  color: "#f9c22a",
                },
                f: {
                  color: "#f9c22a",
                },
                g: {
                  color: "#f9c22a",
                },
                z: {
                  color: "#58bbdb",
                },
              },
              position: "right",
              distance: 0, // 向右偏移位置
              show: true,
            },
          },
          data: datas,
          z: 0,
          animationEasing: "elasticOut",
        },
        {
          name: "外框",
          type: "bar",
          barGap: "-120%", // 设置外框粗细
          data: [
            total,
            total,
            total,
            total,
            total,
            total,
            total
          ],
          barWidth: 25 * sizeRatio,
          itemStyle: {
            normal: {
              color: "#01273b", // 填充色
              barBorderColor: "#62c6ea", // 边框色
              barBorderWidth: 1, // 边框宽度
              barBorderRadius: 3, //圆角半径
              label: {
                // 标签显示位置
                show: false,
                position: "top", // insideTop 或者横向的 insideLeft
              },
            },
          },
          z: 0,
        },
      ],
    };

    bar.setOption(option);
    window.addEventListener("resize", function () {
      bar.resize();
    });
  }
  //特殊人群况柱图
  this.rightColumn = function (ele) {
    let bar = this.Ech.init(document.getElementById(ele));

    function getEcharts3DBar(xAxisData, data, colorType) {
      var colorArr = [];
      if (colorType == '01') {
        colorArr = ["#2886c6", "#50bfda", "#89e3ec"];
      } else {
        colorArr = ["#28c1c6", "#50dac0", "#87e8c7"];
      };
      let pointData = [];
      data.forEach((item, i) => {
        pointData.push({
          coord: [i, item - 1],
          symbol: `image://./css/img/pic_zhu${i}.png`,
          symbolSize:25
        })
      });
      let max = '';
      max = Math.max(...data)
      var color = {
        type: "linear",
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: colorArr[0],
          },
          {
            offset: 0.5,
            color: colorArr[0],
          },
          {
            offset: 0.5,
            color: colorArr[1],
          },
          {
            offset: 1,
            color: colorArr[1],
          },
        ],
      };
      var barWidth = 30;
      var constData = [];
      data.filter(function (item) {
        if (item) {
          constData.push(1);
        } else {
          constData.push(0);
        }
      });
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: 'none'
          },

          formatter: function (params) {
            var str = params[0].axisValue + "：";
            params.filter(function (item) {
              if (item.componentSubType == "bar") {
                str += "<br/>" + item.seriesName + "：" + item.value;
              }
            });
            return str;
          },
        },
        title: {
          text: `{a|总计:}{b|2333}`,
          textStyle: {
            rich: {
              a: {
                color: '#fff',
                fontSize: fontSize.h2,
                padding: fontSize.titlesize,
                backgroundColor: 'rgba(10, 20, 30, 0.5)'
              },
              b: {
                color: '#ffb400',
                fontSize: fontSize.h2,
                padding: fontSize.titlesize,
                backgroundColor: 'rgba(10, 20, 30, 0.5)',
                // border: '1px solid #022d35'
              },
            }

          },
          left: 'right'
        },
        grid: {
          left: "3%", //图表距边框的距离
          right: "3%",
          top: "15%",
          bottom: "2%",
          containLabel: true,
        },
        xAxis: {
          data: xAxisData,
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#c0c3cd",
            fontSize: fontSize.mini,
            interval: 0,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#2886c6"
            }
          }
        },
        yAxis: {
          max: max * 2,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false
          }
        },
        series: [{
            z: 1,
            name: '数据',
            type: "bar",
            barWidth: barWidth,
            barGap: "0%",
            data: data,
            itemStyle: {
              normal: {
                color: color,
              },
            },
            label: {
              show: true,
              position: 'top',
              color: "#fff"
            },
            markPoint: {
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    color: '#fff',
                    formatter: function (param) {

                    }
                  },
                }
              },
              symbolSize: [barWidth, barWidth],
              symbolOffset: [0, -40],
              data: pointData,
            }
          },
          {
            z: 2,
            name: '数据',
            type: "pictorialBar",
            data: constData,
            symbol: "diamond",
            symbolOffset: ["0%", "50%"],
            symbolSize: [barWidth, 10],
            itemStyle: {
              normal: {
                color: color,
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            z: 3,
            name: '数据',
            type: "pictorialBar",
            symbolPosition: "end",
            data: data,
            symbol: "diamond",
            symbolOffset: ["0%", "-50%"],
            symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
            itemStyle: {
              normal: {
                borderColor: colorArr[2],
                borderWidth: 2,
                color: colorArr[2],
              },
            },
            tooltip: {
              show: false,
            },
          },
        ],
      };
    }
    bar.setOption(getEcharts3DBar(['涉毒人员', '精神病人', '传染病人', '社区矫正人员', '刑满人员'], [345, 260, 180, 200, 215], '01'));
    window.addEventListener("resize", function () {
      bar.resize();
    });
  }
  //人口类型左
  this.perLeftPie = function (ele) {

    let Round = this.Ech.init(document.getElementById(ele));
    let color = ["#0b9eff", "#63caff"];
    let chartData = [{
        name: "户籍人口",
        value: 2000,
        unit: "人",
      },
      {
        name: "流动人口",
        value: 1000,
        unit: "人",
      }
    ];
    let arrName = [];
    let arrValue = [];
    let sum = 0;
    let pieSeries = [],
      lineYAxis = [];

    // 数据处理
    chartData.forEach((v, i) => {
      arrName.push(v.name); //名字集合
      arrValue.push(v.value); //value集合
      sum = sum + v.value; //总人数
    });

    // 图表option整理
    chartData.forEach((v, i) => {
      pieSeries.push({
        left: "20%",
        name: "",
        type: "pie",
        clockWise: false,
        hoverAnimation: false,
        radius: [65 - i * 15 + "%", 57 - i * 15 + "%"],
        center: ["50%", "50%"],
        label: {
          show: false,
        },
        itemStyle: {
          color: {
            type: 'liner',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: "#0b9eff"
            }, {
              offset: 1,
              color: "#63caff"
            }]
          }
        },
        data: [{
            value: v.value,
            name: v.name,
          },
          {
            value: sum - v.value,
            name: "",
            itemStyle: {
              color: "rgba(0,0,0,0)",
            },
          },
        ],
      });
      pieSeries.push({
        left: "20%",
        name: "",
        type: "pie",
        silent: true,

        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [65 - i * 15 + "%", 57 - i * 15 + "%"],
        center: ["50%", "50%"],
        label: {
          show: false,
        },
        data: [{
            value: 7.5,
            itemStyle: {
              color: "rgba(255,255,255,0.1)", //圆环颜色
            },
          },
          {
            value: 2.5,
            name: "",
            itemStyle: {
              color: "rgba(0,0,0,0)",
            },
          },
        ],

      });
      v.percent = ((v.value / sum) * 100).toFixed(1) + "%";
      lineYAxis.push({
        value: i,
        textStyle: {
          rich: {
            circle: {
              color: color[i],
              padding: [0, 0],
            },
          },
        },
      });
    });

    let option = {
      // backgroundColor:'#000',
      color: color,
      grid: {
        top: "10%",
        bottom: "54%",
        left: "42%",
        containLabel: false,
      },

      yAxis: [{
        type: "category",
        inverse: true,
        position: 'right',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          formatter: function (params) {
            let item = chartData[params];
            return "{line|}{circle|●}{name|" + item.name + "}";
          },
          interval: 0,
          inside: true,
          textStyle: {
            color: "#fa930d", //元字颜色
            fontSize: fontSize.mini,
            rich: {
              line: {
                width: 1 * sizeRatio,
                height: 2 * sizeRatio, //标线高度
                backgroundColor: "rgba(255,255,255,0.1)", //标线颜色
              },
              name: {
                color: "#beceff",
                fontSize: fontSize.h3,
              },
              bd: {
                color: "#beceff",
                padding: [0, 5],
                fontSize: fontSize.mini,
              },
              percent: {
                color: "#beceff",
                fontSize: fontSize.h3,
              },
              value: {
                color: "#fa930d",
                fontSize: fontSize.h3,
                fontWeight: 500,
                padding: [0, 0, 0, 20],
              },
              unit: {
                fontSize: fontSize.mini,
              },
            },
          },
          show: true,
        },
        data: lineYAxis,
      }, ],
      xAxis: [{
        show: false,
      }],
      title: {
        show: true,
        text: '人口统计',
        textStyle: {
          color: '#0b9eff',
          fontSize: fontSize.h2
        }
      },
      series: pieSeries,
    };
    Round.setOption(option);
    window.addEventListener("resize", function () {
      Round.resize();
    });
  }
  //人口类型右
  this.perRightPie = function (ele) {
    let Round = this.Ech.init(document.getElementById(ele));
    let geomotryData = [{
      name: '户籍户数',
      value: 2607,
      itemStyle: {
        color: {
          type: 'liner',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: "#0b9eff"
          }, {
            offset: 1,
            color: "#63caff"
          }]
        }
      },
    }, {
      name: '其他',
      value: 5903,
      itemStyle: {
        color: {
          type: 'liner',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: "#0FD700"
          }, {
            offset: 1,
            color: "#FFD700"
          }]
        }
      },
    }];
    let tooltip = {
      trigger: 'item',
      alwaysShowContent: true,
      formatter: function (params) {
        if (params.name === "one") {
          return ''
        } else {

          return params.name + ':' + params.value
        }
      }
    };
    let arrName = [],
      arrValue = [],
      sum = 0,
      emphasis = {
        label: {
          show: false
        }
      },
      highlight = {
        lable: {
          show: false
        }
      },
      downplay = {
        lable: {
          show: false
        }
      },
      sunDatas = [];
    // 数据处理
    geomotryData.forEach((v, i) => {
      arrName.push(v.name); //名字集合
      arrValue.push(v.value); //value集合
      sum = sum + v.value; //总人数
    });
    let color = ['#0b9eff', '#FFD700'];
    let pieDatas = [];
    var c;
    for (var i = 0; i < 2; i++) {
      i == 0 ? c = '#0b9eff' : c = "#FFD700"
      pieDatas.push({
        left: "20%",
        name: "",
        type: "pie",
        silent: true,
        z: 2,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [40 - i * 10 + "%", 39 - i * 10 + "%"],
        center: ["50%", "50%"],
        label: {
          show: false,
        },
        data: [{
            value: 1,
            itemStyle: {
              color: c, //圆环颜色
            },
          },

        ],

      })
    };
    // pieDatas.push({
    //   left: "20%",
    //   name: "",

    //   type: "pie",
    //   silent: false,
    //   clockWise: false, //顺时加载
    //   hoverAnimation: false, //鼠标移入变大
    //   legendHoverLink: false,
    //   radius: ['50%', '65%'],
    //   center: ["50%", "50%"],
    //   label: {
    //     show: false,
    //   },
    //   data: geomotryData,

    // });
    pieDatas.push({
      name: '业务指标',
      type: 'gauge',
      detail: {
        offsetCenter: [0, -20],
        formatter: ' '
      },
      tooltip:{
        trigger:'item',
        formatter:function(params){
          return ''
        }
      },
      
      radius: '65%',
      clockwise: false,
      startAngle: '90',
      endAngle: '449.999',
      splitNumber: 25,
      pointer: {
        show: false
      },
      splitLine: {
        show: true,
        length: 10,
        lineStyle: {
          color: '#051f54',
          width: 1
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
    },
      axisLine: {
        show: true,
        
        lineStyle: {
          width:8,
          color: [
            [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: (geomotryData[0].value / sum).toFixed(1),
                color: "#FFC600"
              },
              {
                offset: (geomotryData[1].value / sum).toFixed(1),
                color: "#0B95FF"
              }
            ])]
          ]

        }
      }

    })
    // for (var n = 0; n < 30; n++) {
    //   sunDatas.push({
    //     name: 'one',
    //     value: 1,
    //     itemStyle: {},
    //     label: {
    //       show: false
    //     },
    //     emphasis: emphasis,
    //     highlight: emphasis,
    //     downplay: downplay
    //   })
    // }
    // pieDatas.push({
    //   // 分隔
    //   type: "sunburst",
    //   itemStyle: {
    //     normal: {
    //       color: "rgba(255,255,255,0)",
    //     },
    //   },
    //   center: ['50%', '50%'],
    //   radius: ['50%', '65%'],
    //   highlightPolicy: 'none',
    //   nodeClick: false,
    //   emphasis: emphasis,
    //   highlight: highlight,
    //   downplay: downplay,
    //   label: {
    //     show: false
    //   },
    //   data: sunDatas
    // })
    let option = {
      grid: {
        top: "10%",
        bottom: "54%",
        left: "42%",
        containLabel: false,
      },
      // tooltip: tooltip,
      title: {
        show: true,
        text: '户数统计',
        textStyle: {
          color: '#0b9eff',
          fontSize: fontSize.h2
        }
      },
      series: pieDatas,
    }
    Round.setOption(option);
    window.addEventListener("resize", function () {
      Round.resize();
    });
  }
  //党员比例
  this.perSexPie = function (el){
    let pie = this.Ech.init(document.getElementById(el));
    var option;
    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            show:false
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    // borderColor: '#fff',
                    borderWidth: 2,
                    position: 'center'
                },
                // color:["#f00","#00f"],
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: fontSize.mini,
                        fontWeight: 'bold',
                        color:"#fff"
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 200, name: '男',
                        itemStyle: {
                          normal: {//颜色渐变
                              color: new echarts.graphic.LinearGradient(
                                  0, 0, 0, 1,
                                  [
                                      {offset: 0, color: '#A00'},
                                      {offset: 0.5, color: '#E00'},
                                      {offset: 1, color: '#F00'}
                                  ]
                              )
                          }
                      }
                    },
                    {
                      value: 113, 
                      name: '女',
                      itemStyle: {
                        normal: {//颜色渐变
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [
                              {offset: 0, color: '#00D'},
                              {offset: 0.5, color: '#00E'},
                              {offset: 1, color: '#00f'}
                            ])
                        }
                      }
                    },
                ]
            }
        ]
    };
    option && pie.setOption(option);
  }
  //党员发展情况
  this.developParty = function(el){
    let chart = this.Ech.init(document.getElementById(el));
    let xdata = ['示例1', '示例1', '示例1', '示例1', '示例1', '示例1', '示例1', '示例1', '示例1', '示例1']
    let option = {
        title: {
          show:false,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (item) {
                return item[0].axisValueLabel + '<br />' + item[0].seriesName + ': ' + item[0].data
            }
        },
        grid: {
            top: '20%',
            right: '10%',
            left: '10%',
            bottom: '15%'
        },
        xAxis: [{
            data: xdata,
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#FFFFFF',
                fontSize: fontSize.mini,
                interval: 0,
                rotate: 40
            }
        }],
        yAxis: [{
            //scale:true,
            // min: function(item){
            // 	return parseInt(item.min / 10) * 10
            // },
            max: 200,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: fontSize.mini,
                },
                // formatter: function(value){
                //   return parseInt(value * 100) + '%'
                // },
            },
        }],
        series: [{
            name: '数量',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: new this.Ech.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: '#ffb253'
                        },
                        {
                            offset: 1,
                            color: '#ff0'
                        }
                    ]
                )
            },
            symbolRepeat: true,
            symbolSize: [fontSize.mini, fontSize.mini],
            // symbolBoundingData: 100,
            symbolMargin: fontSize.mini,
            symbolPosition: 'start',
            z: -20,
            data: [120, 200, 150, 80, 70, 110, 130, 77, 99, 150],
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    verticalAlign: 'top'
                    // formatter: function(value){
                    //   return value && (value.data * 100).toFixed(1) + '%'
                    // }
                }
            }
        }]
    };
    chart.setOption(option);
  }
  
}