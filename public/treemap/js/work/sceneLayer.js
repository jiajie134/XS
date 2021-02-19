export default class {
    constructor(work) {
        this.layer = {
            street: {
                model: [],
                isShow: false
            },
            WIFI: {
                model: [],
                isShow: false
            },
            parking: {
                model: [],
                isShow: false
            },
            monitor: {
                model: [],
                isShow: false
            },
            building: {
                model: [],
                isShow: true
            },
            toilet: {
                model: [],
                isShow: false
            },
            serve: {
                model: [],
                isShow: false
            },
            market: {
                model: [],
                isShow: false
            },
            treeMap:{
                model: [],
                isShow: false
            }
        }
        this.cityPopupUuid = '';
        this.work = work;
        this.layers = work.layers;
        this.gaUrl = work.gaBasePath;
        //加载场景数据
        this.loadStreet(); //加载街景
        this.loadWIFI(); //加载WIFI
        this.loadMonitor(); //加载监控
        this.loadParking(); //加载停车场
        this.loadBuilding(); //加载商家信息
        this.loadToilet(); //加载卫生间
        this.loadServe(); //加载党群服务
        this.loadMarket(); //加载农贸市场
        this.loadTreeMap();
        //GA数据点击弹窗
        this.work.MapEventManager.on('left', 'intrgrated', ret => {
            console.log(ret)
            const uuid = ret.obj.getRoot().uuid;
            // 关闭已打开弹窗
            if (this.cityPopupUuid) {
                this.work.Popup.removePopup(this.cityPopupUuid);
                this.cityPopupUuid = '';
            }
            if (this.layers['monitor']) {
                this.layers['monitor'].forEach(refObj => {
                    if (refObj.uuid === uuid) {
                        let data = refObj.feature;
                        // 打开弹窗
                        this.cityPopupUuid = this.work.Popup.createPopupTemplete1({
                            title: data.title,
                            coord: [Number(data.lon), Number(data.lat), 220],
                            html: `
                                <div class="gcPopup">
                                    <video style="width: 100%" src="${data.src}" controls="controls" autoplay></video>
                                </div>
                            `,
                            data: data,
                            offset: [-120, -50]
                        })
                    }
                })
            };
        });

    }

    //切换图层显示隐藏
    changeLayer(layerType, isShow) {
        if (this.layer[layerType].isShow !== isShow) {
            this.layer[layerType].isShow = isShow;
            this.layer[layerType].model.forEach(u => u.setVisible(isShow));
        }
    }

    loadStreet() {
        const data = [{
                lon: 104.14014434814453,
                lat: 30.598678588867188
            },
            {
                lon: 104.14582061767578,
                lat: 30.600515365600586
            },
            {
                lon: 104.13835906982422,
                lat: 30.593847274780273
            }
        ];
        data.forEach(item => {
            const gaUrl = this.gaUrl + 'JJ_jiejing.ga';
            return this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item, {
                scale: 0.5
            }).then(refObj => {
                if (!this.layers['street']) {
                    this.layers['street'] = [];
                }
                this.layers['street'].push(refObj);
                this.layer.street.model.push(refObj);
            })
        });
    }

    loadWIFI() {
        const data = [{
                lon: 104.13975524902344,
                lat: 30.595294952392578
            },
            {
                lon: 104.14178466796875,
                lat: 30.598289489746094
            },
            {
                lon: 104.14434051513672,
                lat: 30.600311279296875
            }
        ];
        data.forEach(item => {
            const gaUrl = this.gaUrl + 'JJ_wifi.ga';
            this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item, {
                scale: 0.5
            }).then(refObj => {
                if (!this.layers['WIFI']) {
                    this.layers['WIFI'] = [];
                }
                this.layers['WIFI'].push(refObj);
                this.layer.WIFI.model.push(refObj);
            })
        });
    }

    loadMonitor() {
        const data = [{
                lon: 104.14197540283203,
                lat: 30.60038948059082,
                title: '监控1',
                src: 'data/video/上海.mp4'
            },
            {
                lon: 104.14311218261719,
                lat: 30.59697723388672,
                title: '监控2',
                src: 'data/video/郑州.mp4'
            },
            {
                lon: 104.14107513427734,
                lat: 30.594863891601562,
                title: '监控3',
                src: 'data/video/浦东.mp4'
            }
        ];
        data.forEach(item => {
            const gaUrl = this.gaUrl + 'JJ_jiankong.ga';
            this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item, {
                scale: 0.5
            }).then(refObj => {
                if (!this.layers['monitor']) {
                    this.layers['monitor'] = [];
                }
                this.layers['monitor'].push(refObj);
                this.layer.monitor.model.push(refObj);
            })
        });
    }

    loadParking() {
        const data = [{
                lon: 104.1396255493164,
                lat: 30.59441375732422
            },
            {
                lon: 104.14099884033203,
                lat: 30.592483520507812
            },
            {
                lon: 104.14773559570312,
                lat: 30.599119186401367
            }
        ];
        data.forEach(item => {
            const gaUrl = this.gaUrl + 'JJ_tcc.ga';
            this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item, {
                scale: 0.5
            }).then(refObj => {
                if (!this.layers['parking']) {
                    this.layers['parking'] = [];
                }
                this.layers['parking'].push(refObj);
                this.layer.parking.model.push(refObj);
            })
        });
    }

    loadBuilding() {
        const data = [{
                lon: 104.14290618896484,
                lat: 30.59455680847168
            },
            {
                lon: 104.14336395263672,
                lat: 30.593610763549805
            },
            {
                lon: 104.13963317871094,
                lat: 30.59737777709961
            },
            {
                lon: 104.14569091796875,
                lat: 30.597719192504883
            }
        ];
        data.forEach(item => {
            const gaUrl = this.gaUrl + 'JJ_sjxx.ga';
            this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item, {
                scale: 0.5
            }).then(refObj => {
                if (!this.layers['building']) {
                    this.layers['building'] = [];
                }
                this.layers['building'].push(refObj);
                this.layer.building.model.push(refObj);
                this.layer.building.model.forEach(m => m.setVisible(true));
            })
        });
    }

    loadToilet() {
        const data = [{
                lon: 104.14024353027344,
                lat: 30.593996047973633
            },
            {
                lon: 104.14090728759766,
                lat: 30.597551345825195
            },
            {
                lon: 104.14459991455078,
                lat: 30.59787940979004
            }
        ];
        data.forEach(item => {
            const gaUrl = this.gaUrl + 'JJ_wsj.ga';
            this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 10], item, {
                scale: 0.5
            }).then(refObj => {
                if (!this.layers['toilet']) {
                    this.layers['toilet'] = [];
                }
                this.layers['toilet'].push(refObj);
                this.layer.toilet.model.push(refObj);
            })
        });
    }

    loadServe() {
        const data = [{
            lon: 104.139,
            lat: 30.596
        }, {
            lon: 104.14422607421875,
            lat: 30.595727920532227
        }, {
            lon: 104.14604949951172,
            lat: 30.59919548034668
        }, {
            lon: 104.14144134521484,
            lat: 30.599157333374023
        }];
        data.forEach(item => {
            const gaUrl = this.gaUrl + 'JJ_dh.ga';
            this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 0], item, {
                scale: 0.5
            }).then(refObj => {
                if (!this.layers['serve']) {
                    this.layers['serve'] = [];
                }
                this.layers['serve'].push(refObj);
                this.layer.serve.model.push(refObj);
            })
        });
    }

    loadMarket() {
        const data = [{
            lon: 104.143,
            lat: 30.6
        }];
        data.forEach(item => {
            const gaUrl = this.gaUrl + 'JJ_cs.ga';
            this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 0], item, {
                scale: 0.5
            }).then(refObj => {
                if (!this.layers['market']) {
                    this.layers['market'] = [];
                }
                this.layers['market'].push(refObj);
                this.layer.market.model.push(refObj);
            })
        });
    }
    loadTreeMap() {
        const data = [{
            lon: 104.14295959472,
            lat: 30.59712791442
        }];
        data.forEach(item => {
            const gaUrl = this.gaUrl + '喜树社区.ga';
            this.work.MapUtil.LoadGA(gaUrl, [Number(item.lon), Number(item.lat), 0], item,{
                rotate:[0, 180, 0]
            }).then(refObj => {
                // if (!this.layers['market']) {
                //     this.layers['market'] = [];
                // }
                // this.layers['market'].push(refObj);
                this.layer.treeMap.model.push(refObj);
                this.layer.treeMap.model.forEach(m => m.setVisible(true));
            })
        });
    }

}