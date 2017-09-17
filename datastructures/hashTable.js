function HashTable(tableSize) {
    this.storage = [];
    this.size = tableSize;
    this._count = 0;
    this.simpleHash = function (str, tableSize) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i) * (i + 1);
        }
        return hash % tableSize;
    }
}

HashTable.prototype.find = function (prop) {
    let hash = this.simpleHash(prop, this.size);
    this.storage[hash] = this.storage[hash] || [];
    var bucket = this.storage[hash];
    let match;
    let matchIndex;
    bucket.forEach(function (item, index) {
        if (item.hasOwnProperty(prop)) {
            match = item;
            matchIndex = index;
        }
    });
    return {
        match: match,
        bucket: bucket,
        matchIndex: matchIndex
    };

}

HashTable.prototype.setObject = function (prop, value) {
    let {match,bucket} = this.find(prop);
    if (match) {
        match[key] = value;
    } else {
        let newItem = {};
        newItem[prop] = value;
        this._count++
        bucket.push(newItem);
    }
    return this;
}

HashTable.prototype.get = function (prop) {
    var match = this.find(prop).match;
    return match && match[prop];
}

HashTable.prototype.remove = function (prop) {
    let {match,bucket,matchIndex} = this.find(prop);
    if (match === undefined) {
        console.log("Value not found");
    } else {
        bucket.splice(matchIndex, 1);
        console.log(`removed element ${prop}: ${match[prop]}`)
    }
}


var hashTable = new HashTable(5);
hashTable.setObject("cool", 2)
console.log(hashTable.get("cool"));
console.log(hashTable.get("bool"));
hashTable.remove("cool");
hashTable.remove("cool");

module.exports = HashTable;