class Solution {
    func sumEvenAfterQueries(_ A: [Int], _ queries: [[Int]]) -> [Int] {
        if A.count < 1 || queries.count < 1 {
            return []
        }
        var sumOfEvenNumbers = A.reduce(0, { (agg,num) in
            return isEven(num) ? agg + num : agg
        })
        var mutableA = Array(A)
        return queries.map({ (query) -> Int in
            let oldNumber = mutableA[query[1]]
            mutableA[query[1]] += query[0]
            let newNumber = mutableA[query[1]]
            if isEven(oldNumber) {
                sumOfEvenNumbers -= oldNumber
            }
            if isEven(newNumber) {
                sumOfEvenNumbers += newNumber
            }
            return sumOfEvenNumbers
        })
    }
    
    private func isEven(_ num: Int) -> Bool {
        return num % 2 == 0
    }
}
