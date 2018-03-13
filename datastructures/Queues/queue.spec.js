var assert = require('assert');
var QueueO = require('./queuesUsingString');
var Queue = require('./queue');
var QueueStack = require('./QueueUsingStack');

describe('Queue', function () {
    describe('Dequeue', function () {
        it('should dequeue first element from the list', function () {
            var aQueue = new Queue();
            aQueue.enqueue("first");
            aQueue.enqueue("second");
            aQueue.enqueue("third");
            assert.equal(aQueue.count(), 3);
            assert.ok(aQueue.isPresent("second"));
            assert.equal(aQueue.until("second"),2);
            assert.equal(aQueue.dequeue(), "first");
            assert.equal(aQueue.count(), 2);
            assert.equal(aQueue.dequeue(), "second");
            assert.equal(aQueue.count(), 1);
            assert.equal(aQueue.dequeue(), "third");
            assert.equal(aQueue.count(), 0);
        });
    });
});

describe('Queue', function () {
    describe('Dequeue', function () {
        it('should dequeue first element from the list', function () {
            var aQueue = new QueueO();
            aQueue.enqueue("first");
            aQueue.enqueue("second");
            aQueue.enqueue("third");
            assert.equal(aQueue.count(), 3);
            assert.equal(aQueue.dequeue(), "first");
            assert.equal(aQueue.count(), 2);
            assert.equal(aQueue.dequeue(), "second");
            assert.equal(aQueue.count(), 1);
            assert.equal(aQueue.dequeue(), "third");
            assert.equal(aQueue.count(), 0);
        });
    });
});

describe('Queue Using Stack', function () {
    describe('Dequeue', function () {
        it('should dequeue first element from the list', function () {
            var aQueue = new QueueStack();
            aQueue.enqueue("first");
            aQueue.enqueue("second");
            aQueue.enqueue("third");
            assert.equal(aQueue.size(), 3);
            assert.equal(aQueue.dequeue(), "first");
            assert.equal(aQueue.size(), 2);
            assert.equal(aQueue.dequeue(), "second");
            assert.equal(aQueue.size(), 1);
            assert.equal(aQueue.dequeue(), "third");
            assert.equal(aQueue.size(), 0);
        });
    });
});