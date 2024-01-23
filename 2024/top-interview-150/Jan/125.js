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
};

isPalindrome("A man, a plan, a canal: Panama")