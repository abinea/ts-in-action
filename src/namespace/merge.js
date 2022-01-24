"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = {
    x: 1,
    y: 1,
    foo(bar) {
        return bar;
    },
    // 接口合并的规则：接口内按顺序，接口间后面的声明优先于前面的声明
    // 例外：如果函数参数是字符串字面量，会被提升到整个函数的最顶端
};
// 命名空间合并
// 命名空间和函数的合并
function Lib() { }
(function (Lib) {
    Lib.version = '1.0';
})(Lib || (Lib = {}));
console.log(Lib.version);
// 命名空间和类的合并
class C {
}
(function (C) {
    C.state = 1;
})(C || (C = {}));
console.log(C.state);
// 命名空间和枚举的合并
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
(function (Color) {
    function mix() { }
    Color.mix = mix;
})(Color || (Color = {}));
console.log(Color);
// 除了枚举，函数和类与命名空间合并不能放命名空间后面
