// http://www.careercup.com/question?id=5728954549796864

// Write Program for String Permutations using most efficient algorithm. Can you solve problem in O(n) time ?
  

function swap(a, x, y) {
  var tmp = a[x];
  a[x] = a[y];
  a[y] = tmp;
}

function permutations(a, n) {
  n = n || a.length;

  if (n == 1) {
    console.log(a);
  } else {
    for (var i = 0; i < n - 1; i++) {
      permutations(a, n - 1);

      if (n % 2 == 0) swap(a, i, n - 1);
      else swap(a, 0, n - 1);
    }

    permutations(a, n - 1);
  }
}

permutations([1, 2, 3, 4]);

