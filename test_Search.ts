import {SeqSearch, BinarySearch} from "./Search";
import {QuickSort3Way} from "./Sort";


let d = [4,8,5,10,3,9,6,11,2];
QuickSort3Way(d);

console.log(BinarySearch(d, 6));

console.log(BinarySearch(d, 1));

console.log(BinarySearch(d, 7));

console.log(BinarySearch(d, 12));
