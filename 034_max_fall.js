// http://careercup.com/question?id=6207499378098176
// Given an array of integer, find the maximum drop between two array elements,
// given that second element comes after the first one.


function solve(a) {
  var hi = null;
  var lo = null;
  var lastMax = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] > a[lastMax]) lastMax = i;

    if (hi === null) {
      if (a[lastMax] - a[i] > 0) {
        hi = lastMax;
        lo = i;
      }
    } else {
      if (a[lastMax] - a[i] > a[hi] - a[lo]) {
        hi = lastMax;
        lo = i;
      }
    }
  }

  return (hi !== null) ? { hi: a[hi], lo: a[lo] } : null;
}

var a = [5, 6, 7, 6];
console.log(solve(a));
