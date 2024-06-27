/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let maxSlidingArray = [];
    let deque = [];

    for(let i = 0; i < nums.length; i++){
        if(deque.length > 0 && nums[i] > nums[deque[deque.length - 1]]) {
            for(let j = deque.length - 1; j >= 0; j--){
                if(nums[i] > nums[deque[j]]) deque.splice(j, 1);
            }
        }
        deque.push(i);
        if(deque[0] < (i - k + 1)) deque.shift();
        if(i >= k - 1) maxSlidingArray.push(nums[deque[0]]);
    }

    return maxSlidingArray;
};
