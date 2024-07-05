/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0) return [];
    let arr = new Array(numRows).fill(new Array());
    
    for(let i = 0; i < numRows; i++){
        arr[i] = new Array(i+1);
        for(let j = 0; j < arr[i].length; j++){
            if(j == 0 || j == arr[i].length - 1) arr[i][j] = 1;
            else arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
        }
    }

    return arr;
};
