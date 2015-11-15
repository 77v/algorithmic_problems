// http://careercup.com/question?id=5113392333324288

// Given an array such that every next element differs from the previous by +/- 1.
// (i.e. a[i+1] = a[i] +/-1 ) Find the local max OR min in O(1) time.
// The interviewer mentioned one more condition that the min or max should be non-edge elements of the array

// Example: 1 2 3 4 5 4 3 2 1 -> Local max is 5
// 1 2 3 4 5 -> No local max or min exists
// 5 4 3 2 1 -> No local max or min exists

function findExtrem(a) {
  if (a.length < 3) return null;
  
  if (a[0] < a[1] && a[a.length - 1] - a[0] == a.length - 1) return null;
  if (a[0] > a[1] && a[0] - a[a.length - 1] == a.length - 1) return null;

  if (a[0] < a[1]) return (a[0] + a.length - 1 + a[a.length - 1]) / 2;
  else return (a[0] - a.length + 1 + a[a.length - 1]) / 2;
}


console.log(findExtrem([1, 2, 3, 4, 5, 4, 3, 2, 1]), 5);
console.log(findExtrem([2, 3, 4, 5, 4, 3, 2, 1]), 5);
console.log(findExtrem([4, 5, 4, 3, 2, 1]), 5);
console.log(findExtrem([8, 9, 8]), 9);
console.log(findExtrem([9, 8, 9]), 8);
console.log(findExtrem([1, 2, 3, 4, 5]), null);
console.log(findExtrem([5, 4, 3, 2, 1]), null);

