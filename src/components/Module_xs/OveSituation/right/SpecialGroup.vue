<!--
 * @Author: yb
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-20 13:56:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势 特殊人群-->

<template>
  <div class="specialGroup margin-b">
    <div class="title">特殊人群</div>
    <div class="content">
      <div class="main">
        <div id="chartGroup"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    let _chart;
    const dataList = [
      {
        type: "涉毒人员",
        count: 345,
      },
      {
        type: "精神病人",
        count: 260,
      },
      {
        type: "传染病人",
        count: 180,
      },
      {
        type: "社区矫正人员",
        count: 200,
      },
      {
        type: "刑满人员",
        count: 215,
      },
    ];
    return {
      _chart,
      dataList,
    };
  },
  mounted() {
    this._chart = this.echarts.init(document.getElementById("chartGroup"));
    this.initChart(this._chart, this.dataList);
  },
  methods: {
    initChart(_chart, data) {
      var colorArr = ["#2886c6", "#50bfda", "#89e3ec"];
      // colorArr = ["#28c1c6", "#50dac0", "#87e8c7"];
      let pointData = [];
      let countArr = [];
      let xAxisData = [];
      data.forEach((item, i) => {
        pointData.push({
          coord: [i, item.count - 1],
          symbol: `image://./css/img/pic_zhu${i}.png`,
          symbolSize: 15,
        });
        countArr.push(item.count);
        xAxisData.push(item.type);
      });
      let max = "";
      max = Math.max(...countArr);
      var color = {
        type: "linear",
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
          {
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
      countArr.filter(function (item) {
        if (item) {
          constData.push(1);
        } else {
          constData.push(0);
        }
      });
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
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
                color: "#fff",
                fontSize: 15,
                padding: 12,
                backgroundColor: "rgba(10, 20, 30, 0.5)",
              },
              b: {
                color: "#ffb400",
                fontSize: 15,
                padding: 12,
                backgroundColor: "rgba(10, 20, 30, 0.5)",
                // border: '1px solid #022d35'
              },
            },
          },
          left: "right",
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
            fontSize: 10,
            interval: 0,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#2886c6",
            },
          },
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
            show: false,
          },
        },
        series: [
          {
            z: 1,
            name: "数据",
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
              position: "top",
              color: "#fff",
            },
            markPoint: {
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    color: "#fff",
                    formatter: function (param) {},
                  },
                },
              },
              symbolSize: [barWidth, barWidth],
              symbolOffset: [0, -40],
              data: pointData,
            },
          },
          {
            z: 2,
            name: "数据",
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
            name: "数据",
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
      _chart.setOption(option);
    },
  },
};
</script >
<style scoped lang="less">
@import url("~@/assets/XSCSS/common/oveSituation.less");
.specialGroup {
  color: #fff;
  .content {
    height: 17rem;
    .main {
      width: 100%;
      height: 100%;
      #chartGroup {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>