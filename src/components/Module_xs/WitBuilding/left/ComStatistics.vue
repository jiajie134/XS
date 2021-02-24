<!--
 * @Author: your name
 * @Date: 2021-02-22 17:37:26
 * @LastEditTime: 2021-02-24 14:41:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation\left\ComStatistics.vue
-->
<!-- 综合统计 -->
<template>
  <div class="ComStatistics">
    <card-Title></card-Title>
    <div class="moudle_card">
      <div class="layer">
        <div class="layerdiv" v-for="i in Statis.StatisRt.length" :key="i"></div>
      </div>
      <div class="super">
        <div class="superdiv" v-for="(item,i) in Statis.StatisRt" :key="i">
          <div class="statisTitle">{{item.statisName}}</div>
          <div class="statisCount">{{item.statisCount}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { provide ,reactive} from "vue";
export default {
  setup() {
    provide("leftTitle", "综合统计");
    const Statis =reactive({
      StatisRt:[
      {
        statisName: "党组织数量",
        statisCount: 56,
      },
      {
        statisName: "党员数量",
        statisCount: 5674,
      },
      {
        statisName: "预备党员数量",
        statisCount: 3856,
      },
      {
        statisName: "党建活动数量",
        statisCount: 27,
      },
      {
        statisName: "申请入党人员数量",
        statisCount: 3643,
      },
      {
        statisName: "入党积极分子",
        statisCount: 2856,
      }
    ]
    }) 
    return {
      Statis
    }
  },
};
</script>

<style scoped lang="less">
.moudle_card {
  width: 100%;
  height: 90%;
  padding: 0.833333rem /* 20/24 */;
  position: relative;
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .layer {
    > .layerdiv {
      width: 26%;
      height: 35%;
      border: 0.083333rem /* 2/24 */ solid @motifColor;
      z-index: 5;
    }
  }
  .super {
    top: 1.666667rem /* 40/24 */;
    left: 1.666667rem /* 40/24 */;
    > .superdiv {
      width: 26%;
      height: 35%;
      z-index: 6;
      border: 0.083333rem /* 2/24 */ solid @motifColor;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .statisTitle {
        color: white;
        font-size: 1.25rem /* 30/24 */;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      .statisCount {
        margin-top: .833333rem /* 20/24 */;
        font-size: 2.083333rem /* 50/24 */;
        color: @motifColor;
        font-weight: bold;
        font-family: LCDfont;
        letter-spacing: .208333rem /* 5/24 */;
      }
    }
  }
}
</style>
