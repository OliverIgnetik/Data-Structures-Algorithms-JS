// run this script in the chrome browser to get a good look
// at the call stack

const factorial_r = (n) => {
  debugger;
  // base case
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial_r(n - 1);
};

let n = 3;
let msg = `${n}! = ${factorial_r(n)}`;
console.log(msg);

const factorial_iter = (n) => {
  if (n === 1 || n === 0) return 1;

  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

n = 3;
msg = `${n}! = ${factorial_iter(n)}`;
console.log(msg);
