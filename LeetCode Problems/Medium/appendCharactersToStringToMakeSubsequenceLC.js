/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let charMatch = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] == t[charMatch]) charMatch++;
    }

    let subsequence = t.length - charMatch;
    return subsequence;
};