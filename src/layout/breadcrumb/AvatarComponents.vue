<script setup lang='ts' name="AvatarComponents">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
const { dispatch, getters } = useStore()
const circleUrl = '/src/assets/images/GitHub-Mark-64px.png'
const dialogVisible = ref<boolean>(false)
const userInfo = computed(() => {
  return {
    userName: getters['user/userInfo'].userName,
    roles: getters['user/roles'].join('，')
  }
})
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
      <el-col :span="8">姓名（name）：</el-col>
      <el-col :span="16">{{ userInfo.userName }}</el-col>
    </el-row>
    <el-row class="margin-bottom-20 bold f-20">
      <el-col :span="8">角色（role）：</el-col>
      <el-col :span="16">{{ userInfo.roles }}</el-col>
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
