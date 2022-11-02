import Request from '@/utils/axios'
import type { TestRes } from '@/types/response/test'
type Response<T> = Promise<
  {
    data: T
  }
>

export function testApi ():Response<TestRes> {
  return Request.get(
    {
      url: '/Vue3-ElementPlus-TypeScript-Vite/test/testApi',
      showTips: true
    }
  )
}
