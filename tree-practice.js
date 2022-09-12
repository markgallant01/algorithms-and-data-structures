const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // keep going left until there are no more nodes
  if (!rootNode.left) {
    return rootNode.val;
  }
  else {
    return findMinBST(rootNode.left);
  }
}

function findMaxBST (rootNode) {
  // keep going right until there are no more nodes
  if (!rootNode.right) {
    return rootNode.val;
  }
  else {
    return findMaxBST(rootNode.right);
  }
}

function findMinBT (rootNode) {
  let stack = [];
  stack.push(rootNode);
  let minVal = rootNode.val;

  while (stack.length > 0) {
    // check every value in the tree against the min val
    // first pop off current value
    let currentNode = stack.pop();
    
    // compare it
    if (currentNode.val < minVal) {
      minVal = currentNode.val;
    }

    // push any child nodes to the stack
    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }

  return minVal;
}

function findMaxBT (rootNode) {
  let stack = [];
  stack.push(rootNode);
  let maxVal = rootNode.val;

  while (stack.length > 0) {
    // check every value in the tree against the min val
    // first pop off current value
    let currentNode = stack.pop();
    
    // compare it
    if (currentNode.val > maxVal) {
      maxVal = currentNode.val;
    }

    // push any child nodes to the stack
    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }

  return maxVal;
}

function getHeight (rootNode) {
  // ensure rootNode exists
  if (!rootNode) {
    return -1;
  }

  let leftHeight = 0;
  let rightHeight = 0;

  if (rootNode.left) {
    leftHeight = 1 + getHeight(rootNode.left);
  }

  if (rootNode.right) {
    rightHeight = 1 + getHeight(rootNode.right);
  }

  return leftHeight > rightHeight ? leftHeight : rightHeight;
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
