"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = exports.G = exports.f = exports.c = exports.b = exports.a = void 0;
// 单独导出
exports.a = 1;
// 批量导出
let b = 2;
exports.b = b;
let c = 3;
exports.c = c;
// 导出函数
function f() { }
exports.f = f;
// 导出时起别名
function g() { }
exports.G = g;
// 默认导出，无需函数名
function default_1() {
    console.log("I'm default");
}
exports.default = default_1;
// 引入外部模块，重新导出
var es6_import_1 = require("./es6-import");
Object.defineProperty(exports, "hello", { enumerable: true, get: function () { return es6_import_1.str; } });
