function Queue() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.count() > 0) {
    var elementToBeRemoved = this.storage[this.head]
    delete this.storage[this.head++]
    console.log(`Dequeued element ${elementToBeRemoved}`)
    return elementToBeRemoved;
  } else {
    console.log("There are no elements in the queue");
  }
};

Queue.prototype.peek = function() {
  return this.storage[this.head];
};

Queue.prototype.count = function() {
  return this.tail - this.head;
};

module.exports = Queue;
