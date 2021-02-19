/*
 * @Author: your name
 * @Date: 2021-02-05 13:52:51
 * @LastEditTime: 2021-02-08 11:42:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\router\router.js
 */
import {
    createRouter,
    createWebHashHistory,
    useRouter
} from 'vue-router'
import com from '../components/HelloWorld.vue'
import pub from '../components/Pub.vue'
const ROUTES = [{
        path: '/',
        name: 'hello',
        component: com
    },
    {
        path: '/pub',
        name: 'pub',
        component: pub
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: ROUTES
});

export {
    router,
    useRouter
}