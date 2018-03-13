/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), [])
}

console.log(flatten([1, [2], [3, [[4]]]]));