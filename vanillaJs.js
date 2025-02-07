// const rootDiv = document.createElement('div');
// rootDiv.id = 'container'
// rootDiv.className = 'container'
// rootDiv.innerText = "Root Div";
// document.body.appendChild(rootDiv);

// const container = document.getElementById('container');
// container.innerHTML = '<div> This is innerHTML of conainer</div>';
// console.log('container', container);

// container.insertAdjacentElement

// Scope and Shadowing
/*
var a = 100;
let b = 200;
const c = 300;
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);

  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
}

console.log("a", a);
console.log("b", b);
console.log("c", c);
*/

// Closers in JS
/*
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
const z = x();
z();

var d = "d";
function fun() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function xxxx() {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste JS");
}
fun();
*/

// Counter constructure
/*
function Counter() {
  var count = 0;
  this.increment = () => {
    count++;
    console.log(count);
  };
  this.decrement = () => {
    count--;
    console.log(count);
  };
}

const counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.decrement();

console.log("/n");

const counter2 = new Counter();
counter2.increment();
counter2.decrement();
counter2.decrement();
*/
