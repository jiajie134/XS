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
  <div class="partyBuild">
    <div class="title">智慧党建</div>
    <div class="cont-height">
      <div class="left">
        <p class="num">313</p>
        <p>党员总数</p>
      </div>
      <div class="right">
        <p class="color-qj padding-bottom">领导班子</p>
        <div class="main">
          <div>社区党支部书记:<span>1</span>人</div>
          <div>党支部副书记:<span>1</span>人</div>
        </div>
        <p class="color-qj padding-bottom">党组织机构</p>
        <div class="main-btn">
          <div class="btn-wrap">
            <p><span>7</span></p>
            <p class="p2">党支部</p>
            <div class="Img"></div>
          </div>
          <div class="btn-wrap">
            <p><span>18</span></p>
            <p class="p2">居民党小组</p>
            <div class="Img"></div>
          </div>
          <div class="btn-wrap">
            <p><span>21</span>人</p>
            <p class="p2">党员责任区</p>
            <div class="Img"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
  },
  methods: {},
};
</script >
<style scoped lang="less">
.partyBuild{
    width: 100%;
    height: auto;
}
.title {
  background-image: url("../../../../assets/images/img/bg_title.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 30px;
  width: 100%;
  text-indent: 20px;
  color: #4ffff7;
}
.cont-height {
  display: flex;
  width: 100%;
  height: calc(100% - 2.083vw);
  background-image: linear-gradient(
    0deg,
    rgba(12, 42, 76, 0.6) 0%,
    rgba(12, 42, 76, 0.4) 25%,
    rgba(12, 42, 76, 0.2) 50%,
    rgba(12, 42, 76, 0) 100%
  );
  border: 1px solid rgba(7, 86, 105, 0.4);
  padding: 0.521vw;
  box-sizing: border-box;
}
.left {
  width: 6.615vw;
  height: 7.604vw;
  background: url("../../../../assets/images/img/dyzs.png") no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 1.042vw;
  padding-right: 0.391vw;
  box-sizing: border-box;
}
.btn-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.main-btn {
  display: flex;
  justify-content: space-between;
}
.Img {
  width: 3.646vw;
  height: 2.214vw;
  background: url("../../../../assets/images/img/dyzs_bt.png") no-repeat center
    center;
  background-size: cover;
}
</style>