class Queue {
  constructor() {
    this.in = [];
    this.out = [];
  }
  dequeue() {
    // empty this.out first
    if (this.out.length === 0) {
      while (this.in.length !== 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
  enqueue(value) {
    this.in.push(value);
    return;
  }
  peek() {
    if (this.out.length === 0) {
      while (this.in.length !== 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
