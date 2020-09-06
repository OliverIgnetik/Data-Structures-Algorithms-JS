// function that returns the subarray with the largest sum
// input : [-2,1,-3,4,-1,2,1,-5,4]
// output : [4,-1,2,1] has the largest sum of 6

// brute force approach
// O(N!)
// linear time greedy approach
// O(N)
const max_sub = (arr) => {
  const max_sub = [];
  let max_sum = 0;
  return [max_sub, max_sum];
};

console.log(max_sub([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
