const example_1 = (array) => {
  // one memory allocation to variable i
  for (let i = 0; i < array.length; i++) {
    console.log('boo');
  }
};

// time complexity O(N)
// space complexity O(1)
example_1([1, 2, 3, 4, 5]);

// time complexity O(N)
// space complexity O(N)
function example_2(n) {
  const array = [];
  //   memory allocation to variable i
  for (let i = 0; i < n; i++) {
    array[i] = 'hi'; //O(1)
  }
  return array;
}

const array = example_2(10);
console.log(array);
