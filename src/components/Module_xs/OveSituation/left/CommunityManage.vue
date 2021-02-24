<!--
 * @Author: yb
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-20 13:56:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势 社区管理-->
<template>
  <div class="communityManage">
    <div class="title">社区管理</div>
    <div class="content">
      <div id="manageDetail"></div>
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
.communityManage {
  width: 100%;
  height: 18rem;
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
    height: calc(100% - 2.916667rem /* 70/24 */);
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
  }
}
</style>