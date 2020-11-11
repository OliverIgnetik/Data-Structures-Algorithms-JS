const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let min_index = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    array[i] = array[min_index];
    array[min_index] = temp;
  }
}

selectionSort(numbers);
console.log('====================================');
console.log(numbers);
console.log('====================================');
