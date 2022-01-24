"use strict";
// implements 类实现接口
class Asian {
    constructor(name) {
        this.name = name;
    }
    eat() { }
    // 可以添加自己的成员
    sleep() { }
}
let boy = {
    name: '',
    run() { },
    eat() { },
    cry() { },
};
// 接口继承类 即把类成员抽象出来，包括私有和受保护成员等
// 如果存在私有和受保护成员等，只能通过继承该类实现继承该类的接口
class Auto {
    constructor() {
        this.state = 1;
    }
}
class C {
    constructor() {
        this.state = 1;
    }
}
// Bus类继承了Auto类的state属性，即实现了AutoInterface接口
class Bus extends Auto {
}
