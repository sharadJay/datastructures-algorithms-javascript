// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
//     Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
//
// Find the minimum element.
//
//     You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (!Array.isArray(nums)) return
    if (nums.length == 1) return nums[0];
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < nums[high])
            high = mid;
        else {
            low = mid + 1
        }
    }
    return nums[low];
}


console.log(findMin([2,3,4,5,1]))