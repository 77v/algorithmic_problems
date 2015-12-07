// http://careercup.com/question?id=5764338593824768

// Given an array of integers. We have to find the max element of the array,
//   which is at multiple places in the array and return any one of the indices randomly.

function findRandomIndexOdMax(a) {
  var maxIndex = 0;
  for (var i = 1; i < a.length; i++) {
    if (a[i] > a[maxIndex]) maxIndex = i;
  }

  var maxCount = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == a[maxIndex]) maxCount++;
  }

  var randomIndex = Math.floor(Math.random() * maxCount);

  var count = -1;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == a[maxIndex]) count++;
    if (count == randomIndex) return i;
  }
}

console.log(findRandomIndexOdMax([2, 4, 5, 4, 5, 2, 4, 5]));
