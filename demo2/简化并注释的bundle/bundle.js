;(function(modules) {
	// webpackBootstrap webpac启动函数
	// The module cache  定义一个缓存
	var installedModules = {}

	// The require function 实现了一个浏览器的require方法
	function __webpack_require__(moduleId) {
		// Check if module is in cache 如果有缓存则返回缓存
		if (installedModules[moduleId]) {
			return installedModules[moduleId].exports
		}
		// Create a new module (and put it into the cache) 新建一个模块并把它加入缓存
		var module = (installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		})

		// Execute the module function 执行模块函数(this指向module.exports)
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)

		// Flag the module as loaded 是否加载完成
		module.l = true

		// Return the exports of the module
		return module.exports
	}

	// Load entry module and return exports 加载入口模块
	return __webpack_require__((__webpack_require__.s = './src/index.js'))
})({
	//key->模块路径  value-> 模块执行函数
	'./src/a.js': function(module, exports) {
		eval("module.exports = 'aaaa'\n\n\n//# sourceURL=webpack:///./src/a.js?")
	},
	'./src/index.js': function(module, exports, __webpack_require__) {
		eval(
			'let str = __webpack_require__(/*! ./a.js */ "./src/a.js")\n\nconsole.log(str)\n\n\n//# sourceURL=webpack:///./src/index.js?'
		)
	}
})
