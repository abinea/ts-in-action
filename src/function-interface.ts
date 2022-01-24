// 定义函数类型
// 1.变量类型定义
// let add: (x: number, y: number) => number

// 2.函数接口
// interface Add {
//   (x: number, y: number): number
// }

// 3.类型别名
type Add = (x: number, y: number) => number
let add: Add = (x, y) => x + y

// 混合类型接口
interface Lib {
  (): void
  version: string
  doSomething(): void
}

function getLib() {
  let lib: Lib = (() => {}) as Lib
  lib.version = '1.0'
  lib.doSomething = () => {}
  return lib
}

let lib1 = getLib()
lib1()
lib1.doSomething()
let lib2 = getLib()
console.log(lib1 === lib2) // false
