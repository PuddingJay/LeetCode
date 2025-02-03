type JSONValuea = null | boolean | number | string | JSONValuea[] | { [key: string]: JSONValuea };
type OnceFn = (...args: JSONValuea[]) => JSONValuea | undefined


function once(fn: Function): OnceFn {
    let hasBeenCalled = false;

    return function (...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            return fn(...args);
        }
    };
}

let fn = (a: number, b: number, c: number) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */