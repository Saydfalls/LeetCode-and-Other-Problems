/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeRemaining;

    return function(...args) {
        if(timeRemaining) clearTimeout(timeRemaining);

        timeRemaining = setTimeout(() => fn(...args), t);
    }
};
