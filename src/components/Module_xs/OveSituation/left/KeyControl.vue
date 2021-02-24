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
  <div class="keyControl">
    <div class="title">重点管控</div>
    <div class="content">
      <div class="selectField">
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
.keyControl {
  width: 100%;
  height: auto;
  color: #fff;
  .title {
    background-image: url("../../../../assets/images/img/bg_title.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 2.5rem /* 30/12 */;
    line-height: 2.5rem /* 30/12 */;
    width: 100%;
    text-indent: 2.5rem /* 20/12 */;
    color: #4ffff7;
  }
  .content {
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(
      0deg,
      rgba(12, 42, 76, 0.6) 0%,
      rgba(12, 42, 76, 0.4) 25%,
      rgba(12, 42, 76, 0.2) 50%,
      rgba(12, 42, 76, 0) 100%
    );
    border: 1px solid rgba(7, 86, 105, 0.4);
    padding: 0.833333rem /* 20/24 */;
    .selectField{
      display: flex;
      justify-content: space-between;
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
        width: 37rem /* 800/24 */;
        background-color: transparent;
        border: none;
        color: #0ff;
        margin-left: 1rem;
      }
    }
  }
}
</style>