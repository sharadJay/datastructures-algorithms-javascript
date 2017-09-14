function Sort(arr) {
    for (var i = 1; i <= arr.length - 1; i++) {
        for (var j = 0; j <= arr.length - 2; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

module.exports = Sort;
//Sort([1,2,1,0,3,6,4,9,7])