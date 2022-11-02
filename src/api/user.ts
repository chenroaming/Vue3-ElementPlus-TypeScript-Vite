import Request from '@/utils/axios'
import type { LoginParams } from '@/types/request/user'
import type { LoginRes } from '@/types/response/user'
type Response<T> = Promise<
  {
    data: T
  }
>

export function login (data:LoginParams):Response<LoginRes> {
  return Request.post(
    {
      url: '/Vue3-ElementPlus-TypeScript-Vite/user/login',
      data,
      showTips: true
    }
  )
}
