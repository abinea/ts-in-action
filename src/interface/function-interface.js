"use strict";
// 定义函数类型
// 1.变量类型定义
// let add: (x: number, y: number) => number
let add = (x, y) => x + y;
function getLib() {
    let lib = (() => { });
    lib.version = '1.0';
    lib.doSomething = () => { };
    return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();
console.log(lib1 === lib2); // false
