// 与namespace-b.ts中的Shape空间是共享的
namespace Shape {
  const pi = Math.PI
  export let circle = (r: number) => {
    return pi * r ** 2
  }
}
