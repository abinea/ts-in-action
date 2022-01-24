"use strict";
// 与namespace-a.ts中的Shape空间是共享的
// 注意命名空间合并规则：不能重复声明
/// <reference path='namespace-a.ts' />
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(typeof Shape.circle);
console.log(Shape.square(1));
