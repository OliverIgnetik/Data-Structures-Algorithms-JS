// regular for loop
function findNemo(array) {
  let t0 = new Date();
  let found = false;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'nemo') {
      found = true;
    }
  }
  const display = found ? 'Found nemo!' : 'Nemo not found';
  console.log(display);
  let t1 = new Date();
  console.log(`function evalutation took ${t1 - t0} ms`);
}

// for of
function findNemo2(array) {
  let t0 = new Date();
  let found = false;
  for (let element of array) {
    if (element === 'nemo') {
      found = true;
    }
  }
  const display = found ? 'Found nemo!' : 'Nemo not found';
  console.log(display);
  let t1 = new Date();
  console.log(`function evalutation took ${t1 - t0} ms`);
}

// forEach;
function findNemo3(array) {
  let t0 = new Date();
  let found = false;
  array.forEach((element) => {
    if (element === 'nemo') found = true;
  });
  const display = found ? 'Found nemo!' : 'Nemo not found';
  console.log(display);
  let t1 = new Date();
  console.log(`function evalutation took ${t1 - t0} ms`);
}
