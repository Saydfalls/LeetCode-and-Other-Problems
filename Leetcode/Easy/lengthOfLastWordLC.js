/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    words = s.split(" ").filter(Boolean);
    return words[words.length - 1].length;
};