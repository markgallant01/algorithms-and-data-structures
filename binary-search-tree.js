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
    // base case
    if (!currentNode) {
      return;
    }
    else {
      // print current node
      console.log(currentNode.val);

      // print all nodes to the left
      this.preOrderTraversal(currentNode.left);

      // and all nodes to the right
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    // base case
    if (!currentNode) {
      return;
    }
    else {
      // print all nodes to the left
      this.inOrderTraversal(currentNode.left);

      // print current node
      console.log(currentNode.val);

      // print all nodes to the right
      this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {
    // base case
    if (!currentNode) {
      return;
    }
    else {
      // print any left nodes
      this.postOrderTraversal(currentNode.left);

      // print any right nodes
      this.postOrderTraversal(currentNode.right);

      // print current node
      console.log(currentNode.val);
    }
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
