var assert = require("assert");
var factorial = require("./../recursion/factorial");
var fibonacci = require("./../recursion/fibonacci");
var flattenArray = require("./../recursion/flatten");
var reverse = require("./../recursion/recursive-reverse");
var multiply = require("./../recursion/recursive-multiplier");

describe("factorial", function() {
  it("should return correct factorial", function() {
    assert.equal(factorial(0), 0);
    assert.equal(factorial(1), 1);
    assert.equal(factorial(2), 2);
    assert.equal(factorial(5), 120);
  });
});

describe("fibonacci", function() {
  it("should return correct factorial", function() {
    assert.equal(fibonacci(1), 0);
    assert.equal(fibonacci(2), 1);
    assert.equal(fibonacci(9), 34);
    assert.equal(fibonacci(40), 102334155);
  });
});

describe("flatten array", function() {
  it("should return flattened array", function() {
    assert.deepEqual(flattenArray([1,2]), [1,2]);
    assert.deepEqual(flattenArray([1,[2]]), [1,2]);
    assert.deepEqual(flattenArray([1,[2,[3]]]), [1,2,3]);
    assert.deepEqual(flattenArray([1,[2,[3,4],5],6]), [1,2,3,4,5,6]);
  });
});

describe("Reverse array", function() {
  it("should return reversed array", function() {
    assert.deepEqual(reverse([1,2]), [2,1]);
    assert.deepEqual(reverse([1,2,3,4,5,6]), [6,5,4,3,2,1]);
    assert.deepEqual(reverse([1]), [1]);
  });
});

describe("Multiply array", function() {
  it("should return multiplied array", function() {
    assert.deepEqual(multiply([1,2],2), [2,4]);
    assert.deepEqual(multiply([1,2,3,4,5,6],3), [3,6,9,12,15,18]);
    assert.deepEqual(multiply([1],5), [5]);
  });
});