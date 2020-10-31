// template for linked list
let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// class implementation
class LinkedList {
  constructor(value) {
    this.head = new Node(value, null);
    // there is only one item in the list
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail.next = new Node(value, null);
    this.tail = this.tail.next;
    this.length++;
    return this;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index > this.length || index < 0) {
      return new Error('index out of bounds');
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length) {
      return this.append(value);
    }
    const node = this.traversal(index - 1);
    // insert infront of node at that index
    const new_node = new Node(value, node.next);
    node.next = new_node;
    this.length++;
    return this;
  }

  remove(index) {
    if (index > this.length || index < 0) {
      return new Error('index out of bounds');
    }
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    const node = this.traversal(index - 1);
    if (index === this.length - 1) {
      this.tail = node;
      this.tail.next = null;
      this.length--;
      return this;
    }
    node.next = node.next.next;
    this.length--;
    return this;
  }

  traversal(index) {
    let cur = this.head;
    let i = 0;
    // stop when we get to the index we want
    while (i !== index) {
      cur = cur.next;
      i++;
    }
    return cur;
  }

  asList() {
    const arr = [];
    let cur_node = this.head;
    while (cur_node) {
      arr.push(cur_node.value);
      cur_node = cur_node.next;
    }
    return arr;
  }

  reverse() {
    let cur = this.head;
    const original_head = cur;

    let next_node;
    let prev_node = null;
    while (cur) {
      next_node = cur.next;
      cur.next = prev_node;
      prev_node = cur;
      cur = next_node;
    }
    this.head = prev_node;
    this.tail = original_head;

    return this;
  }
}

const l = new LinkedList(10);
l.append(5);
l.append(16);
console.log('APPEND SOME VALUES');
console.log(l.asList());
console.log('INSERT AT INDEX 1');
l.insert(1, -11);
console.log(l.asList());
console.log('REMOVE HEAD');
l.remove(0);
console.log(l.asList());
console.log('REMOVE TAIL');
l.remove(2);
console.log(l.asList());
console.log('APPEND');
l.append(3);
l.append(7);
l.append(5);
console.log(l.asList());
console.log('REMOVE INDEX 2');
l.remove(2);
console.log(l.asList());
console.log('REVERSE');
l.reverse();
console.log(l.asList());
console.log('====================================');
console.log('New tail :', l.tail);
console.log('====================================');
