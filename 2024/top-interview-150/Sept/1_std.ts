const twoSum = (nums: number[], target: number): number[] => {
  const hashMap: Record<number, number> = {}

  for(let i=0; i<nums.length; i++){
    let diff = target - nums[i]

    if(hashMap.hasOwnProperty(diff)){
      return [hashMap[diff], i]
    }
    hashMap[nums[i]] = i
  }

  return []
}