var Middleware  = (function() {
    
    var funcs = [];
    
    function Middleware() { }
    
    Middleware.prototype.use = function(fn) {
        funcs.push(fn);
    };
    
    Middleware.prototype.go = function(fn) {
        if (!funcs.length) {
            fn.call(this);
            return;
        }
        funcs[0].call(this, sub(this, 1));

        function sub(self, index) {
            if (index >= funcs.length)
                return fn.bind(self);
            return funcs[index].bind(self, sub(self, index + 1));
        }
    };
    
    return Middleware;
}());

module.exports = Middleware;