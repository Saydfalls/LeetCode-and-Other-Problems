/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let frequencyMap = new Set();

    for(value of nums) {
        if(frequencyMap.has(value)) return true;
        frequencyMap.add(value);
    }

    return false;
};

// Old solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
var containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length;
};
*/
