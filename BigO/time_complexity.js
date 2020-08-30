// RULES FOR ANALYSIS
// 1. WORST CASE
// 2. REMOVE CONSTANTS
// 3. CASE OF MULTIPLE INPUTS
// 4. DROP NON DOMINANTS

// linear complexity - O(N)
const compressAllBoxes = (boxes) => boxes.foreach((box) => console.log(box));

// constant time - O(1)
const compressFirstBox = (boxes) => {
  console.log(boxes[0]);
};

// constant time - O(3)
const compressThreeBoxes = (boxes) => {
  console.log(boxes[0]);
  console.log(boxes[1]);
  console.log(boxes[2]);
};

// linear time - O(N)
const funChallenge = (input) => {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  // O(3*N)
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(1)
    let stranger = true; // O(1)
    a++; // O(1)
  }
  return a;
};

// linear function
// overall time complexity => O(3 + 3*N + 2*N + 1) => O(N)
const anotherFunChallenge = (input) => {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  //   O(3*N)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(1)
    let y = i + 2; // O(1)
    let z = i + 3; // O(1)
  }
  //   O(2*N)
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(1)
    let q = j * 2; // O(1)
  }
  //   O(1)
  let whoAmI = "I don't know";
};

// MULTIPLE INPUTS
// O(N + M)
const compressBoxesTwice = (boxes1, boxes2) => {
  // add time complexity on the same indentation
  // multiply time complexity when you see indentation
  boxes1.foreach((box) => console.log(box));
  boxes2.foreach((box) => console.log(box));
};

// log all pairs of an array
// quadratic time complexity
// O(N^2)
const boxes = ['a', 'b', 'c', 'd', 'e'];

const logAllPairsOfArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

// Overall time complexity
// O(N^2 + N) => O(N^2)
const printAllNumbersThenAllPairSums = (numbers) => {
  console.log('these are the numbers:');
  //   O(N)
  numbers.forEach((element) => console.log(element));
  console.log('and these are their sums:');
  //   O(N^2)
  numbers.forEach((fnum) =>
    numbers.forEach((snum) => console.log(fnum + snum)),
  );
};

// Factorial time
// O(N!)
// Nested Loop for every input
