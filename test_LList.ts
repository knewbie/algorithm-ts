
import {List,DLList,CLList,Node} from "./LinkedList";

let prt = console.log;

interface N {
    no?:number;
    str?:string;
}

let a:N = {no:1, str:"a"};
let b:N = {no:2, str:"b"};
let c:N = {no:3, str:"c"};
let d:N = {no:4, str:"d"};


prt("------ SLList Test -----");
let sl = new List<N>();

sl.insertTail(a);
sl.insert(c,a);
sl.display();

prt(sl.find(b));
prt(sl.find(a));
sl.insertTail(b);
sl.display();

sl.insert(d);
sl.display();

prt(" advance");
let node = sl.find(a);
prt(sl.advance(2,node));
prt(sl.advance(3));
prt(sl.count());

prt("---- remove ")
sl.remove(b);
sl.display();

sl.remove(a);
sl.display();
prt(sl.count());

prt("------ DLList Test -----");

let dl = new DLList<N>();
dl.insert(a)
dl.insert(b);
dl.insert(c,a);
dl.dispReverse(); // b->c->a
dl.display(); // a -> c -> b

prt("--- find check")
prt(dl.find(c));
prt(dl.findLastNode());

prt("-- insert tail");
dl.insertTail(d);
dl.display(); // a c b d

prt("--- back");
let nd = dl.find(d);
// prt(nd);
prt(dl.back(2,nd));
prt(dl.back(4));

prt("--- remove");
dl.remove(c);
dl.dispReverse();

dl.insert(c,b);
dl.display();

prt('--- remove the first and last node');
dl.remove(d);
dl.display();
dl.remove(a);
dl.display();

prt("------ CLList Test -----");

let cl = new CLList<N>();
cl.insert(a)
cl.insert(b);
cl.insert(c,a);
cl.display(); // a -> c -> b

prt("--- find check")
prt(cl.find(c));
prt(cl.findLastNode());

prt("-- insert tail");
cl.insertTail(d);
cl.display(); // a c b d

prt("--- remove");
cl.remove(c);
cl.display();

cl.insert(c,b);
cl.display();

prt('--- remove the first and last node');
cl.remove(d);
cl.display();
cl.remove(a);
cl.display();
