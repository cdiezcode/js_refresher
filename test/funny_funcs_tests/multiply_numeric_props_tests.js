let assert = require("chai").assert;
let multiplyNumericProps = require("../../funny_funcs/multiply_numeric_props");

describe("Multiply numeric properties of Object", function () {
  describe("Positive tests", function () {
    let testObjectWithNumerics;
    let testObjectWithoutNumerics;
    let testObjectWithoutProps;
    beforeEach(() => {
      testObjectWithNumerics = {
        "testNumeric": 20,
        "testNotNumeric": "test"
      };
      testObjectWithoutNumerics = {
        "testNotNumeric": "test"
      };
      testObjectWithoutProps = {};
    })
    describe('Multiply all numeric properties of object by n', function () {
      it('should multiply all numeric props of object which has numeric props', function () {
        const previousNumericValue = testObjectWithNumerics["testNumeric"]
        const previousNotNumericValue = testObjectWithNumerics["testNotNumeric"]
        let n = Math.floor(Math.random() * 6);
        multiplyNumericProps(testObjectWithNumerics, n);
        assert.equal(testObjectWithNumerics["testNumeric"], previousNumericValue * n)
        assert.equal(testObjectWithNumerics["testNotNumeric"], previousNotNumericValue)
      });
    });
  })
})
