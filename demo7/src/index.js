import str from './a.js'
require('./index.css')
require('./index.less')
console.log(str)

let fn = () => {
	console.log('箭头函数')
}
fn()

@aaa
class Log {
	a = 1
}

let log = new Log()
console.log(log.a)

function aaa(target) {
	console.log(target, '装饰器')
}
