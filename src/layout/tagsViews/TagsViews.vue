<script setup lang='ts' name="TagsView">
import { watch, computed, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { Meta } from '@/types/utils/menu'
import type { ElScrollbar, ElTag } from 'element-plus'
const $route = useRoute()
const tags = ref<Meta[]>([])
const scrollbar = ref<InstanceType<typeof HTMLElement>>()
const tag = ref<InstanceType<typeof ElTag>[]>([])
const activeMenu = ref<string>('')
const space = 20
const checkIsExist = (item:Meta, arr:Meta[]):boolean => {
  return arr.some(el => el.title === item.title)
}
const effectMode = (title:string) => {
  return activeMenu.value === title ? 'dark' : 'plain'
}
const currentSelectedIndex = computed(() => {
  return tags.value.findIndex(el => el.title === $route.meta.title)
})
watch($route, (cur:RouteLocationNormalizedLoaded) => {
  if (!checkIsExist(cur.meta as Meta, tags.value)) {
    tags.value.push(cur.meta as Meta)
  }
  activeMenu.value = cur.meta.title as string
})
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
watch(activeMenu, async () => {
  await nextTick()
  const nowArr = tag.value.slice(0, currentSelectedIndex.value + 1)
  const currentWidth = tag.value[currentSelectedIndex.value].$el.clientWidth
  const containerWidth = scrollbar.value!.clientWidth
  const totalWidth = nowArr.reduce((pre, cur):number => {
    return pre + cur.$el.clientWidth + space
  }, 0)
  if (totalWidth > containerWidth) {
    scrollbarRef.value?.setScrollLeft(currentWidth)
  }
})
</script>
<template>
  <div class="scrollbar-container">
    <el-scrollbar ref="scrollbarRef">
      <div class="scrollbar-item" ref="scrollbar">
        <el-space :size="space">
          <el-tag
            v-for="(item, i) in tags"
            :key="item.title"
            :ref="el => {
              if (el) tag[i] = el;
            }
          "
            closable
            :effect="effectMode(item.title)">
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
    max-width: calc(100vw - 200px);
    height: 50px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    border-bottom: 1px solid #d8dce5;
  }
  .scrollbar-item {
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 35px;
    padding-right: 100px;
  }
</style>
