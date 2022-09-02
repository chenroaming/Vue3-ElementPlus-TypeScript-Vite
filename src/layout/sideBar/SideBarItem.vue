<script setup lang='ts' name="SideBarItem">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    default: ():RouteRecordRaw => ({
      path: '',
      redirect: '',
      meta: {
        icon: '',
        title: ''
      },
      children: []
    })
  }
})
const hasChildNode = computed<boolean | undefined>(() => {
  return props.item.children instanceof Array &&
    props.item.children.length > 0 &&
    props.item.meta?.isCollapse as boolean | undefined
})
const hasChild = (item:RouteRecordRaw):boolean => {
  console.log(item, item.children instanceof Array && item.children.length > 0)
  return item.children instanceof Array && item.children.length > 0
}
</script>
<template>
 <el-sub-menu :index="item.path" v-if="hasChildNode">
    <template #title>
      <el-icon>
        <component :is="item.meta?.icon" />
      </el-icon>
      <el-icon><location /></el-icon>
      <span>{{ item.meta?.title }}</span>
    </template>
    <!-- 递归显示子菜单 -->
    <el-menu-item-group
      v-for="child in item.children"
      :key="child.name"
      >
      <SlideBarItem
        v-if="hasChild(child)"
        :item="child"></SlideBarItem>
      <el-menu-item
        v-else
        :key="child.name"
        :index="child.path">{{ child.meta?.title ?? '' }}</el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>
  <el-menu-item :index="item.path" v-else>
    <template #title>
      <span>{{ item.meta?.title ?? '' }}</span>
    </template>
  </el-menu-item>
</template>

<style scoped lang = "scss">

</style>
