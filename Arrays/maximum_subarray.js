// Reference
// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/ geeksforgeeks
// https://www.youtube.com/watch?v=2MmGzdiKR9Y&t=352s BackToBackSWE Kadane's algorithm
// https://en.wikipedia.org/wiki/Maximum_subarray_problem wikipedia Kadane's algorithm

// function that returns the subarray with the largest sum
// input : [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// output : [4,-1,2,1] has the largest sum of 6

// AVOID BUD!
/*
Bottlenecks
Unnecessary Work
Duplicate Work
*/

// O(N^3) brute force approach
// This approach has repeated unnecessary work
const cubic_approach = (arr) => {
  let maxSum = -Infinity;
  let maxSubArray;
  for (let left = 0; left < arr.length; left++) {
    for (let right = left; right < arr.length; right++) {
      // iterate from the left side of the window to the right side
      let runningWindowSum = 0;
      let runningSubArray = [];
      for (let k = left; k <= right; k++) {
        runningWindowSum += arr[k];
        runningSubArray.push(arr[k]);
      }
      // after we have traversed the window check if we have beat the best maxSum
      // set maxSum and maxSubArray and reset runningSubArray
      if (runningWindowSum > maxSum) {
        maxSum = runningWindowSum;
        maxSubArray = runningSubArray;
      }
      // after checking this subwindow reset the sum and subarray
      runningWindowSum = 0;
      runningSubArray = [];
    }
  }
  return [maxSum, maxSubArray];
};

// O(N^2) quadratic time approach

/*
The extra loop is unnecessary
We don't need to compute the runningSum from the left index
every time we move the right index
NOTE: we already have the sum for the preceeding subarray sum
*/
const quadratic_approach = (arr) => {
  // set initial values
  let maxSum = -Infinity;
  let maxSubArray = [];

  for (let left = 0; left < arr.length; left++) {
    let runningWindowSum = 0;
    let runningSubArray = [];

    // initialize variables for this window
    for (let right = left; right < arr.length; right++) {
      runningWindowSum += arr[right];
      runningSubArray.push(arr[right]);
      if (runningWindowSum > maxSum) {
        maxSum = runningWindowSum;
        /* 
        make sure to use the spread operator
        we need to copy the contents not make a reference to
        the runningSubArray
        */
        maxSubArray = [...runningSubArray];
      }
    }
  }
  return [maxSum, maxSubArray];
};

// O(N) best solution
// O(1) space
// KADANE'S ALGORITHM
/*
- Dynamic programming problem
- We need to identify the sub problems
  - Given an index what is the maximum subarray that ends at 
  that index

The key to this algorithm is understanding 
what does each item contribute at each iteration?
CHOICES 
1. We can start a new subarray at a certain item
OR
2. We can continue the max sum
*/
const kadane_algorithm = (arr) => {
  // sum
  let runningSum = arr[0];
  let maxSum = arr[0];
  // subArray
  let maxSubArray = [];
  let runningSubArray = [];
  for (let i = 1; i < arr.length; i++) {
    /*
    Check if the current element is better then our current
    runningSum. If it is, then update it and reset the runningSubArray
    */
    if (runningSum < arr[i]) {
      runningSum = arr[i];
      runningSubArray = [arr[i]];
    } else {
      // if not then continue to update the runningSum and runningSubArray
      runningSum += arr[i];
      runningSubArray.push(arr[i]);
    }
    // if the runningSum is greater then the maxSum then update
    // maxSum and maxSubArray
    if (runningSum > maxSum) {
      maxSum = runningSum;
      // make sure to use the spread operator and do a deeper copy
      maxSubArray = [...runningSubArray];
    }
  }
  return [maxSum, maxSubArray];
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum, maxSubArray;

console.log('CUBIC TIME');
console.log('-----------------------------------------------');
[maxSum, maxSubArray] = cubic_approach(arr);
console.log(`max sum : ${maxSum}, max subarray : ${maxSubArray}\n`);

console.log('QUADRATIC TIME');
console.log('-----------------------------------------------');
[maxSum, maxSubArray] = quadratic_approach(arr);
console.log(`max sum : ${maxSum}, max subarray : ${maxSubArray}\n`);

console.log('KADANE ALGORITHM');
console.log('-----------------------------------------------');
[maxSum, maxSubArray] = kadane_algorithm(arr);
console.log(`max sum : ${maxSum}, max : ${maxSubArray}`);
