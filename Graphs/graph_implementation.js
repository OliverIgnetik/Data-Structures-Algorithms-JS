// edge list
const edge_list = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// adjacent list
// index corresponds to the actual value
// ie. 0 <-> 2
// ie. 1 <-> 2 and 1 <-> 3
const adjacent_list = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent matrix
const adjacent_matrix = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

class Graph {
  constructor() {
    this.num_nodes = 0;
    this.adjacent_list = {};
  }
  addVertex(node) {
    if (!this.adjacent_list[node]) {
      this.adjacent_list[node] = [];
      this.num_nodes++;
      return this.adjacent_list;
    }
  }
  addEdge(node1, node2) {
    if (!this.adjacent_list[node1]) {
      this.adjacent_list[node1] = [];
      this.num_nodes++;
    }
    if (!this.adjacent_list[node2]) {
      this.adjacent_list[node2] = [];
      this.num_nodes++;
    }
    if (!this.adjacent_list[node1].includes(node2)) {
      this.adjacent_list[node1].push(node2);
    }
    if (!this.adjacent_list[node2].includes(node1)) {
      this.adjacent_list[node2].push(node1);
    }
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacent_list);
    for (let node of allNodes) {
      let nodeConnections = this.adjacent_list[node];
      let connections = '';
      for (let vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + ' --> ' + connections);
    }
  }
}

if (require.main === module) {
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

  myGraph.showConnections();

  console.log(Object.keys(myGraph.adjacent_list));
}

exports.Graph = Graph;
