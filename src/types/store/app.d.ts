import type { RouteRecordRaw } from 'vue-router'

export interface State {
  isCollapse: boolean,
  asyncRouter: RouteRecordRaw[]
}
