/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  var left = 0;
  var right = x;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log(`mid: ${mid}, left: ${left}, right: ${right}`);
    if (mid * mid < x) {
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return right
};

console.log(mySqrt(9));