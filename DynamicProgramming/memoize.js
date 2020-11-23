// const cache = {};
// function memoizedAddTo80(n) {
//   if (n in cache) {
//     console.log('Found in cache');
//     return cache[n];
//   } else {
//     console.log('computing');
//     cache[n] = n + 80;
//     return cache[n];
//   }
// }

function JSmemoizedAddTo80() {
  const cache = {};
  // closure helps avoid
  return function (n) {
    if (n in cache) {
      console.log('Found in cache!');
      return cache[n];
    } else {
      console.log('Computing...');
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = JSmemoizedAddTo80();

console.log(memoized(80));
console.log(memoized(80));
console.log(memoized(80));
