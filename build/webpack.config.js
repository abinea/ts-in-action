// webpack.config.js 所有webpack配置文件的入口

// webpack-merge 把两个配置文件合并
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

// 判断当前环境变量选择对应配置
let config = process.NODE_ENV === 'development' ? devConfig : proConfig

module.exports = merge(baseConfig, config)
