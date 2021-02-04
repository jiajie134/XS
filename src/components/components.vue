<!--
 * @Author: your name
 * @Date: 2021-02-03 13:52:07
 * @LastEditTime: 2021-02-04 09:54:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\components\components.vue
-->
<template>
  <div>{{title}}</div>
  <input type="" name="test" :value="foo" @input="$emit('update:foo', $event.target.value)">

  <span>子组件通过v-model修改父组件参数</span>
</template>
<script>
export default {
    emits:['check'],
    props:{
        title:String,
        foo:String
    },
    data(){
        return {
            
        }
    },
    methods: {

    },
    created(){
       
        this.$emit('check',11111111)
    }
};
</script>