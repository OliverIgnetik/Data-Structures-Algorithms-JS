class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  push(value) {
    this.length++;
    this.data.push(value);
    return this;
  }
  pop() {
    this.length--;
    return this.data.pop();
  }
  peek() {
    return this.data[this.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack.peek());
