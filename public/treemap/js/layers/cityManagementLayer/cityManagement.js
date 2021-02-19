import {
    reqLamp,
    reqWell,
    reqBridge,
    reqTraffic,
    reqSchool,
    reqHospital,
    reqSmartSite
} from '../../request/request.js';
export default class {
    constructor(work) {
        this.work = work;
        this.work = work;
        this.Vex = work.Vex;
        this.layers = work.layers;
        this.gaUrl = work.gaBasePath;
        // 弹窗uuid
        this.cityPopupUuid = '';
        // 路灯点位
        this.createLampPoint()
        // 井盖点位
        this.createWellPoint()
        // 桥梁点位
        this.createBridgePoint()
        // 交通设施点位
        this.createTrafficPoint()
        // 学校点位
        this.createSchoolPoint()
        // 医院点位
        this.createHospitalPoint()
        // 智慧工地点位
        this.createSmartSite()
        // 点击事件
        this.work.MapEventManager.on('left', 'intrgrated', ret => {
            const uuid = ret.obj.getRoot().uuid;
            // 关闭已打开弹窗
            if (this.cityPopupUuid) {
                this.work.Popup.removePopup(this.cityPopupUuid);
                this.cityPopupUuid = '';
            }
            // 路灯点位图层点击事件
            if (this.layers['cityLampLayer']) {
                this.layers['cityLampLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.cityPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [Number(data.lon), Number(data.lat), 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name?data.name:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 井盖点位图层点击事件
            if (this.layers['cityWellLayer']) {
                this.layers['cityWellLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.cityPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [Number(data.lon), Number(data.lat), 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name?data.name:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 桥梁点位图层点击事件
            if (this.layers['cityBridgeLayer']) {
                this.layers['cityBridgeLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.cityPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [Number(data.lon), Number(data.lat), 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name?data.name:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 交通设施点位图层点击事件
            if (this.layers['cityTrafficLayer']) {
                this.layers['cityTrafficLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.cityPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [Number(data.lon), Number(data.lat), 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name?data.name:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>类型:</label>
                                        <span>${data.type?data.type:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属部门:</label>
                                        <span>${data.department?data.department:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所在地址:</label>
                                        <span>${data.address?data.address:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 学校点位图层点击事件
            if (this.layers['citySchoolLayer']) {
                this.layers['citySchoolLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.cityPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [Number(data.lon), Number(data.lat), 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name?data.name:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>类型:</label>
                                        <span>${data.type?data.type:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>联系电话:</label>
                                        <span>${data.phone?data.phone:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address?data.address:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 医院点位图层点击事件
            if (this.layers['cityHospitalLayer']) {
                this.layers['cityHospitalLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.cityPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [Number(data.lon), Number(data.lat), 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name?data.name:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>类型:</label>
                                        <span>${data.type?data.type:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>联系电话:</label>
                                        <span>${data.phone?data.phone:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address?data.address:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 智慧工地点位图层点击事件
            if (this.layers['citySmartSiteLayer']) {
                this.layers['citySmartSiteLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.cityPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [Number(data.lon), Number(data.lat), 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name?data.name:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详情:</label>
                                        <span>${data.detail?data.detail:''}</span>
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
    // 创建路灯点位
    createLampPoint() {
        reqLamp().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_cy'];
                    let gaUrl = this.gaUrl + 'JJ_cdcs.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['cityLampLayer']) {
                            this.layers['cityLampLayer'] = [];
                        }
                        this.layers['cityLampLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 创建井盖点位
    createWellPoint() {
        reqWell().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_cy'];
                    let gaUrl = this.gaUrl + 'JJ_cdcs.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['cityWellLayer']) {
                            this.layers['cityWellLayer'] = [];
                        }
                        this.layers['cityWellLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 桥梁
    createBridgePoint() {
        reqBridge().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_cy'];
                    let gaUrl = this.gaUrl + 'JJ_cdcs.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['cityBridgeLayer']) {
                            this.layers['cityBridgeLayer'] = [];
                        }
                        this.layers['cityBridgeLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 交通设施
    createTrafficPoint() {
        reqTraffic().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_cy'];
                    let gaUrl = this.gaUrl + 'JJ_cdcs.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['cityTrafficLayer']) {
                            this.layers['cityTrafficLayer'] = [];
                        }
                        this.layers['cityTrafficLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 学校
    createSchoolPoint() {
        reqSchool().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_cy'];
                    let gaUrl = this.gaUrl + 'JJ_cdcs.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['citySchoolLayer']) {
                            this.layers['citySchoolLayer'] = [];
                        }
                        this.layers['citySchoolLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 医院
    createHospitalPoint() {
        reqHospital().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_cy'];
                    let gaUrl = this.gaUrl + 'JJ_cdcs.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['cityHospitalLayer']) {
                            this.layers['cityHospitalLayer'] = [];
                        }
                        this.layers['cityHospitalLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 智慧工地
    createSmartSite() {
        reqSmartSite().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_cy'];
                    let gaUrl = this.gaUrl + 'JJ_cdcs.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['citySmartSiteLayer']) {
                            this.layers['citySmartSiteLayer'] = [];
                        }
                        this.layers['citySmartSiteLayer'].push(refObj)
                    })
                });
            }
        })
    }

}