<!--
 * @Author: your name
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-23 10:08:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势-->

<template>
  <div class="OveSituation layout" id="OveSituation">
    <div class="left">
      <partyBuild></partyBuild>
    </div>
    <div class="right">

    </div>
  </div>
</template>
<script>
import partyBuild from './left/partyBuild'
export default {
  components:{
    partyBuild
  },
  created(){
    console.log(this.$echarts)
  },

  methods: {
     
  },
};
</script >
<style lang="less">
  #OveSituation {
    height: 100%;
  }
</style>