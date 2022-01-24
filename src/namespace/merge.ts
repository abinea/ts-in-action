// 声明合并
// 最常见是接口的合并，如果在全局，也要注意合并
interface A {
  x: number
  // 可以重复声明，但类型必须一样
  // y: string
  foo(bar: number): number // 5
  foo(bar: 'a'): number //2
}
interface A {
  y: number
  // 函数重载列表
  foo(bar: string): string // 3
  foo(bar: number[]): number[] // 4
  foo(bar: 'b'): number //1
}
export let a: A = {
  x: 1,
  y: 1,
  foo(bar: any): any {
    return bar
  },
  // 接口合并的规则：接口内按顺序，接口间后面的声明优先于前面的声明
  // 例外：如果函数参数是字符串字面量，会被提升到整个函数的最顶端
}

// 命名空间合并

// 命名空间和函数的合并
function Lib() {}
namespace Lib {
  export let version = '1.0'
}

console.log(Lib.version)

// 命名空间和类的合并
class C {}
namespace C {
  export let state = 1
}
console.log(C.state)

// 命名空间和枚举的合并
enum Color {
  Red,
  Yellow,
  Blue,
}
namespace Color {
  export function mix() {}
}
console.log(Color)
// 除了枚举，函数和类与命名空间合并不能放命名空间后面
