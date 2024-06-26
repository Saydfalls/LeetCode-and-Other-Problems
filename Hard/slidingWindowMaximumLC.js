/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let maxSlidingArray = [];

    let leftPointer = 0;
    for(let rightPointer = 0; rightPointer < nums.length - k + 1; rightPointer++){
        let max = -Infinity;
        while(rightPointer - leftPointer < k){
            if(nums[rightPointer] > max){
                max = nums[rightPointer];
            }
            rightPointer++;
        }
        maxSlidingArray.push(max);
        rightPointer = leftPointer;
        leftPointer++;
    }

    return maxSlidingArray;
};
