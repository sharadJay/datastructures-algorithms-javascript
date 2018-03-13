// Given weights and values of n items, put these items in a knapsack of capacity W to get
// the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1]
// and wt[0..n-1] which represent values and weights associated with n items respectively.
// Also given an integer W which represents knapsack capacity, find out the maximum value subset
// of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break a
// n item, either pick the complete item, or don’t pick it (0-1 property).

// Inputs
// Param 1: Weight[]
// Param 2: Value[]
// Param 3: Knapsack weight

function getMaximumWeight(weightArr, valueArr, knapsackCapacity) {
    if (!Array.isArray(weightArr) || !Array.isArray(valueArr) || weightArr.length != valueArr.length || Number.isNaN(knapsackCapacity))
        return 0;
    let zerothArr = [].fill.call({length: knapsackCapacity + 1}, 0);
    let matrix = [zerothArr];
    weightArr.unshift(0);
    valueArr.unshift(0);
    for (let weightCounter = 1; weightCounter <= weightArr.length; weightCounter++) {
        matrix[weightCounter] = [0];
        for (let currentKnapsack = 1; currentKnapsack <= knapsackCapacity; currentKnapsack++) {
            let previousWeight = matrix[weightCounter - 1][currentKnapsack];
            if (weightArr[weightCounter] <= currentKnapsack) {
                let currentValue = valueArr[weightCounter] + matrix[weightCounter - 1][currentKnapsack - weightArr[weightCounter]];
                matrix[weightCounter][currentKnapsack] = Math.max(currentValue, previousWeight);
            } else {
                matrix[weightCounter][currentKnapsack] = previousWeight;
            }
        }
    }
    return matrix[weightArr.length][knapsackCapacity];
}

console.log(getMaximumWeight([1, 3, 4, 5], [1, 4, 5, 7], 7));


// dynamic solution
function getMaximumWeightDynamic(weightArr, valueArr, knapsackCapacity, n = weightArr.length) {
    if (n == 0 || knapsackCapacity == 0) return 0;
    if (weightArr[n - 1] > knapsackCapacity) {
        return getMaximumWeightDynamic(weightArr, valueArr, knapsackCapacity, n - 1);
    } else {
        return Math.max(valueArr[n - 1] + getMaximumWeightDynamic(weightArr, valueArr, knapsackCapacity - weightArr[n - 1], n - 1), getMaximumWeightDynamic(weightArr, valueArr, knapsackCapacity, n - 1))
    }
}

console.log(getMaximumWeightDynamic([1, 3, 4, 5], [1, 4, 5, 7], 7));

//notes
//      0 1 2 3 4 5 6 7
// (0)0 0 0 0 0 0 0 0 0
// (1)1 0 1 1 1 1 1 1 1
// (4)3 0 1 1 4 5 5 5 5
// (5)4 0 1 1 4 5 6 6 9
// (7)7 0 1 1 4 5 6 6 9