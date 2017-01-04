// http://careercup.com/question?id=6313112158339072   
// Given a singly linked list, swap the list items in pairs (reconnect the pointers, not simply swap the values). For example:

// Before: A->B->C->D
// After: B->A->D->C"

function swapPairs(l) {
  var n = l;
  if (l.next) l = l.next;
  
  var p = null;

  while (n && n.next) {
    var t = n.next;
    n.next = n.next.next;
    t.next = n;
    if (p) p.next = t;
    p = n;

    n = n.next;
  }

  return l;
}

var l = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: {
          data: 5,
          next: null
        }
      }
    }
  }
}

l = swapPairs(l);

var n = l;
while (n) {
  console.log(n.data);
  n = n.next;
}
