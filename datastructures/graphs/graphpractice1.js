let graph = [];
graph[0] = null;
graph[1] = 1;
graph[2] = 2;
graph[3] = 3;

let n = graph.length;
let visited = [];

function dfs(at) {
    if (visited[at]) return;
    visited[at] = true;
    console.log(visited);
    let left = graph[at+2];
    console.log(left);
    for (let i = 0; i < n; i++) {
        dfs(i);
    }
}

dfs(0);
