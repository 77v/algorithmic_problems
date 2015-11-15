
// http://careercup.com/question?id=5741988412391424
// Permutate a list of string
//  this question is supposed permutate the characters instead of who string, 

// as input example {""red"", ""fox"", ""super"" }, the expected output is

// rfs
// rfu
// rfp
// rfe
// rfr
// ros
// rou
// rop
// roe
// ror
// rxs
// rxu
// rxp
// rxe
// rxr
// efs
// efu
// efp
// efe
// efr
// eos
// eou
// eop
// eoe
// eor
// exs
// exu
// exp
// exe
// exr
// dfs
// dfu
// dfp
// dfe
// dfr
// dos
// dou
// dop
// doe
// dor
// dxs
// dxu
// dxp
// dxe
// dxr

function solve(a) {
  var p = new Array(a.length);
  for (var i = 0; i < p.length; i++) p[i] = 0;

  var i = p.length - 1;
  while (i >= 0) {
    var s = [];
    for (var j = 0; j < p.length; j++) s.push(a[j][p[j]]);
    console.log(s.join(''));

    while (i >= 0 && p[i] == a[i].length - 1) i--;
    if (i < 0) break;
    p[i]++;
    for (var k = i + 1; k < p.length; k++) p[k] = 0;
    i = p.length - 1;
  }
}

var a = ['red', 'fox', 'super'];
solve(a);
