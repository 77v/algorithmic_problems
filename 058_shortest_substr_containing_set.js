// http://careercup.com/question?id=5092414932910080

// You are given a set of unique characters and a string.

// Find the smallest substring of the string containing all the characters in the set.

// ex:
// Set : [a, b, c]
// String : "abbcbcba"

// Result: "cba"

var c = null;
var cc = 0;

function addChar(ch, t) {
  var idx = t.indexOf(ch);
  if (idx < 0) return;

  c[idx]++;
  if (c[idx] == 1) cc++;
}

function removeChar(ch, t) {
  var idx = t.indexOf(ch);
  if (idx < 0) return;

  c[idx]--;
  if (c[idx] === 0) cc--;
}

function solve(s, t) {
  c = new Array(t.length);
  for (var i = 0; i < c.length; i++) c[i] = 0;
  cc = 0;

  var lo = 0;
  var bestLo = -1;
  var bestHi = -1;

  for (var i = 0; i < s.length; i++) {
    addChar(s[i], t);

    if (cc == t.length) {
      do {
        removeChar(s[lo], t);
        lo++;
      }
      while (lo < i && cc == t.length);

      if (bestLo == -1 || i - lo < bestHi - bestLo) {
        bestLo = lo;
        bestHi = i;
      }
    }
  }

  return s.substring(bestLo - 1, bestHi + 1);
}

console.log(solve('abbcbcba', ['a', 'b', 'c']));

