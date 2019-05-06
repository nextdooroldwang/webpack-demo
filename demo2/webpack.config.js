//webpack 是node写出来的，运行在node环境下

let path = require('path')

module.exports = {
	mode: 'development', //production 或者 development
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}
