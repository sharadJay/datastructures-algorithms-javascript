function Sort(arr) {
    function quickSort(arr, startIndex, endIndex) {
        if (startIndex >= endIndex)
            return arr;
        var pivotIndex = endIndex;
        var pivotElement = arr[pivotIndex];
        for (var counter = startIndex, replacePivotIndex = startIndex; counter <= endIndex - 1; counter++) {
            if (arr[counter] < pivotElement) {
                [arr[replacePivotIndex],arr[counter]] = [arr[counter], arr[replacePivotIndex]];
                replacePivotIndex++;
            }
        }
        [arr[replacePivotIndex],arr[pivotIndex]] = [arr[pivotIndex], arr[replacePivotIndex]];
        quickSort(arr, startIndex, replacePivotIndex - 1);
        quickSort(arr, replacePivotIndex + 1, endIndex);
        return arr;
    }

    return quickSort(arr, 0, arr.length - 1);
}

module.exports = Sort;
console.log(Sort([21, 1, 0, 2, 6, 5, 3]));

//0  6 pivotIndex = 6 pivotElement=3