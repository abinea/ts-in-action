//webpack.dev.config.js development环境配置文件
module.exports = {
  // cheap source-map忽略列信息
  // module 会定位到ts源码而不是转译后的js源码
  // eval-source-map 会将source-map以data-url的形式打包到文件中，重编译速度很快，不必担心性能
  devtool: 'cheap-module-eval-source-map',
}
