//webpack 是node写出来的，运行在node环境下

let path = require('path')
//构建html模板的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//css提取
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//css压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
//js压缩
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
//删除dist
const CleanWebpackPlugin = require('clean-webpack-plugin')
//复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin')
//版权声明注释插入
const webpack = require('webpack')

module.exports = {
	mode: 'production', //production 或者 development
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		// filename: 'bundle.[hash:8].js',
		path: path.resolve(__dirname, 'dist') //必须是绝对路径
		// publicPath: 'gghjhgjhgj/'
	},
	devServer: {
		port: 3003,
		progress: true,
		contentBase: './dist'
		// proxy: {
		//   //代理 见rbac配置示例
		// }
	},
	resolve: {
		//解析第三方包的路径，缩短查找范围
		modules: [path.resolve('node_modules')],
		//扩展名自动补全
		extensions: ['.js', '.css', '.vue', '.json'],
		//别名
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	//源码映射 会单独生成一个map文件，出错了会标识报错信息
	//'source-map'增加隐射文件
	//'eval-source-map'不会产生列信息 但会生成map文件
	//'cheap-module-source-map'不会单独生成map文件，会集成在打包后的文件中，没有列信息
	devtool: 'source-map',
	//监听代码变更
	// watch: true,
	// watchOptions: {
	// 	poll: 1000, //每秒查看多少次
	// 	aggregateTimeout: 500, //防抖
	// 	ignored: /node_modules/
	// },
	optimization: {
		//优化项
		minimizer: [
			//压缩器
			//js
			new uglifyJsPlugin({
				cache: true, //使用缓存
				parallel: true, //并发打包
				sourceMap: true //源码映射
			}),
			//css
			new OptimizeCSSAssetsPlugin({})
		]
	},
	module: {
		//模块
		rules: [
			//规则
			//loader特点：功能单一,可用一个数组匹配多个loader
			//执行顺序是从后往前
			{
				test: /\.html$/,
				use: 'html-withimg-loader'
			},
			{
				//生成一张图片到出口目录下，并返回图片名字
				//css中的背景图地址会被css的loader处理
				test: /\.(png|jpg|jpeg|gif)$/,
				// use: 'file-loader'
				use: {
					loader: 'url-loader',
					options: {
						limit: 1 * 1024, //当图片小于多少字节的时候用base64转化，否则用file-loader产生真实图片
						outputPath: 'img/'
						// publicPath: 'gghjhgjhgj/'
					}
				}
			},
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src')],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'], //预设，一个大插件的集合
							plugins: [
								['@babel/plugin-proposal-decorators', { legacy: true }], //装饰器语法扩展
								['@babel/plugin-proposal-class-properties', { loose: true }], //class提案扩展
								'@babel/plugin-transform-runtime'
							]
						}
					}
				],
				include: [path.resolve(__dirname, 'src')]
			},
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, 'src')],
				use: [
					MiniCssExtractPlugin.loader,
					//解析@import语法
					'css-loader',
					'postcss-loader'
				]
			},
			{
				//解析less
				test: /\.less$/,
				include: [path.resolve(__dirname, 'src')],
				use: [
					MiniCssExtractPlugin.loader,
					//解析@import语法
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			minify: {
				//压缩配置 可选
				removeAttributeQuotes: true, //删除双引号
				collapseWhitespace: true //折叠
			}
			// hash: true //添加hash配置 可选
		}),
		new MiniCssExtractPlugin({
			filename: 'css/main.css'
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([{ from: 'doc', to: './' }]),
		new webpack.BannerPlugin('mobingi 2019 by wangmeng'),
		new webpack.DefinePlugin({
			//会传入第一层引号里的值
			DEV: "'dev'", //或者用 JSON.stringify('dev')
			ABC: JSON.stringify('abc'),
			PRO: '1+1'
		})
	]
}
