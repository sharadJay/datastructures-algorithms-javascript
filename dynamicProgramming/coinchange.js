// https://leetcode.com/problems/coin-change/description/
// You are given coins of different denominations and a total amount of money amount. Write a function to compute
// the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by
// any combination of the coins, return -1.
//
// Example 1:
// coins = [1, 2, 5], amount = 11
// return 3 (11 = 5 + 5 + 1)
//
// Example 2:
// coins = [2], amount = 3
// return -1.
//
// Note:
// You may assume that you have an infinite number of each kind of coin.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function getChange(coins, total) {
    if (!Array.isArray(coins) || coins.length == 0 || Number.isNaN(total)) return -1;
    if (total == 0) return 0;
    let numberOfCoinsArray = [].fill.call({length: total + 1}, Infinity);
    numberOfCoinsArray[0] = 0;
    let coinPlacementArray = [].fill.call({length: total + 1}, -1);
    for (let coinCounter = 0; coinCounter < coins.length; coinCounter++) {
        for (let totalCounter = 1; totalCounter <= total; totalCounter++) {
            if (coins[coinCounter] > totalCounter) continue;// do nothing
            if (numberOfCoinsArray[totalCounter] > (1 + numberOfCoinsArray[totalCounter - coins[coinCounter]])) {
                numberOfCoinsArray[totalCounter] = 1 + numberOfCoinsArray[totalCounter - coins[coinCounter]];
                coinPlacementArray[totalCounter] = coinCounter;
            }
        }
    }
    return numberOfCoinsArray[total] == Infinity ? -1 : numberOfCoinsArray[total];
}

// let coins = [2, 4]
// getChange(coins, 10);
console.log(getChange([2, 4], 10));

// 0  1  2  3  4  5  6  7  8  9  10
// 2 -1  1 -1  2 -1  3 -1  4  -1  5
// 4 -1 -1 -1  1 -1  2 -1  2  -1  3