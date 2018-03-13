//https://leetcode.com/problems/maximum-product-subarray/description/
// Find the contiguous subarray within an array (containing at least one number) which has the largest product.
//
//     For example, given the array [2,3,-2,4],
//     the contiguous subarray [2,3] has the largest product = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxEndingHere = nums[0];
    let minEndingHere = nums[0];
    let maxGlobal = nums[0];

    for (let counter = 1; counter < nums.length; counter++) {
        if(nums[counter]<0)
            [maxEndingHere,minEndingHere] = [minEndingHere,maxEndingHere]
        maxEndingHere = Math.max(maxEndingHere * nums[counter], nums[counter]);
        minEndingHere = Math.min(minEndingHere*nums[counter], nums[counter])
        if (maxEndingHere > maxGlobal)
            maxGlobal = maxEndingHere
    }
    return maxGlobal
};


console.log(maxProduct([-2,3,-4]))
