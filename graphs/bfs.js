let graph;

const numOfNodes = 7;
let visited = new Array(numOfNodes);

const bfs = (node) => {
  const queue = [];

  for (let i = 0; i < visited.length; i++) {
    visited[i] = false;
  }

  visited[node] = true;
  queue.push(node); // start with root

  while (queue.length) {
    let currNode = queue.shift(); // process a node

    console.log(`visiting ${currNode}`);
    for (let j = 0; j < graph[currNode].length; j++) {
      if (graph[currNode][j] === 1 && visited[j] === false) {
        // if there's a connection, visit it and record it
        visited[j] = true;
        queue.push(j);
      }
    }
  }
};

// helper methods

const createGraph = (numOfNodes) => {
  graph = new Array(numOfNodes);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = new Array(numOfNodes);
  }

  // use adjacency matrix for simlicity
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      graph[i][j] = 0;
    }
  }
};

const printGraph = () => {
  let row = " ";
  let i, j;
  for (i = 0; i < graph.length; i++) {
    for (j = 0; j < graph[i].length; j++) {
      row += graph[i][j];
      row += " ";

      if (j == graph.length - 1) {
        console.log(row);
        row = " ";
      }
    }
  }
};

const addEdge = (a, b) => {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (i === a && j === b) {
        graph[i][j] = 1;
        graph[j][i] = 1;
        break;
      }
    }
  }
};

createGraph(numOfNodes);
// edges = [1, 2], [1, 5], [2, 3], [2, 5], [3, 4], [4, 5], [4, 6]
addEdge(1, 2);
addEdge(1, 5);
addEdge(2, 3);
addEdge(2, 5);
addEdge(3, 4);
addEdge(4, 5);
addEdge(4, 6);
//printGraph();

bfs(1);