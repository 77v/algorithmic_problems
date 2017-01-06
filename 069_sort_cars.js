
// https://www.careercup.com/question?id=5750868554022912

// Problem:

// Suppose a row of parking lot with n spots, one of them is empty and n-1
// spots are occupied with cars. Only one operation is allowed: move one car from
// its position to the empty spot. Given a initial order of cars and a final order,
// output steps needed to convert initial order to final oder with that operation. 

// Follow up: Minimize steps needed. 

// ex: 

// {1 2 3 -1 4 5} 
// move car 1 to empty spot(denoted as -1) will make it {-1,2,3,1,4,5} 
// push 1 to the output list because you move car 1 to the empty spot 

// suppose you have a initial order {1 2 3 -1 4 5} and a final order {5,1,-1,3,2,4},
// you need to transfer {1 2 3 -1 4 5} to {5,1,-1,3,2,4}, push each car moved into
// a output list.

// 0 1 2 3
// 1 2 3 0

function sortCars(s, e) {
	var r = [];
	var zp = s.indexOf(0);

	while (e[zp] !== 0) {
		var c = e[zp];
		r.push(c);
		oldZp = zp;
		zp = s.indexOf(c);
		s[zp] = 0;
		s[oldZp] = c;
	}

	for (var i = 0; i < s.length; s++) {
		if (s[i] !== e[i] && s[i] !== 0) {
			var g = i;
			var q = s[i];
			do {
				r.push(s[g]);
				g = s.indexOf(e[g]);
				s[g] = e[g];
			} while (g !== i);
			r.push(s[i]);
		}
	}

	return r;
}

var r = sortCars([1, 2, 3, 0, 4, 5], [5, 1, 0, 3, 2, 4]);
console.log(r);