
// http://careercup.com/question?id=5096352075743232

// Find pattern of this'this is a test sentence' => [t, h, i, s, i, s, a, t, e, s, t, s, e, n, t, e, n, c, e]
// 'thiis iss a teest seentennce' => [i, s, e, e, n]
// 'thiiis iss aa teeest seentennnce' => [i, e, n]
// 'thiiiis iss a teeest seeentennncccce' => [i, c]


function getLongestConsecutiveChar(s) {
  var c = 0;
  var max = 0;
  for (var i = 0; i < s.length; i++) {
    if (i == s.length - 1 || s[i] != s[i + 1]) {
      max = Math.max(max, c);
      c = 0;
    } else {
      c++;
    }
  }

  var r = [];
  c = 0;
  for (var i = 1; i < s.length; i++) {
    if (i == s.length - 1 || s[i] != s[i + 1]) {
      if (c == max) r.push(s[i]);
      c = 0;
    } else {
      c++;
    }
  }
  
  return r;
}

console.log(getLongestConsecutiveChar('thiis iss a teest seentennce'));
console.log(getLongestConsecutiveChar('thiiis iss aa teeest seentennnce'));
console.log(getLongestConsecutiveChar('thiiiis iss a teeest seeentennncccce'));


