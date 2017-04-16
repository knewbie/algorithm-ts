
export class Dict<T>{
        private data: any;
        private num:number;
        
        constructor() {
            this.data = {};
            this.num = 0;
        }

        public add(key: string, val: T) {
            this.data[key] = val;
            this.num++;
        }

        public find(key: string): T {
            return this.data[key];
        }

        public remove(key: string) {
            delete this.data[key];
            this.num--;
        }

        public clear() {
            for (let k in this.data) {
                delete this.data[k];
            }
            this.num = 0;
        }

        public count(): number {
            return Object.keys(this.data).length;
        }

        public display() {
            for(let k in this.data) {
                console.log(k," => ", this.data[k]);
            }
        }
    }