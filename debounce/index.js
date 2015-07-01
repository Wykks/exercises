module.exports = debounce;

function debounce(fn, ms) {
    var id;
    return function() {
        clearTimeout(id);
        id = setTimeout(fn.apply.bind(fn, this, arguments), ms);
    }
}
