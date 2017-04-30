
import { Stack } from "./Stack";

function swap<T>(d: T[], index1: number, index2: number) {
    let temp = d[index1];
    d[index1] = d[index2];
    d[index2] = temp;
}

export function BubbleSort<T>(data: T[]) {
    let len = data.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (data[j] > data[j + 1]) {
                swap(data, j, j + 1);
            }
        }
    }
}

export function CombSort<T>(data: T[]) {
    let n = data.length;
    let j = n,
        s = 1.3,
        flag = false;
    while (j > 1 || flag) {
        let i = 0;
        j = Math.max(Math.floor(j / s), 1);
        flag = false;
        while (i + j < n) {
            if (data[i] > data[i + j]) {
                swap(data, i, i + j);
                flag = true;
            }
            i++;
        }
    }
}

export function SelectSort<T>(data: T[]) {
    let n = data.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (data[minIdx] > data[j]) {
                minIdx = j;
            }
        }
        if (minIdx != i) {
            swap(data, i, minIdx);
        }
    }
}

export function InsertSort<T>(data: T[]) {
    let temp, inner;
    let n = data.length;
    for (let i = 1; i < n; i++) {
        temp = data[i];
        inner = i;
        while (inner > 0 && data[inner - 1] >= temp) {
            data[inner] = data[inner - 1];
            inner--;
        }
        data[inner] = temp;
    }
}

export function ShellSort<T>(data: T[]) {
    let n = data.length;
    let h = 1;
    while (h < n / 3) {
        h = 3 * h - 1;
    }
    while (h >= 1) {
        for (let i = h; i < n; i++) {
            for (let j = i; j >= h && data[j] < data[j - h]; j -= h) {
                swap(data, j, j - h);
            }
        }
        h = Math.ceil((h - 1) / 3);
    }
}

export function QuickSortRecursive<T>(data: T[]): T[] {
    return qsort(data);
}
function qsort<T>(d: T[]): T[] {
    if (d.length == 0) {
        return [];
    }
    let left = [], right = [];
    let pivot = d[0];
    for (let i = 1; i < d.length; i++) {
        if (d[i] < pivot) {
            left.push(d[i]);
        } else {
            right.push(d[i]);
        }
    }
    return qsort(left).concat(pivot, qsort(right));
}

// 严尉敏数据结构实现
function partion_v1<T>(d: T[], low: number, high: number): number {
    let pivotKey = d[low];
    while (low < high) {
        while (high > low && d[high] >= pivotKey) {
            high--;
        }
        d[low] = d[high];
        while (low < high && d[low] <= pivotKey) {
            low++;
        }
        d[high] = d[low];
    }
    // now low == high
    d[low] = pivotKey;
    return low;
}

// 算法导论实现
function partion_v2<T>(d: T[], low: number, high: number): number {
    let pivotKey = d[high];
    let p = low - 1;
    for (let j = low; j < high; j++) {
        if (d[j] <= pivotKey) {
            p++;
            if (p != j) {
                swap(d, p, j);
            }
        }
    }
    p += 1;
    swap(d, p, high);
    return p;
}

export function QuickSort<T>(data: T[]) {
    let s = new Stack<number>();
    let low = 0, high = data.length - 1;
    if (low < high) {
        let p = partion_v2(data, low, high);
        if (p - 1 > low) {
            s.push(low);
            s.push(p - 1);
        }
        if (p + 1 < high) {
            s.push(p + 1);
            s.push(high);
        }
        while (!s.empty()) {
            let r = s.pop();
            let l = s.pop();
            p = partion_v2(data, l, r);
            if (p - 1 > l) {
                s.push(l);
                s.push(p - 1);
            }
            if (p + 1 < r) {
                s.push(p + 1);
                s.push(r);
            }
        }
    }
}

// 3 way quick sort
function sort3way<T>(d: T[], low: number, high: number) {
    if (high <= low) {
        return;
    }
    let lt = low;
    let gt = high;
    let i = low + 1;
    let pivot = d[low];
    while (i <= gt) {
        if (d[i] < pivot) {
            swap(d, i++, lt++);
        } else if (pivot < d[i]) {
            swap(d, i, gt--);
        } else {
            i++;
        }
    }

    sort3way(d, low, lt - 1);
    sort3way(d, gt + 1, high);
}

export function QuickSort3Way<T>(data: T[]) {
    sort3way(data, 0, data.length - 1);
}

// dual pivot
function sortDualPiovt<T>(d: T[], low: number, high: number) {
    if (high <= low) {
        return;
    }

    let pivot1 = d[low];
    let pivot2 = d[high];
    if (pivot1 > pivot2) {
        swap(d, low, high);
    } else if (pivot1 == pivot2) {
        while (pivot1 == pivot2 && low < high) {
            low++;
            pivot1 = d[low];
        }
    }

    let i = low + 1;
    let lt = low + 1;
    let gt = high - 1;
    while (i <= gt) {
        if (d[i] < pivot1) {
            swap(d, i++, lt++);
        } else if (d[i] > pivot2) {
            swap(d, i, gt--);
        } else {
            i++;
        }
    }
    swap(d, low, --lt);
    swap(d, high, ++gt);

    sortDualPiovt(d, low, lt - 1);
    sortDualPiovt(d, lt + 1, gt - 1);
    sortDualPiovt(d, gt + 1, high);
}

export function QuickSortDualPivot<T>(data: T[]) {
    sortDualPiovt(data, 0, data.length - 1);
}