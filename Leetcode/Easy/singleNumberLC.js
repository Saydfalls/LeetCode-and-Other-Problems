/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let thang = 0;
    for(let i = 0; i < nums.length; i++) thang ^= nums[i];

    return thang;
};
