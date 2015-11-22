// http://careercup.com/question?id=5715650070708224

// There's a new language which uses the latin alphabet. However, you don't know the order among letters.

// It could be:
// a b c d ...

// as it could also be:

// b e z a m i ...

// You receive a list of words lexicographically sorted by the rules of this new language.
// From this list, derive one valid particular ordering of letters in this language."


function findAlphabet(a) {
  var h = {};
  var c = {};
  
  for (var i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    var ch = String.fromCharCode(i);
    h[ch] = {};
    c[ch] = 0;
  }

  for (var i = 0; i < a.length - 1; i++) {
    var k = 0;
    while (k < Math.min(a[i].length, a[i + 1].length) && a[i][k] == a[i + 1][k]) k++;

    if (k < Math.min(a[i].length, a[i + 1].length)) {
      h[a[i][k]][a[i + 1][k]] = 1;
      c[a[i + 1][k]]++;
    }
  }

  var q = [];
  var r = [];
  for (var i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    var ch = String.fromCharCode(i);
    if (c[ch] === 0) q.push(ch);
  }
  
  while (q.length > 0) {
    var ch = q[0];
    r.push(ch);
    for (var p in h[ch]) {
      c[p]--;
      if (c[p] === 0) q.push(p);
    }
    q.splice(0, 1);
  }

  return r.join('');
}


var a = [
  'bbe',
  'bbzib',
  'eba',
  'ebm',
  'ebi',
  'ez',
  'eai',
];

console.log(findAlphabet(a));

