module.exports = map;

function map(array, cb, context) {
    var ret = new Array(array.length);
    for (var i = 0; i < array.length; i++) {
        ret[i] = cb.call(context, array[i], i, array);
    }
    return ret;
}