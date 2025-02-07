/*
  Debounce used when:
  1. We are searching any item and onSearch we have to call an api.
*/

/*
  Throttling used when:
  1. Resizing / Scrolling any window/screen
  2. Mouse movement for drag & drop
*/

const input = document.getElementById("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throtteText = document.getElementById("throttle");

input.addEventListener("input", (e) => {
    const text = e.target.value;
    defaultText.innerText = text;
    updateDebounceText(text);
    updateThrottleText(text);
});

const updateDebounceText = debounce((text) => {
    debounceText.innerText = text;
}, 1000);

const updateThrottleText = throtte((text) => {
    throtteText.innerText = text;
}, 1000);

// Debounce func declared
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

        callback(args);
        shouldWait = true;

        setTimeout(timeoutFunc, delay);
    };
}

// export const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => clearTimeout(timeout);
//   }, [value, delay]);

//   return debouncedValue;
// };
