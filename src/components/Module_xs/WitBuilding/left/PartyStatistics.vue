<!--
 * @Author: your name
 * @Date: 2021-02-23 11:11:18
 * @LastEditTime: 2021-03-01 13:28:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Module_xs\WitBuilding\left\PartyStatistics.vue
-->
<!-- 党员统计
  sexstatis 性别统计
  edustatis 学历统计
 -->
<template>
  <div class="PartyStatistics">
    <card-Title title='党员统计'></card-Title>
    <div class="party_card">

      <div
        class="sexstatis"
        id="sexstatis"
      >
      </div>
      <div class="manOrwoman">
        <div class="woman">
          <div class="sex">女</div>
          <div class="count">202</div>
          <div class="percent">44%</div>
        </div>
        <div class="man">
          <div class="sex">男</div>
          <div class="count">250</div>
          <div class="percent">56%</div>
        </div>
      </div>
      <div
        class="agestatistics"
        id="agestatistics"
      >
        <div
          v-for="(item,i) in StatisData.data"
          :key="i"
          :id="item.id"
        ></div>
      </div>
      <div
        class="partystanding"
        id="partystanding"
      >
        <div
          v-for="(item,i) in StatisDatage.data"
          :key="i"
          :id="item.id"
        ></div>
      </div>
      <div
        class="PerandEdu"
        id="PerandEdu"
      >
        <div
          class="edustatis"
          id="edustatis"
        ></div>
        <div
          class="PerBuild"
          id="PerBuild"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import {  reactive } from "vue";
import { EduStatis, BuildCom, PerBuild, SexStatis } from "@/js/myCharts.js";

export default {
  setup() {
    //党龄数据
    const StatisData = reactive({
      data: [
        {
          data: 0.5,
          title: "0~5年",
          id: "age0_5",
        },
        {
          data: 0.5,
          title: "5~10年",
          id: "age5_10",
        },
        {
          data: 0.5,
          title: "10~15年",
          id: "age10_15",
        },
        {
          data: 0.5,
          title: "15~20年",
          id: "age15_20",
        },
        {
          data: 0.5,
          title: "20年以上",
          id: "age20up",
        },
      ],
    });
    //年龄统计
    const StatisDatage = reactive({
      data: [
        {
          data: 0.5,
          title: "30以下",
          id: "age30down",
        },
        {
          data: 0.5,
          title: "30~40年",
          id: "age30_40",
        },
        {
          data: 0.5,
          title: "40~50年",
          id: "age40_50",
        },
        {
          data: 0.5,
          title: "50~60年",
          id: "age50_60",
        },
        {
          data: 0.5,
          title: "60年以上",
          id: "age60up",
        },
      ],
    });
    //性别统计
    const statisDataEdy = reactive({
      data: [
        {
          id: "edustatis",
        },
      ],
    });
    //党建构成人员
    const statisPerBuild = reactive({
      data: {
        id: "PerBuild",
      },
    });
    //性别统计
    const statisDataSex = reactive({
      data: {
        id: "sexstatis",
      },
    });
    return {
      statisDataSex,
      StatisData,
      StatisDatage,
      statisPerBuild,
      statisDataEdy,
    };
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    EduStatis(this.echarts, this.statisDataEdy);
    BuildCom(this.StatisData, this.echarts);
    BuildCom(this.StatisDatage, this.echarts);
    PerBuild(this.echarts, this.statisPerBuild);
    SexStatis(this.echarts, this.statisDataSex);
  },
  computed: {},
  watch: {},
};
</script>

<style scoped lang="less">
.party_card {
  width: 100%;
  height: calc(100% - 2.916667rem);
  padding: 0.833333rem /* 20/24 */;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  > div {
    width: 100%;
  }
  > .manOrwoman {
    position: absolute;
    height: 11.583333rem /* 278/24 */;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    > .woman,
    .man {
      width: 15%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    > .woman {
      align-items: flex-end;
      .sex {
        font-size: 1.25rem /* 30/24 */;
        color: #fff;
        font-weight: bold;
      }
      .count,
      .percent {
        color: @motifColor;
        font-weight: bolder;
        font-size: 1.666667rem /* 40/24 */;
      }
    }
    > .man {
      align-items: flex-start;
      .sex {
        font-size: 1.25rem /* 30/24 */;
        color: #fff;
        font-weight: bold;
      }
      .count,
      .percent {
        color: @motifColor;
        font-weight: bolder;
        font-size: 1.666667rem /* 40/24 */;
      }
    }
  }
  #sexstatis {
    flex: 1;
    width: 90%;
  }
  #agestatistics,
  #partystanding {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > div {
      height: 80%;
      flex: 1;
    }
  }
  #PerandEdu {
    flex: 1.5;
    display: flex;
    > div {
      flex: 1;
      height: 100%;
    }
  }
}
</style>

