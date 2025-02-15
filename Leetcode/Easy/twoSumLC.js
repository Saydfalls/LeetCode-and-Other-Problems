/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // I know this can be unrolled so that it's 1 loop but I can't figure out for the life of me how to do it
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if((nums[i] + nums[j]) == target) return [i, j];
        }
    }
};

// Solution I like better but did not come up with. It is the unrolled loop (brilliant!)
/*
var twoSum = function(nums, target) {
    let numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  // Find the number needed to reach target

        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];  // Return stored index and current index
        }

        numIndices.set(nums[i], i);  // Store the current number and its index
    }
};
*/
