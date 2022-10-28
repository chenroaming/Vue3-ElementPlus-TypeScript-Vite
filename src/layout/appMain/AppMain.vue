<script setup lang='ts' name="AppMain">
import { useRoute } from 'vue-router'
const $route = useRoute()
</script>
<template>
 <div class="appMain">
  <el-scrollbar>
    <router-view v-slot="{ Component }">
      <Transition name="slide-transform" appear mode="out-in">
        <component :is="Component" :key="$route.path" />
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
