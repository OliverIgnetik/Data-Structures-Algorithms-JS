const letters = ['z', 'a', 'd', 'e'];
console.log('====================================');
console.log(
  `unsorted letters : ${letters}\nsorted letters : ${letters.sort()}`,
);
console.log('====================================');

const numbers_error = [1, 50, 24, 2, 10];
console.log('====================================');
console.log(
  `unsorted numbers : ${numbers_error}\nsorted numbers : ${numbers_error.sort()}`,
);
console.log('====================================');

// You need to provide the sort method with a compare function
const numbers = [1, 50, 24, 2, 10];
console.log('====================================');
console.log(
  `unsorted numbers : ${numbers}\nsorted numbers : ${numbers.sort(
    (a, b) => a - b,
  )}`,
);
console.log('====================================');
