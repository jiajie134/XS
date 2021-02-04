export default {
    /**
     * 加载支援
     * @param {*} urls 
     */
    LoadResource(urls) {
        return new Promise((resolve, reject) => {
            Vex.resourceManager.loads(urls, null, (refObjs) => {
                resolve(refObjs)
            })
        })
    },
    GetResource(path) {
        let resourceMap = Vex.resourceManager.resourceMap;
        return resourceMap[path];
    },
    /**
     * 加载材质
     * @param {Array} urls 
     */
    LoadMat(urls) {
        return new Promise(resolve => {
            Vex.resourceManager.loads(urls, null, (refObjs) => {
                let res = [];
                refObjs.forEach(item => {
                    if (item.type == "vex" && item.status == 200) {
                        let ret = item.create(name)
                        res.push(ret)
                    }
                })
                resolve(res)
            });
        })
    },
    /**
     * 加载udm
     * @param {string} udmUrl 
     */
    LoadUDM(udmUrl) {
        return new Promise(resolve => {
            Vex.resourceManager.loads([udmUrl], null, refObjs => { //全部加载完成之后的回调
                for (let i = 0; i < refObjs.length; i++) {
                    refObjs[i].create(
                        null,
                        {isAllowClick:true},
                        (ret) => {
                            resolve(ret, i)
                        },
                        true
                    );
                }
            })
        })
    },
    /**
     * 加载ga
     * @param {Array} url ga地址
     * @param {*} coord 位置
     * @param {*} data 自定义数据
     * @param {*} isFollowedFace 是否贴地
     * @param {*} callBack 
     */
    // LoadGA(url, coord = [], data, {
    //     isFollowedFace = false,
    //     scale = 1,
    //     rotate = [0, 0, 0]
    // } = {}, layer) {
    //     return new Promise((resolve, reject) => {
    //         Vex.resourceManager.loads([url], refObj => {
    //             let pos = new Vex.Transform({
    //                 x: coord[0],
    //                 y: coord[1],
    //                 z: coord[2] ? coord[2] : 0
    //             }, {
    //                 x: rotate[0],
    //                 y: rotate[1],
    //                 z: rotate[2]
    //             }, {
    //                 x: scale,
    //                 y: scale,
    //                 z: scale
    //             })
    //             refObj.create(pos, {
    //                 feature: data,
    //                 isFollowedFace: isFollowedFace
    //             }, refObject => {
    //                 // refObject.addComp(Vex.compNames.compShowControl, {
    //                 //     min_distance: 1, //最小显示距离
    //                 //     max_distance: 10000000, //最大显示距离
    //                 //     fixedWidth: false, //是否固定宽度
    //                 //     fixedRatio: 1.0 / 3000 //系数：当前倍数/距离；距离来源于obj.getCameraDis(function(ret){console.log(ret)})
    //                 // })
    //                 refObject.setLayer(layer ? layer : Vex.layerType["Default"])
    //                 // refObject.setVisible(false)
    //                 resolve(refObject)
    //             });
    //         })
    //     })
    // },

      /**
     * 加载ga
     * @param {Array} url ga地址
     * @param {*} coord 位置
     * @param {*} data 自定义数据
     * @param {*} isFollowedFace 是否贴地
     * @param {*} callBack 
     */
    LoadGA(url, coord = [], data, {
        isFollowedFace = false,
        scale = 1,
        rotate = [0, 0, 0]
    } = {}, layer) {
        return new Promise((resolve, reject) => {
            let pos = new Vex.Transform({
                x: coord[0],
                y: coord[1],
                z: coord[2] ? coord[2] : 0
            }, {
                x: rotate[0],
                y: rotate[1],
                z: rotate[2]
            }, {
                x: scale,
                y: scale,
                z: scale
            })
            Vex.resourceManager.loadGaAndCreate(url, {
                    pos: pos,
                    feature: data,
                    isFollowedFace: isFollowedFace,
                    isNeedClone: true
                },
                refObject => {
                    // refObject.addComp(Vex.compNames.compShowControl, {
                    //     min_distance: 1, //最小显示距离
                    //     max_distance: 10000000, //最大显示距离
                    //     fixedWidth: false, //是否固定宽度
                    //     fixedRatio: 1.0 / 3000 //系数：当前倍数/距离；距离来源于obj.getCameraDis(function(ret){console.log(ret)})
                    // })
                    refObject.setLayer(layer ? layer : Vex.layerType["Default"])
                    // refObject.setVisible(false)
                    resolve(refObject)
                });

        })
    },
    /**
     * 
     * @param {*} name 
     * @param {*} coord 
     * @param {*} data 
     * @param {*} isFollowedFace 
     * @param {*} layer 
     */
    LoadPerfab(name, coord = [], data, isFollowedFace = true, layer = Vex.layerType["Default"]) {
        return new Promise((resolve, reject) => {
            let pos = new Vex.Transform({
                x: coord[0],
                y: coord[1],
                z: 0
            }, {
                x: 0,
                y: 0,
                z: 0
            }, {
                x: 1,
                y: 1,
                z: 1
            })
            Vex.preFabManager.create("prefabs/" + name, pos, {
                feature: data,
                isFollowedFace: isFollowedFace,
                layer: layer
            }, function (obj) {
                // obj.setVisible(true)
                // callBack(obj)
                resolve(obj)
            })
        })
    },
    /**
     * 克隆内置模型
     * @param {*} perfab 预制体
     * @param {*} coord 坐标
     * @param {*} data 数据
     * @param {*} param3 样式
     * @param {*} layer 图层
     */
    LoadDefaultPerfab(perfab, coord = [], data, {
        isFollowedFace = true,
        scale = 1
    } = {}, layer) {
        return new Promise((resolve, reject) => {
            let pos = new Vex.Transform({
                x: coord[0],
                y: coord[1],
                z: 0
            }, {
                x: 0,
                y: 0,
                z: 0
            }, {
                x: scale,
                y: scale,
                z: scale
            })
            perfab.clone(pos, {
                feature: data,
                isFollowedFace: isFollowedFace
            }, obj => {
                obj.setLayer(layer ? layer : Vex.layerType["Default"])
                resolve(obj)
            });
        })
    },

    /**
     * 创建线
     * @param {Array} coords 坐标数据   [x,y,z,x,y,z]
     * @param {Object} param
     *  @data {Number} width 线宽
     *  @data {Number} addLen 插值距离
     *  @data {Boolean} followSuface 是否贴地
     *  @data {Boolean} fixedWidth 是否固定宽度
     *  @data {Number} fixedWidthRatio 适应宽度的系数
     */
    LoadLine(coords, {
        width = 1,
        addLen = 5,
        followSuface = true,
        fixedWidth = false,
        fixedWidthRatio = 1.0 / 500
    } = {}) {
        return new Promise((resolve, reject) => {
            Vex.preFabManager.createEmpty("", null, refObject => {
                refObject.setVisible(true)
                refObject.setLayer(Vex.layerType["Default"])
                //添加线组件
                refObject.addComp(Vex.compNames.compLine, {
                    cods: new Float32Array(coords),
                    width: width, //单位米
                    addLen: addLen, // 插值距离
                    followSuface: followSuface, // 是否贴地
                    fixedWidth: fixedWidth, // 是否固定宽度
                    fixedWidthRatio: fixedWidthRatio //  适应宽度的系数
                });
                resolve(refObject)
            })
        })
    },

    LoadModelMovement(url, pathCoords, {
        scale = 1,
        useCollider = false,
        cameraWith = false
    } = {}) {
        return new Promise((resolve, reject) => {
            this.LoadGA(url, [0, 0, 0], null, {
                scale: scale,
            }).then(obj => {
                let trajPath = pathCoords ? pathCoords : [];
                let sr = [];
                for (let i = 0; i < trajPath.length; i++) {
                    let tp = trajPath[i];
                    sr.push(tp.x, tp.y, tp.z);
                    if (i == 0)
                        sr.push(0);
                    else sr.push(20);
                }
                let perfabComp = obj.addComp(Vex.compNames.compPathAnimation, {
                    interval: 2 * 60, // 这段路的总时长
                    data: new Float32Array(sr), // 处理后的数据
                    useCollider: useCollider, // 是否检测碰撞
                    cameraWith: cameraWith // 相机是否跟随
                })
                resolve(obj, perfabComp)
            })
        })
    },

    flyTo(x, y, z) {
        let camera = Vex.scene.camera();
        var transform = new Vex.Transform({
            x: x,
            y: y - 0.012,
            z: z,
            type: 0
        }, {
            x: 30,
            y: 0,
            z: 0
        }, {
            x: 1,
            y: 1,
            z: 1
        });
        camera.startAnimation(transform, 3.0, true);
    },

    // 获取当前相机位置
    getCameraPos() {
        let camera = Vex.scene.camera();
        camera.getTransform(res => {
            console.log(res)
        })
    }
}