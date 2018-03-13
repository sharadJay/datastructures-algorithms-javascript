function Stack() {
    this.storage = {}
    this.count = 0
}

Stack.prototype.pop = function () {
    if (this.size() > 0) {
        var valueToBeDeleted = this.storage[--this.count];
        delete this.storage[this.count];
        if (this.count < 0) this.count = 0;
        console.log(`popped the ${valueToBeDeleted}`);
        return valueToBeDeleted;
    } else {
        console.log("There are currently no items in stack");
    }
}

Stack.prototype.push = function (value) {
    this.storage[this.count++] = value;
}

Stack.prototype.size = function () {
    return this.count;
}

Stack.prototype.peek = function () {
    return this.storage[this.count - 1];
}

Stack.prototype.getIndex = function (value) {
    for (let index = this.count - 1; index > -1; index--) {
        if (this.storage[index] === value) return index;
    }
    return -1;
}

Stack.prototype.isPresent = function (value) {
    return this.getIndex(value) > -1 ? true : false
}

Stack.prototype.until = function (value) {
    if (this.size() == 0) return -1;
    let index = this.getIndex(value)
    if (index == 0) return 1;
    return this.size() - index;
}

Stack.prototype.toString = function () {
    return Object.keys(this.storage).reduce((acc, cur) => acc + "," + this.storage[cur], "");
}

module.exports = Stack;

