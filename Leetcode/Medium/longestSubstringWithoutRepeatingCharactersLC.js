/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0 || s.length == 1) return s.length;

    let maxLength = 0;
    let leftPointer = 0;
    let dupeTracker = new Set();

    for(let rightPointer = 0; rightPointer < s.length; rightPointer++){
        if(dupeTracker.has(s[rightPointer])) {
            if(dupeTracker.size > maxLength) maxLength = dupeTracker.size;

            dupeTracker = new Set();
            rightPointer = leftPointer;
            leftPointer++;
        } else {
            dupeTracker.add(s[rightPointer]);
        }
    }
    return dupeTracker.size > maxLength ? dupeTracker.size : maxLength;
};
