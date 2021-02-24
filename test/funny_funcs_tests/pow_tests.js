let assert = require("chai").assert;
let pow = require("../../funny_funcs/pow");
describe("pow", function () {
  describe("positive tests", function () {
    function testFabric(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 - это ${expected}`, function () {
        assert.equal(pow(x, 3), expected)
      })
    }

    for (let i = 0; i < 6; i++) {
      testFabric(i);
    }
  })

  describe("negative tests", function () {
    it("if x is negative -> NaN", function () {
      assert.isNaN(pow(2, -1))
    })
    it("if n is not a whole number -> NaN", function () {
      assert.isNaN(pow(2, 1.5))
    })
  })
})
