const expect = require("chai").expect;

const filterRange = require("../../funny_funcs/filter_range");

describe('filterRange', function () {
  describe('positive tests', function () {
    it('should return new array with values in range [a, b]', function () {
      const testArray = [1, 3, 5, 7];
      const expectedArray = [3, 5];
      expect(filterRange(testArray, 2, 6)).to.eql(expectedArray);
    });
    it('should return new array with values in range [a, b] with border values', function () {
      const testArray = [1, 3, 5, 7];
      expect(filterRange(testArray, 1, 7)).to.eql(testArray);
    });
  })
})