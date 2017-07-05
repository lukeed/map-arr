# map-arr [![Build Status](https://travis-ci.org/lukeed/map-str.svg?branch=master)](https://travis-ci.org/lukeed/map-str)

> A tiny (124b), faster alternative to native `Array.prototype.map`!

JavaScript's native `Array.prototype.map` is (unfortunately) ***much*** slower than standard for-loops.

This module has no dependencies and serves as a drop-in replacement for Node.js _and_ the browser!

It is ES3-compatible, which means it will run on _any_ browser and be the fastest version you can use.

Lastly, it is CommonJS & ES-Module friendly :tada:


## Install

```
$ npm install --save map-arr
```


## Usage

```js
// import mapArr from 'map-arr';
const mapArr = require('map-arr');

mapArr(['foo', 'bar', 'baz'], el => {
	return el + el;
});
//=> ['foofoo', 'barbar', 'bazbaz']

mapArr(['foo', 'bar', 'baz'], (el, idx) => {
	return el + idx;
});
//=> ['foo0', 'bar1', 'baz2']
```


## API

This module is a drop-in replacement for [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), which means it has the same API and behavior!


## Benchmarks

```
native
  --> 141,953 ops/sec ±0.15% (95 runs sampled)
map-arr
  --> 4,202,912 ops/sec ±0.72% (94 runs sampled)
arr-map
  --> 3,820,479 ops/sec ±0.37% (96 runs sampled)
array-map
  --> 135,490 ops/sec ±1.15% (92 runs sampled)
```


## License

MIT © [Luke Edwards](http://lukeed.com)
