import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.scss' // 引入一些基础样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 即使是按需引入，也需要导入全部样式
import 'element-plus/dist/index.css'
import { mockXHR } from './mock'
const app = createApp(App)
app.use(store)
app.use(router)
// mockjs模拟接口数据引入
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}
// 批量导入elementPlus的图表库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
