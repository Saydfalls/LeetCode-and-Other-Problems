/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(" ").filter(word => word.length > 0);
    
    sArr.reverse();
    return sArr.join(" ");
};
