
export class TreeNode<T> {
    public data: T;
    public left;
    public right;

    constructor(d: T) {
        this.data = d;
        this.left = this.right = null;
    }
}

export class BST<T> {
    public root: TreeNode<T>;

    constructor() {
        this.root = null;
    }

    public insert(d: T) {
        let node = new TreeNode(d);
        if (this.root == null) {
            this.root = node;
            return;
        }

        let cur = this.root;
        let parent;
        while (true) {
            parent = cur;
            if (d < cur.data) {
                cur = cur.left;
                if (cur == null) {
                    parent.left = node;
                    break;
                }
            } else {
                cur = cur.right;
                if (cur == null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }

    public remove(d:T) {
        this.root = this.removeNode(this.root, d);
    }

    public removeNode(node:TreeNode<T>, d:T): TreeNode<T> {
        if(node == null) {
            return null;
        }
        if(d == node.data) {
            if(node.left == null && node.right == null) {
                return null;
            } 
            if(node.left == null) {
                return node.right;
            }
            if(node.right == null) {
                return node.left;
            }

            let tempNode = this.getSmallestNode(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if( d < node.data) {
            node.left = this.removeNode(node.left, d);
            return node;
        } else {
            node.right = this.removeNode(node.right, d);
            return node;
        }
    }

    public getSmallestNode(node:TreeNode<T>): TreeNode<T> {
        let cur = node;
        while(!(cur.left == null)) {
            cur = cur.left;
        }
        return cur;
    }

    // count node number
    public count():number {
        return this.countNode(this.root);
    }
    private countNode(node: TreeNode<T>):number {
        let cur = node;
        if(cur != null) {
           return 1 + this.countNode(cur.left) + this.countNode(cur.right);
        }
        return 0;
    }

    // count edges
    public edges():number {
        return this.countNode(this.root) - 1;
    }


    // get minum data
    public min(): T {
        let cur = this.root;
        while (!(cur.left == null)) {
            cur = cur.left;
        }

        return cur.data;
    }

    // get max data
    public max(): T {
        let cur = this.root;
        while (!(cur.right == null)) {
            cur = cur.right;
        }

        return cur.data;
    }

    // find the node
    public find(d: T): TreeNode<T> {
        let cur = this.root;
        while (cur != null) {
            if (cur.data == d) {
                return cur;
            } else if (d < cur.data) {
                cur = cur.left;
            } else {
                cur = cur.right;
            }
        }
        return null;
    }

    // in order traversal, the result is ascending sort
    public inOrder(node: TreeNode<T>): T[] {
        let res = [];
        if (!(node == null)) {
            res = res.concat(this.inOrder(node.left));
            res.push(node.data);
            res = res.concat(this.inOrder(node.right));
        }
        return res;
    }

    // pre order travsersal
    public preOrder(node: TreeNode<T>): T[] {
        let res = [];
        if (!(node == null)) {
            res.push(node.data);
            res = res.concat(this.preOrder(node.left));
            res = res.concat(this.preOrder(node.right));
        }
        return res;
    }

    // post order travsersal
    public postOrder(node: TreeNode<T>): T[] {
        let res = [];
        if (!(node == null)) {
            res = res.concat(this.postOrder(node.left));
            res = res.concat(this.postOrder(node.right));
            res.push(node.data);
        }
        return res;
    }
}

