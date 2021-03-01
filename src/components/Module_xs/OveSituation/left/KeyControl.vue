<!--
 * @Author: yb
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-20 13:56:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势 重点管控-->
<template>
  <div class="keyControl margin-b">
    <div class="title">重点管控</div>
    <div class="content">
      <div class="selectField flex">
        <i class="focus"></i>
        <select name="" id="">
          <option value="">社区监控</option>
          <option value="">街道监控</option>
        </select>
      </div>
      <div class="vedioPart"></div>
    </div>
  </div>
</template>
<script>
export default {
  setup(){
    return{

    }
  },
  created() {},
  methods: {},
};
</script >
<style scoped lang="less">
@import url('~@/assets/XSCSS/common/oveSituation.less');
.keyControl {
  color: #fff;
  .content {
    height: 14rem;
    .selectField{
      border: 1px solid rgba(11, 158, 255, 0.2);
      height: 2.5rem /* 60/24 */;
      line-height: 2.5rem;
      align-items: center;
      .focus{
        width: 1.2rem /* 20/24 */;
        height: 1.2rem /* 20/24 */;
        transform: rotate(45deg);
        display: inline-block;
        background: url('../../../../assets/images/img/right_z.png') 0 0 no-repeat;
        background-color: #0b9eff;
      }
      select{
        height: 1.25rem /* 30/24 */;
        width: 40rem /* 800/24 */;
        background-color: transparent;
        border: none;
        color: #0ff;
        margin-left: 1rem;
      }
    }
  }
}
</style>