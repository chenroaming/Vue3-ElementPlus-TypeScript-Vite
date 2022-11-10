<script setup lang='ts' name="SideBar">
// 如果vscode中使用的是vetur插件，因为不支持setup语法，此处可能会产生报错“已定义未使用”
// 推荐使用volar插件来适配
import SideBarItem from './components/SideBarItem.vue'
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { NewRouteRecordRaw } from '@/types/utils/menu'
const { getters } = useStore()
const $route = useRoute()
const isCollapse = computed<boolean>(() => {
  return getters['app/isCollapse']
})
const filterRouter = computed<NewRouteRecordRaw[]>(() => getters['app/asyncRouter'])
const nowActive = ref('')
watch($route, (cur:RouteLocationNormalizedLoaded) => {
  nowActive.value = cur.path
})
nowActive.value = $route.path
</script>
<template>
 <div class="sideBar">
  <div class="logo">Logo</div>
  <el-scrollbar class="scrollbar-wrapper">
    <el-menu
      router
      background-color="#304156"
      text-color="#fff"
      :default-active="nowActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse">
      <SideBarItem
        v-for="item in filterRouter"
        :key="item.name"
        :item="item"></SideBarItem>
    </el-menu>
  </el-scrollbar>
 </div>
</template>

<style scoped>
  /* 收缩菜单样式 */
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu {
    border-right: none;
  }
  /* 菜单高度固定便于出现滚动条 */
  .scrollbar-wrapper {
    height: calc(100% - 60px);
  }
</style>

<style scoped lang = "scss">
.sideBar {
  height: 100vh;
  background: #304156;
}
.logo {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
}
</style>
