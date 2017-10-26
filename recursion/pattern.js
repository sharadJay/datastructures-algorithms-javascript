// consider we have a pattern where following patterns is observed
// 1. Number decreases
// 2. Number stays same
// 3. Number increases
// 4. Number stays same
// [6,6,6,6,5,5,5,6,7,8,9,10,10,10,10,10,10] is valid
// [6,6,6,6,6] is valid
// [6,7,8,9,10] is valid
// [6,5,4,3,5,3] is invalid

//pattern validators
decreasingPattern = function (a, b) {
    return a > b ? 0 : 1;
}

consistentPatternOrIncreasing = function (a, b) {
    if (a === b) return 0;
    if (b > a) return 1;
    return -1;
}

increasingOrConstantPattern = function (a, b) {
    if (b > a) return 0;
    if (b === a) return 1;
    return -1;
}

consistentPattern = function (a, b) {
    if (a === b) return 0;
    return -1;
}

let validators = [decreasingPattern, consistentPatternOrIncreasing, increasingOrConstantPattern, consistentPattern]

let validatePattern = function (arr, counter = 0) {
    if (arr.length === 0) return true;
    if (counter >= arr.length - 1) return true;
    if (validators.length < 1) return false;
    let currentValidator = validators[0];
    switch (currentValidator(arr[counter], arr[counter + 1])) {
        case 0:
            console.log(`Cool:Pattern match for ${arr[counter]} and ${arr[counter + 1]}`);
            return validatePattern(arr, counter + 1);
        case 1:
            console.log(`Change:Pattern did not match for ${arr[counter]} and ${arr[counter + 1]}. dequeue`);
            validators.shift();
            return validatePattern(arr, counter);
        case -1:
            console.log(`Error:Pattern did not match for ${arr[counter]} and ${arr[counter + 1]}. exit`);
            return false;
        default:
            throw new Error("Not a valid output");
    }
}

console.log(validatePattern([8, 8, 8]));