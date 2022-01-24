// generics 泛型，不预先确定数据类型，具体类型在使用时才能确定
// 灵活的类型策略同时保证类型约束
// T 泛型变量（也可以用其他字母）
// function log<T>(value: T): T {
//   console.log(value)
//   return value
// }

//调用方式
// log<string[]>(['a', 'b'])
// log(['a', 'b'])

// 泛型函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log

// 泛型函数接口
// interface Log {
//   <T>(value: T): T
// }

//泛型接口 泛型变量约束整个接口的成员，可以指定默认类型
// interface Log<T = string> {
//   (value: T): T
// }
// let myLog: Log = log
// myLog('1')

// 泛型类 泛型变量约束整个类的成员
class Log<T> {
  // 泛型不能用于类的静态成员
  run(value: T) {
    console.log(value)
    return value
  }
}
let log1 = new Log<number>()
log1.run(1)
let log2 = new Log()
log2.run('1')

// 泛型变量继承接口
interface Length {
  length: number
}
// 传入的类型必须有length属性
function log<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}
log([1])
log('123')
log({ length: 1 })
