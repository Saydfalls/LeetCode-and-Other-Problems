/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let count = 0;
    for(let i = 0; i < logs.length; i++){
        if(logs[i].charAt(logs[i].length - 2) == '.') {
            if(logs[i].charAt(logs[i].length - 3) == '.'){
                if(count != 0) count--;
            }
        } else {
            count++;
        }
    }
    return count++;
};
