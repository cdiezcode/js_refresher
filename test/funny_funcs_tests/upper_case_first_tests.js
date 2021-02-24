const assert = require("chai").assert;

const upperCaseFirstChar = require("../../funny_funcs/upper_case_first");

describe("upperCaseFirst", function () {
  describe("positive tests", function () {
    it('should return string with first letter uppercased', function () {
      const expected = "Less"
      assert.equal(upperCaseFirstChar("less"), expected);
    });
    it('should return uppercased letter for string with length = 1', function () {
      const expected = "L";
      assert.equal(upperCaseFirstChar("l"), expected);
    });
    it('should return empty string for string with length = 0', function () {
      assert.equal(upperCaseFirstChar(""), "")
    });
  })
})