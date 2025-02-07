// import "./debounce";
// import "./throttle";

const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throtteText = document.getElementById("throttle");

// input.addEventListener("input", (e) => {
//   defaultText.innerText = e.target.value;
//   updateDevounceText(e.target.value);
//   updateThrottleText(e.target.value);
// });

document.addEventListener("mousemove", (e) => {
  incrementCount(defaultText);
  //   incrementCount(debounceText);
  //   incrementCount(throtteText);
  updateDevounceText();
  updateThrottleText();
});

function incrementCount(element) {
  element.innerText = (parseInt(element.innerText) || 0) + 1;
}

const updateDevounceText = debounce((text) => {
  //   debounceText.innerText = text;
  incrementCount(debounceText);
}, 500);

const updateThrottleText = throtte((text) => {
  //   throtteText.innerText = text;
  incrementCount(throtteText);
}, 500);

// Debounce fun declared
function debounce(callback, delay = 1000) {
  let timeout = null;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// Throttle fun declared
function throtte(callback, delay = 1000) {
  let shouldWait = false;
  let waitingArgs = null;

  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      callback(waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    callback(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}
