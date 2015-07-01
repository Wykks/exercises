var Middleware  = (function() {
    
    var funcs = [];
    
    function Middleware() { }
    
    Middleware.prototype.use = function(fn) {
        funcs.push(fn);
    };
    
    Middleware.prototype.go = function(fn) {
        var index = 0;
        var self = this;
        sub();
        function sub() {
            if (index >= funcs.length)
                return fn.call(self);
            funcs[index++].call(self, sub);
        }
    };
    
    return Middleware;
}());

module.exports = Middleware;