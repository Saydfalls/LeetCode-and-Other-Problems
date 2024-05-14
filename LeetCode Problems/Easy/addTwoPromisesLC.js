/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return await promise1 + await promise2
    // uses await to wait for the operations to complete
    // before returning the result.
    // Strangely enough await (promise1 + promise2)
    // does not work, you would think it would though.
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */