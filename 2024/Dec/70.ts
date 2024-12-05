// const climbStairs = (n: number): number => {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     return climbStairs(n - 1) + climbStairs(n - 2);
// }

const climbStairs = (n: number): number => {
    if (n <= 2) return n;
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }
    return second;
};


console.log(climbStairs(6));
// console.log(climbStairs(6));
