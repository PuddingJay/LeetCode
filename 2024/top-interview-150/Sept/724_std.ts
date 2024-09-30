const pivotIndex = (nums: number[]): number => {
  let totalSum = 0
  let leftSum = 0
  
  for (let num of nums) {
    totalSum += num
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) return i

    leftSum += nums[i]
  }

  return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))