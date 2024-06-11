/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let sentinel = new ListNode(0);
    let current = sentinel;

    while(list1 !== null || list2 !== null) {
        let val1 = (list1 !== null) ?  list1.val : null;
        let val2 = (list2 !== null) ? list2.val : null;
        
        if(val1 != null && (val2 == null || val1 <= val2)) {
            current.next = new ListNode(val1);
            current = current.next;
            if(list1 != null) list1 = list1.next;
        } else if(val2 != null) {
            current.next = new ListNode(val2);
            current = current.next;
            if(list2 != null) list2 = list2.next;
        }
    }

    return sentinel.next;
};