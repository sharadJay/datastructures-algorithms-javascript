// https://leetcode.com/problems/3sum/description/
//     Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
//     Note: The solution set must not contain duplicate triplets.
//
//     For example, given array S = [-1, 0, 1, 2, -1, -4],
//
//     A solution set is:
//     [
//         [-1, 0, 1],
//         [-1, -1, 2]
//     ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!Array.isArray(nums) || nums.length < 3) return [];
    nums = nums.sort();
    if (nums[0] > 0) return [];
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
            let sum = 0 - nums[i];
            let low = i + 1;
            let high = nums.length - 1;
            while (low < high) {
                if (nums[low] + nums[high] == sum) {
                    result.push([nums[i], nums[low], nums[high]]);
                    while (low < high && nums[low] == nums[low + 1]) low++;
                    while (low < high && nums[high] == nums[high - 1]) high--;
                    low++;
                    high--;
                } else if (nums[low] + nums[high] < sum) {
                    // while (low < high && nums[low] == nums[low + 1]) low++;
                    low++;
                } else {
                    // while (low < high && nums[high] == nums[high - 1]) high--;
                    high--;
                }
            }
        }
    }
    return result;
};


console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]))
// {-1 :[[-1,0]],0:[-1,1],1:[-1,2]}

// -2 0 0 2 2