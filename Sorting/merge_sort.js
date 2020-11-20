const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(numbers.slice(0, Math.floor(numbers.length / 2)));
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  console.log('[mergeSort function]');
  console.log(`left : ${left}`);
  console.log(`right : ${right}`);

  return merge(mergeSort(left), mergeSort(right));
}

// Poor time complexity because of the reindexing in shift
// function merge(left, right) {
//   //   console.log(`left : ${left}`);
//   //   console.log(`right : ${right}`);
//   const result = [];
//   while (left.length !== 0 || right.length !== 0) {
//     if (left.length === 0 && right.length !== 0) {
//       result.push(right.shift());
//     }
//     if (right.length === 0 && left.length !== 0) {
//       result.push(left.shift());
//     }
//     if (left[0] <= right[0]) {
//       result.push(left.shift());
//     }
//     if (right[0] <= left[0]) {
//       result.push(right.shift());
//     }
//   }
//   return result;
// }

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log('[merge function]');
  console.log(left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);

console.log(answer);
