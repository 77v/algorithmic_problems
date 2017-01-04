
// http://careercup.com/question?id=5134949294276608

// Write a program that reverses a linked list without using more than O(1) storage.

function reverse(l) {
  if (l === null) return null;

  var p = null;
  var np = null;
  var nl = null;
  
  while (l.next !== null) {
    np = l;
    nl = l.next;
    l.next = p;
    p = np;
    l = nl;
  }

  l.next = p;

  return l;
}

function printList(l) {
  while (l != null) {
    console.log(l.data);
    l = l.next;
  }
}

var list = {
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

list = reverse(list);
printList(list);
