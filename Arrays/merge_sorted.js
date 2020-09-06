// [1,8] [4,6,10]
// [1,4,6,8,10]

function merge_sorted(arr1, arr2) {
  const merged_array = [];
  while (arr1.length !== 0 || arr2.length !== 0) {
    if (arr1.length === 0) {
      let item = arr2.shift();
      merged_array.push(item);
    } else if (arr2.length === 0) {
      let item = arr1.shift();
      merged_array.push(item);
      // if both arrays are still not empty
    } else {
      if (arr1[0] < arr2[0]) {
        // pop item from arr1
        let item1 = arr1.shift();
        merged_array.push(item1);
      } else {
        // pop item from arr2
        let item2 = arr2.shift();
        merged_array.push(item2);
      }
    }
  }
  return merged_array;
}

console.log(merge_sorted([1, 4], [2, 2, 4, 4]));
