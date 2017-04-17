// stack usage
import * as algo from "./Stack";
// first: number base transform
let MAP = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z'];

// Base can be 2 to Z , represen base from 2 to 36
export function baseTr(num: number, base: number): string {
    let s = new algo.Stack<number>();
    do {
        s.push(num % base);
        num = Math.floor(num / base);
    } while (num > 0);

    let converted = '';
    while (s.length() > 0) {
        converted += MAP[s.pop()];
    }
    converted += '(' + base + ')';
    return converted;
}


// Palindrome check 
export function isPalindrome(str: string): boolean {
    let stack = new algo.Stack<string>();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let idx = 0;
    while (stack.length() > 0) {
        let pop = stack.pop();
        if (str[idx++] != pop) {
            return false;
        }
    }
    return true;
}


//