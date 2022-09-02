<template>
 <div class="t">
  <div class="t-main">
    <div class="t-main-app">
      <div class="t-main-app-header">

      </div>
    </div>
  </div>
 </div>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutContainer',
  setup () {
    return {

    }
  }
})
</script>

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
