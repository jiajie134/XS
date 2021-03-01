<!--
 * @Author: yb
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-20 13:56:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势 社区管理-->
<template>
  <div class="communityManage margin-b">
    <div class="title">社区管理</div>
    <div class="content">
      <div id="manageDetail"></div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    let _chart;
    const data = [
      {
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
      },
    ]; // 类别
    return {
      _chart,
      data,
    };
  },
  mounted() {
    this._chart = this.echarts.init(document.getElementById("manageDetail"));
    this.initChart(this._chart, this.data);
  },
  methods: {
    initChart(_echart, data) {
      var total = data.map((item) => item.value); // 数据总数
      total = total.reduce((a, b) => {
        return a + b;
      });
      var datas = [];
      data.forEach((value) => {
        datas.push(value.value);
      });
      let option = {
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
          left: "25%",
          height: "auto",
          top: "1%", // 设置条形图的边距
          right: "25%",
          bottom: "10%",
        },
        yAxis: [
          {
            type: "category",
            inverse: false,
            data: data,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          {
            // 内
            type: "bar",
            barWidth: 18,

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
                      colorStops: [
                        {
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
                      colorStops: [
                        {
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
                      colorStops: [
                        {
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
                      colorStops: [
                        {
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
                  fontSize: 15,
                },
              },
            },
            data: data,
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
            symbolMargin: 6,
            symbol: "roundRect",
            symbolClip: true,
            symbolSize: [1, 19],
            symbolPosition: "start",
            symbolOffset: [1, -1],
            symbolBoundingData: this.total,
            data: data,
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
                  return (
                    "{a|  " +
                    ((params.data / total) * 100).toFixed(2) +
                    "%}{z|  " +
                    params.data +
                    "}"
                  );
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
            data: [total, total, total, total, total, total, total],
            barWidth: 25,
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
      _echart.setOption(option);
    },
  },
};
</script >
<style scoped lang="less">
@import url("~@/assets/XSCSS/common/oveSituation.less");
.communityManage {
  color: #fff;
  .content {
    height: 14rem;
    #manageDetail {
      width: 100%;
      height: 100%;
    }
  }
}
</style>