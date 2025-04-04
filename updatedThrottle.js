// implement throttle() with leading & trailing option
// Question:  https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option

// Option	Behavior
// { leading: true, trailing: true }	Run immediately and queue the last one
// { leading: false, trailing: true }	Only runs after throttle period ends
// { leading: true, trailing: false }	Runs immediately, ignores the rest until next cycle
// { leading: false, trailing: false }	Nothing runs

function updatedThrottle(
    func,
    wait,
    option = { leading: true, trailing: true }
) {
    const { leading, trailing } = option;
    let shouldWait = false;
    let waitingArgs = null;

    function timeoutFunc() {
        if (waitingArgs === null) {
            shouldWait = false;
        } else {
            func.apply(waitingArgs[0], waitingArgs[1]);
            waitingArgs = null;
            setTimeout(timeoutFunc, wait);
        }
    }

    return function (...args) {
        if (shouldWait === false) {
            if (leading) {
                func.apply(this, args);
            } else if (trailing) {
                waitingArgs = [this, args];
            }
            shouldWait = true;
            setTimeout(timeoutFunc, wait);
        } else if (trailing) {
            waitingArgs = [this, args];
        }
    };
}
