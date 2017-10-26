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

var wordBreak = function (s, wordDict, wordStart = 0) {
    if(s.length===wordStart) return true;
    if (s.length === 0 || wordDict.length === 0) return false;
    for (let endOfWordCounter = s.length; endOfWordCounter > wordStart; endOfWordCounter--) {
        let currentWord = s.slice(wordStart, endOfWordCounter);
        if (wordDict.indexOf(currentWord) > -1) {
            //let newWordDict = wordDict.filter(item => item !== currentWord)
            if (wordBreak(s, wordDict, endOfWordCounter)) {
                return true;
            }
        }
    }
    return false;
}

let s = "aaaaaaal"
let dict = ["aaaa", "aaa"]
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]));