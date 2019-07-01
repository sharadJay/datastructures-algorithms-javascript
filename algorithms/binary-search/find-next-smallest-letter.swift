//https://leetcode.com/problems/find-smallest-letter-greater-than-target/
//Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.
//
//Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.
//
//Examples:
//Input:
//letters = ["c", "f", "j"]
//target = "a"
//Output: "c"
//
//Input:
//letters = ["c", "f", "j"]
//target = "c"
//Output: "f"
//
//Input:
//letters = ["c", "f", "j"]
//target = "d"
//Output: "f"
//
//Input:
//letters = ["c", "f", "j"]
//target = "g"
//Output: "j"
//
//Input:
//letters = ["c", "f", "j"]
//target = "j"
//Output: "c"
//
//Input:
//letters = ["c", "f", "j"]
//target = "k"
//Output: "c"
//Note:
//letters has a length in range [2, 10000].
//letters consists of lowercase letters, and contains at least 2 unique letters.
//target is a lowercase letter.



class Solution {
    func nextGreatestLetter(_ letters: [Character], _ target: Character) -> Character {
        if letters[letters.count - 1] <= target {
            return letters[0]
        }
        
        let character = nextCharacter(target) ?? "a"
        var low = 0
        var high = letters.count
        while low < high {
            let mid = low + (high - low)/2
            if letters[mid] == character {
                return letters[mid]
            }
            if letters[mid] < character {
                low = mid + 1
            } else {
                high = mid
            }
        }

        return letters[high]
    }
    
    private func nextCharacter(_ character: Character) -> Character? {
        guard let asciiCode = character.asciiValue else {
            return nil
        }
        return Character(UnicodeScalar(asciiCode + 1))
    }
}


print(Solution().nextGreatestLetter(["c", "f", "j"], "j"))

// low = 0 high = 5
// mid = 2
// returned with 2
