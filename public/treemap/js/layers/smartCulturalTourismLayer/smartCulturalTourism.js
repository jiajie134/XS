// 社会管理
import {
    reqTourist,
    reqShopping,
    reqPlay,
    reqHotel,
    reqFood,
    reqToilet,
    reqPopup
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
        // 加载景区点位
        this.createTouristPoint();
        // 加载购物点位
        this.createShoppingPoint();
        // 加载娱乐点位
        this.createPlayPoint();
        // 加载酒店点位
        this.createHotelPoint();
        // 加载餐饮点位
        this.createFoodPoint();
        // 加载公厕点位
        this.createToiletPoint();
        // 点击事件
        this.work.MapEventManager.on('left', 'smartCulturalTourism', ret => {
            const uuid = ret.obj.getRoot().uuid;
            // 关闭已打开弹窗
            if (this.socialPopupUuid) {
                this.work.Popup.removePopup(this.socialPopupUuid);
                this.socialPopupUuid = '';
            }
            // 景区图层点击事件
            if (this.layers['wlTouristLayer']) {
                this.layers['wlTouristLayer'].forEach(refObj => {
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
            // 购物图层点击事件
            if (this.layers['wlShoppingLayer']) {
                this.layers['wlShoppingLayer'].forEach(refObj => {
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
            // 娱乐图层点击事件
            if (this.layers['wlPlayLayer']) {
                this.layers['wlPlayLayer'].forEach(refObj => {
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
                                        <label>联系电话:</label>
                                        <span>${data.phone}</span>
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
            // 酒店图层点击事件
            if (this.layers['wlHotelLayer']) {
                this.layers['wlHotelLayer'].forEach(refObj => {
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
                                        <label>联系电话:</label>
                                        <span>${data.phone}</span>
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
            // 餐饮图层点击事件
            if (this.layers['wlFoodLayer']) {
                this.layers['wlFoodLayer'].forEach(refObj => {
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
                                        <label>联系电话:</label>
                                        <span>${data.phone}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>开放时间:</label>
                                        <span>${data.workTime}</span>
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
            if (this.layers['wlgcLayer']) {
                this.layers['wlgcLayer'].forEach(refObj => {
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
                                    <div class="popupItem">
                                        <label>开放时间:</label>
                                        <span>${data.workTime}</span>
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
    // 创建景区点位
    createTouristPoint() {
        reqTourist().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'JJ_jq.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['wlTouristLayer']) {
                            this.layers['wlTouristLayer'] = [];
                        }
                        this.layers['wlTouristLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 创建购物点位
    createShoppingPoint() {
        reqShopping().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'JJ_gw.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['wlShoppingLayer']) {
                            this.layers['wlShoppingLayer'] = [];
                        }
                        this.layers['wlShoppingLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 创建娱乐点位
    createPlayPoint() {
        reqPlay().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_yl'];
                    let gaUrl = this.gaUrl + 'JJ_yl.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['wlPlayLayer']) {
                            this.layers['wlPlayLayer'] = [];
                        }
                        this.layers['wlPlayLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 创建酒店点位
    createHotelPoint() {
        reqHotel().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_jd'];
                    let gaUrl = this.gaUrl + 'JJ_jd.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['wlHotelLayer']) {
                            this.layers['wlHotelLayer'] = [];
                        }
                        this.layers['wlHotelLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 创建餐饮点位
    createFoodPoint() {
        reqFood().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_cy'];
                    let gaUrl = this.gaUrl + 'JJ_cy.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['wlFoodLayer']) {
                            this.layers['wlFoodLayer'] = [];
                        }
                        this.layers['wlFoodLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 创建公厕点位
    createToiletPoint() {
        reqToilet().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gc'];
                    let gaUrl = this.gaUrl + 'JJ_gc.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item, Vex.layerType["Overlay"]).then(refObj => {
                        if (!this.layers['wlgcLayer']) {
                            this.layers['wlgcLayer'] = [];
                        }
                        this.layers['wlgcLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 控制三圣乡名称弹窗
    controlSanShengXiangPopup(state) {
        if (state) {
            let jqName = this.work.Popup.createPopup({
                coord: [104.138258824235, 30.5809054860614, 180],
                html: `<div class="sanshengxiangName" style="width:345px;height:109px;background-image:url('./images/sanshengxiang.png');pointer-events: all;"></div>`,
                data: {},
                offset: [-172, -54]
            })
            this.sanshengxiangPopupUuid.push(jqName)
            let dom = this.work.Popup.overlays[jqName].dom;
            dom.getElementsByClassName('sanshengxiangName')[0].onclick = () => {
                reqPopup().then(res => {
                    if (res.code == 0) {
                        let data = res.data;
                        let weathers = data.weathers[0];
                        let zwx = '最弱';
                        if (weathers.rays < 3) {
                            zwx = '最弱';
                        } else if (weathers.rays > 3 && weathers.rays < 5) {
                            zwx = '较弱';
                        } else if (weathers.rays > 5 && weathers.rays < 7) {
                            zwx = '较强';
                        } else if (weathers.rays > 7 && weathers.rays < 10) {
                            zwx = '很强';
                        } else if (weathers.rays > 10) {
                            zwx = '特别强';
                        }
                        let jqxq = this.work.Popup.createPopupTemplete1({
                            width: 660,
                            title: '三圣花乡详情',
                            coord: [104.138258824235, 30.5809054860614, 180],
                            html: `
                            <div class="sanshengxiangInfo">
                                <div class="yk">
                                    <div class="ykItem">
                                        <div class="label">实时游客:</div>
                                        <div class="num">1231</div>
                                        <div class="unit">人</div>
                                    </div>
                                    <div class="ykItem">
                                        <div class="label">今日累计:</div>
                                        <div class="num">1231</div>
                                        <div class="unit">人</div>
                                    </div>
                                    <div class="ykItem">
                                        <div class="label">景区承载状态:</div>
                                        <div class="num">1231</div>
                                        <div class="unit">人</div>
                                    </div>
                                </div>
                                <div class="tq">
                                    <div class="tqItem">
                                        <div class="tqIcon" style="background-image: url('./images/wd.png');"></div>
                                        <div class="tqLable" style="color:#81c4cc;">今日温度:</div>
                                        <div class="tqData">${weathers.teamperature}℃</div>
                                    </div>
                                    <div class="tqItem">
                                        <div class="tqIcon" style="background-image: url('./images/sd.png');"></div>
                                        <div class="tqLable" style="color:#7499d3;">今日湿度:</div>
                                        <div class="tqData">${weathers.humidity}%</div>
                                    </div>
                                    <div class="tqItem">
                                        <div class="tqIcon" style="background-image: url('./images/fs.png');"></div>
                                        <div class="tqLable" style="color:#79b38b;">今日风速:</div>
                                        <div class="tqData">${weathers.windSpeed}m/s</div>
                                    </div>
                                    <div class="tqItem">
                                        <div class="tqIcon" style="background-image: url('./images/zwx.png');"></div>
                                        <div class="tqLable" style="color:#9e82d3;">紫外线强度:</div>
                                        <div class="tqData">${zwx}</div>
                                    </div>
                                </div>
                                <div class="kq">
                                    <div class="kqzl">
                                        <span class="kqzlLable">空气质量:</span>
                                        <span class="kqzlNum">21</span>
                                    </div>
                                    <div class="kqContent">
                                        <div class="kqItem">
                                            <div class="kqNumBox">
                                                <span class="kqNum">63</span>
                                                <span class="kqNumUnit">ug/m³</span>
                                            </div>
                                            <div class="kqName">NO2</div>
                                        </div>
                                        <div class="kqItem">
                                            <div class="kqNumBox">
                                                <span class="kqNum">63</span>
                                                <span class="kqNumUnit">ug/m³</span>
                                            </div>
                                            <div class="kqName">O3</div>
                                        </div>
                                        <div class="kqItem">
                                            <div class="kqNumBox">
                                                <span class="kqNum">63</span>
                                                <span class="kqNumUnit">ug/m³</span>
                                            </div>
                                            <div class="kqName">PM2.5</div>
                                        </div>
                                        <div class="kqItem">
                                            <div class="kqNumBox">
                                                <span class="kqNum">63</span>
                                                <span class="kqNumUnit">ug/m³</span>
                                            </div>
                                            <div class="kqName">PM10</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `,
                            data: {},
                            offset: [172, -54]
                        })
                        this.sanshengxiangPopupUuid.push(jqxq)
                    }

                })

            }
        } else {
            this.sanshengxiangPopupUuid.forEach(item => {
                this.work.Popup.removePopup(item)
            })
            this.sanshengxiangPopupUuid = [];
        }
    }

    // 进入功能模块
    startFunc() {
        let c = this.Vex.scene.camera();
        var transform = new Vex.Transform({
            x: 104.15560150146484, y: 30.519872665405273, z: 5394.84375,
            type: 0
        }, {x: 36.222206115722656, y: 349.9620056152344, z: 359.7931823730469}, {
            x: 1,
            y: 1,
            z: 1
        });
        c.startAnimation(transform, 3.0, true);
    }
    // 退出功能模块
    endFunc(){
        // 隐藏三圣乡区块
        this.work.udm.sanshenxiang.forEach(item=>{
            item.setVisible(false)
        })
        // 弹窗销毁
        if (this.socialPopupUuid != '') {
            this.work.Popup.removePopup(this.socialPopupUuid)
        }
        this.sanshengxiangPopupUuid.forEach(item=>{
            this.work.Popup.removePopup(item)
        })
        // 隐藏图层
        let layersName = ['wlTouristLayer','wlShoppingLayer','wlPlayLayer','wlHotelLayer','wlFoodLayer','wlgcLayer'];
        layersName.forEach(item=>{
            this.layers[item].forEach(refObj=>{
                refObj.setVisible(false)
            })
        })
        
    }


}