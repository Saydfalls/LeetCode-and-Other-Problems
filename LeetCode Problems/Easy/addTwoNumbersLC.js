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
    let num1 = 0
    let tenX = 1
    for(let i = 0; i < l1.length; i++){
        let adder = tenX*l1[i]
        num1 += adder
        tenX *= 10
    }

    console.log(num1)
    
    let num2 = 0
    tenX = 1
    for(let i = 0; i < l1.length; i++){
        let adder = tenX*l1[i]
        num2 += adder
        tenX *= 10
    }
    
    num1 += num2
    let l3 = []
    tenX = 10
    while(num1 != 0){
        let digit = num1 % tenX
        num1 -= digit
        l3.push(digit)
        tenX *= 10
    }
    l1 = l3.reverse()
    return l1
};


addTwoNumbers()