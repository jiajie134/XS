/*
 * @Author: your name
 * @Date: 2020-11-25 10:19:15
 * @LastEditTime: 2021-02-19 10:24:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \treeMap\js\work\Work.js
 */
import MapUtil from '../util/MapUtil.js';
import Util from '../util/Util.js'
import MapEventManager from '../util/MapEventManager.js';
import Popup from '../util/MapPopup.js';
import UdmLayer from '../layers/UdmLayer.js';
export default class {
    constructor(Vex) {
        this.Vex = Vex;
        // 隐藏默认点位
        this.defaultPreFab = {};
        Vex.preFabManager.getSceneBuiltInObject((e) => {
            let defaultPreFab = e.children;
            for (let i = 0; i < defaultPreFab.length; i++) {
                defaultPreFab[i].setVisible(false);
                this.defaultPreFab[defaultPreFab[i].name] = defaultPreFab[i];
            }
        })
        // 图层对象创建
        this.layers = {};
        // 加载工具类
        this.MapUtil = MapUtil;
        this.Util = Util;
        this.MapEventManager = new MapEventManager(Vex)
        // GA资源基础路径
        this.gaBasePath = 'http://localhost:8080/treemap/data/ga/'
        // udm资源基础路径
        this.udmBasePath = 'http://localhost:8080/treemap/data/udm/'
        // mat资源基础路径
        this.matBasePath = 'http://localhost:8080/treemap/data/material/'
        // 弹窗加载
        this.Popup = new Popup(this);
        // udm模型加载
        this.udm = new UdmLayer(this);

    }
}