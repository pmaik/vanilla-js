/*
  Debounce used when:
  1. We are searching any item and onSearch we have to call an api.

  Throttling used when:
  1. Resizing / Scrolling any window/screen
  2. Mouse movement for drag & drop
*/

const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

document.addEventListener("mousemove", () => {
    incrementCount(defaultText);
    updateDebounceText();
    updateThrottleText();
});

const updateDebounceText = debounce(() => {
    incrementCount(debounceText);
}, 500);

const updateThrottleText = throttle(() => {
    incrementCount(throttleText);
}, 100);

function debounce(updateText, delay = 1000) {
    let timer;

    return function (...args) {
        const context = this;
        clearTimeout(timer);

        timer = setTimeout(function () {
            updateText.apply(context, args);
        }, delay);
    };
}

function throttle(updateText, delay = 1000) {
    let shouldWait = false;
    let waitingArgs = null;

    const timeoutFunc = () => {
        if (waitingArgs === null) {
            shouldWait = false;
        } else {
            updateText(waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    };

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        updateText(args);
        shouldWait = true;

        setTimeout(timeoutFunc, delay);
    };
}

function incrementCount(element) {
    element.innerText = Math.floor(parseInt(element.innerText) || 0) + 1;
}
