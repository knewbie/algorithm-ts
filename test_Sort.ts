import * as sort from "./Sort";
import { deepcopy, print } from "./util";


function printSort<T>(d: T[], sortFunc: string) {
    let data = deepcopy(d);
    let ret;
    let start = new Date().getTime();
    print(sortFunc," before sort: ", data);
    switch (sortFunc) {
        case "bubble": {
            sort.BubbleSort(data);
            break;
        }
        case "comb": {
            sort.CombSort(data);
            break;
        }
        case "select": {
            sort.SelectSort(data);
            break;
        }
        case "insert": {
            sort.InsertSort(data);
            break;
        }
        case "shell": {
            sort.ShellSort(data);
            break;
        }
        case "quick": {
            ret = sort.QuickSortRecursive(data);
            break;
        }
        case "quick-nr": {
            sort.QuickSort(data);
            break;
        }
        case "quick3way":{
            sort.QuickSort3Way(data);
            break;
        }
        case "quickDualPivot": {
            sort.QuickSortDualPivot(data);
            break;
        }
    }
    print(sortFunc," after  sort: ", !ret?data:ret);
    print(sortFunc," use times: ", new Date().getTime() - start, "ms");
}

let d = [10,8,3,7,2,4,9,5,4,6];

printSort(d, "bubble");
printSort(d, "comb");
printSort(d, "select");
printSort(d, "insert");
printSort(d, "shell");
printSort(d, "quick-recursive");
printSort(d, "quick-nr");
printSort(d, "quick3way");
printSort(d, "quickDualPivot");