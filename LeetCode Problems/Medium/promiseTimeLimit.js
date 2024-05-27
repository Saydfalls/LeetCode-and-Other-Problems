/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        let fnSpeed = new Promise(resolve => {
            resolve(fn(...args))
        });

        let timeLimitSpeed = new Promise( (resolve, reject) => {
            setTimeout(reject, t, 'Time Limit Exceeded');
        });

        return Promise.race([fnSpeed, timeLimitSpeed]).then()
    }
};


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */