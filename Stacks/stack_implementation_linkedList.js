class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  pop() {
    if (this.length === 1) {
      const top = this.top;
      this.top = null;
      this.bottom = this.top;
      return top;
    }
    const top = this.top;
    this.top = top.next;
    this.length--;
    return top;
  }
  push(value) {
    if (this.length === 0) {
      const new_node = new Node(value, null);
      this.top = new_node;
      this.bottom = this.top;
      this.length++;
      return this;
    }
    this.top = new Node(value, this.top);
    this.length++;
  }
}

const stack = new Stack();
stack.push('udemy');
stack.push('google');
stack.push('optus sport');
console.log(stack.pop());
console.log(stack.peek());
