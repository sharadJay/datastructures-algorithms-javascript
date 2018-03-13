var assert = require('assert');
var Stack = require("./stackUsingString");
var StackO = require("./stack");
var StackMin = require("./minStack");

describe('Stacks', function () {
    describe('Size', function () {
        it('should return 1 when item is pushed', function () {
            var aStack = new Stack();
            aStack.push("value");
            assert.equal(aStack.size(), 1);
        });

        it('should return 0 when stack is empty', function () {
            var aStack = new Stack();
            assert.equal(aStack.size(), 0);
        });

        it('adding multiple values', function () {
            var aStack = new Stack();
            aStack.push("cool");
            aStack.push("bool");
            assert.equal(aStack.size(), 2);
        });

        it('Poping', function () {
            var aStack = new Stack();
            aStack.push("cool");
            aStack.push("bool");
            assert.equal(aStack.pop(), "bool");
            assert.equal(aStack.pop(), "cool");
            assert.equal(aStack.size(), 0, "Stack should be empty now");
        });
    });
});

describe('Stacks using objects', function () {
    describe('Size', function () {
        it('should return 1 when item is pushed', function () {
            var aStack = new StackO();
            aStack.push("value");
            assert.equal(aStack.size(), 1);
        });

        it('should return 0 when stack is empty', function () {
            var aStack = new StackO();
            assert.equal(aStack.size(), 0);
        });

        it('should return 0 when stack is empty', function () {
            var aStack = new StackO();
            aStack.push("first");
            aStack.push("second");
            aStack.push("third");
            assert.equal(aStack.size(), 3);
        });
        it('isPresent', function () {
            var aStack = new StackO();
            aStack.push(1);
            aStack.push(2);
            aStack.push(3);
            assert.ok(aStack.isPresent(1));
            assert.ok(!aStack.isPresent(4));
        });
        it('until', function () {
            var aStack = new StackO();
            aStack.push(1);
            aStack.push(2);
            aStack.push(3);
            aStack.push(4);
            aStack.push(5);
            aStack.push(6);
            assert.equal(aStack.until(2), 5)
        })
    });

    describe('pop', function () {
        it('should pop correct value', function () {
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

    describe('Min Stack', function () {
        describe('pop', function () {
            it('should pop correct value', function () {
                var aStack = new StackMin();
                aStack.push(1);
                aStack.push(2);
                aStack.push(0);
                aStack.push(4);
                aStack.push(-1);
                assert.equal(aStack.getMin(), -1);
                aStack.pop()
                assert.equal(aStack.getMin(), 0);
                aStack.pop();
                aStack.pop();
                assert.equal(aStack.getMin(), 1);
            });
        });
    });
});