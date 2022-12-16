<script setup lang='ts' name="Layout">
import SideBar from './sideBar/SideBar.vue'
// import HeaderContainer from './header/HeaderContainer.vue'
import TagsViews from './tagsViews/TagsViews.vue'
import AppMain from './appMain/AppMain.vue'
import BreadCrumb from './breadcrumb/BreadCrumb.vue'
import Avatar from './breadcrumb/AvatarComponents.vue'
import SystemConfig from './config/systemConfig.vue'
import ToggleClick from './toggle/toggleClick.vue'
</script>

<template>
 <div class="t">
  <SideBar />
  <div class="main">
    <!-- <HeaderContainer /> -->
    <div class="breadCrumb">
      <div class="breadCrumb-item">
        <ToggleClick />
        <BreadCrumb />
      </div>
      <div class="breadCrumb-item">
        <SystemConfig />
        <Avatar />
      </div>
    </div>
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
  .breadCrumb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #d8dce5;
    &-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
  .main {
    width: 100%;
    max-width: calc(100% - 63px);
    min-width: calc(100% - 200px);
    height: 100vh;
  }
</style>
