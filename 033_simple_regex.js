// http://careercup.com/question?id=5124942133723136

// Write a function to check if a string matches a regex patter.
// Note that you only have to deal with patterns containing ""*"".
// Also, note that the pattern can''t start with ""*"". 

// Some examples:
// isMatch('aa','a') → false
// isMatch('aa','aa') → true
// isMatch('aaa','aa') → false
// isMatch('aa', 'a*') → true
// isMatch('a', 'b*a') → true
// isMatch('a', 'a*a') → true
// isMatch('aab', 'c*a*b') → true


function isMatch(s, r) {
  var p = [];
  var i = 0;
  while (i < r.length) {
    var pp = { ch: r[i], cmd: '' };
    i++;

    if (i < r.length && r[i] == '*') {
      pp.cmd = '*';
      i++;
    }

    p.push(pp);
  }
  
  var m = new Array(p.length + 1);
  for (var i = 0; i < p.length + 1; i++) m[i] = new Array(s.length + 1);

  m[0][0] = true;

  i = 0;
  while (i < p.length && p[i].cmd == '*') {
    m[i + 1][0] = true;
    i++;
  }

  for (var k = i; k < p.length; k++) {
    m[k + 1][0] = false;
  }
  
  for (var k = 0; k < s.length; k++) {
    m[0][k + 1] = false;
  }
  
  for (var x = 0; x < s.length; x++) {
    for (var y = 0; y < p.length; y++) {
      var xx = x + 1;
      var yy = y + 1;

      m[yy][xx] = (m[yy - 1][xx - 1] && s[x] == p[y].ch) || (m[yy - 1][xx] && p[y].cmd == '*') || (m[yy][xx - 1] && s[x] == p[y].ch && p[y].cmd == '*');
    }
  }
  
  return m[p.length][s.length];
}


console.log(isMatch('aa','a'), false);
console.log(isMatch('aa','aa'), true);
console.log(isMatch('aaa','aa'), false);
console.log(isMatch('aa', 'a*'), true);
console.log(isMatch('a', 'b*a'), true);
console.log(isMatch('a', 'a*a'), true);
console.log(isMatch('aab', 'c*a*b'), true);

