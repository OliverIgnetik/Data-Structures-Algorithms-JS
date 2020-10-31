class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  dequeue() {
    if (this.length === 1) {
      const first = this.first;
      this.first = null;
      this.last = this.first;
      this.length--;
      return first;
    }
    // grab the first item
    const first = this.first;
    let cur = this.last;
    // we need to grab the second from the front
    while (cur.next.next) {
      cur = cur.next;
    }
    // make the next node null
    cur.next = null;
    this.first = cur;
    this.length--;
    return first;
  }
  enqueue(value) {
    if (this.length === 0) {
      const new_node = new Node(value, null);
      this.first = new_node;
      this.last = this.first;
      this.length++;
      return this;
    }
    this.last = new Node(value, this.last);
    this.length++;
    return this;
  }
}

const queue = new Queue();
queue.enqueue('udemy');
queue.enqueue('google');
queue.enqueue('optus sport');
queue.enqueue('facebook');
queue.enqueue('spotify');
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue);
