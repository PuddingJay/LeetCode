function majorityElement(nums) {
  // 1st solution but not efficient
  // let number = nums.sort()
  // return number[(nums.length - 1) / 2]

  // 2nd Solution
  let count = 0;
  let ME = 0;

  for (let i = 0; i < nums.length; i++) {
    count = nums[ME] == nums[i] ? count + 1 : count - 1
    if (count < 0) {
      count = 0;
      ME = i
    }
  }
  return nums[ME]

  // 3rd solution
  // let count = 0;
  // let ME = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (count == 0) ME = nums[i]

  //   if (ME == nums[i]) { count++ }
  //   else { count -= 1 }
  //   console.log(`${ME} and ${nums[i]} is same so ${count}`);
  // }

  // return ME

}

console.log(majorityElement([1, 1, 1, 1, 3, 3, 4, 4]));