/*
 * @Author: your name
 * @Date: 2020-11-30 14:48:47
 * @LastEditTime: 2020-12-04 11:46:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \treeMap\flex\js\my_work.js
 */
import InitParty from './initParty.js'
export default function (work) {
    let option = [{
        value: '社区监控'
    }, {
        value: '街道监控'
    }]
    this.Mouse_enter = function (ele) {

        $(ele).hover(
            function () {
                let _this = $(this);
                _this.find('.play_video').css({
                    width: '1.6vw',
                    height: '1.6vw'
                })
            },
            function () {
                let _this = $(this);
                _this.find('.play_video').css({
                    width: '1.4vw',
                    height: '1.4vw'
                })
            }
        )
    }
    this.Popup = function () {
        let html = ` 
            <div class="infoBox" style="width:25vw;">
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
        </div>`
    }
    this.create_video = function (ele) {
        $(ele).on('change', function () {
            alert(1)
        })
    }
    this.create_Popup = function (src) {
        let video = $(`
            <div class="my_popup" id="my_popup">
                <div class="decorate">
                    <div class="angle1"></div>
                    <div class="angle2"></div>
                    <div class="angle3"></div>
                    <div class="angle4"></div>
                </div>
                <div class="popup_tit">
                    <span>社区监控</span>
                    <i class="icon_close"></i>
                </div>
                <div class="popup_content">
                    <video src="${src}"  controls="controls"></video>
                </div>
                <div class="bottom"></div>
            </div>
        `)
        $(video).appendTo($('body'))
        $('.icon_close').on('click', function () {
            $('#my_popup').remove()
        })
    }
    this.loadElement = function () {
        layui.use('element', function () {
            var element = layui.element;

            //一些事件监听
            element.on('nav(menu)', function (data) {
                console.log(data);
                let navName = data[0].innerText;
                $(this).parent().addClass('main');
                $(this).parent().siblings().removeClass('main');
                switch(navName){
                    case "智慧党建":
                        $(".overAll").hide();
                        $('.djPanel').show();
                        if(!this.isFirst){
                            this.isFirst = true;
                            let initParty = new InitParty()
                            initParty.init();
                        }
                        break;
                    default:
                        $('.djPanel').hide();
                        $(".overAll").show();
                        break;
                }
            });
        });
    }
}