<!--
 * @Author: your name
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-22 18:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势-->

<template>
  <div
    class="OveSituation layout"
    id="OveSituation"
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
  name:"OveSituation",
  components: {
    "com-statistics": comstatistics,
  },
  setup() {
    return {
      
    }
  },
};
</script >
<style scoped lang="less">
#OveSituation {
  height: 100%;
}
</style>