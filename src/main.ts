import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.scss' // 引入一些基础样式
const app = createApp(App)

app.use(router)

app.mount('#app')
