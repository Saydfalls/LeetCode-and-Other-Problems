/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function postOrderTraversal (node)
    {
        // ensures node exists
        if(!node) return null;
        if (node == p || node == q) return node;

        // recursive call
        let leftChild = postOrderTraversal(node.left);
        let rightChild = postOrderTraversal(node.right);

        if (leftChild && rightChild) return node;
        return leftChild ? leftChild : rightChild;
    }

    return postOrderTraversal(root);
};

// FIRST IDEA
/* this was the closest I came to a solution before giving up on doing it this way, I explain more in the commit. */
/*
var lowestCommonAncestor = function(root, p, q) {
    let pPath;
    let qPath;
    let nodeFound = { 
        pFound: false,
        qFound: false,
        };


    function preOrderTraversal (node)
    {
        // ensures node exists
        if(!node) return;

        // recursive call
        preOrderTraversal(node.left);

        if (node.val == p.val) pPath = node;
        if (node.val == q.val) qPath = node;

        preOrderTraversal(node.right);        
    }

    preOrderTraversal(root);
    
    console.log(pPath);
    console.log(qPath);

    for (let i = 0; i < pPath.length; i++)
    {
        for (let j = 0; j < qPath.length; j++)
        {
            if (pPath[i] == qPath[j])
            {
                function returnPreOrderTraversal (node, num)
                {
                    if (!node) return;

                    if (node.val == num) return node;
                    return returnPreOrderTraversal(node.left, num);
                    return returnPreOrderTraversal(node.right, num);
                }

                return returnPreOrderTraversal(root, pPath[i]);
            }
        }
    }
};
// I need to traverse tree until I find node p/q
// node values are unique so I can store nodes I've traversed
// important because I can find last common node
// I should do DFS and return path to node
// compare node paths
// pop longer path if unequal lengths
// for loop in reverse
// pop until reaching first common ancestor
*/
