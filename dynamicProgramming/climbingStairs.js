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
    if(n===0) return 0
    if(n===1) return 1
    if(n===2) return 2
    let oneStep = 1;
    let twoStep =2;
    let allWays = 0;
    for(let counter = 2;counter<n;counter++){
        allWays = oneStep + twoStep;
        oneStep = twoStep;
        twoStep = allWays;
    }
    return allWays;
};




console.log(climbStairs(38));

