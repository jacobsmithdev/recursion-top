function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const center = Math.floor(arr.length / 2);

    let left = arr.slice(0, center);
    left = mergeSort(left);

    let right = arr.slice(center);
    right = mergeSort(right);

    let sortedArr = mergeHalves(left, right);

    return sortedArr;
}

function mergeHalves(left, right) {
    const sortedArr = [];

    while (right.length > 0 || left.length > 0) {
        if (right[0] === undefined) {
            const leftItem = left.shift();
            sortedArr.push(leftItem);
        } else if (left[0] === undefined) {
            const rightItem = right.shift();
            sortedArr.push(rightItem);
        } else if (left[0] < right[0]) {
            const leftItem = left.shift();
            sortedArr.push(leftItem);
        } else if (right[0] <= left[0]) {
            const rightItem = right.shift();
            sortedArr.push(rightItem);
        }
    }

    return sortedArr;
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
