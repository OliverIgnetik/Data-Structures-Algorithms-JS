// find if the array contains a pair that sums to a target

const array = [1, 2, 3, 5, 6];
const target = 4;

const pair_sums = (array, target) => {
  const compliments = new Set();
  for (const item of array) {
    if (compliments.has(item)) {
      return true;
    }
    const compliment = target - item;
    compliments.add(compliment);
  }
};

console.log('====================================');
console.log(pair_sums(array, target));
console.log('====================================');
