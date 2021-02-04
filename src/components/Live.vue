<!--
 * @Author: your name
 * @Date: 2021-02-04 10:32:16
 * @LastEditTime: 2021-02-04 10:38:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\components\Live.vue
-->
<template>
  <div>
     <span>num{{num}}</span>
        <button type="" @click="addnum">点我</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        num:0
    };
  },
  renderTriggered({ key, target, type }) {
    console.log({ key, target, type });
    console.log('renderTriggered')
  },
   renderTracked({ key, target, type }) {
    console.log({ key, target, type })
    console.log('renderTracked')
    /* 当组件第一次渲染时，这将被记录下来:
    {
      key: "cart",
      target: {
        cart: 0
      },
      type: "get"
    }
    */
  },
  methods: {
      addnum(){
          this.num++;
      }
  },
};
</script>
<style >
</style>