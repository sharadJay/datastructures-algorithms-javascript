//https://leetcode.com/problems/sort-an-array/
//Given an array of integers nums, sort the array in ascending order.
//
//
//
//Example 1:
//
//Input: [5,2,3,1]
//Output: [1,2,3,5]
//Example 2:
//
//Input: [5,1,1,2,0,0]
//Output: [0,0,1,1,2,5]
//
//
//Note:
//
//1 <= A.length <= 10000
//-50000 <= A[i] <= 50000

// bubble sort
// Bubble sorting techinique is one where we compare an element and it's neighbour in each pass
// if their order is not correct then we swap them
// in each pass , the greatest element gets swapped down to last position and hence we have one less element to compare
// // TODO also, what if in a pass no element has been swapped, we could probably stop swapping elements
// In-Place sort - as we dont need to create a new one
// Worst case Complexity - O(n^2)
class Solution {
    func sortArray(_ nums: [Int]) -> [Int] {
        var array = nums
        for passCounter in 0..<array.count {
            for counter in 1..<array.count - passCounter {
                if array[counter - 1] > array[counter] {
                    swap(array: &array, position1: counter, position2: counter  - 1)
                }
            }
        }
        return array
    }
    
    func swap(array: inout [Int], position1: Int, position2: Int ) {
        let temp = array[position1]
        array[position1] = array[position2]
        array[position2] = temp
    }
}
