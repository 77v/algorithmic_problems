
// http://careercup.com/question?id=5179916190482432

// input [2,3,1,4]
// output [12,8,24,6]

// Multiply all fields except it's own position.

// Restrictions: 
// 1. no use of division
// 2. complexity in O(n)


function multipleOthers(a) {
  var r = new Array(a.length);

  var mulLeft = new Array(a.length);
  var m = 1;
  for (var i = 0; i < mulLeft.length; i++) {
    m *= a[i];
    mulLeft[i] = m;
  }

  m = 1;
  var mulRight = new Array(a.length);
  for (var i = mulRight.length - 1; i >= 0; i--) {
    m *= a[i];
    mulRight[i] = m;
  }

  r[0] = mulRight[1];
  r[r.length - 1] = mulLeft[r.length - 2];
  for (var i = 1; i < r.length - 1; i++) {
    r[i] = mulLeft[i - 1] * mulRight[i + 1];
  }

  return r;
}

console.log(multipleOthers([2, 3, 1, 4]));
