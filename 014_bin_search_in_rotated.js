// http://careercup.com/question?id=5160350129324032
// Search in a sorted rotated array.

function find(a, x) {
  var lo = 0;
  var hi = a.length - 1;

  while (lo < hi) {
    var m = Math.floor((lo + hi) / 2);
    if (a[m] == x) return m;
    if (a[lo] == x) return lo;
    if (a[hi] == x) return hi;

    if (a[lo] < a[m]) {
      if (x >= a[lo] && x < a[m]) hi = m;
      else lo = m + 1;
    } else {
      if (x > a[m] && x <= a[hi]) lo = m + 1;
      else hi = m;
    }
  }

  return -1;
}

var a = [11, 14, 15, 1, 3, 4, 6, 8, 9];

for (var i = 0; i < 20; i++) {
  if (a.indexOf(i) != find(a, i)) console.log(i);
}
