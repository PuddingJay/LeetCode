/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  let total = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      total -= roman[s[i]]
      console.log(`- ${roman[s[i]]} : ${total} `)
    } else {
      total += roman[s[i]]
      console.log(`+ ${roman[s[i]]} : ${total} `)
    }
  }

  return total + roman[s[s.length - 1]]
};

console.log(romanToInt("MCMXCIV"));