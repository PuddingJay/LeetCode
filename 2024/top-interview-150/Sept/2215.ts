const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result1: number[] = [];
  const result2: number[] = [];

  set1.forEach(num => {
    if (!set2.has(num)) {
      result1.push(num);
    }
  });

  set2.forEach(num => {
    if (!set1.has(num)) {
      result2.push(num);
    }
  });

  return [result1, result2];
}


console.log(findDifference([1,2,3,5], [1,2,3,4,5]))