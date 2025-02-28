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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let sum = 0;
    let result = false;

    function dfs(node, currentSum, target) {
        if (!node || result == true) {
            return result;
        }
        currentSum += node.val;
        if((!node.left && !node.right) && currentSum == target) result = true;


        dfs(node.left, currentSum, target);
        dfs(node.right, currentSum, target);
    }

    dfs(root, sum, targetSum);

    return result;
};

// this is a DFS problem
// DFS allows me to go to the leaves immediately
// what I can do is actually have a sum tracker as well
// every time I traverse down the tree add to the sum
// every time I traverse up the tree subtract from the sum
// if sum == targetSum && node is a leaf return true
// else return false

/* OPTIMIZED SOLUTION */
/*
var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    function dfs(node, currentSum) {
        if (!node) return false;

        currentSum += node.val;
        if((!node.left && !node.right) && currentSum == targetSum) return true;


        return dfs(node.left, currentSum) || dfs(node.right, currentSum);
    }

    return dfs(root, 0);
};
*/
