const Trees = require('../Trees/BST');

class BST_BFS extends Trees.BST {
  constructor() {
    super();
  }

  BFS_traversal = () => {
    const queue = [];
    const seen = new Set();

    // set the level of the root node
    this.root.level = 0;
    // add the root to the queue
    queue.push(this.root);

    while (queue.length > 0) {
      const cur_node = queue.shift();
      if (!seen.has(cur_node.value)) {
        // process the node
        seen.add(cur_node.value);
        console.log(`Value : ${cur_node.value}, level : ${cur_node.level}`);
      }

      // add children if they exist
      if (cur_node.left) {
        const left_child = cur_node.left;
        left_child.level = cur_node.level + 1;
        if (!seen.has(left_child.value)) {
          queue.push(left_child);
        }
      }

      if (cur_node.right) {
        const right_child = cur_node.right;
        right_child.level = cur_node.level + 1;
        if (!seen.has(right_child.value)) {
          queue.push(right_child);
        }
      }
    }
  };

  BFS_R = () => {
    this.root.level = 0;
    return this.BFS_traversal_Recursive([this.root], []);
  };

  BFS_traversal_Recursive = (queue, list) => {
    if (!queue.length) {
      return list;
    }

    const cur = queue.shift();
    list.push([cur.value, cur.level]);
    if (cur.left) {
      cur.left.level = cur.level + 1;
      queue.push(cur.left);
    }
    if (cur.right) {
      cur.right.level = cur.level + 1;
      queue.push(cur.right);
    }

    return this.BFS_traversal_Recursive(queue, list);
  };

  DFS_traversal = () => {
    const stack = [];
    const seen = new Set();

    // add the root to the queue
    stack.push(this.root);

    while (stack.length > 0) {
      const cur_node = stack.pop();

      // PreOrder DFS
      if (!seen.has(cur_node.value)) {
        // process the node
        seen.add(cur_node.value);
        console.log(cur_node.value);
      }

      if (cur_node.right) {
        const right_child = cur_node.right;
        if (!seen.has(right_child.value)) {
          stack.push(right_child);
        }
      }

      // add children if they exist
      if (cur_node.left) {
        const left_child = cur_node.left;
        if (!seen.has(left_child.value)) {
          stack.push(left_child);
        }
      }
    }
  };

  validate_BST = () => {
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      const cur = queue.shift();
      if (cur.left) {
        if (cur.left.value < cur.value) {
          queue.push(cur.left);
        } else {
          return false;
        }
      }
      if (cur.right) {
        if (cur.right.value > cur.value) {
          queue.push(cur.right);
        } else {
          return false;
        }
      }
    }
    return true;
  };
}

t = new BST_BFS();
t.insert(5);
t.insert(3);
t.insert(10);
t.insert(2);
t.insert(4);
t.insert(8);
t.insert(12);

// Do the BFS traversal
console.log('====================================');
console.log('BFS');
console.log('====================================');
t.BFS_traversal();

console.log('====================================');
console.log('BFS Recursive');
console.log('====================================');
console.log(t.BFS_R([t.root], []));

// Do the DFS traversal
console.log('====================================');
console.log('DFS');
console.log('====================================');
t.DFS_traversal();

console.log('====================================');
console.log('BST VALIDATION');
console.log('====================================');
console.log(`${t.validate_BST() ? 'Valid BST' : 'Invalid BST'}`);
