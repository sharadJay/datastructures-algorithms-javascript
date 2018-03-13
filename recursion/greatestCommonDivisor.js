/*
Write a function that takes two numbers and returns the greatest common divisor.
*/
function GCD(numA, numB) {
    if (numA == 0) return numB;
    if (numB == 0) return numA;
    return numA > numB ? GCD(numB, numA - numB) : GCD(numA, numB - numA);
}

console.log(GCD(270, 192));