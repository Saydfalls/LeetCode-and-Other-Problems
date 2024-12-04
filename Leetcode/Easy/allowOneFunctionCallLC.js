/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    isDone = false
    return function(...args){
        if(!isDone){
            isDone = true
            return fn(...args)
            // IMPORTANT!
            // args is the array of things itself.
            // ...args separates the array to just its elements.
            // Calling fn(args) is a mistake because it inputs
            // the array instead of each element into the function call.
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
