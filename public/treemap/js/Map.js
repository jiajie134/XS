import {
    mapConfig
} from './config/MapConfig.js';
// 初始化地图
export default {
    init(finishCallBack) {
        // 加载地图配置
        Vex.render.start(mapConfig);
        Vex.render.loadFinish = function (Vex, scene) {
            finishCallBack(Vex, scene)
        }
    }
}