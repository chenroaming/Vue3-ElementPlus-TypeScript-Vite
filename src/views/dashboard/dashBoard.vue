<script setup lang='ts' name="DashBoard">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'
import { testApi } from '@/api/test'
const isLoading = ref(false)
const $route:RouteLocationNormalized = useRoute()
const pages = computed(() => {
  // 增加一个类型守卫，因为name可能为非string类型
  return typeof $route.name === 'string' ? `This is ${$route.name} page` : ''
})
const buttonText = computed(() => {
  return isLoading.value ? '接口请求中...' : 'mock接口测试'
})
const bodyStyle = ({
  textAlign: 'center'
})
const test = async () => {
  isLoading.value = true
  await testApi()
  isLoading.value = false
}
</script>
<template>
  <el-card shadow="hover" :body-style="bodyStyle">{{ pages }}</el-card>
  <el-button type="primary" style="margin: 20px 0;" @click="test" :loading="isLoading" size="mini">{{ buttonText }}</el-button>
</template>
