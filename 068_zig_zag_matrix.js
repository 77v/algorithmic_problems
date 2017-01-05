// https://www.careercup.com/question?id=5695158902325248

// Problem:
// Write code to traverse a NxM matrix in a zig-zag fashion

// Example:
// 2> 3  9> 10 20>21
// 1  7> 8  18>19 30
// 5> 6  16>17 28>29
// 4  14>15 26>27 35
// 12>13 24>25 33 34
// 11 22>23 31 32 40

// 1  5  6 14 15
// 3  4 12 13 22
// 2 10 11 20 21
// 8  9 18 19 24
// 7 16 17 22 23

// 1  4  5
// 2  3  6


function within(p, m, n) {
	return p.y >= 0 && p.y < m && p.x >= 0 && p.x < n;
}

function nextStart(p, m, n) {
	var r = { y: p.y + 2, x: p.x };
	if (within(r, m, n)) return r;

	r = { y: p.y + 1, x: p.x };
	if (within(r, m, n)) return r;

	r = { y: p.y, x: p.x + 1 + ((p.x + p.y) % 2) };
	if (within(r, m, n)) return r;

	return null;
}

function zigzag(m, n) {
	var lastStart = null;
	var start = { y: 0, x: 0 };
	var r = [];

	while (start) {
		var p = { y: start.y, x: start.x };
		while (within(p, m, n)) {
			r.push({ y: p.y, x: p.x });
			var d = (p.x + p.y) % 2
			p.y -= 1 - d;
			p.x += d;
		}

		start = nextStart(start, m, n);
	}

	return r;
}

function printResult(l, m, n) {
	var a = new Array(m);
	for (var y = 0; y < m; y++) {
		a[y] = new Array(n);
		for (var x = 0; x < n; x++) {
			a[y][x] = '   ';
		}
	}

	for (var i = 0; i < l.length; i++) {
		var v = (i + 0) + '';
		while (v.length < 3) v =  v + ' ';
		a[l[i].y][l[i].x] = v;
	}

	for (var y = 0; y < m; y++) {
		for (var x = 0; x < n; x++) {
			process.stdout.write(a[y][x] + '|');
		}
		console.log();
	}
}

function test(l, m, n) {
	// test if we have correct number of coordinates
	if (l.length !== m * n) return false;

	var a = new Array(m);
	for (var y = 0; y < m; y++) {
		a[y] = new Array(n);
		for (var x = 0; x < n; x++) a[y][x] = 0;
	}

	// test if every field has been visited exactly once
	for (var i = 0; i < l.length; i++) a[l[i].y][l[i].x]++;

	for (var y = 0; y < m; y++) {
		for (var x = 0; x < n; x++) {
			if (a[y][x] !== 1) return false;
		}
	}

	// every field is either next to previous or on the edge
	for (var i = 1; i < l.length; i++) {
		var dy = l[i].y - l[i - 1].y;
		var dx = l[i].x - l[i - 1].x;
		var zz = (dy === -1 && dx === 0) || (dy === 0 && dx === 1);

		// if it's not zigzagging and it's not on the left/bottom edge
		if (!zz && !(l[i].x === 0 || l[i].y === m - 1)) return false;
	}

	return true;
}

function testAll() {
	var passed = true;
	// Test for various dimensions
	for (var m = 1; m <= 10; m++) {
		for (var n = 1; n <= 10; n++) {
			if (!test(zigzag(m, n), m, n)) {
				passed = false;
				console.log('Test failed for m = ' + m + ', n = ' + n);
			}
		}
	}

	if (passed) console.log('All tests have passed');
}

// printResult(zigzag(5, 5), 5, 5);
// printResult(zigzag(5, 2), 5, 2);

testAll();
