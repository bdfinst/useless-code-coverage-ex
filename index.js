const addWholeNumbers = require("./addWholeNumbers");

console.log(`2 + 2 = ${addWholeNumbers(2, 2)}`);
console.log(`2.1 + 2 = ${addWholeNumbers(2.1, 2)}`);
console.log(`A + 2 = ${addWholeNumbers("A", 2)}`);
console.log(`2 + 2 = ${addWholeNumbers("2", 2)}`);
