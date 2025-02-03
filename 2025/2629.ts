type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }

        return x;

        // use reduceRight method
        // return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};

console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4)); // 65
console.log(compose([x => x + 1, x => 2 * x])(4)); // 9

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */