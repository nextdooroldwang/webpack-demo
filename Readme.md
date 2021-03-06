## webpack安装
- `yarn add webpack webpack-cli -D`

## webpack零配置运行
- npx webpack
   打包（实现浏览器中js模块化：见demo1）

## 手动配置webpack
- demo2 (bundle构建依赖图，代码解析)
- demo3 (使用webpack-dev-server开启基于express的开发服务)
   
   `yarn add webpack-dev-server -D`
   
   在package.json中配置`"dev": "webpack-dev-server"`
   
   `yarn dev`

## 自动构建html模板文件
- demo4
    
   `yarn add html-webpack-plugin -D`

## 样式处理
- demo5
   
   解析css @import语法 ，把css插入html模板中 `yarn add css-loader style-loader -D`
   
   解析less `yarn add less less-loader -D`

## css优化
- demo6
   
- 抽离样式以link的方式引入
   
   `yarn add mini-css-extract-plugin -D`
- 添加浏览器前缀，兼容样式
   
   `yarn add postcss-loader autoprefixer -D`
- css压缩
   
   `yarn add optimize-css-assets-webpack-plugin -D`
   
   因手动配置了优化项，所以原来自动优化的js压缩也需要手动配置一下
      
      `yarn add uglifyjs-webpack-plugin -D`

## js处理
- demo7
   
- es6的语法转成es5
   
   `yarn add babel-loader @babel/core @babel/preset-env -D`
- class提案扩展,装饰器语法扩展，es7补丁
   
   `yarn add @babel/plugin-proposal-class-properties -D`
   `yarn add @babel/plugin-proposal-decorators -D`
   `yarn add @babel/plugin-transform-runtime -D`
   `yarn add @babel/runtime`
   `yarn add @babel/polyfill`

- 代码校验 eslint
- 全局变量注入
- 。。。。。。
  
## 图片处理
- demo8
- js中引用图片
   
   `yarn add file-loader url-loader -D`
- html模板中引用图片
   
   `yarn add html-withimg-loader -D`
- 静态资源基础路径设置
   所有资源或者某一类资源加路径（引用cdn）
## 配置
- demo9
- ~~多页面应用打包~~
- source-map
   
   devtool配置
- watch
   
   watch配置  区别于热更新
- 自动清空输出目录
   
   `yarn add clean-webpack-plugin -D`
- 复制文件
   
   `yarn add copy-webpack-plugin -D`
- 版权声明
- 代理
- resolve常用配置项
- 定义环境变量
  
- 一般真实情况下会分三个webpack配置文件来共同完成配置：base，dev，prod。base文件配置公共选项，dev配置开发环境选项，prod配置生产环境选项。dev和prod分别通过webpack-merge插件合并base。在package.json中编写两条指令分别执行dev和prod配置。（没写demo）
  
# 优化
- demo10
- noparse 不解析某些匹配项
- IgnorePlugin 不打包某些匹配项
- dllPlugin 引用动态链接库。
   
   在打包时会把一些库的代码打包，但是这部分代码一般是不会做修改的，而在应用有更新后用户就会被迫的重新加载这些代码。我们期望把这些不怎么修改的库抽离出去，不用每次修改业务代码后再重复去打包这些库。这样用户就能长期缓存这些库进而优化加载速度。
- happypack 多线程打包，项目大的时候可以提高打包速度，项目小的时候不推荐使用
- webpack自带优化（生产环境下才生效）
   
   tree-shaking 删除没用的代码
   scope hosting 自动简化一些可优化的代码
- 抽离公共代码 （适用多页面应用，没写demo）
- 懒加载 （提案中的语法，demo见aws计算器项目中的excel导出代码）
- 热更新（开发环境） 强制刷新，热更
   

   

   
