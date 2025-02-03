type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let number = init;
    
    const increment = () => ++number;
    const decrement = () => --number;
    const reset = () => {
        number = init;
        return number;
    };

    return { increment, decrement, reset };
}
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */