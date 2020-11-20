const graphImplementation = require('../Graphs/graph_implementation');

class Graph extends graphImplementation.Graph {
  constructor() {
    super();
  }

  bfs_traversal = () => {
    const queue = [];
    const seen = new Set();
    const levels_map = new Map();

    // Start from 0
    const start = Object.keys(this.adjacent_list)[0];
    queue.push(start);
    levels_map.set(start, 0);

    while (queue.length > 0) {
      const cur_node = queue.shift();
      if (!seen.has(cur_node)) {
        // process the node
        seen.add(cur_node);
        console.log(`Value : ${cur_node}, Level : ${levels_map.get(cur_node)}`);
      }

      // add its children
      const neighbours = this.adjacent_list[cur_node];
      for (let i = 0; i < neighbours.length; i++) {
        if (!seen.has(neighbours[i])) {
          queue.push(neighbours[i]);
          levels_map.set(neighbours[i], levels_map.get(cur_node) + 1);
        }
      }
    }
  };

  dfs_traversal = (value) => {
    const stack = [];
    const seen = new Set();
    const output = [];

    // add the root to the stack and start from 0
    const start = Object.keys(this.adjacent_list)[0];
    stack.push(start);

    while (stack.length > 0) {
      const cur_node = stack.pop();
      if (!seen.has(cur_node)) {
        // process the node
        seen.add(cur_node);
        output.push(cur_node);
        if (cur_node === value) {
          console.log(`Path exists between ${start} and ${value}`);
        }
      }

      // add its children
      const neighbours = this.adjacent_list[cur_node];
      for (let i = 0; i < neighbours.length; i++) {
        if (!seen.has(neighbours[i])) {
          stack.push(neighbours[i]);
        }
      }
    }
    return output;
  };
}

const myGraph = new Graph();

myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

console.log('====================================');
console.log('BFS TRAVERSAL');
console.log('====================================');
myGraph.bfs_traversal();

console.log('====================================');
console.log('DFS TRAVERSAL');
console.log('====================================');
console.log(myGraph.dfs_traversal('4'));
