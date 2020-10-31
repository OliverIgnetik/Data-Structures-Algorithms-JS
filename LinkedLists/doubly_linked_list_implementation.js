class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value, null, null);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    if (this.length === 0) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
      this.length++;
      return this;
    }
    this.tail.next = new Node(value, null, this.tail);
    this.tail = this.tail.next;
    this.length++;
    return this;
  }
  prepend(value) {
    if (this.length === 0) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
      this.length++;
      return this;
    }
    this.head.prev = new Node(value, this.head, null);
    this.head = this.head.prev;
    this.length++;
    return this;
  }
  asList() {
    const arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.value);
      cur = cur.next;
    }
    return arr;
  }
  traversal(index) {
    let cur = this.head;
    let i = 0;
    while (i !== index) {
      cur = cur.next;
      i++;
    }
    return cur;
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
    const leading = this.traversal(index - 1);
    const trailing = leading.next;
    leading.next = new Node(value, trailing, leading);
    trailing.prev = leading.next;
    this.length++;
    return this;
  }
  remove(index) {
    if (index > this.length || index < 0) {
      return new Error('index out of bounds');
    }
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this;
    }
    if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return this;
    }
    const node = this.traversal(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;
    return this;
  }

  reverse() {
    let cur = this.head;
    const original_head = cur;
    // temporary pointer
    let next_node;
    while (cur) {
      next_node = cur.next;
      // switch the pointers
      cur.next = cur.prev;
      cur.prev = next_node;
      // point cur at the next node
      cur = next_node;
    }
    this.head = this.tail;
    this.tail = original_head;
    return this;
  }
}

const l = new DoublyLinkedList(1);
l.append(2);
l.prepend(0);
console.log('initial\n', l.asList());
console.log(l);
console.log('\ninsert 10 at index 1');
l.insert(1, 10);
console.log(l.asList());
console.log('\nremove at index 1');
l.remove(1);
console.log(l.asList());
console.log('\nremove tail');
l.remove(l.length - 1);
console.log(l.asList());
l.insert(2, 5);
console.log('\nInsert at index 2\n', l.asList());
console.log('\nreverse');
l.reverse();
console.log(l.asList());
console.log('\nNEW HEAD NODE');
console.log('====================================');
console.log(l.head);
console.log('====================================');
