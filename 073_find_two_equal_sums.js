// http://careercup.com/question?id=5652354158297088

// You're given an array of integers(eg [3,4,7,1,2,9,8]) Find the index of values
// that satisfy A+B = C + D, where A,B,C & D are integers values in the array. 

// Eg: Given [3,4,7,1,2,9,8] array
// The following
// 3+7 = 1+ 9  satisfies A+B=C+D
// so print (0,2,3,5)


function findUniqAbcd(a) {
  var h = {};
  for (var i = 0; i < a.length - 1; i++) {
    for (var k = i + 1; k < a.length; k++) {
      if (h[a[i] + a[k]] === undefined) h[a[i] + a[k]] = { ai: i, bi: k };
      else return [h[a[i] + a[k]].ai, h[a[i] + a[k]].bi, i, k];
    }
  }
}

console.log(findUniqAbcd([3, 4, 7, 1, 2, 9, 8]));
