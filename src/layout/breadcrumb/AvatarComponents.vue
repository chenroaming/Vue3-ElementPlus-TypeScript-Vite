<script setup lang='ts' name="AvatarComponents">
import { ref } from 'vue'
import { useStore } from 'vuex'
const { dispatch } = useStore()
const circleUrl = '/src/assets/images/GitHub-Mark-64px.png'
const dialogVisible = ref<boolean>(false)
const logout = () => {
  dispatch('user/logout')
}
</script>
<template>
   <el-dropdown>
    <div class="avatar">
      <el-avatar :size="35" :src="circleUrl" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="dialogVisible = true">个人资料</el-dropdown-item>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dialog
    v-model="dialogVisible"
    title="个人资料"
    width="30%"
  >
    <el-row class="margin-bottom-20 bold f-20">
      <el-col :span="3">姓名：</el-col>
      <el-col :span="21">张三</el-col>
    </el-row>
    <el-row class="margin-bottom-20 bold f-20">
      <el-col :span="3">角色：</el-col>
      <el-col :span="21">法外狂徒</el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang = "scss">
  .avatar {
    margin: 0 50px;
    cursor: pointer;
  }
</style>
