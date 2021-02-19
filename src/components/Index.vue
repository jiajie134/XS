<!--
 * @Author: your name
 * @Date: 2021-02-03 13:43:04
 * @LastEditTime: 2021-02-19 14:23:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <XS-Header></XS-Header>
    <XS-Body></XS-Body>
    <control></control>
  </div>
</template>

<script>
// import {ref,reactive} from 'vue'
// import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
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
  data() {
    return {
    
    };
  },
  created() {
    console.log(this.$store.state.count)
    console.log(this.store.state.count)
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
