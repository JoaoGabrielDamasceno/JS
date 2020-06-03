let  a = 3
console.log(this.a)
console.log(global.a)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

global.b = 123
this.c = 456

module.exports = { e:466, f: false, g:'teste'}