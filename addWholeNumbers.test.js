const expect = require("chai").expect;
const addWholeNumbers = require("./addWholeNumbers");

describe("Adding 2 whole numbers", () => {
  it("should return a number if both numbers are whole numbers", () => {
    expect(addWholeNumbers(2, 2)).to.be.not.NaN;
  });
  it("should return NaN if one number is not a whole number", () => {
    expect(addWholeNumbers(1.1, 2)).to.be.NaN;
  });
});
