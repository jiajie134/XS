// 综合指挥图层
import {
    reqRisk,
    reqOil,
    reqRiskCompany,
    reqGas,
    reqRiskPoint,
    reqMedical,
    reqShelter,
    reqFire,
    reqPolice
} from '../../request/request.js';
import Popup from './Popup.js';
export default class {
    constructor(work) {
        this.work = work;
        this.Vex = work.Vex;
        this.layers = work.layers;
        this.gaUrl = work.gaBasePath;
        // 弹窗uuid
        this.integratedUuid = '';
        // 风险地图点位
        this.riskMaps = []
        this.LoadOilPoint(); // 加油站点位
        this.LoadRiskCompanyPoint(); // 危化品经营使用企业点位
        this.LoadGasPoint(); // 加气站点位
        this.LoadRiskPoint(); // 重大风险点位
        this.LoadMedicalPoint(); // 医疗资源点位
        this.LoadShelterPoint(); // 应急避难场所点位
        this.LoadFirePoint(); // 消防资源点位
        this.LoadPolicePoint(); // 派出所点位
        // 点击事件
        this.work.MapEventManager.on('left', 'intrgrated', ret => {
            const uuid = ret.obj.getRoot().uuid;
            // 关闭已打开弹窗
            if (this.integratedUuid) {
                this.work.Popup.removePopup(this.integratedUuid);
                this.integratedUuid = '';
            }
            // 加油站图层点击事件
            if (this.layers['zhOilLayer']) {
                this.layers['zhOilLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.integratedUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属部门:</label>
                                        <span>${data.department}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>联系电话:</label>
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
            // 危化品经营使用企业图层点击事件
            if (this.layers['zhRiskCompanyLayer']) {
                this.layers['zhRiskCompanyLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.integratedUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>描述:</label>
                                        <span>${data.remarks}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 加气站图层点击事件
            if (this.layers['zhGasLayer']) {
                this.layers['zhGasLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.integratedUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属部门:</label>
                                        <span>${data.department}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>联系电话:</label>
                                        <span>${data.phone?data.phone:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 重大风险图层点击事件
            if (this.layers['zhRiskLayer']) {
                this.layers['zhRiskLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.integratedUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>描述:</label>
                                        <span>${data.remarks}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 医疗资源图层点击事件
            if (this.layers['zhMedicalLayer']) {
                this.layers['zhMedicalLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.integratedUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属部门:</label>
                                        <span>${data.department?data.department:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属街道:</label>
                                        <span>${data.streetName?data.streetName:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address?data.address:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>联系电话:</label>
                                        <span>${data.phone?data.phone:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>描述:</label>
                                        <span>${data.remarks?data.remarks:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 应急避难场所图层点击事件
            if (this.layers['zhShelterLayer']) {
                this.layers['zhShelterLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.integratedUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属部门:</label>
                                        <span>${data.department?data.department:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属街道:</label>
                                        <span>${data.streetName?data.streetName:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address?data.address:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>联系电话:</label>
                                        <span>${data.phone?data.phone:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>描述:</label>
                                        <span>${data.remarks?data.remarks:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 消防资源图层点击事件
            if (this.layers['zhFireLayer']) {
                this.layers['zhFireLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.integratedUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属部门:</label>
                                        <span>${data.department?data.department:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属街道:</label>
                                        <span>${data.streetName?data.streetName:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address?data.address:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>联系电话:</label>
                                        <span>${data.phone?data.phone:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>描述:</label>
                                        <span>${data.remarks?data.remarks:''}</span>
                                    </div>
                                </div>
                            `,
                            data: data,
                            offset: [16, 0]
                        })
                    }
                })
            }
            // 派出所图层点击事件
            if (this.layers['zhPoliceLayer']) {
                this.layers['zhPoliceLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.integratedUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.lon, data.lat, 220],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>名称:</label>
                                        <span>${data.name}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属部门:</label>
                                        <span>${data.department?data.department:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属街道:</label>
                                        <span>${data.streetName?data.streetName:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>详细地址:</label>
                                        <span>${data.address?data.address:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>联系电话:</label>
                                        <span>${data.phone?data.phone:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>描述:</label>
                                        <span>${data.remarks?data.remarks:''}</span>
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
    // 加载加油站点位
    LoadOilPoint() {
        reqOil().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'JJ_jyz.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['zhOilLayer']) {
                            this.layers['zhOilLayer'] = [];
                        }
                        this.layers['zhOilLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 加载危化品经营使用企业点位
    LoadRiskCompanyPoint() {
        reqRiskCompany().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'JJ_hgp.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['zhRiskCompanyLayer']) {
                            this.layers['zhRiskCompanyLayer'] = [];
                        }
                        this.layers['zhRiskCompanyLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 加载加气站点位
    LoadGasPoint() {
        reqGas().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'JJ_jqz.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['zhGasLayer']) {
                            this.layers['zhGasLayer'] = [];
                        }
                        this.layers['zhGasLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 加载重大风险点位
    LoadRiskPoint() {
        reqRiskPoint().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'JJ_cdfxd.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['zhRiskLayer']) {
                            this.layers['zhRiskLayer'] = [];
                        }
                        this.layers['zhRiskLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 加载医疗资源点位
    LoadMedicalPoint() {
        reqMedical().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'JJ_ylzy.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['zhMedicalLayer']) {
                            this.layers['zhMedicalLayer'] = [];
                        }
                        this.layers['zhMedicalLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 加载应急避难场所点位
    LoadShelterPoint() {
        reqShelter().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'JJ_ggyjdw.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['zhShelterLayer']) {
                            this.layers['zhShelterLayer'] = [];
                        }
                        this.layers['zhShelterLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 加载消防资源点位
    LoadFirePoint() {
        reqFire().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'JJ_xfzy.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['zhFireLayer']) {
                            this.layers['zhFireLayer'] = [];
                        }
                        this.layers['zhFireLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 加载派出所点位
    LoadPolicePoint() {
        reqPolice().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'JJ_pcs.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item).then(refObj => {
                        if (!this.layers['zhPoliceLayer']) {
                            this.layers['zhPoliceLayer'] = [];
                        }
                        this.layers['zhPoliceLayer'].push(refObj)
                    })
                });
            }
        })
    }
    // 风险地图图层
    LoadRiskMap(state) {
        if (state) {
            reqRisk().then(res => {
                if (res.code == 0) {
                    let data = res.data;
                    // 根据数据判断展示街道模型
                    if (data.length) { // 新街道模型
                        this.work.udm.newBlock.forEach(item => {
                            item.setVisible(true)
                        })
                    } else { // 老街道模型
                        this.work.udm.newBlock.forEach(item => {
                            item.setVisible(true)
                        })
                    }

                    data.forEach(item => {
                        // 判断经纬度是否存在
                        if (item.lon && item.lat) {
                            // 点位加载
                            let coords = [item.lon, item.lat, 0]
                            let sum = Number(item.risk1) + Number(item.risk2) + Number(item.risk3);
                            let dataObj = [{
                                name: '高风险源',
                                value: Number(item.risk1)
                            }, {
                                name: '中风险源',
                                value: Number(item.risk2)
                            }, {
                                name: '低风险源',
                                value: Number(item.risk3)
                            }, ];

                            let overlayUuid = this.work.Popup.createPopup({
                                coord: coords,
                                html: Popup.riskMap(dataObj),
                                data: dataObj,
                                offset: [-66, -255]
                            })
                            this.riskMaps.push(overlayUuid);
                            let dom = document.getElementById('mapPopup-' + overlayUuid)
                            dom.getElementsByClassName('chart')[0].id = 'chart-' + overlayUuid
                            // 加载图表
                            let option = {
                                color: ['#7bedb5', '#ffd88a', '#ff6b6b', '#9ea6af'],
                                title: {
                                    show: true,
                                    text: sum,
                                    left: '50%',
                                    top: 'center',
                                    textStyle: {
                                        color: '#ffffff',
                                        fontSize: 33,
                                    },
                                    textAlign: 'center'
                                },
                                tooltip: {
                                    trigger: 'item',
                                    formatter: '{b}: {c} ({d}%)'
                                },
                                series: [{
                                    name: '',
                                    type: 'pie',
                                    radius: ['80%', '100%'],
                                    avoidLabelOverlap: false,
                                    hoverAnimation: false,
                                    labelLine: {
                                        show: false
                                    },
                                    data: dataObj
                                }]
                            };
                            var myChart = echarts.init(document.getElementById('chart-' + overlayUuid));
                            myChart.setOption(option);
                            // 事件绑定
                            let close = dom.getElementsByClassName('close')[0];
                            close.setAttribute('data-id', overlayUuid);
                            let infoBox = dom.getElementsByClassName('infoBox')[0];
                            let c = dom.getElementsByTagName('canvas')[0];
                            close.onclick = () => {
                                // this.work.Popup.removePopup(overlayUuid)
                                infoBox.style.display = 'none'
                            }
                            c.onclick = () => {
                                infoBox.style.display = 'inline-block'
                            }
                        }
                    })
                }
            })

        } else {
            this.riskMaps.forEach(item => {
                this.work.Popup.removePopup(item)
            })
            this.work.udm.newBlock.forEach(item => {
                item.setVisible(false)
            })
        }
    }

    startFunc() {
        let c = this.Vex.scene.camera();
        var transform = new Vex.Transform({
            x: 104.23548126220703,
            y: 30.615583419799805,
            z: 5916.935546875,
            type: 0
        }, {
            x: 28.802433013916016,
            y: 264.56683349609375,
            z: 359.65020751953125
        }, {
            x: 1,
            y: 1,
            z: 1
        });
        c.startAnimation(transform, 3.0, true);
    }

    endFunc() {
        // 隐藏风险地图
        this.LoadRiskMap(false);
        // 控制所有图层隐藏
        let layers = ['zhOilLayer', 'zhRiskCompanyLayer', 'zhGasLayer', 'zhRiskLayer', 'zhMedicalLayer', 'zhShelterLayer', 'zhFireLayer', 'zhPoliceLayer']
        layers.forEach(item => {
            if (this.layers[item]) {
                this.layers[item].forEach(point => {
                    point.setVisible(false);
                })
            }
        })

    }
}