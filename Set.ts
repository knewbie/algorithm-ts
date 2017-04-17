import { compare, deepcopy } from "./util";

let print = console.log;

export class Set<T> {
    private dataStore: T[];

    constructor() {
        this.dataStore = new Array<T>();
    }

    public init(data: T[]) {
        for (let e of data) {
            this.add(deepcopy(e));
        }
    }

    public contains(elem: T): boolean {
        for (let e of this.dataStore) {
            if (compare(e, elem)) {
                return true;
            }
        }
        return false;
    }

    private findIndex(elem: T): number {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (compare(this.dataStore[i], elem)) {
                return i;
            }
        }
        return -1;
    }

    public size(): number {
        return this.dataStore.length;
    }

    public add(elem: T): boolean {
        if (this.contains(elem)) {
            print("element exist: ", elem);
            return false;
        }
        this.dataStore.push(elem);
        return true;
    }

    public remove(elem: T): boolean {
        let index = this.findIndex(elem);
        if (index == -1) {
            print("Can't find the element in set: ", elem);
            return false;
        } else {
            this.dataStore.splice(index, 1);
            return true;
        }
    }

    public union(s: Set<T>): Set<T> {
        let tempSet = new Set<T>();
        for (let e of this.dataStore) {
            tempSet.add(deepcopy(e));
        }
        let d = s.getSet();
        for (let e of d) {
            tempSet.add(deepcopy(e));
        }
        return tempSet;
    }

    public intersect(s: Set<T>): Set<T> {
        let tempSet = new Set<T>();
        for (let e of this.dataStore) {
            if (s.contains(e)) {
                tempSet.add(deepcopy(e));
            }
        }
        return tempSet;
    }

    public difference(s: Set<T>): Set<T> {
        let tempSet = new Set<T>();
        for(let e of this.dataStore) {
            if(!s.contains(e)) {
                tempSet.add(deepcopy(e));
            }
        }

        return tempSet;
    }

    public subset(s: Set<T>): boolean {
        if (this.size() > s.size()) {
            return false;
        }

        for (let e of this.dataStore) {
            if (!s.contains(e)) {
                return false;
            }
        }
        return true;
    }

    public getSet(): T[] {
        return this.dataStore;
    }

}