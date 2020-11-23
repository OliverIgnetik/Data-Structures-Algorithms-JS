let calculations = 0;
// Time complexity is O(N) compared to O(2^N)
const memoized_fib_r = () => {
  const cache = {};
  return function fib_r(value) {
    calculations++;
    if (value in cache) {
      return cache[value];
    }
    if (value === 0) {
      cache[0] = 0;
      return cache[0];
    }
    if (value === 1) {
      cache[1] = 1;
      return cache[1];
    }
    cache[value] = fib_r(value - 1) + fib_r(value - 2);
    return cache[value];
  };
};

const bottomUp_approach = (n) => {
  const answer = [0, 1];
  for (let i = 0; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
};

const memoized_fib = memoized_fib_r();

value = 35;
console.log('Recursive memoized approach');
msg = `The index ${value} in the fibonacci sequence has a value ${memoized_fib(
  value,
)}`;
console.log('====================================');
console.log(msg);
console.log('Number of calculations :', calculations);
console.log('====================================');
