function multiply(a) {
    // Inner function to capture subsequent arguments
    const inner = function (b) {
        return multiply(a * b); // Chain the multiplication
    };

    // Add a method to retrieve the result
    inner.done = function () {
        return a; // Return the accumulated result
    };

    return inner;
}

// Example usage:
const res = multiply(1)(2)(3)(4)(5).done();
console.log("Multiplication result is: ", res);
