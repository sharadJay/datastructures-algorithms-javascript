// trie is a special tree data structure which is used for retrieval of key in a dataset of strings.
// Some of the applications where it is used ->
//1. Autocomplete
//2. Spell checker
//3. IP Routing
function TrieNode() {
    this.links = {};
    this.isEndOfWord = false;
}

TrieNode.prototype.containsKey = function (ch) {
    return this.links[ch] ? true : false;
}

TrieNode.prototype.get = function (ch) {
    return this.links[ch];
}

TrieNode.prototype.put = function (ch, node) {
    this.links[ch] = node;
}

TrieNode.prototype.isEnd = function () {
    return this.isEndOfWord;
}
TrieNode.prototype.setIsEnd = function () {
    this.isEndOfWord = true;
}

function Trie() {
    this.root = new TrieNode();
}

Trie.prototype.addWord = function (word) {
    let currentNode = this.root;
    let charInWord = word.split("");
    for (let counter = 0; counter < charInWord.length; counter++) {
        let currentChar = charInWord[counter];
        if (!currentNode.containsKey(currentChar)) {
            currentNode.put(currentChar, new TrieNode());
        }
        currentNode = currentNode.get(currentChar);
    }
    currentNode.setIsEnd();
}

Trie.prototype.search = function (word) {
    let charArray = word.split("");
    let currentNode = this.root;
    for (let counter = 0; counter < charArray.length; counter++) {
        let currentChar = charArray[counter];
        if (currentNode.containsKey(currentChar)) {
            currentNode = currentNode.get(currentChar);
        } else {
            console.log("Word does not exist in dictionary")
            return false;
        }
    }
    return currentNode.isEnd();
}

Trie.prototype.startsWith = function (prefix) {
    let charArray = prefix.split("");
    let currentNode = this.root;
    for (let counter = 0; counter < charArray.length; counter++) {
        let currentChar = charArray[counter];
        if (currentNode.containsKey(currentChar)) {
            currentNode = currentNode.get(currentChar);
        } else {
            console.log("there are no words in history that starts with")
            return false;
        }
    }
    return true;
}


let dictionary = new Trie();
dictionary.addWord("sharad");
dictionary.addWord("shar");
dictionary.addWord("shard");
console.log(dictionary.search("sharad"));
console.log(dictionary.search("shari"));
console.log(dictionary.startsWith("shardi"));


//Given a 2D board and a list of words from the dictionary, find all words in the board.
//
//    Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
//
//    For example,
//    Given words = ["oath","pea","eat","rain"] and board =
//
//    [
//        ['o','a','a','n'],
//        ['e','t','a','e'],
//        ['i','h','k','r'],
//        ['i','f','l','v']
//    ]
//Return ["eat","oath"].

// Solution
// Feed words to create a trie
// now with each char in matrix
// if that word exists in dictionary
// mark it visited
//  go in vertical back - forward
//  go horizontal back -forward
// until
// 1. Position is outside matrix
// 2. If char is visited

function findWordsInBoard(words, board) {
    let trie = new Trie();
    words.forEach(word => trie.addWord(word));
    let height = board.length;
    let breadth = board[0].length;
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < breadth; j++) {
            traverseMatrix(trie,board,i,j,result);
        }
    }
    //returns array of found words
}

