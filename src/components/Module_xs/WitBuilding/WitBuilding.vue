<!--
 * @Author: your name
 * @Date: 2021-02-20 13:50:25
 * @LastEditTime: 2021-02-23 11:17:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\Wit.vue
-->
<!--智慧党建-->

<template>
  <div
    class="WitBuilding layout"
    id="WitBuilding"
  >
    <div class="left">
      <com-statistics></com-statistics>
      <party-statistics></party-statistics>
    </div>
    <div class="right">

    </div>
  </div>
</template>
<script>
import comstatistics from "./left/ComStatistics.vue";
import PartyStatistics from './left/PartyStatistics.vue'
export default {
  components: {
    "com-statistics": comstatistics,
    "party-statistics":PartyStatistics
  },
  methods: {},
};
</script >
<style scoped lang="less">
@import "~@/assets/XSCSS/ComStatistics.less";
 #WitBuilding {
   height: 100%;
 }
</style>