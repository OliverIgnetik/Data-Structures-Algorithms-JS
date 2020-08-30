// What is good code?

// 1. Readable
// 2. Scalable

// Simple example
const array = ['nemo'];

function findNemo(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo(array);
