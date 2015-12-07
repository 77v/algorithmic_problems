// http://careercup.com/question?id=5735540389314560

// Code a function that gets two strings representing binary numbers (so the only possible
// characters are '1' and '0', and returns a third string representing the sum of the input.

// The input strings don't necessarily have of the same length.
// Tell the complexity of the solution.


function binarySum(s1, s2) {
  var r = [];
  var carry = 0;

  for (var i = 0; i < Math.max(s1.length, s2.length); i++) {
    var d1 = (i < s1.length && s1[s1.length - i - 1] == '1') ? 1 : 0;
    var d2 = (i < s2.length && s2[s2.length - i - 1] == '1') ? 1 : 0;

    switch (d1 + d2 + carry) {
      case 0:
        r.push(0);
        carry = 0;
        break;
      case 1:
        r.push(1);
        carry = 0;
        break;
      case 2:
        r.push(0);
        carry = 1;
        break;
      case 3:
        r.push(1);
        carry = 1;
        break;
    }
  }

  if (carry > 0) r.push(carry);

  return r.reverse().join('');
}

console.log(binarySum('10111', '1'));
