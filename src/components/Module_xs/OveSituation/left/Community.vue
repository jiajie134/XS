<!--
 * @Author: yb
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-20 13:56:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势 社区治理-->
<template>
  <div class="community margin-b">
    <div class="title">社区治理</div>
    <div class="content">
      <div class="con_title">
        <span>社会救助保障项目</span>
        <span>日间照料</span>
      </div>
      <div class="con_chart">
        <!-- 分类echart -->
        <div class="left-chart">
          <div id="crowdClassify"></div>
          <div class="inner">
            <span class="color-b">社会救助</span>
            <span class="color-b">保障分类</span>
          </div>
          <div class="total">总计：<span class="color-y">2300</span>人</div>
        </div>
        <div class="dayCare">
          <div id="totalCare"></div>
          <div id="company"></div>
          <div id="volunteer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const chartData1 = [
      {
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
    const chartData2 = [
      {
        value: 50,
      },
      {
        value: 50,
      },
    ];
    let chart1, chart2, chart3, chart4;
    return {
      chartData1,
      chartData2,
      chart1,
      chart2,
      chart3,
      chart4,
    };
  },
  created() {},
  mounted() {
    this.chart1 = this.$echarts.init(document.getElementById("crowdClassify"));
    this.chart2 = this.$echarts.init(document.getElementById("totalCare"));
    this.chart3 = this.$echarts.init(document.getElementById("company"));
    this.chart4 = this.$echarts.init(document.getElementById("volunteer"));
    this.initChart1();
    this.initChart2(this.chart2,'日间照料总计',this.chartData2);
    this.initChart2(this.chart3,'老入户陪伴人数',this.chartData2);
    this.initChart2(this.chart4,'老年志愿队伍',this.chartData2);
  },
  methods: {
    initChart1: function () {
      let option = {
        color: [
          "#ff3d3d",
          "#22a1f2",
          "#00bb6e",
          "#00bb6e",
          "#79c036",
          "#00d08d",
          "#f9a426",
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
            fontSize: 12,
          },
          data: this.chartData1,
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
                show: false,
              },
            },
            data: this.chartData1,
          },
        ],
      };
      this.chart1.setOption(option);
    },
    initChart2: function (_echart,text) {
      let option = {
        color: ["#22a1f2", "rgba(255,255,255,.1)"],
        series: [
          {
            name: text,
            type: "pie",
            radius: ["45%", "70%"],
            center: ["50%", "40%"],
            hoverAnimation: false,
            label: {
              show: false,
            },
            data: this.chartData2,
          },
          {
            center: ["50%", "40%"],
            radius: ["80%", "82%"],
            name: "",
            type: "pie",
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            label: {
              show: false,
            },
            data: [
              {
                value: 1,
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgba(255,255,255,.1)",
                      },
                      {
                        offset: 0.2,
                        color: "#22a1f2",
                      },
                      {
                        offset: 0.4,
                        color: "#22a1f2",
                      },
                      {
                        offset: 0.8,
                        color: "#22a1f2",
                      },
                      {
                        offset: 1,
                        color: "rgba(255,255,255,.1)",
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
        tooltip: {
          show: false,
        },
        legend: {
          show: false,
        },
        title: {
          show: true,
          text: text,
          textAlign: 'left',
          left: "center",
          textVerticalAlign: "bottom",
          bottom: "-10",
          textStyle: {
            color: "#fff",
            fontWeight: 200,
            fontSize: 10,
          },
        },
      };
      _echart.setOption(option);
    },
  },
};
</script >
<style scoped lang="less">
@import url("~@/assets/XSCSS/common/oveSituation.less");
.community {
  color: #fff;
  .content {
    height: 23rem /* 70/24 */;
    .con_title {
      display: flex;
      justify-content: space-between;
      width: 100%;
      > span:last-child {
        width: 12rem;
      }
    }
    .con_chart {
      display: flex;
      height: 92%;
      .left-chart {
        width: 28rem;
        height: 18rem;
        position: relative;
        #crowdClassify {
          width: 100%;
          height: 100%;
        }
        .inner {
          position: absolute;
          width: 6rem;
          height: 6rem;
          background-color: lightblue;
          transform: translate(-50%, -66%);
          top: 50%;
          left: 50%;
          background-color: #07213f;
          border-radius: 50%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          border: 1px solid #01d4e5;
          box-shadow: inset 0.052vw 0.052vw 0.651vw #01d4e5;
        }
        .total {
          position: absolute;
          top: 0.833333rem /* 20/24 */;
          left: 0.416667rem /* 10/24 */;
          padding: 0.321vw;
          height: 1.7vw;
          background-color: rgba(10, 20, 30, 0.5);
          border: 1px solid #022d35;
        }
      }
      .dayCare {
        width: 12rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-left: 1px solid #0ff;
        > div {
          width: 8rem;
          height: 8rem;
          // background-color: blueviolet;
        }
      }
    }
  }
}
</style>