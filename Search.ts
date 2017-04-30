
//  根据 80-20 原则（是指对某一数据集执行的80%的查找操作都是对其中20%的数据元素进行查找
// 自组织的方式最终会把这20%的数据位置置于数据集的起始位置
export function SeqSearch<T>(data: T[], elem:T):boolean {
    let len = data.length;
    for(let i=0;i<len; i++ ) {
        if(data[i] == elem) {
            if(i>len*0.2 && i>1) {
                let temp = data[i-1];
                data[i-1] = data[i];
                data[i] = temp;
            }
            return true;
        }
    }
    return false;
}

export function BinarySearch<T>(data: T[], elem:T):number {
    let start = 0;
    let end = data.length - 1;
    let mid = 0;

    while(start <= end) {
        mid = Math.floor((start+end)/2);
        if(elem > data[mid]) {
            start = mid + 1;
        } else if(elem < data[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}