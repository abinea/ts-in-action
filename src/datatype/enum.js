"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.f = void 0;
// enum 枚举类型是一堆有名字的常量集合
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
console.log(Role.Reporter); // 0
console.log(Role);
// Object
// 0: "Reporter"
// 1: "Developer"
// 2: "Maintainer"
// 3: "Owner"
// 4: "Guest"
// Developer: 1
// Guest: 4
// Maintainer: 2
// Owner: 3
// Reporter: 0
// [[Prototype]]: Object
// 对象枚举实现原理：反向映射，可以用对应值作索引取到值
// 转译成js：
// var Role
// ;(function (Role) {
//   Role[(Role['Reporter'] = 1)] = 'Reporter'
//   Role[(Role['Developer'] = 2)] = 'Developer'
//   Role[(Role['Maintainer'] = 3)] = 'Maintainer'
//   Role[(Role['Owner'] = 4)] = 'Owner'
//   Role[(Role['Guest'] = 5)] = 'Guest'
// })(Role || (Role = {}))
//字符串枚举不存在反向映射
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u5F88\u9057\u61BE\uFF0C\u4F60\u5931\u8D25\u4E86";
})(Message || (Message = {}));
console.log(Message);
// Object
// Fail: "很遗憾，你失败了"
// Success: "恭喜你，成功了"
// [[Prototype]]: Object
// 异构枚举
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "Yes";
})(Answer || (Answer = {}));
console.log(Answer);
// Object
// 0: "N"
// N: 0
// Y: "Yes"
// [[Prototype]]: Object
// 枚举成员 定义后不能修改
// Role.Reporter=2 // 报错
var Char;
(function (Char) {
    // const：常量枚举 编译时就确定值
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    // computed：计算枚举 非常量的表达式，运行时才确定值
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    // f, //报错，计算枚举之后需要赋初值，常量则可不赋值，默认为前一个枚举的递增
})(Char || (Char = {}));
// 常量枚举的作用 用作常量，减少编译时的代码
let month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
// 转译成js：
// var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
// 枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
let e = 3;
exports.f = 3;
console.log(e); // 3
// e===f // 报错，不同类型无法比较
let e1 = 1;
let e2 = 1;
// e1===e2 // 报错，不同枚举成员类型无法比较
let e3 = 1;
console.log(e1 === e3); // true
let g1 = G.b; // 取值只能是字符串枚举的成员
let g2 = G.a; // 取值只能是G.a
