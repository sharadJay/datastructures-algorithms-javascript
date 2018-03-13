// https://leetcode.com/problems/climbing-stairs/description/
// You are climbing a stair case. It takes n steps to reach to the top.
//
//     Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
//     Note: Given n will be a positive integer.

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    if(n== 2) return 2;
    let oneStep =1;
    let twoStep = 2;
    let allWay =0;
    for(let i=2;i<n;i++){
        allWay = oneStep + twoStep;
        oneStep = twoStep;
        twoStep = allWay;
    }
    return allWay
};




console.log(climbStairs(38));

