"use strict";
// 类型推断
// 从左到右
let a1 = 1;
let b1 = [1, null];
let c1 = (x = 1) => x + 1;
// 从右推左
window.onkeydown = (event) => {
    console.log(event);
};
// 1.literal as type/interface
// let foo={} as Foo;
// foo.bar = 1
// 2.<type/interface>literal
//定义对象建议使用类型
let foo = {
    bar: 1,
};
