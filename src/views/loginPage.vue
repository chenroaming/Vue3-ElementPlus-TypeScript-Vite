<script setup lang='ts' name="LoginPage">
import { ref, reactive } from 'vue'
import { login } from '@/api/user'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import type { LoginParams } from '@/types/request/user'
const { dispatch } = useStore()
const { push } = useRouter()
const isLoading = ref(false)
const form = reactive<LoginParams>({ userName: '', pwd: '' })
const loginForm = ref<FormInstance>()
const rules = ref<FormRules>({
  userName: [{ required: true, message: '请输入用户名', trigger: ['blur', 'change'] }],
  pwd: [{ required: true, message: '请输入密码', trigger: ['blur', 'change'] }]
})
const handleSubmit = () => {
  if (!loginForm.value) return false
  loginForm.value.validate(async valid => {
    if (!valid) return false
    isLoading.value = true
    const res = await login({
      ...form
    }).finally(() => { isLoading.value = false })
    if (res.data.code === 20000) {
      dispatch('user/setLogin', res.data.data)
      push('/')
    }
  })
}
</script>
<template>
 <div class="login">
    <div class="login-form">
      <div class="login-form-title">Vue3-ElementPlus-TypeScript-Template-Vite</div>
      <div class="login-form-main">
        <el-form ref="loginForm" :model="form" :rules="rules">
          <el-form-item prop="userName">
            <el-input v-model="form.userName" clearable :maxlength="16">
              <template #append>
                <el-icon>
                  <UserFilled />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input v-model="form.pwd" show-password clearable :maxlength="16">
              <template #append>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%;" :loading="isLoading" @click="handleSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped lang = "scss">
.login {
  background-image: url("../assets/images/login-background.jpg");
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-form {
    width: 600px;
    height: 350px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    &-title {
      width: 80%;
      margin: 15px 0;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }
    &-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 80%;
    }
  }
}
</style>
