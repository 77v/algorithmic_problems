// http://careercup.com/question?id=5126656387710976
// check a binary tree is a binary search tree

function isBst(t, min, max) {
  
  if (t === null) return true;

  min = min || -1000;
  max = max || 1000;

  if (t.data >= max || t.data <= min) return false;
  if (t.left && !isBst(t.left, min, t.data)) return false;
  if (t.right && !isBst(t.right, t.data, max)) return false;

  return true;
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

console.log(isBst(tree));
