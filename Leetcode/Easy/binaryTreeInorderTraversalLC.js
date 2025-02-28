/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    let arr = [];

    function ioT (node, arr)
    {
        if (!node) return;

        ioT(node.left, arr);
        arr.push(node.val);
        ioT(node.right, arr);
    }

    ioT(root, arr);    
    return arr;
};

/* ITERATIVE SOLUTION */
/*
var inorderTraversal = function(root) {
    if(!root) return [];
    let arr = [];
    
    let stack = [];
    let current = root;
    while (stack.length > 0 || current) 
    {
        while (current)
        {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        arr.push(current.val);
        current = current.right;
    }   
    
    return arr;
};
*/

/* OLD SOLUTION */
/*
var inorderTraversal = function(root) {
    let arr = [];

    const recurseTraverse = function(currNode){
        if(currNode === null) return;

        recurseTraverse(currNode.left);
        arr.push(currNode.val);
        recurseTraverse(currNode.right);
    }
    recurseTraverse(root);
    
    return arr;
};
*/
