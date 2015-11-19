// http://careercup.com/question?id=5692698000359424

// Array of size (n-m) with numbers from 1..n with m of them missing. Find one all of the missing numbers in O(log). Array is sorted.

// Example: 
// n = 8
// arr = [1,2,4,5,6,8]
// m=2
// Result has to be a set {3, 7}.

function findGap(a, s, p) {
  var lo = p;
  var x = a[lo];
  var hi = a.length - 1;

  while (lo <= hi) {
    var m = Math.floor((lo + hi) / 2);

    if (a[m] > s + m + 1 && (m === 0 || a[m - 1] == s + m)) return m;
    else if (a[m] == s + m + 1) lo = m + 1;
    else hi = m - 1;
  }

  return -1;
}

function findMissing(a, n) {
  var r = [];

  var p = 0;
  var s = 0;

  while (true) {
    p = findGap(a, s, p);
    if (p < 0) break;

    var l = (p == 0) ? 1 : a[p - 1] + 1;
    for (var k = l; k < a[p]; k++) {
      r.push(k);
      s++;
    }

    p++;
  }
  
  for (var k = a[a.length - 1] + 1; k < n; k++) r.push(k);

  return r;
}

console.log(findMissing([2, 4, 5, 6, 8], 11));

