<!--
 * @Author: your name
 * @Date: 2021-02-03 13:43:04
 * @LastEditTime: 2021-03-01 11:48:16
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
  background-image: url('~@/assets/images/img/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
