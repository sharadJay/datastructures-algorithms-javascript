function Sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var elementToBeSorted = arr[i + 1];
        for (var j = i; j >= 0; j--) {
            if (elementToBeSorted < arr[j]) {
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
            }
        }
    }
    return arr;
}

module.exports = Sort;
console.log(Sort([0,6, 4, 5, 3, 2, 1]));