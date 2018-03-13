var Stack = require("./stack")

function MinStack() {
    this.stack = new Stack();
    this.minStack = new Stack();
}

MinStack.prototype.pop = function () {
    this.minStack.pop();
    return this.stack.pop();
}

MinStack.prototype.push = function (value) {
    this.stack.push(value);
    var currentMinimum = this.minStack.peek();
    if (this.minStack.size() === 0 || value < currentMinimum) {
        this.minStack.push(value);
    } else {
        this.minStack.push(currentMinimum);
    }
}

MinStack.prototype.size = function () {
    return this.stack.size();
}

MinStack.prototype.getMin = function () {
    return this.minStack.peek();
}

module.exports = MinStack;