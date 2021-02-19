/*
 * @Author: your name
 * @Date: 2021-02-03 13:43:04
 * @LastEditTime: 2021-02-19 11:01:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\main.js
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import control from './components/Pub.vue'
import {router,useRouter} from './router/router.js'

const app = createApp(App);


app.component('control', control)
app.use(router)
app.config.globalProperties.useR = useRouter();
app.config.globalProperties.Vex = window.Vex;
app.config.globalProperties.BASEURL = 'http://localhost:8080/treemap/'
app.config.globalProperties.work = window.Work
app.mount('#app')