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
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  // insert = (value) => {
  //   // add one to the length
  //   this.length++;
  //   let node = this.head;
  //   while (node.next) {
  //     node = node.next;
  //   }
  //   node.next = this.create_node(value, null);
  //   this.tail = node.next;
  //   return this.tail;
  // };
}

const l = new LinkedList(10);

console.log('====================================');
console.log('INITIAL LINKED LIST');
console.log(l);
console.log('====================================');
console.log('\n');
console.log('====================================');
l.append(5);
l.append(16);
l.prepend(0);
console.log(l);
console.log('====================================');
console.log('\n');
console.log(l.head.next);
