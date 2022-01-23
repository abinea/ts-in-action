//webpack.pro.config.js production环境配置文件

// clean-webpack-plugin 每次成功构建后清空dist目录，因为避免缓存需要在文件后加入哈希，会产生很多无用的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  plugins: [new CleanWebpackPlugin()],
}
