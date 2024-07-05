/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = new Array(rowIndex + 1).fill(1);

    for(let i = 1; i < arr.length - 1; i++){
        for(let j = 1; j < arr.length - i; j++){
            arr[j] = arr[j] + arr[j - 1];
        }
    }

    return arr;
};

// Fastest solution I found on leetcode
/*
var getRow = function(row) {
    let result = [];
    let start = 1;
    result.push(start);
    for (let i = 0; i < row; i++) {
        start *= (row - i);
        start /= (i + 1);
        result.push(start);
    }
    return result;
};
*/
