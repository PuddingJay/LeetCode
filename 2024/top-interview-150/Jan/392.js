/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0
  let tIndex = 0

  for (tIndex; tIndex < t.length; tIndex++) {
    console.log(`${s[sIndex]} comparing to ${t[tIndex]}`);
    if (s[sIndex] === t[tIndex]) sIndex++
  }

  return sIndex === s.length
};

console.log(isSubsequence("acd", "ahbgdc"));
