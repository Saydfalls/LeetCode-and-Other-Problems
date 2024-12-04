/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    // an async function is defined as a function that returns a promise
    // timeTick will be my promise
    timeTick = new Promise(
        (resolve) => { // a promise needs to be fulfilled
            // in this case, our promise is fulfilled
            // when we wait a certain amount of milliseconds
            setTimeout(() => { // setTimeout is called to do just that
                // setTimeout will wait whatever amount of milliseconds
                // then it will run this arrow function
                // this arrow function fulfills the promise by resolving
                // milliseconds
                resolve(millis)
            }, millis)
        }
    )
    return timeTick // we return timeTick to make/fulfill the promise for the async fn
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */