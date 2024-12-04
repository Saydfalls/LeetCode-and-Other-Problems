/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let maxLength = Math.max(word1.length, word2.length);
    let arr = [];
    for(let i = 0; i < maxLength; i++){
        arr.push(word1[i], word2[i]);
    }

    return arr.join('');
};
