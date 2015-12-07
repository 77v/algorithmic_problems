// http://careercup.com/question?id=9820788

// there is a pyramid with 1 cup at level , 2 at level 2 , 3 at level 3 and so on..
// It looks something like this 
//                                           1
//                                        2    3
//                                      4   5   6
// every cup has capacity C. you pour L liters of water from top.
// when cup 1 gets filled , it overflows to cup 2,3 equally, and when they get filled ,
// Cup 4 and 6 get water only from 2 and 3 resp but 5 gets water from both the cups and so on.
// Now given C and M. Find the amount of water in ith cup.


function printAmounts(c, l) {
  var o = [l];
  var hasMore = true;

  while (hasMore) {
    var s = new Array(o.length);;
    for (var i = 0; i < o.length; i++) {
      s[i] = Math.min(o[i], c);
      o[i] -= s[i];
    }
    console.log(s.join(' '));

    var x = [o[0] / 2];
    for (var i = 0; i < o.length - 1; i++) x.push((o[i] + o[i + 1]) / 2);
    x.push(o[0] / 2);

    hasMore = false;
    for (var i = 0; i < x.length; i++) {
      if (x[i] > 0) hasMore = true;
    }

    o = x;
  }
}

printAmounts(1, 18);
