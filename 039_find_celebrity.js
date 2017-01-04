// http://careercup.com/question?id=5090815091146752

// Given a set of n people, find the celebrity.
// Celebrity is a person who:
// 1. Knows only himself and no one else
// 2. Every one else knows this person

// You are given the following helper function:
// bool knows(i, j);
// Returns:
// True: If i knows j
// False: otherwise

function findCelebrity(k) {
  var c = 0;
  for (var i = 0; i < k.length; i++) {
    if (k[c][i]) c = i;
  }

  return c;
}

var k = [
  [1, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 0],
  [0, 0, 1, 1]
];

console.log(findCelebrity(k));

