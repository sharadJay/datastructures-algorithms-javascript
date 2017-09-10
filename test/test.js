var assert = require('assert');
var Stack = require('./../datastructures/stacks');
var Queue = require('./../datastructures/queues');
var StackO = require('./../datastructures/stackObject');
var QueueO = require('./../datastructures/queueObject');
var StackMin = require('./../datastructures/minStack');
var QueueStack = require('./../datastructures/QueueUsingStack');

describe('Stacks', function() {
  describe('Size', function() {
    it('should return 1 when item is pushed', function() {
      var aStack = new Stack();
      aStack.push("value");
      assert.equal(aStack.size(), 1);
    });

    it('should return 0 when stack is empty', function() {
      var aStack = new Stack();
      assert.equal(aStack.size(), 0);
    });

    it('should return 0 when stack is empty', function() {
      var aStack = new Stack();
      assert.equal(aStack.size(), 0);
    });

  });
});

describe('Queue', function() {
  describe('Dequeue', function() {
    it('should dequeue first element from the list', function() {
      var aQueue = new Queue();
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

describe('Stacks', function() {
  describe('Size', function() {
    it('should return 1 when item is pushed', function() {
      var aStack = new StackO();
      aStack.push("value");
      assert.equal(aStack.size(), 1);
    });

    it('should return 0 when stack is empty', function() {
      var aStack = new StackO();
      assert.equal(aStack.size(), 0);
    });

    it('should return 0 when stack is empty', function() {
      var aStack = new StackO();
      aStack.push("first");
      aStack.push("second");
      aStack.push("third");
      assert.equal(aStack.size(), 3);
    });
  });
  describe('pop', function() {
    it('should pop correct value',function(){
      var aStack = new StackO();
      aStack.push("first");
      aStack.push("second");
      aStack.push("third");
      assert.equal(aStack.size(), 3);
      assert.equal(aStack.pop(), "third");
      assert.equal(aStack.size(), 2);
      assert.equal(aStack.pop(), "second");
      assert.equal(aStack.size(), 1);
      assert.equal(aStack.pop(), "first");
      assert.equal(aStack.size(), 0);
    });
  });
});

describe('Queue', function() {
  describe('Dequeue', function() {
    it('should dequeue first element from the list', function() {
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


describe('Min Stack', function() {
  describe('pop', function() {
    it('should pop correct value',function(){
      var aStack = new StackMin();
      aStack.push(1);
      aStack.push(2);
      aStack.push(0);
      aStack.push(4);
      aStack.push(-1);
      assert.equal(aStack.getMin(),-1);
      aStack.pop()
      assert.equal(aStack.getMin(),0);
      aStack.pop();
      aStack.pop();
      assert.equal(aStack.getMin(),1);
    });
  });
});

describe('Queue Using Stack', function() {
  describe('Dequeue', function() {
    it('should dequeue first element from the list', function() {
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