// https://careercup.com/question?id=5655717580111872

// Random generate a NxN matrix with only four types of element: 1,2,3,4. 
// However, no column or row can have same type of element appears 3 times or above continuously (three same type of elements are connected)

// ex: 

// valid: 
// 1 2 1 1 
// 3 1 4 2 
// 1 2 4 2 
// 3 1 2 3 

// invalid because the first column has element 1 appears three times and all 1s are connected to each other : 

// 1 2 1 3 
// 1 3 4 2 
// 1 2 4 4 
// 2 3 2 2

function randomElement(a) {
	return a[Math.floor(Math.random() * a.length)];
}

function generateMatrix(n) {
	var x = new Array(n);
	for (var i = 0; i < n; i++) {
		x[i] = new Array(n);
	}

	for (var i = 0; i < n; i++) {
		for (var k = 0; k < n; k++) {
			var a = -1;
			var b = -1;

			if (i >= 2 && x[i - 2][k] == x[i - 1][k]) a = x[i - 1][k];
			if (k >= 2 && x[i][k - 2] == x[i][k - 1]) b = x[i][k - 1];
			var c = [];
			for (var j = 1; j <= 4; j++) {
				if (j != a && j != b) c.push(j);
			}

			x[i][k] = randomElement(c);
		}
	}

	return x;
}

function printMatrix(x) {
	for (var i = 0; i < x.length; i++) {
		for (var k = 0; k < x[i].length; k++) {
			process.stdout.write(x[i][k] + ' ');
		}
		console.log();
	}
}

function testMatrix(x) {
	for (var i = 0; i < x.length; i++) {
		for (var k = 0; k < x[i].length; k++) {
			if (i < x.length - 2 && x[i][k] == x[i + 1][k] && x[i][k] == x[i + 2][k]) return false;
			if (k < x[i].length - 2 && x[i][k] == x[i][k + 1] && x[i][k] == x[i][k + 2]) return false;
		}
	}

	return true;
}

printMatrix(generateMatrix(16));

// // Test
// for (var i = 0; i < 1000; i++) {
// 	if (!testMatrix(generateMatrix(100))) {
// 		console.log('FAILED!!!');
// 	}
// }
