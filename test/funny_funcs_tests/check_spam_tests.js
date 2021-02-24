const assert = require("chai").assert;

const checkSpam = require("../../funny_funcs/check_spam");

describe("checkSpam", function () {
  describe("positive tests", function () {
    it('should return true if message includes spam word in any case', function () {
      assert.isTrue(checkSpam("buy ViAgRa now"))
    });
    it('should return true if message includes spam word with bigger length', function () {
      assert.isTrue(checkSpam("free xxxxx"));
    });
    it('should return fasle if message includes spam words', function () {
      assert.isFalse(checkSpam("innocent rabbit"));
    });
  })
})