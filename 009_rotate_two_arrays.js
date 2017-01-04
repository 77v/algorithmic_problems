// http://careercup.com/question?id=5756151524229120

// We have an array of objects A and an array of indexes B.
// Reorder objects in array A with given indexes in array B. Do not change array A''s length.

// example:var A = [C, D, E, F, G];
// var B = [3, 0, 4, 1, 2];

// sort(A, B);

// // A is now [D, F, G, C, E];"

function rotate(a, b, s) {
  var n = b[s];
  var nn = b[s];
  var c = a[s];

  while (b[n] >= 0) {
    var nnc = a[n];
    nn = b[n];
    a[n] = c;
    b[n] = -b[n] - 1;
    n = nn;
    c = nnc;
  }
}

function sort(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (b[i] >= 0) rotate(a, b, i);
  }

  for (var i = 0; i < b.length; i++) {
    b[i] = -b[i] - 1;
  }
}


var a = ['C', 'D', 'E', 'F', 'G', 'S'];
var b = [3, 0, 2, 1, 4, 5];

sort(a, b);

console.log(a, b);
