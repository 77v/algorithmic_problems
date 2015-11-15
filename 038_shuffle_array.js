// http://careercup.com/question?id=5183602746720256
// Given array A of size N, using function Random(returns random number between 0 and 1)
// implement function that will return array of size N with randomly shuffled elements of the array A.

function random(N) {
  var r = Math.floor(N * Math.random());
  return Math.min(r, N - 1);
}

function shuffle(a) {
  for (var i = 0; i < a.length - 1; i++) {
    var k = random(a.length - i) + i;
    var tmp = a[k];
    a[k] = a[i];
    a[i] = tmp;
  }
  
  return a;
}

var a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(shuffle(a));
