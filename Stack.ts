
export class Stack<T> {
    private dataStore: T[];
    private top: number;

    constructor() {
        this.dataStore = new Array<T>();
        this.top = 0;
    }

    public push(elem: T) {
        this.dataStore[this.top++] = elem;
    }

    public pop(): T {
        return this.dataStore[--this.top];
    }

    public peek(): T {
        return this.dataStore[this.top - 1];
    }

    public length(): number {
        return this.top;
    }

    public clear() {
        this.top = 0;
    }
}