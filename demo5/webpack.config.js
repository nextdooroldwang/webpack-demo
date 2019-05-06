//webpack 是node写出来的，运行在node环境下

let path = require('path')
//构建html模板的插件
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production', //production 或者 development
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
	module: {
		//模块
		rules: [
			//规则
			//loader特点：功能单一,可用一个数组匹配多个loader
			//执行顺序是从后往前
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, 'src')],
				use: [
					{
						//把css插入head标签中的最后边
						loader: 'style-loader',
						options: {
							insertAt: 'top'
						}
					},
					//解析@import语法
					'css-loader'
				]
			},
			{
				//解析less
				test: /\.less$/,
				include: [path.resolve(__dirname, 'src')],
				use: [
					{
						//把css插入head标签中的最后边
						loader: 'style-loader',
						options: {
							insertAt: 'top'
						}
					},
					//解析@import语法
					'css-loader',
					//解析less
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
		})
	]
}
