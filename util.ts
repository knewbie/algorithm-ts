/*
 *  util.ts 
 */

export let print = console.log;

// compare basic type or complex object
export function compare(x, y): boolean {
    // If both x and y are null or undefined and exactly the same 
    if (x === y) {
        return true;
    }

    // If they are not strictly equal, they both need to be Objects 
    if (!(x instanceof Object) || !(y instanceof Object)) {
        return false;
    }

    //They must have the exact same prototype chain,the closest we can do is
    //test the constructor. 
    if (x.constructor !== y.constructor) {
        return false;
    }

    for (var p in x) {
        //Inherited properties were tested using x.constructor === y.constructor
        if (x.hasOwnProperty(p)) {
            // Allows comparing x[ p ] and y[ p ] when set to undefined 
            if (!y.hasOwnProperty(p)) {
                return false;
            }

            // If they have the same strict value or identity then they are equal 
            if (x[p] === y[p]) {
                continue;
            }

            // Numbers, Strings, Functions, Booleans must be strictly equal 
            if (typeof (x[p]) !== "object") {
                return false;
            }

            // Objects and Arrays must be tested recursively 
            if (!compare(x[p], y[p])) {
                return false;
            }
        }
    }

    for (p in y) {
        // allows x[ p ] to be set to undefined 
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
};


// deep copy object
export function deepcopy(obj: any): any {
    let copy: any;
    if (isArray(obj)) {
        copy = [];
    } else if (isObject(obj)) {
        copy ={};
    } else {
        return obj;
    }
    let keys = Object.keys(obj);
    for(let idx in keys) {
        let k = keys[idx];
        copy[k] = deepcopy(obj[k]);
    }
    return copy;
}

export function isArray(obj: any): boolean {
    return obj && typeof obj === 'object' && Array == obj.constructor;
}

export function isObject(obj: any): boolean {
    return obj && typeof obj === 'object' && Object == obj.constructor;
}
