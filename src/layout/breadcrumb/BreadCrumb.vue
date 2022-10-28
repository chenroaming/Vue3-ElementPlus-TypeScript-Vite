<script setup lang='ts' name="BreadCrumb">
import { ref, watch } from 'vue'
// import { last } from 'lodash'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded, RouteRecordNormalized } from 'vue-router'
// import { useStore } from 'vuex'
interface BreadCrumbMenu {
  title: string | unknown,
  path: string
}
const $router = useRoute()
// const { dispatch } = useStore()
const menuList = ref<BreadCrumbMenu[]>([])
const getBreadCrumb = (menu:RouteRecordNormalized[]) => {
  menuList.value = menu.map((el:RouteRecordNormalized) => {
    return {
      title: el.meta.title,
      path: el.path
    }
  })
  // menuList.value = fullPath
  // dispatch('app/addTabsMenus', last($router.matched))
}
getBreadCrumb($router.matched)
watch($router, (cur:RouteLocationNormalizedLoaded) => {
  getBreadCrumb(cur.matched)
})
</script>
<template>
  <el-breadcrumb separator="/">
    <TransitionGroup appear name="breadcrumb">
      <el-breadcrumb-item
        v-for="item in menuList"
        :key="item.title">{{ item.title }}</el-breadcrumb-item>
    </TransitionGroup>
  </el-breadcrumb>
</template>
