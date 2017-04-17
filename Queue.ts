/**
 *  Queue can be used in radix sort, priority queue
 */

export class Queue<T> {
    private dataStore: T[];

    constructor() {
        this.dataStore = new Array<T>();
    }

    public enqueue(elem: T) {
        this.dataStore.push(elem);
    }

    public dequeue(): T {
        return this.dataStore.shift();
    }

    public front(): T {
        return this.dataStore[0];
    }

    public back(): T {
        return this.dataStore[this.dataStore.length - 1];
    }

    public empty(): boolean {
        return this.dataStore.length == 0;
    }

    public count(): number {
        return this.dataStore.length;
    }

}