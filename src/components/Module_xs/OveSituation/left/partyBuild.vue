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
  <div class="partyBuild">
    <div class="title">智慧党建</div>
    <div class="content">
      <div class="left">
        <p class="num color-yl">313</p>
        <p>党员总数</p>
      </div>
      <div class="right">
        <p class="color-qj padding-bottom">领导班子</p>
        <div class="main padding-bottom">
          <div>社区党支部书记:<span class="color-yl">1</span>人</div>
          <div>党支部副书记:<span class="color-yl">1</span>人</div>
        </div>
        <p class="color-qj padding-bottom">党组织机构</p>
        <div class="main-btn">
          <div class="btn-wrap">
            <p><span class="color-yl">7</span>人</p>
            <p class="p2">党支部</p>
            <div class="Img"></div>
          </div>
          <div class="btn-wrap">
            <p><span class="color-yl">18</span>人</p>
            <p class="p2">居民党小组</p>
            <div class="Img"></div>
          </div>
          <div class="btn-wrap">
            <p><span class="color-yl">21</span>人</p>
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
.partyBuild {
  width: 100%;
  height: auto;
  color: #fff;
  margin-bottom: 0.833333rem /* 20/24 */;
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
    .left {
      width: 12rem /* 250/24 */ /* 400/24 */ /* 200/24 */;
      height: 12rem /* 200/24 */;
      background: url("../../../../assets/images/img/dyzs.png") no-repeat center
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
            background: url("../../../../assets/images/img/dyzs_bt.png")
              no-repeat center center;
            background-size: cover;
          }
        }
      }
    }
  }
  .color-yl {
    color: #ffb400;
  }
}
</style>