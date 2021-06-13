const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const quickSort = (array) => {
  _quickSort(array, 0, array.length - 1);
  return array;
};

const _quickSort = (array, left, right) => {
  // base case
  if (left >= right) {
    return;
  }

  const pivot = array[Math.floor((left + right) / 2)];
  const index = partition(array, left, right, pivot);

  _quickSort(array, left, index - 1);
  _quickSort(array, index, right);
};

const partition = (array, left, right, pivot) => {
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
};

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

console.log('====================================');
console.log(quickSort(numbers));
console.log('====================================');
