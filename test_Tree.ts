import { BST, TreeNode} from "./Tree";
import {print} from "./util";


let arr = [23,45,16,37,3,99,22, 26,40,38,42];
let arr1 = ['b', 'a','g','2','h','z','y','7','n'];

let t = new BST<number>();
t.initWithArray(arr);

let t1 = new BST<string>();
t1.initWithArray(arr1);
print(t1.inOrder(t1.root));


print("Inorder traversal: ");
print(t.inOrder(t.root));

print("Preorder traversal: ");
print(t.preOrder(t.root));

print("Postorder traversal: ");
print(t.postOrder(t.root));

print(t.min(), t.max());

print("found: ",t.find(45));
print("found: ",t.find(100));

t.remove(37);
print(t.inOrder(t.root));

print(t.count(), t.edges());


