// https://leetcode.com/problems/product-of-array-except-self/description/
// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the
// elements of nums except nums[i].
//
//     Solve it without division and in O(n).
//
//     For example, given [1,2,3,4], return [24,12,8,6].
//
//     Follow up:
//     Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose
// of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let leftArray = [].fill.call({length: nums.length}, 1);
    let rightArray = [].fill.call({length: nums.length}, 1);
    let leftProduct = 1;
    for (let index = 1; index < nums.length; index++) {
        leftProduct *= nums[index - 1];
        leftArray[index] = leftProduct;
    }
    let rightProduct = 1;
    for (let index = nums.length - 2; index > -1; index--) {
        rightProduct *= nums[index + 1];
        rightArray[index] = rightProduct;
    }
    let productArray = []
    for (let index = 0; index < nums.length; index++) {
        productArray[index] = rightArray[index] * leftArray [index];
    }
    return productArray;
};

console.log(productExceptSelf([4, 3, 2, 1, 2]))

// given = 1 2 3 4
// return arr = 1 1 1 1
// first loop from left 1 to n-1
// 1 1 2 6
// second loop from n-2 to 0
// 24 12  4 1
// prod 24 12 8 6