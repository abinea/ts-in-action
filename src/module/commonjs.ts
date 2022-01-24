let a = {
  x: 1,
  y: 2,
}

//exports === module.exports
module.exports = a

exports.c = 3
exports.d = 4

// 导入 require
// let f=require('fs')

// commonjs和es6模块的兼容处理
// es6中使用export = {} 相当于 commonjs中 module.exports={}
// 导入时 commonjs为 import x=require('')
// 如果tsconfig.json esModuleInterop 为true，则允许写成import x from ''
