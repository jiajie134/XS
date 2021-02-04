/*
 * @Author: your name
 * @Date: 2020-11-25 16:47:22
 * @LastEditTime: 2020-12-04 11:22:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \treeMap\flex\js\main.js
 */
import My_work from './my_work.js'
import $_eachers from './Echarts.js'
import my_tab from './my_tab.js'
(function(Work){
    let $echarts = new $_eachers(echarts);
    let $my_table = new my_tab();
    let $My_work = new My_work(Work);
    $echarts.leftCrowd();
    $echarts.rightCrowd('takeCare_total',{
        name:'日间照料总计',
        text:'日间照料总计'
    });
    $echarts.rightCrowd('OldMan_per',{
        name:'老入户陪伴人数',
        text:'老入户陪伴人数'
    });
    $echarts.rightCrowd('Old_volunteer',{
        name:'老年志愿队伍',
        text:'老年志愿队伍'
    });
    $echarts.leftPlace('left_place_echarts');
    $echarts.rightColumn('right_column');//特殊人员柱状图
    $echarts.perLeftPie('left_per_pie');
    $echarts.perRightPie('right_per_pie');
    $my_table.houseTab('#House_Community');
    $My_work.Mouse_enter('.video_content')//鼠标移入移出
    
    $My_work.create_video('#monitoring');
    $('.play_video>img').on('click',function(){
        let _this = $(this),timer;
        let src = _this.parent().siblings('video').attr('src')
        let popup = $('#my_popup');
        if(popup[0]){
            let v = `<video src="${src}" controls="controls"></video>`
            popup.find('.popup_content').html(v)
        }else {
            $My_work.create_Popup(src)
            $("#my_popup").css({
                animation: 'video_play .5s linear 1'
            })
            
            timer = setTimeout(()=>{
                $("#my_popup").addClass('an').css({
                    animation:'none'
                })
                timer = null
            },500)
            
        }   
    });
    $My_work.loadElement()
})(window.Work)