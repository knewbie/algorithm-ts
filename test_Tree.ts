import { BST, TreeNode} from "./Tree";
import {print} from "./util";



let t = new BST<number>();

let arr = [23,45,16,37,3,99,22, 26,40,38,42];
for(let d of arr) {
    t.insert(d);
}

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
