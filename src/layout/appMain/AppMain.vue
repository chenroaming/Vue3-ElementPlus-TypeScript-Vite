<script setup lang='ts' name="AppMain">
import { useRoute } from 'vue-router'
const $route = useRoute()
</script>
<template>
 <div class="appMain">
  <el-scrollbar>
    <router-view v-slot="{ Component }">
      <Transition appear name="slide-transform" mode="out-in">
        <div :key="$route.path">
          <component :is="Component" :key="$route.path" />
        </div>
      </Transition>
    </router-view>
  </el-scrollbar>
 </div>
</template>

<style scoped lang = "scss">
  .appMain {
    width: calc(100vw - 220px);
    height: calc(100% - 80px);
    padding: 10px;
  }
</style>
