// http://careercup.com/question?id=5114303424233472

// "Given a dictionary containing a list of words, a starting word, and an ending word, return the minimum number of steps to transform the starting word into the ending word.  

// A step involves changing one letter at a time to a valid word that is present in the dictionary.

// Return null if it is impossible to transform the starting word into the ending word using the dictionary.

// Example:

// Starting word: cat
// Ending word: dog

// cat -> cot -> cog -> dog (''cot'' and ''cog'' are in the dictionary)

// return 3"



function similar(a, b) {
  if (a.length != b.length) return false;
  var diff = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff++;
  }

  return diff == 1;
}

function solve(start, end, dict) {
  if (start.length != end.length) return false;

  dict = dict.filter(function(x) { return x.length == start.length });

  var v = {};
  v[start] = 0;
  var p = {};
  p[start] = null;
  var q = [start];

  while (q.length > 0) {
    var w = q[0];
    q.splice(0, 1);

    for (var i = 0; i < dict.length; i++) {
      var d = dict[i];

      if (similar(w, end)) {
        var r = [end];
        while (w != null) {
          r.push(w);
          w = p[w];
        }

        return r.reverse();
      }

      if (v[d] === undefined && similar(w, d)) {
        q.push(d);
        v[d] = v[w] + 1;
        p[d] = w;
      }
    }
  }

  return false;
}

console.log(solve('cat', 'dog', ['gerg', 'cac', 'sdfsdf', 'gog', 'cot', 'cog']));

