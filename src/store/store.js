/*
 * @Author: your name
 * @Date: 2021-02-19 14:08:03
 * @LastEditTime: 2021-02-23 16:34:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\store\store.js
 */

import {
    createStore
} from 'vuex'
// 创建 store 容器实例.
let NavigationState = sessionStorage.getItem('NavigationState') || 0;
let Wid = window.innerWidth;
let Hei = window.innerHeight;
const store = createStore({
    state() {
        return {
            NavigationState: NavigationState,
            Wid,
            Hei
        }
    },
    mutations: {
        changeNavigationState(state,i){
            state.NavigationState = i;
            sessionStorage.setItem('NavigationState',i)
        }
    }
})
export {
    store
}