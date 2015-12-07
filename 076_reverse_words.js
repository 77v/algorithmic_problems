// http://careercup.com/question?id=5106757177180160

// Code a function that receives a string composed by words separated by spaces and returns a string
// where words appear in the same order but than the original string, but every word is inverted.
// Example, for this input string@"the boy ran"the output would be@"eht yob nar"Tell the complexity of the solution.


function reverse(s, lo, hi) {
  while (lo < hi) {
    var t = s[lo];
    s[lo] = s[hi];
    s[hi] = t;

    lo++;
    hi--;
  }
}

function reverseWords(s) {
  var l = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      reverse(s, l, i - 1);
      l = i + 1;
    }
  }
  reverse(s, l, s.length - 1);
}

var s = 'the boy ran'.split('');
reverseWords(s);
console.log(s.join(''));

