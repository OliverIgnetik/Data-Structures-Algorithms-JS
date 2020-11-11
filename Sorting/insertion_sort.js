const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let j = i - 1;
    while (j >= 0 && element < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = element;

    // for (let j = i - 1; j >= 0; j--) {
    //   if (element < array[j]) {
    //     let temp = array[j];
    //     array[j] = element;
    //     array[j + 1] = temp;
    //   } else {
    //     break;
    //   }
    // }
  }
}

insertionSort(numbers);

console.log(numbers);
