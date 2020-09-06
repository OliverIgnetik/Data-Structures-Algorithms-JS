// With maps you can have arrays and functions as keys
// furthermore map ensure ordered insertion
const m = new Map();

// set a function as the key
m.set(function hello() {
  console.log('hello');
}, 'function as key');

// set an array as the key
m.set([1, 2, 3], 'array as key');

console.log(m.keys());
