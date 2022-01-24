// import './global-lib.js'

globalLib({ x: 1 })
globalLib.doSomething()

import moduleLib from './module-lib'
moduleLib.doSomething()

// import umdLib from './umd-lib'
umdLib.doSomething()

import m from 'moment'
// 模块插件
declare module 'moment' {
  export function myFunction(): void
}
m.myFunction = () => {}

// 全局插件
declare global {
  namespace globalLib {
    function doAnything(): void
  }
}
globalLib.doAnything = () => {}
