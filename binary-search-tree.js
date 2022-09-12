// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val);

    if (!this.root) {
      // empty BST, insert at root
      this.root = newNode;
    }
    else {
      
      // left
      if (newNode.val < currentNode.val) {
        if (!currentNode.left) {
          // insert at left
          currentNode.left = newNode;
        }
        else {
          // move left down the tree
          this.insert(newNode.val, currentNode.left);
        }
      }

      // right
      else {
        if (!currentNode.right) {
          // insert at right
          currentNode.right = newNode;
        }
        else {
          // move right down the tree
          this.insert(newNode.val, currentNode.right);
        }
      }

    }

  }

  search(val, currentNode = this.root) {

    // check for empty BST
    if (!this.root) {
      return false;
    }
    else {

      // check current node
      if (currentNode.val === val) {
        return true;
      }
      else {
        
        // check left
        if (val < currentNode.val && currentNode.left) {
          return this.search(val, currentNode.left);
        }

        // or check right
        else if (val > currentNode.val && currentNode.right) {
          return this.search(val, currentNode.right);
        }

        else {
          return false;
        }

      }
      
    }
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
