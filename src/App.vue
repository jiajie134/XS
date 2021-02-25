<!--
 * @Author: your name
 * @Date: 2021-02-03 13:43:04
 * @LastEditTime: 2021-02-25 10:51:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\App.vue
-->
<template>

  <div class="appVue">

    <router-view></router-view>
    <!-- <iframe id="unityWin" :src="map" scrolling="no"></iframe> -->
  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      map: this.BASEURL + "unity_index.html",
    };
  },
  beforeCreate() {},
  methods: {
   
  },
  mounted() {
    
  },
};
</script>

<style>
.appVue {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: lightslategray;
}
</style>
