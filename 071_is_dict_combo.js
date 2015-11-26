// http://careercup.com/question?id=5705581721550848

// You're given a dictionary of strings, and a key.
// Check if the key is composed of an arbitrary number of concatenations of strings from the dictionary.

// For example:

// dictionary: "world", "hello", "super", "hell"
// key: "helloworld" --> return true
// key: "superman" --> return false
// key: "hellohello" --> return true


function isDictCombo(d, w) {
  var t = new Array(w.length);
  for (var i = 0; i < t.length; i++) t[i] = false;

  for (var i = 0; i < t.length; i++) {
    if (i === 0 || t[i - 1]) {
      for (var k = 0; k < d.length; k++) {
        if (w.substring(i, i + d[k].length) == d[k]) {
          t[i + d[k].length] = true;
        }
      }
    }
  }
  
  return t[t.length - 1];
}


var dict = ['world', 'hello', 'super', 'hell'];

console.log(isDictCombo(dict, 'helloworld'));
console.log(isDictCombo(dict, 'superman'));
console.log(isDictCombo(dict, 'hellohello'));

