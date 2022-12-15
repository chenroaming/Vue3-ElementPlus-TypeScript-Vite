export declare interface UserInfo {
  userName: string
}

export declare interface LoginData {
  token: string,
  userInfo: UserInfo
}

export declare interface LoginRes {
  code: number,
  message: string,
  data: LoginData
}

export declare interface RoleRes {
  code: number,
  message: string,
  data: string[]
}
