
import {compare} from "./util";

// Be shared with all list data struct
export class Node<T> {
    public data:T;
    public next:any;
    public prev:any;
    
    constructor(d:T) {
        this.data = d;
        this.next = null;
        this.prev = null;
    }
}

// single link list
export class List<T> {
    public head: Node<T>;
    public listSize: number;
    constructor() {
        this.head = new Node(null); // empty head
        this.listSize = 0;
    }

    // find one Node with data elem, if not found ,return null
    public find(elem:T):Node<T> {
        if(elem == null) {
            return null;
        }
        let node = this.head.next;
        while(node) {
            if(compare(node.data, elem)){
                return node;
            }
            node = node.next;
        }
        return null;
     }

    // insert a new element after elem, 
    // if elem ommits, the new element will insert to the tail by default
    public insert(newElem:T, elem?:T) {
        if(elem == undefined) {
            this.insertTail(newElem);
            return;
        }
        let newNode = new Node<T>(newElem);
        let findNode = this.find(elem);
        if(findNode == null) { // insert to tail
            if(this.head.next == null) { // this first node
                this.head.next = newNode;
            } else {
                let lastNode = this.findLastNode();
                lastNode.next = newNode;
            }
        } else { // insert after the found node
            newNode.next = findNode.next;
            findNode.next = newNode;
        }
        this.listSize++;
    }

    // find the last node
    public findLastNode(): Node<T> {
        let node = this.head.next;
        if(node == null) {
            return this.head;
        } else {
            let pre = null;
            while(node) {
                pre = node;
                node = node.next;
            }
            return pre;
        }
    }

    // insert elem to the list tail
    public insertTail(elem:T) {
        let node = new Node(elem);
        let lastNode = this.findLastNode();
        lastNode.next = node;
        this.listSize++;
    }

    // remove an element , if success ,return true,eles false
    public remove(elem:T):boolean {
        let pre = this.head;
        let cur = pre.next;
        while(cur != null) {
            if(compare(cur.data, elem)) { // find the node
                pre.next = cur.next;
                cur = null; // delete the node
                this.listSize--;
                return true;
            }
            pre = cur;
            cur = cur.next;
        }
        return false;
    }

    // advance n node from current node
    // if curr is null, the from the head advance n node
    // else from the current node
    // if n great the distance between currnode and the tail node,
    // then return the tail node ,else return Nth node after the curr.
    public advance(n:number, curr?:Node<T>):Node<T> {
        if(this.listSize == 0) {
            return null;
        }
        let cnt = 0;
        curr = this.head.next;
        while(curr) {
            cnt++;
            if(curr.next == null) {
                return curr;
            }
            curr = curr.next;
            if(cnt == n) {
                return curr;
            }
        }
        return null;
    }

    public count():number {
        return this.listSize;
    }
    // travse the list
    public display() {
        let node = this.head.next;
        console.log("display the list: ")
        while(node) {
            console.log(node.data);
            node = node.next;
        }
    }
}

// double linked list
export class DLList<T> {
    private head: Node<T>;
    private listSize:number;

    constructor() {
        this.head = new Node<T>(null);
        this.listSize = 0;
    }

     public find(elem:T):Node<T> {
        if(elem == null) {
            return null;
        }
        let node = this.head.next;
        while(node) {
            if(compare(node.data, elem)){
                return node;
            }
            node = node.next;
        }
        return null;
     }

    public insert(newElem:T, elem?:T) {
        if(elem == undefined) {
            this.insertTail(newElem);
            return;
        }
        let newNode = new Node<T>(newElem);
        let findNode = this.find(elem);
        if(findNode == null) { // insert to tail
            if(this.head.next == null) { // this first node
                this.head.next = newNode;
                newNode.prev = this.head;
            } else {
                let lastNode = this.findLastNode();
                lastNode.next = newNode;
                newNode.prev = lastNode;
            }
        } else { // insert after the found node
            if(findNode.next == null) {
                findNode.next = newNode;
                newNode.prev = findNode;
            } else {
                newNode.next = findNode.next;
                findNode.next.prev = newNode;
                findNode.next = newNode;
                newNode.prev = findNode;
            }
        }
        this.listSize++;
    }

