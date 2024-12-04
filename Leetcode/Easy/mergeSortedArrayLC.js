/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    m = m - 1;
    n = n - 1;
    let indexUpdater = nums1.length - 1;

    while(indexUpdater + 1 > 0){
        if(nums2[n] != undefined) nums1[indexUpdater] = nums1[m] >= nums2[n] ? nums1[m] : nums2[n];
        else nums1[indexUpdater] = nums1[m];
        
        nums1[indexUpdater] == nums1[m] ? m-- : n--;

        indexUpdater--;
    }
};