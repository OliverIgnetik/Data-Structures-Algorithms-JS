// Arrays
// USE CASE : Storing data and iterating over it

// time complexity
// lookup O(1)
// push O(1)
// insert O(N)
// delete O(N)

const strings = ['a', 'b', 'c', 'd'];
console.log('STARTING LIST');
console.log(strings);
console.log('\n');

// 32 bit system
// byte = 8 bits
// 4*4 = 16 bytes of storage

// access operation O(1)
console.log('GET OPERATION');
console.log(strings[2]);
console.log('\n');

// push operation O(1)
console.log('PUSH OPERATION');
console.log(strings);
strings.push('e');
console.log(strings);
console.log('\n');

// pop item O(1)
console.log('PUSH OPERATION');
console.log(strings);
strings.pop();
console.log(strings);
console.log('\n');

// unshift O(N)
console.log('UNSHIFT OPERATION');
console.log(strings);
strings.unshift('x');
console.log(strings);
console.log('\n');

// splice O(N)
console.log('SPLICE OPERATION');
console.log(strings);
strings.splice(2, 0, 'alien');
console.log(strings);
console.log('\n');
