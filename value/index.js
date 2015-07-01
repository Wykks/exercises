module.exports = value;

function value(val) {
    if (val instanceof Function)
        return value(val());
    return val;
}