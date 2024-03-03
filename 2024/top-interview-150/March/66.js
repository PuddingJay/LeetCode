/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let number = BigInt(digits.join(""));
  let plus = number + BigInt(1);
  console.log(plus);
  let result = plus.toString().split("")
  return result.map(Number)
};

console.log(plusOne([1, 2, 3, 4]))
console.log(plusOne([9]))
console.log(plusOne([9, 9]))
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))