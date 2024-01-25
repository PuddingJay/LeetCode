/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim()
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (count > 0 && s[i] == " ") {
      return count
    } else {
      count++
    }
  }
  return count
};

console.log(lengthOfLastWord("a"));