// https://leetcode.com/problems/valid-anagram/description/
// Given two strings s and t, write a function to determine if t is an anagram of s.
//
//     For example,
//     s = "anagram", t = "nagaram", return true.
//     s = "rat", t = "car", return false.
//
//     Note:
// You may assume the string contains only lowercase alphabets.
//
//     Follow up:
//     What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length == t.length) {
        let sumOfS = 0;
        for (let i = 0; i < s.length; i++)
            sumOfS += s.charCodeAt(i);
        let sumOfT = 0;
        for (let j = 0; j < t.length; j++)
            sumOfT += t.charCodeAt(j);
        return sumOfT == sumOfS;
    }
    return false;
};

isAnagram("anagram", "mnagraa")