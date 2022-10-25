/*
 * @Description: 侧边菜单栏相关的类型声明
 * @Author: chenroaming
 * @Date: 2022-09-05 14:24:26
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-10-25 14:43:50
 */
import type { RouteRecordRaw } from 'vue-router'

type Meta = {
  icon?: string,
  title: string,
  roles?: string[],
  isCollapse?: boolean
}

export type NewRouteRecordRaw = RouteRecordRaw & {
  meta: Meta,
  children?: NewRouteRecordRaw[] // 路由里的children字段并不是必须的
}
