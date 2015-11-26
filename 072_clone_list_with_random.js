// http://careercup.com/question?id=5731237876465664

// Having a home-defined linked list with the following structure, 
// where the next will point to the next node in the list and the random will point to a random node in the list (not null).
// Create a copy of the structure (the data field in each node is not unique for different nodes):

// /*
//     Example:
// Having the list:
//     1 -> 2 -> 3 -> X
// With random pointers to:
//     1: 3
//     2: 2
//     3: 1

// Create the list:
//     1' -> 2' -> 3' -> X
//     1': 3'
//     2': 2'
//     3': 1'
// */

// class Node {
//     int data;
//     Node next;
//     Node random;
// }


function printList(l) {
  var p = l;
  while (p) {
    console.log(p.data, p.random ? p.random.data : 'X');
    p = p.next;
  }
}

function cloneList(l) {
  if (l === null) return null;

  var p = l;
  while (p != null) {
    p.next = { data: p.data, random: p.random, next: p.next };
    p = p.next.next;
  }

  var p = l;
  var c = l.next;

  while (p !== null) {
    var np = p.next.next;
    if (np) p.next = np.next;
    p.next = np;
    p = np;
  }

  return c;
}



var list = {
  data: '1',
  next: {
    data: '2',
    next: {
      data: '3',
      next: null
    }
  }
};

list.random = list.next.next;
list.next.random = list.next;
list.next.next.random = list;

var clone = cloneList(list);
printList(list);
printList(clone);
