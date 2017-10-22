// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint
// stopping you from robbing each of them is that adjacent houses have
// security system connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.
//
//Given a list of non-negative integers representing the amount of money of
// each house, determine the maximum amount of money you can rob tonight
// without alerting the police.
// https://leetcode.com/problems/house-robber/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let evenSum = 0;
    let oddSum = 0;
    for (let counter = 0; counter < nums.length; counter++) {
        if (counter % 2 === 0) {
            evenSum = Math.max(oddSum, nums[counter] + evenSum);
        } else {
            oddSum = Math.max(evenSum, nums[counter] + oddSum);
        }
    }
    return Math.max(evenSum, oddSum);
};

//console.log(rob([183, 219, 57, 193, 94, 233, 202, 154, 65, 240, 97, 234, 100, 249, 186, 66, 90, 238, 168, 128, 177, 235, 50, 81, 185, 165, 217, 207, 88, 80, 112, 78, 135, 62, 228, 247, 211]))

// After robbing those houses on that street, the thief has found himself a new place
// for his thievery so that he will not get too much attention. This time, all houses
// at this place are arranged in a circle. That means the first house is the neighbor
// of the last one. Meanwhile, the security system for these houses remain the same
// as for those in the previous street.
//
// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police.
/**
 * @param {number[]} nums
 * @return {number}
 */
var robCircular = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let option1 = rob2(nums,0,nums.length-2)
    let option2 = rob2(nums,1,nums.length-1)
    return Math.max(option1,option2);
};

var rob2 = function(nums,low,hi){
    let evenSum = 0;
    let oddSum = 0;
    for (let counter = low; counter <= hi; counter++) {
        if (counter % 2 === 0) {
            evenSum = Math.max(oddSum, nums[counter] + evenSum);
        } else {
            oddSum = Math.max(evenSum, nums[counter] + oddSum);
        }
    }
    return Math.max(evenSum, oddSum);
}

console.log(robCircular([1,1]))