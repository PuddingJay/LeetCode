/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const word = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
  const splittedWord = word.split("")
  const reverseWord = splittedWord.reverse().join("")
  console.log(reverseWord)
  console.log(word)
  if (reverseWord !== word) return false
  return true

  // Another Solution
  // for (let i = 0; i < s.length; i++) {
  //   console.log(`${s[i]} compare with ${s[s.length - 1 - i]}`);
  //   if (s[i] !== s[s.length - 1 - i]) return false
  // }
  // return true
};

console.log(isPalindrome("kasur rusak"));
// isPalindrome("A man, a plan, a canal: Panama")