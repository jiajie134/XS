/*
 * @Author: your name
 * @Date: 2021-02-05 13:52:51
 * @LastEditTime: 2021-02-20 14:03:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\router\router.js
 */
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
// import Index from '../components/Index.vue'
const ROUTES = [{
    path: '/',
    name: 'Index',
    redirect:'/OveSituation',
    component: () => import( /* webpackChunkName: "Index"  */ "../components/Index.vue"),
    meta: {
        title: '首页'
    },
    children: [{
        path: 'OveSituation',
        name: 'OveSituation',
        component: () => import( /* webpackChunkName: "OveSituation"  */ "../components/Moudle_xs/OveSituation.vue"),
        meta:{
            title:'总体态势'
        }
    },{
        path: 'PopManagement',
        name: 'PopManagement',
        component: () => import( /* webpackChunkName: "PopManagement"  */ "../components/Moudle_xs/PopManagement.vue"),
        meta:{
            title:'人口治理专题'
        }
    },{
        path: 'ComGovernance',
        name: 'ComGovernance',
        component: () => import( /* webpackChunkName: "ComGovernance"  */ "../components/Moudle_xs/ComGovernance.vue"),
        meta:{
            title:'社区治理专题'
        }
    },{
        path: 'EmphasisControl',
        name: 'EmphasisControl',
        component: () => import( /* webpackChunkName: "EmphasisControl"  */ "../components/Moudle_xs/EmphasisControl.vue"),
        meta:{
            title:'重点管控专题'
        }
    },{
        path: 'WitBuilding',
        name: 'WitBuilding',
        component: () => import( /* webpackChunkName: "WitBuilding"  */ "../components/Moudle_xs/WitBuilding.vue"),
        meta:{
            title:'智慧党建专题'
        }
    },{
        path: 'ComSecurity',
        name: 'ComSecurity',
        component: () => import( /* webpackChunkName: "ComSecurity"  */ "../components/Moudle_xs/ComSecurity.vue"),
        meta:{
            title:'社区安全专题'
        }
    },{
        path: 'PubSanAndMed',
        name: 'PubSanAndMed',
        component: () => import( /* webpackChunkName: "PubSanAndMed"  */ "../components/Moudle_xs/PubSanAndMed.vue"),
        meta:{
            title:'公共卫生医疗'
        }
    }]
}];
const router = createRouter({
    history: createWebHashHistory(),
    routes: ROUTES
});

export {
    router
}