//https://leetcode.com/problems/divisor-game/
//Alice and Bob take turns playing a game, with Alice starting first.
//
//Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:
//
//Choosing any x with 0 < x < N and N % x == 0.
//Replacing the number N on the chalkboard with N - x.
//Also, if a player cannot make a move, they lose the game.
//
//Return True if and only if Alice wins the game, assuming both players play optimally.
//
//
//
//Example 1:
//
//Input: 2
//Output: true
//Explanation: Alice chooses 1, and Bob has no more moves.
//Example 2:
//
//Input: 3
//Output: false
//Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

class Solution {
    func divisorGame(_ N: Int) -> Bool {
        return N % 2 == 0
    }
}


print(Solution().divisorGame(2))

// Solution explanation
// the person who gets 1 at anytime will loose as there is nothing less than 1
// the person who gets 2 at anytime will win as 2 -> 1(loose)
// to get to 2, the person who gets an even number should always use x as 1 so that next person gets odds and he gets odd back
