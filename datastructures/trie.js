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