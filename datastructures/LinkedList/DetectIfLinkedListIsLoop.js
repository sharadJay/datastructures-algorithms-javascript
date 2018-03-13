// https://leetcode.com/problems/linked-list-cycle/description/
// Given a linked list, determine if it has a cycle in it.
//
// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if(!head || !head.next) return false;
    let slowPointer = head;
    let fastPointer = head.next;
    while (slowPointer != fastPointer){
        if(!fastPointer|| !fastPointer.next ) return false;
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    return true;
};