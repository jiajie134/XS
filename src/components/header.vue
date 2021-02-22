<!--
 * @Author: your name
 * @Date: 2021-02-03 13:52:07
 * @LastEditTime: 2021-02-22 16:20:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\components\components.vue
-->
<template>
  <div class="header">
    <div class="time">
      <span id="scend">{{timestate.T.time}}</span>
      <span id="week">{{timestate.T.week}}</span>
    </div>
    <div class="title">喜树智慧治理调度中心</div>
    <span></span>
  </div>

</template>
<script>
import { dateFormat } from "../js/time.js";
import { reactive } from "vue";
export default {
  setup() {
    let timestate = reactive({ T: dateFormat() });
    setInterval(function () {
      timestate.T = dateFormat();
    }, 1000);
    return {
      timestate,
    };
  },
};
</script>
<style scoped lang="less">
.header {
  width: 100%;
  height: 6vh;
  font-size:2.5rem;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  .time {
    position: absolute;
    top: 0;
    left: 20px;
    #scend {
      font-family: LCDfont;
    }
    #week {
      margin-left: 20px;
    }
  }
}
</style>