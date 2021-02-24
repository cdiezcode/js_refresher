const expect = require("chai").expect;

const Range = require("../../funny_objects/range");

describe("Range object with iterator", function () {
    it('should return values in for-of', function () {
        const range = new Range(1, 6);
        let result = [];
        for (const rangeElement of range) {
            result.push(rangeElement);
        }
        expect(result).to.be.eql([1, 2, 3, 4, 5]);
    });
    it('should not return values in for-of if start value is more than end value', function () {
        const range = new Range(6, 1);
        let result = [];
        for (const rangeElement of range) {
            result.push(rangeElement);
        }
        expect(result).to.be.eql([]);
    });
})