// http://careercup.com/question?id=5654773747417088

// Given two extremely large numbers - each number is stored in a Singly Linked list, with the MSB at the head.
// You are not allowed to reverse the Linked lists. Write a program to multiply them in optimum space and time.

function multiplyList(a, b) {
  var r = [];
  var pr = r;

  var ia = 0;
  var pa = a;
  while (pa) {
    var ib = 0;
    var pb = b;
    while (pb) {

      r[ia + ib] = r[ia + ib] || { value: 0 };
      r[ia + ib].value += pa.data * pb.data;

      ib++;
      pb = pb.next;
    }
    ia++;
    pa = pa.next;
  }
  
  var carry = 0;
  for (var i = r.length - 1; i >= 0; i--) {
    r[i].value += carry;
    carry = Math.floor(r[i].value / 10);
    r[i].value = r[i].value % 10;
  }

  if (carry > 0) r.unshift({ value: carry });

  return r;
}


// 348 * 23 = 8004;
var n1 = { data: 3, next: { data: 4, next: { data: 8 } } };
var n2 = { data: 9, next: { data: 3 } };

console.log(multiplyList(n1, n2));

