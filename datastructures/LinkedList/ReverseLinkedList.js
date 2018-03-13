//https://leetcode.com/problems/reverse-linked-list/
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
 * */
var reverseList = function (head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let tempNode = curr.next;
        tempNode.next = curr;
        prev = curr;
        curr = tempNode;
    }
    return prev;
};