function multiplier(arr, multiNumber) {
    if (!Array.isArray(arr)) return;
    if (multiNumber == 1) return arr;

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