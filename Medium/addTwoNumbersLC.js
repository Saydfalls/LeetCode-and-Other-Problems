/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let current = null;

    let carry = 0;
    let val;
    do {
        if(l1 != null && l2 != null){
            val = l1.val + l2.val;
            l1 = l1.next;
            l2 = l2.next;
        } else if(l1 != null) {
            val = l1.val;
            l1 = l1.next;
        }else if(l2 != null) {
            val = l2.val;
            l2 = l2.next;
        }
        if((val + carry) >= 10) {            
            val = (val + carry) % 10;
            carry = 1;
        } else {
            val += carry;
            carry = 0;
        }
        let newNode = new ListNode(val);
        if(head === null) {
            head = newNode;
            current = newNode;
        } else {
            current.next = newNode;
            current = current.next;
        }
    } while(!(l1 == null && l2 == null));

    if(carry == 1) current.next = new ListNode(1);
    
    return head;
};

