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
