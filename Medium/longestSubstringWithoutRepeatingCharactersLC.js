/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxNoDupe = 0;
    let leftPointer = 0;
    let dupeTracker = new Map();
    let maxCompetitor = 0;

    for(let i = 0; i < s.length; i++){
        if(dupeTracker.has(s[i])) {
            dupeTracker = new Map();
            maxNoDupe = maxNoDupe < maxCompetitor ? maxCompetitor : maxNoDupe;
            maxCompetitor = 0;
            leftPointer++;
            i = leftPointer - 1;
        } else {
            dupeTracker.set(s[i]);
            maxCompetitor++;
        }
    }

    return maxNoDupe = maxNoDupe < maxCompetitor ? maxCompetitor : maxNoDupe;
};