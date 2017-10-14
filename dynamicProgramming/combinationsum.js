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

let combinations = [];

let findSumCombinations = function (arr, targetSum) {
    if (arr.length === 0) return 0;
    if (targetSum === 0) return 0;
    addMoreToReachTarget(arr, targetSum);
    console.log(combinations);
    return combinations.length;
}

let addMoreToReachTarget = function (arr, target, currentSum = 0, currentCombination = []) {
    if (currentSum > target) return;
    if (currentSum === target) {
        console.log(currentCombination);
        combinations.push(currentCombination);
        return;
    }
    if (currentSum < target) {
        for (let counter = 0; counter < arr.length; counter++) {
            if (arr[counter] + currentSum <= target) {
                const newCombination = currentCombination.concat(arr[counter]);
                addMoreToReachTarget(arr, target, currentSum + arr[counter], newCombination);
            }
        }
        ;
    }
}

//findSumCombinations([9], 3);


// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
let twoSum = function (nums, target) {
    let hashmap = {};
    for (let counter = 0; counter < nums.length; counter++) {
        let complement = target - nums[counter];
        if (hashmap.hasOwnProperty(nums[counter])) return [counter, hashmap[nums[counter]]];
        hashmap[complement] = counter;
    }
    return [];
}



console.log(twoSum([2, 7, 11, 15],9));
console.log(twoSum([3,2,4],6));