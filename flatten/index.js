module.exports = flatten

function flatten(array) {
    function sub(newarray, current) {
        for (var i = 0; i < current.length; i++) {
            if (current[i] instanceof Array)
                sub(newarray, current[i]);
            else
                newarray.push(current[i]);
        }
        return newarray;
    }
    return sub([], array);
}