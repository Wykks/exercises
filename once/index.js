module.exports = once;

function once(fn) {
    var value;
    var called = false;
    
    return function() {
        if (!called) {
            value = fn.apply(this, arguments);
            called = true;
        }
        return value;
    }
}