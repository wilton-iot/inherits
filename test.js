define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var inherits = require('inherits/inherits.js')
var t = require('assert')

function test(c) {
  t.equal(c.constructor, Child)
  t.equal(c.constructor.super_, Parent)
  t.equal(Object.getPrototypeOf(c), Child.prototype)
  t.equal(Object.getPrototypeOf(Object.getPrototypeOf(c)), Parent.prototype)
  t.ok(c instanceof Child)
  t.ok(c instanceof Parent)
}

function Child() {
  Parent.call(this)
  test(this)
}

function Parent() {}

inherits(Child, Parent)

var c = new Child
test(c)

t.ok(typeof(inherits) === 'function')

return module.exports;});
