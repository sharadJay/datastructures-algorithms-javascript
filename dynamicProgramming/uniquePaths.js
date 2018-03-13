// https://leetcode.com/problems/unique-paths/description/
//     A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
//
// The robot can only move either down or right at any point in time. The robot is trying to reach the
// bottom-right corner of the grid (marked 'Finish' in the diagram below).
//
// How many possible unique paths are there?

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m == 0 || n == 0) return 0;
    if (m == 1 || n == 1) return 1;
    let xArray = Array(m).fill(1);
    let matrix = [xArray];
    for (let i = 1; i < n; i++)
        matrix[i] = [1];
    for (let y = 1; y < n; y++) {
        for (let x = 1; x < m; x++) {
            matrix[y][x] = matrix[y][x - 1] + matrix[y - 1][x];
        }
    }
    return matrix[n - 1][m - 1];
};

console.log(uniquePaths(6, 4))