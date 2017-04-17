import { Dict } from "./Dict";

let d = new Dict();
d.add("bool", true);
d.add("string", "test");
d.add("number", 3);

d.display();

console.log(d.count());

d.remove("bool");
d.display();

d.clear();