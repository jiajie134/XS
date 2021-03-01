<!--
 * @Author: your name
 * @Date: 2021-02-20 13:50:25
 * @LastEditTime: 2021-03-01 13:51:32
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
      <car-ousel></car-ousel>
      <found-party></found-party>
    </div>
  </div>
</template>
<script>
import comstatistics from "./left/ComStatistics.vue";
import PartyStatistics from './left/PartyStatistics.vue'
import Carousel from './right/Carousel.vue'
import foundparty from './right/FoundParty'
export default {
  components: {
    "com-statistics": comstatistics,
    "party-statistics":PartyStatistics,
    'car-ousel':Carousel,
    "found-party":foundparty
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