namespace AddTwoPromise {
    type P = Promise<number>

    const addTwoPromises = async (promise1: P, promise2: P): P => {
        const [result1, result2] = await Promise.all([promise1, promise2]);
        return result1 + result2;
    }

    // Example usage
    addTwoPromises( new Promise(resolve => setTimeout(() => resolve(10), 20)), new Promise(resolve => setTimeout(() => resolve(5), 60))).then(console.log); // 30
}