    public findLastNode(): Node<T> {
        let node = this.head.next;
        if(node == null) {
            return this.head;
        } else {
            let pre = null;
            while(node) {
                pre = node;
                node = node.next;
            }
            return pre;
        }
    }

    public insertTail(elem:T) {
        let node = new Node(elem);
        let lastNode = this.findLastNode();
        lastNode.next = node;
        node.prev = lastNode;
        this.listSize++;
    }

    public remove(elem:T):boolean {
        let pre = this.head;
        let cur = pre.next;
        while(cur != null) {
            if(compare(cur.data, elem)) { // find the node
                if(cur.next == null) { // cur is the last node
                    pre.next = null;
                } else {
                    pre.next = cur.next;
                    cur.next.prev = pre;
                }
                cur = null; // delete the node
                this.listSize--;
                return true;
            }
            pre = cur;
            cur = cur.next;
        }
        return false;
    }

    // back n node from current node
    // if curr is null, then return the head node
    // else from the current node back to head
    // if n great the distance between currnode and the head node,
    // then return the head node ,else return Nth node before the curr.
    public back(n:number, curr?:Node<T>):Node<T> {
        if(this.listSize == 0 || curr == undefined) {
            return this.head;
        }

        let cnt = 0;
        while(curr) {
            cnt++;
            if(curr.prev == null) {
                return curr;
            }
            curr = curr.prev;
            if(cnt == n) {
                return curr;
            }
        }
        return null;
    }

    public count():number {
        return this.listSize;
    }

    public display() {
        console.log("display the list: ");
        let node = this.head.next;
        while(node) {
            console.log(node.data);
            node = node.next;
        }
    }

    public dispReverse() {
        console.log("reverse display the list: ");
        let last = this.findLastNode();
        while(last.prev != null) {
            console.log(last.data);
            last = last.prev;
        }
    }

}

// circle linked list
export class CLList<T> {
    private head: Node<T>;
    private listSize: number;

    constructor() {
        this.head = new Node(null); // empty head
        this.head.next = this.head;
        this.listSize = 0;
    }

    public find(elem:T):Node<T> {
        if(elem == null) {
            return null;
        }
        let node = this.head.next;
        while(node != this.head) {
            if(compare(node.data, elem)){
                return node;
            }
            node = node.next;
        }
        return null;
     }

    public insert(newElem:T, elem?:T) {
        if(elem == undefined) {
            this.insertTail(newElem);
            return;
        }
        let newNode = new Node<T>(newElem);
        let findNode = this.find(elem);
        if(findNode == null) { // insert to tail
            if(this.head.next == this.head) { // this first node
                this.head.next = newNode;
                
            } else {
                let lastNode = this.findLastNode();
                lastNode.next = newNode;
            }
            newNode.next = this.head;
        } else { // insert after the found node
            newNode.next = findNode.next;
            findNode.next = newNode;
        }
        this.listSize++;
    }

    public findLastNode(): Node<T> {
        let pre = this.head;
        let node = this.head.next;
        while(node != this.head) {
            pre = node;
            node = node.next;
        }
        return pre;
    }

    public insertTail(elem:T) {
        let node = new Node(elem);
        let lastNode = this.findLastNode();
        node.next = this.head;
        lastNode.next = node;
        this.listSize++;
    }

    public remove(elem:T):boolean {
        let pre = this.head;
        let cur = pre.next;
        while(cur != this.head) {
            if(compare(cur.data, elem)) { // find the node
                pre.next = cur.next;
                cur = null; // delete the node
                this.listSize--;
                return true;
            }
            pre = cur;
            cur = cur.next;
        }
        return false;
    }

    public display() {
        console.log("display the circle list: ");

        let node = this.head.next;
        while(node != this.head) {
            console.log(node.data);
            node = node.next;
        }
    }
}
