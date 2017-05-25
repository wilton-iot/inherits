define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
try {
  var util = require('util');
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  module.exports = require('inherits/inherits_browser.js');
}

return module.exports;});
