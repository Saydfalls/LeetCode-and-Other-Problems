/*
This problem was asking a way to cancel the call of a function.
In essence, a function is called with some delay. If we need to,
we should be able to cancel it before it is called. This code 
does just that
*/
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    var optionalTimeout = setTimeout(()=>{
        fn(...args) // using spread args to capture ALL args passed
    }, t)
    
    return () => { // has to be returned as a function so it can't be called directly
        clearTimeout(optionalTimeout) // cancels the function call if need be
    }
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */