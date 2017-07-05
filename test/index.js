const test = require('tape');
const fn = require('../dist/map-arr');

test('loop thru elements in array', t => {
	const out = fn([1,2,3], n => (n + 4));
	t.deepEqual(out, [5,6,7]);
	t.end();
});

test('loop thru elements in array, with indices', t => {
	const out = fn(['a','b','c'], (s,i) => (s + i));
	t.deepEqual(out, ['a0','b1','c2']);
	t.end();
});
