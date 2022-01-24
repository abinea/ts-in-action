"use strict";
// 与namespace-b.ts中的Shape空间是共享的
var Shape;
(function (Shape) {
    const pi = Math.PI;
    Shape.circle = (r) => {
        return pi * r ** 2;
    };
})(Shape || (Shape = {}));
