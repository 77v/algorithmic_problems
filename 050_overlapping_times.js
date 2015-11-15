// http://careercup.com/question?id=6277103186083840

// write a function that calculates the minimum number of meeting rooms that can accommodate given schedules
// input: same
// output: # of rooms
// Also back to back events are allowed e.g. {2,5} {5,9}  correct o/p:1

function solve(e) {
  var cp = [];
  for (var i = 0; i < e.length; i++) {
    cp.push({ t: e[i].f, ty: 'f' });
    cp.push({ t: e[i].t, ty: 't' });
  }

  cp.sort(function(x, y) {
    if (x.t == y.t) {
      if (x.ty == 'f' && y.ty == 't') return 1;
      else if (x.ty == 't' && y.ty == 'f') return -1;
      else return 0;
    }

    return x.t - y.t;
  });

  var r = 0;
  var max = 0;
  for (var i = 0; i < cp.length; i++) {
    if (cp[i].ty == 'f') r++;
    else r--;
    
    if (r > max) max = r;
  }

  return max;
}

console.log(solve([
  { f: 5, t: 9 },
  { f: 2, t: 6 },
  { f: 3, t: 6 }
]));

