// http://careercup.com/question?id=5728188153987072

// You are given an array of non-negative integers (0, 1, 2 etc).
// The value in each element represents the number of hops you may take to the next destination.
// Write a function that determines when you start from
// the first element whether you will be able to reach the last element of the array. 

// if a value is 3, you can take either 0, 1, 2 or 3 hops. 

// For eg: for the array with elements 1, 2, 0, 1, 0, 1, any route you take from the first element, you will not be able to reach the last element."


function solve(a) {
  var score = a[0];
  var i;
  for (var i = 1; i < a.length && score > 0; i++) {
    score = Math.max(score - 1, a[i]);
  }

  return i == a.length;
}


console.log(solve([1, 2, 0, 1, 0, 1]));
