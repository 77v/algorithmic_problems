// http://careercup.com/question?id=5748231105413120

// Given a Tree:A
//   /\ 
//  B  C
//  /\  /\
// D E    F G

// Write a function that prints:

// A
// BC
// DEFG

function printLevels(t) {
  var q = [t];
  var qq = [];
  var s = '';
  
  while (q.length > 0) {
    s += q[0].data;
    if (q[0].left) qq.push(q[0].left);
    if (q[0].right) qq.push(q[0].right);

    q.splice(0, 1);
    if (q.length === 0) {
      q = qq;
      qq = [];
      console.log(s);
      s = '';
    }
  }
}

var tree = {
  data: 'A',
  left: {
    data: 'B',
    left: { data: 'D' },
    right: { data: 'E' }
  },
  right: {
    data: 'C',
    left: { data: 'F' },
    right: { data: 'G' }
  }
};

printLevels(tree);
