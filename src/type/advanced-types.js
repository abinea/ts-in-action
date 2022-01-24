"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.c = exports.b = exports.a = void 0;
let pet = {
    run() { },
    jump() { },
};
// union-types 联合类型 | 可以是多个类型（或字面量）中的一个，一般只能访问交集
exports.a = 'a';
class Dog {
    run() { }
    eat() { }
}
exports.Dog = Dog;
class Cat {
    jump() { }
    eat() { }
}
exports.Cat = Cat;
var Master;
(function (Master) {
    Master[Master["Boy"] = 0] = "Boy";
    Master[Master["Girl"] = 1] = "Girl";
})(Master || (Master = {}));
function getPet(master) {
    let pet = master === Master.Boy ? new Dog() : new Cat();
    // 类型不确定，只能访问共有成员
    pet.eat();
    // pet.run()
    return pet;
}
function area(s) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.height * s.width;
        case 'circle':
            return Math.PI * s.r * s.r;
        default:
            // 检查s是不是never类型
            // 如果是，说明前面没有未处理的类型，该分支不会被用到
            return ((e) => {
                throw new Error(e);
            })(s);
    }
}
// 没有处理Circle类型的逻辑但没有报错
// 解决：
// 1.指定返回值的类型
// 2.利用never类型
console.log(area({ kind: 'circle', r: 1 }));
// index-types 索引类型
let obj = {
    a: 1,
    b: 2,
    c: 3,
};
function getValues(obj, keys) {
    return keys.map((key) => obj[key]);
}
console.log(getValues(obj, ['a', 'b']));
let key;
// T[K] 索引访问操作符 T[K]的类型
let value;
