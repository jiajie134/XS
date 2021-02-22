<!--
 * @Author: your name
 * @Date: 2021-02-03 13:52:07
 * @LastEditTime: 2021-02-22 11:01:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\components\components.vue
-->
<template>
  <div class="Pub">
    <div id="layerCheckBox">
      <div id="layerChecked">
        <ul>
          <li><label for="serve"><input
                id="serve"
                type="checkbox"
              >
              <img src="../assets/images/党建.png" />&nbsp;&nbsp;党群服务</label>
          </li>
          <li><label for="market"><input
                id="market"
                type="checkbox"
              >
              <img src="../assets/images/超市.png" />&nbsp;&nbsp;农贸市场</label>
          </li>
          <li><label for="street"><input
                id="street"
                type="checkbox"
              >
              <img src="../assets/images/street_icon.png" />&nbsp;&nbsp;全景</label>
          </li>
          <li><label for="WIFI"><input
                id="WIFI"
                type="checkbox"
              >
              <img src="../assets/images/wifi_icon.png" />&nbsp;&nbsp;WIFI</label>
          </li>
          <li><label for="monitor"><input
                id="monitor"
                type="checkbox"
              >
              <img src="../assets/images/摄像头.png" />&nbsp;&nbsp;监控</label></li>
          <li><label for="parking"><input
                id="parking"
                type="checkbox"
              >
              <img src="../assets/images/parking_icon.png" />&nbsp;&nbsp;停车场</label>
          </li>
          <li><label for="building"><input
                id="building"
                type="checkbox"
                checked="checked"
              >
              <img src="../assets/images/形状1259.png" />&nbsp;&nbsp;商家</label></li>
          <li><label for="toilet"><input
                id="toilet"
                type="checkbox"
              >
              <img src="../assets/images/toilet_icon.png" />&nbsp;&nbsp;卫生间</label>
          </li>
        </ul>
      </div>

    </div>
  </div>

</template>
<script>
import { computed } from "vue";
export default {
  props: {
    pub: String,
  },
  setup(props) {
    //提供的函数props直接用就完事了嗷~~~
    const str = computed(() => {
      return "父组件值为：" + props.pub;
    });
    return {
      str,
    };
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style scoped>
  @import "../assets/css/control.css";
</style>