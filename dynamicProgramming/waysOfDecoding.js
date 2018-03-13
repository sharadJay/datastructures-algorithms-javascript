// https://leetcode.com/problems/decode-ways/description/
//     A message containing letters from A-Z is being encoded to numbers using the following mapping:
//
//     'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given an encoded message containing digits, determine the total number of ways to decode it.
//
//     For example,
//     Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
//
//     The number of ways decoding "12" is 2.

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s.length == 0) return 0;
    let dp = Array(s.length+1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] == 0 ? 0 : 1;
    for (let i = 2; i <= s.length; i++) {
        let first = s.substring(i - 1, i);
        let second = s.substring(i - 2, i);
        if (first > 0 && first <= 9) {
            dp[i] += dp[i - 1];
        }
        if (second > 9 && second < 27) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[s.length]
};

console.log(numDecodings("0"))