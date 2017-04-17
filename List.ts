/*
 * List class implement
*/

import { compare } from "./util";

export class List<T> {
    private listSize: number;
    private pos: number;
    private dataStore: T[];

    constructor() {
        this.dataStore = new Array<T>();
        this.listSize = 0;
        this.pos = 0;
    }

    // add one element
    public append(elem: T) {
        this.dataStore[this.listSize++] = elem;
    }

    // find an element
    // return the elem's index in the list
    public find(elem: T): number {
        for (let i = 0; i < this.listSize; i++) {
            if (compare(this.dataStore[i], elem)) {
                return i;
            }
        }
        return -1;
    }

    // remove an element
    public remove(elem: T): boolean {
        let foundAt = this.find(elem);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    // insert one element after the pos in the list
    public insert(elem: T, after: T): boolean {
        let insPos = this.find(after);
        if (insPos > -1) {
            this.dataStore.splice(insPos + 1, 0, elem);
            this.listSize++;
            return true;
        }
        return false;
    }

    // clear the list
    public clear() {
        delete this.dataStore;
        this.dataStore = new Array<T>();
        this.listSize = this.pos = 0;
    }

    // check if list contain element
    public contains(elem: T): boolean {
        for (let i = 0; i < this.listSize; i++) {
            if (compare(this.dataStore[i], elem)) {
                return true;
            }
        }
        return false;
    }

    public front() {
        this.pos = 0;
    }

    public end() {
        this.pos = this.listSize - 1;
    }

    public prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }

    public next() {
        if (this.pos < this.listSize) {
            this.pos++;
        }
    }

    public curPos(): number {
        return this.pos;
    }

    public moveTo(pos: number) {
        if (pos < 0) {
            this.pos = 0;
        } else if (pos > this.listSize - 1) {
            this.pos = this.listSize - 1;
        } else {
            this.pos = pos;
        }
    }

    public getElement(): T {
        return this.dataStore[this.pos];
    }

    // length
    public length(): number {
        return this.listSize;
    }

    public toString() {
        return this.dataStore;
    }
}
