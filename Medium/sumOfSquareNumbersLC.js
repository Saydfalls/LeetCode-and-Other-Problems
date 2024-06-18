/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let a = findClosestSquare(c);
    if((a * a) == c) return true;
    
    return squareSum(a, c);
};

const findClosestSquare = function(number) {
    if(number == 0 || number == 1) return number;
    let num = 1;
    let square = 1;

    while(square <= number){
        num++;
        square = num * num;
    }
    return num - 1;
}

const squareSum = function(number, c) {
    for(i = 1, j = number; i <= j;){
        if((i*i + j*j) < c) i++;
        if((i*i + j*j) > c) j--;
    }
    return ((i*i + j*j) == c);
}