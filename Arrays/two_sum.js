// input : array of integers, target int
// output : return indices of the two numbers that add up to the target
// assumptions : exactly one solution

// sets are a great way of turning quadratic complexity
//  problems into linear time complexity

const two_sum = (arr, target) => {
  // key, value : complement (target - element), index
  const seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const complement = target - element;
    if (seen.has(element)) {
      // get the value for the complement
      // return the index of that complement and the current index
      return [seen.get(element), i];
    } else {
      seen.set(complement, i);
    }
  }
  return;
};

console.log(two_sum([1, 8, 3, 4], 12));
