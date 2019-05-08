// let path = require('path')

// module.exports = {
// 	mode: 'development', //production 或者 development
// 	entry: { test: './src/test.js' },
// 	output: {
// 		filename: '[name].js',
// 		path: path.resolve(__dirname, 'dist'), //必须是绝对路径
// 		library: 'a',
// 		libraryTarget: 'var' //var, commonjs, this。。。。
// 	}
// }
let path = require('path')
let webpack = require('webpack')
module.exports = {
	mode: 'development', //production 或者 development
	entry: { react: ['react', 'react-dom'] },
	output: {
		filename: '_dll_[name].js',
		path: path.resolve(__dirname, 'dist'), //必须是绝对路径
		library: '_dll_[name]'
	},
	plugins: [
		new webpack.DllPlugin({
			name: '_dll_[name]', //需要跟library一样，以找到文件对应关系
			path: path.resolve(__dirname, 'dist', 'mainfest.json') //生成任务清单
		})
	]
}
