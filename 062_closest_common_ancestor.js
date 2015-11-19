
// http://careercup.com/question?id=6715482117767168

// The closest common ancestor in a tree forest.

// class Node {
//     Node* parent; // == null for root of tree
//     Node* left;
//     Node* right;
// }

// Node* tree_forest[]; // array of pointers which points to roots of each tree respectively

// Node* closest_common_ancestor(Node* n1, Node* n2) {
//     // your solution
// }Example:
// |    a     |   j
// |   / \    |  /
// |  b   c   | h
// | /   / \  |
// |d   e   f |

// for e and d CCA is a
// for e and f CCA is c
// for e and c CCA is c
// for h and d CCA is null

// Constrains: O(1) additional memory

function setParent(n, p) {
  n.parent = p;

  if (n.left) setParent(n.left, n);
  if (n.right) setParent(n.right, n);
}

function setParents(forest) {
  for (var i = 0; i < forest.length; i++) setParent(forest[i], null);
}

function closestCommonAncestor(x, y) {
  var lx = 0;
  var xx = x;
  while (xx.parent !== null) {
    lx++;
    xx = xx.parent;
  }
  
  var ly = 0;
  var yy = y;
  while (yy.parent !== null) {
    ly++;
    yy = yy.parent;
  }

  if (lx > ly) {
    for (var i = 0; i < lx - ly; i++) x = x.parent;
  } else if (ly > lx) {
    for (var i = 0; i < ly - lx; i++) y = y.parent;
  }

  while (x != y) {
    x = x.parent;
    y = y.parent;
  }

  return x;
}

var forest = [{
  data: 'a',
  left: {
    data: 'b',
    left: {
      data: 'd'
    }
  },
  right: {
    data: 'c',
    left: { data: 'e' },
    right: { data: 'f' }
  }
},
{
  data: 'j',
  left: { data: 'h' }
}]

setParents(forest);

console.log(closestCommonAncestor(forest[0].right.left, forest[0].left.left)); // e, d
console.log(closestCommonAncestor(forest[0].right.left, forest[0].right.right)); // e, f
console.log(closestCommonAncestor(forest[0].right.left, forest[0].right)); // e, c
console.log(closestCommonAncestor(forest[1].left, forest[0].left.left)); // h, d

