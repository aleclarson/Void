var Validator, wrongType;

Validator = require("Validator");

wrongType = require("wrongType");

module.exports = Validator("Void", {
  test: function(value) {
    return value === void 0;
  },
  assert: function(value, key) {
    if (value === void 0) {
      return;
    }
    return wrongType(this, key);
  }
});

//# sourceMappingURL=map/Void.map
