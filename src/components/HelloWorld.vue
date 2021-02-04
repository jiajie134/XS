<!--
 * @Author: your name
 * @Date: 2021-02-03 13:43:04
 * @LastEditTime: 2021-02-03 13:50:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <h3 def="he">{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // inheritAttrs: false,
  props: {
    msg: String
  }
}
</script>


<style scoped>

</style>
