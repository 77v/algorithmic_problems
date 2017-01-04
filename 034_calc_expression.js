// http://careercup.com/question?id=4911380140392448

// Input: A string equation that contains numbers, ''+'' and ''*''
// Output: Result as int.

// For example:
// Input: 3*5+8 (as String)
// Output: 23 (as int)

function calc(exp) {
  var p = 1;
  var d = 0;
  var r = 0;
  for (var i = 0; i < exp.length; i++) {
    if (exp[i] != '+' && exp[i] != '*') {
      d = d * 10 + parseInt(exp[i]);

      if (i == exp.length - 1 || exp[i + 1] == '+' || exp[i + 1] == '*') {
        p *= d;
        d = 0;

        if (i == exp.length - 1 || exp[i + 1] == '+') {
          r += p;
          p = 1;
        }
      }
    }
  }

  return r;
}

console.log(calc('1+2*2+3*3+1*1*1+3*1'));
console.log(calc('3*5+8'));

