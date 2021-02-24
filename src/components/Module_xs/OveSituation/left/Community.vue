<!--
 * @Author: yb
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-20 13:56:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势 社区治理-->
<template>
  <div class="community">
    <div class="title">社区治理</div>
    <div class="content">
      <div class="con_title">
        <span>社会救助保障项目</span>
        <span>日间照料</span>
      </div>
      <div class="con_chart">
        <!-- 分类echart -->
        <div id="crowdClassify"></div>
        <div class="dayCare">
          <div id="totalCare"></div>
          <div id="company"></div>
          <div id="volunteer"></div>
        </div>
      </div>
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
.community {
  width: 100%;
  height: 25rem /* 600/24 */;
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
    height: calc(100% - 2.916667rem /* 70/24 */) ;
    // display: flex;
    // justify-content: space-between;
    background-image: linear-gradient(
      0deg,
      rgba(12, 42, 76, 0.6) 0%,
      rgba(12, 42, 76, 0.4) 25%,
      rgba(12, 42, 76, 0.2) 50%,
      rgba(12, 42, 76, 0) 100%
    );
    border: 1px solid rgba(7, 86, 105, 0.4);
    padding: 0.833333rem /* 20/24 */;
    .con_title{
      display: flex;
      justify-content: space-between;
      width: 100%;
      >span:last-child{
        width: 12rem;
      }
    }
    .con_chart{
      display: flex;
      height: 92%;
      #crowdClassify{
        width: 28rem ;
        height: 18rem;
      }
      .dayCare{
        width: 12rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-left: 1px solid #0ff;
        >div{
          width: 8rem;
          height: 6rem;
          background-color: blueviolet;
        }
      }
    }
  }
}
</style>