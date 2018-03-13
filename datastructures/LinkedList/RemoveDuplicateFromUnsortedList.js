// https://www.geeksforgeeks.org/remove-duplicates-from-an-unsorted-linked-list/

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
    let node = head;
    let prev = null;
    let memo = [];
    while (node && node.next) {
        if (memo.includes(node.val)) {
            prev.next = node.next;
        } else {
            memo.push(node.val);
        }
        prev = node;
        node = node.next;
    }
    return head;
}