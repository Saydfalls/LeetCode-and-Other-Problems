/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = new Map();
    let count = 0;
    for(let number in nums) {
        if(!map.has(nums[number])){
            map.set(nums[number]);
            nums[count] = nums[number];
            count++;
        }
    }
    
    nums.length = count;
};