import * as algo from "./Queue";

let prt = console.log;

let queue = new algo.Queue<string>();

queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

prt(queue.front(), queue.back());

queue.dequeue();
prt(queue.front());