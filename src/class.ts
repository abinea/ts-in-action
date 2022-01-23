// class
// ts中类的成员属性是实例属性，成员方法是类原型上的方法
// 成员属性必须有初始值或在构造函数中被初始化
class Dog {
  // private constructor 构造函数私有，不能被实例化，不能被继承
  // protected constructor 构造函数受保护，不能被实例化，只能被继承（基类）
  constructor(name: string) {
    this.name = name
  }
  // 类成员修饰符 默认都为public，也可以显式声明
  public name: string
  // name?: string = 'dog'
  run() {
    console.log('run')
  }
  // private 只能被类访问，不能被实例访问，不能被子类继承
  private pri() {}
  // protected 能被类访问，也能被子类访问，不能被实例访问
  protected pro() {}
  // readonly 只读属性，不能被更改，必须初始化
  readonly legs: number = 4
  // static 静态成员只能通过类名调用，可以被继承
  static food: string = 'bones'
}

console.log(Dog.prototype)
// {constructor: ƒ, run: ƒ}
let dog = new Dog('wangwang')
console.log(dog)
// Dog {name: 'wangwang'}
// dog.pri() // 报错，方法私有
// dog.pro() // 报错，方法受保护

// 继承 子类constructor必须调用super()
class Husky extends Dog {
  // 构造函数参数使用修饰符，就可以不声明成员属性
  constructor(name: string, public color: string) {
    super(name)
    // this必须在super调用后
    this.color = color
    // this.pri() // 报错，方法私有
    this.pro()
  }
  // color: string
}

// console.log(Dog.food, Husky.food)

// 抽象类 不能实例化，只能被继承
// 抽出对象的共性，有利于复用
abstract class Animal {
  eat() {
    console.log('eat')
  }
  // 抽象方法 不指定实现，由子类实现（多态）
  abstract sleep(): void
}
// let animal=new Animal() // 报错，抽象类不能被实例化

class Dog2 extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}
let dog2 = new Dog2('wangwang')
dog2.eat()

class Cat extends Animal {
  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog2, cat]
animals.forEach((i) => {
  i.sleep() // 方法执行由对象所属类决定（多态）
})

// this类型 类的成员方法返回this可实现链式调用
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2()
// this类型的多态 子类成员方法返回this，能链式调用父类和子类方法
class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
new MyFlow().next().step1().next().step2()
