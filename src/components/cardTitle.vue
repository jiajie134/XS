<!--
 * @Author: your name
 * @Date: 2021-02-22 16:23:58
 * @LastEditTime: 2021-02-23 14:59:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\cardTitle.vue
-->
<!-- 卡片标题 -->
<template>
  <div class="cardTitle">
      <div>
          <img src="@/assets/images/chongdie.png" alt="">
      </div>
      <span class="titletext">{{leftTitle}}</span>
  </div>
</template>

<script>
import {inject} from 'vue'
export default {
  props: {
  },
  setup(props){
      const leftTitle = inject('leftTitle')
      return {
          leftTitle
      }
  }
  
};
</script>

<style  scoped lang="less">
.cardTitle {
    width: 100%;
    display: flex;
    align-items: center;
    height: 2.916667rem /* 70/24 */;
    >div {
        width: 2.083333rem;
        height: 2.083333rem;
        >img {
            width: 100%;
            height:100%;
        }
    }
    >.titletext {
        font-size: 2.083333rem;
        margin-left: 1rem;
        color: white;
        font-weight: 500;
        vertical-align: top;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
}
</style>
