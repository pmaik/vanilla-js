// Generator Function in JavaScript
// A generator function in JavaScript is a special type of function
// that allows pausing and resuming execution.
// It is defined using the function* syntax and produces an iterator,
// which can be used to yield multiple values over time.

// Key Features of Generator Functions
// 1. Uses function* syntax: The asterisk (*) signifies that it is a generator function.
// 2. Uses yield keyword: This allows the function to pause and return a value.
// 3. Can be resumed later: The function execution can be resumed using the .next() method.
// 4. Returns an iterator: The function returns an iterator object with { value, done } properties.

// function* myGenerator() {
//     yield "Hello";
//     yield "World";
//     yield "!";

//     console.log("End of the func...");
// }

// const gen = myGenerator();

// console.log(gen.next()); // { value: "Hello", done: false }
// console.log(gen.next()); // { value: "World", done: false }
// console.log(gen.next()); // { value: "!", done: false }
// console.log(gen.next()); // End of the func...  { value: undefined, done: true }

// Example 2: Generator Function with a Loop

function* numberGenerator(limit) {
    for (let i = 1; i <= limit; i++) {
        yield i;
    }
}

const numbers = numberGenerator(3);

console.log(numbers.next()); // { value: 1, done: false }
console.log(numbers.next()); // { value: 2, done: false }
console.log(numbers.next()); // { value: 3, done: false }
console.log(numbers.next()); // { value: undefined, done: true }

// Explanation:
//  yield pauses execution and returns a value.
//  Calling .next() resumes execution from the last yield

// Example 3: Using yield* to Delegate Generators
// You can delegate to another generator using yield*.
function* subGenerator() {
    yield "A";
    yield "B";
}

function* mainGenerator() {
    yield "Start";
    yield* subGenerator(); // Delegates to another generator
    yield "End";
}

// const gen = mainGenerator();
// console.log(gen.next()); // { value: "Start", done: false }
// console.log(gen.next()); // { value: "A", done: false }
// console.log(gen.next()); // { value: "B", done: false }
// console.log(gen.next()); // { value: "End", done: false }
// console.log(gen.next()); // { value: undefined, done: true }

// Example 4: Generator Function with return
// The return statement in a generator function ends execution.
function* demoGenerator() {
    yield 1;
    yield 2;
    return 3; // Ends the generator
    yield 4; // This won't be reached
}

// const gen = demoGenerator();
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: true }  (done = true, stops execution)
// console.log(gen.next()); // { value: undefined, done: true }

// Example 5: Generator Function for Infinite Sequence
function* infiniteCounter() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const counter = infiniteCounter();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
// Keeps going infinitely.......

// Example 6: Using .throw() to Handle Errors
// You can inject an error into a generator.
function* myGen() {
    try {
        yield 1;
        yield 2;
    } catch (error) {
        console.log("error ", error);
    }
    yield 3;
}

const gen = myGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.throw(new Error("Somethingg went wrong!")));
console.log(gen.next());
