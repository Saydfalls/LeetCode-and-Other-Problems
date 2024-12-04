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

