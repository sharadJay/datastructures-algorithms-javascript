//https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
//     For example,
//     Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;
    let node = head;
    while (node.next) {
        if (node.value == node.next.value) {// delete node.next and dont update the node
            node.next = node.next.next;
            node.next.next = null;
        } else {
            node = node.next;
        }
    }
    return head;
};