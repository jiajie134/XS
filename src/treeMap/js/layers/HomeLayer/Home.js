import {
    reqEventToday
} from '../../request/request.js'
export default class {
    constructor(work) {
        this.work = work;
        // ga的基础路径
        this.gaBasePath = this.work.gaBasePath;
        this.Vex = work.Vex;
        this.layers = work.layers;
        this.gaUrl = work.gaBasePath;
        // 弹窗uuid
        this.homeUuid = '';
        // 加载社会事件点位
        this.createEventTodayPoint();
        // 点击事件
        this.work.MapEventManager.on('left', 'home', ret => {
            const uuid = ret.obj.getRoot().uuid;
            // 关闭已打开弹窗
            if (this.homeUuid) {
                this.work.Popup.removePopup(this.homeUuid);
                this.homeUuid = '';
            }
            // 社会事件图层点击事件
            if (this.layers['homeEventTodayLayer']) {
                this.layers['homeEventTodayLayer'].forEach(refObj => {
                    if (refObj.uuid == uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.homeUuid = this.work.Popup.createPopupTemplete1({
                            title: '详细信息',
                            coord: [data.eventLon, data.eventLat, 60],
                            html: `
                                <div class="gcPopup">
                                    <div class="popupItem">
                                        <label>事件名称:</label>
                                        <span>${data.eventTitle?data.eventTitle:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>事件状态:</label>
                                        <span>${data.results?data.results:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>事件类型:</label>
                                        <span>${data.majorType?data.majorType:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>发生事件:</label>
                                        <span>${data.eventTime?data.eventTime:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>发生地点:</label>
                                        <span>${data.eventPlace?data.eventPlace:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>事件描述:</label>
                                        <span>${data.eventDesc?data.eventDesc:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>响应地点:</label>
                                        <span>${data.applyTime?data.applyTime:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属街道:</label>
                                        <span>${data.streetName?data.streetName:''}</span>
                                    </div>
                                    <div class="popupItem">
                                        <label>所属社区:</label>
                                        <span>${data.adminCommunity?data.adminCommunity:''}</span>
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
    // 创建社会事件点位
    createEventTodayPoint() {
        reqEventToday().then(res => {
            if (res.code == 0) {
                let data = res.data;
                data.forEach(item => {
                    // let prefab = this.work.defaultPreFab['JJ_gw'];
                    let gaUrl = this.gaUrl + 'diandi2.ga';
                    this.work.MapUtil.LoadGA(gaUrl, [Number(item.eventLon), Number(item.eventLat), 10], item,{
                        scale: 40
                    }).then(refObj => {
                        if (!this.layers['homeEventTodayLayer']) {
                            this.layers['homeEventTodayLayer'] = [];
                        }
                        this.layers['homeEventTodayLayer'].push(refObj)
                        refObj.setVisible(true)
                    })
                });
            }
        })
    }
    // 进入功能模块
    startFunc(){
        let c = this.Vex.scene.camera();
        var transform = new Vex.Transform({
            x: 104.23548126220703, y: 30.615583419799805, z: 5916.935546875,
            type: 0
        }, {x: 28.802433013916016, y: 264.56683349609375, z: 359.65020751953125}, {
            x: 1,
            y: 1,
            z: 1
        });
        c.startAnimation(transform, 3.0, true);
        // 显示社会事件与城管事件
        this.layers['homeEventTodayLayer'].forEach(item=>{
            item.setVisible(true)
        })
    }
    // 退出功能模块
    endFunc(){
        // 隐藏社会事件与城管事件
        this.layers['homeEventTodayLayer'].forEach(item=>{
            item.setVisible(false)
        })

        // 关闭打开的弹窗
        if (this.homeUuid) {
            this.work.Popup.removePopup(this.homeUuid);
            this.homeUuid = '';
        }
    }

}