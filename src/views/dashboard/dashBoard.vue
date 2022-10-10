<script setup lang='ts' name="DashBoard">
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'
import type { KIsStringVIsString } from '@/types/utils'
const $route:RouteLocationNormalized = useRoute()
const pages = computed<string>(() => {
  // 增加一个类型守卫，因为name可能为非string类型
  return typeof $route.name === 'string' ? `This is ${$route.name} page` : ''
})
const bodyStyle = reactive<KIsStringVIsString>({
  textAlign: 'center'
})
</script>
<template>
  <el-card shadow="hover" :body-style="bodyStyle">{{ pages }}</el-card>
</template>
