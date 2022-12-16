<script setup lang='ts' name="SystemConfig">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import {
  Tools
} from '@element-plus/icons-vue'
import waterMark from '@/utils/waterMark'
interface SystemConfig {
  isWaterMark: boolean
  waterMarkText: string
}
const drawer = ref(false)
const openDrawer = () => {
  drawer.value = true
}
let systemConfig = reactive({
  isWaterMark: false,
  waterMarkText: 'vue-elementPlus-template'
})

const cancelClick = () => {
  drawer.value = false
}
const confirmClick = () => {
  localStorage.setItem('vue-elementPlus-template-systeConfig', JSON.stringify(systemConfig))
  ElMessage({
    message: '保存成功！',
    type: 'success'
  })
}

const watermarkConfig = (val:boolean) => {
  val ? waterMark.set(systemConfig.waterMarkText) : waterMark.del()
}
if (localStorage.getItem('vue-elementPlus-template-systeConfig')) {
  systemConfig = reactive(JSON.parse(localStorage.getItem('vue-elementPlus-template-systeConfig') as string) as SystemConfig)
  watermarkConfig(systemConfig.isWaterMark)
}
</script>
<template>
  <el-button
    :icon="Tools"
    size="small"
    circle
    @click="openDrawer" />
  <el-drawer v-model="drawer" direction="rtl" size="20%">
    <template #title>
      <h4>系统设置system setting</h4>
    </template>
    <template #default>
      <el-row>
        <el-col :span="8">水印</el-col>
        <el-switch
          v-model="systemConfig.isWaterMark"
          @change="watermarkConfig"
          size="small"
        />
      </el-row>
      <el-row>
        <el-col :span="8">水印文字</el-col>
        <ec-col :span="16">
          <el-input v-model="systemConfig.waterMarkText" size="small" placeholder="请输入水印文字" />
        </ec-col>
      </el-row>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="confirmClick">保存</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style scoped lang = "scss">
  .el-row {
    margin-bottom: 20px;
  }
</style>
