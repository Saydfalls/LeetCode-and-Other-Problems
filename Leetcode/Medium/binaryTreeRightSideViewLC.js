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
var rightSideView = function(root) {
    if(!root) return [];
    let result = [];
    
    let queue = [root];
    while (queue.length > 0)
    {
        let level_size = queue.length;
        for (let i = 0; i < level_size; i++)
        {
            let current_node = queue.shift();
            if(i == (level_size - 1)) result.push(current_node.val);
            
            if (current_node.left) queue.push(current_node.left);
            if (current_node.right) queue.push(current_node.right);
        }
    }

    return result;
};

// we are given a binary tree
// we want to output all the "rightmost" nodes in a tree
// we need to do solution 102 and then get the last node from each list
// last node is the rightmost
// that solution requires us to store an array of arrays
// which would make it easy to get the last value of each sub-array
// however we can skip that step
// instead of adding that value to a subarray
// we can just start dequeueing 
// immediately upon reaching the last node in a level we add that to the result array
