function Queue() {
    this.storage = "";
}

Queue.prototype.enqueue = function (value) {
    if (!value) return;
    this.storage = this.storage.concat(`${value},`);
};

Queue.prototype.dequeue = function () {
    if (this.count() > 0) {
        var indexOfDelimiter = this.storage.indexOf(",");
        var elementToBeRemoved = this.storage.slice(0, indexOfDelimiter);
        this.storage = this.storage.substr(indexOfDelimiter + 1, this.storage.length);
        console.log(`Dequeued element ${elementToBeRemoved}`)
        return elementToBeRemoved;
    } else {
        console.log("There are no elements in the queue");
    }
};

Queue.prototype.peek = function () {
    if (this.count() > 0) {
        var indexOfDelimiter = this.storage.indexOf(",");
        var firstElement = this.storage.slice(0, indexOfDelimiter);
        return firstElement;
    }
};

Queue.prototype.count = function () {
    var occurences = this.storage.match(/,/g);
    return occurences ? occurences.length : 0;
};

module.exports = Queue;
