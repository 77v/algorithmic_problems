// http://careercup.com/question?id=5717567253512192

// Inplace reverse a sentence

// You given a sentence of english words and spaces between them. 
// Nothing crazy:
// 1) no double spaces
// 2) no empty words
// 3) no spaces at the ends of a sentencevoid inplace_reverse(char* arr, int length) {
//     // your solution
// }Example:
// input "I wish you a merry Christmas"
// output "Christmas merry a you wish I"

// Constrains: O(1) additional memory

function reverse(ss, lo, hi) {
  while (lo < hi) {
    var tmp = ss[lo];
    ss[lo] = ss[hi];
    ss[hi] = tmp;

    lo++;
    hi--;
  }
}

function reverseWords(ss) {
  var p = 0;
  for (var i = 0; i < ss.length; i++) {
    if (i == ss.length - 1 || ss[i + 1] == ' ') {
      reverse(ss, p, i);
      p = i + 2;
    }
  }

  reverse(ss, 0, ss.length - 1);
}

var ss = 'I wish you a merry christmas'.split('');
reverseWords(ss);
console.log(ss.join(''));
