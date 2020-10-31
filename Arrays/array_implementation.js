// custom array implemented with a dictionary
class myArray {
  constructor() {
    this.length = 0;
    // use of dictionary makes dynamic memory allocation easier
    this.data = {};
  }
  // O(1)
  get(index) {
    return this.data[index];
  }
  // O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  // O(1)
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  //   O(N)
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  // helper function for delete
  shiftItems(index) {
    //   shift items to the left by one
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    // last item in the array still exists
    delete this.data[this.length - 1];
    this.length--;
  }
  // insert new item in array
  insert(index, item) {
    this.push(null);
    // shift everything to the right
    for (let i = this.length - 1; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    // set the index once your done
    this.data[index] = item;
  }
}

const arr = new myArray();
arr.push('hi');
arr.push('bye');
arr.push('goodmorning');
arr.push('goodafternoon');

console.log('====================================');
console.log('original');
console.log('====================================');
console.log(arr);

arr.delete(1);
console.log('====================================');
console.log('after deletion at index 1');
console.log('====================================');
console.log(arr);

arr.insert(0, 'alien');
console.log('====================================');
console.log('after insert at index 0');
console.log('====================================');
console.log(arr);
