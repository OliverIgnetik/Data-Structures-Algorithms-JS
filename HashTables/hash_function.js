// Objects in JS are a type of hash table

// Dictionaries in JS are a type of hash table
// Hash function
// Key => hash function value
// example of hash generator : http://www.miraclesalad.com/webtools/md5.php

// Idempotent : a function given an input always gives the same output
// The hash function should not take to long to compute
// In cryptography more complicated hashing functions are used

// Useful applications
// Databases
// Caches

function hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = hash + key.charCodeAt(i) * i;
  }
  return hash;
}

console.log(hash('goodbye'));
