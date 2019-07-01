//https://leetcode.com/problems/peak-index-in-a-mountain-array/
//Let's call an array A a mountain if the following properties hold:
//
//A.length >= 3
//There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
//Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].
//
//Example 1:
//
//Input: [0,1,0]
//Output: 1
//Example 2:
//
//Input: [0,2,1,0]
//Output: 1
//Note:
//
//3 <= A.length <= 10000
//0 <= A[i] <= 10^6
//A is a mountain, as defined above.

class Solution {
    func peakIndexInMountainArray(_ A: [Int]) -> Int {
        if A.count < 3 {
            return -1
        }
        let length = A.count
        if A[length - 1] > A[length - 2] {
            return -1
        }
        if A[0] > A[1] {
            return -1
        }
        var high = length - 1
        var low = 0
        while low < high {
            let mid = Int((low + high)/2)
            if A[mid - 1] < A[mid] && A[mid] > A[mid + 1] {
                return mid
            } else if A[mid] > A[mid + 1] {
                high = mid
            } else {
                low = mid
            }
        }
        return 0
    }
}

// low = 0 high = 7
// mid 3


print(Solution().peakIndexInMountainArray([0,1,2,3,4,3,2,1]))