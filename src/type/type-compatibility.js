"use strict";
// type-compatibility 类型兼容
// 当一个类型Y可以被赋值给另一个类型X时，类型X兼容类型Y
// X兼容Y:X（目标类型）=Y（源类型）
Object.defineProperty(exports, "__esModule", { value: true });
exports.C = void 0;
let s = 'a';
let x = { a: 1, b: 2 };
let y = { a: 1, b: 2, c: 3 };
x = y; // x兼容y 鸭式辨型法
function hof(handler) {
    return handler;
}
// 1.参数个数
let handler1 = (a) => { };
hof(handler1);
let handler2 = (a, b, c) => { };
// hof(handler2) // 报错，参数太多
// 固定参数，可选参数和剩余参数
let a = (p1, p2) => { };
let b = (p1, p2) => { };
let c = (...args) => { };
// 固定参数兼容可选参数和剩余参数
a = b;
a = c;
// b = a // 报错,可选参数不兼容固定参数和剩余参数
// b = c // 设置strictFunctionTypes为false可以关闭报错
// 剩余参数兼容可选参数和固定参数
c = a;
c = b;
// 2.参数类型
let handler3 = (a) => { };
let p3d = (point) => { };
let p2d = (point) => { };
p3d = p2d;
// p2d=p3d
// 报错，参数少的不兼容参数多的，设置strictFunctionTypes为false可以关闭报错
// 函数参数双向协变
// 3.返回值类型
let f = () => ({ name: 'Alice' });
let g = () => ({ name: 'Alice', location: 'Beijing' });
// 返回结构少的兼容返回多的
f = g;
function overload(a, b) { } // 源函数：兼容目标函数
// 枚举兼容性 跟数字类型兼容
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
})(Fruit || (Fruit = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
})(Color || (Color = {}));
let fruit = 3;
let no = Fruit.Apple;
// 枚举之间是不兼容的
// let color: Color.Red = Fruit.Apple
// 类兼容性 构造函数与静态成员不参与比较
class A {
    constructor(p, q) {
        this.id = 1;
        // 私有成员，只有父类和子类能兼容
        this.name = '';
    }
}
class B {
    constructor(p) {
        this.id = 2;
    }
}
B.s = 1;
let aa = new A(1, 2);
let bb = new B(1);
// aa = bb
// bb = aa
class C extends A {
}
exports.C = C;
let cc = new C(1, 2);
aa = cc;
cc = aa;
// let obj1: Empty<number> = {}
// let obj2: Empty<string> = {}
// obj1=obj2 // 报错，使用了泛型变量，不兼容
// obj2=obj1
let log1 = (x) => {
    console.log('x');
    return x;
};
let log2 = (y) => {
    console.log('y');
    return y;
};
// 没有指定类型参数，完全兼容
log1 = log2;
log2 = log1;
