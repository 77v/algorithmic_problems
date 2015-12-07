// http://careercup.com/question?id=12436663

// Given an unsorted array of integers, find a 3-element subset that sums to zero


function findZeroSumTriplett(a) {
  a.sort(function(x, y) { return x - y });

  for (var i = 0; i < a.length; i++) {
    var lo = 0;
    var hi = a.length - 1;

    while (lo < hi) {
      if (lo == i) lo++;
      else if (hi == i) hi--;
      else if (a[lo] + a[hi] + a[i] === 0) return [a[i], a[lo], a[hi]];
      else if (a[lo] + a[hi] + a[i] < 0) lo++;
      else hi--;
    }

    return null;
  }
}

console.log(findZeroSumTriplett([3, 6, 5, 8, -10, -4, 5]));
