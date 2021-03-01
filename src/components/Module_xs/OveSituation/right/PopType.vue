<!--
 * @Author: yb
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-20 13:56:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势 人口类型-->

<template>
  <div class="partyBuild margin-b">
    <div class="title">人口类型</div>
    <div class="content flex">
      <div id="demography"></div>
      <div id="householdSta"></div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const data1 = [
      {
        name: "户籍人口",
        value: 2000,
        unit: "人",
      },
      {
        name: "流动人口",
        value: 1000,
        unit: "人",
      },
    ];
    const data2 = [
      {
        name: "户籍户数",
        value: 2607,
        itemStyle: {
          color: {
            type: "liner",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#0b9eff",
              },
              {
                offset: 1,
                color: "#63caff",
              },
            ],
          },
        },
      },
      {
        name: "其他",
        value: 5903,
        itemStyle: {
          color: {
            type: "liner",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#0FD700",
              },
              {
                offset: 1,
                color: "#FFD700",
              },
            ],
          },
        },
      },
    ];
    let _chart1, _chart2;
    return {
      data1,
      data2,
      _chart1,
      _chart2,
    };
  },
  mounted() {
    this._chart1 = this.echarts.init(document.getElementById("demography"));
    this._chart2 = this.echarts.init(document.getElementById("householdSta"));
    this.initChart(this._chart1, this.data1);
    this.initChart2(this._chart2, this.data2);
  },
  methods: {
    initChart(echart, data) {
      let color = ["#0b9eff", "#63caff"];
      let arrName = [];
      let arrValue = [];
      let sum = 0;
      let pieSeries = [],
        lineYAxis = [];
      // 数据处理
      data.forEach((v, i) => {
        arrName.push(v.name); //名字集合
        arrValue.push(v.value); //value集合
        sum = sum + v.value; //总人数
      });

      // 图表option整理
      data.forEach((v, i) => {
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
              type: "liner",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#0b9eff",
                },
                {
                  offset: 1,
                  color: "#63caff",
                },
              ],
            },
          },
          data: [
            {
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
          data: [
            {
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

        yAxis: [
          {
            type: "category",
            inverse: true,
            position: "right",
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              formatter: function (params) {
                let item = data[params];
                return "{line|}{circle|●}{name|" + item.name + "}";
              },
              interval: 0,
              inside: true,
              textStyle: {
                color: "#fa930d", //元字颜色
                fontSize: 10,
                rich: {
                  line: {
                    width: 1,
                    height: 2, //标线高度
                    backgroundColor: "rgba(255,255,255,0.1)", //标线颜色
                  },
                  name: {
                    color: "#beceff",
                    fontSize: 12,
                  },
                  bd: {
                    color: "#beceff",
                    padding: [0, 5],
                    fontSize: 10,
                  },
                  percent: {
                    color: "#beceff",
                    fontSize: 12,
                  },
                  value: {
                    color: "#fa930d",
                    fontSize: 12,
                    fontWeight: 500,
                    padding: [0, 0, 0, 20],
                  },
                  unit: {
                    fontSize: 10,
                  },
                },
              },
              show: true,
            },
            data: lineYAxis,
          },
        ],
        xAxis: [
          {
            show: false,
          },
        ],
        title: {
          show: true,
          text: "人口统计",
          textStyle: {
            color: "#0b9eff",
            fontSize: 15,
          },
        },
        series: pieSeries,
      };
      echart.setOption(option);
    },
    initChart2(echart, data) {
      let tooltip = {
        trigger: "item",
        alwaysShowContent: true,
        formatter: function (params) {
          if (params.name === "one") {
            return "";
          } else {
            return params.name + ":" + params.value;
          }
        },
      };
      let arrName = [],
        arrValue = [],
        sum = 0,
        emphasis = {
          label: {
            show: false,
          },
        },
        highlight = {
          lable: {
            show: false,
          },
        },
        downplay = {
          lable: {
            show: false,
          },
        },
        sunDatas = [];
      // 数据处理
      data.forEach((v, i) => {
        arrName.push(v.name); //名字集合
        arrValue.push(v.value); //value集合
        sum = sum + v.value; //总人数
      });
      let color = ["#0b9eff", "#FFD700"];
      let pieDatas = [];
      var c;
      for (var i = 0; i < 2; i++) {
        i == 0 ? (c = "#0b9eff") : (c = "#FFD700");
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
          data: [
            {
              value: 1,
              itemStyle: {
                color: c, //圆环颜色
              },
            },
          ],
        });
      }
      pieDatas.push({
        name: "业务指标",
        type: "gauge",
        detail: {
          offsetCenter: [0, -20],
          formatter: " ",
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            return "";
          },
        },

        radius: "65%",
        clockwise: false,
        startAngle: "90",
        endAngle: "449.999",
        splitNumber: 25,
        pointer: {
          show: false,
        },
        splitLine: {
          show: true,
          length: 10,
          lineStyle: {
            color: "#051f54",
            width: 1,
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,

          lineStyle: {
            width: 8,
            color: [
              [
                1,
                new this.echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: (data[0].value / sum).toFixed(1),
                    color: "#FFC600",
                  },
                  {
                    offset: (data[1].value / sum).toFixed(1),
                    color: "#0B95FF",
                  },
                ]),
              ],
            ],
          },
        },
      });

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
          text: "户数统计",
          textStyle: {
            color: "#0b9eff",
            fontSize: 12,
          },
        },
        series: pieDatas,
      };
      echart.setOption(option);
    },
  },
};
</script >
<style scoped lang="less">
@import url("~@/assets/XSCSS/common/oveSituation.less");
.partyBuild {
  color: #fff;
  .content {
    height: 15rem;
    #demography,
    #householdSta {
      width: 48%;
      height: 100%;
    }
  }
}
</style>