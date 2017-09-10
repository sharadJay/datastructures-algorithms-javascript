function multiplier(arr, multiNumber) {
    function multiplierArray(arr, pos) {
        if (pos === arr.length) {
            return arr;
        } else {
            arr[pos] = arr[pos] * multiNumber;
            return multiplierArray(arr, pos + 1);
        }
    }

    return multiplierArray(arr, 0);
}

module.exports = multiplier;