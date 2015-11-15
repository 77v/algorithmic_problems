// http://careercup.com/question?id=5195842518515712

// dutch national flag w/ get rank followup

function swap(a, x, y) {
  var tmp = a[x];
  a[x] = a[y];
  a[y] = tmp;
}

function sort3(a) {
  var lo = 0;
  while (lo < a.length && a[lo] == 0) lo++;

  var hi = a.length - 1;
  while (hi >= 0 && a[hi] == 2) hi--;

  for (var i = lo; i < hi; i++) {
    if (a[i] == 0) {
      swap(a, lo, i);
      lo++;
    } else if (a[i] == 2) {
      swap(a, hi, i);
      hi--;
    }

    while (lo < a.length && a[lo] == 0) lo++;
    while (hi >= 0 && a[hi] == 2) hi--;
  }
}

var a = [0, 2, 1, 2, 0, 0, 1, 0, 2, 2, 0, 2];
sort3(a);
console.log(a);

