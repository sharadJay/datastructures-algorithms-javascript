let assert = require("assert");

function exponent(base, power, result = base) {
    if (power == 0) return 1;
    return power > 1 ? exponent(base, power - 1, result * base) : result;
}

assert.equal(exponent(2, 1), 2);
assert.equal(exponent(2, 6), 64);