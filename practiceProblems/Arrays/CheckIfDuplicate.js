// https://leetcode.com/problems/contains-duplicate/description/
// Given an array of integers, find if the array contains any
// duplicates. Your function should return true if any value
// appears at least twice in the array, and it should return false
// if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let array = []
    for(let index=0;index<nums.length;index++){
        if(array.includes(nums[index])){
            return true;
        } else {
            array.push(nums[index])
        }
    }
    return false;
};