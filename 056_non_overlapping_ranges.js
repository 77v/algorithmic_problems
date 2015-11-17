// http://careercup.com/question?id=5676064539934720

// Given a class Rangeclass Range {
//   public int begin;
//   public int end;
//   public Range(int begin, int end) {
//     this.begin = begin;
//     this.end = end;
//   }
// }The problem:
// Intput: 
// 1) list of Ranges that don''t overlap (not sorted) 
// 2) newRange that might overlap.
// Output:
// list of merged Ranges

// For example:
// Input: [1..5] [9..13] [17..22]
// newRange: [4..10]
// Output: [1..13] [17..22]

function mergeRanges(ranges, newRange) {
  var min = newRange.f;
  var max = newRange.t;
  for (var i = 0; i < ranges.length; i++) {
    if (ranges[i].f < newRange.t && ranges[i].t > newRange.f) {
      min = Math.min(min, ranges[i].f);
      max = Math.max(max, ranges[i].t);
    }
  }

  var r = [];
  for (var i = 0; i < ranges.length; i++) {
    if (ranges[i].f < min || ranges[i].t > max) r.push(ranges[i]);
  }
  r.push({ f: min, t: max });

  return r;
}

var ranges = [{ f: 1, t: 5 }, { f: 9, t: 13 }, { f: 17, t: 22 }];
var newRange = { f: 4, t: 10 };

console.log(mergeRanges(ranges, newRange));

