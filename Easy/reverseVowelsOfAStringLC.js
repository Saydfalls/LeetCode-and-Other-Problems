/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');
    const vowelMap = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while(leftPointer < rightPointer){
        if (!vowelMap.has(s[leftPointer])) {
            leftPointer++;
        } else if (!vowelMap.has(s[rightPointer])) {
            rightPointer--;
        } else {
            [s[leftPointer], s[rightPointer]] = [s[rightPointer], s[leftPointer]];
            leftPointer++;
            rightPointer--;
        }
    }
    return s.join('');
};
