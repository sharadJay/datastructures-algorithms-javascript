function fibonacci(number) {
    function getFibonacciNumber(firstNumber, secondNumber, limitCounter) {
        return limitCounter >= number ? firstNumber + secondNumber : getFibonacciNumber(secondNumber, firstNumber + secondNumber, limitCounter + 1);
    }

    if (number === 1) return 0;
    if (number === 2) return 1;

    return getFibonacciNumber(0, 1, 2);
}

module.exports = fibonacci