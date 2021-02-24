const assert = require("chai").assert;

const truncateString = require("../../funny_funcs/truncate_string");

describe("truncateString", function () {
  describe("positive tests", function () {
    it('should return whole string if string length is less than maximum', function () {
      const expected = "aaaaa";
      assert.equal(truncateString(expected, 20), expected);
    });
    it('should return truncated string if string length is more than maximum with ... in the end',
      function () {
        const expected = "aa...";
        assert.equal(truncateString("aaaaaaaaa", 5), expected);
    });
    it('should not truncate string if string length is equal to maximum', function () {
        const expected = "aaaaa";
        assert.equal(truncateString(expected, 5), expected);
      });
  })
})