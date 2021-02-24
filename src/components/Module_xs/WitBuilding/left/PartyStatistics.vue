<!--
 * @Author: your name
 * @Date: 2021-02-23 11:11:18
 * @LastEditTime: 2021-02-23 17:27:47
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
      <div>
        <div
          class="sexstatis"
          id="sexstatis"
        >
        {{Wid}}
        </div>
        <div
          class="edustatis"
          id="edustatis"
        >
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { provide } from "vue";
import { SexStatis } from "@/js/myCharts.js";
import { mapState } from "vuex";

export default {
  setup() {
    provide("leftTitle", "党员统计");
  },
  data() {
    return {
      $e:null
    };
  },
  created() {},
  mounted() {
    SexStatis(this.$echarts, "edustatis",this.Wid);
  },
  computed: {
    ...mapState(["Wid"]),
  },
  watch: {
  },
};
</script>

<style scoped lang="less">
.party_card {
  width: 100%;
  height: calc(100% - 2.916667rem);
  padding: 0.833333rem /* 20/24 */;
  display: flex;
  > div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .sexstatis {
      width: 100%;
      flex: 1;
    }
    .edustatis {
      width: 100%;
      flex: 1.5;
    }
  }
}
</style>

