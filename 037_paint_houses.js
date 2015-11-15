// http://careercup.com/question?id=5684404858912768      
// paint a list of N houses and M colors, each combination has cost, minimize the total cost without color in row.


function paint(N, M, cost) {

  var mmIndex = new Array(N);
  var smIndex = new Array(N);
  var mmCost = new Array(N);
  var smCost = new Array(N);

  mmIndex[0] = 0;
  for (var k = 0; k < M; k++) {
    if (cost[k][0] < cost[mmIndex[0]][0]) mmIndex[0] = k;
  }

  smIndex[0] = (mmIndex[0] + 1) % M;
  for (var k = 0; k < M; k++) {
    if (cost[k][0] < cost[smIndex[0]][0] && k != mmIndex[0]) mmIndex[0] = k;
  }

  mmCost[0] = cost[mmIndex[0]][0];
  smCost[0] = cost[smIndex[0]][0];

  for (var i = 1; i < N; i++) {

    mmCost[i] = 100000;
    smCost[i] = 100000;

    for (var k = 0; k < M; k++) {
      var c = ((k != mmIndex[i - 1]) ? mmCost[i - 1] : smCost[i - 1]) + cost[k][i];
      if (c < mmCost[i]) {
        mmIndex[i] = k;
        mmCost[i] = c;
      }
    }

    for (var k = 0; k++; k < M) {
      var c = ((k != mmIndex[i - 1]) ? mmCost[i - 1] : smCost[i - 1]) + cost[k][i];
      if (c < smCost[i] && k != mmIndex[i]) {
        smIndex[i] = k;
        smCost[i] = c;
      }
    }
  }

  var r = [mmIndex[N - 1]];
  for (var i = N - 2; i >= 0; i--) {
    if (mmIndex[i] != r[r.length - 1]) r.push(mmIndex[i])
    else r.push(smIndex[i]);
  }

  return r.reverse();
}

var N = 4;
var M = 3;
var cost = [
  [4, 5, 6, 2],
  [1, 1, 2, 1],
  [3, 3, 1, 3]
];

console.log(paint(N, M, cost));

