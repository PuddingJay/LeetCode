// Define a type for the reducer function
type ReducerFunction = (accumulator: number, current: number) => number;

// function reduce(nums: number[], fn: ReducerFunction, init: number): number {
//     if (nums.length === 0) return init;
    
//     let result = init;
//     for (const num of nums) {
//         result = fn(result, num);
//     }
//     return result;
// }

// Using reduce method
function reduce(nums: number[], fn: ReducerFunction, init: number): number {
    return nums.reduce(fn, init);
}

// Example usage
const sum = (acc: number, curr: number): number => acc + curr;
const sumOfSquares = (acc: number, curr: number): number => acc + curr * curr;

console.log(reduce([1, 2, 3, 4], sum, 0)); // 10
console.log(reduce([1, 2, 3, 4], sumOfSquares, 100)); // 130