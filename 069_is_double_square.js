// http://careercup.com/question?id=5767787551129600

// Let's say there is a double square number X, which can be expressed as the sum of two perfect squares,
// for example, 10 is double square because 10 = 3^2 + 1^2

// Determine the number of ways which it can be written as the sum of two squares

function solve(x) {
  var c = 0;
  for (var i = 1; i < Math.sqrt(x); i++) {
    if (Math.sqrt(x - i * i) == (x - i * i)) c++;
  }

  return c;
}

console.log(solve(10));
