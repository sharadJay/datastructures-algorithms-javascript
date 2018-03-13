function Queue() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
}

Queue.prototype.enqueue = function (value) {
    this.storage[this.tail++] = value;
};

Queue.prototype.dequeue = function () {
    if (this.count() > 0) {
        var elementToBeRemoved = this.storage[this.head]
        delete this.storage[this.head++]
        console.log(`Dequeued element ${elementToBeRemoved}`)
        return elementToBeRemoved;
    } else {
        console.log("There are no elements in the queue");
    }
};

Queue.prototype.peek = function () {
    return this.storage[this.head];
};

Queue.prototype.count = function () {
    return this.tail - this.head;
};

Queue.prototype.getIndex = function (value) {
    for (let index = this.tail - 1; index > -1; index--) {
        if (this.storage[index] === value) return index;
    }
    return -1;
}

Queue.prototype.isPresent = function (value) {
    return this.getIndex(value) > -1 ? true : false
}

Queue.prototype.until = function (value) {
    if (this.count() == 0) return -1;
    let index = this.getIndex(value)
    if (index == 0) return 1;
    if (index == -1) return -1;
    return this.count() - index;
}

Queue.prototype.toString = function () {
    return Object.keys(this.storage).reduce((acc, cur) => acc + "," + this.storage[cur], "");
}

module.exports = Queue;
