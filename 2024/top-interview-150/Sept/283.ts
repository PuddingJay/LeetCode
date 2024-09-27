const moveZeroes = (nums: number[]): void => {
  let i=0

  for (let num of nums){
    if(num !== 0) {
      nums[i++] = num
    }
  }

  while(i < nums.length) {
    nums[i++] = 0
  }

}

console.log(moveZeroes([0, 1, 0, 3, 12]))