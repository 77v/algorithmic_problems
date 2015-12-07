
// Print all paths of a binary tree

var tree = {
  data: 'A',
  left: {
    data: 'B',
    left: {
      data: 'D',
      left: {
        data: 'H'
      }
    }
  },
  right: {
    data: 'C',
    left: {
      data: 'F',
      right: { data: 'I' }
    },
    right: { data: 'G' }
  }
};


function printAllPaths(n, s) {
  s = s || [];

  s.push(n.data);

  if (!n.left && !n.right) {
    console.log(s.join(' '));
  } else {
    if (n.left) printAllPaths(n.left, s);
    if (n.right) printAllPaths(n.right, s);
  }

  s.pop();
}


function printAllPathsIterative(t) {
  var s = [t];
  var l = t;
  var p = null;

  while (s.length > 0) {

    if (!l.left && !l.right) {
      // leaf
      console.log(s.map(function(x) { return x.data; }).join(' '));
    }

    if ((!l.left && !l.right) || (p == l.left && !l.right) || p == l.right) {
      // go back
      p = l;
      s.pop();
      l = s[s.length - 1];
    } else if (l.left && p != l.left) {
      // go left
      p = l;
      s.push(l.left);
      l = l.left;
    } else if (l.right) {
      // go right
      p = l;
      s.push(l.right);
      l = l.right;
    }

  }
}

printAllPathsIterative(tree);

