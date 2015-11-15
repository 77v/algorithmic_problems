
function rotateList(a, i) {
	var k = i;
	var f = a[i];
	var oldk = k;

	do {
		oldk = k;
		var nk = a[k];
		a[k] = a[a[k]] + a.length;
		k = nk;
	} while (k != i);

	a[oldk] = f + a.length;
}

function rotate(a) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] < a.length) {
			rotateList(a, i);
		}
	}

	for (var i = 0; i < a.length; i++) {
		a[i] -= a.length;
	}

	return a;
}

var a = [4, 0, 2, 3, 1];

console.log(a);
rotate(a);
console.log(a);

