<script setup lang='ts' name="Layout">
import SideBar from './sideBar/SideBar.vue'
</script>

<template>
 <div class="t">
  <SideBar />
 </div>
</template>

<style scoped lang = "scss">
  .t {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &-main {
      width: 100%;
      max-width: calc(100% - 63px);
      min-width: calc(100% - 200px);
      height: 100vh;
      &-app {
        width: 100%;
        height: calc(100vh - 60px);
      }
    }
  }
</style>
