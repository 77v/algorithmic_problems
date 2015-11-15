
// http://careercup.com/question?id=5170706490851328

// A 2D array filled with integer, define a flow from one point to its neighbor
// only if the value of current point is not less than its neighbor's value.
// Consider up edge and left edge as east coast, bottom edge and right edge as west coast,
// find all position that it can flow to east coast and west cost both

function createMatrix(h, v) {
  var e = new Array(h.length);
  for (var y = 0; y < h.length; y++) {
    e[y] = new Array(h[0].length);
    for (var x = 0; x < h[0].length; x++) e[y][x] = v;
  }
  
  return e;
}

function bfs(h, e, q) {
  var dirs = [{ y: -1, x: 0 }, { y: 0, x: 1 }, { y: 1, x: 0 }, { y: 0, x: -1 }];

  while (q.length > 0) {
    var p = q[0];
    q.splice(0, 1);

    for (var i = 0; i < dirs.length; i++) {
      var d = dirs[i];
      var pp = { y: p.y + d.y, x: p.x + d.x };
      if (pp.y >= 0 &&
          pp.y < h.length &&
          pp.x >= 0 &&
          pp.x < h[0].length &&
          e[pp.y][pp.x] === null &&
          h[pp.y][pp.x] >= h[p.y][p.x]) {
        e[pp.y][pp.x] = true;
        q.push(pp);
      }
    }
  }
}

function findTops(h) {
  var e = createMatrix(h, null);
  var qe = [];

  for (var y = 0; y < h.length; y++) {
    qe.push({ y: y, x: 0 });
    e[y][0] = true;
  }

  for (var x = 0; x < h[0].length; x++) {
    qe.push({ y: 0, x: x });
    e[0][x] = true;
  }

  bfs(h, e, qe);

  var w = createMatrix(h, null);
  var qw = [];
  for (var y = 0; y < h.length; y++) {
    qw.push({ y: y, x: h[0].length - 1 });
    w[y][h[0].length - 1] = true;
  }

  for (var x = 0; x < h[0].length; x++) {
    qw.push({ y: h.length - 1, x: x });
    w[h.length - 1][x] = true;
  }

  bfs(h, w, qw);
  
  var r = createMatrix(h, null);
  for (var y = 0; y < h.length; y++) {
    for (var x = 0; x < h[0].length; x++) {
      r[y][x] = (e[y][x] || w[y][x]) || false;
    }
  }
  
  return r;
}

var h = [
  [1, 7, 3, 4],
  [4, 2, 5, 6],
  [5, 2, 2, 3],
  [8, 9, 3, 6]
];

console.log(findTops(h));

