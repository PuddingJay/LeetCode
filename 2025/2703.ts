type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {

    return args.length;
};


// console.log(argumentsLength({}, null, '3')); // 3
// console.log(argumentsLength(1, 2, 3)); // 3
// console.log(argumentsLength(5)); // 3



/**
 * argumentsLength(1, 2, 3); // 3
 */