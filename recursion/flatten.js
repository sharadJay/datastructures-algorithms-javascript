function flattenArray(actualArr) {
    var flattenedArray = [];
    for (var i = 0; i < actualArr.length; i++) {
        if (Array.isArray(actualArr[i])) {
            flattenedArray = flattenedArray.concat(flattenArray(actualArr[i]));
        }
        else {
            flattenedArray.push(actualArr[i]);
        }
    }
    return flattenedArray;
}
module.exports = flattenArray;
