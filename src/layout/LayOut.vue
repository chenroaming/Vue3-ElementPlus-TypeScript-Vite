<script setup lang='ts' name="Layout">
import SideBar from './sideBar/SideBar.vue'
import HeaderContainer from './header/HeaderContainer.vue'
import TagsViews from './tagsViews/TagsViews.vue'
import AppMain from './appMain/AppMain.vue'
</script>

<template>
 <div class="t">
  <SideBar />
  <div>
    <HeaderContainer />
    <TagsViews />
    <AppMain />
  </div>
 </div>
</template>

<style scoped lang = "scss">
  .t {
    display: flex;
    width: 100%;
    height: 100vh;
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
