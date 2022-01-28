// webpack.base.config.js 公共环境配置文件

// html-webpack-plugin 通过模板生成首页并把输出文件嵌入首页文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // 入口文件
  entry: {
    app: './src/react/index.tsx',
  },
  output: {
    // 输出文件
    filename: '[name].[chunkhash:8].js',
    // 输出目录采用默认的 dist
    path: path.resolve(__dirname, '../', 'dist'),
  },
  resolve: {
    //拓展名
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        // ts-loader 解析以.ts或.tsx结尾的文件
        test: /\.tsx?$/i,
        use: [
          {
            //使用ts-loader
            loader: 'ts-loader',
          },
        ],
        //排除node_modules下的文件
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  // 拆包
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
