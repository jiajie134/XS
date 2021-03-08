<!--
 * @Author: your name
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-24 10:02:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势-->

<template>
  <div class="OveSituation layout" id="OveSituation">
    <div class="left">
      <partyBuild></partyBuild>
      <community ref="community"></community>
      <communityManage ref="communityMa"></communityManage>
      <keyControl></keyControl>
    </div>
    <div class="right">
      <comProfile></comProfile>
      <specialGroup ref="specialGroup"></specialGroup>
      <safety></safety>
      <popType ref="popType"></popType>
    </div>
  </div>
</template>
<script>
import partyBuild from './left/partyBuild'
import community from './left/Community'
import communityManage from './left/CommunityManage'
import keyControl from './left/KeyControl'
import comProfile from './right/ComProfile'
import specialGroup from './right/SpecialGroup'
import safety from './right/Safety'
import popType from './right/PopType'
export default {
  components:{
    partyBuild,
    community,
    communityManage,
    keyControl,
    comProfile,
    specialGroup,
    safety,
    popType
  },
  methods: {
     
  },
  mounted(){
    window.onresize = () => {
        return (() => {
          this.$refs.community.resize()
          this.$refs.communityMa.resize()
          this.$refs.specialGroup.resize()
          this.$refs.popType.resize()
        })()
    }
  }
};
</script >
<style lang="less">
@import url('~@/assets/XSCSS/common/oveSituation.less');
  #OveSituation {
    height: 100%;
    font-size: 1.25rem /* 30/24 */;
  }
</style>