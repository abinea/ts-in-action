"use strict";
function render(result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        // value.id++ // 报错，只读属性不能修改值
    });
}
let result = {
    data: [
        {
            id: 1,
            name: 'A',
            // ts允许存在约定外的字段，原因是duck type（鸭式辨型法）
            sex: 'Male',
        },
        {
            id: 2,
            name: 'B',
            age: 12,
        },
    ],
};
render(result);
let chars = ['A', 'B'];
console.log(chars[4]); // undefined
