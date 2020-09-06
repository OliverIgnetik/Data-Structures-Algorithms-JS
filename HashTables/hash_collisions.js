// hash collisions occur when the two different keys map to the same memory location
// there are many ways to deal with collisions such as
// linear probing, quadratic probing, chaining (using linked lists)

// example of hash collisions : https://www.cs.usfca.edu/~galles/visualization/OpenHash.html

// when you have a collision the reading and writing is slowed down by :
// O(N/k) => O(N)
// where k is the size of the hash table

// with objects the key is stringified
const user = {
  age: 54,
  name: 'Jylie',
  magic: true,
  scream: function () {
    console.log('ahhhhhh!');
  },
};

console.log(user.age); // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)
