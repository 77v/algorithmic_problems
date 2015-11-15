// http://careercup.com/question?id=6262661043978240

// Given a set of ranges:
// (e.g. S = {(1, 4), (30, 40), (20, 91) ,(8, 10), (6, 7), (3, 9), (9, 12), (11, 14)}. 
// And given a target range R (e.g. R = (3, 13) - meaning the range going from 3 to 13). 
// Write an algorithm to find the smallest set of ranges that covers your target range. 
// All of the ranges in the set must overlap in order to be considered as spanning the entire target range. 
// (In this example, the answer would be {(3, 9), (9, 12), (11, 14)}.


function solve(r, tf, tt) {
  var d = [];
  r = r
    .filter(function(x) { return x.t >= tf && x.f <= tt; })
    .sort(function(a, b) { return a.f - b.f });

  if (r[0].f > tf) return null;

  var g = [];
  var j = 0;

  for (var i = 1; i < r.length; i++) {
    while (j < g.length && g[j].v < r[i].f) j++;
    if (j >= g.length && r[i].f > tf) return null;

    var p = j >= g.length ? null : g[j];
    var ps = p === null ? 0 : g[j].s;

    while (j + 1 < g.length && g[j + 1].s >= ps + 1 && g[j + 1].v < r[i].t) {
      g.splice(j + 1, 1);
    }

    if (j + 1 >= g.length || g[j + 1].s >= g[j].s + 1) {
      g.splice(j + 1, 0, { s: ps + 1, v: r[i].t, p: g[j], r: r[i] });
    }
  }

  if (g.length === 0 || g[g.length - 1].v < tt) return null;

  j = 0;
  while (j < g.length && g[j].v < tt) j++;
  
  var w = [];
  var gg = g[j];
  while (gg) {
    w.push(gg.r);
    gg = gg.p;
  }
  
  return w;
}

var r = [{ f: 1, t: 4 }, { f: 30, t: 40 }, { f: 20, t: 91 } ,{ f: 8, t: 10 }, { f: 6, t: 7 }, { f: 3, t: 9 }, { f: 9, t: 12 }, { f: 11, t: 14 }];
console.log(solve(r, 3, 13));

