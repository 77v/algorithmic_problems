// http://careercup.com/question?id=5146925198213120

// Write a program to find pattern.

// 0: 1
// 1: 11
// 2: 21
// 3: 1211
// 4: 111221
// 5:  312211

// Iterate over the previous number, and find count for same number number.  Append that count before number.

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// 1211 is read off as "one 1, then one 2, then two 1s" or 111221.
// 111221 is read off as "three 1s, then two 2s, then one 1" or 312211.

// e.g., 
// public String pattern(int input){} 

// If input = 4, function should return 111221.


function pattern(n) {
  var p = '1';
  for (var i = 0; i < n; i++) {
    var np = '';
    var c = 1;
    for (var k = 0; k < p.length; k++) {
      if (k == p.length - 1 || p[k] != p[k + 1]) {
        np = np + c + p[k];
        c = 1;
      } else c++;
    }

    p = np;
  }

  return p;
}

console.log(pattern(4));

