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
      <community></community>
      <communityManage></communityManage>
      <keyControl></keyControl>
    </div>
    <div class="right">
      <comProfile></comProfile>
      <specialGroup></specialGroup>
      <safety></safety>
      <keyCoPopTypetrol></keyCoPopTypetrol>
    </div>
  </div>
</template>
<script>
import partyBuild from './left/PartyBuild'
import community from './left/Community'
import communityManage from './left/CommunityManage'
import keyControl from './left/KeyControl'
import comProfile from './right/ComProfile'
import specialGroup from './right/SpecialGroup'
import safety from './right/Safety'
import keyCoPopTypetrol from './right/PopType'
export default {
  components:{
    partyBuild,
    community,
    communityManage,
    keyControl,
    comProfile,
    specialGroup,
    safety,
    keyCoPopTypetrol
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