
// http://careercup.com/question?id=5678808906596352
// For each node in a binary tree find the next right node on the same depth.
// Write a function that takes root node and populates ""next"" with the answer for each node.

//        A
//      /   \
//     B ->  C
//    /     / \
//   D ->  F-> G
//  /       \
// H   ->    I

// class Node {
//   Node left;
//   Node right;
//   Node next; // <-- answer should be stored here
// };

// B.next = C
// D.next = F
// F.next = G
// H.next = I
// {A, C, G, I}.next = null

function populate(tree) {
  var q = [tree];
  var nq = [];

  while (q.length > 0) {
    for (var i = 0; i < q.length - 1; i++) {
      q[i].next = (i < q.length - 1) ? q[i + 1] : null;
      if (q[i].left) nq.push(q[i].left);
      if (q[i].right) nq.push(q[i].right);
    }
    q = nq;
    nq = [];
  }
}

function populate2(tree) {
  var fc = tree;
  while (fc) {
    var n = fc;
    fc = null;
    var pc = null;

    while (n) {
      if (n.left) {
        if (!fc) fc = n.left;
        if (pc) pc.next = n.left;
        pc = n.left;
      }

      if (n.right) {
        if (!fc) fc = n.right;
        if (pc) pc.next = n.right;
        pc = n.right;
      }

      n = n.next;
    }

    if (pc) pc.next = null;
  }
}


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

populate2(tree);
