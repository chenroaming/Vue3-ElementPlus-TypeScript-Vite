import { createStore } from 'vuex'
import type { Maps } from '@/types/utils'
import { mapKeys } from 'lodash'
interface Module {
  [k: string]: Maps
}
// 批量导入vuex模块
// 该方法仅适用于vite搭建的工程项目
// reference：https://cn.vitejs.dev/guide/features.html#glob-import
const modules1 = import.meta.glob('./modules/*.ts', {
  import: 'default',
  eager: true
})

// 处理store模块化文件
const modules = mapKeys(modules1, (_, key) => {
  return key.split('/').pop()?.replace('.ts', '') as string
}) as Module

export default createStore({
  modules: {
    ...modules
  }
})
