// http://careercup.com/question?id=5684841825697792

// There are 3 romms in which party is going on lets say room A, B, C. Guests are coming one by one and you have to tell the guest
//  which room to enter. At any point of time each room has to maintain a percentage Lets say the percentage that each room has to maintain is
//   A- 20% , B-30% , C- 50%. You can maintain total count of each room and keep on adding count to respective room as the new guest enters each room. 
//   How would you go about it. What formula would you use.
//   Give a generalise formula so that it works if no. of rooms increase."


var rooms = [0.2, 0.3, 0.5];
var roomCount = {};
var totalCount = 0;

function selectRoom() {
  var r = 0;

  if (totalCount === 0) {
    r = 0;
    for (var i = 1; i < rooms.length; i++) {
      if (rooms[i] > rooms[r]) r = i;
    }

    roomCount[r] = 0;
  }

  var maxd = -100;
  var maxdd = -100;

  for (var i = 0; i < rooms.length; i++) {
    roomCount[i] = roomCount[i] || 0;
    var d = rooms[i] - roomCount[i] / totalCount;
    var dd = (roomCount[i] + 1) / (totalCount + 1) - rooms[i];
    if (d > maxd || (d == maxd && maxdd > dd)) {
      maxd = d;
      maxdd = dd;
      r = i;
    }
  }

  roomCount[r]++;
  totalCount++;
  return r;
}

function pad(s, n) {
  while ((s + '').length < n) s = ' ' + s;

  return s;
}

function print() {
  var s = '';
  for (var i = 0; i < rooms.length; i++) {
    s += pad(rooms[i], 5);
  }
  
  console.log(s);

  s = '';
  for (var i = 0; i < rooms.length; i++) {
    s += pad((roomCount[i] || 0), 5);
  }
  
  console.log(s);
  console.log('-------------------');
}

for (var i = 0; i < 20; i++) {
  selectRoom();
  print();
}

// rooms[2] = 0.3;
// rooms.push(0.2);
// console.log('-------------------');
// console.log('-------------------');

// for (var i = 0; i < 20; i++) {
//   selectRoom();
//   print();
// }

