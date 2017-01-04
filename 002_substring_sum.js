// http://careercup.com/question?id=5681862682869760

// "Given an array of positive integers (excluding zero) and a target number.
// Detect whether there is a set of consecutive elements in the array that add up to the target.

// Example: a = {1, 3, 5, 7, 9}
// target  = 8

// output = true ({3, 5})

// or target = 15
// output = true : {3, 5, 8}

// but if target = 6, output would be false. since 1 and 5 are not next to each other."


function solve(a, t) {
  var lo = 0;
  var loSum = 0;
  var hi = 0;
  var hiSum = a[0];

  while (hi < a.length) {

    while (hiSum - loSum > t) {
      loSum += a[lo];
      lo++;
    }

    if (hiSum - loSum == t) {
      return a.slice(lo, hi + 1);
    }

    hi++;
    if (hi < a.length) hiSum += a[hi];
  }

  return false;
}

var a = [1, 3, 5, 7, 9];

console.log(solve(a, 8));

