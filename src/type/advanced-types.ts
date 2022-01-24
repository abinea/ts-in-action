// 交叉类型 & 取所有类型的并集
interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
}

// union-types 联合类型 | 可以是多个类型（或字面量）中的一个，一般只能访问交集
export let a: number | string = 'a'
export let b: 'a' | 'b' | 'c'
export let c: 1 | 2 | 3

export class Dog implements DogInterface {
  run() {}
  eat() {}
}
export class Cat implements CatInterface {
  jump() {}
  eat() {}
}
enum Master {
  Boy,
  Girl,
}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog() : new Cat()
  // 类型不确定，只能访问共有成员
  pet.eat()
  // pet.run()
  return pet
}

// 可区分的联合类型 利用共有成员创建不同类型保护区块
interface Square {
  kind: 'square'
  size: number
}
interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}
interface Circle {
  kind: 'circle'
  r: number
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.height * s.width
    case 'circle':
      return Math.PI * s.r * s.r
    default:
      // 检查s是不是never类型
      // 如果是，说明前面没有未处理的类型，该分支不会被用到
      return ((e: never) => {
        throw new Error(e)
      })(s)
  }
}
// 没有处理Circle类型的逻辑但没有报错
// 解决：
// 1.指定返回值的类型
// 2.利用never类型
console.log(area({ kind: 'circle', r: 1 }))

// index-types 索引类型
let obj = {
  a: 1,
  b: 2,
  c: 3,
}
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key])
}
console.log(getValues(obj, ['a', 'b']))
// console.log(getValues(obj, ['d', 'e'])) // 结果为undefined[]

// keyof T T所有公共属性的字面量的联合类型
interface Obj {
  a: number
  b: string
}
let key: keyof Obj

// T[K] 索引访问操作符 T[K]的类型
let value: Obj['a']

// T extends U

// 映射类型 预先定义的泛型接口
interface Obj2 {
  a: string
  b: number
  c: boolean
}

// 同态映射类型 没有创建新的属性
// Readonly 设置全部只读
type ReadonlyObj = Readonly<Obj2>
// Partial 设置全部可选
type PartialObj = Partial<Obj2>
// Pick 抽出子集
type PickObj = Pick<Obj2, 'a' | 'b'>

// 非同态
// Record 创建对应类型的参数
type RecordObj = Record<'x' | 'y', Obj2>

// 条件类型
// T extends U ? X : Y
type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object'
type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>

// 类型过滤
type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | 'b' | 'c'
// 'b' | 'c'

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U> 同Diff
// NotNullable<T> 同NotNUll
// Extract<T, U> 与Exclude相反，取可extends U的类型
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T>
type T7 = ReturnType<() => string>
