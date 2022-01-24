// 类型推断
// 从左到右
let a1 = 1
let b1 = [1, null]

let c1 = (x = 1) => x + 1

// 从右推左
window.onkeydown = (event) => {
  console.log(event)
}

// 类型断言
interface Foo {
  bar: number
}
// let foo={} as Foo;
// foo.bar = 1
let foo: Foo = {
  bar: 1,
}

// 类型兼容性
// 当一个类型Y可以被赋值给另一个类型X时，类型X兼容类型Y
// X兼容Y:X（目标类型）=Y（源类型）

let s: string = 'a'
// s = null 设置strictNullChecks为false成立

//接口兼容性
interface X {
  a: any
  b: any
}
interface Y {
  a: any
  b: any
  c: any
}
let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }
x = y // x兼容y 鸭式辨型法

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}

// 1.参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2) // 报错，参数太多

// 固定参数，可选参数和剩余参数
let a = (p1: number, p2: number) => {}
let b = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}
// 固定参数兼容可选参数和剩余参数
a = b
a = c
// b = a // 报错,可选参数不兼容固定参数和剩余参数
// b = c // 设置strictFunctionTypes为false可以关闭报错
// 剩余参数兼容可选参数和固定参数
c = a
c = b

// 2.参数类型
let handler3 = (a: string) => {}
// hof(handler3) // 报错，类型不兼容

interface Point3D {
  x: number
  y: number
  z: number
}
interface Point2D {
  x: number
  y: number
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d
// p2d=p3d
// 报错，参数少的不兼容参数多的，设置strictFunctionTypes为false可以关闭报错
// 函数参数双向协变

// 3.返回值类型
let f = () => ({ name: 'Alice' })
let g = () => ({ name: 'Alice', location: 'Beijing' })
// 返回结构少的兼容返回多的
f = g
// g = f // 报错

// 函数重载
function overload(a: number, b: number): number //目标函数
function overload(a: string, b: string): string //目标函数
function overload(a: any, b: any): any {} // 源函数：兼容目标函数

// 枚举兼容性 跟数字类型兼容
enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red,
  Yellow,
}
let fruit: Fruit = 3
let no: number = Fruit.Apple
// 枚举之间是不兼容的
// let color: Color.Red = Fruit.Apple

// 类兼容性 构造函数与静态成员不参与比较
class A {
  constructor(p: number, q: number) {}
  id: number = 1
  // 私有成员，只有父类和子类能兼容
  private name: string = ''
}
class B {
  static s = 1
  constructor(p: number) {}
  id: number = 2
}
let aa = new A(1, 2)
let bb = new B(1)
// aa = bb
// bb = aa
export class C extends A {}
let cc = new C(1, 2)
aa = cc
cc = aa

// 泛型兼容性
interface Empty<T> {
  // 泛型接口内不使用泛型变量，相互兼容
  value: T
}
// let obj1: Empty<number> = {}
// let obj2: Empty<string> = {}
// obj1=obj2 // 报错，使用了泛型变量，不兼容
// obj2=obj1

let log1 = <T>(x: T): T => {
  console.log('x')
  return x
}
let log2 = <U>(y: U): U => {
  console.log('y')
  return y
}
// 没有指定类型参数，完全兼容
log1 = log2
log2 = log1

// type protection
enum Type {
  Strong,
  Week,
}

class Java {
  helloJava() {
    console.log('Hello Java')
  }
  java: any
}
class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript')
  }
  javascript: any
}
// data is type 这种返回值叫类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  // lang是Java和JavaScript的联合类型
  // 需要类型断言，但可读性很差
  // if ((lang as Java).helloJava) {
  //   ;(lang as Java).helloJava()
  // } else {
  //   ;(lang as JavaScript).helloJavaScript()
  // }

  // 类型保护
  // 1.instanceof 是...的实例
  // if (lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 2.in 属于某个对象的属性
  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 3.typeof 判断类型
  // if (typeof x === 'string') {
  //   x.length
  // } else {
  //   x.toFixed()
  // }

  // 4.类型保护函数
  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  return lang
}
// getLanguage(Type.Strong)
