// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isSubsequence = function (s, t) {
//   let seen = {}

//   for (let i = 0; i < t.length; i++) {
//     // console.log(s[i]);
//     // console.log(t[i]);
//     if (seen[s[i]] !== t[i]) {

//     }
//   }
// };

// isSubsequence("aec", "abcde")

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0
  let tIndex = 0

  for (tIndex; tIndex < t.length; tIndex++) {
    if (s[sIndex] === t[tIndex]) sIndex++
  }

  return sIndex === s.length
};
