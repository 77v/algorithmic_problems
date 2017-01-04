// http://careercup.com/question?id=5647453514629120

// Convert a binary tree into a In Order traversal circular list re-purposing the node's pointers Left & Right as Previous and Next respectively.

// Hint: A single node Left & Right points to itself.

// Note: This is not a binary search tree."

var f = null;
var p = null;

function inOrder(n) {
  var l = n.left;
  var r = n.right;

  if (l) inOrder(l);
  
  if (f === null) f = n;

  if (p !== null) {
    p.right = n;
    n.left = p;
  }
  p = n;

  if (r) inOrder(r); 
}

function reconnect(tree) {
  if (tree === null) return null;

  f = null;
  p = null;

  inOrder(tree);

  p.right = f;
  f.left = p;
  
  return f;
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

var f = reconnect(tree);

var ff = f;
do { console.log(ff.data); ff = ff.right; } while (ff != f);
console.log('----');
do { console.log(ff.data); ff = ff.left; } while (ff != f);
