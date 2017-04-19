import { print } from "./util";

export class Graph<T> {
    private vertices: number;
    private edges: number;
    private adj: any;
    private dfs_marked: any;
    private bfs_marked: any;
    private path: any;
    constructor(n: number) {
        this.vertices = n;
        this.edges = 0;
        this.adj = {};
        this.dfs_marked = {};
        this.bfs_marked = {};
        this.path = {};
    }

    public addEdge(v: T, w: T) {
        if (this.adj[v] == undefined) {
            this.adj[v] = new Array<T>();
        }
        if (this.adj[w] == undefined) {
            this.adj[w] = new Array<T>();
        }
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    // depth first search
    public dfs(v: T) {
        this.dfs_marked[v] = true;
        if (this.adj[v] != undefined) {
            print("[DFS] Visited vertex: ", v);
        }
        let d = this.adj[v];
        for (let w of d) {
            if (!this.dfs_marked[w]) {
                this.dfs(w);
            }
        }
    }
    // broad first search
    public bfs(v: T) {
        let queue = new Array<T>();
        if (this.adj[v] != undefined) {
            queue.push(v);
        }
        do {
            let w = queue.shift();
            print("[BFS] Visited vertex: ", w);
            this.bfs_marked[w] = true;
            let d = this.adj[w];
            for (let v of d) {
                if (!this.bfs_marked[v]) {
                    this.path[v] = w;
                    queue.push(v);
                }
            }
        } while (queue.length > 0);
    }


    // find the shortest path
    public findShortestPath(v: T):T[] {
        let path = [];
        if(!this.bfs_marked[v]) {
            print("no edge to vertex or no vertex in the graph: ",v);
            return undefined;
        }
        for(let e = v; e!=undefined; e=this.path[e]){
            path.push(e);
        }
        return path;
    }


    public showGraph() {
        for (let k in this.adj) {
            let s = k + " -> ";
            let d = this.adj[k];
            for (let j = 0; j < d.length; j++) {
                s += d[j] + ' ';
            }
            print(s);
        }
    }
}