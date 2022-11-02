import Cookie from 'js-cookie'
interface LoginConfigBody {
  userName: string,
  pwd: string
}
interface LoginConfig {
  body: LoginConfigBody
}
interface TokenItem {
  token: string,
  password: string
}
interface Tokens {
  [k:string]: TokenItem
}
const tokens: Tokens = {
  // 用户名和密码
  admin: {
    token: 'admin_token',
    password: 'admin123'
  },
  editor: {
    token: 'editor_token',
    password: 'editor123'
  }
}
interface UserInfoItem {
  roles: string[],
  introduction: string,
  avatar: string,
  name: string
}

interface UserInfo {
  [k:string]: UserInfoItem
}

const users:UserInfo = {
  admin_token: {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级管理员'
  },
  editor_token: {
    roles: ['editor'],
    introduction: 'I am a editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '编辑者'
  }
}

export default [
  // user login
  {
    url: '/Vue3-ElementPlus-TypeScript-Vite/user/login',
    type: 'post',
    response: (config:LoginConfig) => {
      const { userName, pwd } = config.body
      const token = tokens[userName]
      const password = tokens[userName]
      // mock error
      if (!token || !password || pwd !== password.password) {
        return {
          code: 60204,
          message: '账户名或密码错误'
        }
      }

      return {
        code: 20000,
        message: '登录成功',
        data: token
      }
    }
  },

  // user logout
  {
    url: '/Vue3-ElementPlus-TypeScript-Vite/user/logout',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  // user roles
  {
    url: '/Vue3-ElementPlus-TypeScript-Vite/user/getRoles',
    type: 'get',
    response: () => {
      const token:string | undefined = Cookie.get('Vue3-ElementPlus-TypeScript-Vite-token')
      const { roles } = typeof token === 'string'
        ? users[token]
        : { roles: [] }
      return {
        code: 20000,
        data: roles,
        message: '获取成功'
      }
    }
  }
]
