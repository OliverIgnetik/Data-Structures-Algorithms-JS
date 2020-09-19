// array implementation
const basket = ['apples', 'grapes', 'pears'];

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const nodeA = new Node('apples', null);
const nodeB = new Node('pears', null);
nodeA.next = nodeB;
console.log('Node B is after node A');
console.log('====================================');
console.log(`Value for node after node A : ${nodeA.next.value}`);
console.log('====================================');

// insertion of new node - much quicker then arrays
console.log('\nInsert Node C in between A and B');
const nodeC = new Node('grapes', nodeB);
nodeA.next = nodeC;
nodeB.next = null;

console.log('====================================');
console.log(`Value for node after node A : ${nodeA.next.value}`);
console.log(`Node after node B : ${nodeB.next}`);
console.log('====================================');
