/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let number = x.toString()
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== number[number.length - 1 - i]) {
      return false
    }
  }
  return true
};

console.log(isPalindrome(121));