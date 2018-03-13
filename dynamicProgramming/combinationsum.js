// https://leetcode.com/problems/combination-sum-iv/description/
// Given an integer array with all positive numbers and no duplicates, find the
// number of possible combinations that add up to a positive integer target.
//
// Example:
//
//   nums = [1, 2, 3]
// target = 4
//
// The possible combination ways are:
//   (1, 1, 1, 1)
//   (1, 1, 2)
//   (1, 2, 1)
//   (1, 3)
//   (2, 1, 1)
//   (2, 2)
//   (3, 1)
//
// Note that different sequences are counted as different combinations.
//
// Therefore the output is 7.
let intermediateRes = [];

let combinationSum4 = function (arr, targetSum) {
    intermediateRes = Array(targetSum+1).fill(-1);
    intermediateRes[0] = 1;
    return helper(arr,targetSum);
}

let helper = function (arr, targetSum){
    if(intermediateRes[targetSum]!=-1){
        return intermediateRes[targetSum];
    }
    if(targetSum == 0) return 1;
    let totalCombination = 0;
    for(let i =0;i<arr.length;i++){
        if(targetSum>=arr[i])
            totalCombination += helper(arr,targetSum-arr[i]);
    }
    intermediateRes[targetSum] = totalCombination;
    return totalCombination;
}

console.log(combinationSum4([2,1,3], 35));


// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// let twoSum = function (nums, target) {
//     let hashmap = {};
//     for (let counter = 0; counter < nums.length; counter++) {
//         let complement = target - nums[counter];
//         if (hashmap.hasOwnProperty(nums[counter])) return [counter, hashmap[nums[counter]]];
//         hashmap[complement] = counter;
//     }
//     return [];
// }
//
//
//
// console.log(twoSum([2, 7, 11, 15],9));
// console.log(twoSum([3,2,4],6));