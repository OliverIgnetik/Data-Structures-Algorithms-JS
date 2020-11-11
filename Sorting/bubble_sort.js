const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    // bubble up to ith last element
    // to optimize bubble sort we can use a variable to keep track
    // of swapping
    let swapped = true;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = false;
      }
    }
    if (swapped) break;
  }
}

bubbleSort(numbers);

console.log(numbers);
