
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
	var sp = new Array(s.length);
	for (var i = 0; i < s.length; i++) sp[s[i]] = i;

	var ep = new Array(e.length);
	for (var i = 0; i < e.length; i++) ep[e[i]] = i;

	var v = new Array(s.length);
	for (var i = 0; i < v.length; i++) v[i] = false;

	var r = [];

	var g = sp[0];
	v[g] = true;
	g = sp[e[g]];
	while (g != sp[0]) {
		r.push(s[g]);
		v[g] = true;
		g = sp[e[g]];
	}

	for (var i = 0; i < s.length; i++) {
		if (!v[i] && s[i] != e[i]) {
			r.push(s[i]);
			v[i] = true;
			g = sp[e[i]];
			while (g != i) {
				console.log(g);
				r.push(s[g]);
				v[g] = true;
				g = sp[e[g]];
			}
			r.push(s[i]);
		}
	}

	return r;
}

function printResult(s, l) {
	console.log(l);
	console.log('-------------');
	console.log(s);
	for (var i = 0; i < l.length; i++) {
		var k = s.indexOf(l[i]);
		var z = s.indexOf(0);
		s[z] = s[k];
		s[k] = 0;
		console.log(s);
	}
}


// var r = sortCars([1, 2, 3, 4, 0], [2, 1, 4, 3, 0]);
// printResult([1, 2, 3, 4, 0], r);

// var r = sortCars([1, 2, 3, 0, 4, 5], [5, 1, 0, 3, 2, 4]);
// printResult([1, 2, 3, 0, 4, 5], r);

var r = sortCars([6, 1, 2, 3, 0, 4, 5, 7], [7, 5, 1, 0, 3, 2, 4, 6]);
printResult([6, 1, 2, 3, 0, 4, 5, 7], r);

