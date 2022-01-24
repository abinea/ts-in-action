// 与namespace-a.ts中的Shape空间是共享的
// 注意命名空间合并规则：不能重复声明
/// <reference path='namespace-a.ts' />
namespace Shape {
  export function square(x: number) {
    return x * x
  }
}
console.log(typeof Shape.circle)
console.log(Shape.square(1))
