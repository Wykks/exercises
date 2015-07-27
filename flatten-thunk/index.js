module.exports = flattenThunk;

function flattenThunk(fn) {
    return function(cb) {
        function sub(error, result) {
            if (result instanceof Function) {
                return result(sub);
            }
            cb(error, result);
        }
        fn(sub);
    };
}