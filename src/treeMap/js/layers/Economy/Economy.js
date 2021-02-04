// 经济运行图层
import {
    reqIndustry
} from '../../request/request.js'

export default class {
    constructor(work) {
        this.work = work;
        this.Vex = work.Vex;
        this.layers = work.layers;
        this.gaUrl = work.gaBasePath;
        // 弹窗uuid
        this.areaNameUuid = [];
        this.areaInfoUuid = '';
        // 
        // this.createIndustryInfo(true)
        // 点击事件
        this.work.MapEventManager.on('left', 'economy', ret => {

        })
    }
    // 功能区名称与数据展示
    createIndustryInfo(state) {
        this.work.udm.ribbon.forEach(item => {
            item.setVisible(state)
        })
        if (state) {
            let areaInfo = [{
                name: '春熙路时尚活力区',
                coord: [104.093561037086, 30.6399061842842],
                offset: [-163*1.5, -64*1.5]
            }, {
                name: '锦江区新兴传媒功能区',
                coord: [104.134450334888, 30.6028754884588],
                offset: [-193*1.5, -64*1.5]
            }, {
                name: '白鹭湾新经济总部功能区',
                coord: [104.09632086361, 30.5913524717968],
                offset: [-213*1.5, -64*1.5]
            }]
            areaInfo.forEach(item => {
                let uuid = this.work.Popup.createPopup({
                    coord: [item.coord[0], item.coord[1], 180],
                    html: `<div style="width: ${-item.offset[0]*2}px;height:${-item.offset[1]}px;background-image:url('./images/economy/${item.name}.png');background-size:100% 100%;"></div>`,
                    data: item,
                    offset: item.offset
                })
                this.areaNameUuid.push(uuid)
            })
        } else {

        }


    }
}