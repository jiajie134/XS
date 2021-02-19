/*
 * @Author: your name
 * @Date: 2020-11-25 10:19:02
 * @LastEditTime: 2021-02-19 11:06:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \treeMap\js\index.js
 */
import Map from './Map.js';
import Work from './work/work.js';
import SceneLayer from './work/sceneLayer.js';

// 初始化地图
Map.init(function (Vex, scene) {
    // 创建初始化位置transform
    var init_transform = new Vex.Transform({
        x: 104.13707733154297, y: 30.57871437072754, z: 1200.2587890625,
        type: 0
    }, {
        x: 30.682395935058594, y: 17.550146102905273, z: 0.21147996187210083
    }, {
        x: 1, y: 1, z: 1
    });
    Vex.scene.camera().setView(init_transform)
    Vex.scene.camera().setEnableGlobeMap(false)
    // 设置选中颜色
    Vex.scene.setSelectColor(255, 255, 255);
    // 设置雾
    let setConfig = {
        fog: false, //雾
        fogDensity: 10,
        fogStartDistance: 10000,
        fogEndDistance: 30000
    }
    Vex.renderSetting.setRenderSetting(setConfig);

    Vex.scene.sun().setEnable(true)
    Vex.scene.sun().setIntensity(2);
    Vex.scene.sun().setColor(new Vex.lib.Color(1,1,1))
    
    // 初始化功能入口
    let work = new Work(Vex);
    window.Work = work;

    //---------场景图层控制-----------
    const sceneLayer = new SceneLayer(work);
    const checkList = document.querySelectorAll('#layerChecked li');
    [...checkList].forEach(c => {
        c.onchange = function (e) {
            const target = e.target;
            target && sceneLayer.changeLayer(target.id, target.checked);
        }
    })

    //---------时间显示--------------
    function dateFormat() {
        const date = new Date();
        const d = date.toLocaleString('chinese', {
            hour12: false, year: 'numeric', month: '2-digit', day: '2-digit',
            hour: 'numeric', minute: 'numeric', second: 'numeric'
        });
        const dateArr = d.split(' ');
        const baseDate = dateArr[0].split('/');
        return `${baseDate[0]}-${baseDate[1]}-${baseDate[2]}&nbsp; ${dateArr[1]} &nbsp; ${weakEnum(date.getDay())}`;
    }

    function weakEnum(day) {
        switch (day) {
            case 0:
                return '星期天';
            case 1:
                return '星期一';
            case 2:
                return '星期二';
            case 3:
                return '星期三';
            case 4:
                return '星期四';
            case 5:
                return '星期五';
            case 6:
                return '星期六';
        }
    }

    const time = document.querySelector('.head-left');
    const timeCallback = () => {
        time.innerHTML = dateFormat();
        window.requestAnimationFrame(timeCallback);
    }
    window.requestAnimationFrame(timeCallback);

});