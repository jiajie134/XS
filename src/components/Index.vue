<!--
 * @Author: your name
 * @Date: 2021-02-03 13:43:04
 * @LastEditTime: 2021-02-20 14:29:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <XS-Header></XS-Header>
    <navAction></navAction>
    <XS-Body></XS-Body>
    <control></control>
  </div>
</template>

<script>
// import {ref,reactive} from 'vue'
// import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import navAction from './Navigation'
export default {
  name: "HelloWorld",
  // inheritAttrs: false,
  props: {
    
  },
  setup(){
    const store = useStore();
    return {
      store
    }
  },
   components:{
    navAction
  },
  data() {
    return {
    
    };
  },
  created() {
    console.log("-------------------------------------------------")
    console.log(this.$echarts)
  },
  methods: {
 
  },
};
</script>


<style scoped>
.hello {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>
