export default [
  {
    url: '/Vue3-ElementPlus-TypeScript-Vite/test/testApi',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        message: '请求测试接口成功！'
      }
    }
  }
]
