
import $_eachers from './Echarts.js';
let $echarts = new $_eachers(echarts);
export default function(){
    this.init = function(){
        $echarts.perSexPie('sexPie');
        $echarts.developParty("developChart");
        $echarts.developParty("developChart2");
        $echarts.perSexPie("education");
        $echarts.perSexPie("work");
        $echarts.perSexPie("partyAge");
        $echarts.perSexPie("age");
        actionTab('#actionTab'); 
    }
    function actionTab(el){
        let tableDatas = [
            {
                order:0,
                demo1:2646,
                demo2:8,
                demo3:1,
                demo4:11
            },
            {
                order:1,
                demo1:3541,
                demo2:6,
                demo3:1,
                demo4:11
            },
            {
                order:2,
                demo1:3849,
                demo2:6,
                demo3:1,
                demo4:11
            },
            {
                order:3,
                demo1:674,
                demo2:8,
                demo3:1,
                demo4:19
            },
            {
                order:4,
                demo1:1168,
                demo2:3,
                demo3:5,
                demo4:1
            },
            {
                order:5,
                demo1:674,
                demo2:8,
                demo3:1,
                demo4:19
            },
            {
                order:6,
                demo1:1168,
                demo2:3,
                demo3:5,
                demo4:1
            }
        ];
        let colsDatas = [[
            {field:'order',title:'序号',width:'20%',totalRowText:'合计：',style:'color:#0b9eff;font-weight:400'},
            {field:'demo1',title:'示例1',width:'20%',align:'center',totalRow:true,style:'color:#d6b506;font-weight:400'},
            {field:'demo2',title:'示例2',width:'20%',align:'center',totalRow:true,style:'color:#25756e;font-weight:400'},
            {field:'demo3',title:'示例3',width:'20%',align:'center',totalRow:true,style:'color:#9a2a06;font-weight:400'},
            {field:'demo4',title:'示例4',width:'20%',align:'center',totalRow:true,style:'color:#9a2a06;font-weight:400'},
            // {field:'more',title:'示例4',width:'15%',align:'center',templet:function(d){
            //     return `<img src="./css/img/dingwei.png" style="width:15px;height:15px;cursor: pointer;"></img>`
            // }}
        ]]
        layui.use('table',function(){
            let table = layui.table;
            table.render({
                elem:el,
                totalRow:true,
                data:tableDatas,
                cols:colsDatas,
                done:function(res, curr, count){
                    var divArr = $(".layui-table-total div.layui-table-cell");
                    $.each(divArr,function (index,item) {
                        var _div = $(item);
                        var content = _div.html();
                        content = content.replace(".00","");
                        _div.html(content);
                    });
                }
            })
        })
    }
}