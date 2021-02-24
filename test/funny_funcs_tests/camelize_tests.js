const assert = require("chai").assert;

const camelize = require("../../funny_funcs/camelize");

describe("camelize", function () {
  describe("positive tests", function () {
    it('should return camelized version of kebab string', function () {
      const expected = "backgroundColor";
      assert.equal(camelize("background-color"), expected);
    });
    it('should return camelized version of kebab string which starts with -', function () {
      const expected = "webkitTranslation";
      assert.equal(camelize("-webkit-translation"), expected);
    });
    it('should return camelized version of kebab string which ends with -', function () {
      const expected = "webkitTranslation";
      assert.equal(camelize("webkit-translation-"), expected);
    });
  })
})