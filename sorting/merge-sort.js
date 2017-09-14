function Sort(leftArray, rightArray) {
    //dividing
    if (leftArray.length > 1) {
        leftArray = Sort(leftArray.slice(0, leftArray.length / 2), leftArray.slice(leftArray.length / 2, leftArray.length));
    }
    if (rightArray.length > 1) {
        rightArray = Sort(rightArray.slice(0, rightArray.length / 2), rightArray.slice(rightArray.length / 2, rightArray.length));
    }
    //merging
    var counterLeftArray = 0;
    var counterRightArray = 0;
    var sortedArray = [];
    while (counterLeftArray < leftArray.length || counterRightArray < rightArray.length) {
        if ((counterLeftArray < leftArray.length && leftArray[counterLeftArray] < rightArray[counterRightArray]) || rightArray.length === counterRightArray) {
            sortedArray.push(leftArray[counterLeftArray++]);
        } else {
            sortedArray.push(rightArray[counterRightArray++]);
        }
    }
    return sortedArray;
}

module.exports = Sort;