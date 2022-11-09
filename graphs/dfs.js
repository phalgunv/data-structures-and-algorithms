let graph;

const numOfNodes = 7;
let visited = new Array(numOfNodes);

const dfs = (node) => {
  const stack = [];
  stack.push(node);

  while (stack.length) {
    node = stack.pop();

    if (!visited[node]) {
      visited[node] = true;

      console.log(`visiting ${node}`);
      for (let j = 0; j < graph[node].length; j++) {
        if (graph[node][j] === 1) {
          stack.push(j);
        }
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
printGraph();

dfs(1);