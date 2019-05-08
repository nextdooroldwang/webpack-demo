// let str = require('./a.js')
import str from './a.js'
// import $ from 'jquery'
// import moment from 'moment'
// //手动引入语言包
// import 'moment/locale/zh-cn'

console.log(str)
// //热更新
// if (module.hot) {
// 	module.hot.accept('./a', () => {
// 		console.log('更新了')
// 		// let str = require('./a')
// 		// console.log(str)
// 	})
// }
// console.log($)

// moment.locale('zh-cn')
// let m = moment()
// 	.endOf('day')
// 	.fromNow()
// console.log(m)

// import React from 'react'
// import { render } from 'react-dom'

// render(<h1>jsx</h1>, window.root)

// import calc from './calc'
// //import 在生产环境下 会自动去除没用的代码（tree-shaking）
// console.log(calc.sum(1, 2))

// let a = 1
// let b = 2
// let c = 3
// let d = a + b + c
// console.log(d, '~~~~~~~~~~~~~')
