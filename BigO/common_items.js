// Given 2 arrays create a function that let's a user know
// whether these two arrays contain any common items

const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 'a'];

console.log('WORST SOLUTION');
// O(a*b) time complexity
const bruteForce = (array1, array2) => {
  for (const i of array1) {
    for (const j of array2) {
      if (i === j) {
        return true;
      }
    }
  }
  return false;
};

console.log('====================================');
console.log(bruteForce(array1, array2));
console.log('====================================');

console.log('SET SOLUTION');
// here is one solution using sets
// O(a) time complexity
// O(a+b) space complexity
const commonItems = (array1, array2) => {
  const a = new Set(array1);
  const b = new Set(array2);
  return Boolean(new Set([...a].filter((x) => b.has(x))).size);
};

console.log('====================================');
console.log(commonItems(array1, array2));
console.log('====================================');

console.log('HASHTABLE IS THE MOST VERSATILE');
// Here is another approach with hashtables
// O(a + b) time complexity
// O(a) space complexity
const hashTableSolution = (array1, array2) => {
  if (array1.length === 0 || array2.length === 0) return false;
  const map = {};
  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    if (!map[element]) map[element] = true;
  }
  for (let j = 0; j < array2.length; j++) {
    const element = array2[j];
    if (map[element]) return true;
  }
  return false;
};

console.log('====================================');
console.log(hashTableSolution(array1, array2));
console.log('====================================');

console.log('JS HACK SOLUTION');
// Here is another approach with hashtables
// O(a) time complexity
const JS_hack = (array1, array2) => {
  return array1.some((item) => array2.includes(item));
};

console.log('====================================');
console.log(JS_hack(array1, array2));
console.log('====================================');
