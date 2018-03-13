function Sort(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}

module.exports = Sort;
console.log(Sort([1, 2, 1, 0, 3, 6, 4, 9, 7]), "should be 0,1,1,2,3,4,6,7,9");

// complexity O(n2)