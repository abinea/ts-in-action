// 类型注解 data:type ts不建议使用any类型
// 类型推断 ts允许不使用类型注解，编译器会推断相应的变量类型

// 原始数据类型
// number
let num: number = 1
// string
let str: string = 'str'
// 不允许转换类型
// str=123 // 报错
// boolean
let bool: boolean = false

// symbol
let sym: Symbol = Symbol()

// Object 注解里的属性要字面量属性同名
let obj: { a: number; b: number } = { a: 1, b: 2 }
// 不要使用中括号，因为中括号有计算属性，因此会把中括号中的a看成变量
obj.a = 3

// Array
let arr: number[] = [1, 2]
let arr2: Array<number> = [1, 2]
// 联合类型 string|number:可以是string类型，也可以是number类型
let arr3: (string | number)[] = [1, '2']
let arr4: Array<string | number> = ['1', 1]

// Function
let fn: (x: number, y: number) => number
fn = (a, b) => a + b
let fn2 = (x: string, y: string) => `${x} ${y}`

// Tuple 特殊的数组，限定了元素类型，位置，以及个数
let tp: [string, number] = ['1', 2]
// 元组越界问题 原因是ts建立在js之上
tp.push(1)
console.log(tp) // ['1',2,1]
// 目前解决方式：禁止访问
// tp[2] //报错

// undefined 声明undefined类型后值只能是undefined，null同理
let un: undefined = undefined
// null
let nu: null = null

// void js中void是操作符，使任意表达式返回undefined
// js中undefined不是保留字，可以将undefined作为变量名
// ts中void为函数没有任何返回值
let voidFn = () => {}

// any 任意类型，相当于js
let x

//never 永远不会有返回值的类型
let errFn = () => {
  throw new Error('it is a error')
}
let endless = () => {
  while (true) {}
}
