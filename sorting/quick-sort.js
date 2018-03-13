function Sort(arr) {
    function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
        if (startIndex >= endIndex) return arr;
        let pivot = findPivot(arr, startIndex, endIndex);
        quickSort(arr, startIndex, pivot - 1);
        quickSort(arr, pivot + 1, endIndex);
        return arr;
    }

    function findPivot(arr, low, hi) {
        let pivot = arr[hi];
        let pivotLocation = low;
        for (let i = low; i <= hi; i++) {
            if (arr[i] < pivot) {
                [arr[i], arr[pivotLocation]] = [arr[pivotLocation], arr[i]];
                pivotLocation++;
            }
        }
        [arr[pivotLocation], arr[hi]] = [arr[hi], arr[pivotLocation]];
        return pivotLocation;
    }

    return quickSort(arr);
}

module.exports = Sort;
console.log(Sort([21, 1, 0, 2, 6, 5, 3]), "should be [0,1,2,3,5,6,21]");

// average time O(nlgN)
// worst time O(n2)