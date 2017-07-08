function merge(left, right) {
    var newArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            newArr.push(left.shift());
        } else {
            newArr.push(right.shift());
        }
    }
    return newArr.concat(left, right);
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var left = arr.slice(0, pivotIndex);
    var right = arr.slice(pivotIndex);

    return merge(mergeSort(left), mergeSort(right));
}
var arr = [8, 9, 45, 32, 6, 1, 4, 65, 78];
console.log(mergeSort(arr));
