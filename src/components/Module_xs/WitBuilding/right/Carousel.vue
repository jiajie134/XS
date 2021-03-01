<!--
 * @Author: your name
 * @Date: 2021-03-01 13:21:19
 * @LastEditTime: 2021-03-01 14:11:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\Module_xs\WitBuilding\right\Carousel.vue
-->
<!--  -->
<template>
  <div
    class="Carousel"
    id="Carousel"
  >
    <div class="car_image">
      <card-Title title="视频"></card-Title>
      <ElCarousel>
        <el-carousel-item
          v-for="(item,i) in cardata.data"
          :key="i"
        >
          <img :src="'../../../assets/images/'+item" alt="暂无图片">
        </el-carousel-item>
      </ElCarousel>
    </div>
    <div class="poandguidelines">
      <card-Title title="方针政策"></card-Title>
    </div>
  </div>
</template>c

<script>
import { reactive } from "vue";
export default {
  name: "Carousel",
  setup() {
    const cardata = reactive({
      data: ['1.jpg','2.jpg','3.jpg'],
    });
    const notice = reactive({
        data:[]
    })
    return {
        cardata,
        notice
    };
  },
};
</script>

<style  scoped lang="less">
#Carousel {
  display: flex;
  flex-direction: column;
  > div {
    width: 100%;
    flex: 1;
  }
}
</style>
