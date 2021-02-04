/*
 * @Author: your name
 * @Date: 2020-11-27 09:36:43
 * @LastEditTime: 2020-11-30 15:04:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \treeMap\flex\js\my_tab.js
 */
export default function () {
    //社区概况表格
    this.houseTab = function (ele) {
        let tableDatas = [
            {
                name:'锦江城市花园一期',
                per_total:2646,
                house_count:8,
                col_count:11
            },
            {
                name:'锦江城市花园二期',
                per_total:3541,
                house_count:6,
                col_count:11
            },
            {
                name:'锦江城市花园三期',
                per_total:3849,
                house_count:6,
                col_count:11
            },
            {
                name:'和祥瑞园',
                per_total:674,
                house_count:8,
                col_count:19
            },
            {
                name:'合能锦城',
                per_total:1168,
                house_count:3,
                col_count:5
            },
            {
                name:'和祥瑞园',
                per_total:674,
                house_count:8,
                col_count:19
            },
            {
                name:'合能锦城',
                per_total:1168,
                house_count:3,
                col_count:5
            }
        ];
        let colsDatas = [[
            {field:'name',title:'小区名称',width:'40%',totalRowText:'合计：',style:'color:#0b9eff;font-weight:400'},
            {field:'per_total',title:'总户数',width:'15%',align:'center',totalRow:true,style:'color:#d6b506;font-weight:400'},
            {field:'house_count',title:'楼栋数',width:'15%',align:'center',totalRow:true,style:'color:#25756e;font-weight:400'},
            {field:'col_count',title:'单元数',width:'15%',align:'center',totalRow:true,style:'color:#9a2a06;font-weight:400'},
            {field:'more',title:'操作',width:'15%',align:'center',templet:function(d){
                return `<img src="./css/img/dingwei.png" style="width:15px;height:15px;cursor: pointer;"></img>`
            }}
        ]]
        layui.use('table',function(){
            let table = layui.table;
            table.render({
                elem:ele,
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