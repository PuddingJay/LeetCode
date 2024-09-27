const findMaxAverage = (nums: number[], k:number): number => {
  let sum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  
  maxSum = sum;
  
  for (let i = k; i < nums.length; i++) {
    console.log(i)
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))