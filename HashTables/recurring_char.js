// set is the best data structure to use since we are only interested in the key
const reccuring_char = (input) => {
  const m = new Set();
  let values;
  if (typeof input === String) {
    values = [...input];
  } else {
    values = input;
  }
  for (const item of values) {
    if (!m.has(item)) {
      m.add(item);
    } else {
      return item;
    }
  }
  return undefined;
};

console.log(reccuring_char([1, 2, 3, 5, 1]));
