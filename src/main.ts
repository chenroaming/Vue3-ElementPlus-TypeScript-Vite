import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.scss' // 引入一些基础样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(store)
app.use(router)
// 批量导入elementPlus的图表库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
