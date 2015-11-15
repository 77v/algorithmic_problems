
function solve(a, k) {
  var lo = 0;

  for (var hi = 1; hi < a.length; hi++) {

    while (lo < hi - 1 && (a[hi] - a[lo]) > k) lo++;

    if (a[hi] - a[lo] == k) console.log(a[lo], a[hi]);
  }
}

var a = [1, 2, 3, 5, 6, 8, 9, 11, 12, 13];
var k = 3;

solve(a, k);

