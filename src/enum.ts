// enum 枚举类型是一堆有名字的常量集合
enum Role {
  Reporter, //不赋值第一个默认值为0
  Developer, //往后依次递增1，赋值了同理
  Maintainer,
  Owner,
  Guest,
}
console.log(Role.Reporter) // 0
console.log(Role)
// Object
// 0: "Reporter"
// 1: "Developer"
// 2: "Maintainer"
// 3: "Owner"
// 4: "Guest"
// Developer: 1
// Guest: 4
// Maintainer: 2
// Owner: 3
// Reporter: 0
// [[Prototype]]: Object

// 对象枚举实现原理：反向映射，可以用对应值作索引取到值
// 转译成js：
// var Role
// ;(function (Role) {
//   Role[(Role['Reporter'] = 1)] = 'Reporter'
//   Role[(Role['Developer'] = 2)] = 'Developer'
//   Role[(Role['Maintainer'] = 3)] = 'Maintainer'
//   Role[(Role['Owner'] = 4)] = 'Owner'
//   Role[(Role['Guest'] = 5)] = 'Guest'
// })(Role || (Role = {}))

//字符串枚举不存在反向映射
enum Message {
  Success = '恭喜你，成功了',
  Fail = '很遗憾，你失败了',
}
console.log(Message)
// Object
// Fail: "很遗憾，你失败了"
// Success: "恭喜你，成功了"
// [[Prototype]]: Object

// 异构枚举
enum Answer {
  N,
  Y = 'Yes',
}
console.log(Answer)
// Object
// 0: "N"
// N: 0
// Y: "Yes"
// [[Prototype]]: Object

// 枚举成员 定义后不能修改
// Role.Reporter=2 // 报错
enum Char {
  // const：常量枚举 编译时就确定值
  a, // 1.没有初始值
  b = Char.a, // 2.对已有枚举成员的引用
  c = 1 + 3, // 3.常量表达式
  // computed：计算枚举 非常量的表达式，运行时才确定值
  d = Math.random(),
  e = '123'.length,
  // f, //报错，计算枚举之后需要赋初值，常量则可不赋值，默认为前一个枚举的递增
}

// 转译成js：
// var Char
// ;(function (Char) {
//   //const
//   Char[(Char['a'] = 0)] = 'a'
//   Char[(Char['b'] = 0)] = 'b'
//   Char[(Char['c'] = 4)] = 'c'
//   // computed
//   Char[(Char['d'] = Math.random())] = 'd'
//   Char[(Char['e'] = '123'.length)] = 'e'
// })(Char || (Char = {}))

// 常量枚举 编译阶段会被移除
const enum Month {
  Jan,
  Feb,
  Mar,
}
// 常量枚举的作用 用作常量，减少编译时的代码
let month = [Month.Jan, Month.Feb, Month.Mar]
// 转译成js：
// var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];

// 枚举类型
enum E {
  a,
  b,
}
enum F {
  a = 0,
  b = 1,
}
enum G {
  a = 'apple',
  b = 'banana',
}

let e: E = 3
let f: F = 3
console.log(e) // 3

// e===f // 报错，不同类型无法比较

let e1: E.a = 1
let e2: E.b = 1
// e1===e2 // 报错，不同枚举成员类型无法比较
let e3: E.a = 1
console.log(e1 === e3) // true

let g1: G = G.b // 取值只能是字符串枚举的成员
let g2: G.a = G.a // 取值只能是G.a
