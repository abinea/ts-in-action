export let str = 'hello'

// 批量导入
import { a, b, c } from './es6-export'
//导入接口
import { P } from './es6-export'
//导入时起别名
import { f as F } from './es6-export'
// 导入模块中的所有成员，绑定在All上
import * as All from './es6-export'
// 不加{}，导入默认
import myFunction from './es6-export'
