// 地图初始化配置
export let mapConfig = {
    global: {
        assetUrl: "/assets/materials",
        center: {
            x: 104,
            y: 30
        },
        quality: 3
    },
    // map: { url: "http://10.51.100.207:18081/tileMap/services/MapServer/img_c@cva_c/tile/{z}/{y}/{x}?startLevel=1", type: 'eli'}
    map: { url: "http://222.73.139.7:8082/tileMap/services/MapServer/msc25109e937/tile/{z}/{y}/{x}?startLevel=1", type: 'eli'}
}