function splitArray(arr) {
    //console.log(arr);
    if (arr.length === 1) return arr;
    const split = Math.floor(arr.length / 2);
    const left = arr.splice(0, split);
    
    return [...splitArray(left), ...splitArray(arr)];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();

console.log(splitArray(arr));

function mergeSort(arr) {
    const half = arr.length / 2;
    
    if (arr.length < 2) return arr;
    

    const left = arr.splice(0, half);
    return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right) {
    let retArr = [];

    while(left.length && right.length) {
        if (left[0] < right[0]) {
            retArr.push(left.shift());
        }
        else {
            retArr.push(right.shift());
        }
    }
    console.log([...retArr, ...left, ...right]);
    return [...retArr, ...left, ...right];
}

console.log(mergeSort([5, 10, 12, 6, 7, 3, 2, 1]));