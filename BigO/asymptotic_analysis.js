// What is good code?
// 1. Readable
// 2. Scalable

// 3 pillars of good code
// 1. Readable
// 2. Memory
// 3. Speed

// Simple example
const nemo = ['nemo'];
const large = new Array(10000000).fill('nemo');

function findNemo(array) {
  let t0 = new Date();
  let found = false;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'nemo') {
      found = true;
    }
  }
  const display = found ? 'Found nemo!' : 'Nemo not found';
  console.log(display);
  let t1 = new Date();
  console.log(`function evalutation took ${t1 - t0} ms`);
}

console.log('====================================');
console.log('SINGLE ELEMENT');
console.log('====================================');
findNemo(nemo);

console.log('====================================');
console.log(`Array with size ${large.length}`);
console.log('====================================');
findNemo(large);

// Asymptotic analysis is independent of hardware and is the language we
// use to explain time complexity

// We focus on the number of operations
function linear_search(array, number = 5) {
  let found = false;
  let num_operations = 0;
  for (let index = 0; index < array.length; index++) {
    num_operations += 1;
    if (array[index] === number) {
      found = true;
      break;
    }
  }
  const display = found ? 'Found!' : 'not found';
  return [num_operations, display];
}

// make a new array
const numbers = [...Array(10).keys()];

console.log('====================================');
console.log('BigO Notation');
console.log('====================================');
const [num_operations, display] = linear_search(numbers, 7);
console.log(display);
console.log(`The number of operations is ${num_operations}`);
