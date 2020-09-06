// This is an example of chaining with arrays

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // hash method
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  // set method
  set(key, value) {
    const hash_value = this._hash(key);
    if (!this.data[hash_value]) {
      this.data[hash_value] = [];
    }
    this.data[hash_value].push([key, value]);
    return [key, value];
  }
  // get method
  get(key) {
    const hash_value = this._hash(key);
    const currentBucket = this.data[hash_value];
    if (currentBucket) {
      // we need to loop through the bucket which has key mapped to the same hash value
      // to find the appropriate key value pair
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  // this can be very costly if the data space is very large
  // also the keys are unordered and looping through all the keys
  // has poor time complexity
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  keys_collision_prevention() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('trapes', 1000);
myHashTable.set('grapes', 2000);
myHashTable.set('apples', 500);
// get exactly grapes
console.log('GET GRAPES');
console.log(myHashTable.get('grapes'));
// look to find see the keys associated with hash values
console.log('GET WITH COLLISION ON KEYS');
console.log(myHashTable.keys());
console.log('GET KEYS WITHOUT COLLISION');
console.log(myHashTable.keys_collision_prevention());
// see trapes and grapes mapped to the same hash value
// ie. they are in the same list
console.log('COMPLETE LIST OF DATA');
console.log(myHashTable.data);
