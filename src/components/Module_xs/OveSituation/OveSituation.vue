<!--
 * @Author: your name
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-20 13:56:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势-->

<template>
  <div class="OveSituation" id="OveSituation">
    <div class="leftBox">
      <partyBuild></partyBuild>
    </div>
    <div class="rightBox">

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
<style scoped lang="less">
  .OveSituation{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    .leftBox{
      pointer-events: initial;
      width: 20%;
      height: calc(100% - 20px);
      padding: 10px;
    }
    .rightBox{
      pointer-events: initial;
      width: 20%;
      height: calc(100% - 20px);
      padding: 10px;
    }
  }
    
</style>