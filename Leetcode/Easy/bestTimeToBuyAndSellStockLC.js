/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let leftPointer = 0;
    for(let rightPointer = 0; rightPointer < prices.length; rightPointer++){
        if(prices[rightPointer] < prices[leftPointer]) leftPointer = rightPointer;
        if(prices[rightPointer] - prices[leftPointer] > maxProfit) maxProfit = prices[rightPointer] - prices[leftPointer];
    }

    return maxProfit;
};
