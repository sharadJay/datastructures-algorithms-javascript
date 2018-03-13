// https://leetcode.com/problems/maximum-subarray/description/
// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
//
//     For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
//     the contiguous subarray [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxEndingHere = nums[0];
    let maxGlobal = nums[0];
    for (let counter = 1; counter < nums.length; counter++) {
        maxEndingHere = Math.max(maxEndingHere + nums[counter], nums[counter]);
        if (maxEndingHere > maxGlobal)
            maxGlobal = maxEndingHere
    }
    return maxGlobal
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, 5, 4]))