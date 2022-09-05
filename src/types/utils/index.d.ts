import type { AxiosRequestConfig } from 'axios'
export interface Maps {
  [k:string]: unknown
}

export interface AxiosRqConfig extends AxiosRequestConfig {
  showTips?: boolean // 是否弹窗提示的开关
}
