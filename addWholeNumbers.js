function addWholeNumbers(a, b) {
  if (a % 1 === 0 && b % 1 === 0) {
    return a + b;
  } else {
    return NaN;
  }
}

module.exports = addWholeNumbers;
