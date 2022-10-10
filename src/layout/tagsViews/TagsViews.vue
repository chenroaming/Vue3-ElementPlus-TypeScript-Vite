<script setup lang='ts' name="TagsView">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
const $route = useRoute()
watch($route, cur => {
  console.log(cur)
})
</script>
<template>
  <div class="scrollbar-container">
    <el-scrollbar>
      <div class="scrollbar-item">
        <el-space :size="20">
          <el-tag
            v-for="item in 50"
            :key="item"
            closable
            type="success">
            {{ item }}
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
