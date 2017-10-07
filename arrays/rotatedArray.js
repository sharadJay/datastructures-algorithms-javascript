// Suppose an array sorted in ascending order is rotated at some pivot unknown
// to you beforehand.
//
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
//
// You are given a target value to search. If found in the array return its
//  index, otherwise return -1.
//
// You may assume no duplicate exists in the array.

function findNumberInRotatedArray(arr, num) {
    if (arr === null || (!Array.isArray(arr)) || arr.length === 0) return -1;
    let pivot = findPivot(arr, 0, arr.length - 1)
    if (num === arr[pivot]) return pivot;
    if (num > arr[pivot]) return binarySearch(arr, num, pivot + 1, arr.length - 1);
    if (num < arr[pivot]) return binarySearch(arr, num, 0, pivot - 1);
    return -1;
}

function findPivot(arr, start, end) {
    if (arr[0] < arr[arr.length - 1]) return 0;

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    if (arr[start] <= arr[mid]) {
        return findPivot(arr, mid + 1, end);
    } else {
        return findPivot(arr, start, mid - 1);
    }
}

function binarySearch(arr, num, start, end) {
    if (num < arr[start] || num > arr[end]) return -1;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) return mid;
    return num > arr[mid] ? binarySearch(arr, num, mid + 1, end) : binarySearch(arr, num, start, mid - 1);
}

const arr = [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 8];
console.log(findNumberInRotatedArray(arr, 2));