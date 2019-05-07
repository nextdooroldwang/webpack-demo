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

module.exports = {
	mode: 'development', //production 或者 development
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		// filename: 'bundle.[hash:8].js',
		path: path.resolve(__dirname, 'dist') //必须是绝对路径
	},
	devServer: {
		port: 3003,
		progress: true,
		contentBase: './dist'
	},
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
			filename: 'main.css'
		})
	]
}
