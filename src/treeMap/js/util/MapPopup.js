export default class {
    constructor(work) {
        this.work = work;
        this.util = work.Util;
        this.overlays = {};
        Vex.scene.onDisplay = function (pos, overlay) {
            let dom = overlay.dom;
            if (dom) { //更新关联的html屏幕位置
                dom.style.left = (pos.x + overlay.offset[0]) + "px";
                dom.style.top = (pos.y + overlay.offset[1]) + "px";
            }
        }
        Vex.scene.onDestory = function (overlay) {
            let dom = overlay.dom;
            //销毁dom
            if (dom) {
                dom.remove()
            }
        }
    }
    // 创建弹窗
    createPopup({
        coord = [0, 0, 0],
        html = '',
        data = {},
        offset = [0, 0]
    } = {}) {
        const uuid = this.util.getUuid();
        Vex.scene.onInit = function (pos, overlay) {
            let dom = document.createElement("div");
            dom.style.left = (pos.x + overlay.offset[0]) + "px";
            dom.style.top = (pos.y + overlay.offset[1]) + "px";
            dom.style.position = "absolute";
            dom.style.pointerEvents = "none";
            dom.innerHTML = html;
            dom.id = 'mapPopup-' + uuid;

            document.body.appendChild(dom);
            overlay.dom = dom;
        }
        let pos = new Vex.lib.Vector3(coord[0], coord[1], coord[2])
        const overlay = Vex.scene.addOverlay(pos, data, offset);
        this.overlays[uuid] = overlay;
        return uuid;
    }
    // 弹窗模板
    createPopupTemplete1({
        width = 480,
        // height = 260,
        title = '',
        coord = [0, 0, 0],
        html = "",
        data = {},
        offset = [0, 0]
    } = {}) {
        const uuid = this.util.getUuid();
        Vex.scene.onInit = function (pos, overlay) {
            let dom = document.createElement("div");
            dom.style.left = (pos.x + overlay.offset[0]) + "px";
            dom.style.top = (pos.y + overlay.offset[1]) + "px";
            dom.style.position = "absolute";
            dom.style.pointerEvents = "none";
            dom.innerHTML = `
                <div class="infoBox" style="width:${width}px;">
                    <div class="decorate">
                        <div class="angle1"></div>
                        <div class="angle2"></div>
                        <div class="angle3"></div>
                        <div class="angle4"></div>
                    </div>
                    <div class="title">
                        <span>${title}</span>
                        <i class="closeIcon"></i>
                    </div>
                    <div class="content">${html}</div>
                    <div class="bottom"></div>
                </div>
            `;
            dom.id = 'mapPopup-' + uuid;

            document.body.appendChild(dom);
            overlay.dom = dom;
        }
        let pos = new Vex.lib.Vector3(coord[0], coord[1], coord[2])
        const overlay = Vex.scene.addOverlay(pos, data, offset);
        this.overlays[uuid] = overlay;
        // 绑定事件
        let close = overlay.dom.getElementsByClassName('closeIcon')[0];
        close.onclick = () => {
            this.work.Popup.removePopup(uuid)
        }
        return uuid;
    }

    // 移除弹窗
    removePopup(id) {
        if (this.overlays[id]) {
            Vex.scene.delOverlay(this.overlays[id]);
            delete this.overlays[id]
        }

    }

}