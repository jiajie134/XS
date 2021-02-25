<!--
 * @Author: yb
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-20 13:56:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势 平安社区-->

<template>
  <div class="comSafety margin-b">
    <div class="title">平安社区</div>
    <div class="content flex">
      <div v-for="(item,index) in dataList" :key="index" class="con_item">
        <p class="item_title color-b">{{item.title}}</p>
        <div class="item">
          <div v-for="(em,index) in item.item" :key="index" class="flex item">
            <span>{{em.name}}</span>
            <span class="color-y">{{em.count}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup(){
    const dataList = [
      {
        title:'执法队伍',
        item:[
          {
            name:'社区警务室',
            count:1,
          },
          {
            name:'专职警员',
            count:1,
          },
          {
            name:'辅警',
            count:16,
          },{
            name:'执法电瓶车',
            count:3,
          },{
            name:'单警装备',
            count:5,
          },{
            name:'天网监控点位',
            count:129,
          },{
            name:'监控摄像接入',
            count:141,
          }
        ]
      }, {
        title:'执法事件',
        item:[
          {
            name:'居民证办理',
            count:6134,
          },
          {
            name:'纠纷调解',
            count:4,
          },
          {
            name:'群众求助',
            count:30,
          },{
            name:'扫黑除恶',
            count:1,
          },{
            name:'禁毒预防宣传',
            count:10,
          }
        ]
      }, {
        title:'重点人群管控',
        item:[
          {
            name:'社区矫正人员',
            count:1,
          },
          {
            name:'刑满释放人员',
            count:24,
          },
          {
            name:'吸毒人员',
            count:164,
          },{
            name:'33333',
            count:132,
          }
        ]
      }, {
        title:'社区管理',
        item:[
          {
            name:'社区工作人员',
            count:9,
          },
          {
            name:'群防群治人员',
            count:83,
          },
          {
            name:'网格员',
            count:3,
          },{
            name:'调解员',
            count:7,
          }
        ]
      },
    ]
    return{
      dataList
    }
  },
  created() {},
  methods: {},
};
</script >
<style scoped lang="less">
@import url('~@/assets/XSCSS/common/oveSituation.less');
.comSafety {
  color: #fff;
  .content {
    height: 15rem;
    flex-wrap: wrap;
    .con_item{
      width: 48%;
      .item_title{
        height: 1.625rem /* 39/24 */;
        line-height: 1.625rem /* 39/24 */;
      }
      .item{
        >div{
          height: 2.5rem /* 30/24 */;
          background-color: rgba(4, 32, 59, 0.5);
          align-items: center;
          padding: 0 .416667rem /* 10/24 */;
          box-sizing: border-box;
          margin-bottom: .625rem /* 15/24 */;
        }
        
      }
    }
  }
}
</style>