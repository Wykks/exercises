module.exports = curry

function curry(fn) {
    function sub(array) {
        if (array.length >= fn.length)
            return fn.apply(this, array);
        return function() {
            return sub(array.concat([].slice.call(arguments)));
        }
    }
    return sub([]);
}