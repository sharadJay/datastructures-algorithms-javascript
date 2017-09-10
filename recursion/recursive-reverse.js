function reverse(arr) {
    function reverseArray(arr, head, tail) {
        if (head >= tail) {
            return arr;
        } else {
            [arr[head],arr[tail]] = [arr[tail],arr[head]];
            return reverseArray(arr, head + 1, tail - 1);
        }
    }

    return reverseArray(arr, 0, arr.length - 1);
}

console.log(reverse([1,2]));

module.exports = reverse;