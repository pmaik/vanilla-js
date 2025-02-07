"use strict";

// Any obj method -> obj
// In Regular function () --> global obj (Window)
// Arrow functions differ in their handling of this:
// they inherit this from the parent scope (lexical scope) at the time they are defined.

// 1. In globle space: this-> Window or globalObj
// console.log("in globla scope", this);

// 2. Functions
function x() {
    // this depends on strict mode
    // in strict mode: this -> undefined
    // non-strict mode: this -> Windlow
    console.log("inside x", this);
}
// x();
// This keyword is depend on how the function is called. See below example
// window.x(); //Note: this-> Window in both case
// Inside the DOM elements this -> reference to HTML element

const y = () => {
    // in both case: this-> Window
    console.log("inside y", this);
};
// y();

// Note: "This Substitution" In strict mode, if value of this keyword is undefined / null
// then in non-struct mode this keyword replaced with globalObject or Window.

// 3. this inside a object method
const movie = {
    title: "Avengers",
    play: () => {
        console.log("play", this.title, this); // this -> Window in both strict & non-strict mode
    },
    stop: function () {
        console.log("stop", this.title, this); // this -> current movie obj in both mode
    },
};
// movie.play();
// movie.stop();

// 4. call, apply & bind method for sharing methods and properties
const movie2 = {
    title: "X-man",
};
// movie.play.call(movie2); // this -> Window ***
// movie.play.apply(movie2); // this -> Window ***
// movie.stop.call(movie2); // this -> movie2
// movie.stop.apply(movie2); // this -> movie2

const video = {
    title: "Video Title",
    tags: ["a", "b", "c"],
    showTags: function () {
        this.tags.forEach(
            function (tag) {
                console.log(tag, " ", this); // this -> { a: "b" }
            },
            { a: "b" }
        );
    },
};
// Note: Here inside forEach if callback func is regular function then
// this will reference to second argument that we pass in forEach
// video.showTags();

// 5. this inside nested arrow function
const nestedFuncObj = {
    name: "I-phone",
    funArrow: function () {
        const x = () => {
            console.log("Fun-Arrow", this);
        };
        x();
    },
    arrowFun: () => {
        function x() {
            console.log("Arrow-Fun", this);
        }
        x();
    },
    funFun: function () {
        function x() {
            console.log("Fun-Fun", this);
        }
        x();
    },
    arrowArrow: () => {
        const x = () => {
            console.log("Arrow-Arrow", this);
        };
        x();
    },
};
nestedFuncObj.funArrow(); // this -> nestedFuncObj in both mode
nestedFuncObj.arrowFun(); // this -> undifined in strict mode, But in non-strict this->Window
nestedFuncObj.funFun(); // this -> undifined in strict mode, But in non-strict this->Window
nestedFuncObj.arrowArrow(); // this -> Window in both mode

function Engineer(title) {
    this.title = title;

    this.titleWithArrow = () => {
        console.log("Arrow Function: ", this); // this refer to engineer obj
        setTimeout(() => {
            console.log("Arrow Function in setTimeout: ", this); // this refer to engineer obj
        }, 100);
    };

    this.titleWithFun = function () {
        console.log("Simple Function: ", this); // this refer to engineer obj
        setTimeout(function () {
            console.log("Simple Function in setTimeout: ", this); // this refer to window obj
        }, 100);
    };
}

// Note: When we use the "new" operator to create an instance
// then new operator create a new empty object {}.
// and set "this" to that empty object in constructor function.
const engineer = new Engineer("SDE- Maneesh");
// engineer.titleWithArrow();
// engineer.titleWithFun();

class Person {
    constructor(name) {
        this.name = name;
    }

    nameWithArrow = () => {
        console.log("Arrow: ", this); // this--> person obj
        setTimeout(() => {
            console.log("Arrow in setTimeout: ", this); // this--> person obj
        }, 100);
    };

    nameWithFun() {
        console.log("Function: ", this); // this--> person obj
        setTimeout(function () {
            console.log("Function in setTimeout: ", this); // this--> window obj
        }, 100);
    }
}

const person = new Person("Maneesh");
person.nameWithArrow();
person.nameWithFun();
// Note: When we use the "new" operator to create an instance
// then new operator create a new empty object {}.
// and set "this" to that empty object in constructor function.
