<!--
 * @Author: yb
 * @Date: 2021-02-20 13:55:52
 * @LastEditTime: 2021-02-20 13:56:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Moudle_xs\OveSituation.vue
-->
<!--总体态势 社区概况-->

<template>
  <div class="partyBuild">
    <div class="title">社区概况</div>
    <div class="content">
      <table class="con_table" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>小区名称</th>
            <th>总户数</th>
            <th>楼栋数</th>
            <th>单元数</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index" :class="index%2 === 1 ? 'high' : ''">
            <td class="color-b">{{item.name}}</td>
            <td class="color-y">{{item.houseNum}}</td>
            <td class="color-g">{{item.buildNum}}</td>
            <td class="color-r">{{item.unitNum}}</td>
            <td>{{item.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  setup(){
    const tableData = [
      {
        name:'111',
        houseNum:0,
        buildNum:0,
        unitNum:0,
      }, {
        name:'222',
        houseNum:0,
        buildNum:0,
        unitNum:0,
      }, {
        name:'333',
        houseNum:0,
        buildNum:0,
        unitNum:0,
      }, {
        name:'444',
        houseNum:0,
        buildNum:0,
        unitNum:0,
      },
    ]
    return{
      tableData
    }
  },
  created() {},
  methods: {},
};
</script >
<style scoped lang="less">
.partyBuild {
  width: 100%;
  height: auto;
  color: #fff;
  margin-bottom: .833333rem /* 20/24 */;
  .title {
    background-image: url("../../../../assets/images/img/bg_title.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 2.5rem /* 30/12 */;
    line-height: 2.5rem /* 30/12 */;
    width: 100%;
    text-indent: 2.5rem /* 20/12 */;
    color: #4ffff7;
  }
  .content {
    display: flex;
    justify-content: space-between;
    height: 20rem;
    background-image: linear-gradient(
      0deg,
      rgba(12, 42, 76, 0.6) 0%,
      rgba(12, 42, 76, 0.4) 25%,
      rgba(12, 42, 76, 0.2) 50%,
      rgba(12, 42, 76, 0) 100%
    );
    border: 1px solid rgba(7, 86, 105, 0.4);
    padding: 0.833333rem /* 20/24 */;
    .con_table{
      width: 100%;
      thead{
        tr{
          padding: .416667rem /* 10/24 */;
          background-color: #026696;
          height: 2.5rem /* 60/24 */;
        }
      }
      tbody{
        tr{
          text-align: center;
          height: 2.5rem;
          &:hover{
            background-color: rgb(172, 161, 161);
          }
          .color-b{
            color: lightblue;
          }
          .color-y{
            color: lightyellow;
          }
          .color-g{
            color: lightgreen;
          }
          .color-r{
            color: red;
          }
        }
        .high{
          background-color:#083044;
        }
      }
    }
  }
}
</style>