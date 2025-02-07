// Call Apply & Bind methods in JS
/*
const name = {
    firstName: "Maneesh",
    lastName: "Patel",
};

const printFullName = function (hometown, state, country) {
    console.log(
        this.firstName +
            " " +
            this.lastName +
            " from " +
            hometown +
            ", " +
            state +
            ", " +
            country
    );
};

printFullName.call(name, "Allahabad", "Up"); // call
printFullName.apply(name, ["Allahabad", "Up"]); // apply
const printMyName = printFullName.bind(name, "Prayagraj", "UP"); // bind
printMyName();

const name2 = {
    firstName: "Maik",
    lastName: "Singh",
};
printFullName.call(name2, "Alld", "Uttar Pradesh");
printFullName.apply(name2, ["Alld", "Uttar Pradesh"]);

*/

// Polyfill for bind method in JS
// Create own bind function

const name3 = {
    firstName: "Maneesh",
    lastName: "Kumar",
};

const printName = function (hometown, state, country) {
    console.log(
        this.firstName + " " + this.lastName,
        " from " + hometown + ", " + state + ", " + country
    );
};

const printMyName2 = printName.bind(name3, "Prayagraj");
printMyName2("Uttar pradesh", "India");

// My own bind function
Function.prototype.mybind = function (...args) {
    const obj = this;
    const params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    };
};

const printMyName3 = printName.mybind(name3, "Prayagraj", "Uttar pradesh");
printMyName3("India");
