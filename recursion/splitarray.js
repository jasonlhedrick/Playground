function splitArray(arr) {
    if (arr.length === 1) return arr;
    console.log(arr);
    const split = Math.floor(arr.length / 2);
    const left = [];
    const right = [];
    for(let i = 0; i < split; i++) {
        left.push(arr[i]);
    }
    for (let i = split; i < arr.length; i++) {
        right.push(arr[i]);
    }
    console.log(`Left: ${left}, Right: ${right}`);
    return splitArray(left), splitArray(right);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();

splitArray(arr);