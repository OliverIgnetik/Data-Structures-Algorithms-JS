// static arrays - specify the size of the array on declaration

// C++ and other lower level languages have this feature

// dynamic arrays - expands as you add more items

// amortization comes into play when we double the size of the list such that
// the amortized cost per operation becomes O(1)

// quick note on class equality and pointers
const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

console.log('Original object');
console.log(object1);
console.log('\n');

console.log('Pointer reference');
console.log(object1 === object2);
console.log('New object with the same values');
console.log(object1 === object3);
console.log('\n');

console.log('Changing the reference object affects the pointer');
object1.value = 15;
console.log('reference object : ' + object1.value);
console.log('pointer to reference : ' + object2.value);
