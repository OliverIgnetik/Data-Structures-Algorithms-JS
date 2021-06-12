// [1,8] [4,6,10]
// [1,4,6,8,10]

function merge_sorted(arr1, arr2) {
  const merged_array = [];
  let i = 0;
  let j = 0;
  // Compare elements until one array has no more elements to compare
  while (i < arr1.length && j < arr1.length) {
    if (arr1[i] < arr2[j]) {
      merged_array.push(arr1[i]);
      i++;
    } else {
      merged_array.push(arr2[j]);
      j++;
    }
  }
  // add the extras
  for (let m = i; m < arr1.length; m++) {
    merged_array.push(arr1[m]);
  }
  for (let k = j; k < arr2.length; k++) {
    merged_array.push(arr2[k]);
  }

  return merged_array;
}

console.log(merge_sorted([1, 8], [4, 6, 10]));
