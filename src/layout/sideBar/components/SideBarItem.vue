<script setup lang='ts' name="SideBarItem">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { NewRouteRecordRaw } from '@/types/utils/menu'
import SideBarItem from './SideBarItem.vue' // 递归组件必须import导入自身！否则会warning并渲染出错！切记！！！
import MenuTitle from './MenuTitle.vue'
const props = defineProps({
  item: {
    type: Object as PropType<NewRouteRecordRaw>,
    default: ():NewRouteRecordRaw => ({
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

/**
 * @description: 判断是否有子节点，有子节点才渲染该递归组件
 * @param {*} computed
 * @return {boolean}
 * @author: chenroaming
 */
const hasChildNode = computed<boolean | undefined>(() => {
  return props.item.children instanceof Array &&
    props.item.children.length > 0 &&
    props.item.meta?.isCollapse as boolean | undefined
})

/**
 * @description: 判断是否有children字段，有此字段且具备长度才递归渲染自身组件
 * @param {*} item
 * @return {boolean}
 * @author: chenroaming
 */
const hasChild = (item:NewRouteRecordRaw):boolean => {
  return item.children instanceof Array && item.children.length > 0
}

</script>
<template>
 <el-sub-menu :index="item.path" v-if="hasChildNode">
    <template #title>
      <MenuTitle
        :icon="item.meta?.icon"
        :title="item.meta?.title"
        />
    </template>
    <!-- 递归显示子菜单 -->
    <el-menu-item-group
      v-for="child in item.children"
      :key="child.name"
      >
      <SideBarItem
        v-if="hasChild(child)"
        :item="child"></SideBarItem>
      <el-menu-item
        v-else
        :key="child.name"
        :index="child.path">
        <template #title>
          <MenuTitle
            :icon="child.meta?.icon"
            :title="child.meta?.title"
            />
        </template>
      </el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>
  <el-menu-item :index="item.path" v-else>
    <template #title>
      <MenuTitle
        :icon="item.meta?.icon"
        :title="item.meta?.title"
        />
    </template>
  </el-menu-item>
</template>
