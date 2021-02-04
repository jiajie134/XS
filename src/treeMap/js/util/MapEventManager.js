/*
 * @Author: your name
 * @Date: 2020-11-25 10:19:15
 * @LastEditTime: 2020-12-04 15:41:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \treeMap\js\util\MapEventManager.js
 */
export default class {
    constructor(Vex) {
        this.Vex = Vex;
        // 左键事件对象
        this.LEFT_DOWN_OBJ = {};
        this.MIDDLE_DOWN_OBJ = {};
        this.RIGHT_DOWN_OBJ = {};
        Vex.inputManager.addMouseListener("down", function (e) {
            if (e.mouse == 0) { //左键
                Vex.scene.camera().pickPosition(new Vex.lib.Vector2(e.data.x, e.data.y), function (pos) {
                    console.log(pos)
                });
                Vex.pickManager.pick(e.data.x, e.data.y, 'left');
            } else if (e.mouse == 1) { //右键

                Vex.pickManager.pick(e.data.x, e.data.y, 'right');
            } else if (e.mouse == 2) { //中键
                Vex.pickManager.pick(e.data.x, e.data.y, 'middle');
            }
        }, null)
        Vex.preFabManager.on("click", (ret) => {
            // ['名字'，'refobject.uuid','v3','target']
            if (ret.tag == 'left') {
                for (let x in this.LEFT_DOWN_OBJ) {
                    this.LEFT_DOWN_OBJ[x](ret);
                }
            } else if (ret.tag == 'right') {
                for (let x in this.RIGHT_DOWN_OBJ) {
                    this.RIGHT_DOWN_OBJ[x](ret);
                }
            } else if (ret.tag == 'middle') {
                for (let x in this.MIDDLE_DOWN_OBJ) {
                    this.MIDDLE_DOWN_OBJ[x](ret);
                }
            }
        });
    }

    on(type = 'left', id = '', callBack = function () {}) {
        // 判断id是否为空
        if (id == '') {
            return false;
        }
        // 判断注册的鼠标按键事件
        if (type == 'left') {
            this.LEFT_DOWN_OBJ[id] = callBack
        } else if (type == 'right') {
            this.RIGHT_DOWN_OBJ[id] = callBack
        } else if (type == 'middle') {
            this.MIDDLE_DOWN_OBJ[id] = callBack
        }
    }

    remove(type, id) {
        // 判断id是否为空
        if (id && type) {
            return false;
        }

        switch (type) {
            case 'left':
                delete this.LEFT_DOWN_OBJ[id]
                break;
            case 'right':
                delete this.RIGHT_DOWN_OBJ[id]
                break;
            case 'middle':
                delete this.MIDDLE_DOWN_OBJ[id]
                break;
        }
    }
}