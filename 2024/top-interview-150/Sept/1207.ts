const uniqueOccurrences = (arr: number[]): boolean => {
  const countMap = new Map<number, number>();

  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  const s = new Set(countMap.values())

  return countMap.size === s.size;
}

console.log(uniqueOccurrences([1,2,2,1,1,3]));

// const uniqueOccurrences = (arr: number[]): boolean => {
//   arr.sort((a, b) => a - b);
//   let v = [];

//   for (let i = 0; i < arr.length; i++) {
//       let cnt = 1;

//       // Count occurrences of the current element
//       while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
//           cnt++;
//           i++;
//       }

//       v.push(cnt);
//   }

//   v.sort((a, b) => a - b);

//   for (let i = 1; i < v.length; i++) {
//       if (v[i] === v[i - 1]) {
//           return false;
//       }
//   }

//   return true;
// };