// import { Set } from "./Set";
import {deepcopy, print} from "./util";

let s1 = new Set<number>();

let s = new Set<any>();
s.add("David");
s.add("kevin");
s.add("Tim");
s.add("Join");

s.add("kevin");

print(s.getSet());

print(s.contains("join"));
print(s.contains("kevin"));

print(s.remove("kevin"));
print(s.remove("tim"));

s.add({ a: 1, b: [2, 4] });
s.add({ c: "test", f: () => { print("test func") } });
s.add({ d: 3 });

print(s.size(), s.getSet())

let s1 = new Set<any>();
s1.init([{ a: 1, b: [2, 4] }, { d: 3 }, "test", 342, true]);

print("union op: s U s1")
print(s.union(s1).getSet());

print("intersect op: s & s1");
print(s.intersect(s1).getSet());


print("difference op: s D s1");
print(s.difference(s1).getSet());

let s2 = new Set<any>();
s2.init(["Tim", { d: 3 }]);

print("subset op: s2 S s");
print(s2.subset(s));

