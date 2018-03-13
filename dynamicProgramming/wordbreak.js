// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
// determine if s can be segmented into a space-separated sequence of one or more dictionary words.
// You may assume the dictionary does not contain duplicate words.
//
//     For example, given
// s = "leetcode",
//     dict = ["leet", "code"].
//
//         Return true because "leetcode" can be segmented as "leet code".
// https://leetcode.com/problems/word-break/description/
// let Trie = require("../datastructures/trie");
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function (s, wordDict) {
//     if (s.length === 0 || wordDict.length === 0) return false
//     let dictionary = new Trie();
//     for (let wordCounter = 0; wordCounter < wordDict.length; wordCounter++) {
//         dictionary.addWord(wordDict[wordCounter]);
//     }
//     return searchWordBreaksFor(dictionary, s);
// };
//
// function searchWordBreaksFor(dictionary, s, wordStart = 0) {
//     if (wordStart === s.length) return true;
//     for (let counter = wordStart + 1; counter <= s.length; counter++) {
//         let currentWord = s.slice(wordStart, counter);
//         if (dictionary.search(currentWord)) {
//             let copiedDictionary = Object.create(dictionary);
//             copiedDictionary.deleteWord(currentWord);
//             return searchWordBreaksFor(copiedDictionary, s, counter);
//         }
//     }
//     return false;
// }

var wordBreak = function (s, wordDict) {
    if (s.length == 0) return true;
    if (s.length > 0 && wordDict.length == 0) return false;
    let hasFound = [true];
    for(let i=1;i<=s.length;i++){
        for(let j=0;j<i;j++){
            if(hasFound[j] && wordDict.includes(s.substring(j,i))){
                hasFound[i] = true;
                break;
            }
        }
    }
    return hasFound[s.length] === true;
}

let s = "aaaaaaal"
let dict = ["aaaa", "aaa"]
console.log(wordBreak("abcd",["a","abc","b","cd"]));