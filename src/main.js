/*
 * @Author: your name
 * @Date: 2021-02-03 13:43:04
 * @LastEditTime: 2021-02-26 16:54:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3project\src\main.js
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import control from './components/Pub.vue'
import XS_Header from './components/header.vue'
import XS_Body from './components/Body.vue'
import cardTitle from './components/cardTitle.vue'
import * as echarts from 'echarts'
import  'echarts-liquidfill'
import 'default-passive-events'
import '@/assets/css/reset.css'
import '@/assets/css/global.css'

import {
    router
} from './router/router.js'
import {
    store
} from './store/store.js'
const app = createApp(App);

app.component('control', control)
app.component('XS-Header', XS_Header)
app.component('XS-Body', XS_Body)
app.component('card-Title', cardTitle)


app.use(router)
app.use(store)

app.config.globalProperties.Vex = window.Vex;
app.config.globalProperties.BASEURL = 'http://localhost:8080/treemap/'
app.config.globalProperties.work = window.Work
app.config.globalProperties.echarts = echarts

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

app.mount('#app')