<!--
 * @Author: your name
 * @Date: 2021-02-20 13:50:25
 * @LastEditTime: 2021-02-23 10:08:48
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
    </div>
    <div class="right">

    </div>
  </div>
</template>
<script>
import comstatistics from "./left/ComStatistics.vue";
export default {
  components: {
    "com-statistics": comstatistics,
  },
  methods: {},
};
</script >
<style scoped lang="less">
 #WitBuilding {
   height: 100%;
 }
</style>