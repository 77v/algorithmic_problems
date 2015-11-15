
// http://careercup.com/question?id=6299074475065344

// Given a matrix with 1''s and 0''s, a rectangle can be made with 1''s. What is the maximum area of the rectangle. 

// 00010
// 11100
// 11110
// 11000
// 11010 In this test case the result needs to be 8. 

// How: 
// 00010     00010
// 11100      11  100
// 11110      11  110
// 11000      11  000
// 11010      11  010

// If you see above the 11''s are used from the first two columns and last four rows making the area or count of 1''s to be 8."

function find(m) {
	for (var y = 0; y < m.length; y++) m[y] = m[y].split('').map(function(x) { return parseInt(x); });

	var w = m[0].length;
	var h = m.length;
	var xc = new Array(h);
	var yc = new Array(h);

	for (var y = 0; y < h; y++) {
		xc[y] = new Array(w);
		var c = 0;
		for (var x = 0; x < w; x++) {
			if (m[y][x] == '1') c++;
			else c = 0;

			xc[y][x] = c;
		}
	}

	for (var y = 0; y < h; y++) yc[y] = new Array(w);
	for (var x = 0; x < w; x++) {
		var c = 0;
		for (var y = 0; y < h; y++) {
			if (m[y][x] == '1') c++;
			else c = 0;

			yc[y][x] = c;
		}
	}

	var r = new Array(h);
	for (var y = 0; y < h; y++) r[y] = new Array(w);

	for (var y = 0; y < h; y++) {
		for (var x = 0; x < w; x++) {
			if (y === 0) r[y][x] = { w: xc[y][x], h: 1, s: xc[y][x] };
			else if (x === 0) r[y][x] = { w: 1, h: yc[y][x], s: yc[y][x] };
			else if (m[y][x] == 0) r[y][x] = { w: 0, h: 0, s: 0 };
			else {
				var a = r[y][x - 1];
				var b = r[y - 1][x];

				var max = 1;
				r[y][x] = { w: 1, h: 1, s: 1 };

				if (Math.min(a.h, yc[y][x]) * (a.w + 1) > r[y][x].s) {
					r[y][x] = {
						w: a.w + 1,
						h: Math.min(a.h, yc[y][x]),
						s: Math.min(a.h, yc[y][x]) * (a.w + 1)
					};
				}

				if (Math.min(b.w, xc[y][x]) * (b.h + 1) > r[y][x].s) {
					r[y][x] = {
						w: Math.min(b.w, xc[y][x]),
						h: b.h + 1,
						s: Math.min(b.w, xc[y][x]) * (b.h + 1)
					};
				}
			}
		}
	}

	var yMax = 0;
	var xMax = 0;
	for (var y = 0; y < h; y++) {
		for (var x = 0; x < w; x++) {
			if (r[y][x].s > r[yMax][xMax].s) {
				yMax = y;
				xMax = x;
			}
		}
	}

	for (var y = yMax - r[yMax][xMax].h + 1; y <= yMax; y++) {
		for (var x = xMax - r[yMax][xMax].w + 1; x <= xMax; x++) {
			m[y][x] = ('\u001b[' + 32 + 'm') + 1 + ('\u001b[' + 0 + 'm');
		}
	}

	for (var y = 0; y < h; y++) {
		m[y] = m[y].join('');
	}
	m = m.join('\n');

	return m;
}

var m = [
	'01100000',
	'01111000',
	'00111000',
	'00111000',
	'00000000',
];

console.log(find(m));
