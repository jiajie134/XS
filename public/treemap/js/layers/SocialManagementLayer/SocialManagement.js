// 社会管理
import {
    reqEventToday,
    reqKeySites,
    reqToilets,
    reqRTS,
    reqOrgan,
    reqRTSLine
} from '../../request/request.js';
export default class {
    constructor(work) {
        this.work = work;
        this.Vex = work.Vex;
        this.layers = work.layers;
        this.gaUrl = work.gaBasePath;
        // 弹窗uuid
        this.socialPopupUuid = '';
        this.sanshengxiangPopupUuid = [];
        // 加载每日社会事件点位
        this.createEventTodayPoint();
        // 加载重点场所点位
        this.createKeySitesPoint();
        // 加载公厕点位
        this.createToiletPoint();
        // 加载垃圾转运站点位
        this.createRTSPoint();
        // 加载环卫机构点位
        this.createOrganPoint();
        // 加载清运路线数据保存
        this.lineRefObject = null; // 垃圾清运路线
        this.modelRefObject = null; // 垃圾车模型
        this.trackPath = null;
        // this.createRTSLine()
        // 点击事件
        this.work.MapEventManager.on('left', 'intrgrated', ret => {
            const uuid = ret.obj.getRoot().uuid;
            // 关闭已打开弹窗
            if (this.socialPopupUuid) {
                this.work.Popup.removePopup(this.socialPopupUuid);
                this.socialPopupUuid = '';
            }
            // 社会事件图层点击事件
            if (this.layers['shEventTodayLayer']) {
                this.layers['shEventTodayLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.socialPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [Number(data.eventLon), Number(data.eventLat), 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>事件:</label>
                                        <span>${data.eventTitle?data.eventTitle:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>状态:</label>
                                        <span>${data.results?data.results:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属街道:</label>
                                        <span>${data.streetName?data.streetName:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属社区:</label>
                                        <span>${data.adminCommunity?data.adminCommunity:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属部门:</label>
                                        <span>${data.adminDept?data.adminDept:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>事件位置:</label>
                                        <span>${data.eventPlace?data.eventPlace:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>事件描述:</label>
                                        <span>${data.eventDesc?data.eventDesc:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 重点场所点击事件
            if (this.layers['shKeySitesLayer']) {
                this.layers['shKeySitesLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.socialPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 公厕点击事件
            if (this.layers['shgcLayer']) {
                this.layers['shgcLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.socialPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>负责人:</label>
                                        <span>${data.admin}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>开放时间:</label>
                                        <span>${data.openTime}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 垃圾转运站点击事件
            if (this.layers['shRTSLayer']) {
                this.layers['shRTSLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.socialPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 环卫机构点击事件
            if (this.layers['shOrganLayer']) {
                this.layers['shOrganLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.socialPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
        })
    }

    // 创建每日社会事件点位
    createEventTodayPoint() {
        reqEventToday().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_cy'];
                    let gaUrl = this.gaUrl + 'JJ_shsj.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.eventLon), Number(item.eventLat), 10], item).then(refObj => {
                        if (!this.layers['shEventTodayLayer']) {
                            this.layers['shEventTodayLayer'] = [];
                        }
                        this.layers['shEventTodayLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 创建重点场所点位
    createKeySitesPoint() {
        reqKeySites().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.orderMajorPlaces.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_cy'];
                    let gaUrl = this.gaUrl + 'JJ_cdcs.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['shKeySitesLayer']) {
                            this.layers['shKeySitesLayer'] = [];
                        }
                        this.layers['shKeySitesLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 创建公厕点位
    createToiletPoint() {
        reqToilets().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gc'];
                    let gaUrl = this.gaUrl + 'JJ_gc.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item, Vex.layerType["Overlay"]).then(refObj => {
                        if (!this.layers['shgcLayer']) {
                            this.layers['shgcLayer'] = [];
                        }
                        this.layers['shgcLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 创建垃圾转运站点位
    createRTSPoint() {
        let data = {
            lon: 104.165832516125761,
            lat: 30.571514389058393,
            name: '垃圾转运站',
            address: '万福村一组317号'
        };
        let gaUrl = this.gaUrl + 'JJ_ljzyz.ga';
        this.work.MapUtil.LoadGA(gaUrl, [Number(data.lon), Number(data.lat), 10], data, Vex.layerType["Overlay"]).then(refObj => {
            if (!this.layers['shRTSLayer']) {
                this.layers['shRTSLayer'] = [];
            }
            this.layers['shRTSLayer'].push(refObj)
        })
    }
    // 创建环卫机构点位
    createOrganPoint() {
        reqOrgan().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gc'];
                    let gaUrl = this.gaUrl + 'JJ_hwjg.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item, Vex.layerType["Overlay"]).then(refObj => {
                        if (!this.layers['shOrganLayer']) {
                            this.layers['shOrganLayer'] = [];
                        }
                        this.layers['shOrganLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 控制垃圾清运路线
    controlRTSLine(state) {
        let coords = []; // 绘线坐标
        let trajPath = []; // 模型运动轨迹
        // 控制显示
        if (state) {
            if (this.lineRefObject === null) {
                // 请求垃圾清运路线
                reqRTSLine().then(res => {
                    // 数据处理
                    let features = res.features[0].geometry.coordinates[0];
                    for (let i = 0; i < features.length; i++) {
                        coords.push(features[i][0], features[i][1], 0);
                        trajPath.push({
                            "x": features[i][0],
                            "y": features[i][1],
                            "z": 0
                        })
                    }
                    // 加载线
                    this.work.MapUtil.LoadLine(coords, {
                        width: 1,
                        addLen: 5,
                        followSuface: true,
                        fixedWidth: true
                    }).then(refObject => {
                        this.lineRefObject =refObject;
                        this.lineRefObject.setVisible(true)
                    })
                    // 加载模型运动轨迹路线
                    this.work.MapUtil.LoadModelMovement(this.gaUrl + 'che.ga',trajPath,{
                        scale: 50
                    }).then((refObj,perfabComp)=>{
                        // 模型
                        this.modelRefObject = refObj;
                        this.modelRefObject.setVisible(true)
                        // 运动轨迹对象
                        this.trackPath = perfabComp;

                    })
                })
            } else {
                this.lineRefObject.setVisible(true);
                this.modelRefObject.setVisible(true);
            }
        } else {
            this.lineRefObject.setVisible(false);
            this.modelRefObject.setVisible(false);
        }

        
    }
    // 进入功能模块
    startFunc() {
        let c = this.Vex.scene.camera();
        var transform = new Vex.Transform({
            x: 104.15560150146484,
            y: 30.519872665405273,
            z: 5394.84375,
            type: 0
        }, {
            x: 36.222206115722656,
            y: 349.9620056152344,
            z: 359.7931823730469
        }, {
            x: 1,
            y: 1,
            z: 1
        });
        c.startAnimation(transform, 3.0, true);
    }
    // 退出功能模块
    endFunc() {
        // 隐藏三圣乡区块
        this.work.udm.sanshenxiang.forEach(item => {
            item.setVisible(false)
        })
        // 弹窗销毁
        if (this.socialPopupUuid != '') {
            this.work.Popup.removePopup(this.socialPopupUuid)
        }
        // 隐藏图层
        let layersName = ['shEventTodayLayer', 'shKeySitesLayer', 'shgcLayer', 'shRTSLayer', 'shOrganLayer'];
        layersName.forEach(item => {
            this.layers[item].forEach(refObj => {
                refObj.setVisible(false)
            })
        })

    }


}