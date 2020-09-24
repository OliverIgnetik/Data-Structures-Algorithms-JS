# Stacks and Queues

## Stacks (LIFO)

| operation | complexity |
| --------- | ---------- |
| lookup    | O(N)       |
| pop       | O(1)       |
| push      | O(1)       |
| peek      | O(1)       |

### Applications

- language interpreters : when functions get called they follow a **stack** structure
- browser history : back button pops a page from the stack

### Implementations

- Linked Lists
- Arrays

## Queues (FIFO)

| operation | complexity |
| --------- | ---------- |
| lookup    | O(N)       |
| enqueue   | O(1)       |
| dequeue   | O(1)       |
| peek      | O(1)       |

### Applications

- check in lists
- ride requests
- page requests
- printer queue

### Implementations

- Linked Lists
- Arrays (unshift is very inefficient)

## Stack vs Queues

- Stacks can be implemented using an array because push and pop are efficient O(1)
- Arrays allow cache locality and use less memory, however even dynamic arrays have to resize.
- Queues can be implemented using linked lists to avoid unshifts

## How Javascript works?

Javascript is a single threaded language that can be non-blocking.

A program allocates memory and parse and execute code.

The **V8 engine** (compiles JS into executable machine code) in chrome consists of:

1. Memory Heap - what things are important in your program?
2. Call stack - where are you in the program?

### Memory Heap

```javascript
const var = 10;
const arr = [1, 3, 4];
// JS runs garbage collection when it feels like it
```

**Memory leaks** : when you have unused memory that fills up the memory heap. This is why global variables can be risky if you forget to destroy them. Javascript has **automatic garbage collection**.

### Callstack

The order of execution in a program.

```javascript
const one = () => {
  const two = () => {
    console.log('4');
  };
  two();
};
one();
```

Javascript is a single threaded language which can run asynchronous code. Blocking code can be very bad for website requests!

```javascript
// non-blocking
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(3);
```

Crucial components of a JS run-time environment:

- Event loop : continously checks call stack and callback queue
- Web APIs : DOM, setTimeouts and event loop handles
- Callback queue : listens for events and executes in FIFO

Stack overflow : function calls exceed capacity of call stack

```javascript
// stack overflow
const foo = () => {
  console.log('foo');
  foo();
};
foo();
```
