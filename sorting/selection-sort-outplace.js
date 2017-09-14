function Sort(arr) {
    var sortedArray = [];
    for (var i = 0; i < arr.length; i++) {
        var smallestNumber = arr[i];
        for (var k = i + 1; k < arr.length; k++) {
            if (arr[k] < smallestNumber) {
                [smallestNumber,arr[k]] = [arr[k], smallestNumber];
            }
        }
        sortedArray.push(smallestNumber);
    }
    return sortedArray;
}

module.exports = Sort;

console.log(Sort([6, 5, 4, 3, 2, 1]));