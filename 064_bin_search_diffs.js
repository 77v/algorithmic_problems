// http://careercup.com/question?id=5129701993480192

// Given an array of ages (integers) sorted lowest to highest, output the number of occurrences for each age.
// For instance: 
// [8,8,8,9,9,11,15,16,16,16]
// should output something like:
// 8: 3
// 9: 2
// 11: 1
// 15: 1
// 16: 3

// This should be done in less than O(n).

function findNext(a, lo) {
  var hi = a.length - 1;
  var x = a[lo];

  while (lo <= hi) {
    var m = Math.floor((lo + hi) / 2);
    if (a[m] == x && a[m + 1] != x) return m + 1;

    if (a[m] == x) lo = m + 1;
    else hi = m - 1;
  }
}

function solve(a) {
  var p = 0;
  while (p < a.length) {
    var np = findNext(a, p);
    console.log(a[p] + ': ' + (np - p));
    p = np;
  }
}


var a = [8, 8, 8, 9, 9, 11, 15, 16, 16, 16];
solve(a);

