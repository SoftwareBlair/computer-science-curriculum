/*
  Given the root of the following tree...

       A
      /\
    B   C
   /\
  D E

  Write a recursive algorithm that returns its values as an array, ordered using a depth first search, pre-order strategy.
*/
module.exports.preOrder = function(root) {
  let data = [];
  let current = root;

  function search(node) {
    data.push(node.data);
    if (node.left) {
      search(node.left);
    }
    if (node.right) {
      search(node.right);
    }
  }
  search(current);
  return data;
};

/*
  Given the root of the following tree...

       A
      /\
    B   C
   /\
  D E

  Write a recursive algorithm that returns its values as an array, ordered using a depth first search, in-order strategy.
*/
module.exports.inOrder = function(root) {
  let data = [];
  let current = root;

  function search(node) {
    if (node.left) {
      search(node.left);
    }
    data.push(node.data);
    if (node.right) {
      search(node.right);
    }
  }

  search(current);
  return data;
};

/*
  Given the root of the following tree...

       A
      /\
    B   C
   /\
  D E

  Write a recursive algorithm that returns its values as an array, ordered using a depth first search, post-order strategy.
*/
module.exports.postOrder = function(root) {
  let data = [];
  let current = root;

  function search(node) {
    if (node.left) {
      search(node.left);
    }
    if (node.right) {
      search(node.right);
    }
    data.push(node.data);
  }

  search(current);
  return data;
};
