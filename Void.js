
var Validator = require('Validator');
var wrongType = require('wrongType');

var Void = Validator('Void', {
  test: function(value) {
    return value === void 0;
  },
  assert: function(value, key) {
    if (value !== void 0) {
      return wrongType(this, key);
    }
  },
});

module.exports = Void;
