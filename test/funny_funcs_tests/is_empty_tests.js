let assert = require("chai").assert;
const isEmpty = require("../../funny_funcs/is_empty");

describe("isEmpty", function () {
  describe("positive tests", function () {
    it('should return true if there are no props in object', function () {
      assert.isTrue(isEmpty({}));
    });
    it('should return false if object has at least 1 prop', function () {
      assert.isFalse(isEmpty({prop: 1}))
    });
  })

  describe("negative tests", function () {
    it('should return true if param is not an object', function () {

      assert.isTrue(isEmpty(123));
    });
  })
})