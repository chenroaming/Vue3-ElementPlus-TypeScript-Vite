<script setup lang='ts' name="AppMain">

</script>
<template>
 <div class="appMain">
  <el-scrollbar>
    <router-view />
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
