// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
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


function getChange(coins, total) {
  if (total === 0) return "Zero coins needed";
  var coinPlacementArr = [Infinity];
  var combinationArray = [0];
  for (let coinCounter = 0; coinCounter <= coins.length; coinCounter++) {
    let currentCoinValue = coins[coinCounter];
    for (let amountCounter = currentCoinValue; amountCounter < total + 1; amountCounter++) {
      let currentCombiValue = combinationArray[amountCounter] || Infinity;
      let denominition = combinationArray[amountCounter - currentCoinValue] + 1 || Infinity;
      let supposedCoinCount = denominition;
      if (currentCombiValue > supposedCoinCount) {
        coinPlacementArr[amountCounter] = coinCounter;
        combinationArray[amountCounter] = supposedCoinCount;
      }
    }
  }
  console.log(combinationArray, coinPlacementArr);
  console.log(printChangeCoins(coins, coinPlacementArr, total));
}

// let coins = [2, 4]
// getChange(coins, 10);
getChange([1], 1);

function printChangeCoins(coinsArr, coinPositionArr, total) {
  if (!coinPositionArr[total])
    return "No coins found for the total";
  let currentAmount = total;
  let counter = total;
  let finalCoins = [];
  while (currentAmount > 0) {
    let coin = coinsArr[coinPositionArr[currentAmount]];
    finalCoins.push(coin);
    currentAmount = currentAmount - coin;
  }
  return finalCoins;
}
