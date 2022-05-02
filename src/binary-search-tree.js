const { NotImplementedError } = require('../extensions/index.js');


 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree
  }

  add( data ) {
    this.tree = build(this.tree, data);

        function build(node, data) {
            if (!node) return new Node(data);
            
            if (node.data === data) return node;
    
            if (node.data > data) node.left = build(node.left, data);
             else node.right = build(node.right, data);
            
            return node;
        }
  }

  has( data ) {
    return findIt(this.tree, data);

    function findIt(node, data) {
      let it;
      if (!node) return false;
      

      if (node.data === data) return true;
      

      if (node.data > node) it = findIt(node.left, data);
        else it = findIt(node.right, data);
        return it
    }
  }

  find( data ) {
    let node = this.tree;
    while (node) {
      if (node.data < data) node = node.right;
       else if (node.data >data) node = node.left;
       else if (node.data === data) return node
      
    }
    return null
  }

  remove( data ) {
    this.tree = removeIt(this.tree, data);

    function removeIt(node, data) {
      if (!node) {
        return null
      }

      if (node.data > data) {
        node.left = removeIt(node.left, data);
        return node
      } else if (node.data < data) {
        node.right = removeIt(node.right, data);
        return node
      } else {
        if (!node.left && !node.right) return null
        

        if (!node.left) {
          node = node.right;
          return node
        }

        if (!node.right) {
          node = node.left;
          return node
        }

        let temp = node.right;
        while (temp.left) {
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = removeIt(node.right, temp.data);

        return node
      }
    }
  }

  min() {
    if (!this.tree) return false

    let node = this.tree;
    while (node.left) node = node.left;


    return node.data
  }

  max() {
    if (!this.tree) return false

    let node = this.tree;
    while (node.right) node = node.right;
    

    return node.data
    
  }
  }


module.exports = {
  BinarySearchTree
};