let url = 'http://10.51.100.74:8080'

// 综合指挥
// 街道风险源
export let reqRisk = function () {
    return fetch(url + '/command/map/risk')
        .then(function (response) {
            return response.json();
        })
}
// 加油站
export let reqOil = function () {
    return fetch(url + '/command/map/oil')
        .then(function (response) {
            return response.json();
        })
}
// 危化品经营使用企业
export let reqRiskCompany = function () {
    return fetch(url + '/command/map/riskCompany')
        .then(function (response) {
            return response.json();
        })
}
// 加气站
export let reqGas = function () {
    return fetch(url + '/command/map/gas')
        .then(function (response) {
            return response.json();
        })
}
// 重大风险点
export let reqRiskPoint = function () {
    return fetch(url + '/command/map/riskPoint')
        .then(function (response) {
            return response.json();
        })
}
// 医疗资源
export let reqMedical = function () {
    return fetch(url + '/command/map/medical')
        .then(function (response) {
            return response.json();
        })
}
// 应急避难场所
export let reqShelter = function () {
    return fetch(url + '/command/map/shelter')
        .then(function (response) {
            return response.json();
        })
}
// 消防资源
export let reqFire = function () {
    return fetch(url + '/command/map/fire')
        .then(function (response) {
            return response.json();
        })
}
// 派出所
export let reqPolice = function () {
    return fetch(url + '/command/map/police')
        .then(function (response) {
            return response.json();
        })
}
// 天网
// export let reqRisk = function () {
//     return fetch(url + '/command/map/risk')
//         .then(function (response) {
//             return response.json();
//         })
// }
// 雪亮
// export let reqRisk = function () {
//     return fetch(url + '/command/map/risk')
//         .then(function (response) {
//             return response.json();
//         })
// }

// 经济运行
// 功能区   
export let reqIndustry = function () {
    return fetch(url + '/economy/map/industry')
        .then(function (response) {
            return response.json();
        })
}

// 智慧文旅
// 景区
export let reqTourist = function () {
    return fetch(url + '/tour/map/tourist')
        .then(function (response) {
            return response.json();
        })
}
// 购物
export let reqShopping = function () {
    return fetch(url + '/tour/map/shopping')
        .then(function (response) {
            return response.json();
        })
}
// 娱乐
export let reqPlay = function () {
    return fetch(url + '/tour/map/play')
        .then(function (response) {
            return response.json();
        })
}
// 酒店
export let reqHotel = function () {
    return fetch(url + '/tour/map/hotel')
        .then(function (response) {
            return response.json();
        })
}
// 餐饮
export let reqFood = function () {
    return fetch(url + '/tour/map/food')
        .then(function (response) {
            return response.json();
        })
}
// 公厕
export let reqToilet = function () {
    return fetch(url + '/tour/map/toilet')
        .then(function (response) {
            return response.json();
        })
}
// 三圣乡弹窗详情
export let reqPopup = function () {
    return fetch(url + '/tour/map/popup')
        .then(function (response) {
            return response.json();
        })
}
// 社会管理
// 最新事件/社会事件
export let reqEventToday = function () {
    return fetch(url + '/society/map/eventToday')
        .then(function (response) {
            return response.json();
        })
}
// 重点场所
export let reqKeySites = function () {
    return fetch(url + '/society/ui/keySites')
        .then(function (response) {
            return response.json();
        })
}
// 公厕
export let reqToilets = function () {
    return fetch(url + '/society/map/toilets')
        .then(function (response) {
            return response.json();
        })
}
// 垃圾转运站
export let reqRTS = function () {
    return {
        lon: 104.165832516125761, 
        lat: 30.571514389058393,
        name: '垃圾转运站',
        address: '万福村一组317号'
    }
}
// 环卫机构
export let reqOrgan = function () {
    return fetch(url + '/society/map/organ')
        .then(function (response) {
            return response.json();
        })
}
// 垃圾清运路线
export let reqRTSLine = function () {
    return fetch('./data/json/qylx.geojson')
        .then(function (response) {
            return response.json();
        })
}
// 城市管理
// 城管案件

// 路灯
export let reqLamp = function () {
    return fetch(url + '/city/map/lamp')
        .then(function (response) {
            return response.json();
        })
}
// 井盖
export let reqWell = function () {
    return fetch(url + '/city/map/well')
        .then(function (response) {
            return response.json();
        })
}
// 桥梁
export let reqBridge = function () {
    return fetch(url + '/city/map/bridge')
        .then(function (response) {
            return response.json();
        })
}
// 交通设施
export let reqTraffic = function () {
    return fetch(url + '/city/map/traffic')
        .then(function (response) {
            return response.json();
        })
}
// 学校
export let reqSchool = function () {
    return fetch(url + '/city/map/school')
        .then(function (response) {
            return response.json();
        })
}
// 医院
export let reqHospital = function () {
    return fetch(url + '/city/map/hospital')
        .then(function (response) {
            return response.json();
        })
}
// 智慧工地
export let reqSmartSite = function () {
    return fetch(url + '/city/map/building')
        .then(function (response) {
            return response.json();
        })
}
// 扬尘报警工地

