//webpack 是node写出来的，运行在node环境下

let path = require('path')
//构建html模板的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
		// progress: true,
		contentBase: './dist',
		hot: true
	},

	module: {
		noParse: /jquery/, //不去解析的依赖库
		//模块
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src')],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'], //预设，一个大插件的集合
							plugins: [
								['@babel/plugin-proposal-decorators', { legacy: true }], //装饰器语法扩展
								['@babel/plugin-proposal-class-properties', { loose: true }], //class提案扩展
								'@babel/plugin-transform-runtime'
							]
						}
					}
				],
				include: [path.resolve(__dirname, 'src')]
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
		new webpack.IgnorePlugin(/\.\/locale/, /moment/),
		new webpack.DllReferencePlugin({
			//引用动态链接库，现在动态链接库找，找不到再打包库
			manifest: path.resolve(__dirname, 'dist', 'mainfest.json')
		}),
		new webpack.HotModuleReplacementPlugin(), //热更新
		new webpack.NamedModulesPlugin() //打印更新的模块路径
	]
}
