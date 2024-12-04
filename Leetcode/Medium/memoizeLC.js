/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map()
    // create hashmap
    return function(...args) {
        const key = args.join(',')
        // create the key for the key value pair
        // in this case by joining the args array
        // together by using .join and how I want
        // the array to join together as a key.
        if(!cache.has(key)){ // if the hashmap doesn't have the key
            cache.set(key, fn(...args)) // add the key
            // this is done by setting,
            // the left var is the key
            // and the right var is the value
        }

        return cache.get(key) // get the key and return it (whether it exists or not)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
