interface Human {
  // new (name: string): void
  name: string
  eat(): void
}

// implements 类实现接口
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  // name属性和eat方法必须实现且为public成员，即接口只能约束类的公有成员
  name: string
  eat() {}
  // 可以添加自己的成员
  sleep() {}
}

// 接口继承接口
interface Man extends Human {
  run(): void
}

// 接口可以继承多个，用逗号隔开
interface Child {
  cry(): void
}
interface Boy extends Man, Child {}
let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {},
}

// 接口继承类 即把类成员抽象出来，包括私有和受保护成员等
// 如果存在私有和受保护成员等，只能通过继承该类实现继承该类的接口
class Auto {
  state = 1
}
interface AutoInterface extends Auto {}
class C implements AutoInterface {
  state = 1
}
// Bus类继承了Auto类的state属性，即实现了AutoInterface接口
class Bus extends Auto implements AutoInterface {}
