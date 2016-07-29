
Validator = require "Validator"
wrongType = require "wrongType"

module.exports = Validator "Void",

  test: (value) ->
    value is undefined

  assert: (value, key) ->
    return if value is undefined
    wrongType this, key
