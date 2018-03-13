// https://leetcode.com/problems/container-with-most-water/description/
//     Given n non-negative integers a1, a2, ..., an, where each represents a point at
// coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai)
// and (i, 0). Find two lines, which together with x-axis forms a container, such that the container
// contains the most water.
//
//     Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let water = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        let h = Math.min(height[i],height[j]);
        water = Math.max(water, (j - i) * h);
        while (i < j && height[i] <= h) i++;
        while (i < j && height[j] <= h) j--;
    }
    return water;
};

console.log(maxArea([1,1]))

// [2,3,4,5,5,6,7]