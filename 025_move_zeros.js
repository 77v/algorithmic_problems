// http://careercup.com/question?id=5767394003779584

// Given an array of integers. Modify the array by moving all the zeros to the end (right side).
// The order of the other elements doesn't matter.


function move(a) {
  var lo = 0;
  var hi = a.length - 1;

  while (lo < hi && a[hi] === 0) hi--;

  while (lo < hi) {
    if (a[lo] === 0) {
      var tmp = a[lo];
      a[lo] = a[hi];
      a[hi] = tmp;

      while (lo < hi && a[hi] === 0) hi--;
    }

    lo++;
  }
}

var a = [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
move(a);
console.log(a);

