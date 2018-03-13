function Sort(arr) {
    // base case
    if (arr.length == 1) return arr;

    // step 1 divide
    let halfPoint = Math.floor(arr.length / 2);
    let leftArray = Sort(arr.slice(0, halfPoint));
    let rightArray = Sort(arr.slice(halfPoint, arr.length));

    // step 2 merge
    let sortedArray = [];
    for (let i = 0, lp = 0, rp = 0; i < arr.length; i++) {
        if (lp >= leftArray.length) {
            sortedArray[i] = rightArray[rp];
            rp++;
        } else if (rp >= rightArray.length) {
            sortedArray[i] = leftArray[lp];
            lp++
        }
        else if (leftArray[lp] < rightArray[rp]) {
            sortedArray[i] = leftArray[lp];
            lp++;
        } else {
            sortedArray[i] = rightArray[rp];
            rp++;
        }
    }
    return sortedArray;
}

module.exports = Sort;

console.log(Sort([1, 2, 1, 0, 3, 6, 4, 9, 7]), "should be 0,1,1,2,3,4,6,7,9");
