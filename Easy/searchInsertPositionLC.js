/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return binarySearch(nums, target);
};

     function binarySearch(arr, target) {    
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (high >= low) {
         mid = low + Math.floor((high - low) / 2);

        if (arr[mid] == target)
            return mid;
        if (arr[mid] > target)
            high = mid - 1;
        else 
            low = mid + 1;
    }
    if(target > arr[mid]) return mid + 1;
    return mid;
}