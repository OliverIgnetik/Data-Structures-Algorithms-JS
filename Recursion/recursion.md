# Recursion

A recursive function is one that refers to itself.

**NOTE**: Use the debugger to see the call stack and understand function calls and how the function calls are popped from the stack

```javascript
debugger;
```

**Simple Example**

```javascript
function inception(value) {
  // debugger can help you see the callstack
  debugger;
  console.log(value);
  if (value === 1 || value === 0) {
    return 'YOU HAVE REACHED THE BASE CASE!';
  }
  return inception(value - 1);
}
```

**Tree recursion**

```javascript
const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};
```

## Recursion vs Iterative programming

_Anything that can be implemented recursively can be implemented iteratively._

```Javascript
// Time complexity O(2^N)
const fib_r = (index_value) => {
  if (index_value === 0) {
    return 0;
  }
  if (index_value === 1) {
    return 1;
  }
  return fib_r(index_value - 1) + fib_r(index_value - 2);
};

// Time complexity O(n)
const fib_i = (n) => {
  const arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};
```

## Trade-offs with recursion

**PROS**

- DRY
- Readability

**CONS**

- Large stack because of multiple function calls
  - This issue can be resolved using dynamic programming or tail-end optimization

## When to use recursion

- Every time you are using a tree or converting something into a tree, _consider recursion_
- Divide and conquer
  - Each instance of the subproblem is identical in nature
  - The solutions of each subproblem can be combined to solve the problem at hand

**GOOD RULE** : use recursion when you don't know how many loops are needed

## Applications

- great for problems with repeated sub-tasks
