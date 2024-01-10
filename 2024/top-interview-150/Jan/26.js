/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  const seen = {};

  /* my false but right output answer
  for (let i = 0; i < nums.length; i++) {
    const result = nums.filter(function (number) {
      if (!seen[number]) {
        seen[number] = true
        return true
      }
      return false
    })
    return result
  } */

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(`i : ${i}`);
    if (!seen[nums[i]]) {
      seen[nums[i]] = true;
      nums[k] = nums[i];
      console.log(nums[k]);
      k++;
    } else {
      console.log("skip");
    }
  }

  return k;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))