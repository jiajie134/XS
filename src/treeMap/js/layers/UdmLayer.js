import {
    sceneConfig
} from '../config/MapConfig.js'
export default class {
    constructor(work) {
        this.work = work;
        this.mapUtil = work.MapUtil;
        this.newBlock = []; // 新区块
        this.block = []; // 旧区块
        this.sanshenxiang = []; // 三圣乡
        this.ribbon = [];   // 功能区
        this.loadUdmResource();
        // this.LoadBlock();
        // this.LoadRibbon()
    }
    loadUdmResource() {
        let [matBasePath, udmBasePath] = [this.work.matBasePath, this.work.udmBasePath];
        let matList = [];
        let udmList = [];
        sceneConfig.forEach(item => {
            matList.push(matBasePath + item.mat)
            udmList.push(udmBasePath + item.udm)
        })
        // 加载材质
        this.mapUtil.LoadMat(matList).then(mats => {
            // 加载udm
            for (let i = 0; i < udmList.length; i++) {
                this.mapUtil.LoadUDM(udmList[i]).then(ret => {
                    for (let j = 0; j < ret.children.length; j++) {
                        ret.children[j].updateMat(mats[i]);
                    }
                    ret.setVisible(true);
                    this.newBlock.push(ret);
                })
            }
        })
    }
    // 加载区块面
    LoadBlock() {
        // 面加载
        let mats = ['./data/material/街道办1.vex'];
        this.work.MapUtil.LoadMat(mats).then(mats => {
            let blockMat = [mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0]];
            // 新区块
            this.work.MapUtil.LoadUDM('./data/udm/锦江区街道新.udm').then(ret => {
                for (let i = 0; i < ret.children.length; i++) {
                    ret.children[i].updateMat(blockMat[i]);
                }
                this.newBlock.push(ret);
                // ret.setVisible(true)
            })
            // 旧区块
            this.work.MapUtil.LoadUDM('./data/udm/锦江区街道新边框.udm').then(ret => {
                for (let i = 0; i < ret.children.length; i++) {
                    ret.children[i].updateMat(blockMat[i]);
                }
                this.block.push(ret);
            })
        })
        let mats2 = ['./data/material/区块1.vex'];
        this.work.MapUtil.LoadMat(mats2).then(mats => {
            let blockMat = [mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0], mats[0]];
            // 新区块
            this.work.MapUtil.LoadUDM('./data/udm/锦江区街道新边框.udm').then(ret => {
                for (let i = 0; i < ret.children.length; i++) {
                    ret.children[i].updateMat(blockMat[i]);
                }
                this.newBlock.push(ret);
                // ret.setVisible(true)
            })
            // 旧区块
            this.work.MapUtil.LoadUDM('./data/udm/锦江区街道边框.udm').then(ret => {
                for (let i = 0; i < ret.children.length; i++) {
                    ret.children[i].updateMat(blockMat[i]);
                }
                this.block.push(ret);
            })
        })
        // 三圣花乡景区面
        let mats3 = ['./data/material/Fx_Point_yellow_Mat 2.vex'];
        this.work.MapUtil.LoadMat(mats3).then(mats => {
            this.work.MapUtil.LoadUDM('./data/udm/三圣花乡景区.udm').then(ret => {
                for (let i = 0; i < ret.children.length; i++) {
                    ret.children[i].updateMat(mats[0]);
                }
                this.sanshenxiang.push(ret)
            })
        })
        // 三圣花乡景区墙
        let mats4 = ['./data/material/区块_test.vex'];
        this.work.MapUtil.LoadMat(mats4).then(mats => {
            this.work.MapUtil.LoadUDM('./data/udm/三圣花乡景区墙.udm').then(ret => {
                for (let i = 0; i < ret.children.length; i++) {
                    ret.children[i].updateMat(mats[0]);
                }
                this.sanshenxiang.push(ret)
            })
        })
    }
    // 功能区加载
    LoadRibbon() {
        // 顶
        let mats = ['./data/material/活力区.vex','./data/material/传媒功能区.vex','./data/material/公共区.vex','./data/material/总部功能区.vex'];
        this.work.MapUtil.LoadMat(mats).then(mats => {
            this.work.MapUtil.LoadUDM('./data/udm/ribbon.udm').then(ret => {
                for (let i = 0; i < ret.children.length; i++) {
                    ret.children[i].updateMat(mats[i]);
                }
                ret.setVisible(true)
                this.ribbon.push(ret)
            })
        })
        // 墙
        let wallMats = ['./data/material/活力区渐变.vex','./data/material/传媒功能区渐变.vex','./data/material/公共区渐变.vex','./data/material/总部功能区渐变.vex'];
        this.work.MapUtil.LoadMat(wallMats).then(mats => {
            this.work.MapUtil.LoadUDM('./data/udm/功能区wall.udm').then(ret => {
                for (let i = 0; i < ret.children.length; i++) {
                    ret.children[i].updateMat(mats[i]);
                }
                ret.setVisible(true)
                this.ribbon.push(ret)
            })
        })
    }
}