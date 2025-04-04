// implement debounce() with leading & trailing option
// Question: https://bigfrontend.dev/problem/implement-debounce-with-leading-and-trailing-option

// Option	Behavior
// { leading: false, trailing: true }	Classic debounce — only the final call runs after wait
// { leading: true, trailing: false }	Immediate execution on first call, then ignore everything until pause
// { leading: true, trailing: true }	First call runs immediately, last call runs after wait
// { leading: false, trailing: false }	Function never runs 😅
function updatedDebounce(
    func,
    wait,
    option = { leading: false, trailing: true }
) {
    const { leading, trailing } = option;
    let waitingArgs = null;
    let timer = null;

    function timeoutFunc() {
        if (trailing && waitingArgs) {
            func.apply(waitingArgs[0], waitingArgs[1]);
            waitingArgs = null;
        }

        timer = null;
    }

    return function (...args) {
        if (timer === null) {
            if (leading) {
                func.apply(this, args);
            } else if (trailing) {
                waitingArgs = [this, args];
            }
        } else {
            if (trailing) {
                waitingArgs = [this, args];
            }
            clearTimeout(timer);
        }

        timer = setTimeout(timeoutFunc, wait);
    };
}

// Normal debounce
// { leading: false, trailing: true }	Classic debounce — only the final call runs after wait
function debounce(func, wait) {
    let timer = null;

    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}
