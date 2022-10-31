<script setup lang='ts' name="TagsView">
import { watch, computed, ref, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { last } from 'lodash'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { Meta, RouteRecord } from '@/types/utils/menu'
import type { ElScrollbar, ElTag } from 'element-plus'
const $route = useRoute()
const $router = useRouter()
const tags = ref<Meta[]>([])
const scrollbar = ref<InstanceType<typeof HTMLElement>>()
const tag = ref<InstanceType<typeof ElTag>[]>([])
const activeMenu = ref<string>('')
const space = 20
const routeRecords:RouteRecord[] = []

const effectMode = (title:string) => activeMenu.value === title ? 'dark' : 'plain'

const currentSelectedIndex = computed(() => tags.value
  .findIndex(el => el.title === $route.meta.title))
const isClosable = computed(() => tags.value.length > 1)
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const goTo = (item:Meta) => {
  const { path } = routeRecords
    .find(el => el.meta.title === item.title) as RouteRecord
  $router.push({
    path
  })
}
const deleteTag = (item:Meta) => {
  const i = routeRecords
    .findIndex((el:RouteRecord) => el.meta.title === item.title)
  let isCurrentActived = false
  if (activeMenu.value === routeRecords[i].meta.title) {
    isCurrentActived = true
  }
  routeRecords.splice(i, 1)
  tags.value.splice(i, 1)
  const lastRoute = last(routeRecords)
  isCurrentActived && lastRoute?.path && $router.push({
    path: lastRoute?.path
  })
}

watch($route, (cur:RouteLocationNormalizedLoaded) => {
  const isExist = routeRecords.some(el => el.path === cur.path)
  const { path, meta } = cur
  if (!isExist) {
    routeRecords.push({ path, meta })
    tags.value.push(cur.meta as Meta)
  }
  activeMenu.value = cur.meta.title as string
})

watch(activeMenu, async () => {
  await nextTick()
  // 获取第一个菜单标签到当前激活的菜单标签的数组
  const nowArr = tag.value.slice(0, currentSelectedIndex.value + 1)
  const currentWidth = tag.value[currentSelectedIndex.value].$el.clientWidth
  let nextTagWidth = 0
  // 获取当前激活的菜单标签的下一个菜单标签的宽度
  if (tags.value.length > nowArr.length) {
    nextTagWidth = tag.value[currentSelectedIndex.value + 1].$el.clientWidth
  }
  // 获取父级容器的总宽度
  const containerWidth = scrollbar.value!.clientWidth
  // 获取第一个菜单标签到当前激活的菜单标签的总宽度
  const totalWidth = nowArr.reduce((pre, cur):number => {
    return pre + cur.$el.clientWidth + space
  }, 0)
  // 判断第一个菜单标签到当前激活菜单标签的总宽度是否大于父级容器宽度
  if (totalWidth > containerWidth) {
    // 是的话需要设置滚动条位置为总宽度减去父级容器宽度加上间距值
    scrollbarRef.value?.setScrollLeft(totalWidth - containerWidth + currentWidth + nextTagWidth + space)
  } else {
    // 否则将滚动条位置直接设置为0
    scrollbarRef.value?.setScrollLeft(0)
  }
})
// 加载组件时，直接获取当前路由信息，并添加进菜单标签和赋值激活标签
routeRecords.push({ path: $route.path, meta: $route.meta })
tags.value.push($route.meta as Meta)
activeMenu.value = $route.meta.title as string
</script>
<template>
  <div class="scrollbar-container">
    <el-scrollbar class="smooth" ref="scrollbarRef">
      <div class="scrollbar-item" ref="scrollbar">
        <el-space :size="space">
          <el-tag
            v-for="(item, i) in tags"
            :key="item.title"
            :ref="(el) => {
                if (el) tag[i] = el;
              }
            "
            @click="goTo(item)"
            @close="deleteTag(item)"
            :closable="isClosable"
            :effect="effectMode(item.title)"
            style="cursor: pointer;">
            {{ item.title }}
          </el-tag>
        </el-space>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped lang = "scss">
  .scrollbar-container {
    // 给容器一个宽度，横向滚动条才会生效
    min-width: calc(100% - 250px);
    padding-left: 35px;
    padding-right: 100px;
    height: 45px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    border-bottom: 1px solid #d8dce5;
    scroll-behavior: smooth;
  }
  .scrollbar-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    scroll-behavior: smooth;
  }
  .smooth :deep(.el-scrollbar__wrap) {
    // 增加横向滚动条滚动过渡效果
    scroll-behavior: smooth;
  }
</style>
