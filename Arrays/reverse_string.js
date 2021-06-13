// create a function that reverses a string
// 'Hi my name is Olli' should be 'illO si eman ym iH'

// take advantage of stack behaviour (LIFO)
function reverse1(str) {
  const original = [...str];
  let reversedString = '';
  // while loop is better suited here
  while (original.length !== 0) {
    reversedString += original.pop();
  }
  return reversedString;
}

// O(N) time
// O(N) space
function reverse2(str) {
  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

// JS hack
function reverse3(str) {
  return str.split('').reverse().join('');
}

// ES6 hack
const reverse4 = (str) => [...str].reverse().join('');

const myStr = 'Hi my name is Olli';

console.log('====================================');
console.log('FIRST METHOD');
console.log('====================================');
console.log(reverse1(myStr));
console.log('====================================');
console.log('SECOND METHOD');
console.log('====================================');
console.log(reverse2(myStr));
console.log('====================================');
console.log('THIRD METHOD');
console.log('====================================');
console.log(reverse3(myStr));
console.log('====================================');
console.log('FOURTH METHOD');
console.log('====================================');
console.log(reverse4(myStr));
