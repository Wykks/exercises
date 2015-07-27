module.exports = sort;

function sort(arr) {
    var len;
    for (var i = 0; len = arr.length, i < len - 1; ++i) {
        for (var j = i + 1; j < len; ++j) {
            if (arr[i] > arr[j]) {
                var tmp = arr[i];
                arr[i] = arr[j]
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
