// 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
// this illustrates the need for dynamic programming

// Time complexity O(2^N)
const fib_r = (index_value) => {
  if (index_value === 0) {
    return 0;
  }
  if (index_value === 1) {
    return 1;
  }
  return fib_r(index_value - 1) + fib_r(index_value - 2);
};

// Time complexity O(n)
const fib_i = (n) => {
  const arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};

let value = 7;
console.log('Iterative approach');
let msg = `The index ${value} in the fibonacci sequence has a value ${fib_i(
  value,
)}`;
console.log('====================================');
console.log(msg);
console.log('====================================');

value = 7;
console.log('Recursive approach');
msg = `The index ${value} in the fibonacci sequence has a value ${fib_r(
  value,
)}`;
console.log('====================================');
console.log(msg);
console.log('====================================');
