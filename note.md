## webpack安装
- `yarn add webpack webpack-cli -D`

## webpack零配置运行
- npx webpack
  -- 打包（实现浏览器中js模块化：见demo1）

## 手动配置webpack
- demo2 (bundle构建依赖图，代码解析)
- demo3 (使用webpack-dev-server开启基于express的开发服务)
  -- `yarn add webpack-dev-server -D`
  -- 在package.json中配置`"dev": "webpack-dev-server"`
  -- `yarn dev`

## 自动构建html模板文件
- demo4 
  -- `yarn add html-webpack-plugin -D`

## 样式处理
- demo5
  -- 解析css @import语法 ，把css插入html模板中 `yarn add css-loader style-loader -D`
  -- 解析less `yarn add less less-loader -D`

## css优化
- 抽离样式以link的方式引入
  -- `yarn add mini-css-extract-plugin -D`
- 添加浏览器前缀，兼容样式
  -- `yarn add postcss-loader autoprefixer -D`
- css压缩
  -- `yarn add optimize-css-assets-webpack-plugin -D`
  -- 因手动配置了优化项，所以原来自动优化的js压缩也需要手动配置一下
    --- `yarn add uglifyjs-webpack-plugin -D`