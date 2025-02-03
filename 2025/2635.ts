function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    
    // original solution
    // const result: number[ ] = []

    // if (arr.length === 0) return result

    // for (const item of arr) {
    //     result.push(fn(item, arr.indexOf(item)))
    // }

    // return result


    // Using map method
    return arr.map(item=> {
        return fn(item, arr.indexOf(item))
    })
};

console.log(map([1, 2, 3], (n, i) => n + i)); // [1, 3, 5]
console.log(map([1, 2, 3], (n, i) => n + 1)); // [1, 3, 5]
console.log(map([1, 2, 3], (n, i) => 42)); // [1, 3, 5]