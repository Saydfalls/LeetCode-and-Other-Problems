/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let boolArr = new Array(candies.length);  
    for(let i = 0; i < candies.length; i++){
        if((candies[i] + extraCandies) >= max) boolArr[i] = true;
        else boolArr[i] = false;
    }
    return boolArr;
};

