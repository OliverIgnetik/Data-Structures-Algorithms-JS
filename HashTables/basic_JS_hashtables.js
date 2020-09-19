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
// assingn a new attribute
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)
