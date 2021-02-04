/*
 * @Author: your name
 * @Date: 2020-11-25 10:19:02
 * @LastEditTime: 2021-01-29 14:01:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \treeMap\js\config\MapConfig.js
 */
// 地图初始化配置
export let mapConfig = {
    global: {
        assetUrl: "/assets/materials",
        center: {
            x: 104.161211,
            y: 30.604603
        },
        quality: 3
    },
    // map: { url: "http://10.51.100.207:18081/tileMap/services/MapServer/img_c@cva_c/tile/{z}/{y}/{x}?startLevel=1", type: 'eli'}
    map: {
        url: "http://222.73.139.7:8082/tileMap/services/MapServer/msc25109e937/tile/{z}/{y}/{x}?startLevel=1",
        type: 'eli'
    }
}

export let sceneConfig = [{
        name: '流光',
        udm: '流光.udm',
        mat: 'daoluliuguang(2).vex'
    },
    // {
    //     name: '草地',
    //     udm: '植被.udm',
    //     mat: 'grass_028.vex'
    // },
    {
        name: '道路面',
        udm: '道路面.udm',
        mat: 'daoluliuguang(2).vex'
    },
    {
        name: '道路1984',
        udm: '道路.udm.vsm',
        mat: 'daoluliuguang(2).vex'
    },
    {
        name: 'top_1_3',
        udm: 'top_1_3.udm.vsm',
        mat: 'top_1-3.vex'
    }, {
        name: 'top_3_7',
        udm: 'top_3_7.udm.vsm',
        mat: 'top_3-7.vex'
    }, {
        name: 'top_7_18',
        udm: 'top_7_18.udm.vsm',
        mat: 'top_7-18.vex'
    }, {
        name: 'top_18_32',
        udm: 'top_18_32.udm.vsm',
        mat: 'top_18-32.vex'
    },
    {
        name: 'top_32_50',
        udm: 'top_32_50.udm.vsm',
        mat: 'top_32-50.vex'
    },
    {
        name: 'top_50_64',
        udm: 'top_50_64.udm.vsm',
        mat: 'top_50_64.vex'
    },
    {
        name: 'wall_1_3',
        udm: 'wall_1_3.udm.vsm',
        mat: 'wall_1-3.vex'
    }, {
        name: 'wall_3_7',
        udm: 'wall_3_7.udm.vsm',
        mat: 'wall_3-7.vex'
    }, {
        name: 'wall_7_18',
        udm: 'wall_7_18.udm.vsm',
        mat: 'wall_7-18.vex'
    }, {
        name: 'wall_18_32',
        udm: 'wall_18_32.udm.vsm',
        mat: 'wall_18-32.vex'
    }, {
        name: 'wall_32_50',
        udm: 'wall_32_50.udm.vsm',
        mat: 'wall_32_50.vex'
    },
    {
        name: 'wall_50_64',
        udm: 'wall_50_64.udm.vsm',
        mat: 'wall_50_64.vex'
    }
]

export let gaConfig = {
    'petrolStation.ga': '加油站'
}