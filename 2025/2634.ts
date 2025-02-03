type Fn = (n: number, i: number) => any

const filter = (arr: number[], fn: Fn): number[] => {
    const result: number[] = []
    if (arr.length === 0) return result

    for (const item of arr) {
        if (fn(item, arr.indexOf(item))) {
            result.push(item)
        }
    }

    return result

}


// Using filter method
// function filter(arr: number[], fn: Fn): number[] {
//     return arr.filter(item=> {
//         return fn(item, arr.indexOf(item))
//     })
// };

console.log(filter([1, 2, 3], (n, i) => n > 1)); // [2, 3]
console.log(filter([1, 2, 3], (n, i) => n > 1)); // [2, 3]
console.log(filter([0, 11, 21, 31], (n, i) => n > 11)); // [21, 31]
console.log(filter([-2, -1, 0, 1, 2], (n, i) => n + 1)); // [-2, -1]
