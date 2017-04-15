
import * as algo from "./List";

let prt = console.log;

let list = new algo.List<string>();

for(let i=0; i < 8;i++) {
    list.append("item "+ i);
}

list.front();
prt(list.getElement());

list.next();
prt(list.getElement());

list.next();
list.next();
list.prev();
prt(list.getElement());

list.insert("insert item", "item 5");

for(list.front(); list.curPos() < list.length(); list.next()) {
    prt(list.getElement());
}


list.moveTo(6);
prt(list.getElement());

prt(list.find("item 4"));

prt(list.contains("insert item"));

prt(list.remove("item 7"));

prt(list.length());

for(list.front(); list.curPos() < list.length(); list.next()) {
    prt(list.getElement());
}

list.clear();
prt(list.length());


interface A {
    a: number[];
    b: number;
}

let alist = new algo.List<A>();

for(let i=0; i<8;i++) {
    alist.append({a:[i,i+2],b:i+1});
}

prt(alist.contains({a:[1,3],b:2}));
prt(alist.contains({a:[2,3],b:1}));

alist.insert({a:[10,11],b:20},{a:[1,3],b:2});

for(alist.front(); alist.curPos() < alist.length(); alist.next()) {
    prt(alist.getElement());
}

alist.remove({a:[3,5],b:4});

prt(alist.length());