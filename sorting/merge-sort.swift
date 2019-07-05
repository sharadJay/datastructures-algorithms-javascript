// merge sort is a type of sorting which uses divide and conquer mechanism for sorting
// arrays are divided till leaf elements and then are merged in sorted manner
// complexity - O(nlogn) -> this is one of the efficient sorting algorithms

//Pseudo Code
//def sort(array)
//  if array.lengh < 2 return
//  mid = array.length/2
//  leftArray = new array from 0 to mid - 1
//  rightArray = new array from mid to array.length -1
//  sort(leftArray)
//  sort(rightArray)
//  array = merge(leftArray, rightArray)
//def merge(leftArray, rightArray)
//  finalArrayLength = leftArray.length + rightArray.length
//  rightCounter = 0, leftCounter = 0, finalArrayCounter = 0
//  while(rightCounter < rightArray.length && leftCounter < leftArray.lenth)
//      if(rightArray[rightCounter] <= leftArray[leftCounter])
//          finalArray[finalArrayCounter] = rightArray[rightArrayCounter]
//          rightArrayCounter++
//      else
//          finalArray[finalArrayCounter] = leftArrat[leftArrayCounter]
//          leftArrayCounter++
//      finalArrayCounter++
//  while(leftArrayCounter < leftArray.length)
//      finalArray[finalArrayCounter++] = leftArrat[leftArrayCounter++]
//  while(rightArrayCounter < rightArray.length)
//      finalArray[finalArrayCounter++] = rightArrat[leftArrayCounter++]
class MergeSort {
    func sort(_ array: [Int]) -> [Int] {
        var arrayToBeSorted = array
        self.mergeSort(&arrayToBeSorted)
        return arrayToBeSorted
    }
    
    private func mergeSort(_ array: inout [Int]) {
        if array.count < 2 {
            return
        }
        let ct = array.count
        let mid = ct / 2
        var leftArray = Array(array[0..<mid])
        var rightArray = Array(array[mid..<ct])
        mergeSort(&leftArray)
        mergeSort(&rightArray)
        array = merge(left: leftArray, right: rightArray)
    }
    
    private func merge(left: [Int], right: [Int]) -> [Int] {
        let finalArraySize = left.count + right.count
        var mergedArray = Array<Int>()
        mergedArray.reserveCapacity(finalArraySize)
        var rightCounter = 0, leftCounter = 0
        while rightCounter < right.count && leftCounter < left.count {
            if right[rightCounter] <= left[leftCounter] {
                mergedArray.append(right[rightCounter])
                rightCounter += 1
            } else {
                mergedArray.append(left[leftCounter])
                leftCounter += 1
            }
        }
        while leftCounter < left.count {
            mergedArray.append(left[leftCounter])
            leftCounter += 1
        }
        
        while rightCounter < right.count {
            mergedArray.append(right[rightCounter])
            rightCounter += 1
        }
        return mergedArray
    }
}
