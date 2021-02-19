/*
 * @Author: your name
 * @Date: 2021-02-19 14:08:03
 * @LastEditTime: 2021-02-19 14:13:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\store\store.js
 */

import {
    createStore
} from 'vuex'
// 创建 store 容器实例.
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
export {
    store
}