Array.prototype.quickSort = function () {
    //快速排序
    if (this.length <= 1) {
        return this;
    }
    var left = [],
        right = [];
    //取中间值索引
    var pivotIndex = Math.floor(this.length / 2),
        //取中间值
        pivot = this.splice(pivot, 1)[0];

    for (var i = 0; i < this.length; i++) {
        if (this[i] < pivot) {
            left.push(this[i]);
        } else {
            right.push(this[i]);
        }
    }
    return left.quickSort().concat(pivot, right.quickSort());
}
console.log(arr);
console.log(arr.quickSort());