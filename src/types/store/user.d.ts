import type { UserInfo } from '@/types/response/user'
export interface State {
  isLogin: boolean,
  token: string,
  roles: string[],
  userInfo: UserInfo
}
