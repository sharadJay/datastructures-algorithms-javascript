function Sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var smallestNumberIndex = i;
        for (var k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[smallestNumberIndex]) {
                smallestNumberIndex = k;
            }
        }
        [arr[i],arr[smallestNumberIndex]] = [arr[smallestNumberIndex], arr[i]];
    }
    return arr;
}

module.exports = Sort;

console.log(Sort([6, 5, 4, 3, 2, 1]));