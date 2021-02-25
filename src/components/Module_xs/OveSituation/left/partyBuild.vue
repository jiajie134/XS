<!--
 * @Author: yb
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-24 10:01:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势 党建-->

<template>
  <div class="partyBuild margin-b">
    <div class="title">智慧党建</div>
    <div class="content">
      <div class="left">
        <p class="num color-y">313</p>
        <p>党员总数</p>
      </div>
      <div class="right">
        <p class="color-qj padding-bottom">领导班子</p>
        <div class="main padding-bottom">
          <div>社区党支部书记:<span class="color-y">1</span>人</div>
          <div>党支部副书记:<span class="color-y">1</span>人</div>
        </div>
        <p class="color-qj padding-bottom">党组织机构</p>
        <div class="main-btn">
          <div class="btn-wrap">
            <p><span class="color-y">7</span>人</p>
            <p class="p2">党支部</p>
            <div class="Img"></div>
          </div>
          <div class="btn-wrap">
            <p><span class="color-y">18</span>人</p>
            <p class="p2">居民党小组</p>
            <div class="Img"></div>
          </div>
          <div class="btn-wrap">
            <p><span class="color-y">21</span>人</p>
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
  setup() {
    return {};
  },
  created() {},
  methods: {},
};
</script >
<style scoped lang="less">
@import url('~@/assets/XSCSS/common/oveSituation.less');
.partyBuild {
  color: #fff;
  .content {
    height: 15rem;
    display: flex;
    justify-content: space-between;
    .left {
      width: 12rem /* 250/24 */ /* 400/24 */ /* 200/24 */;
      height: 12rem /* 200/24 */;
      background: url("~@/assets/images/img/dyzs.png") no-repeat center
        center;
      background-size: cover;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 1.042vw;
      padding-right: 0.391vw;
      box-sizing: border-box;
      .num {
        font-size: 2rem /* 48/24 */;
      }
    }
    .right {
      width: 25rem /* 600/24 */;
      .color-qj {
        color: #6ec3df;
      }
      .padding-bottom {
        margin-bottom: 0.833333rem /* 20/24 */;
      }
      .main {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        > div {
          text-align: left;
          width: 50%;
        }
      }
      .main-btn {
        display: flex;
        justify-content: space-between;
        .btn-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          .Img {
            width: 3.646vw;
            height: 2.214vw;
            background: url("~@/assets/images/img/dyzs_bt.png")
              no-repeat center center;
            background-size: cover;
          }
        }
      }
    }
  }
}
</style>