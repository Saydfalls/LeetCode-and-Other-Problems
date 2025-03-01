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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let depth = { max: 1 };

    function ioT(node, level)
    {
        if(!node) return;

        if(level > depth.max) depth.max = level;
        ioT(node.left, level + 1);
        ioT(node.right, level + 1);
    }

    ioT(root, 1);
    return depth.max;
};
