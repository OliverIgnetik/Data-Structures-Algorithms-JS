# Dynamic Programming

Dynamic programming seeks to improve the efficiency of recursive functions by the use of a cache.

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
The diagram above shows that some function evaluations are calculated more then once which leads to exponential time compleixty (O(2^N))
