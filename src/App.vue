<!--
 * @Author: your name
 * @Date: 2021-02-03 13:43:04
 * @LastEditTime: 2021-02-04 10:36:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\App.vue
-->
<template>
<publicCom pub="我也是公共组件"/>
  <HelloWorld msg="我是app.vue根组件" def="appVue" class="propNull" id="app"/>
  <comp :title="title" v-model:foo="foo" @check="EMITs"/>
  <publicCom :pub="pub"/>
  <input type="" name="" :value="foo">
  <span>我显示父组件的参数</span>
  <div>-------------------------------------------</div>
  <live></live>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import comp from './components/components.vue'
import Live from './components/Live.vue'
export default {
  name: 'App',
  data(){
    return {
      title:'我是局部组件',
      pub:'我是公共组件',
      foo:'父组件绑定v-model'
    }
  },
  components: { 
    HelloWorld,comp,Live
  },
  methods: {
    EMITs(v){
      console.log('我是父组件自定义事件,'+v)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
