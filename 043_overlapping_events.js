
// http://careercup.com/question?id=5706164291502080
//  * Find if the given list of recurring weekly intervals covers the 
//  * entire time. Times are given up to a second. 
//  * 
//  * You can take the input intervals in the number of seconds since
//  * the beginning the week or any other format you prefer.
//  *
//  * ---Example 1---
//  * Input:
//  * Tuesday 9AM - Sunday 9AM
//  * Sunday 8:00:20AM - Wednesday 3AM
//  * 
//  * Output:
//  * true
//  *
//  * ---Example 2---
//  * Input:
//  * Tuesday 9AM - Sunday 9AM
//  * Sunday 8:00:20PM - Tuesday 8AM
//  * 
//  * Output:
//  * false
//  */

var week = 604800;

function check(v) {
  var w = [];
  for (var i = 0; i < v.length; i++) {
    if (v[i].f <= v[i].t) w.push(v[i]);
    else {
      w.push({ f: 0, t: v[i].t });
      w.push({ f: v[i].f, t: week });
    }
  }

  w.sort(function(x, y) { return x.f - y.f });
  var max = -1;
  for (var i = 0; i < w.length; i++) {
    if (w[i].f > max + 1) return false;
    max = Math.max(max, w[i].t);
  }
  
  return max == week;
}

var v = [
  { f: 100002, t: 500000 },
  { f: 450000, t: 100000 }
];

console.log(check(v));
