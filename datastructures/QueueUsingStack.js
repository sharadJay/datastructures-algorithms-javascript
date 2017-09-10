var Stack = require("./stackObject");

function Queue() {
    this.pushQueue = new Stack();
    this.popQueue = new Stack();
    this.transferPushToPopQueue = function () {
        while (this.pushQueue.size() > 0) {
            this.popQueue.push(this.pushQueue.pop());
        }
    }
}

Queue.prototype.dequeue = function () {
    if (this.popQueue.size() == 0) {
        this.transferPushToPopQueue();
    }
    return this.popQueue.pop();

}

Queue.prototype.enqueue = function (value) {
    this.pushQueue.push(value);
}

Queue.prototype.size = function () {
    return this.pushQueue.size() + this.popQueue.size();
}

Queue.prototype.peek = function () {
    if (this.popQueue.size() == 0) {
        this.transferPushToPopQueue();
    }
    return popQueue.peek();
}


module.exports = Queue;
