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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // return case for empty tree
    if(!root) return [];

    // init result
    let result = [];
    // init queue
    let queue = [root];

    // if the queue isn't empty continue looping
    while (queue.length > 0)
    {
        // tracks the size of the current level of the tree
        // gets a new size after the for loop completes
        let levelSize = queue.length;
        // array that will hold the values at the current level
        let currentLevel = [];

        // iterates through what is at the current level of the array
        // dictated by levelSize (aka current queue length)
        for(let i = 0; i < levelSize; i++)
        {
            // dequeue node and store value to currentLevel array 
            // do this because node should not be tracked at
            // next while loop iteration as it wouldn't be on the same level anymore.
            let node = queue.shift();
            currentLevel.push(node.val);

            // check if the current node has left or right children
            // if it does add them to the queue.
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        // add resulting currentLevel array to the final result 
        result.push(currentLevel);
    }
    // return the result
    return result;
};

// btree level order traversal
// this is bfs
// we use a queue
// enqueue the root node
// following that repeat the process of:
// enqueueing the child nodes of the current node
// and then moving to the next node.
// how do we access a node?
// we can access the node simply by checking its existence
// we cannot access nonexistent things
// for example if our parent node has two node children that are null
// we cannot access their children, they were never created
// however we can access the children because they were created when the parent was.
// Additionally the value of null declared children is also null. 
// This means we cannot access the value of a null value child.
// So 2 checks must be made:
// The first check is to see if the node is not null
// Then the next check is to see if the value is not null
// when the value is not null we save it
