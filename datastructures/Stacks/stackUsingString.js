function Stack() {
    this.stackString = ""
}

Stack.prototype.pop = function () {
    if (this.size() > 0) {
        var positionOfDelimiter = this.stackString.lastIndexOf(",");
        let elementToBePopped = this.stackString.slice(positionOfDelimiter + 1);
        this.stackString = this.stackString.slice(0, positionOfDelimiter);
        console.log(`popped the value${elementToBePopped}`);
        console.log(`current stack: ${this.stackString}`);
        return elementToBePopped;
    } else {
        console.log("There are currently no items in stack");
    }
}

Stack.prototype.peek = function () {
    if (this.size() > 0) {
        var positionOfDelimiter = this.stackString.lastIndexOf(",");
        let elementToBePopped = this.stackString.slice(positionOfDelimiter + 1);
        return elementToBePopped;
    }
}

Stack.prototype.push = function (value) {
    if (!value) return;
    this.stackString = this.stackString.concat(`,${value}`);
    console.log(`pushed ${value}`);
    console.log(`current stack: ${this.stackString}`)
}

Stack.prototype.size = function () {
    var occurences = this.stackString.match(/,/g);
    return occurences ? occurences.length : 0;
}

module.exports = Stack;
