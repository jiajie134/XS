/*
 * @Author: your name
 * @Date: 2021-02-05 13:52:51
 * @LastEditTime: 2021-02-19 13:45:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\router\router.js
 */
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Index from '../components/Index.vue'
const ROUTES = [{
        path: '/',
        name: 'Index',
        component: Index
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: ROUTES
});

export {
    router
}