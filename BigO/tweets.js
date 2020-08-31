// TASK : compare each tweet with every other tweet by date

// O(N^2) time complexity
// Maybe changing the data structure can increase the scalability of the code
const array = [
  { tweet: 'hi', date: 2012 },
  { tweet: 'my', date: 2013 },
  { tweet: 'teddy', date: 2014 },
  { tweet: 'bye', date: 2012 },
  { tweet: 'yours', date: 2013 },
];

// this method may depend on the language you are using
// print out the length of a string
console.log('hello'.length); //O(1) time complexity because it's a lookup
