import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.scss' // 引入一些基础样式
const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
