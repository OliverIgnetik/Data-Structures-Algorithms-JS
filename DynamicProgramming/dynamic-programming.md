# Dynamic Programming

CAN REDUCE THE FIBONACCI ALGORITHM FROM O(2^N) to O(N)!!!

**It is an optimization technique**

Do you have something that you can cache so that you only have to solve sub problems once?

Dynamic programming seeks to improve the efficiency of recursive functions by the use of a cache.

## Checklist for memoization

1. Can be divided into subproblem
2. Recursive solution
3. Are there repetitive subproblems?
4. Memoize subproblems

**Fibonacci function**

```javascript
const fib_r = (index_value) => {
  if (index_value === 0) {
    return 0;
  }
  if (index_value === 1) {
    return 1;
  }
  return fib_r(index_value - 1) + fib_r(index_value - 2);
};
```

![Fibonacci recursion](.\fibonacci.jpg)
The diagram above shows that some function evaluations are calculated more then once which leads to exponential time complexity (O(2^N)).

```javascript
// we make use of lexical closure
const memoized_fib = () => {
  const cache = {};
  return (fib = (value) => {
    if (value in cache) {
      return cache[value];
    }
    if (value < 2) return value;
    else {
      cache[value] = fib(value - 1) + fib(value - 2);
      return cache[value];
    }
  });
};
```

### GENERAL FORM OF MEMOIZATION

```javascript
const memoized_function = () => {
  const cache = {};
  return function original_function(input) {
    if (input in cache) {
      return cache[n];
    }
    cache[n] = result;
    return cache[n];
  };
};
```

## Memoization - caching

Caching is a way to store values so that you can use them later on.

```javascript
// if the function takes a long time we are wasting computation because we have computed the result already
costly_function(10);
costly_function(10);
costly_function(10);
```

Below we can see how functions can be memoized to use a cache in combination with closure by returning a function within a function like we do commonly in React. This way the _cache_ is part of the _function scope_ and not the _global scope_.

### EXAMPLE WORKING FUNCTION

```javascript
function JSmemoizedAddTo80() {
  const cache = {};
  return function (n) {
    if (n in cache) {
      console.log('Found in cache');
      return cache[n];
    } else {
      console.log('Computing...');
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = JSmemoizedAddTo80();

console.log(memoized(10));
console.log(memoized(10));
```
