let Stack = require("../Stacks/stack");

function Queue() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
}

Queue.prototype.enqueue = function (value) {
    this.pushStack.push(value);
};

Queue.prototype.dequeue = function () {
    if (this.popStack.size() < 1) {
        transferStack(this.pushStack, this.popStack);
    }
    return this.popStack.pop();
};

let transferStack = function (aStack, bStack) {
    while (aStack.size() > 0) {
        bStack.push(aStack.pop());
    }
}

Queue.prototype.peek = function () {
    if (this.popStack.size() < 1) {
        transferStack(this.pushStack, this.popStack);
    }
    return this.popStack.peek();
};

Queue.prototype.size = function () {
    return this.popStack.size() + this.pushStack.size();
};

module.exports = Queue;