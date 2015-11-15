// http://careercup.com/question?id=5656021852749824      
// Find the in-order successor of a node in BST

function setParent(node, parent) {
  parent = parent || null;
  node.parent = parent;
  if (node.left) setParent(node.left, node);
  if (node.right) setParent(node.right, node);
}

function findSuccessor(node) {
  var n;
  if (node.right) {
    n = node.right;
    while (n.left) n = n.left;

    return n.data;
  }

  n = node;
  while (n.parent && n == n.parent.right) n = n.parent;

  return n.parent ? n.parent.data : null;
}

function findMax(node) {
  
}

function findSuccessorWithoutParent(tree, node) {
  if (!tree) return null;
  else if (tree.data < node.data) return findSuccessorWithoutParent(tree.right, node);
  else if (tree == node) {
    if (!tree.right) return null;
    var n = tree.right;
    while (n.left) n = n.left;
    return n.data;
  } else if (tree.data > node.data) {
    var n = tree.left;
    while (n.right) n = n.right;
    if (n == node) return tree.data;
    else return findSuccessorWithoutParent(tree.left, node);
  }
}

function inOrder(node, cb) {
  if (node.left) inOrder(node.left, cb);
  cb(node);
  if (node.right) inOrder(node.right, cb);
}

var tree = {
  data: 5,
  left: {
    data: 2,
    right: { data: 3 }
  },
  right: {
    data: 8,
    left: { data: 6 },
    right: { data: 9 }
  }
}

// setParent(tree);

// console.log(findSuccessor(tree));
// console.log(findSuccessorWithoutParent(tree, tree.left.right));

inOrder(tree, function(n) {
  console.log(n.data, findSuccessorWithoutParent(tree, n));
});
