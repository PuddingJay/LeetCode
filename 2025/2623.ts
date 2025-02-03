namespace Memoize {
    type Fn = (...params: number[]) => number;

    const memoize = (fn: Fn): Fn => {
        const cache: Record<string, number> = {};

        return (...params: number[]): number => {
            const key = params.join(',');

            if (cache[key] === undefined) {
                cache[key] = fn(...params);
            }
            return cache[key];
        };
    }

    // Example usage
    const sum = (a: number, b: number): number => a + b;
    const memoizedSum = memoize(sum);

    console.log(memoizedSum(1, 2)); // 3
    console.log(memoizedSum(1, 2)); // 3
    console.log(memoizedSum(2, 3)); // 5
}