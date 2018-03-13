// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// Given a linked list, remove the nth node from the end of list and return its head.
//
//     For example,
//
//     Given linked list: 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
//     Given n will always be valid.
//     Try to do this in one pass.
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let firstPointer = dummyNode;
    let secondPointer = dummyNode;
    while (n > -1) {
        secondPointer = secondPointer.next;
        n--;
    }
    let firstPointersPrev = null;
    while (secondPointer) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }
    firstPointer.next = firstPointer.next.next;
    return dummyNode.next;
};

//notes :- there should be two pointers, where seconds is n links away from first
// when second reaches the end, we remove the node where first points to currently