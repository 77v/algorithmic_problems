// http://careercup.com/question?id=5092486548553728

// Given two strings, return boolean True/False, if they are only one edit apart.
// Edit can be insert/delete/update of only one character in the string. Eg:

// -True
// xyz,xz
// xyz, xyk
// xy, xyz


// -False
// xyz, xyz
// xyz,xzy
// x, xyz


function compareOneOff(a, b) {
  var k = 0;
  while (k < Math.min(a.length, b.length) && a[k] == b[k]) k++;

  var ai = (a.length >= b.length) ? k + 1 : k;
  var bi = (a.length <= b.length) ? k + 1 : k;

  while (ai < a.length && bi < b.length && a[ai] == b[bi]) {
    ai++;
    bi++;
  }

  return ai == a.length && bi == b.length;
}

console.log('xyz', 'xz', compareOneOff('xyz', 'xz'));
console.log('xyz', 'xyk', compareOneOff('xyz', 'xyk'));
console.log('xy', 'xyz', compareOneOff('xy', 'xyz'));
console.log('xyz', 'xyz', compareOneOff('xyz', 'xyz'));
console.log('xyz', 'xzy', compareOneOff('xyz', 'xzy'));
console.log('x', 'xyz', compareOneOff('x', 'xyz'));
