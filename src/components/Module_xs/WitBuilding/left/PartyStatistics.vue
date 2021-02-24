<!--
 * @Author: your name
 * @Date: 2021-02-23 11:11:18
 * @LastEditTime: 2021-02-24 18:02:35
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
    <card-Title></card-Title>
    <div class="party_card">

      <div
        class="sexstatis"
        id="sexstatis"
      >
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
import { provide, reactive } from "vue";
import { SexStatis, BuildCom, PerBuild } from "@/js/myCharts.js";

export default {
  setup() {
    provide("leftTitle", "党员统计");
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
    return {
      StatisData,
      StatisDatage,
    };
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    SexStatis(this.$echarts, "edustatis");
    BuildCom(this.StatisData, this.$echarts);
    BuildCom(this.StatisDatage, this.$echarts);
    PerBuild(this.$echarts,'PerBuild');
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
  > div {
    width: 100%;
  }
  #sexstatis {
    flex: 1;
    width: 50%;
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

