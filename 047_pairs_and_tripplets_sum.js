// http://careercup.com/question?id=5631319184769024

// given an array (list) of integers return true(boolean function) if two of the numbers add to 12.

function checkSum(a, s) {
  a.sort(function(x, y) { return x - y; });

  var lo = 0;
  var hi = a.length - 1;

  while (lo < hi) {
    while (lo < hi && a[hi] + a[lo] > s) hi--;
    if (lo < hi && a[hi] + a[lo] == s) return true;
    lo++;
  }

  return false;
}


function checkTrippletSum(a, s) {
  a.sort(function(x, y) { return x - y; });

  for (var i = 0; i < a.length; i++) {
    var lo = 0;
    if (lo == i) lo++;
    var hi = a.length - 1;
    
    while (lo < hi) {
      while (lo < hi && a[hi] + a[lo] > s - a[i]) hi--;
      if (hi == i) hi--;
      if (lo < hi && a[hi] + a[lo] == s - a[i]) return true;
      lo++;
      if (lo == i) lo++;
    }

    return false;
  }
}


var a = [4, 6, 6, 3];
// console.log(checkSum(a, 12));
console.log(checkTrippletSum(a, 12));

