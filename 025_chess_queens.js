// http://careercup.com/question?id=5160106813554688

// N queen problem. 
// In NXN chess board, you have to arrange N queens such that they do not interfere each other. Following is how you define interference of queens.
// 1. Two queens cannot be on the same diagonal
// 2. Two queens cannot be in same horizontal or vertical line
// 3. Queen can jump like a knight. So, two queens cannot be at a position where they can jump two and half steps like a knight and reach the other queen.

// You should return the possible ways to arrange N queens on a chess board.

// This was a tech screen, but since I was local, they called me in their office rather than phone interview. 

// Hint: Don''t try too hard, the best solution is n!"

function backtrack(N, p, h, d, dd, x) {
  if (x == N) {
    console.log(p);
    return;
  }

  for (var y = 0; y < N; y++) {

    // next two lines check for horse moves
    if (x - 1 >= 0 && Math.abs(p[x - 1] - y) == 2) continue;
    if (x - 2 >= 0 && Math.abs(p[x - 2] - y) == 1) continue;

    if (h[y]) continue;
    if (d[N - x + y - 1]) continue;
    if (dd[x + y]) continue;

    h[y] = true;
    d[N - x + y - 1] = true;
    dd[x + y] = true;
    p[x] = y;

    backtrack(N, p, h, d, dd, x + 1);

    h[y] = false;
    d[N - x + y - 1] = false;
    dd[x + y] = false;
    p[x] = null;
  }
}

function solve(N) {
  var p = new Array(N);
  for (var i = 0; i < N; i++) p[i] = null;

  var h = new Array(N);
  for (var i = 0; i < N; i++) h[i] = false;

  var d = new Array(2 * N - 1);
  for (var i = 0; i < 2 * N - 1; i++) d[i] = false;

  var dd = new Array(2 * N - 1);
  for (var i = 0; i < 2 * N - 1; i++) dd[i] = false;

  backtrack(N, p, h, d, dd, 0);
}

solve(12);

