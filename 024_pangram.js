// http://careercup.com/question?id=5699257984090112

// Pangram

function isPangram(s, n) {
  var l = new Array(n);
  for (var i = 0; i < n; i++) l[i] = true;

  var r = n;

  for (var i = 0; i < s.length; i++) {
    if (s[i] != ' ') {
      var c = s[i].toLowerCase().charCodeAt() - 'a'.charCodeAt();
      if (l[c]) {
        l[c] = false;
        r--;
        if (r == 0) return true;
      }
    }
  }

  return false;
}


function isMinPangram(s, n) {
  var sum = 0;
  var c = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] != ' ') {
      c++;
      if (c > n) return false;
      sum += s[i].toLowerCase().charCodeAt() - 'a'.charCodeAt();
    }
  }

  return sum == (n * (n - 1) / 2);
}

console.log(isPangram('The quick brown fox jumps over the lazy dog', 26));

console.log(isMinPangram('Cwm fjord bank glyphs vext quiz', 26));


