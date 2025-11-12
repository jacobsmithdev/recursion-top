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
    const numItems = left.length + right.length;

    let leftIdx = 0;
    let rightIdx = 0;

    for (let i = 0; i < numItems; i++) {
        const leftItem = left[leftIdx];
        const rightItem = right[rightIdx];

        if (leftIdx >= left.length) {
            // If no more items to compare in left array,
            // sort right array items in
            sortedArr.push(rightItem);
            rightIdx++;
        } else if (rightIdx >= right.length) {
            // If no more items to compare in right array,
            // sort left array items in
            sortedArr.push(leftItem);
            leftIdx++;
        } else if (leftItem < rightItem) {
            sortedArr.push(leftItem);
            leftIdx++;
        } else if (rightItem < leftItem) {
            sortedArr.push(rightItem);
            rightIdx++;
        } else {
            // Items which are not greater/less than each other
            // must be equal, so push either side in and increment
            // the array index for that side
            sortedArr.push(leftItem);
            leftIdx++;
        }
    }

    return sortedArr;
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
