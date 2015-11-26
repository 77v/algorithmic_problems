
// http://careercup.com/question?id=5197316961075200

// Given a dictionary of words, return an array of the words whose match.
// (i.e. pattern "c.t" match with "cat", "cut", etc. because the dot notation stand for ANY character).

// SUGGEST: use suffix tree, for(for()) is not a good solution.

function insertIntoTrie(t, w) {
  var p = t;

  for (var k = 0; k < w.length; k++) {
    var ch = w[k];
    p.children[ch] = p.children[ch] || { children: {}, count: 0, parent: p };
    p = p.children[ch];
  }

  p.count++;
}

function buildTrie(d) {
  var t = { children: {}, count: 0, parent: null };

  for (var i = 0; i < d.length; i++) {
    insertIntoTrie(t, d[i]);
  }

  return t;
}

function search(t, p) {
  var r = [];
  var q = [{ n: t, i: 0, s: '' }];

  while (q.length > 0) {
    var e = q[0];
    q.splice(0, 1);

    while (e.i < p.length && p[e.i] != '.' && e.n.children[p[e.i]]) {
      e.n = e.n.children[p[e.i]];
      e.s = e.s + p[e.i];
      e.i++;
    }

    if (e.i == p.length && e.n.count > 0) {
      r.push(e.s);
    } else if (p[e.i] == '.') {
      for (var ch in e.n.children) {
        q.push({ n: e.n.children[ch], i: e.i + 1, s: e.s + ch });
      }
    }
  }

  console.log(r);
}

var dict = ['cut', 'cat', 'coat', 'dat', 'cct', 'ccc', 'catt', 'cutt'];

var t = buildTrie(dict);
search(t, 'c.t');

