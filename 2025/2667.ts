function createHelloWorld() {
    
    return function(...args:any[]): string {
        return 'Hello World';
    };
};

const helloWorld = createHelloWorld();

console.log(helloWorld()); // Hello World!

