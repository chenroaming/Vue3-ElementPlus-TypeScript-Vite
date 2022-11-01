/*
 * @Description:axios文件封装类型声明文件
 * @Author: chenroaming
 * @Date: 2022-11-01 16:57:33
 * @LastEditors: chenroaming
 * @LastEditTime: 2022-11-01 17:14:46
 */

export declare interface ModuleItem {
  [k: string]: (data:object) => unknown
}
export declare interface ApiModule {
  [k: string]: moduleItem
}
