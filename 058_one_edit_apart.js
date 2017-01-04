// http://careercup.com/question?id=4793416529477632

// /**
//  * Implement a function OneEditApart with the following signature:
//  *   bool OneEditApart(string s1, string s2)
//  *
//  * OneEditApart("cat", "dog") = false
//  * OneEditApart("cat", "cats") = true
//  * OneEditApart("cat", "cut") = true
//  * OneEditApart("cat", "cast") = true
//  * OneEditApart("cat", "at") = true
//  * OneEditApart("cat", "acts") = false
//  * Edit is: insertion, removal, replacement
//  */


function oneEditApart(s1, s2) {
  if (Math.abs(s1.length - s2.length) > 1) return false;

  var k = 0;
  while (k < Math.min(s1.length, s2.length) && s1[k] == s2[k]) k++;

  // are equal?
  if (s1.length == s2.length && k == s1.length) return false;

  var f1 = s1.length >= s2.length ? 1 : 0;
  var f2 = s1.length <= s2.length ? 1 : 0;

  for (var i = k; i < Math.min(s1.length, s2.length); i++) {
    if (s1[i + f1] != s2[i + f2]) return false;
  }

  return true;
}


console.log('cat', 'dog', oneEditApart('cat', 'dog'));
console.log('cat', 'cats', oneEditApart('cat', 'cats'));
console.log('cat', 'cut', oneEditApart('cat', 'cut'));
console.log('cat', 'cast', oneEditApart('cat', 'cast'));
console.log('cat', 'at', oneEditApart('cat', 'at'));
console.log('cat', 'acts', oneEditApart('cat', 'acts'));

