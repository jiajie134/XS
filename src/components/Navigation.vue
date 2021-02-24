<!--
 * @Author: your name
 * @Date: 2021-02-20 10:42:20
 * @LastEditTime: 2021-02-23 10:57:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\components\navigation.vue
-->
<!--导航栏-->

<template>
  <div
    class="Navigation"
    id="Navigation"
  >
    <ul class="navdetail">
      <li
        v-for="(nav,i) in NavArr"
        :key="i"
        @click="JumpFun(i)"
        :class="{active:i==NavigationState}"
      >{{nav}}</li>
    </ul>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { mapState } from "vuex";
export default {
  setup() {
    const Navigation = [
      "总体态势",
      "人口治理",
      "重点管控",
      "社区治理",
      "智慧党建",
      "社区安全",
      "公共卫生医疗",
    ];

    const UseR = useRouter();
    const UseSta = useStore()

    let NavArr = reactive({ Navigation: Navigation });

    let JumpFun = function (i) {
      if(i===UseSta.state.NavigationState) return;
      UseSta.commit('changeNavigationState',i)
      switch (i) {
        case 0:
          UseR.push({ path: "/" });
          break;
        case 1:
          UseR.push({ path: "/PopManagement" });
          break;
        case 2:
          UseR.push({ path: "/EmphasisControl" });
          break;
        case 3:
          UseR.push({ path: "/ComGovernance" });
          break;
        case 4:
          UseR.push({ path: "/WitBuilding" });
          break;
        case 5:
          UseR.push({ path: "/ComSecurity" });
          break;
        case 6:
          UseR.push({ path: "/PubSanAndMed" });
          break;
      }
    };
    
    return {
      NavArr: NavArr.Navigation,
      JumpFun,
    };
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["NavigationState"]),
  },
  methods: {
  },
  mounted() {
  
  },
}
</script >
<style scoped lang="less">
@import url("../assets/XSCSS/navigation.less");
</style>