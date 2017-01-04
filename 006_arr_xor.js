// http://www.careercup.com/question?id=5644130656976896

// Given n, return 1 ^ 2 ^ 3 ^ ... ^ n 
// Where ^ is binary xor. 
// Note: n is a 64-bit number, and 1<<63 is a valid n for this problem. 

// Examples:

// >>> reduce(lambda a,b:a^b, [1,2,3])
// 0
// >>> reduce(lambda a,b:a^b, [1,2,3,4])
// 4
// >>> reduce(lambda a,b:a^b, [1,2,3,4,5,6,7])
// 0
// >>> reduce(lambda a,b:a^b, [1,2,3,4,5,6,7,8,9])
// 1


function reduce(n) {
  var b = 2;
  var i = 1;
  var r = 0;

  while (b < n + 1) {
    var x = 0;
    var l = (n + 1) % (b * 2);
    if (l > b) {
      x = (l - b) % 2;
    }

    r += (1 << i) * x;
    i++;
    b *= 2;
  }

  r += Math.floor(((n + 1) / 2) % 2);

  return r;
}

console.log(reduce(3));
console.log(reduce(4));
console.log(reduce(7));
console.log(reduce(9));
