// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 ).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!Array.isArray(nums) || nums.length == 0 || Number.isNaN(target)) return -1;
    let pivot = findPivot(nums);
    if (target < nums[pivot]) return -1;
    if (target == nums[pivot]) return pivot;
    if (target > nums[pivot]) {
        if (target <= nums[nums.length - 1]) {
            return searchFromArray(nums, pivot + 1, nums.length - 1, target);
        } else if (target >= nums[0]) {
            return searchFromArray(nums, 0, pivot - 1, target);
        }
    }
    return -1;
}

var findPivot = function (nums) {
    let low = 0;
    let high = nums.length - 1;
    while (high > low) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < nums[high]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

var searchFromArray = function (nums, start, end, target) {
    if (start > end) return -1;
    if (start == end) {
        return nums[start] == target ? start : -1;
    }
    if (target <= nums[end] && target >= nums[start]) {
        let mid = Math.floor((start + end) / 2);
        if (target == nums[mid]) return mid;
        return target > nums[mid] ? searchFromArray(nums, mid + 1, end, target) : searchFromArray(nums, start, mid, target);
    }
    return -1;
}

console.log(search([3, 1], 3))