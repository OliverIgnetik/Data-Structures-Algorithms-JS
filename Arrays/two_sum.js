// input : array of integers, target int
// output : return indices of the two numbers that add up to the target
// assumptions : exactly one solution

const two_sum = (arr, target) => {
  const seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const complement = target - element;
    if (seen.has(element)) {
      return [seen.get(element), i];
    } else {
      seen.set(complement, i);
    }
  }
  return;
};

console.log(two_sum([1, 8, 3, 4], 5));
