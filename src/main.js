/*
 * @Author: your name
 * @Date: 2021-02-03 13:43:04
 * @LastEditTime: 2021-02-04 09:51:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import Com from './components/Pub.vue'
const app = createApp(App);
app.component('publicCom',Com)
app.mount('#app')
console.log('弗利卡式的')