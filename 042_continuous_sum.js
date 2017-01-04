// http://careercup.com/question?id=6305076727513088

// Given a sequence of positive integers A and an integer T, return whether there is a continuous sequence of A that sums up to exactly T

// Example
// [23, 5, 4, 7, 2, 11], 20. Return True because 7 + 2 + 11 = 20 
// [1, 3, 5, 23, 2], 8. Return True  because 3 + 5 = 8
// [1, 3, 5, 23, 2], 7 Return False because no sequence in this array adds up to 7


function findSum(a, s) {
  if (a.length == 0) return false;

  var lo = 0;
  var r = 0;

  for (var i = 0; i < a.length; i++) {
    r += a[i];
    while (lo < i && r > s) {
      r -= a[lo];
      lo++;
    }

    if (r == s) return true;
  }

  return false;  
}

console.log(findSum([23, 5, 4, 7, 2, 11], 20));
console.log(findSum([1, 3, 5, 23, 2], 8));
console.log(findSum([1, 3, 5, 23, 2], 7));

