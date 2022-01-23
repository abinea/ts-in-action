// interface 约束对象，函数，类的结构和类型
interface List {
  readonly id: number
  name: string
  // [x: string]: any
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++ // 报错，只读属性不能修改值
  })
}

let result = {
  data: [
    {
      id: 1,
      name: 'A',
      // ts允许存在约定外的字段，原因是duck type（鸭式辨型法）
      sex: 'Male',
    },
    {
      id: 2,
      name: 'B',
      age: 12,
    },
  ],
}

render(result)

// render({
//   data: [
//     {
//       id: 1,
//       name: 'A',
//       sex: 'Male', // 直接传字面量会报错，此时ts会对实参作类型检查
//       success: 'true',
//     },
//     {
//       id: 2,
//       name: 'B',
//     },
//   ],
// })

// 避开类型检查：
// 1.将字面量赋值给变量，再传变量
// 2.类型断言 告诉编译器我们明确知道参数的类型，这样可以绕过类型检查
//   后面加 as type/interface 或 前面加 <type/interface>
//   建议第一种，因为第二种在React会产生歧义
// 3.字符串索引签名 [x: string]: any
//   用任意的字符串去索引List得到任意类型的结果，添加后支持任意多个属性

interface StringArray {
  // 用任意数字去索引StringArray都会得到一个字符串
  [index: number]: string
}

let chars: StringArray = ['A', 'B']
console.log(chars[4]) // undefined

interface Names {
  // 用任意字符串去索引Names都会得到一个字符串
  [x: string]: string
  // y:number //报错：索引值被确定为string类型
  // 索引可以混用，但是数字索引的返回值类型得是字符串索引返回值的子类型
  // 因为js底层将索引的数字转换为字符串
  [y: number]: string
}
