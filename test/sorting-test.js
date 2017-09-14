var assert = require("assert");
var bubbleSort = require("../sorting/bubble-sort");

describe("Sorting", function () {
    describe("Bubble sort", function () {
        assert.deepEqual(bubbleSort([1,2,1,0,3,6,4,9,7]),[0,1,1,2,3,4,6,7,9]);
    });
});
