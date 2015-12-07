// http://careercup.com/question?id=10018885

// Given an array of size n, find all the possible sub set of the array of size k(all the subsets must be of size k).

function printSubsets(a, k) {
  var p = new Array(k);
  for (var i = 0; i < k; i++) p[i] = i;

  while (true) {
    console.log(p.map(function(x) { return a[x]; }));

    var j = k - 1;
    while (j >= 0 && p[j] == a.length - k + j) j--;
    if (j < 0) break;

    p[j]++;
    var l = 1;
    for (var l = 1; j + l < k; l++) p[j + l] = p[j] + l;
  }
}

printSubsets([1, 2, 3, 4, 5], 3);

