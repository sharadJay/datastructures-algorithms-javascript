// Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).

// Inputs
// Param 1: Weight[]
// Param 2: Value[]
// Param 3: Knapsack weight

function getMaximumWeight(weightArr, valueArr, knapsackCapacity) {
  if (weightArr.length !== valueArr.length) return "Error Size of weight and value should match";
  weightArr.unshift(0);
  valueArr.unshift(0)
  let valueMatrix = initializeArrayOf(knapsackCapacity, valueArr.length);
  for (let valueCounter = 1; valueCounter < valueArr.length; valueCounter++) {
    for (let weightCounter = 1; weightCounter < knapsackCapacity + 1; weightCounter++) {
      if (weightArr[valueCounter] <= weightCounter) {
        let valueWithCurrentItem = valueArr[valueCounter];
        let remainingWeight = weightCounter - weightArr[valueCounter];
        if (remainingWeight > 0) {
          valueWithCurrentItem += valueMatrix[valueCounter - 1][remainingWeight];
        }
        if (valueWithCurrentItem > valueMatrix[valueCounter - 1][weightCounter]) {
          valueMatrix[valueCounter][weightCounter] = valueWithCurrentItem;
        } else {
          valueMatrix[valueCounter][weightCounter] = valueMatrix[valueCounter - 1][weightCounter];
        }

      } else {
        valueMatrix[valueCounter][weightCounter] = valueMatrix[valueCounter - 1][weightCounter];
      }
    }
  }
  console.log(valueMatrix);
  console.log("maximum value that can be put on is" + valueMatrix[valueArr.length - 1][knapsackCapacity]);
}

function initializeArrayOf(width, height) {
  let arr = new Array(height);
  for (let heightCounter = 0; heightCounter < height; heightCounter++) {
    arr[heightCounter] = new Array(width + 1);
    arr[heightCounter][0] = 0;
  }
  for (let widthCounter = 1; widthCounter < width + 1; widthCounter++) {
    arr[0][widthCounter] = 0;
  }
  return arr;
}

getMaximumWeight([1, 3, 4, 5], [1, 4, 5, 7], 7);
