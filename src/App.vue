<!--
 * @Author: your name
 * @Date: 2021-02-03 13:43:04
 * @LastEditTime: 2021-02-19 10:21:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\App.vue
-->
<template>

  <div class="appVue">

    <router-view></router-view>
    <iframe id="unityWin" :src="map" scrolling="no"></iframe>
  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      map:this.BASEURL+'unity_index.html'
    };
  },
  beforeCreate(){

  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.Vex)
  },
};
</script>

<style>
.appVue {
  width: 100%;
  height: 100%;
}
</style>
