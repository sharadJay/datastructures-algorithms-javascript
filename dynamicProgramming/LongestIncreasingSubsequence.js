// Given an unsorted array of integers, find the length of longest increasing subsequence.
// https://leetcode.com/problems/longest-increasing-subsequence/discuss/
//     For example,
//     Given [10, 9, 2, 5, 3, 7, 101, 18],
//     The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.
//
//     Your algorithm should run in O(n2) complexity.
//
//     Follow up: Could you improve it to O(n log n) time complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (!Array.isArray(nums) || nums.length == 0) return 0;
    if (nums.length == 1) return 1;
    let LISArray = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                LISArray[i] = Math.max(LISArray[j] + 1, LISArray[j]);
            }
        }
    }
    return LISArray.reduce((acc, curr) => acc > curr ? acc : curr, 1);
};

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))