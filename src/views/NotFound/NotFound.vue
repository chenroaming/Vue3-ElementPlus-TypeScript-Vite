<script lang='ts' setup name="NotFound">
const content = 'There is nothing here.....'
</script>

<template>
  <div class="container">
    <p class="title">404</p>
    <p class="content">{{ content }}</p>
    <p class="link"><router-link to="/">Click here to go back to the Home Page</router-link></p>
  </div>
</template>

<style scoped lang = "scss">
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-weight: bold;
    font-size: 56px;
    animation: bounce; /* 动画类名 */
    animation-iteration-count: infinite; /* 重复运行 */
    animation-duration: 2s; /* don't forget to set a duration!不要忘了设置这个持续时间参数！ */
  }
  .content {
    font-size: 36px;
  }
  .link {
    font-size: 30px;
  }
</style>
