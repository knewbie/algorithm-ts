
import { Graph } from "./Graph";
import { print } from "./util";



let g = new Graph<number>(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
// g.addEdge(3,4);
g.showGraph();

// g.dfs(0);

g.bfs(0);
// g.dfs(1);

print("------")
let p = g.findShortestPath(3);
if (p.length > 0) {
    let s = '';
    while (p.length > 0) {
        if (p.length > 1) {
            s += p.pop() + " -> ";
        } else {
            s += p.pop();
        }
    }
    print("PATH: ",s);
}