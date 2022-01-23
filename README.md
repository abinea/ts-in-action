## 记录

### 02

- webpack-merge merge is not a function 报错

  从 webpack-merge 的版本 5 开始，合并函数现在被命名为 export 而不是默认的 export。

  版本 5 之前

  ```js
  const merge = require('webpack-merge')
  ```

  版本 5

  ```js
  const merge = require('webpack-merge').merge
  // or
  const { merge } = require('webpack-merge')
  ```

  如果你使用的是 ES 模块：

  ```js
  import { merge } from 'webpack-merge'
  ```

- build 后 html 中 script 标签差异
  <script defer="defer" src="app.js"></script>
