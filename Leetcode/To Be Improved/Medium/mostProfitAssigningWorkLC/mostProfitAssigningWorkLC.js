/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let totalProfit = 0;

    for(let i = 0; i < worker.length; i++){
        let maxProfit = 0;
        for(let j = 0; j < difficulty.length; j++) 
            if(difficulty[j] <= worker[i] && profit[j] > maxProfit) maxProfit = profit[j];
        totalProfit += maxProfit;
    }

    return totalProfit;
};
