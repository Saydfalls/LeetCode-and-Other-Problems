/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const trackChars = new Map();

    for(let i = 0; i < s.length; i++){
        if(!trackChars.has(s[i])){
            trackChars.set(s[i], 1);
        } else {
            trackChars.set(s[i], trackChars.get(s[i]) + 1);
        }
    }

    trackValues = new Map([...trackChars.entries()].sort((a, b) => a[1]-b[1]));

    let centerOccupied = 0;
    let palindromeLength = 0;

    for(const value of trackValues.values()) {
        if(value % 2 == 0) palindromeLength += value;
        if(value % 2 == 1 && centerOccupied == 1) palindromeLength += value - 1;
        if(value % 2 == 1 && centerOccupied == 0 ) {
            palindromeLength += value;
            centerOccupied = 1;
        }
    }

    return palindromeLength;
};