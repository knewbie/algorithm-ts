
import * as algo from "./Stack";
import * as app from "./application";


let prt = console.log;

let s = new algo.Stack<string>();
s.push("David");
s.push("kevin");
s.push("Tom");
prt("len: ", s.length());

prt(s.peek());

let poped = s.pop();
prt("popped elem: ", poped);

s.push("abc");
s.clear();

prt("len : ", s.length());
prt(s.peek());

s.push("asdfa");
prt(s.peek());

interface A {
    a: number;
    b: string;
    c: any;
}
let ss = new algo.Stack<A>();
ss.push({ a: 1, b: "test", c: [1, 2, 4] });
ss.push({ a: 2, b: "test1", c: [2, 3, 4] });
prt(ss.length());

let popped1 = ss.pop();
prt("popped elem: ", popped1);
ss.push({ a: 5, b: "safa", c: [76, 3, 4] })

prt(ss.peek());

ss.clear();
prt(ss.length());

prt(app.baseTr(3, 2));
prt(app.baseTr(17, 16));
prt(app.baseTr(126, 8));
prt(app.baseTr(341, 19));
prt(app.baseTr(255, 16));

prt("\n Palindrome test: ");
prt(app.isPalindrome("helloh"));
prt(app.isPalindrome("racecar"));