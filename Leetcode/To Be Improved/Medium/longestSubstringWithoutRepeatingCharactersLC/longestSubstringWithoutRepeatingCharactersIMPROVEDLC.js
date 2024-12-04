/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0;
    if(s.length == 1) return 1;

    let maxNoDupe = 0;
    let leftPointer = 0;
    let dupeTracker = new Map();

    for(let rightPointer = 0; rightPointer < s.length; rightPointer++){

        if(dupeTracker.has(s[rightPointer]) && (dupeTracker.get(s[rightPointer]) >= leftPointer)){
            leftPointer = dupeTracker.get(s[rightPointer]) + 1;
        }

        dupeTracker.set(s[rightPointer], rightPointer);
        if((rightPointer - leftPointer + 1) > maxNoDupe) maxNoDupe = rightPointer - leftPointer + 1;
    }

    return maxNoDupe;
};