module.exports = memoize;

function memoize(fn) {
    var result = {};
    
    return function() {
        var key = JSON.stringify(arguments);
        if (!result[key])
            result[key] = fn.apply(this, arguments);
        return result[key];
    }
}