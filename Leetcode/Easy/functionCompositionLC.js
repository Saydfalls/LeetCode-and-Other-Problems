/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((accumulator, currArrElem) => {
            return currArrElem(accumulator)
        }
        , x)
        // reduceRight traverses a given array from the right.
        // in this case it is taking 2 variables: accumulator and currArrElem.
        // accumulator will hold the values returned by the function.
        // currArrElem holds the current array element.
        // in this case, the array elements being passed are functions.
        // So, accumulator is holding the values returned from each function
        // in the functions array and eventually will return a final result.
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */